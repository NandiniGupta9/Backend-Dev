module.exports = {
  apps: [{
    name: "app",
    script: "server.js",
    instances: "max",
    exec_mode: "cluster",

    env: {
      NODE_ENV: "production",
      PORT: 3000
    },

    autorestart: true,
    max_memory_restart: "500M",

    error_file: "./logs/error.log",
    out_file: "./logs/out.log"
  }]
};