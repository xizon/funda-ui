import React, { useRef } from 'react';

import Checkbox from 'rpb-checkbox';
import Radio from 'rpb-radio';


import { getChildren } from './utils/dom'; 
import { removeItemOnce, formatCheckboxControlVal, setCheckboxCheckedData } from './table-utils'; 

/* Table Field Row
-------------------------------------------------*/
type TableFieldRowProps = {
    draggable?: boolean;
    useRadio?: boolean;
    cols?: number;
    content?: any;
    width?: string;
    className?: string;
    style?: React.CSSProperties;
    columnHeader?: string;
    index?: number;
    checkboxNamePrefix?: string;
    rowKey?: string;
    getCheckedPrint?: any[];
    updateCheckedPrint?: any;
    getCheckedData?: any[];
    updategetCheckedData?: any;
    getCheckedRootData?: any[];
    updategetCheckedRootData?: any; 
    onCheck?: (val: any) => void;
};

const TableFieldRow = (props: TableFieldRowProps) => {

    
    const {
        draggable,
        useRadio,
        cols,
        width,
        className,
        style,
        columnHeader,
        index,
        content,
        checkboxNamePrefix,
        rowKey,
        getCheckedPrint,
        updateCheckedPrint,
        getCheckedData,
        updategetCheckedData,
        getCheckedRootData,
        updategetCheckedRootData,
        onCheck,
    } = props;

    const contentRef = useRef<any>(null);
    const checkboxRef = useRef<any>(null);

    const rowIndex = rowKey?.replace('row-', '');


    function handleTbodyEnter(e: any) {
        e.target.closest('table').querySelector('tbody').classList.add('drag-trigger-mousedown');
    }

    return (
        <>
            <th scope="row" colSpan={cols} data-table-text={columnHeader} data-table-col={index} style={style ? style : (width ? ((typeof window !== 'undefined' && window.innerWidth > 768) ? {width: width} : {}) : {})} className={className || ''}>
                {draggable ? <span className="drag-trigger" data-id={rowIndex} onMouseEnter={handleTbodyEnter}>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                        <g>
                            <path d="M18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </span> : null}
                
                <span className="checkbox-trigger">
                    {useRadio ? <>
                        <Radio
                            wrapperClassName=""
                            options={`{
                                "":"${rowKey}"}`}
                            name={`checkbox-${checkboxNamePrefix}-0`}
                            tabIndex={-1}
                            data-index={`${rowIndex}`}
                            data-key={`${rowKey}`}
                            value={`${rowKey}`}
                            onClick={(e: any, val: any) => {

                                // callback
                                //-----------
                                onCheck?.(formatCheckboxControlVal(e.target));
                    
                                
                            }}

                        />
                   
                    </> : <>
                    <Checkbox
                            ref={checkboxRef}
                            wrapperClassName=""
                            name={`checkbox-${checkboxNamePrefix}-${rowIndex}`}
                            tabIndex={-1}
                            data-index={`${rowIndex}`}
                            data-key={`${rowKey}`}
                            value={`${rowKey}`}
                            checked={getCheckedData!.filter((cur: any) => cur.key === rowKey)[0]?.checked}
                            onChange={(e: any, val: any) => {

                                const _curKey: string = e.target.value;
                                const _checkedData: any = getCheckedData;

                                let _res: any = getCheckedPrint;
                        
                                
                                // STEP 1:
                                // Current checkbox
                                //-----------
                                if ( val === true ) {
                                    _res.push(formatCheckboxControlVal(e.target));
                                    setCheckboxCheckedData(_checkedData, _curKey, true);
                                } else {
                                    setCheckboxCheckedData(_checkedData, _curKey, false);
                                    _res = removeItemOnce(_res, _curKey);
                                    
                                }

                                // STEP 2:
                                // Array deduplication
                                //-----------
                                _res = _res.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.key === item.key)))



                                
                                // STEP 3:
                                // ALl parent checkboxes
                                //-----------
                                const _headRow = e.target.closest('table').querySelectorAll('thead th')[0];
                                if ( typeof _headRow !== 'undefined' ) {
                                    const _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
                                    const _checkboxes = getChildren(e.target.closest('table').querySelector('tbody'), '[type="checkbox"]');
                                    const _checkedLength = _checkboxes.filter((el: any) => {
                                        return el.checked === true;
                                    }).length;

                                    if ( _checkedLength === 0 ) {
                                        _rootCheckbox.indeterminate = false;
                                        updategetCheckedRootData([{
                                            key: `row-all`,
                                            checked: false
                                        }]);
                                    } else {
                                        if ( _checkedLength === _checkboxes.length )  {
                                            _rootCheckbox.indeterminate = false;
                                            updategetCheckedRootData([{
                                                key: `row-all`,
                                                checked: true
                                            }]);
                                        }
                                        
                                        if ( _checkedLength < _checkboxes.length )  {
                                            updategetCheckedRootData([{
                                                key: `row-all`,
                                                checked: false
                                            }]);
                                            _rootCheckbox.indeterminate = true;
                                            
                                        }
                                    }

                                }


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
                                onCheck?.(_res);
                    
                                
                            }}
                        />
                    </>}
                    
                </span>
                <span ref={contentRef}>{content}</span>
            </th>
        </>
    )
}

export default TableFieldRow;

