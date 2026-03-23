import express from 'express';
const router=express.Router();
router.get("/", (req, res) => {
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
export default router;