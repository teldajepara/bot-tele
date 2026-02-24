module.exports = {
    apps: [{
        name: "telkom-bot",
        script: "./src/app.js",
        watch: false,
        env: {
            NODE_ENV: "production",
            PORT: 3000
        },
        env_development: {
            NODE_ENV: "development",
            PORT: 3000
        }
    }]
};
