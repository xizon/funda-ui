import { isJSON, isValidNumeric } from "./validate";
/**
 *  Set a default JSON format configuration
 *
 * @param  {*} props         - Set some default keys and values.
 * @param  {*} options       - A JSON variable passed in from outside, including key and value.
 * @return {JSON}            - Merge the new and old values.
 */
declare function setDefaultOptions(props: any, options: any): any;
export { setDefaultOptions, isJSON, isValidNumeric };
