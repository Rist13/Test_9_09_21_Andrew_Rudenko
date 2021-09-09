export const sameParityFilter = (arr = []) => {
    let out = [];
    if (Math.abs(arr[0]) % 2 === 0) {
        out = arr.filter((x) => {
            Math.abs(arr[0]) % 2 === 0
        });
    } else {
        out = arr.filter((x) => {
            Math.abs(arr[0]) % 2 !== 0
        });
    };
    return out;
}
