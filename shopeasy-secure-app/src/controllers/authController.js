const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    username: req.body.username,
    password: hashed
  });

  res.json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  req.session.user = {
    id: user._id,
    role: user.role
  };

  res.json({ message: "Login successful" });
};