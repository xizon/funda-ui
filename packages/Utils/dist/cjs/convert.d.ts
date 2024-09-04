/**
 * Convert value to string separated by square brackets
 * @param {string} str  such as: 1,2,3
 * @returns {string} such as: [1][2][3]
 */
declare function convertStringByCommaToValByBrackets(str: string): string;
/**
 * Convert array value to string  separated by square brackets
 * @param {string[]} arr  such as: ['1','2','3']
 * @returns {string} such as: [1][2][3]
 */
declare function convertArrToValByBrackets(arr: string[]): string;
/**
 * Convert value to string separated by curly braces
 * @param {string} str  such as: 1,2,3
 * @returns {string} such as: {1}{2}{3}
 */
declare function convertStringByCommaToValByBraces(str: string): string;
/**
 * Convert array value to string  separated by curly braces
 * @param {string[]} arr  such as: ['1','2','3']
 * @returns {string} such as: {1}{2}{3}
 */
declare function convertArrToValByBraces(arr: string[]): string;
export { convertStringByCommaToValByBrackets, convertArrToValByBrackets, convertStringByCommaToValByBraces, convertArrToValByBraces };
