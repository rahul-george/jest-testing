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
    let arr = [];
    for (let i = text.length - 1; i >= 0; i--) {
        arr.push(text[i]);
    }
    return arr.join("");
}

function shiftCharacter(character, shiftFactor) {
    if (character >= "a" && character <= "z") {
        return String.fromCharCode(
            character.charCodeAt(0) + shiftFactor > "z".charCodeAt(0)
                ? character.charCodeAt(0) + shiftFactor - 26
                : character.charCodeAt(0) + shiftFactor
        );
    }

    if (character >= "A" && character <= "Z") {
        return String.fromCharCode(
            character.charCodeAt(0) + shiftFactor > "Z".charCodeAt(0)
                ? character.charCodeAt(0) + shiftFactor - 26
                : character.charCodeAt(0) + shiftFactor
        );
    }

    return character;
}

function caesarCipher(text, shiftFactor) {
    let shiftedArr = Array.from(text).reduce((shiftedArr, character) => {
        shiftedArr.push(shiftCharacter(character, shiftFactor));
        return shiftedArr;
    }, []);
    return shiftedArr.join("");
}

export { capitalise, reverseString, caesarCipher };
