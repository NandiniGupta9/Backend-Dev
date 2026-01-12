const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const wordCount = data.trim().split(/\s+/).length;
  const result = `Word Count: ${wordCount}`;

  fs.writeFile("output.txt", result, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Word count written to output.txt");
    }
  });
});
