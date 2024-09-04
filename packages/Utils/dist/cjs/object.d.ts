/**
 * Remove Duplicate objects from JSON Array
 * @param {Array} obj
 * @param {String} fieldName
 */
declare function removeArrDuplicateItems(obj: any[], fieldName: string): any[];
/**
 * Deep clone
 * @param {*} obj
 */
declare function deepClone(obj: any): any;
/**
 * Flat Data
 * @param {*} data
 * @returns
 */
declare function flatData(data: any): any[];
export { removeArrDuplicateItems, deepClone, flatData };
