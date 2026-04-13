const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  const review = await Review.create({
    userId: req.session.user.id,
    productId: req.body.productId,
    comment: req.body.comment // already sanitized
  });

  res.json(review);
};