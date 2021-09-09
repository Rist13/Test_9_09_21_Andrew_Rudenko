/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let high1 = 0,
    high2 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[high1]) {
      high1 = i;
    }
  }
  if (high1 === 0) {
    high2 = 1;
  }
  for (let i = high2; i < numbers.length; i++) {
    if (i === high1) {
      continue;
    }
    if (numbers[i] > numbers[high2]) {
      high2 = i;
    }
  }
  return numbers[high1] + numbers[high2];
}