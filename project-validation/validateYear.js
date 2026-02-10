module.exports = (req, res, next) => {
  const { year } = req.body;

  if (!year || isNaN(year)) {
    return res.status(400).json({ message: "Year must be number" });
  }

  if (year < 1500 || year > new Date().getFullYear()) {
    return res.status(400).json({ message: "Invalid year range" });
  }

  next();
};
