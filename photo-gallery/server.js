import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  const imagesPath = path.join(__dirname, "public", "images");
  fs.readdir(imagesPath, (err, files) => {
    if (err) {
      return res.status(500).send("Error reading images folder");
    }
    const imageFiles = files.filter(file =>
      file.endsWith(".png")
    );

    const totalImages = imageFiles.length;
    const totalPages = Math.ceil(totalImages / limit);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const images = imageFiles.slice(startIndex, endIndex);

    res.render("gallery", {
      images,
      currentPage: page,
      totalPages
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});