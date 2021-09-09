export const getLastWordLength = str => {
    let lastLength = 0;
    let firstStep = 1;
    for (let i = str.length - firstStep; i >= 0; i--) {
        if (str[i] === ' ') {
            firstStep++;
        } else {
            break;
        };
    };
    for (let i = str.length - firstStep; i >= 0; i--) {
        if (str[i] === ' ') {
            break;
        };
            lastLength++;
    };
    return lastLength;
};