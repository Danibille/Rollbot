import {
	type ChatInputCommandInteraction,
	EmbedBuilder,
	SlashCommandBuilder,
} from "discord.js";
import type { BotCommand } from "../bot/commands.ts";
import { rollFromXp } from "../dice/rolldice.ts";

async function execute(
	interaction: ChatInputCommandInteraction,
): Promise<void> {
	const xp = interaction.options.getString("xp", true);
	const result = rollFromXp(xp);
	if (result === false) {
		await interaction.reply({
			content: `Expressao invalida: ${xp}`,
			flags: ["Ephemeral"],
		});
		return;
	}
	const window = new EmbedBuilder()
		.setColor("DarkPurple")
		.setTitle(`🎲 ${xp}`)
		.setDescription(
			`<@${interaction.user.id}> rolou ${result.total} (${result.values.join(",")})`,
		);
	await interaction.reply({ embeds: [window] });
}

export const rollXp: BotCommand = {
	data: new SlashCommandBuilder()
		.setName("rollxp")
		.setDescription("rolamento de dados")
		.addStringOption((option) =>
			option
				.setName("xp")
				.setDescription("expressao de rolamento de dado! ex: 2d6")
				.setRequired(true),
		),
	execute: execute,
};
