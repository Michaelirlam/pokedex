import { getCommands } from "./commands.js";
import { initState } from "./state.js";

export function startREPL() {
    const state = initState();
    state.readline.prompt();
    state.readline.on("line", (line => {
        const input = cleanInput(line);
        if (input.length === 0) return state.readline.prompt();

        if (input[0] in state.commands) {
            state.commands[input[0]].callback(state);
        } 

        state.readline.prompt();
    }))
}

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter(word => word !== "");
}