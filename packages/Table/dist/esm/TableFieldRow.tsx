import React, { useRef, useState, useImperativeHandle } from 'react';

// HAS CHECKBOX

import { getChildren } from './utils/dom';
import { removeItemOnce, formatCheckboxControlVal, setCheckboxCheckedData, formatRowControlVal, getAllCheckboxInput } from './table-utils';



/* Table Field Row
-------------------------------------------------*/
type TableFieldRowProps = {
    tableRootRef: React.RefObject<any>;
    tableCheckRef?: React.RefObject<any>;
    rowActiveClassName?: string;
    fieldsChecked?: boolean[] | boolean;
    fieldsCheckedAct?: any[];
    updateFirstInitCheckboxesClassName?: any;
    draggable?: boolean;
    useRadio?: boolean;
    cols?: number;
    content?: any;
    width?: string;
    className?: string;
    dataUse?: string;
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
    onCheck?: (val: any, el: any, checked: boolean) => void;
    evCellMouseEnter?: (el: any) => void | undefined;
    evCellMouseLeave?: (el: any) => void | undefined;
    evCellClick?: (el: any) => void | undefined;
};

const TableFieldRow = (props: TableFieldRowProps) => {


    const {
        tableRootRef,
        tableCheckRef,
        rowActiveClassName = 'active',
        fieldsChecked,
        fieldsCheckedAct,
        updateFirstInitCheckboxesClassName,
        draggable,
        useRadio,
        cols,
        width,
        className,
        dataUse = '',
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
        evCellMouseEnter,
        evCellMouseLeave,
        evCellClick,
    } = props;
    

    const contentRef = useRef<any>(null);
    const checkboxRef = useRef<any>(null);
    const [firstInitCheckboxes, setFirstInitCheckboxes] = useState<boolean>(false);
    
    //
    const [fieldsCheckedUpdateDataPrint, setFieldsCheckedUpdateDataPrint] = fieldsCheckedAct || [null, null];

    const rowIndex = rowKey?.replace('row-', '');


    // exposes the following methods
    useImperativeHandle(
        tableCheckRef,
        () => ({
            check: (data: any, cb: any) => {

                const _checkedData: any = getCheckedData;
                let _res: any[] = [];
        
                // STEP 1:
                // Update checked data
                //-----------
                data.forEach((v: any, i: number) => {
                    
                    const _curKey: string = `row-${v.index}`;
                    if (v.value === true) {
                        setCheckboxCheckedData(_checkedData, _curKey, true);
                    } else {
                        setCheckboxCheckedData(_checkedData, _curKey, false);
                    }
                });
                updategetCheckedData(_checkedData);

                // STEP 2:
                // get per checkbox value
                //----------- 
                if (tableRootRef.current !== null) {
                    _checkedData.forEach((item: any) => {

                        if (item.checked === true) {
                            const _index = item.key.replace('row-', '');
                            const curCheckbox = tableRootRef.current.querySelector('table').querySelector(`tbody [data-key="row-${_index}"]`);

                            _res.push(formatRowControlVal(curCheckbox, checkboxNamePrefix as string));
                        } else {
                            _res = removeItemOnce(_res, item.key);
                        }
                   
                    });
                }


                // STEP 3:
                // Update checked print
                //-----------
                updateCheckedPrint(_res);


                // STEP 4:
                // Update root checkbox
                //-----------
                const _headRow = tableRootRef.current.querySelector('table').querySelectorAll('thead th')[0];
                const allChecked = _checkedData.every((item: any) => item.checked === true);
                
                if (allChecked) {
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

                if (typeof _headRow !== 'undefined') {
                    const _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
                    const hasAnyChecked = _checkedData.some((item: any) => item.checked === true);
                    if (hasAnyChecked && !allChecked) {
                        _rootCheckbox.indeterminate = true;
                    } else {
                        _rootCheckbox.indeterminate = false;
                    }
                }

                // STEP 5:
                // callback
                //-----------
                cb?.(_res);



            },
        }),
        [tableCheckRef],
    );



    // initialize actived checkboxes
    const latestCheckedData = () => {
        if (firstInitCheckboxes) return getCheckedData;

        if (Array.isArray(fieldsChecked)) {
            const _checkedData: any = getCheckedData;
            if (typeof rowKey !== 'undefined' && typeof getCheckedData !== 'undefined') setCheckboxCheckedData(getCheckedData, rowKey, fieldsChecked[Number(rowIndex)]);
            // Update checked data
            updategetCheckedData(_checkedData);
            setFirstInitCheckboxes(true);
            updateFirstInitCheckboxesClassName(true);

            return _checkedData;
        } else {
            return getCheckedData;
        }
    };


    function updateRootcheckbox(el: any) {
        if (el === null) return;

        const _headRow = el.closest('table').querySelectorAll('thead th')[0];
        if (typeof _headRow !== 'undefined') {
            const _rootCheckbox = _headRow.querySelector('[type="checkbox"]');
            const _checkboxes = getChildren(el.closest('table').querySelector('tbody'), '[type="checkbox"]');
            const _checkedLength = _checkboxes.filter((checkbox: any) => {
                return checkbox.checked === true;
            }).length;

            if (_checkedLength === 0) {
                _rootCheckbox.indeterminate = false;
                updategetCheckedRootData([{
                    key: `row-all`,
                    checked: false
                }]);
            } else {
                if (_checkedLength === _checkboxes.length) {
                    _rootCheckbox.indeterminate = false;
                    updategetCheckedRootData([{
                        key: `row-all`,
                        checked: true
                    }]);
                }

                if (_checkedLength < _checkboxes.length) {
                    updategetCheckedRootData([{
                        key: `row-all`,
                        checked: false
                    }]);
                    _rootCheckbox.indeterminate = true;

                }
            }

        }

    }

    function checkedAct(el: any, val: any) {

        if (el === null) return;


        const _curKey: string = el.value;
        const _checkedData: any = getCheckedData;

        let _res: any = getCheckedPrint;

        
        // STEP 1:
        // Update checked print from "fieldsChecked"
        // !!! Only one time is allowed
        //-----------
        if (!fieldsCheckedUpdateDataPrint) {
            if (Array.isArray(fieldsChecked)) {
                const _checkboxes: any[] = getAllCheckboxInput(el);
                _checkboxes.forEach((node: any, rowIndex: number) => {
                    if (fieldsChecked[Number(rowIndex)] === true) {
                        _res.push(formatCheckboxControlVal(node));
                    }
                });
            }

            //
            setFieldsCheckedUpdateDataPrint(true);
        }



        // STEP 1:
        // Current checkbox
        //-----------
        if (val === true) {
            _res.push(formatCheckboxControlVal(el));
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
        updateRootcheckbox(el);
       

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


    function handleTbodyEnter(e: any) {
        (e.target.closest('table') as any)?.querySelector('tbody').classList.add('drag-trigger-mousedown');
    }



    return (
        <>
            <th
                scope="row"
                colSpan={cols}
                data-table-text={columnHeader}
                data-table-col={index}
                data-use={dataUse}
                style={style ? style : (width ? ((typeof window !== 'undefined' && window.innerWidth > 768) ? { width: width } : {}) : {})}
                className={className || ''}
                onMouseEnter={(e: React.MouseEvent) => {
                    evCellMouseEnter?.(e);
                }}
                onMouseLeave={(e: React.MouseEvent) => {
                    evCellMouseLeave?.(e);
                }}
                onClick={(e: React.MouseEvent) => {
                    evCellClick?.(e);
                }}
            >
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

                        <a
                            ref={checkboxRef}
                            href="#"
                            draggable={false}   /* required */
                            tabIndex={-1}
                            className="radio-svg-btn"
                            data-index={`${rowIndex}`}
                            data-key={`${rowKey}`}
                            data-use={dataUse}
                            onClick={(e: any) => {
                                e.preventDefault();

                                // STEP 1:
                                // Active current row
                                //-----------
                                const _rows = [].slice.call(e.currentTarget.closest('tbody').querySelectorAll('.row-obj'));
                                const _rowEl = e.currentTarget.closest('.row-obj');
                                const activeClass = rowActiveClassName.split(' ');

                                _rows.forEach((row: HTMLElement) => {
                                    row.classList.remove(...activeClass);
                                });
                                if (_rowEl !== null) {
                                    _rowEl.classList.add(...activeClass);
                                }


                                // STEP 2:
                                // callback
                                //-----------
                                onCheck?.([formatCheckboxControlVal(e.currentTarget)], e.currentTarget, true);
                            }}
                        >
                            <span className="radio-svg--default">
                                <svg
                                    className="radio-svg"
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    fill="none"

                                >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor" />

                                </svg>

                            </span>

                            {/* ACTIVED SHAPE */}
                            <span className="radio-svg--active">

                                <svg
                                    className="radio-svg"
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    fill="none"

                                >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor" />
                                    <circle cx="12" cy="12" r="5.25" fill="currentColor" />

                                </svg>
                            </span>
                            {/* /ACTIVED SHAPE */}

                        </a>


                    </> : <>

                        <div className="form-check__wrapper">
                            <div className="form-check d-inline-block">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name={`checkbox-${checkboxNamePrefix}-${rowIndex}`}
                                    ref={checkboxRef}
                                    tabIndex={-1}
                                    data-index={`${rowIndex}`}
                                    data-key={`${rowKey}`}
                                    data-use={dataUse}
                                    value={`${rowKey}`}
                                    checked={latestCheckedData().filter((cur: any) => cur.key === rowKey)[0]?.checked}
                                    onChange={(e: any) => {
                                        checkedAct(e.target, !latestCheckedData().filter((cur: any) => cur.key === rowKey)[0]?.checked);
                                    }}
                                />
                            </div>

                        </div>

                        
                    </>}

                </span>
                <span ref={contentRef}>{content}</span>
            </th>
        </>
    )
}

export default TableFieldRow;

