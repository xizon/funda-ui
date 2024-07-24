/**
 * Handles the event of sortable table
 * 
 * @usage:

const App = () => {

    const sortableTable = true;
    const rootRef = useRef<any>(null);

    useTableSort({
        enabled: sortableTable && rootRef.current,
        spyElement: rootRef.current
    }, [rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );
};

 */
import { useEffect } from 'react';

import { getTbody, allRows, sortDataByIndex, initOrderProps, initRowColProps } from '../func';

interface UseTableSortProps {
    enabled: boolean;
    data?: any[];
    spyElement?: any;
    fieldType: 'text' | 'number' | 'date';
    onColSort?: (fetchData: any) => void;
    onClick?: (e: any) => void;
}

function useTableSort({
    enabled,
    data,
    spyElement,
    fieldType,
    onColSort,
    onClick
}: UseTableSortProps, deps: any[]) {

   
    let inverse = false;

    function handleSortList(e: any) {
        if (typeof enabled === 'undefined' || enabled === false) return;

        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        const el = e.currentTarget.closest('[data-table-col]');
        if (el === null) return;


        const filterType = fieldType || 'text';
        const curIndex = el.dataset.tableCol;
        const targetComparator = [].slice.call(tbodyRef.querySelectorAll(`[data-table-col="${curIndex}"]`));


        //sort of HTML elements
        const sortBy = function (a: any, b: any) {

            let txt1 = a.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase(),
                txt2 = b.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase();

            //type of number
            if (filterType == 'number') {
                txt1 = Number(txt1.replace(/[^0-9.-]+/g, ''));
                txt2 = Number(txt2.replace(/[^0-9.-]+/g, ''));
            }

            //type of date
            if (filterType == 'date') {
                txt1 = new Date(txt1);
                txt2 = new Date(txt2);
            }

            //add filter class
            allRows(spyElement).forEach((node: any) => {
                node.classList.add('newsort');
            });

            inverse = !inverse;

            return txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0;
        }

        targetComparator.sort(sortBy);

        //console.log( 'targetComparator:', targetComparator );
        //console.log( 'inverse:', self.inverse );

        if (!inverse) targetComparator.reverse();

        allRows(spyElement).forEach((node: any) => {
            node.remove();
        });

        for (let i = 0; i < targetComparator.length; i++) {
            const curRow = (targetComparator[i] as any).parentNode;
            tbodyRef.appendChild(curRow);
        }

        // get latest order
        const sortData: number[] = [];
        allRows(spyElement).forEach((node: any) => {
            sortData.push(Number(node.dataset.order));
        });
        
        // callback
        onColSort?.(sortDataByIndex(sortData as never, data as never));
        onClick?.(e);

    }

    useEffect(() => {
        if (enabled) {
            if (Array.isArray(data)) {
                data.forEach((item: any, i: number) => {
                    item.order = i;
                });


                // Initialize custom props of table elements
                initOrderProps(spyElement);
                initRowColProps(spyElement);
   
            }
        }
    }, [data, enabled, spyElement, ...deps]);

    return {
        handleSortList
    }
}


export default useTableSort;

