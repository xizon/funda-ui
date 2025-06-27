
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
        if (inputData === null) return '';
        
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

/**
 * Remove Duplicate objects from JSON Array
 * @param {Array} arr 
 * @returns 
 */
export function uniqueArr(arr: any[]) {
    return arr.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.id == item.id)));
}

/**
 * Remove Duplicate objects from Options
 * @param {Array} arr 
 * @returns 
 */
export function uniqueOpt(arr: any[]) {
    return arr.flat().filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.id === item.id)));
}


/**
 * Sort JSON arrays according to the order of the numeric arrays
 * @param {Array<Number>|Array<String>} orderArray 
 * @param {Array<*>} arr 
 * @param {String} field 
 * @returns 
 */
export function sortedJsonArray(orderArray: number[] | string[], arr: any[], field: string = 'value') {
    return orderArray.map((orderId: number | string) =>
        arr.find(item => item[field] === orderId)
    );
}
