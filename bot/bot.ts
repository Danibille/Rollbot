import { Client, GatewayIntentBits, Events } from "discord.js";
import { rolldice } from "../dice/rolldice.ts";

export async function start(token: string): Promise<void> {
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    client.once(Events.ClientReady, (c) => { console.log(c.user.displayName) });
    client.on(Events.InteractionCreate, async (i) => {
        if (!i.isCommand()) {
            return;
        }
        const result = `${rolldice(i.commandName)}`;
        await i.reply(result);
    });
    await client.login(token);
}