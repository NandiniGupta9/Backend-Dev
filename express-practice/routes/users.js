const express = require("express");
const router = express.Router();

const users = ["Rahul", "Amit", "Sita", "Rohan"];

router.get("/", (req, res) => {
    const name = req.query.name;

    if (name) {
        const filtered = users.filter(u =>
            u.toLowerCase().includes(name.toLowerCase())
        );
        return res.json(filtered);
    }

    res.json(users);
});

module.exports = router;
