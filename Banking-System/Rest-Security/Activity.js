const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: String,
  sessionId: String,
  action: String,
  ip: String,
  time: { type: Date, default: Date.now }
});

const SessionLog = mongoose.model('SessionLog', schema);

const logActivity = (action) => async (req, res, next) => {
  if (req.session.user) {
    await SessionLog.create({
      userId: req.session.user,
      sessionId: req.session.id,
      action,
      ip: req.ip
    });
  }
  next();
};

// Usage
app.post('/login', logActivity('login'), (req, res) => {
  res.send("Logged in");
});