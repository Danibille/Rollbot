export function rolldice(face: string): number {
	return Math.floor(Math.random() * Number(face)) + 1;
}
