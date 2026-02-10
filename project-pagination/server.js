const express = require("express");
const books = require("./booksData");

const app = express();

app.get("/books", (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;

  const start = (page - 1) * limit;
  const end = start + limit;

  res.json(books.slice(start, end));
});

app.listen(3000, () => console.log("Server running"));
