import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

import DragDropList from 'funda-dragdrop-list';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    isJSON
} from 'funda-utils/dist/cjs/validate';
import {
    extractContentsOfBrackets
} from 'funda-utils/dist/cjs/extract';
import {
    convertArrToValByBrackets
} from 'funda-utils/dist/cjs/convert';
import {
    removeArrDuplicateItems
} from 'funda-utils/dist/cjs/object';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



import { multiSelControlOptionExist, uniqueArr, uniqueOpt } from './utils/func';


export interface OptionConfig {
    id: number;
    parentId?: number;
    label: string;
    listItemLabel: string;
    value: string;
    queryString: string;
    depth?: number;
    children?: OptionConfig[];
    disabled?: boolean;
    extendedContent?: (isSelected: boolean) => React.ReactNode | React.ReactNode;
    [key: string]: any;
}


export type MultipleSelectProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    wrapperClassName?: string;
    childClassName?: string;
    wrapperMinHeight?: string;
    wrapperMinWidth?: string;
    availableHeaderTitle?: string;
    selectedHeaderTitle?: string;
    selectedHeaderNote?: string;
    selectedResultReverse?: boolean;
    removeAllBtnLabel?: string | React.ReactNode;
    addAllBtnLabel?: string | React.ReactNode;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    unattachedSelect?: boolean;
    defaultValue?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string;
    disabled?: any;
    required?: any;
    /** DragDrop List */
    draggable?: boolean;
    handleHide?: boolean;
    handleIcon?: string;
    handlePos?: 'left' | 'right';
    dragMode?: 'handle' | 'block';
    indentation?: string;
    doubleIndent?: boolean;
    alternateCollapse?: boolean;
    arrow?: React.ReactNode;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onAddAll?: (e: HTMLElement | null, data: any[], dataStr: string, res: any[]) => void;
    onRemoveAll?: (e: HTMLElement | null, data: any[], dataStr: string, res: any[]) => void;
    onChange?: (e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => void;

};


