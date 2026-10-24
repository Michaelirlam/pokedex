import { State } from "./state.js";

export async function commandPokedex(state: State): Promise<void> {
    for (const [name, pokemon] of Object.entries(state.pokedex)) {
        console.log(`  -  ${name}`);
    }
}