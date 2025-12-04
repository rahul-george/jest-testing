const createCalculator = function () {
    const isNumber = function isNumber(a) {
        if (typeof a !== "number") {
            throw new Error("Only numbers are accepted");
        }
    };

    const add = function add(a, b) {
        isNumber(a);
        isNumber(b);
        return a + b;
    };

    const sub = function sub(a, b) {
        isNumber(a);
        isNumber(b);
        return a - b;
    };

    const multiply = function multiply(a, b) {
        isNumber(a);
        isNumber(b);
        return a * b;
    };

    const divide = function divide(a, b) {
        isNumber(a);
        isNumber(b);
        if (b === 0) {
            throw new Error("Division by Zero is not possible");
        }
        return a / b;
    };
    return {
        add: add,
        subtract: sub,
        multiply: multiply,
        divide: divide,
    };
};

export { createCalculator };
