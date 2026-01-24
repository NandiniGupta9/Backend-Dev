const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

async function syncDirectories(sourceDir, targetDir) {
  try {
    await fsp.mkdir(targetDir, { recursive: true });

    const files = await fsp.readdir(sourceDir);

    for (const file of files) {
      const srcPath = path.join(sourceDir, file);
      const destPath = path.join(targetDir, file);

      const srcStat = await fsp.stat(srcPath);

      if (srcStat.isDirectory()) {
        await syncDirectories(srcPath, destPath);
      } else {
        let copy = false;

        try {
          const destStat = await fsp.stat(destPath);
          if (srcStat.mtimeMs > destStat.mtimeMs) {
            copy = true;
          }
        } catch {
          copy = true; // File does not exist
        }

        if (copy) {
          await copyFile(srcPath, destPath);
          console.log(`Synced: ${file}`);
        }
      }
    }
  } catch (err) {
    console.error("Sync Error:", err.message);
  }
}

function copyFile(src, dest) {
  return new Promise((resolve, reject) => {
    const rs = fs.createReadStream(src);
    const ws = fs.createWriteStream(dest);

    rs.on("error", reject);
    ws.on("error", reject);
    ws.on("finish", resolve);

    rs.pipe(ws);
  });
}

// Run
const [, , src, dest] = process.argv;
syncDirectories(path.resolve(src), path.resolve(dest));
