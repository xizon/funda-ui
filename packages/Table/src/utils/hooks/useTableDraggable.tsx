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


/**
 * Performance Optimizations for Large Data Sets:
 * 
 * This hook has been optimized to handle large datasets (1000+ rows) efficiently.
 * Key optimizations include:
 * 
 * 1. RequestAnimationFrame for DOM Updates
 *    - DOM operations are batched within requestAnimationFrame callbacks
 *    - Browser executes updates before next frame render, reducing visual lag
 *    - Pending RAF callbacks are cancelled to prevent accumulation
 * 
 * 2. Caching Strategy
 *    - tbodyRef: Cached to avoid repeated DOM queries
 *    - colCount: Cached to eliminate repeated queries in placeholderGenerator
 *    - allRowsCache: Cached with time-based invalidation (100ms)
 * 
 * 3. Redundant Operation Prevention
 *    - Tracks last hovered row order (lastOverOrder)
 *    - Skips placeholder operations when hovering over the same row
 *    - Reduces unnecessary DOM manipulations during drag
 * 
 * 4. Batch DOM Operations
 *    - removePlaceholder: Uses cached tbodyRef and batch removal
 *    - handleDragEnd: Uses DocumentFragment for batch DOM updates
 *    - Map-based lookups instead of repeated querySelector calls
 */
import { useState, useEffect, useCallback, useRef } from 'react';


import { getTbody, allRows, insertAfter, sortDataByIndex, initOrderProps, initRowColProps } from '../func';


export interface UseTableDraggableProps {
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
    const [isDragging, setIsDragging] = useState<boolean>(false);

    // Performance optimization: cache for drag operations
    const dragCacheRef = useRef<{
        draggedObj: any;
        overObj: any;
        allRowsCache: any[] | null;
        lastUpdateTime: number;
        tbodyRef: any;
        colCount: number;
        lastOverOrder: number | null;
        rafId: number | null;
    }>({
        draggedObj: null,
        overObj: null,
        allRowsCache: null,
        lastUpdateTime: 0,
        tbodyRef: null,
        colCount: 0,
        lastOverOrder: null,
        rafId: null
    });


    // ================================================================
    // drag & drop
    // ================================================================
    let draggedObj: any = null;
    let overObj: any = null;

    // Helper function to filter out cloned elements and get only real rows
    const getRealRows = (rows: any[]) => {
        return rows.filter((row: any) => !row.classList.contains('row-obj-clonelast') && !row.classList.contains('row-obj-lastplaceholder'));
    };

    const placeholderGenerator = (trHeight: number) => {
        // Use cached tbodyRef and colCount for better performance
        let tbodyRef = dragCacheRef.current.tbodyRef;
        if (!tbodyRef) {
            tbodyRef = getTbody(spyElement);
            dragCacheRef.current.tbodyRef = tbodyRef;
        }
        
        if (tbodyRef === null) return null;
        
        
        // Cache colCount to avoid repeated queries
        let colCount = dragCacheRef.current.colCount;
        if (colCount === 0) {
            const firstRow = tbodyRef.querySelector('tr');
            if (firstRow === null) return null;
            colCount = firstRow.children.length;
            dragCacheRef.current.colCount = colCount;
        }

        // Insert a row at the "index" of the table
        const newRow = document.createElement('tr');
        newRow.className = 'row-placeholder';
        newRow.dataset.placeholder = 'true';
        newRow.style.height = trHeight + 'px';
        newRow.style.minHeight = trHeight + 'px'; // Ensure minimum height

        // Insert a cell in the row at index
        const newCell = newRow.insertCell(0);
        newCell.colSpan = colCount;
        newCell.style.minHeight = trHeight + 'px'; // Ensure cell has minimum height
        
        // Use non-breaking space to ensure proper height rendering
        // Multiple spaces or a placeholder element helps maintain consistent height
        newCell.innerHTML = '&nbsp;'; // Use &nbsp; instead of regular space for better height consistency

        return newRow;
    };


