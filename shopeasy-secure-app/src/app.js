const express = require("express");
const cors = require("cors");

const helmetConfig = require("./config/helmet");
const sessionConfig = require("./config/session");
const sanitize = require("./middleware/sanitize");
const { apiLimiter } = require("./middleware/rateLimiter");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/*app.use(helmetConfig);
app.use(sessionConfig);
app.use(sanitize);
app.use(apiLimiter);*/

console.log("SANITIZE RAW:", sanitize);
console.log("SANITIZE TYPE:", typeof sanitize);

console.log("SESSION TYPE:", typeof sessionConfig);
console.log("HELMET TYPE:", typeof helmetConfig);
console.log("LIMITER TYPE:", typeof apiLimiter);

module.exports = app;