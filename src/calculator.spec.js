import { createCalculator } from "./calculator";

describe("Calculator", () => {
    test("createCalculator exists", () => {
        expect(createCalculator).toBeDefined();
    });
});

describe("Add operations", () => {
    let calculator = undefined;
    beforeAll(() => {
        calculator = createCalculator();
    });

    test.todo("Add exists");
    test.todo("Addition of decimals is possible");

    test.each([
        { a: 1, b: 2, sum: 3, case: "positive" },
        { a: -1, b: -2, sum: -3, case: "negative" },
        { a: -1, b: 2, sum: 1, case: "mixed" },
    ])("Sum $case integers", ({ a, b, sum }) => {
        expect(calculator.add(a, b)).toEqual(sum);
    });

    test.each([
        { a: "h", b: 0, case: "a is a string" },
        { b: "h", a: 0, case: "b is a string" },
        { b: undefined, a: 0, case: "b is a undefined" },
        { b: 2, a: false, case: "a is a boolean" },
    ])("Sum when $case", ({ a, b }) => {
        expect(() => {
            calculator.add(a, b);
        }).toThrow();
    });
});

describe("Subtraction operations", () => {
    let calculator = undefined;
    beforeAll(() => {
        calculator = createCalculator();
    });

    test.todo("Subtraction exists");
    test.todo("Subtraction of decimals is possible");

    test.each([
        { a: 20, b: 2, result: 18, case: "positive" },
        { a: -10, b: -20, result: 10, case: "negative" },
        { a: -10, b: 20, result: -30, case: "mixed" },
    ])("Subtract $case integers", ({ a, b, result }) => {
        expect(calculator.subtract(a, b)).toEqual(result);
    });

    test.each([
        { a: "h", b: 0, case: "a is a string" },
        { b: "h", a: 0, case: "b is a string" },
        { b: undefined, a: 0, case: "b is a undefined" },
        { b: 2, a: false, case: "a is a boolean" },
    ])("Subtract when $case", ({ a, b }) => {
        expect(() => {
            calculator.subtract(a, b);
        }).toThrow();
    });
});

describe("Multiplication operations", () => {
    let calculator = undefined;
    beforeAll(() => {
        calculator = createCalculator();
    });

    test.todo("Multiple exists");
    test.todo("Multiplication of decimals is possible");

    test.each([
        { a: 20, b: 2, result: 40, case: "positive" },
        { a: -10, b: -20, result: 200, case: "negative" },
        { a: -10, b: 20, result: -200, case: "mixed" },
    ])("Multiply $case integers", ({ a, b, result }) => {
        expect(calculator.multiply(a, b)).toEqual(result);
    });

    test.each([
        { a: "h", b: 0, case: "a is a string" },
        { b: "h", a: 0, case: "b is a string" },
        { b: undefined, a: 0, case: "b is a undefined" },
        { b: 2, a: false, case: "a is a boolean" },
    ])("Multiply when $case", ({ a, b }) => {
        expect(() => {
            calculator.multiply(a, b);
        }).toThrow();
    });
});

describe.only("Division operations", () => {
    let calculator = undefined;
    beforeAll(() => {
        calculator = createCalculator();
    });

    test.todo("Divide exists");
    test.todo("Division of decimals is possible");

    test.each([
        { a: 20, b: 2, result: 10, case: "positive" },
        { a: -20, b: -10, result: 2, case: "negative" },
        { a: -10, b: 2, result: -5, case: "mixed" },
    ])("Divide $case integers", ({ a, b, result }) => {
        expect(calculator.divide(a, b)).toEqual(result);
    });

    test.each([
        { a: "h", b: 0, case: "a is a string" },
        { b: "h", a: 0, case: "b is a string" },
        { b: undefined, a: 0, case: "b is a undefined" },
        { b: 2, a: false, case: "a is a boolean" },
    ])("Divide when $case", ({ a, b }) => {
        expect(() => {
            calculator.divide(a, b);
        }).toThrow();
    });
});
