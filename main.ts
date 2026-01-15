import { start } from "./bot/bot.ts";

const token = process.env.CLIENT_SECRET!;

await start(token);
