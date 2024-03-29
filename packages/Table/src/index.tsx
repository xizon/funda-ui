import React, { useId, useEffect, useState, useRef, useCallback } from 'react';


import { debounce } from './utils/performance';

import TableRow from './TableRow';
import TableHeaders from './TableHeaders';
import TableSummaries from './TableSummaries';
import TableColgroup from './TableColgroup';


import { getChildren } from './utils/dom'; 
import { formatRowControlVal } from './table-utils'; 


type TableProps = {
    tableCheckRef?: React.RefObject<any>;
    wrapperClassName?: string;
    tableClassName?: string;
    bodyClassName?: string;
    headClassName?: string;
    footClassName?: string;
    rowActiveClassName?: string;
    checkable?: boolean;
    useRadio?: boolean;
    draggable?: boolean;
    sortable?: boolean;
    data: any;
    bordered?: boolean;
    colGroup?: boolean;
    responsive?: boolean;
    enhancedResponsive?: boolean;
    enhancedResponsiveWithScrollBar?: boolean;
    /** -- */
    id?: string;
    onCellMouseEnter?: (el: any) => void;
    onCellMouseLeave?: (el: any) => void;
    onCellClick?: (el: any) => void;
    onRowMouseEnter?: (el: any) => void;
    onRowMouseLeave?: (el: any) => void;
    onRowClick?: (el: any) => void;
    onHeadCellMouseEnter?: (el: any) => void;
    onHeadCellMouseLeave?: (el: any) => void;
    onHeadCellClick?: (el: any) => void;
    onClick?: (el: any, val: any) => void;
    onCheck?: (val: any) => void;
    onDrag?: (dragStart: any, dragEnd: any ) => void;
    onRenderFinished?: (res: boolean) => void;
};


