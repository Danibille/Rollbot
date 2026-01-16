import {
	AttachmentBuilder,
	type ChatInputCommandInteraction,
	EmbedBuilder,
	SlashCommandBuilder,
} from "discord.js";
import type { BotCommand } from "../bot/commands.ts";
import { imgGenerator } from "../dice/imggen.ts";
import { rollFromXp } from "../dice/rolldice.ts";

async function execute(
	interaction: ChatInputCommandInteraction,
): Promise<void> {
	const xp = interaction.options.getString("xp", true);
	const hidden = xp.endsWith("!");
	const result = rollFromXp(xp.replace("!", ""));
	if (result === false) {
		await interaction.reply({
			content: `Expressao invalida: ${xp}`,
			flags: ["Ephemeral"],
		});
		return;
	}

	const img = imgGenerator(result);
	const att = new AttachmentBuilder(img, { name: "result.png" });
	const window = new EmbedBuilder()
		.setColor("DarkPurple")
		.setTitle(`🎲 ${xp}`)
		.setImage("attachment://result.png");
	await interaction.reply({
		embeds: [window],
		files: [att],
		flags: hidden ? ["Ephemeral"] : [],
	});
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
