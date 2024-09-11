/**
 * Output of class name
 * @param {*} s      - Any
 * @param  {String} defaultCls      - Default string
 * @param  {?*} targetCls      - Any
 * @returns HtmlElementCollection
 */
function clsWrite(s: any, defaultCls: string, targetCls: any = undefined): any {
    return s || s === '' ? (typeof targetCls === 'undefined' ? s : targetCls) : defaultCls;
}

export {
    clsWrite
}

