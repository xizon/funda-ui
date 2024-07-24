/**
 * Handles the event of drag-and-drop sorting
 * 
 * @usage:

const App = () => {

    const rowDraggable = true;
    const data = [{a: 1}, {b: 2}]
    const rootRef = useRef<any>(null);

    const {
        handleDragStart,
        handleDragEnd,
        handledragOver,
        handleTbodyEnter
    } = useTableDraggable({
        enabled: rowDraggable && spyElement,
        data: data,
        spyElement: spyElement
        onRowDrag: (dragStart: any, dragEnd: any) => void(0)
    }, [data, rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );

};

 */

import { useState, useEffect, useCallback } from 'react';


import { getTbody, allRows, insertAfter, sortDataByIndex, initOrderProps, initRowColProps } from '../func';


interface UseTableDraggableProps {
    enabled: boolean;
    data?: any[];
    spyElement?: any;
    onRowDrag?: (dragStart: any, dragEnd: any) => void;

}

function useTableDraggable({
    enabled,
    data,
    spyElement,
    onRowDrag,
}: UseTableDraggableProps, deps: any[]) {

    // drag & drop
    const [sortData, setSortData] = useState<any[] | undefined>([]);


    // ================================================================
    // drag & drop
    // ================================================================
    let draggedObj: any = null;
    let overObj: any = null;

    const placeholderGenerator = (trHeight: number) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        // Insert a row at the "index" of the table
        const newRow = document.createElement('tr');
        newRow.className = 'row-placeholder';
        newRow.dataset.placeholder = 'true';
        newRow.style.height = trHeight + 'px';

        // Insert a cell in the row at index
        const newCell = newRow.insertCell(0);
        newCell.colSpan = tbodyRef.querySelector('tr').children.length;

        // Append a text node to the cell
        const newText = document.createTextNode(' ');
        newCell.appendChild(newText);

        return newRow;
    };

    const lastRowGenerator = (trHeight: number) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        // Insert a row at the "index" of the table
        const newRow = document.createElement('tr');
        newRow.className = 'row-obj row-obj-clonelast';
        newRow.dataset.order = allRows(spyElement).length.toString();
        newRow.style.height = trHeight + 'px';
        newRow.style.display = 'none';

        // Insert a cell in the row at index
        const newCell = newRow.insertCell(0);
        newCell.colSpan = tbodyRef.querySelector('tr').children.length;

        // Append a text node to the cell
        const newText = document.createTextNode(' ');
        newCell.appendChild(newText);

        return newRow;
    };


    const removePlaceholder = () => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        // Delete row at the "index" of the table
        const placeholder = [].slice.call(tbodyRef.querySelectorAll(`[data-placeholder]`));
        placeholder.forEach((node: any) => {
            tbodyRef.removeChild(node);
        });

    };


    // Initialize drag & drop data
    // !!! Execute it only once
    const initDragDropData = () => {
        if (spyElement === null) return;
        if (typeof spyElement.dataset.dragdropDataInit !== 'undefined') return;
        spyElement.dataset.dragdropDataInit = 1;
        
        const _allRows = allRows(spyElement);


        // sort list data
        const listIndexes: any[] | undefined = _allRows.map((node: any, i: number) => i);
        setSortData(listIndexes);

        //last placeholder
        insertAfter(lastRowGenerator((_allRows.at(-1) as any).clientHeight), _allRows.at(-1));
    };

    const handleTbodyEnter = (e: any) => {
        const _table: any = e.currentTarget.closest('table');
        if (_table === null) return;

        _table.querySelector('tbody').classList.add('drag-trigger-mousedown');
    };

    const handleTbodyLeave = (e: any) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        tbodyRef?.classList.remove('drag-trigger-mousedown');
    };

    // events fired on the drop targets
    const handledragOver = useCallback((e: any) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        e.preventDefault();
        if (draggedObj === null) return;

        draggedObj.style.display = 'none';


        if (e.target.classList.contains('row-placeholder')) return;

        const itemsWrapper = e.target.parentNode;
        if (itemsWrapper.classList.contains('row-obj')) {
            overObj = itemsWrapper;
            removePlaceholder();

            if (Number(overObj.dataset.order) === allRows(spyElement).length - 1) {
                tbodyRef.insertBefore(placeholderGenerator((allRows(spyElement).at(-2) as any).clientHeight), overObj);
            } else {
                tbodyRef.insertBefore(placeholderGenerator(overObj.clientHeight), overObj);
            }


        }

    }, [sortData]);


    const handleDragStart = useCallback((e: any) => {
        draggedObj = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', draggedObj);

        draggedObj.classList.add('dragging');
        (allRows(spyElement).at(-1) as any).style.setProperty('display', 'table-row', "important");


        // callback
        const dragStart: Function = (callback: Function) => {
            callback.call(null, draggedObj, sortData, sortDataByIndex(sortData as never, data as never));
        };
        onRowDrag?.(dragStart, null);

    }, [handledragOver]);

    const handleDragEnd = useCallback((e: any) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        draggedObj.style.display = 'table-row';
        removePlaceholder();

        draggedObj.classList.remove('dragging');
        tbodyRef?.classList.remove('drag-trigger-mousedown');


        if (overObj === null) return;

        // update state
        let curData: number[] = [];
        curData = JSON.parse(JSON.stringify(sortData));
        let from = Number(draggedObj.dataset.order);
        let to = Number(overObj.dataset.order);
        if (from < to) to--;


        //sort data
        const newData: number[] = [];

        // console.log('--> data1:', curData);

        curData.splice(to, 0, curData.splice(from, 1)[0]);

        for (let i = 0; i < curData.length; i++) {
            for (let j = 0; j < curData.length; j++) {

                if (curData[i] === curData[j]) {
                    newData.push(curData[j] as never);
                }
            }
        }


        // console.log("--> data2: ", newData);
        setSortData(newData);

        // reset data-id in order to sort data
        newData.forEach((curId: any, order: number) => {
            const _el = spyElement.querySelector('table').querySelector(`tbody [data-key="row-${curId}"]`);
            if (_el !== null) _el.dataset.order = order;

        });


        // sort elements
        const categoryItemsArray = allRows(spyElement);
        const sorter = (a: any, b: any) => {
            return a.dataset.order.localeCompare(b.dataset.order); // sorts based on alphabetical order
        }
        const sorted = categoryItemsArray.sort(sorter);
        sorted.forEach(e => spyElement.querySelector('table').querySelector('tbody').appendChild(e));


        // callback
        const dragEnd: Function = (callback: Function) => {
            callback.call(null, draggedObj, newData, sortDataByIndex(newData as never, data as never));
        };
        onRowDrag?.(null, dragEnd);



    }, [sortData]);



    useEffect(() => {
        if (enabled) {
            if (Array.isArray(data)) {
                data.forEach((item: any, i: number) => {
                    item.order = i;
                });

                // Initialize custom props of table elements
                initOrderProps(spyElement);
                initRowColProps(spyElement);

                // Initialize drag & drop data
                initDragDropData();
                 

            }
        }
    }, [data, enabled, spyElement, ...deps]);

    return {
        handleDragStart,
        handleDragEnd,
        handledragOver,
        handleTbodyEnter,
        handleTbodyLeave
    }
}


export default useTableDraggable;

