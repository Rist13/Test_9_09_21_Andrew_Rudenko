/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let newObject = {};
    for (let a in obj) {
        if (fields.includes(a) === false) {
            newObject[a] = obj[a];
        };
    };
    return newObject;
};
