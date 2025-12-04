function throwIfNotString(text) {
    if (typeof text !== "string")
        throw new Error(`${text} is not a valid string`);
}

function capitalise(text) {
    throwIfNotString(text);
    if (text === "") return "";
    return text[0].toUpperCase() + text.slice(1);
}

function reverseString(text) {
    throwIfNotString(text);
    arr = [];
    for (let i = text.length - 1; i >= 0; i--) {
        arr.push(text[i]);
    }
    return arr.join("");
}

export { capitalise, reverseString };
