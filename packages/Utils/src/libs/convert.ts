/**
 * Convert value to string separated by square brackets 
 * @param {String} str  such as: 1,2,3
 * @returns {String} such as: [1][2][3]
 */
function convertStringByCommaToValByBrackets(str: string): string {
    if (typeof str === 'undefined' || str === null || str === '') {
        return '';
    }

    return str.split(',').map((v) => v.toString().includes('[') && v.toString().includes(']') ? `${v}` : `[${v}]`).join('');
}


/**
 * Convert array value to string  separated by square brackets 
 * @param {String[]} arr  such as: ['1','2','3']
 * @returns {String} such as: [1][2][3]
 */
function convertArrToValByBrackets(arr: string[]): string {
    if (!Array.isArray(arr)) return '';
    
    return arr.map((v) => v.toString().includes('[') && v.toString().includes(']') ? `${v}` : `[${v}]`).join('');
}



/**
 * Convert value to string separated by curly braces
 * @param {String} str  such as: 1,2,3
 * @returns {String} such as: {1}{2}{3}
 */
function convertStringByCommaToValByBraces(str: string): string {
    if (typeof str === 'undefined' || str === null || str === '') {
        return '';
    }
    
    return str.split(',').map((v) => v.toString().includes('{') && v.toString().includes('}') ? `${v}` : `{${v}}`).join('');
}


/**
 * Convert array value to string  separated by curly braces
 * @param {String[]} arr  such as: ['1','2','3']
 * @returns {String} such as: {1}{2}{3}
 */
function convertArrToValByBraces(arr: string[]): string {
    if (!Array.isArray(arr)) return '';
    
    return arr.map((v) => v.toString().includes('{') && v.toString().includes('}') ? `${v}` : `{${v}}`).join('');
}


export {
    convertStringByCommaToValByBrackets,
    convertArrToValByBrackets,
    convertStringByCommaToValByBraces,
    convertArrToValByBraces
}