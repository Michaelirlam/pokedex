import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    { input: "hello, world", expected: ["hello,", "world"] },
    { input: "  hello,  world  ", expected: ["hello,", "world"] },
    { input: "HELLO, WORLD", expected: ["hello,", "world"] },
    { input: "HeLlO, wOrLd", expected: ["hello,", "world"]}
])("cleanInput($input)", ({ input, expected }) => {
    test(`expected ${expected}`, () => {
        const result = cleanInput(input);
        expect(result).toHaveLength(expected.length);
        for (const i in expected) {
            expect(result[i]).toBe(expected[i]);
        }
    });
});