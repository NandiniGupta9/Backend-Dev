const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("contact");
});

router.post("/", (req, res) => {
    const { name, message } = req.body;
    res.send(`Thank you ${name}, message received!`);
});

module.exports = router;
