require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const logger = require("morgan");
const healthRoute = require("./routes/health");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(logger(process.env.LOG_LEVEL || "dev"));

// Performance monitoring
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
  });
  next();
});

// Routes
app.use("/health", healthRoute);

app.get("/", (req, res) => {
  res.send(`App running in ${process.env.NODE_ENV}`);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server Error" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});