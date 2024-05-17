
/**
 * Get cursor or text position in pixels for input element
 * 
 * @param {HTMLElement} input  Required HTMLElement with `value` attribute
 * @param {Number} selectionStart   Optional number: Start offset. Default 0
 * @param {Number} selectionEnd Optional number: End offset. Default selectionStart
 * @param {Boolean} debug Optional boolean. If true, the created test layer will not be removed.
 * @returns {JSON}
 * such as: 
{"x":14,"y":42.5,"width":36.1875,"height":19,"top":42.5,"right":50.1875,"bottom":61.5,"left":14}
 */

// Local functions for readability of the previous code
function appendPart(text: string, cssDefaultStyles: any, fakeClone: HTMLElement, start: number, end: number) {
    let span = document.createElement("span"),
        tmpText = text.substring(start, end);
    span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
    // add a space if it ends in a newline
    if (/[\n\r]$/.test(tmpText)) {
        tmpText += ' ';
    }
    span.textContent = tmpText;
    fakeClone.appendChild(span);
    return span;
}
// Computing offset position
function getInputOffset(input: HTMLInputElement | HTMLTextAreaElement) {
    let body = document.body,
        win: any = document.defaultView,
        docElem = document.documentElement,
        box: any = document.createElement('div');
    box.style.paddingLeft = box.style.width = "1px";
    body.appendChild(box);
    const isBoxModel = box.offsetWidth == 2;
    body.removeChild(box);
    box = input.getBoundingClientRect();
    const clientTop = docElem.clientTop || body.clientTop || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0,
        scrollTop = win.pageYOffset || isBoxModel && docElem.scrollTop || body.scrollTop,
        scrollLeft = win.pageXOffset || isBoxModel && docElem.scrollLeft || body.scrollLeft;
    return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
    };
}

function getInputCSS(input: HTMLInputElement | HTMLTextAreaElement, prop: any, isnumber: boolean) {
    const val: any = document.defaultView?.getComputedStyle(input, null).getPropertyValue(prop);
    return isnumber ? parseFloat(val) : val;
}



function getTextBoundingRect(input: any, selectionStart: number, selectionEnd: number, debug: boolean = false) {
    if (input === null) return 0;

    // Basic parameter validation
    if (!input || !('value' in input)) return input;
    if (typeof selectionStart == "string") selectionStart = parseFloat(selectionStart);
    if (typeof selectionStart != "number" || isNaN(selectionStart)) {
        selectionStart = 0;
    }
    if (selectionStart < 0) selectionStart = 0;
    else selectionStart = Math.min(input.value.length, selectionStart);
    if (typeof selectionEnd == "string") selectionEnd = parseFloat(selectionEnd);
    if (typeof selectionEnd != "number" || isNaN(selectionEnd) || selectionEnd < selectionStart) {
        selectionEnd = selectionStart;
    }
    if (selectionEnd < 0) selectionEnd = 0;
    else selectionEnd = Math.min(input.value.length, selectionEnd);

    // If available (thus IE), use the createTextRange method
    if (typeof input.createTextRange == "function") {
        const range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', selectionStart);
        range.moveEnd('character', selectionEnd - selectionStart);
        return range.getBoundingClientRect();
    }
    // createTextRange is not supported, create a fake text range
    let offset = getInputOffset(input),
        topPos = offset.top,
        leftPos = offset.left,
        width = getInputCSS(input, 'width', true),
        height = getInputCSS(input, 'height', true);

    // Styles to simulate a node in an input field
    // use pre-wrap instead of wrap for white-space to support wrapping in textareas
    let cssDefaultStyles = "white-space:pre-wrap;padding:0;margin:0;",
        listOfModifiers = ['direction', 'font-family', 'font-size', 'font-size-adjust', 'font-variant', 'font-weight', 'font-style', 'letter-spacing', 'line-height', 'text-align', 'text-indent', 'text-transform', 'word-wrap', 'word-spacing'];

    topPos += getInputCSS(input, 'padding-top', true);
    topPos += getInputCSS(input, 'border-top-width', true);
    leftPos += getInputCSS(input, 'padding-left', true);
    leftPos += getInputCSS(input, 'border-left-width', true);
    leftPos += 1; //Seems to be necessary

    for (let i = 0; i < listOfModifiers.length; i++) {
        const property = listOfModifiers[i];
        cssDefaultStyles += property + ':' + getInputCSS(input, property, false) + ';';
    }
    // End of CSS variable checks

    const text = input.value,
        textLen = text.length,
        fakeClone = document.createElement("div");
    if (selectionStart > 0) appendPart(text, cssDefaultStyles, fakeClone, 0, selectionStart);
    const fakeRange = appendPart(text, cssDefaultStyles, fakeClone, selectionStart, selectionEnd);
    if (textLen > selectionEnd) appendPart(text, cssDefaultStyles, fakeClone, selectionEnd, textLen);

    // Styles to inherit the font styles of the element
    fakeClone.style.cssText = cssDefaultStyles;

    // Styles to position the text node at the desired position
    fakeClone.style.position = "absolute";
    fakeClone.style.top = topPos + "px";
    fakeClone.style.left = leftPos + "px";
    fakeClone.style.width = width + "px";
    fakeClone.style.height = height + "px";
    document.body.appendChild(fakeClone);
    const returnValue = fakeRange.getBoundingClientRect(); //Get rect

    if (!debug) fakeClone.parentNode?.removeChild(fakeClone); //Remove temp
    return returnValue;

}


export {
    getTextBoundingRect
};


