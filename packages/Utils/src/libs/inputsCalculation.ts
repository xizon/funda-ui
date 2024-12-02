

/**
 * Gets the relative upside of the text
 * @param {Element} el    - A DOM node containing one selector to match against.
 * @returns {Number}      - Returns a pure number.
 */
function getTextTop(el: HTMLElement) {
    const styles = window.getComputedStyle(el);
    const fontSize = parseFloat(styles.fontSize);
    const lineHeight = parseFloat(styles.lineHeight) || fontSize;
    const paddingTop = parseFloat(styles.paddingTop);
    const borderWidth = parseFloat(styles.borderWidth);

    const textTop = paddingTop + (lineHeight - fontSize) / 2 - borderWidth*2;
    return textTop;
}

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
function actualPropertyValue(el: any, prop: string, config: any = undefined) {
    if (el === null) return 0;

    const style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle,
        display = style.display,
        position = style.position,
        visibility = style.visibility;

    let marginWidth = 0;
    let marginHeight = 0;

    let maxVal: number;
    let actualVal: any;


    if (config && config.includeMargin === true) {
        marginWidth = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        marginHeight = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }

    if (prop === 'fontSize') {
        actualVal = parseFloat(style.fontSize);
    }

    if (prop === 'fontFamily') {
        actualVal = style.fontFamily;
    }

    if (prop === 'letterSpacing') {
        actualVal = style.letterSpacing;
    }
    if (prop === 'width') {
        maxVal = parseFloat(style.maxWidth);

        // if its not hidden we just return normal height
        if (display !== 'none' && maxVal !== 0) {
            return el.clientWidth;
        }
    }
    if (prop === 'height') {
        maxVal = parseFloat(style.maxHeight);
        if (display !== 'none' && maxVal !== 0) {
            return el.clientHeight;
        }
    }

    if (prop === 'outerWidth') {
        maxVal = parseFloat(style.maxWidth);
        if (display !== 'none' && maxVal !== 0) {
            return el.offsetWidth + marginWidth;
        }
    }
    if (prop === 'outerHeight') {
        maxVal = parseFloat(style.maxHeight);
        if (display !== 'none' && maxVal !== 0) {
            return el.offsetHeight + marginHeight;
        }
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display = 'block';


    if (prop === 'width') actualVal = el.clientWidth;
    if (prop === 'height') actualVal = el.clientHeight;
    if (prop === 'outerWidth') actualVal = el.offsetWidth + marginWidth;
    if (prop === 'outerHeight') actualVal = el.offsetHeight + marginHeight;

    // reverting to the original values
    el.style.display = display;
    el.style.position = position;
    el.style.visibility = visibility;

    return actualVal;
}

function getElCSS(input: HTMLElement, prop: any, isNumber: boolean) {
    const val: any = document.defaultView?.getComputedStyle(input, null).getPropertyValue(prop);
    return isNumber ? (isNaN(parseFloat(val)) ? 0 : parseFloat(val)) : val;
}

/**
 * Get cursor or text position in pixels for input element
 * 
 * @param {HTMLInputElement} input  Required HTMLElement with `value` attribute
 * @param {HTMLSpanElement} fauxContainer  Container of faux.
     * @param {HTMLElement} rawTextContainer  The raw text container for the comparison
 * @returns {Number}
 */


function getTextWidth(input: HTMLInputElement, fauxContainer: HTMLSpanElement, rawTextContainer: HTMLElement) {
    if (input === null || fauxContainer === null || rawTextContainer === null) return 0;

    const _off: any = input.selectionStart;
    const _faux = fauxContainer;
    const _fauxContainer = rawTextContainer;
    if (_faux && _fauxContainer) {

        // Styles to simulate a node in an input field
        // use pre-wrap instead of wrap for white-space to support wrapping in textareas
        const listOfModifiers = ['direction', 'font-family', 'font-size', 'font-size-adjust', 'font-variant', 'font-weight', 'font-style', 'letter-spacing', 'line-height', 'text-align', 'text-indent', 'text-transform', 'word-wrap', 'word-spacing'];

        // default styles
        _faux.style.setProperty('white-space', 'pre-wrap');
        _faux.style.setProperty('padding', '0');
        _faux.style.setProperty('margin', '0');
        _faux.style.setProperty('display', 'none');

        for (let i = 0; i < listOfModifiers.length; i++) {
            const propertyValue = getElCSS(_fauxContainer, listOfModifiers[i], false);
            _faux.style.setProperty(listOfModifiers[i], propertyValue);
        }

        _faux.textContent = input.value.substring(0, _off).replace(/\s/g, "\u00a0");
        return actualPropertyValue(_faux, 'outerWidth');
    }

}


export {
    getElCSS,
    getTextTop,
    actualPropertyValue,
    getTextWidth
};


