import { State } from "./state.js";



export async function commandExplore(state: State, location: string) {
    const pokemonData = (await state.pokeAPI.fetchLocation(location));
    console.log(`Exploring ${pokemonData.name}...`);
    console.log("Found Pokemon:")
    const encounterData = pokemonData?.pokemon_encounters;
    for (const data of encounterData) {
      console.log(`- ${data.pokemon.name}`)
    }
}