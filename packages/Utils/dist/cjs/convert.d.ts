/**
 * Convert value to string separated by square brackets
 * @param {String} str  such as: 1,2,3
 * @returns {String} such as: [1][2][3]
 */
declare function convertStringByCommaToValByBrackets(str: string): string;
/**
 * Convert array value to string  separated by square brackets
 * @param {String[]} arr  such as: ['1','2','3']
 * @returns {String} such as: [1][2][3]
 */
declare function convertArrToValByBrackets(arr: string[]): string;
/**
 * Convert value to string separated by curly braces
 * @param {String} str  such as: 1,2,3
 * @returns {String} such as: {1}{2}{3}
 */
declare function convertStringByCommaToValByBraces(str: string): string;
/**
 * Convert array value to string  separated by curly braces
 * @param {String[]} arr  such as: ['1','2','3']
 * @returns {String} such as: {1}{2}{3}
 */
declare function convertArrToValByBraces(arr: string[]): string;
export { convertStringByCommaToValByBrackets, convertArrToValByBrackets, convertStringByCommaToValByBraces, convertArrToValByBraces };
