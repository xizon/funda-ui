/**
 * Get the -webkit-transition-duration property
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {number}    - Returns a pure number.
 */
declare function getTransitionDuration(el: HTMLElement): number;
/**
 * Get an object's absolute position on the page
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {Json}    - An object containing the properties top and left.
 */
declare function getAbsoluteCoordinates(el: HTMLElement): {
    top: number;
    left: number;
};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
declare function getOffset(el: Element): {
    top: number;
    left: number;
};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
declare function getPosition(el: HTMLElement): {
    top: number;
    left: number;
};
/**
 * Get the absolute position of the stage element
 *
 * @param {HTMLElement} domElement  - A DOM node
 * @param {number | string} left     - left offset
 * @param {number | string} top      - top offset
 * @returns
 */
declare function getAbsolutePositionOfStage(domElement: HTMLElement, left?: number | string, top?: number | string): {
    x: number;
    y: number;
    width: number;
    height: number;
};
export { getTransitionDuration, getAbsoluteCoordinates, getOffset, getPosition, getAbsolutePositionOfStage };
