/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let out = '';
    for (let i = 0; i < str.length; i++) {    
        out += str[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            out += str[i].toLowerCase();
        }
        out += '-';
    }
    return out.slice(0, -1);
}