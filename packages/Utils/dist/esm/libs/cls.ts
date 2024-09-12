/**
 * Output of class name
 * @param {*} s      - Any
 * @param  {String} defaultCls      - Default string
 * @param  {?*} targetCls      - Any
 * @returns {*} 
 */
function clsWrite(s: any, defaultCls: string, targetCls: any = undefined): any {
    return s || s === '' ? (typeof targetCls === 'undefined' ? s : targetCls) : defaultCls;
}

/**
 * Combined classnames
 * @param {*} args 
 * @returns {String|undefined}
 */
/* Usage:

console.log(combinedCls('a-1', 'a-2', 'a-3', {
    'p-1': null,
    'p-2': undefined,
    'p-3': true,
    'p-4': false,
    'p-5': 'kkk',
    'p-6': 0,
    'p-7': 1,
    'p-8': '',
    undefined
})); // a-1 a-2 a-3 p-3 p-5 p-7
*/
function combinedCls(...args) {
    if (args) {
        let classes: any[] = [];

        for (let i = 0; i < args.length; i++) {
            let className = args[i];

            if (!className) {
                continue;
            }

            const type = typeof className;

            if (type === 'string' || type === 'number') {
                classes.push(className);
            } else if (type === 'object') {
                const _classes = Array.isArray(className) ? className : Object.entries(className).map(([key, value]) => (value ? key : null));

                classes = _classes.length ? classes.concat(_classes.filter((c) => !!c)) : classes;
            }
        }

        return classes.join(' ').trim();
    }

    return undefined;
}


export {
    combinedCls,
    clsWrite
}

