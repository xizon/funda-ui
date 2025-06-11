/**
 * Check if a string is a valid number
 * @param str - The string to check
 * @returns boolean indicating if the string is a valid number
 */
declare function isValidNumeric(str: unknown): boolean;
/**
 * Determine whether it is in JSON format
 * @param str - The value to check
 * @returns boolean indicating if the value is valid JSON
 */
declare function isJSON(str: unknown): boolean;
/**
 * Check if input is empty
 * @param input - The input to check (string or array of strings)
 * @returns boolean indicating if the input is empty
 */
declare function isEmpty(input: string | string[]): boolean;
/**
 * Check if input is a valid number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid number
 */
declare function isNumber(input: string): boolean;
/**
 * Check if input is a valid integer
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid integer
 */
declare function isInt(input: string): boolean;
/**
 * Check if input is a valid email address
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid email
 */
declare function isEmail(input: string): boolean;
/**
 * Check if input is a valid telephone number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid telephone number
 */
declare function isTel(input: string): boolean;
/**
 * Check if input is a valid mobile number
 * @param input - The input to check
 * @returns boolean indicating if the input is a valid mobile number
 */
declare function isMobile(input: string): boolean;
export { isValidNumeric, isJSON, isEmpty, isNumber, isInt, isEmail, isTel, isMobile };
