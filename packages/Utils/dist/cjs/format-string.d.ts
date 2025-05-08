/**
 * String formatting utility functions
 */
/**
 * Remove all special characters except space from a string
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
declare function rmSpec(input: string): string;
/**
 * Allow only numbers and letters in a string
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
declare function onlyNumAndLetter(input: string): string;
/**
 * Remove all spaces including those in the middle
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
declare function rmAllSpace(input: string): string;
/**
 * Remove whitespace from both sides of a string
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
declare function trimAll(input: string): string;
/**
 * Replace multiple spaces with a single space
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
declare function multiSpacesToSingle(input: string): string;
/**
 * Convert HTML text to plain text (Remove html tag content)
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
declare function htmlToPlain(input: string): string;
/**
 * Strip HTML tags and their content
 * !!!Important: It will remove nested tags
 * @param {string} input - The input string to process
 * @returns {string} The processed string
 */
declare function stripTagsAndContent(input: string): string;
/**
 * Remove first and last slash from a URL
 * @param {string} input - The input URL to process
 * @returns {string} The processed URL
 */
declare function removeFirstLastSlash(input: string): string;
/**
 * Remove trailing slash from a URL
 * @param {string} input - The input URL to process
 * @returns {string} The processed URL
 */
declare function removeTrailingSlash(input: string): string;
/**
 * Remove first slash from a URL
 * @param {string} input - The input URL to process
 * @returns {string} The processed URL
 */
declare function removeFirstSlash(input: string): string;
export { rmSpec, onlyNumAndLetter, rmAllSpace, trimAll, multiSpacesToSingle, htmlToPlain, stripTagsAndContent, removeFirstLastSlash, removeTrailingSlash, removeFirstSlash };
