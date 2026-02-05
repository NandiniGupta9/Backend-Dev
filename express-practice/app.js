const express = require("express");
const path = require("path");

const userRoutes = require("./routes/users");
const blogRoutes = require("./routes/blog");
const contactRoutes = require("./routes/contact");
const responseLogger = require("./middleware/responseLogger");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(responseLogger);

app.use("/users", userRoutes);
app.use("/blog", blogRoutes);
app.use("/contact", contactRoutes);

app.get("/gallery", (req, res) => {
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    res.render("gallery", { images });
});

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
