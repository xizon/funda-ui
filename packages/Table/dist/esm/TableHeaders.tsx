import React from 'react';


// HAS CHECKBOX

import {
    getChildren
} from 'funda-utils';

import { formatCheckboxControlVal, setCheckboxCheckedData, getAllCheckboxInput } from './table-utils';

/* Table Headers
-------------------------------------------------*/
type TableHeadersProps = {
    data: any[];
    useRadio?: boolean;
    headClassName?: string;
    checkboxNamePrefix?: string;
    sortable?: boolean;
    getCheckedPrint?: any[];
    updateCheckedPrint?: any;
    getCheckedData?: any[];
    updategetCheckedData?: any;
    getCheckedRootData?: any[];
    updategetCheckedRootData?: any;
    onCheck?: (val: any, el: any, checked: boolean) => void;
    evSort?: (option: any) => void;
    evHeadCellMouseEnter?: (el: any) => void | undefined;
    evHeadCellMouseLeave?: (el: any) => void | undefined;
    evHeadCellClick?: (el: any) => void | undefined;
};

const TableHeaders = (props: TableHeadersProps) => {

    const {
        data,
        useRadio,
        headClassName,
        checkboxNamePrefix,
        sortable,
        getCheckedPrint,
        updateCheckedPrint,
        getCheckedData,
        updategetCheckedData,
        getCheckedRootData,
        updategetCheckedRootData,
        onCheck,
        evSort,
        evHeadCellMouseEnter,
        evHeadCellMouseLeave,
        evHeadCellClick
    } = props;


    function checkedAct(el: any, val: any) {

        if (el === null) return;

        const _checkedData: any = getCheckedData;
        let _res: any = getCheckedPrint;


        // STEP 1:
        // Current checkbox
        //-----------
        if (val === true) {
            updategetCheckedRootData([{
                key: `row-all`,
                checked: true
            }]);
        } else {
            updategetCheckedRootData([{
                key: `row-all`,
                checked: false
            }]);
        }


        // STEP 2:
        // All child checkboxes
        //-----------
        const _checkboxes: any[] = getAllCheckboxInput(el);
        _checkboxes.forEach((node: any) => {
            if (val === true) {
                setCheckboxCheckedData(_checkedData, node.dataset.key, true);
                _res.push(formatCheckboxControlVal(node));
            } else {
                setCheckboxCheckedData(_checkedData, node.dataset.key, false);
                _res = [];

            }
        });


        // STEP 3:
        // Array deduplication
        //-----------
        _res = _res.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.key === item.key)))


        // STEP 4:
        // Update checked data
        //-----------
        updategetCheckedData(_checkedData);

        // STEP 5:
        // Update checked print
        //-----------
        updateCheckedPrint(_res);


        // STEP 6:
        // callback
        //-----------
        onCheck?.(_res, el, val);

    }
    
    return data ? (
        <>
            <thead className={headClassName ? headClassName : ''}>
                <tr>
                    {data.map((item: any, i: number) => {

                        const itemSortable = item.type === false || item.type?.toString() === 'false' || item.type?.toString() === '0' || typeof item.type === 'undefined' ? false : true;

                        return <th 
                            key={i} 
                            scope="col" 
                            data-sort-type={item.type} 
                            data-table-text={typeof item.content === 'string' ? item.content.replace(/(<([^>]+)>)/ig, '') : item.content} 
                            data-table-col={i} 
                            data-use={item.data || ''}
                            style={item.style ? item.style : (item.width ? ((typeof window !== 'undefined' && window.innerWidth > 768) ? {width: item.width} : {}) : {})} 
                            className={item.className || ''}
                            onMouseEnter={(e: React.MouseEvent) => {
                                evHeadCellMouseEnter?.(e);
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                evHeadCellMouseLeave?.(e);
                            }}
                            onClick={(e: React.MouseEvent) => {
                                evHeadCellClick?.(e);
                            }}
                        >
                            {i === 0 ? <span className="checkbox-trigger" style={{visibility: useRadio ? 'hidden' : 'visible'}}>

                            <div className="form-check__wrapper">
                                <div className="form-check d-inline-block">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name={`checkbox-${checkboxNamePrefix}-all`}
                                        tabIndex={-1}
                                        data-index={-1}
                                        data-key="row-all"
                                        data-use=""
                                        value={`row-all`}
                                        checked={getCheckedRootData!.filter((cur: any) => cur.key === 'row-all')[0]?.checked}
                                        onChange={(e: any) => {
                                            checkedAct(e.target, !getCheckedRootData!.filter((cur: any) => cur.key === 'row-all')[0]?.checked);
                                        }}
                                    />

                                </div>

                            </div>
                   

                            </span> : null}
                            <span dangerouslySetInnerHTML={{ __html: `${item.content}` }}></span>
                            {sortable && itemSortable ? <span className="sort-trigger" onClick={evSort}><svg width="1em" height="1em" viewBox="0 0 18 18">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <path d="M9.5,3 L13,8 L6,8 L9.5,3 L9.5,3 Z M6,11 L13,11 L9.5,16 L6,11 L6,11 Z" id="path" fill="#000000">
                                    </path>
                                </g>
                            </svg></span> : null}

                        </th>;
                    })}

                    {useRadio ? <>
                        <th style={{display: 'none'}}></th>
                    </> : null}
                </tr>
            </thead>
        </>
    ) : null;

}

export default TableHeaders;

