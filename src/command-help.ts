import { CLICommand } from "./command-registry.js";

export function commandHelp(registry: Record<string, CLICommand>): void {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const command of Object.values(registry)) {
        console.log(`${command.name}: ${command.description}`)
    }
}