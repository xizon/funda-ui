/**
 * Gets the relative upside of the text
 * @param {Element} el    - A DOM node containing one selector to match against.
 * @returns {Number}      - Returns a pure number.
 */
declare function getTextTop(el: HTMLElement): number;
/**
* Get the actual value with user specific methed
* it can be 'width', 'height', 'outerWidth', 'outerHeight'
* @private
* @param {Element} el           - A DOM node containing one selector to match against.
* @param {String} prop          - A string naming the property of style.
* @param {?Json} config         - Whether or not margin is included. The key `includeMargin`
                                    takes effect when set to true
* @return {Number}              - Returns a pure number.
*/
declare function actualPropertyValue(el: any, prop: string, config?: any): any;
/**
 * Get cursor or text position in pixels for input element
 *
 * @param {HTMLInputElement} input  Required HTMLElement with `value` attribute
 * @param {HTMLSpanElement} fauxContainer  Container of faux.
     * @param {HTMLElement} rawTextContainer  The raw text container for the comparison
 * @returns {Number}
 */
declare function getTextWidth(input: HTMLInputElement, fauxContainer: HTMLSpanElement, rawTextContainer: HTMLElement): any;
export { getTextTop, actualPropertyValue, getTextWidth };
