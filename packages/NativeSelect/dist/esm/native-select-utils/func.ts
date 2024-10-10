
/**
 * Format indent value
 * @param {String|Array} inputData 
 * @param {String} placeholder 
 * @returns {String|Array}
 */
export function formatIndentVal(inputData: any, placeholder: string) {
    const reVar = new RegExp(placeholder, 'g');
    if (Array.isArray(inputData)) {
        return inputData.map((s: any) => String(s).replace(reVar, '').replace(/\&nbsp;/ig, ''));
    } else {
        const _txt: any = typeof inputData === 'string' ? inputData : inputData.toString();
        return _txt.replace(reVar, '').replace(/\&nbsp;/ig, '');
    }

}

/**
 * Flat options
 * @param {Array}allData 
 * @returns {Array} 
 */
export function optionsFlat(allData: any[]) {

    const flatItems: any[] = [];

    allData.forEach((item: any) => {
        if (typeof item.optgroup !== 'undefined') {
            item.optgroup.forEach((opt: any) => {
                flatItems.push(opt);
            });
        } else {
            flatItems.push(item);
        }
    });

    return flatItems;
}


/**
 * Determine whether it is an object or not
 * @param value 
 * @returns 
 */
export function isObject(value: any) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
