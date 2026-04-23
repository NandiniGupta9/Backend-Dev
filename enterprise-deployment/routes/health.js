const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

module.exports = router;