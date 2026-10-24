import { CLICommand } from "./state.js";
import { commandExit } from "./command-exit.js";
import { commandHelp } from "./command-help.js";
import { commandMap, commandMapBack } from "./command-map.js";
import { commandExplore } from "./command-explore.js"
import { commandCatch } from "./command-catch.js";
import { commandInspect } from "./command-inspect.js";
import { commandPokedex } from "./command-pokedex.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays the names of 20 location areas in the Pokemon world",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the names of the previous 20 location areas in the Pokemon world",
            callback: commandMapBack,
        },
        explore: {
            name: "explore",
            description: "Displays names pokemon that can be encountered in the area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempt to catch a Pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect Pokemon in the Pokedex",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Displays all Pokemon names in the Pokedex",
            callback: commandPokedex,
        }
    }
}