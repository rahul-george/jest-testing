import { capitalise, reverseString, caesarCipher } from "./string-helper";

describe("Test Capitalise", () => {
    test("capitalise exists", () => {
        expect(capitalise).toBeDefined();
    });

    test.each([
        ["a", "A"],
        ["ab", "Ab"],
        ["Disney", "Disney"],
        ["iRon Man", "IRon Man"],
        ["", ""],
        ["4pple", "4pple"],
    ])("capitalises first character - %s", (text, output) => {
        expect(capitalise(text)).toMatch(output);
    });

    test.each([[0], [true]])(
        "capitalize when non-strings are passed - %s",
        (text) => {
            expect(() => {
                capitalise(text);
            }).toThrow();
        }
    );
});

describe("Reverse string", () => {
    test("reverse string exists", () => {
        expect(reverseString).toBeDefined();
    });

    test.each([
        { text: "hello", output: "olleh" },
        { text: "hello World", output: "dlroW olleh" },
        { text: "", output: "" },
    ])("reverses string - $text", ({ text, output }) => {
        expect(reverseString(text)).toMatch(output);
    });

    test.each([0, false, 4.2])("Errors on non-strings - %s", (text) => {
        expect(() => {
            reverseString(text);
        }).toThrow();
    });
});

describe("Caesar Cipher", () => {
    test("caesarCipher exists", () => {
        expect(caesarCipher).toBeDefined();
    });

    test.each([
        { text: "abc", shiftFactor: 3, output: "def" },
        { text: "abc?", shiftFactor: 3, output: "def?" },
        { text: "a0c?", shiftFactor: 3, output: "d0f?" },
        { text: "xyz", shiftFactor: 3, output: "abc" },
        { text: "HeLLo", shiftFactor: 3, output: "KhOOr" },
        { text: "Hello, World!", shiftFactor: 3, output: "Khoor, Zruog!" },
    ])(
        "shifts string by shiftFactor - $text",
        ({ text, shiftFactor, output }) => {
            expect(caesarCipher(text, shiftFactor)).toMatch(output);
        }
    );
});
