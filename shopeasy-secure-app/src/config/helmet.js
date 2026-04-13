const helmet = require("helmet");

const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://www.youtube.com"],
      frameSrc: ["https://www.youtube.com"],
      imgSrc: ["'self'", "https://res.cloudinary.com"],
      connectSrc: ["'self'"],
    }
  },
  crossOriginEmbedderPolicy: false
});

module.exports = helmetConfig;