
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
 * Determine whether the option exists
 * @param val 
 * @returns 
 */
export function multiSelControlOptionExist(arr: any[], val: any) {
    const _data = arr.filter(Boolean);
    return _data.map((v: any) => v.toString()).includes(val.toString());

}