    const lastPlaceholderGenerator = (trHeight: number) => {
        // Use cached tbodyRef and colCount for better performance
        let tbodyRef = dragCacheRef.current.tbodyRef;
        if (!tbodyRef) {
            tbodyRef = getTbody(spyElement);
            dragCacheRef.current.tbodyRef = tbodyRef;
        }

        if (tbodyRef === null) return null;

        const curEl = tbodyRef.querySelector('.row-obj-lastplaceholder');
        if (curEl !== null) return;


        // Cache colCount to avoid repeated queries
        let colCount = dragCacheRef.current.colCount;
        if (colCount === 0) {
            const firstRow = tbodyRef.querySelector('tr');
            if (firstRow === null) return null;
            colCount = firstRow.children.length;
            dragCacheRef.current.colCount = colCount;
        }

        // Create a dedicated last placeholder row that is kept in DOM but hidden by default
        const newRow = document.createElement('tr');
        newRow.className = 'row-obj row-obj-lastplaceholder';
        // NOTE: Do NOT set data-placeholder here, otherwise it will be removed by removePlaceholder
        newRow.style.height = trHeight + 'px';
        newRow.style.minHeight = trHeight + 'px';
        newRow.style.display = 'none';

        const newCell = newRow.insertCell(0);
        newCell.colSpan = colCount;
        newCell.style.minHeight = trHeight + 'px';
        newCell.innerHTML = '&nbsp;';

        // Insert after the last real row (excluding cloned rows)
        const rows = getRealRows(allRows(spyElement));
        const lastRealRow = rows.length > 0 ? rows[rows.length - 1] : null;
        if (lastRealRow && lastRealRow.parentNode === tbodyRef) {
            insertAfter(newRow, lastRealRow);
        } else {
            tbodyRef.appendChild(newRow);
        }

        return newRow;
    };


