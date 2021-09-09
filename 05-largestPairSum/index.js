/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let high1 = numbers[0], high2 = numbers[0];
    for (let a of numbers) {
        if (a>high1) {
            high1 = a;
        }
        if (a>high1 && a>high2) {
            high2 = a;
        }
    }
    return high1 + high2; 
}
