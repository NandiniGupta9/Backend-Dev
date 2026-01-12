const os = require("os");
const fs = require("fs");

setInterval(() => {
  const log = `
Time: ${new Date().toLocaleString()}
Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
Free Memory: ${os.freemem()}
----------------------------
`;

  fs.appendFile("system.log", log, (err) => {
    if (err) console.error(err);
  });

  console.log("System info logged");
}, 5000);
