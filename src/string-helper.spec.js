const { capitalise } = require("./string-helper");

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