const MultipleSelect = forwardRef((props: MultipleSelectProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        childClassName,
        wrapperMinHeight,
        wrapperMinWidth,
        availableHeaderTitle,
        selectedHeaderTitle,
        selectedHeaderNote,
        selectedResultReverse = false,
        removeAllBtnLabel,
        addAllBtnLabel,
        iconAdd,
        iconRemove,
        unattachedSelect,
        options,
        disabled,
        required,
        defaultValue,
        value,
        label,
        name,
        id,
        draggable = true,
        handleHide = false,
        handleIcon = '☰',
        handlePos = 'left',
        dragMode = 'handle',
        indentation,
        doubleIndent,
        alternateCollapse,
        arrow = <><svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg></>,
        extractValueByBrackets,
        style,
        data,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onAddAll,
        onRemoveAll,
        onChange,
        ...attributes
    } = props;


    const UNATTACHED_SELECT = typeof unattachedSelect === 'undefined' || unattachedSelect === false ? false : true;
    const WRAPPER_MIN_H = typeof wrapperMinHeight === 'undefined' ? '' : wrapperMinHeight;
    const WRAPPER_MIN_W = typeof wrapperMinWidth === 'undefined' ? '' : wrapperMinWidth;
    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const availableListRef = useRef<any>(null);
    const optionsRes = options ? isJSON(options) ? JSON.parse(options as string) : options : [];
    const [valSelectedData, setValSelectedData] = useState<any[]>([]);
    const [valSelected, setValSelected] = useState<any[]>([]);

    // temp default value
    const [tempDefaultValue, setTempDefaultValue] = useState<string | undefined>(undefined);

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes;

    //
    const [changedSearchVal, setChangedSearchVal] = useState<string>('');

    //
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);

    

    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            clear: (cb?: any) => {
           
                const _params: any[] = fetchFuncMethodParams || [];
                fetchData((_params).join(','), '');

                cb?.();
            },
            set: (inputData: any[], cb?: any) => {
                if (! Array.isArray(inputData)) return;

                const _params: any[] = fetchFuncMethodParams || [];
                fetchData((_params).join(','), inputData.map((v: any) => `[${v.value}]`).join(''));

                cb?.();
            }
        }),
        [contentRef],
    );

    const getExtControll = (index: number, id: number, value: number | string, extendedContent: React.ReactNode, defaultValue: any, forceItemSelected: boolean | undefined = undefined) => {

  
        let itemSelected: boolean = false;
        if (typeof defaultValue !== 'undefined' && defaultValue !== '') {
            const _val = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');

            if (Array.isArray(_val) && _val.includes(String(value))) {
                itemSelected = true;
            }
        }
        
        if (typeof forceItemSelected !== 'undefined') itemSelected = forceItemSelected;
        

        return <>

            <div style={{
                paddingLeft: '1rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end'
            }}>

                {extendedContent ? <>
                    <span className="m-select-v2__ext" id={`m-select-v2__ext-${id}${itemSelected ? '-selected' : ''}`}>
                        {extendedContent}
                    </span>
                </> : null}


                {itemSelected ? <>
                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();

                        // remove
                        removeItem(id);
                    }}>
                        {iconRemove ? <>{iconRemove}</> : <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                    </a>

                </> : <>
                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();

                        // add
                        selectItem(id);
                    }}>
                        {iconAdd ? <>{iconAdd}</> : <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></>}
                    </a>
                </>}


            </div>

        </>
    };
    
    const dragdropListDataInit = (data: any[]) => {
        // Add appendControl to list
        data.forEach((item: any, index: number) => {
            const _extendedContent = typeof item.extendedContent === 'function' ? item.extendedContent(true) : item.extendedContent;
            item.appendControl = getExtControll(index, item.id, item.value, _extendedContent, tempDefaultValue);
        });

        

        return data;
    };
    const dragdropListDefaultDataInit = (data: any[]) => {
        // Update appendControl to list
        data.forEach((item: any, index: number) => {
            const _extendedContent = typeof item.extendedContent === 'function' ? item.extendedContent(false) : item.extendedContent;
            item.appendControl = getExtControll(index, item.id, item.value, item.extendedContent, tempDefaultValue, false);
        });


        return data;
    };


    async function fetchData(params: any, inputDefault: any) {

        // set default value
        if (typeof inputDefault !== 'undefined' && inputDefault !== '') inputRef.current.dataset.value = inputDefault;

        //
        if (typeof fetchFuncAsync === 'object') {

            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;

            // reset data structure
            if (typeof (fetchCallback) === 'function') {
                _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (_ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].value === 'undefined') {
                console.warn('The data structure does not match, please refer to the example in the component documentation.');
                setHasErr(true);
                _ORGIN_DATA = [];
            }


            // remove Duplicate objects from JSON Array
            _ORGIN_DATA = removeArrDuplicateItems(_ORGIN_DATA, 'label');

            // save temporary default value
            setTempDefaultValue(inputDefault);

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            initDefaultValue(inputDefault, _ORGIN_DATA); // value must be initialized


            //
            onFetch?.(_ORGIN_DATA);

            return _ORGIN_DATA;
        } else {

      
            // remove Duplicate objects from JSON Array
            optionsDataInit = removeArrDuplicateItems(optionsDataInit, 'label');

            // save temporary default value
            setTempDefaultValue(inputDefault);

            //
            setDataInit(optionsDataInit); // data must be initialized


            //
            initDefaultValue(inputDefault, optionsDataInit); // value must be initialized




            //
            onFetch?.(optionsDataInit);

            return optionsDataInit;
        }


    }



    function initDefaultValue(defaultValue: any, options: any[]) {


        // change the value to trigger component rendering
        if (typeof defaultValue === 'undefined' || defaultValue === '') {
            setValSelected([]);
            setValSelectedData([]);
        } else {

            const _val = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');

            if (Array.isArray(_val)) {

                const _initVal = _val.filter((v: any) => v !== '');

                setValSelected(_initVal);

         
                // Initialize selected options
                if (UNATTACHED_SELECT) {
                    setValSelectedData((prevState: OptionConfig[]) => {

                        let _data = [...prevState, ...options.filter((item: any) => {
                            return multiSelControlOptionExist(_initVal, item.value);
                        })];

                        return uniqueArr(_data);
                    });


                } else {
                    setValSelectedData(options.filter((item: any) => {
                        return multiSelControlOptionExist(_initVal, item.value);
                    }));
                }

                // Initialize default options
                setDataInit(options.filter((item: any) => {
                    return !multiSelControlOptionExist(_initVal, item.value);
                }));


            } else {
                setValSelected([]);
                setValSelectedData([]);
            }


        }
    }


    function selectItem(curId: number) {


        // update default options
        setDataInit((prevState) => {
            const newDefaultData = prevState.filter((item: any) => item.id != curId);


            const targetData = prevState.find((v: any) => v.id == curId);  // !!!from old "dataInit"
            const _data = typeof targetData !== 'undefined' ? targetData : {};

            // update selected data
            setValSelectedData((prevState2: any[]) => {
                const newSelectedData = dragdropListDataInit([...prevState2, _data]);

                // update selected items
                setValSelected((prevState3) => {
                    const newValueData = newSelectedData.map((v: any) => v.value);
                    const newValueStr = VALUE_BY_BRACKETS ? convertArrToValByBrackets(newValueData) : newValueData.join(',');
            
                    onChange?.(document.querySelector(`[data-id="${curId}"]`), newValueData, newValueStr, _data, 'add', newSelectedData);

                    // update temporary default value
                    setTempDefaultValue(newValueStr);

                    return newValueData;
                });

                return uniqueArr(newSelectedData);
            });

            return uniqueArr(newDefaultData);
        });





    }

    function removeItem(curId: number) {

        // update selected data
        setValSelectedData((prevState: any[]) => {
            const newSelectedData = prevState.filter((item: any) => item.id != curId);

            const targetData = prevState.find((v: any) => v.id == curId); // !!!from old "valSelectedData"
            const _data = typeof targetData !== 'undefined' ? targetData : {};

            // update default options
            setDataInit((prevState2) => {
                const newDefaultData = dragdropListDefaultDataInit([...prevState2, _data]);
                return uniqueArr(newDefaultData);
            });

            // update selected items
            setValSelected((prevState3) => {
                const newValueData = newSelectedData.map((v: any) => v.value);
                const newValueStr = VALUE_BY_BRACKETS ? convertArrToValByBrackets(newValueData) : newValueData.join(',');
            
                onChange?.(document.querySelector(`[data-id="${curId}"]`), newValueData, newValueStr, _data, 'remove', newSelectedData);

                // update temporary default value
                setTempDefaultValue(newValueStr);


                return newValueData;
            });

            return uniqueArr(newSelectedData);
        });


    }




    function handleSelectAll(event: any) {
        event.preventDefault();
        event.stopPropagation();


        // update default options
        setDataInit((prevState) => {
            const newDefaultData: any[] = [];

            // filter the "disabled" option
            const disabledData = prevState.filter((v: any) => v.disabled === true);  // !!!from old "dataInit"
            const targetData = prevState.filter((v: any) => typeof v.disabled === 'undefined' || v.disabled === false);  // !!!from old "dataInit"
            
         
            // update selected data
            setValSelectedData((prevState2: any[]) => {
                const newSelectedData = dragdropListDataInit([...prevState2, ...targetData]);

                // update selected items
                setValSelected((prevState3) => {
                    const newValueData = newSelectedData.map((v: any) => v.value);
                    const newValueStr = VALUE_BY_BRACKETS ? convertArrToValByBrackets(newValueData) : newValueData.join(',');
            
                    onChange?.(null, newValueData, newValueStr, null, 'add-all', newSelectedData);

                    // update temporary default value
                    setTempDefaultValue(newValueStr);

                    return newValueData;
                });

                return uniqueArr(newSelectedData);
            });
            
            return uniqueArr([...newDefaultData, ...disabledData]);
        });


    }


    function handleRemoveAll(event: any) {
        event.preventDefault();
        event.stopPropagation();


        // update selected data
        setValSelectedData((prevState: any[]) => {
            const newSelectedData: any[] = [];

            const targetData = prevState; // !!!from old "valSelectedData"

            // update default options
            setDataInit((prevState2) => {
                const newDefaultData = dragdropListDefaultDataInit([...prevState2, ...targetData]);

                return uniqueArr(newDefaultData);
            });

            // update selected items
            setValSelected((prevState3) => {
                const newValueData = newSelectedData.map((v: any) => v.value);
                const newValueStr = VALUE_BY_BRACKETS ? convertArrToValByBrackets(newValueData) : newValueData.join(',');
            
                onChange?.(null, newValueData, newValueStr, null, 'remove-all', newSelectedData);
                onRemoveAll?.(event, newValueData, newValueStr, newSelectedData);

                // update temporary default value
                setTempDefaultValue(newValueStr);


                return newValueData;
            });

            return uniqueArr(newSelectedData);
        });


    }

    function handleChangeSearch(event: any) {
        const inputVal = event.target.value;
        if (availableListRef.current === null) return;

        setChangedSearchVal(inputVal);

        const items = [].slice.call(availableListRef.current.querySelectorAll('li[data-value]'));
        items.forEach((item: any) => {

            // Avoid fatal errors causing page crashes
            const _label = typeof item.dataset.label !== 'undefined' && item.dataset.label !== null ? item.dataset.label : '';
            const _queryString = typeof item.dataset.querystring !== 'undefined' && item.dataset.querystring !== null ? item.dataset.querystring : '';

            if (
                (
                    _queryString.split(',').some((l: any) => l.charAt(0) === inputVal.toLowerCase()) ||
                    _queryString.split(',').some((l: any) => l.replace(/ /g, '').indexOf(inputVal.toLowerCase()) >= 0) ||
                    _label.toLowerCase().indexOf(inputVal.toLowerCase()) >= 0
                ) &&
                inputVal != ''
            ) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }

        });


        items.forEach((item: any) => {
            if (inputVal === '') {
                item.classList.remove('hide');
            }
        });


    }



    useEffect(() => {

        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','), value);


    }, [value, options, data]);

    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED
            const _params: any[] = fetchFuncMethodParams || [];
            fetchData((_params).join(','), defaultValue);
        }

    }, []);

    return (
        <>

            <div
                className={combinedCls(
                    'm-select-v2__wrapper',
                    clsWrite(wrapperClassName, 'mb-3')
                )}
                ref={rootRef}
                style={{
                    minWidth: WRAPPER_MIN_W === '' ? 'var(--m-select-v2-wrapper-min-w)' : WRAPPER_MIN_W,
                    minHeight: WRAPPER_MIN_H === '' ? 'var(--m-select-v2-wrapper-min-h)' : WRAPPER_MIN_H
                }}
            >

                {/* DIVIDING LINE */}
                <div className="m-select-v2-diving-line"></div>
                {/* /DIVIDING LINE */}

                {/* VALUE INPUT */}
                <input
                    ref={(node) => {
                        inputRef.current = node;
                        if (typeof externalRef === 'function') {
                            externalRef(node);
                        } else if (externalRef) {
                            externalRef.current = node;
                        }
                    }}
                    tabIndex={-1}
                    type="hidden"
                    id={idRes}
                    name={name}
                    value={VALUE_BY_BRACKETS ? convertArrToValByBrackets(valSelected) : valSelected.join(',')} // do not use `defaultValue`
                    onChange={() => void (0)}
                    required={required || null}
                    {...attributes}
                />
                {/* /VALUE INPUT */}


                <div className="m-select-v2-inner">

                    {/*
                    // ++++++++++++++++++++
                    // Available Container
                    // ++++++++++++++++++++
                    */}
                    <div className="m-select-v2__available__container">
                        <div className="m-select-v2__m-select-v2__item-actions m-select-v2__header">

                            {/* SEARCH */}
                            <div className="m-select-v2__search__container">
                                <input
                                    type="text"
                                    value={changedSearchVal}
                                    className="m-select-v2__search"
                                    onChange={handleChangeSearch}
                                />
                                <i><svg width="0.8em" height="0.8em" fill="#ddd" viewBox="0 0 16 16">
                                    <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                </svg></i>
                            </div>
                            {/* /SEARCH */}

                            <span className="m-select-v2__title" dangerouslySetInnerHTML={{ __html: `${availableHeaderTitle || ''}` }}></span>

                            <a href="#" className="m-select-v2__btn--add-all" onClick={handleSelectAll}>{addAllBtnLabel || 'Add all'}</a>
                        </div>



                        {/* OPTIONS LIST */}
                        <DragDropList
                            data={dragdropListDefaultDataInit(dataInit as [])}
                            wrapperClassName=""
                            ref={availableListRef}
                            prefix="m-select-v2"
                            draggable={false}
                            handleHide={handleHide}
                            handleIcon={handleIcon}
                            handlePos={handlePos}
                            dragMode={dragMode}
                            indentation={indentation}
                            doubleIndent={doubleIndent}
                            alternateCollapse={alternateCollapse}
                            arrow={arrow}
                        />
                        {/* /OPTIONS LIST */}

                    </div>


                    {/*
                    // ++++++++++++++++++++
                    // Selected  Container
                    // ++++++++++++++++++++
                    */}
                    <div className="m-select-v2__selected__container">
                        <div className="m-select-v2__m-select-v2__item-actions m-select-v2__header">
                            <span className="m-select-v2__count" dangerouslySetInnerHTML={{ __html: `${typeof selectedHeaderNote !== 'undefined' ? selectedHeaderNote.replace('{items_num}', valSelectedData.length as never) : ''}` }}></span>
                            <span className="m-select-v2__title" dangerouslySetInnerHTML={{ __html: `${selectedHeaderTitle || ''}` }}></span>
                            <a href="#" className="m-select-v2__btn--remove-all" onClick={handleRemoveAll}>{removeAllBtnLabel || 'Remove all'}</a>
                        </div>


                        {/* OPTIONS LIST */}
                        <DragDropList
                            data={dragdropListDataInit(selectedResultReverse ? valSelectedData.reverse() : valSelectedData)}
                            onUpdate={(newData: any[], curId: number) => {
                                setValSelectedData(newData);

                                const newValueData = newData.map((v: any) => v.value);
                                const newValueStr = VALUE_BY_BRACKETS ? convertArrToValByBrackets(newValueData) : newValueData.join(',');
                                const targetData = newData.find((v: any) => v.id == curId);  // !!!from old "dataInit"
                                const _data = typeof targetData !== 'undefined' ? targetData : {};

                                setValSelected(newData.map((v: any) => v.value));
                
                                onChange?.(document.querySelector(`[data-id="${curId}"]`), newValueData, newValueStr, _data, 'update', newData);

                            }}
                            wrapperClassName=""
                            prefix="m-select-v2"
                            draggable={draggable}
                            handleHide={handleHide}
                            handleIcon={handleIcon}
                            handlePos={handlePos}
                            dragMode={dragMode}
                            indentation={indentation}
                            doubleIndent={doubleIndent}
                            alternateCollapse={false}
                            arrow={arrow}
                            hierarchical={false}
                        />
                        {/* /OPTIONS LIST */}

                    </div>




                </div>

            </div>


        </>
    )
});

export default MultipleSelect;
