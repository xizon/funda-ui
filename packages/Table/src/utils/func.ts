export function convertMapToArr(setData: any) {
    const res: any[] = [];
    const s = setData;
    for (let it = s.values(), val = null; val = it.next().value;) {
        res.push(val);
    }
    return res;
}


export function htmlToPlain(input: string) {
    return input.replace(/(<([^>]+)>)/ig, '');
}


export function sortDataByIndex(orderArr: number[], data: any[]) {
    return Array.isArray(data) ? orderArr.map(index => data[index]) : data;
}


export function getTbody(root: HTMLDivElement) {
    if (root === null) return null;
    const tbodyRef: any = root.querySelector('table tbody');
    return tbodyRef;
}

export function getThead(root: HTMLDivElement) {
    if (root === null) return null;
    const tbodyRef: any = root.querySelector('table thead');
    return tbodyRef;
}


export function allRows(root: HTMLDivElement) {
    const tbodyRef: any = getTbody(root);
    if (tbodyRef === null) return [];
    return [].slice.call(tbodyRef.children);
}

export function allHeadRows(root: HTMLDivElement) {
    const tbodyRef: any = getThead(root);
    if (tbodyRef === null) return [];
    return [].slice.call(tbodyRef.children);
}



export function initOrderProps(rootElem: any) {
    if (rootElem === null) return;

    // !!! Execute it only once
    if (typeof rootElem.dataset.customPropsInit !== 'undefined') return;
    rootElem.dataset.customPropsInit = 1;
    
    const _allRows = allRows(rootElem);

    // key
    _allRows.forEach((node: HTMLTableRowElement, i: number) => {
        node.dataset.order = `${i}`;
    });

}

export function initRowColProps(rootElem: any) {
    if (rootElem === null) return;

    // !!! Important, performance optimization for large data renderings
    // With this protection, it is only performed once
    if (typeof rootElem.dataset.rowColPropsInit !== 'undefined') return;
    rootElem.dataset.rowColPropsInit = 1;


    //
    const _allRows = allRows(rootElem);
    const _allHeadRows = allHeadRows(rootElem);

    // key
    _allRows.forEach((node: HTMLTableRowElement, i: number) => {
        node.dataset.tableRow = `${i}`;

        // columns
        const perCol = [].slice.call(node.children);
        perCol.forEach((col: HTMLTableColElement, j: number) => {
            col.dataset.tableRow = `${i}`;
            col.dataset.tableCol = `${j}`;
            col.classList.add(cellMark(i, j));

        });
    });

    _allHeadRows.forEach((node: HTMLTableRowElement, i: number) => {
        node.dataset.tableRow = `-1`;

        // columns
        const perCol = [].slice.call(node.children);
        perCol.forEach((col: HTMLTableColElement, j: number) => {
            col.dataset.tableRow = `-1`;
            col.dataset.tableCol = `${j}`;
            col.classList.add(cellMark(-1, j));
        });
    });
    
}

export function insertAfter(newNode: any, existingNode: any) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}



export function maxDimension(elements: any) {
    let res = {
        'height': 0,
        'width': 0
    };
    const elementHeights: any[] = Array.prototype.map.call(elements, function (el) {
        return el.clientHeight;
    });

    const elementWidths: any[] = Array.prototype.map.call(elements, function (el) {
        return el.clientWidth;
    });



    const maxHeight = Math.max.apply(null, elementHeights);
    const maxWidth = Math.max.apply(null, elementWidths);

    res = {
        'height': maxHeight,
        'width': maxWidth
    };
    return res;
};


export function tableElemScrolledInit(root: HTMLDivElement, w: number) {
    const tbodyRef: any = getTbody(root);
    if (tbodyRef === null) return;

    if (w <= 768 && tbodyRef.querySelector('tr') !== null) {
        //get maxHeight of per row
        for (let i = 0; i < tbodyRef.querySelector('tr').children.length; i++) {
            const tbodyRows = root.querySelectorAll(`tbody tr [data-table-col="${i}"]`);

            const maxHeight = maxDimension(tbodyRows).height;
            if (maxHeight > 0) {
                [].slice.call(tbodyRows).forEach((row: any) => {
                    row.style.height = maxHeight + 'px';
                });


                //
                const theadRows = root.querySelectorAll(`thead tr [data-table-col="${i}"]`);
                [].slice.call(theadRows).forEach((row: any) => {
                    row.style.height = maxHeight + 'px';
                });
            }
        }
    } else {
        [].slice.call(root.querySelectorAll('tbody td, tbody th, thead th')).forEach((node: any, i: number) => {
            node.style.removeProperty('height');
        });
    }

}


export function cellMark(row: number | string | undefined, col: number | string | undefined) {
    const isNegative = (num: number) => {
        return num < 0;
    };
    return `cell-${isNegative(row as number) ? 0 : row}-${isNegative(col as number) ? 0 : col}`;
}

export function removeCellFocusClassName(root: any) {
    if (root) {
        // !!! Important, performance optimization for large data renderings
        // Only query elements with cell-focus classes
        const focusedCells = root.querySelectorAll('td.cell-focus, th.cell-focus');
        focusedCells.forEach((el: HTMLElement) => {
            el.classList.remove('cell-focus');
        });
    }
}

export function getTableRowsColCount(root: HTMLDivElement) {
    const rows = allRows(root);
    return rows.map((row: HTMLTableRowElement, i: number) => ({
        row: i,
        colCount: row.children.length
    }));
}
