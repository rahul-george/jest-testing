function capitalise(text) {
    if (typeof text !== "string")
        throw new Error(`${text} is not a valid string`);
    if (text === "") return "";
    return text[0].toUpperCase() + text.slice(1);
}

function reverseString(text) {
    if (typeof text !== "string")
        throw new Error(`${text} is not a valid string`);
    arr = [];
    for (let i = text.length - 1; i >= 0; i--) {
        arr.push(text[i]);
    }
    return arr.join("");
}

export { capitalise, reverseString };
