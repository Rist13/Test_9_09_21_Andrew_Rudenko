/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let arr = numbers.split(" ");
    for (let a of arr) {
        a = Number(a);
    }
    let low = 0,
        high = 0;
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] < arr[low]) {
        low = i;
        };
    };
    for (let i = 0; i<arr.length; i++) {  
        if (arr[i] > arr[high]) {
            high = i;
        }
    };

    if (parseFloat(arr[low]) > parseFloat(arr[high])) { 
        return `${arr[high]} ${arr[low]}`; 
    } else {
        return `${arr[low]} ${arr[high]}`;
    }
}
