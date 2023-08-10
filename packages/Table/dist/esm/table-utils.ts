
export const removeItemOnce = (arr: any[], key: string) => {
    return arr.filter((item: any) => {
        return item.key !== key;
    });
};
  

export const formatCheckboxControlVal = (el: HTMLFormElement) => {
    const _curContent: any = ([].slice.call(el.closest('th')?.children).at(-1) as any).innerHTML;      
    const $row: any = el.closest('tr[data-key]');
    const _restContent: any[] = [].slice.call($row.children).map((node: any, i: number) => {
        if ( i > 0 ) return node.innerHTML;
    }).filter((item: any) => item !== undefined);

    _restContent.unshift(_curContent);

    return {
        index: Number(el.dataset.index),
        key: el.dataset.key,
        name: el.dataset.name?.replace(/-label$/, ''),
        content: _restContent
    }
};

export const formatRowControlVal = (el: HTMLFormElement, checkboxNamePrefix: string) => {
    const _curContent: any = ([].slice.call(el.querySelector('th')?.children).at(-1) as any).innerHTML;      
    const $row: any = el.closest('tr[data-key]');
    const _restContent: any[] = [].slice.call($row.children).map((node: any, i: number) => {
        if ( i > 0 ) return node.innerHTML;
    }).filter((item: any) => item !== undefined);

    _restContent.unshift(_curContent);

    return {
        index: Number(el.dataset.id),
        key: el.dataset.key,
        name: `checkbox-${checkboxNamePrefix}-${el.dataset.key}`,
        content: _restContent
    }
};



export const formatPerlineControlVal = (el: HTMLFormElement) => {
    const $row: any = el;
    const _restContent: any[] = [].slice.call($row.children).map((node: any, i: number) => {
        return node.innerHTML;
    }).filter((item: any) => item !== undefined);

    return {
        index: Number(el.dataset.id),
        key: el.dataset.key,
        content: _restContent
    }
};



export const setCheckboxCheckedData = (arr: any[], key: string, val: boolean) => {
    arr.forEach((item: any, index: number) => {
        if (item.key === key) arr[index].checked = val;
    });
};

