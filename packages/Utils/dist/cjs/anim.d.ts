/**
 * Element Animate
 * @public
 *
 * @param  {HTMLElement} curElement      - Element of animation.
 * @param  {?JSON} config                - Configuration of animation
 * @param  {?string} easeType            - Types of easing animation.
* @param  {?Function} callback           - Callback after animation ends
 */
declare function animateStyles(curElement: HTMLElement, config: any, easeType?: string, callback?: () => void): void;
export default animateStyles;
