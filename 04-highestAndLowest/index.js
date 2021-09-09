/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let arr = numbers.split(' ')
    for (let a of arr) {
        a = Number(a);
    } 
    let low = arr[0], high = arr[0];
    for (let a of arr) {
        if (a<low) {
            low = a;
        }
        if (a>high) {
            high = a;
        }
    }
    return `${low} ${high}`
}
