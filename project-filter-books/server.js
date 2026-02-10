const express = require("express");
const books = require("./booksData");

const app = express();

app.get("/books", (req, res) => {
  let result = [...books];

  const { author, year } = req.query;

  if (author) {
    result = result.filter(b => b.author.toLowerCase() === author.toLowerCase());
  }

  if (year) {
    result = result.filter(b => b.year === Number(year));
  }

  res.json(result);
});

app.listen(3000, () => console.log("Server running"));
