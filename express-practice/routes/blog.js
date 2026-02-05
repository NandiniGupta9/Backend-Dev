const express = require("express");
const router = express.Router();

let posts = [
    { id: 1, title: "First Post", content: "Hello Blog!" }
];

router.get("/", (req, res) => {
    res.render("blog", { posts });
});

router.get("/new", (req, res) => {
    res.render("newpost");
});

router.post("/", (req, res) => {
    const { title, content } = req.body;

    posts.push({
        id: posts.length + 1,
        title,
        content
    });

    res.redirect("/blog");
});

router.get("/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render("post", { post });
});

module.exports = router;
