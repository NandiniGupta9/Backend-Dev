const express = require("express");
let authors = require("./authorsData");

const app = express();
app.use(express.json());


// CREATE
app.post("/authors", (req, res) => {
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.json(newAuthor);
});


// READ
app.get("/authors", (req, res) => {
  res.json(authors);
});


// READ ONE
app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  res.json(author);
});


// UPDATE
app.put("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  Object.assign(author, req.body);
  res.json(author);
});


// DELETE
app.delete("/authors/:id", (req, res) => {
  authors = authors.filter(a => a.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running"));
