class AppError extends Error {
  constructor(msg, code) {
    super(msg);
    this.statusCode = code;
    this.isOperational = true;
  }
}

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.isOperational) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: "Internal server error" });
};

// Usage
app.get('/user/:id', (req, res, next) => {
  if (req.params.id !== "1") {
    return next(new AppError("User not found", 404));
  }
  res.send("User found");
});

app.use(errorHandler);