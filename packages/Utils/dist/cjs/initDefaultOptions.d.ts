/**
 *  Set a default JSON format configuration
 *
 * @param  {*} props         - Set some default keys and values.
 * @param  {*} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}            - Merge the new and old values.
 */
declare function setDefaultOptions(props: any, options: any): any;
/**
* Check if a string is a valid number
 * @param {*} str
 * @returns
*/
declare function isValidNumeric(str: any): boolean;
/**
 * Determine whether it is in JSON format
 * @param {*} str
 * @returns
 */
declare function isJSON(str: any): boolean;
export { setDefaultOptions, isJSON, isValidNumeric };
