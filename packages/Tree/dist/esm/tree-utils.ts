export const removeItemOnce = (arr: any[], key: string) => {
    return arr.filter((item: any) => {
        return item.key !== key;
    });
};
  


export const activeClass = (el: any, mode: string, classname: string = 'active') => {
    if ( mode === 'add' ) {
        el.classList.add(classname);
    } else {
        el.classList.remove(classname);
    }
};



export const deepClone = (obj: any) => {
    if (Array.isArray(obj)) {
        return (obj as any).map((item: any) => deepClone(item));
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


export const flatOriginalData = (data: any[]) => {
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
