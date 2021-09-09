export const sameParityFilter = (arr = []) => {
    let out = [];
    if (arr[0] % 2 === 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                out.push(arr[i]);
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                out.push(arr[i]);
            }
        }
    }
    return out;
}
