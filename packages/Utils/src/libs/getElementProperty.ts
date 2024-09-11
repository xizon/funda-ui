/**
 * Get the -webkit-transition-duration property
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {number}    - Returns a pure number.
 */
function getTransitionDuration(el: HTMLElement): number {

    if (typeof el === typeof undefined) {
        return 0;
    }


    let style: CSSStyleDeclaration = window.getComputedStyle(el),
        duration: any = style.webkitTransitionDuration,
        delay: any = style.webkitTransitionDelay;

    if (typeof duration != typeof undefined) {
        // fix miliseconds vs seconds
        duration = (duration.indexOf("ms") > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
        delay = (delay.indexOf("ms") > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;

        return duration;
    } else {
        return 0;
    }

}



/**
 * Get an object's absolute position on the page
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {Json}    - An object containing the properties top and left. 
 */
function getAbsoluteCoordinates(el: HTMLElement): { top: number, left: number } {

    let windowWidth: number = window.innerWidth,
        leftPos: any = null,
        topPos: any = null;

    const pEl: any = el.parentElement;
    if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
        leftPos = (el.offsetLeft == 0) ? pEl.offsetLeft : el.offsetLeft;
        topPos = (el.offsetTop == 0) ?pEl.offsetTop : el.offsetTop;
    } else {

        // width and height in pixels, including padding and border
        // Corresponds to outerWidth(), outerHeight()
        leftPos = (el.offsetLeft == 0) ? (windowWidth - (pEl.offsetLeft + pEl.offsetWidth)) : (windowWidth - (el.offsetLeft + el.offsetWidth));
        topPos = (el.offsetTop == 0) ? (windowWidth - (pEl.offsetTop + pEl.offsetHeight)) : (windowWidth - (el.offsetTop + el.offsetHeight));
    }


    return {
        'left': leftPos,
        'top': topPos
    };

}


/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 *
 * @param {Element} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left. 
 */
function getOffset(el: Element): { top: number, left: number } {
    let res: { top: number, left: number } = { top: 0, left: 0 };

    const box: DOMRect = el.getBoundingClientRect();
    let top: number = 0,
        left: number = 0;

    //Include scrollbar and border
    top = box.top + window.pageYOffset - document.documentElement.clientTop;
    left = box.left + window.pageXOffset - document.documentElement.clientLeft;

    res = { top: top, left: left };
    return res;

}


/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 *
 * @param {HTMLElement} el - A DOM node containing one selector to match against.
 * @return {Json}      - An object containing the properties top and left.
 */
function getPosition(el: HTMLElement): { top: number, left: number } {
    let res: any = { top: 0, left: 0 };

    let top: number = el.offsetTop ? el.offsetTop : 0,
        left: number = el.offsetLeft ? el.offsetLeft : 0;

    res = { top: top, left: left };

    return res;
}

/**
 * Get the absolute position of the stage element
 * 
 * @param {HTMLElement} domElement  - A DOM node
 * @param {Number | string} left     - left offset
 * @param {Number | string} top      - top offset
 * @returns 
 */
function getAbsolutePositionOfStage(domElement: HTMLElement, left: number | string = 0, top: number | string = 0): { x: number, y: number, width: number, height: number } {
    if (!parseInt(left as never)) {
        left = 0;
    } else {
        left = parseInt(left as never);
    }
    if (!parseInt(top as never)) {
        top = 0;
    } else {
        top = parseInt(top as never);
    }

    const box: DOMRect = domElement.getBoundingClientRect();
    const body: HTMLElement = document.body;
    const docElem: HTMLElement = document.documentElement;
    const scrollTop: number = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    const scrollLeft: number = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    const clientTop: number = docElem.clientTop || body.clientTop || 0;
    const clientLeft: number = docElem.clientLeft || body.clientLeft ||0;

    const attr: any = {};
    attr.y = box.top +  scrollTop - clientTop + top; 
    attr.x = box.left + scrollLeft - clientLeft + left;
    attr.width = box.width;
    attr.height = box.height;

    return attr;
}


export { 
    getTransitionDuration, 
    getAbsoluteCoordinates, 
    getOffset, 
    getPosition,
    getAbsolutePositionOfStage
}