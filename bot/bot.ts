import { Client, Events, GatewayIntentBits } from "discord.js";
import { commands } from "./commands.ts";

export async function start(token: string): Promise<void> {
	const client = new Client({ intents: [GatewayIntentBits.Guilds] });
	client.once(Events.ClientReady, (c) => {
		console.log(c.user.displayName);
	});
	client.on(Events.InteractionCreate, async (i) => {
		if (!i.isCommand()) {
			return;
		}
		const cmd = commands.find((cmd) => cmd.data.name === i.commandName);
		if (!cmd) {
			i.reply("comando não encontrado");
			return;
		}
		if (i.isChatInputCommand()) {
			await cmd.execute(i);
		}
	});
	await client.login(token);
}
