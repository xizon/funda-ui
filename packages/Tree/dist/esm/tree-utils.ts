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
