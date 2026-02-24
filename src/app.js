const createBot = require("./bot");
const startServer = require("./server");
const db = require("./db/database");

const bot = createBot();

bot.launch();
console.log("Bot berjalan...");

startServer();

const gracefulShutdown = async (signal) => {
    console.log(`\n${signal} diterima. Menutup layanan...`);
    bot.stop(signal);
    await db.closeDatabase();
    console.log("Database ditutup. Keluar...");
    process.exit(0);
};

process.once("SIGINT", () => gracefulShutdown("SIGINT"));
process.once("SIGTERM", () => gracefulShutdown("SIGTERM"));
