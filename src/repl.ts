import { createInterface } from "node:readline";
import { getCommands } from "./command-registry.js";

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    rl.prompt();
    rl.on("line", (line => {
        const input = cleanInput(line);
        if (input.length === 0) rl.prompt();


        if (input[0] in commands) {
            commands[input[0]].callback(commands);
        } 

        rl.prompt();
    }))
}

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter(word => word !== "");
}