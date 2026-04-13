const session = require("express-session");
const MongoStore = require("connect-mongo");

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: "sessions"
});

const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 30
  },
  store
});

module.exports = sessionConfig;