module.exports = {
  apps: [
    {
      name: "next-app",
      args: "start",
      script: "npm",
      watch: ".",
      autorestart: true,
      ignore_watch: ["node_modules"],
      env: {
        NODE_ENV: "production",
        PORT: "8081",
      },
    },
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
