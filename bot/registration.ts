import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { commands } from "./commands.ts";

const serverid = process.env.SERVER_ID!;
const token = process.env.CLIENT_SECRET!;
console.log(token);
const clientid = process.env.CLIENT_ID!;
const restclient = new REST().setToken(token);
const route = Routes.applicationGuildCommands(clientid, serverid);
await restclient.put(route, {
	body: [...commands.map((cmd) => cmd.data.toJSON())],
});
