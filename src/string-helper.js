function capitalise(text) {
    if (typeof text !== "string")
        throw new Error(`${text} is not a valid string`);
    if (text === "") return "";
    return text[0].toUpperCase() + text.slice(1);
}

module.exports = { capitalise };
