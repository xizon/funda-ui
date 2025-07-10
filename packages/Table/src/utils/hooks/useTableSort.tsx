/**
 * Handles the event of sortable table
 * 
 * @usage:

const App = () => {

    const sortableTable = true;
    const rootRef = useRef<any>(null);

    useTableSort({
        enabled: sortableTable && rootRef.current,
        spyElement: rootRef.current,
        sortBy: (handleProcess: Function, filterType: string, inverse: boolean) => (a: Element, b: Element) => {
        
            // Custom comparison logic
            let v1 = a.textContent, v2 = b.textContent;
            if (filterType === 'number') {
                v1 = parseFloat(v1);
                v2 = parseFloat(v2);
            }
        
            let result = 0;
            if (filterType === 'text') {
                result = v1.localeCompare(v2);
            } else {
                result = v1 - v2;
            }
        
            // Apply display animation and status updates
            handleProcess();
        
            return inverse ? -result : result;
        }
    }, [rootRef]);

    return (
        <div 
            ref={rootRef} 
        >Test</div>
    );
};

 */
import { useEffect, useState } from 'react';

import { getTbody, allRows, sortDataByIndex, initOrderProps, initRowColProps } from '../func';


export interface UseTableSortProps {
    enabled: boolean;
    data?: any[];
    spyElement?: any;
    fieldType: 'text' | 'number' | 'date';
    isReverse?: boolean;
    onColSort?: (fetchData: any) => void;
    onClick?: (e: any) => void;
    sortBy?: (handleProcess: Function, filterType: string, inverse: boolean) => ((a: Element, b: Element) => number); // A function that determines the order of the elements. 
}

function useTableSort({
    enabled,
    data,
    spyElement,
    fieldType,
    isReverse = false,
    onColSort,
    onClick,
    sortBy
}: UseTableSortProps, deps: any[]) {

   
    const [inverse, setInverse] = useState<boolean>(false);

    function handleSortList(e: any) {
        if (typeof enabled === 'undefined' || enabled === false) return;

        const tbodyRef: any = getTbody(spyElement);
        if (tbodyRef === null) return;

        const el = e.currentTarget.closest('[data-table-col]');
        if (el === null) return;


        const filterType = fieldType || 'text';
        const curIndex = el.dataset.tableCol;
        const targetComparator = [].slice.call(tbodyRef.querySelectorAll(`[data-table-col="${curIndex}"]`));

        const handleProcess = function () {
            allRows(spyElement).forEach((node: any) => {
                node.classList.add('newsort');
            });

            setInverse(!inverse);
        };

        // 
        const defaultSortBy = function (a: Element, b: Element) {

            let txt1: any = a.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase(),
                txt2: any = b.innerHTML.replace(/(<([^>]+)>)/ig, '').toLowerCase();

            //type of number
            if (filterType == 'number') {
                txt1 = parseFloat(txt1.replace(/[^0-9.+-]+/g, ''));
                txt2 = parseFloat(txt2.replace(/[^0-9.+-]+/g, ''));
            }

            //type of date
            if (filterType == 'date') {
                txt1 = new Date(txt1);
                txt2 = new Date(txt2);
            }


            //add filter class
            handleProcess();

            
            // result
            if (filterType == 'text') {
                return isReverse
                    ? txt1.localeCompare(txt2, 'zh-CN', { sensitivity: 'base' })
                    : txt2.localeCompare(txt1, 'zh-CN', { sensitivity: 'base' });
            } else {
                return isReverse
                    ? (txt1 < txt2 ? -1 : txt1 > txt2 ? 1 : 0)
                    : (txt2 < txt1 ? -1 : txt2 > txt1 ? 1 : 0);
            }
            
        }

        // Use a custom sort method if available, otherwise default is used
        const sortFn = typeof sortBy === 'function' ? sortBy(handleProcess, filterType, inverse) : defaultSortBy;

        targetComparator.sort(sortFn);

        //console.log( 'targetComparator:', targetComparator );
        //console.log( 'inverse:', inverse );

        if (inverse) targetComparator.reverse();

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

