import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([ // Tests cleanInput
    { input: "hello, world", expected: ["hello,", "world"] }, // works with normal text
    { input: "  hello,  world  ", expected: ["hello,", "world"] }, // works with leading and trailing white space
    { input: "HELLO, WORLD", expected: ["hello,", "world"] }, // converts uppercase to lowercase
    { input: "HeLlO, wOrLd", expected: ["hello,", "world"]} // converts a combination of upper and lower to lowercase
])("cleanInput($input)", ({ input, expected }) => {
    test(`expected ${expected}`, () => {
        const result = cleanInput(input);
        expect(result).toHaveLength(expected.length);
        for (const i in expected) {
            expect(result[i]).toBe(expected[i]);
        }
    });
});