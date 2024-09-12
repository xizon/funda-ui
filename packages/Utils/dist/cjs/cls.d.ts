/**
 * Output of class name
 * @param {*} s      - Any
 * @param  {String} defaultCls      - Default string
 * @param  {?*} targetCls      - Any
 * @returns {*}
 */
declare function clsWrite(s: any, defaultCls: string, targetCls?: any): any;
/**
 * Combined classnames
 * @param {*} args
 * @returns {String|undefined}
 */
declare function combinedCls(...args: any[]): string | undefined;
export { combinedCls, clsWrite };
