const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET = "secret";

let users = [{ id: 1, balance: 5000 }];
let txns = [];

// auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(401).send("Unauthorized");
  }
};

// login
app.post('/login', (req, res) => {
  const token = jwt.sign({ id: 1 }, SECRET);
  res.json({ token });
});

// transfer
app.post('/transfer', auth, (req, res) => {
  const { to, amount } = req.body;

  const sender = users.find(u => u.id === req.user.id);
  const receiver = users.find(u => u.id === to);

  if (!receiver || amount <= 0 || amount > sender.balance) {
    return res.status(400).send("Invalid transaction");
  }

  sender.balance -= amount;
  receiver.balance += amount;

  txns.push({ from: sender.id, to, amount });

  res.send("Success");
});