const express = require("express");
const books = require("./booksData");

const app = express();

app.get("/books/search", (req, res) => {
  const { title } = req.query;

  const result = books.filter(b =>
    b.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(result);
});

app.listen(3000, () => console.log("Server running"));
