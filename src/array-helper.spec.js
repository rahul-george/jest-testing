import { analyzeArray } from "./array-helper";

describe("Analyze Array", () => {
    test("analyzeArray exists", () => {
        expect(analyzeArray).toBeDefined();
    });

    test.each([{ arr: {} }, { arr: ["abc", "cde"] }, { arr: undefined }])(
        "Accepts only array of numbers",
        ({ arr }) => {
            expect(() => {
                analyzeArray(arr);
            }).toThrow();
        }
    );

    test.each([
        {
            arr: [1, 2, 3, 4, 5],
            output: { average: 3, min: 1, max: 5, length: 5 },
        },
        {
            arr: [1, 8, 3, 4, 2, 6],
            output: { average: 4, min: 1, max: 8, length: 6 },
        },
    ])("Valid result", ({ arr, output }) => {
        const response = analyzeArray(arr);
        expect(response).toMatchObject(output);
    });
});
