const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

async function readFile(filePath) {
  try {
    const data = await fsp.readFile(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.error("Read Error:", err.message);
  }
}

async function writeFile(filePath, content) {
  try {
    await fsp.writeFile(filePath, content, "utf8");
    console.log("File written successfully");
  } catch (err) {
    console.error("Write Error:", err.message);
  }
}

function copyFile(src, dest) {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);

    readStream.on("error", reject);
    writeStream.on("error", reject);

    writeStream.on("finish", resolve);
    readStream.pipe(writeStream);
  });
}

async function deleteFile(filePath) {
  try {
    await fsp.unlink(filePath);
    console.log("File deleted");
  } catch (err) {
    console.error("Delete Error:", err.message);
  }
}

async function listDirectory(dirPath) {
  try {
    const files = await fsp.readdir(dirPath);
    files.forEach(file => console.log(file));
  } catch (err) {
    console.error("List Error:", err.message);
  }
}

// CLI handling
const [, , command, ...args] = process.argv;

(async () => {
  switch (command) {
    case "read":
      await readFile(path.resolve(args[0]));
      break;
    case "write":
      await writeFile(path.resolve(args[0]), args.slice(1).join(" "));
      break;
    case "copy":
      await copyFile(path.resolve(args[0]), path.resolve(args[1]));
      console.log("File copied");
      break;
    case "delete":
      await deleteFile(path.resolve(args[0]));
      break;
    case "list":
      await listDirectory(path.resolve(args[0]));
      break;
    default:
      console.log("Commands: read | write | copy | delete | list");
  }
})();
