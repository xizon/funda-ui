/**
 * Evaluating a string as a mathematical expression
 * @param {String} s      - An input string
 * @returns {Number}   - New calculation result.
 */
declare function evaluate(s: string): number;
/**
 * Addition
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number}
 */
declare function calcAdd(num1: number, num2: number): number;
/**
 * Subtraction
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number}
 */
declare function calcSub(num1: number, num2: number): string;
/**
 * Multiplication
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number}
 */
declare function calcMul(num1: number, num2: number): number;
/**
 * Division
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number}
 */
declare function calcDiv(num1: number, num2: number): number;
/**
 * Determine if it's a number
 * @param {*} n
 * @returns {Boolean}
 */
declare function isNumeric(s: any): boolean;
/**
 * Determine if it's a decimal
 * @param {Number} num
 * @returns {Boolean}
 */
declare function isDecimal(num: number): boolean;
/**
 * Truncate Decimals
 * @param {Number} num
 * @param {Number} decimalPlaces
 * @returns {Number}
 */
declare function truncateDecimals(num: number, decimalPlaces: number): number;
/**
 * Zero Pad
 * @param {Number|String} n
 * @param {?Number} decimalPlaces
 * @returns {String}
 */
declare function numZeroPad(n: number | string, decimalPlaces?: number): string;
/**
 * Check whether the number of decimal places exceeds the specified value
 * @param {Number|String} s
 * @param {Number} decimalPlaces
 * @returns {Boolean}
 */
declare function exceedDecimalPlaces(s: string | number, decimalPlaces: number): boolean | "";
/**
 * Format number
 * @param {*} inputValue
 * @param {?Number} decimalPlaces
 * @param {Number|undefined} inputMin
 * @param {Number|undefined} inputMax
 * @returns {String}
 */
declare function formatNumber(inputValue: any, decimalPlaces?: number, inputMin?: number | undefined, inputMax?: number | undefined): string;
export { evaluate, calcAdd, calcSub, calcMul, calcDiv, isNumeric, isDecimal, truncateDecimals, numZeroPad, exceedDecimalPlaces, formatNumber };
