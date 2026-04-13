const router = require("express").Router();
const { addReview } = require("../controllers/reviewController");
const isAuthenticated = require("../middleware/authMiddleware");

router.post("/", isAuthenticated, addReview);

module.exports = router;