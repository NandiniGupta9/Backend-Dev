const fs = require("fs");
const readline = require("readline");
const path = require("path");

async function analyzeLog(filePath) {
  const stats = {
    INFO: 0,
    WARN: 0,
    ERROR: 0,
    total: 0
  };

  try {
    const stream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    });

    for await (const line of rl) {
      stats.total++;
      if (line.startsWith("INFO")) stats.INFO++;
      else if (line.startsWith("WARN")) stats.WARN++;
      else if (line.startsWith("ERROR")) stats.ERROR++;
    }

    console.log("📊 Log Summary");
    console.log(stats);
  } catch (err) {
    console.error("Log Analysis Error:", err.message);
  }
}

// Run
const logFile = process.argv[2];
analyzeLog(path.resolve(logFile));
