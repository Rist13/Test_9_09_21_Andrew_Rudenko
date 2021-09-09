/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let newObject = {};
    for (let a of fields) {
        if (obj.hasOwnProperty(a)) {
            newObject[a] = obj[a];
        };
    };
    return newObject;
};
