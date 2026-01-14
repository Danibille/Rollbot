export function rolldice(name: string): number {
    const map = new Map<string, number>();
    map.set("d3", 3);
    map.set("d4", 4);
    map.set("d6", 6);
    map.set("d8", 8);
    map.set("d10", 10);
    map.set("d12", 12);
    map.set("d20", 20);
    map.set("d50", 50);
    const face = map.get(name);
    return Math.floor(Math.random() * (face!)) + 1;
}