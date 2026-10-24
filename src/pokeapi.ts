import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache = new Cache(60_000);

  constructor() {}

  async fetchAndCacheLocations<T>(url: string): Promise<T> {
    const fromCache = this.#cache.get<T>(url);
    if (fromCache) {
      return fromCache
    }
    const response = await fetch(url);
    const data = await response.json()
    this.#cache.add(url, data)
    return data;
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    return await this.fetchAndCacheLocations<ShallowLocations>(url);
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    return await this.fetchAndCacheLocations<Location>(url);
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string |null;
  results: LocationAreaResult[];
};

export type Location = {
  id: number;
  name: string;
  gameIndex: number;
  encounterMethodRates: object[];
  location: object;
  names: object[];
  pokemon_encounters: PokemonEncounter[];
};

export type LocationAreaResult = {
    name: string;
    url: string;
}

type PokemonEncounter = {
  pokemon: { name: string; url: string };
};