// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let out = [];
    if (size === 0) {
        return out;
    }
    let chunkNum = Math.floor(arr.length / size),
        leTrunc = arr.length - chunkNum * size;
    for (let i = 0, j = 0; i < arr.length && j < chunkNum; i += size, j++) {
        out = [...out, arr.slice(i, i + size)];
    }
    if (leTrunc !== 0) {
        out = [...out, arr.slice(-leTrunc)];
    }
    return out;
};
