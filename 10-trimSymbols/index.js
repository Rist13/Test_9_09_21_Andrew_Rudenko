/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number | undefined} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size = string.length) {
    let out = "", symbol = "", count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === symbol) {
        count++;
        if (count <= size) {
            out += string[i];
        };  
        } else if (!(string[i] === symbol) && (size >= 1)) {
            count = 1;
            symbol = string[i];
            out += string[i];
        };
    };
    return out;
}
