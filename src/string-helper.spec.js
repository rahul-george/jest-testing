import { capitalise, reverseString } from "./string-helper";

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
