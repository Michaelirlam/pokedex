import { Pokemon, Stat, Type } from "./command-catch.js";
import { State } from "./state.js";

export async function commandInspect(state: State, name: string): Promise<void> {
    const pokemon = state.pokedex[name] ?? console.log("You have not caught this Pokemon!");
    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log("Stats:");
    const stats: Stat[] = pokemon.stats
    for (const stat of stats) {
        console.log(`  ${stat.stat.name}: ${stat.base_stat}`);
    }
    const poketypes: Type[] = pokemon.types
    console.log("Types:")
    for (const poketype of poketypes) {
        console.log(`  - ${poketype.type.name}`);
    }
}