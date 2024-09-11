/**
 * Determine whether an extractor is included
 * @param {String} str    =>  input string. such as 'a[1], b[2]', '{a[1]}'
 * @returns {Boolean}
 */
declare function extractorExist(str: string | undefined | null): boolean;
/**
 * Extract the contents of square brackets
 * @param {String} str    =>  input string. such as '[1,2] [f][c]'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
declare function extractContentsOfBrackets(str: string, commaSeparated?: boolean): Array<string> | string;
/**
 * Extract the contents of curly braces
 * @param {String} str    =>  input string. such as '{1,2} {f}{c}'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
declare function extractContentsOfBraces(str: string, commaSeparated?: boolean): Array<string> | string;
/**
 * Extract the contents of parentheses
 * @param {String} str    =>  input string. such as '(1,2) (f)(c)'
 * @param {Boolean} commaSeparated    =>  flag to determine if the result should be comma separated or not
 * @returns {Array<string>|string} such as: ['1,2','f','c']
 */
declare function extractContentsOfParentheses(str: string, commaSeparated?: boolean): Array<string> | string;
export { extractorExist, extractContentsOfBrackets, extractContentsOfBraces, extractContentsOfParentheses };
