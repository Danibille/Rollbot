import { REST, Routes, SlashCommandBuilder } from "discord.js";

const serverid = process.env.SERVER_ID!;
const token = process.env.CLIENT_SECRET!;
console.log(token);
const clientid = process.env.CLIENT_ID!;
const restclient = new REST().setToken(token);
const route = Routes.applicationGuildCommands(clientid, serverid);
await restclient.put(route, {
    body: [new SlashCommandBuilder().setName("d3").setDescription("d3"),
    new SlashCommandBuilder().setName("d4").setDescription("d4"),
    new SlashCommandBuilder().setName("d6").setDescription("d6"),
    new SlashCommandBuilder().setName("d8").setDescription("d8"),
    new SlashCommandBuilder().setName("d10").setDescription("d10"),
    new SlashCommandBuilder().setName("d12").setDescription("d12"),
    new SlashCommandBuilder().setName("d20").setDescription("d20")
    ]
})