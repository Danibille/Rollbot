import {
	type ChatInputCommandInteraction,
	SlashCommandBuilder,
} from "discord.js";
import type { BotCommand } from "../bot/commands.ts";
import { rollDice } from "../dice/rolldice.ts";

async function execute(
	interaction: ChatInputCommandInteraction,
): Promise<void> {
	const faces = interaction.options.getInteger("faces");
	if (!faces) {
		throw new Error("nao foi");
	}
	const result = rollDice(faces.toString());
	await interaction.reply(result.toString());
}

export const roll: BotCommand = {
	data: new SlashCommandBuilder()
		.setName("roll")
		.setDescription("roll")
		.addIntegerOption((option) =>
			option
				.setName("faces")
				.setDescription("dicefaces")
				.setRequired(true)
				.addChoices([
					{ name: "3", value: 3 },
					{ name: "4", value: 4 },
					{ name: "6", value: 6 },
					{ name: "8", value: 8 },
					{ name: "10", value: 10 },
					{ name: "12", value: 12 },
					{ name: "20", value: 20 },
				]),
		),
	execute: execute,
};
