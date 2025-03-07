/**
 * HTML entities encode
 *
 * @param {String} str Input text
 * @return {String} Filtered text
 */ declare function htmlEncode(str: string): string;
/**
 * HTML entities decode
 *
 * @param {String} str Input text
 * @return {String} Filtered text
 */
declare function htmlDecode(str?: string): string;
export { htmlEncode, htmlDecode };
