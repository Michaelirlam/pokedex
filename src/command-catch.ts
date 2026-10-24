import { State } from "./state.js";

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: object[];
    forms: object[];
    game_indices: object[];
    held_items: object[];
    moves: object[];
    species: object;
    sprites: object;
    cries: object;
    stats: Stat[];
    types: Type[];
    past_types: object[];
    past_abilities: object[];
}

export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export type Type = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
} 

export async function commandCatch(state: State, pokemon: string): Promise<void> {
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const data: Pokemon = await response.json()
    const caught = isCaught(data.base_experience);
    if (caught) {
        console.log(`${pokemon} was caught!`);
        state.pokedex[pokemon] = data;
    } else {
        console.log(`${pokemon} escaped!`);
    }
}

function isCaught(experience: number) {
    const minXP = 36;
    const maxXP = 608;
    const minChance = 20;
    const maxChance = 90;

    const xp = Math.max(minXP, Math.min(maxXP, experience));
    const chance = maxChance -
        ((xp - minXP) / (maxXP - minXP)) *
        (maxChance - minChance);

    return (Math.random() * 100) < chance;
}
