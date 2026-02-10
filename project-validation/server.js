const express = require("express");
const validateYear = require("./validateYear");

const app = express();
app.use(express.json());

app.post("/books", validateYear, (req, res) => {
  res.json({ message: "Book added", book: req.body });
});

app.listen(3000, () => console.log("Server running"));
