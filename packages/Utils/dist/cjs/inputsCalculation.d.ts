/**
 * Get cursor or text position in pixels for input element
 *
 * @param {HTMLInputElement} input  Required HTMLElement with `value` attribute
 * @param {HTMLSpanElement} fauxContainer  Container of faux.
     * @param {HTMLElement} rawTextContainer  The raw text container for the comparison
 * @returns {Number}
 */
declare function getTextWidth(input: HTMLInputElement, fauxContainer: HTMLSpanElement, rawTextContainer: HTMLElement): any;
export { getTextWidth };
