
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
 * Array unique
 * @param {Array} str 
 * @returns {Array}
 */
export function unique(arr: any[]) {
    return Array.from(new Set(arr));
}


/**
 * Remove html tag content
 * @param {string | number} str 
 * @returns {string}
 */
export function stripHTML(str: string | number) {
    return String(str).replace(/<\/?[^>]+(>|$)(.*?)<\/?[^>]+(>|$)/ig, '');
}


/**
 * Remove a specific item from an array
 * @param {array} arr 
 * @param {string} value 
 * @returns {array}
 */
export function removeItemOnce(arr: any[], value: string | number) {
    const arrFormat = arr.map((v: any) => v.toString());
    const index = arrFormat.indexOf(value.toString());
    if (index > -1) {
        arrFormat.splice(index, 1);
    }
    return arrFormat;
}

/**
 * Remove multiple items from an array
 * @param {array} arr 
 * @param {array} value 
 * @returns {array}
 */
export function removeItems(arr: any[], value: any[]) {
    const arrFormat = arr.map((v: any) => v.toString());
    const valueFormat = value.map((v: any) => v.toString());
    return arrFormat.filter((v: any) => {
        return !valueFormat.includes(v);
    });
}

