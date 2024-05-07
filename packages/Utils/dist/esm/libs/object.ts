/**
 * Deep clone
 * @param {*} obj 
 */
function deepClone(obj: any): any {
    if (Array.isArray(obj)) {
        return (obj).map((item) => deepClone(item));
    } else if (typeof obj === 'object' && obj !== null) {
        const clone: any = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepClone(obj[key]);
            }
        }
        return clone;
    } else {
        return obj;
    }
};


/**
 * Flat Data
 * @param {*} data 
 * @returns 
 */
function flatData(data: any): any[] {
    const result: any[] = [];
    const iterate = (obj: any) => {
        if (!obj) {
            return;
        }
        obj.forEach((item: any) => {
            result.push(item);
            if (item.children) {
                iterate(item.children);
            }

            // delete current item children
            delete item.children;

        })
    }

    iterate(data);
    return result;
};


export {
    deepClone,
    flatData
}