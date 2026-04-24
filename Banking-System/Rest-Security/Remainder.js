const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

const users = [{ username: "nandini", password: "$2b$10$abc" }]; // hashed

app.post('/login', async (req, res) => {
  const { username, password, rememberMe } = req.body;

  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  req.session.user = username;

  req.session.cookie.maxAge = rememberMe
    ? 30 * 24 * 60 * 60 * 1000
    : 24 * 60 * 60 * 1000;

  res.json({ message: "Login success" });
});