    // An invisible HELPER element used to trigger the touch of the last element
    const lastRowGenerator = (trHeight: number) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null || tbodyRef.querySelector('tr') === null) return;

        const curEl = tbodyRef.querySelector('.row-obj-clonelast');
        if (curEl !== null) return;


        // Insert a row at the "index" of the table
        const newRow = document.createElement('tr');
        newRow.className = 'row-obj row-obj-clonelast';
        newRow.dataset.order = allRows(spyElement).length.toString();
        newRow.style.height = trHeight + 'px';
        

        // Insert a cell in the row at index
        const newCell = newRow.insertCell(0);
        newCell.colSpan = tbodyRef.querySelector('tr').children.length;

        // Append a text node to the cell
        const newText = document.createTextNode(' ');
        newCell.appendChild(newText);

        //
        lastPlaceholderGenerator(trHeight);

        return newRow;
    };


    const removePlaceholder = () => {
        // Use cached tbodyRef
        let tbodyRef = dragCacheRef.current.tbodyRef;
        if (!tbodyRef) {
            tbodyRef = getTbody(spyElement);
            dragCacheRef.current.tbodyRef = tbodyRef;
        }
        
        if (tbodyRef === null) return;

        // Optimize: use querySelectorAll and remove in batch
        const placeholders = tbodyRef.querySelectorAll(`[data-placeholder]`);
        if (placeholders.length > 0) {
            // Use DocumentFragment for batch removal (though in this case direct removal is fine)
            placeholders.forEach((node: any) => {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            });
        }
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
        if (_allRows.length > 0) {
            const lastEl: any = lastRowGenerator((_allRows.at(-1) as any).clientHeight);
            if (typeof _allRows.at(-1) !== 'undefined') {
                insertAfter(lastEl, _allRows.at(-1));
            }
        }

        
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
    // Optimized with requestAnimationFrame, throttling and caching
    const handledragOver = useCallback((e: any) => {
        // Always prevent default in sync code
        e.preventDefault();
        
        // Use cached draggedObj and tbodyRef
        const currentDraggedObj = dragCacheRef.current.draggedObj || draggedObj;
        if (currentDraggedObj === null) return;

        let tbodyRef = dragCacheRef.current.tbodyRef;
        if (!tbodyRef) {
            tbodyRef = getTbody(spyElement);
            if (tbodyRef === null) return;
            dragCacheRef.current.tbodyRef = tbodyRef;
        }

        // Early return for placeholder targets
        if (e.target.classList.contains('row-placeholder')) return;

        const itemsWrapper = e.target.parentNode;
        if (!itemsWrapper || !itemsWrapper.classList || !itemsWrapper.classList.contains('row-obj')) {
            return;
        }

        // Skip cloned elements - they should not be valid drop targets
        if (itemsWrapper.classList.contains('row-obj-lastplaceholder')) {
            return;
        }

        // Check if we're still over the same row (avoid unnecessary operations)
        const currentOrder = Number(itemsWrapper.dataset.order);
        if (dragCacheRef.current.lastOverOrder === currentOrder) {
            return; // Same target, skip
        }

        // console.log(' --> overObj: ', itemsWrapper);

        // Use requestAnimationFrame for smoother DOM updates
        // Cancel previous frame if pending
        if (dragCacheRef.current.rafId !== null) {
            cancelAnimationFrame(dragCacheRef.current.rafId);
        }

        // Store references for use in RAF callback
        const targetWrapper = itemsWrapper;
        const targetOrder = currentOrder;

        dragCacheRef.current.rafId = requestAnimationFrame(() => {
            overObj = targetWrapper;
            dragCacheRef.current.overObj = targetWrapper;
            dragCacheRef.current.lastOverOrder = targetOrder;

            currentDraggedObj.style.display = 'none';
            removePlaceholder();


            // Cache allRows result to avoid multiple queries
            let cachedRows = dragCacheRef.current.allRowsCache;
            const now = Date.now();
            if (!cachedRows || now - dragCacheRef.current.lastUpdateTime > 100) {
                cachedRows = allRows(spyElement);
                dragCacheRef.current.allRowsCache = cachedRows;
                dragCacheRef.current.lastUpdateTime = now;
            }

            // Filter out cloned elements to get real rows count
            const realRows = getRealRows(cachedRows);
            const totalRows = realRows.length;
            const overOrder = Number(overObj.dataset.order);
            
            // When hovering over the last real row, use its height for placeholder
            // Otherwise use the overObj's height
            const isOverLastRow = overOrder === totalRows - 1 && realRows.length > 0 && realRows[totalRows - 1];
            const placeholderHeight = isOverLastRow
                ? realRows[totalRows - 1].clientHeight
                : overObj.clientHeight;

            const placeholder = placeholderGenerator(placeholderHeight);
            
            if (placeholder) {
                const draggedOrder = Number(currentDraggedObj.dataset.order);
                //console.log(' --> drag index list: ', draggedOrder, overOrder, totalRows - 1);
                tbodyRef.insertBefore(placeholder, overObj);
            }

            dragCacheRef.current.rafId = null;
        });

    }, [sortData, spyElement]);


    const handleDragStart = useCallback((e: any) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        setIsDragging(true);

        draggedObj = e.currentTarget;
        // Cache draggedObj and tbodyRef for performance
        dragCacheRef.current.draggedObj = draggedObj;
        dragCacheRef.current.tbodyRef = tbodyRef;
        dragCacheRef.current.lastOverOrder = null; // Reset
        
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', draggedObj);

        draggedObj.classList.add('dragging');
        
        // Cache allRows and use cached result
        const cachedRows = allRows(spyElement);
        dragCacheRef.current.allRowsCache = cachedRows;
        dragCacheRef.current.lastUpdateTime = Date.now();
        
        // Cache colCount if not already cached
        if (dragCacheRef.current.colCount === 0) {
            const firstRow = tbodyRef.querySelector('tr');
            if (firstRow) {
                dragCacheRef.current.colCount = firstRow.children.length;
            }
        }
        
        const lastRow: any = cachedRows[cachedRows.length - 1];
        if (lastRow && !lastRow.classList.contains('row-obj-lastplaceholder')) {
            lastRow.style.setProperty('display', 'table-row', "important");
        }

        // callback
        const dragStart: Function = (callback: Function) => {
            callback.call(null, draggedObj, sortData, sortDataByIndex(sortData as never, data as never));
        };
        onRowDrag?.(dragStart, null);


    }, [handledragOver, sortData, data, spyElement, onRowDrag]);

    const handleDragEnd = useCallback((e: any) => {
        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        setIsDragging(false);

        // Use cached draggedObj if available
        const currentDraggedObj = dragCacheRef.current.draggedObj || draggedObj;
        const currentOverObj = dragCacheRef.current.overObj || overObj;
        
        if (currentDraggedObj) {
            currentDraggedObj.style.display = 'table-row';
            currentDraggedObj.classList.remove('dragging');
        }
        
        removePlaceholder();
        tbodyRef?.classList.remove('drag-trigger-mousedown');

        // Cancel any pending animation frame
        if (dragCacheRef.current.rafId !== null) {
            cancelAnimationFrame(dragCacheRef.current.rafId);
            dragCacheRef.current.rafId = null;
        }

        if (currentOverObj === null) {
            // Reset cache
            dragCacheRef.current.draggedObj = null;
            dragCacheRef.current.overObj = null;
            dragCacheRef.current.allRowsCache = null;
            dragCacheRef.current.lastOverOrder = null;
            return;
        }

        // update state
        let curData: number[] = [];
        curData = JSON.parse(JSON.stringify(sortData));
        let from = Number(currentDraggedObj.dataset.order);
        let to = Number(currentOverObj.dataset.order);
        
        // Get real rows to determine the actual last row index
        const allRowsForLastIndex = allRows(spyElement);
        const realRows = getRealRows(allRowsForLastIndex);
        const actualLastRowIndex = realRows.length - 1;
        
        // Standard drag-and-drop logic:
        // When dragging from a lower index to a higher index, we need to decrement 'to'
        // because removing the element at 'from' causes all subsequent elements to shift left by 1
        // However, when dragging to the last position, we want to swap with the last element
        // After removing 'from', if we want to swap with the last element, we should insert
        // at the position that will result in the dragged element being at the last position
        if (from < to) {
            // Special case: dragging to the last position
            // We want to swap with the last element, so after removing 'from',
            // we should insert at the new last position (which is curData.length - 1)
            // Since 'to' is the original last index, and we're removing 'from' (which is < 'to'),
            // the new last position after removal is still 'to' (no shift because 'from' is before 'to')
            // Wait, that's not right. If we remove 'from', elements from 'from+1' to 'to' shift left by 1
            // So 'to' becomes 'to-1'. But we want to insert at the last position, which is 'to-1'
            // So we should decrement 'to' as normal. But then the element will be at 'to-1', not 'to'
            // 
            // Actually, the issue is: when dragging to the last element, we want to SWAP with it
            // So the dragged element should end up at the last position, and the last element should
            // end up at the dragged element's original position
            // 
            // Let's think step by step with an example: [A, B, C, D, E], from=1 (B), to=4 (E)
            // We want result: [A, C, D, E, B] (B and E swapped)
            // Step 1: Remove B -> [A, C, D, E] (indices 0-3)
            // Step 2: Insert B at position 4 -> [A, C, D, E, B] ✓
            // So 'to' should be 4 (not decremented) to get the correct result
            if (to === actualLastRowIndex) {
                // Don't decrement 'to' when dragging to the last position
                // This ensures the element is inserted at the last position after removal
            } else {
                // Normal case: dragging forward but not to the last position
                to--;
            }
        }
        // If from >= to, no adjustment needed (dragging backward)

        // Optimize: simplify the sorting logic (the nested loop was inefficient)
        curData.splice(to, 0, curData.splice(from, 1)[0]);
        const newData: number[] = [...curData]; // Direct copy instead of nested loop

        setSortData(newData);

        // Performance optimization: batch DOM updates using a map
        const table = spyElement.querySelector('table');
        if (!table) return;
        
        const tbody = table.querySelector('tbody');
        if (!tbody) return;

        // Get all rows once and create a map for faster lookups
        // Support both data-key attribute (user-provided) and data-order fallback
        const allRowsElements = Array.from(allRows(spyElement));
        
        // Create a map: original index (from sortData) -> row element
        const rowMap = new Map<number, HTMLElement>();
        allRowsElements.forEach((row: any) => {
            // First try to use data-key attribute (if user provided it)
            const dataKey = row.getAttribute('data-key');
            if (dataKey) {
                const match = dataKey.match(/row-(\d+)/);
                if (match) {
                    const index = Number(match[1]);
                    rowMap.set(index, row);
                    return;
                }
            }
            
            // Fallback: use data-order to match with sortData indices
            const currentOrder = Number(row.dataset.order);
            if (sortData && !isNaN(currentOrder) && currentOrder >= 0 && currentOrder < sortData.length) {
                const originalIndex = sortData[currentOrder];
                if (originalIndex !== undefined) {
                    rowMap.set(originalIndex, row);
                }
            }
        });

        // Update order attributes using the map (batch operation)
        newData.forEach((curId: any, order: number) => {
            const _el = rowMap.get(curId);
            if (_el !== null && _el !== undefined) {
                _el.dataset.order = order.toString();
            }
        });

        // Performance optimization: Use DocumentFragment to batch DOM updates
        // NOTE: Keep the special last placeholder row (`row-obj-lastplaceholder`)
        // out of the main sort, otherwise it may jump to the top after each drag.
        const lastPlaceholderRow = allRowsElements.find(
            (row: any) => row.classList && row.classList.contains('row-obj-lastplaceholder')
        );

        const rowsToSort = lastPlaceholderRow
            ? allRowsElements.filter(row => row !== lastPlaceholderRow)
            : allRowsElements;

        const sorter = (a: any, b: any) => {
            const txt1 = Number(a.dataset.order);
            const txt2 = Number(b.dataset.order);
            return txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0;
        };
        
        const sorted = [...rowsToSort].sort(sorter).reverse();

        // Ensure the last placeholder row always stays at the bottom
        if (lastPlaceholderRow) {
            sorted.push(lastPlaceholderRow);
        }
        
        // Use DocumentFragment to minimize reflows
        const fragment = document.createDocumentFragment();
        sorted.forEach(e => fragment.appendChild(e));
        tbody.appendChild(fragment);

        // callback
        const dragEnd: Function = (callback: Function) => {
            callback.call(null, currentDraggedObj, newData, sortDataByIndex(newData as never, data as never));
        };
        onRowDrag?.(null, dragEnd);

        // init clone <tr>
        // !!! It needs to be put at the end of the code to fix the location of the clone element
        const _allRows = allRows(spyElement);
        dragCacheRef.current.allRowsCache = _allRows;
        dragCacheRef.current.lastUpdateTime = Date.now();
        

        // Reset cache
        dragCacheRef.current.draggedObj = null;
        dragCacheRef.current.overObj = null;
        dragCacheRef.current.lastOverOrder = null;

    }, [sortData, spyElement, data, onRowDrag]);



    useEffect(() => {
        if (enabled && spyElement) {
            if (Array.isArray(data) && data.length > 0) {  

                // 1. Remove the tag to allow initRowColProps to re-execute (!!!REQUIRED)
                delete spyElement.dataset.customPropsInit;
                delete spyElement.dataset.rowColPropsInit;

                // 2. Set order for new data items (although this is only in-memory data and has no direct impact on the DOM)
                // !!! REQUIRED "data.length > 0" to avoid data-order cannot be assigned when asynchronous data is empty
                data.forEach((item: any, i: number) => {
                    item.order = i;
                });

                // 3. Initialize custom props of table elements
                initOrderProps(spyElement);
                initRowColProps(spyElement);

                // 4. Initialize drag & drop data
                initDragDropData();
                 

            }
        }
    }, [data, enabled, spyElement, ...deps]);

    return {
        isDragging,
        dragHandlers: {
            handleDragStart,
            handleDragOver: handledragOver,
            handleDragEnd,
        },
        handleTbodyEnter,
        handleTbodyLeave
    };
}


export default useTableDraggable;

