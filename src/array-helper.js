function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Expects an array");
    } else if (!arr.every((value) => typeof value === "number"))
        throw new Error("Expects all elements to be numbers");

    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
        average: arr.reduce((acc, val) => (acc += val), 0) / arr.length,
        length: arr.length,
    };
}

export { analyzeArray };
