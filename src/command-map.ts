import { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    const map = await state.pokeAPI.fetchLocations(state.nextLocationsURL ?? undefined);
    state.nextLocationsURL = map.next;
    state.prevLocationsURL = map.previous;
    for (const location of map.results) {
        console.log(location.name);
    }
}

export async function commandMapBack(state: State): Promise<void> {
    if (state.prevLocationsURL === null) {
        console.log("you're on the first page");
        return;
    }
    const map = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = map.next;
    state.prevLocationsURL = map.previous;
    for (const location of map.results) {
        console.log(location.name);
    }
}