const Table = (props: TableProps) => {
    const {
        tableCheckRef,
        wrapperClassName,
        tableClassName,
        bodyClassName,
        headClassName,
        footClassName,
        rowActiveClassName,
        checkable,
        useRadio,
        draggable,
        sortable,
        data,
        bordered,
        colGroup,
        responsive,
        enhancedResponsive,
        enhancedResponsiveWithScrollBar,
        id,
        onCellMouseEnter,
        onCellMouseLeave,
        onCellClick,
        onRowMouseEnter,
        onRowMouseLeave,
        onRowClick,
        onHeadCellMouseEnter,
        onHeadCellMouseLeave,
        onHeadCellClick,
        onClick,
        onCheck,
        onDrag,
        onRenderFinished
    } = props;


    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const tbodyRef = useRef<any>(null);
    
    const [checkedPrint, setCheckedPrint] = useState<any[]>([]);
    const [checkedData, setCheckedData] = useState<any[]>([]);
    const [checkedRootData, setCheckedRootData] = useState<any[]>([]);
    const [sortData, setSortData] = useState<any[] | undefined>([]);
    const [mainUpdate, setMainUpdate] = useState<boolean>(false);

    const windowResizeUpdate = debounce(handleWindowUpdate, 50);

    const _headers = data.hasOwnProperty('headers') ? data.headers : false;
    const _summaries = data.hasOwnProperty('summaries') ? data.summaries : false;
    const _fieldsChecked = data.hasOwnProperty('fieldsChecked') ? data.fieldsChecked : false;
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;


    //Set the class names of different styles
    //
    let tableClasses = '';
    if (bordered) tableClasses += ' table-bordered';
    if (colGroup) tableClasses += ' table-colgroup';


    //
    let responsiveClasses = '';
    if (typeof responsive === 'undefined' || responsive === true) responsiveClasses += ' table-responsive';

    //
    let enhancedResponsiveClasses = '';
    if (enhancedResponsive && !enhancedResponsiveWithScrollBar) enhancedResponsiveClasses += ' table-enhanced-responsive';
    if (enhancedResponsiveWithScrollBar && !enhancedResponsive) enhancedResponsiveClasses += ' table-enhanced-responsive-scrolled';

    //
    let checkableClasses = '';
    if (checkable) checkableClasses += ' has-checkbox';

    //
    let radioClasses = '';
    if (useRadio) radioClasses += ' use-radio';


    
    //
    let draggableClasses = '';
    if (draggable) draggableClasses += ' allow-dragdrop';

    //
    let sortableClasses = '';
    if (sortable) sortableClasses += ' enable-sort';



    // ================================================================
    // generic
    // ================================================================
    const insertAfter = (newNode: any, existingNode: any) => {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    };
    
    const allRows = () => {
        return [].slice.call(tbodyRef.current.children);
    };

    const printData = (data: number[]) => {
        const _res: any[] = [];
        data.forEach( (v: number) => {
            _res.push(formatRowControlVal(rootRef.current.querySelector('table').querySelector(`tbody [data-key="row-${v}"]`), idRes));
        });
        return _res;
    };

    
    
    // ================================================================
    // responsive table initialization
    // ================================================================
    function handleWindowUpdate() {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if (window.innerWidth != windowWidth) {

            // Update the window width for next time
            windowWidth = window.innerWidth;

            // Do stuff here
            tableDataScrolledInit(windowWidth);

        }
    }

    function maxDimension(elements: any) {
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


    function tableDataScrolledInit(w: number) {

        if (w <= 768 && tbodyRef.current.querySelector('tr') !== null) {
            //get maxHeight of per row
            for (let i = 0; i < tbodyRef.current.querySelector('tr').children.length; i++ ) {
                const tbodyRows = rootRef.current.querySelectorAll(`tbody tr [data-table-col="${i}"]`);
                const maxHeight = maxDimension(tbodyRows).height;
                [].slice.call(tbodyRows).forEach((row: any) => {
                    row.style.height = maxHeight + 'px';
                });

                //
                const theadRows = rootRef.current.querySelectorAll(`thead tr [data-table-col="${i}"]`);
                [].slice.call(theadRows).forEach((row: any) => {
                    row.style.height = maxHeight + 'px';
                });
            }

        } else {
            [].slice.call(rootRef.current.querySelectorAll('tbody td, tbody th, thead th')).forEach((node: any, i: number) => {
                node.removeAttribute('style');
            });
        }

    }



    // ================================================================
    // checkboxes data
    // ================================================================
    function initCheckboxesData() {

        const _checkboxes = getChildren(rootRef.current.querySelector('table').querySelector('tbody'), '[type="checkbox"]');
        const _data: any[] = [];
        [].slice.call(_checkboxes).forEach((node: any, i: number) => {
            _data.push({
                key: `row-${i}`,
                checked: false
            });
        });
        setCheckedData(_data);
        setCheckedRootData([{
            key: `row-all`,
            checked: false
        }]);

    }


    // ================================================================
    // sort with headers
    // ================================================================
    let inverse = false;
	function handleSortList(e: any) {
        const el = e.currentTarget.parentNode;
		const filterType  = el.dataset.sortType;
		const curIndex = el.dataset.tableCol;
		const targetComparator = [].slice.call(tbodyRef.current.querySelectorAll(`[data-table-col="${curIndex}"]`));
	
		if ( filterType === 'false' || filterType === '0' ) return false;


		//sort of HTML elements
		const sortBy = function(a: any, b: any) {

			let txt1 = a.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase(),
				txt2 = b.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase();	

			//type of number
			if ( filterType == 'number' ) {
				txt1 = Number( txt1.replace(/[^0-9.-]+/g, '' ) );
				txt2 = Number( txt2.replace(/[^0-9.-]+/g, '' ) );
			}

			//type of date
			if ( filterType == 'date' ) {
				txt1 = new Date( txt1 );
				txt2 = new Date( txt2 );	
			}	

			//add filter class
            allRows().forEach((node: any) => {
                node.classList.add('newsort');
            });
	
			inverse = !inverse;

			return txt2<txt1 ? -1 : txt2>txt1 ? 1 : 0;
		}

		targetComparator.sort(sortBy);

		//console.log( 'targetComparator:', targetComparator );
		//console.log( 'inverse:', self.inverse );

		if ( !inverse ) targetComparator.reverse();

        allRows().forEach((node: any) => {
            node.remove();
        });

		for (let i = 0; i < targetComparator.length; i++) {
			const curRow = (targetComparator[i] as any).parentNode;
			tbodyRef.current.appendChild(curRow);
		}

	}
	



    // ================================================================
    //drag & drop
    // ================================================================
    let draggedObj: any = null;
    let overObj: any = null;

    const placeholderGenerator = (trHeight: number) => {

        // Insert a row at the "index" of the table
        const newRow = document.createElement('tr');
        newRow.className = 'row-placeholder';
        newRow.dataset.placeholder = 'true';
        newRow.style.height = trHeight + 'px';

        // Insert a cell in the row at index
        const newCell = newRow.insertCell(0);
        newCell.colSpan = tbodyRef.current.querySelector('tr').children.length;

        // Append a text node to the cell
        const newText = document.createTextNode(' ');
        newCell.appendChild(newText);

        return newRow;
    };

    const lastRowGenerator = (trHeight: number) => {

        // Insert a row at the "index" of the table
        const newRow = document.createElement('tr');
        newRow.className = 'row-obj row-obj-clonelast';
        newRow.dataset.id = allRows().length.toString();
        newRow.style.height = trHeight + 'px';
        newRow.style.display = 'none';

        // Insert a cell in the row at index
        const newCell = newRow.insertCell(0);
        newCell.colSpan = tbodyRef.current.querySelector('tr').children.length;

        // Append a text node to the cell
        const newText = document.createTextNode(' ');
        newCell.appendChild(newText);

        return newRow;
    };


    const removePlaceholder = () => {
        // Delete row at the "index" of the table
        const placeholder = [].slice.call(tbodyRef.current.querySelectorAll(`[data-placeholder]`));
        placeholder.forEach((node: any) => {
            tbodyRef.current.removeChild(node);
        });

    };

    function handleTbodyLeave(e: any) {
        tbodyRef.current.classList.remove('drag-trigger-mousedown');
    }

    // events fired on the drop targets
    const handledragOver = useCallback((e: any) => {
        e.preventDefault();
        if (draggedObj === null) return;

        draggedObj.style.display = 'none';
        
        
        if (e.target.classList.contains('row-placeholder')) return;

        const itemsWrapper = e.target.parentNode;
        if (itemsWrapper.classList.contains('row-obj')) {
            overObj = itemsWrapper;
            removePlaceholder();
      
            if ( Number(overObj.dataset.id) === allRows().length - 1) {
                tbodyRef.current.insertBefore(placeholderGenerator((allRows().at(-2) as any).clientHeight), overObj);
            } else {
                tbodyRef.current.insertBefore(placeholderGenerator(overObj.clientHeight), overObj);
            }

            
        }

    }, [sortData]);
    

    const handleDragStart = useCallback((e: any) => {
        draggedObj = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', draggedObj);

        draggedObj.classList.add( 'dragging' );
        (allRows().at(-1) as any).style.setProperty('display', 'table-row', "important");
        
        
        // callback
        const dragStart: Function = (callback: Function) => {
            callback.call(null, draggedObj, sortData, printData(sortData as never));
        };
        onDrag?.(dragStart, null);
        
    }, [handledragOver]);

    const handleDragEnd = useCallback((e: any) => {
        draggedObj.style.display = 'table-row';
        removePlaceholder();

        draggedObj.classList.remove( 'dragging' );
        tbodyRef.current.classList.remove('drag-trigger-mousedown');
        

        if ( overObj === null ) return;

        // update state
        let curData: number[] = [];
        curData = JSON.parse(JSON.stringify(sortData));
        let from = Number(draggedObj.dataset.id);
        let to = Number(overObj.dataset.id);
        if (from < to) to--;

        //sort data
        const newData: number[] = [];

        //console.log('--> data1:', curData);

        curData.splice(to, 0, curData.splice(from, 1)[0]);

        for (let i = 0; i < curData.length; i++) {
            for (let j = 0; j < curData.length; j++) {

                if (curData[i] === curData[j]) {
                    newData.push(curData[j] as never);
                }
            }
        }
        

        //console.log("--> data2: ", newData);
        setSortData(newData);

        // reset data-id in order to sort data
        newData.forEach((curId: any, order: number) => {
            rootRef.current.querySelector('table').querySelector(`tbody [data-key="row-${curId}"]`).dataset.id = order;
        });


        // sort elements
        const categoryItemsArray = allRows();
        const sorter = (a: any, b: any) => {
            return a.dataset.id.localeCompare(b.dataset.id); // sorts based on alphabetical order
        }
        const sorted = categoryItemsArray.sort(sorter);
        sorted.forEach(e => rootRef.current.querySelector('table').querySelector('tbody').appendChild(e));
       

        // callback
        const dragEnd: Function = (callback: Function) => {
            callback.call(null, draggedObj, newData, printData(newData as never));
        };
        onDrag?.(null, dragEnd);



    }, [sortData]);



    useEffect(() => {

        
        // Update status of children components
        //--------------
        setMainUpdate((prevState) => !prevState);


        // Initialize sort list data
        //--------------
        const listIndexes: any[] | undefined = allRows().map((node: any, i: number) => i);
        setSortData(listIndexes);

        // Initialize checkboxes data
        //--------------
        initCheckboxesData();


        // With scroll bars
        //--------------
        if (enhancedResponsiveWithScrollBar) {
            let windowWidth = window.innerWidth;
            tableDataScrolledInit(windowWidth);
        }


        //drag & drop
        //--------------
        if ( draggable ) {
            insertAfter(lastRowGenerator((allRows().at(-1) as any).clientHeight), allRows().at(-1));
        }
        
     
        // Add function to the element that should be used as the scrollable area.
        //--------------
        window.removeEventListener('resize', windowResizeUpdate);
        window.addEventListener('resize', windowResizeUpdate);


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            window.removeEventListener('resize', windowResizeUpdate);
        };

    }, [data]);

    useEffect(() => {
        // display after render finished
        onRenderFinished?.(true);
    }, []);


    return (
        <>

            <div ref={rootRef} id={idRes} className={`table__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : `mb-3 position-relative`} ${responsiveClasses} ${enhancedResponsiveClasses} ${checkableClasses} ${radioClasses} ${draggableClasses} ${sortableClasses}`}>

                <table className={`${tableClassName || tableClassName === '' ? tableClassName : "table"} ${tableClasses}`}>

                    <TableHeaders 
                        data={_headers} 
                        useRadio={useRadio || false}
                        headClassName={headClassName} 
                        checkboxNamePrefix={idRes} 
                        sortable={sortable}
                        updateCheckedPrint={setCheckedPrint}
                        getCheckedPrint={checkedPrint}
                        updategetCheckedData={setCheckedData}
                        getCheckedData={checkedData}
                        updategetCheckedRootData={setCheckedRootData}
                        getCheckedRootData={checkedRootData}
                        onCheck={onCheck}
                        evSort={handleSortList}
                        evHeadCellMouseEnter={onHeadCellMouseEnter}
                        evHeadCellMouseLeave={onHeadCellMouseLeave}
                        evHeadCellClick={onHeadCellClick}
                    />

                    <TableSummaries 
                        data={_summaries} 
                        footClassName={footClassName} 
                    />

                    {data.hasOwnProperty('fields') && colGroup ? <TableColgroup 
                        data={data.fields} 
                    /> : null}


                    <tbody ref={tbodyRef}  className={bodyClassName ? bodyClassName : ''} onDragOver={handledragOver} onMouseLeave={handleTbodyLeave}>

                        {data.hasOwnProperty('fields') ? data.fields.map((item: any, i: number) => {
                            return <TableRow 
                                        key={i + String(mainUpdate)} // Trigger child component update when prop of parent changes
                                        index={i}
                                        tableRootRef={rootRef}
                                        tableCheckRef={tableCheckRef}
                                        rowActiveClassName={rowActiveClassName}
                                        fieldsChecked={_fieldsChecked}
                                        rowKey={`row-${i}`} 
                                        headerLabel={_headers} 
                                        data={item} 
                                        checkboxNamePrefix={idRes} 
                                        updateCheckedPrint={setCheckedPrint}
                                        getCheckedPrint={checkedPrint}
                                        updategetCheckedData={setCheckedData}
                                        getCheckedData={checkedData}
                                        updategetCheckedRootData={setCheckedRootData}
                                        getCheckedRootData={checkedRootData}
                                        onClick={onClick}
                                        onCheck={onCheck}
                                        draggable={draggable || false} 
                                        useRadio={useRadio || false}
                                        evDragEnd={handleDragEnd}
                                        evDragStart={handleDragStart}
                                        evCellMouseEnter={onCellMouseEnter}
                                        evCellMouseLeave={onCellMouseLeave}
                                        evCellClick={onCellClick}
                                        evRowMouseEnter={onRowMouseEnter}
                                        evRowMouseLeave={onRowMouseLeave}
                                        evRowClick={onRowClick}
                                    />;
                        }) : ""
                        }

                    </tbody>

                </table>
            </div>

        </>
    )
};

export default Table;