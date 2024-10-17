import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    isJSON
} from 'funda-utils/dist/cjs/initDefaultOptions';
import {
    addTreeDepth,
    addTreeIndent,
} from 'funda-utils/dist/cjs/tree';
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



import { multiSelControlOptionExist, uniqueArr } from './multiple-select-utils/func';
import ItemList from './ItemList';


export interface OptionConfig {
    [propName: string]: string | number | boolean | Function;
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
    removeAllBtnLabel?: string | React.ReactNode;
    addAllBtnLabel?: string | React.ReactNode;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    unattachedSelect?: boolean;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    alternateCollapse?: boolean;
    arrow?: React.ReactNode;
    defaultValue?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string;
    disabled?: any;
    required?: any;
    appendControl?: React.ReactNode;
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
    onChange?: (e: any, data: any, dataStr: any, currentData: any, type: string) => void;

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
        removeAllBtnLabel,
        addAllBtnLabel,
        iconAdd,
        iconRemove,
        unattachedSelect,
        hierarchical,
        indentation,
        doubleIndent,
        alternateCollapse,
        arrow,
        options,
        disabled,
        required,
        appendControl,
        defaultValue,
        value,
        label,
        name,
        id,
        extractValueByBrackets,
        style,
        data,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onChange,
        ...attributes
    } = props;


    const UN_ATTACHED_SELECT = typeof unattachedSelect === 'undefined' || unattachedSelect === false ? false : true;
    const WRAPPER_MIN_H = typeof wrapperMinHeight === 'undefined' ? '' : wrapperMinHeight;
    const WRAPPER_MIN_W = typeof wrapperMinWidth === 'undefined' ? '' : wrapperMinWidth;
    const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;
    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const availableListRef = useRef<any>(null);
    const selectedListRef = useRef<any>(null);
    const optionsRes = options ? isJSON(options) ? JSON.parse(options as string) : options : [];
    const [valSelectedData, setValSelectedData] = useState<any[]>([]);
    const [valSelected, setValSelected] = useState<any[]>([]);


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
                initDefaultValue('', dataInit);
                cb?.();
            },
            /*
            set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') }])
            */
            set: (inputData: any[], cb?: any) => {
                if (! Array.isArray(inputData)) return;
                
                initDefaultValue(inputData.map((v: any) => `[${v.value}]`).join(''), dataInit);

                cb?.();
            }
        }),
        [contentRef, dataInit],
    );


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


            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }


            // remove Duplicate objects from JSON Array
            _ORGIN_DATA = removeArrDuplicateItems(_ORGIN_DATA, 'value');

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            initDefaultValue(inputDefault, _ORGIN_DATA); // value must be initialized


            //
            onFetch?.(_ORGIN_DATA);

            return _ORGIN_DATA;
        } else {

            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
                optionsDataInit = addTreeDepth(optionsDataInit);
                addTreeIndent(optionsDataInit, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }


            // remove Duplicate objects from JSON Array
            optionsDataInit = removeArrDuplicateItems(optionsDataInit, 'value');


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
                if (UN_ATTACHED_SELECT) {
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


            } else {
                setValSelected([]);
                setValSelectedData([]);
            }


        }
    }


    function selectItem(el: HTMLElement) {
        if (el === null) return;


        const _li = el;
        const _val = _li.dataset.value;
        const _listItemLabel = _li.dataset.listItemLabel;
        const _label = _listItemLabel === '' ? _li.dataset.label : _listItemLabel;
        const _data = typeof _li.dataset.itemdata !== 'undefined' ? JSON.parse(_li.dataset.itemdata) : {};


        // set selected items
        setValSelected((prevState) => {
            const newData = JSON.parse(JSON.stringify(prevState));
            const index = newData.findIndex((item: string | number) => item == _val);
            if (index !== -1) newData.splice(index, 1);

            const _res = (_val) ? Array.from(new Set([_val, ...newData])) : newData;
            onChange?.(_li, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _data, 'add');

            // hide current item
            _li.classList.add('hide');

            return _res;
        });


        // update selected data
        setValSelectedData((prevState) => {
            const newData = JSON.parse(JSON.stringify(prevState));
            const index = newData.findIndex((item: any) => item.value == _val);
            if (index !== -1) newData.splice(index, 1);

            const _res = (_val) ? Array.from(new Set([_data, ...newData])) : newData;


            return _res;
        });
    }

    function removeItem(el: HTMLElement) {
        if (el === null) return;

        const _li = el;
        const _val = _li.dataset.value;
        const _data = typeof _li.dataset.itemdata !== 'undefined' ? JSON.parse(_li.dataset.itemdata) : {};


        // set selected items
        setValSelected((prevState) => {
            const newData = JSON.parse(JSON.stringify(prevState));
            const index = newData.findIndex((item: string | number) => item == _val);
            if (index !== -1) newData.splice(index, 1);

            const _res = newData;

            onChange?.(_li, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _data, 'remove');

            // show current item
            if (availableListRef.current) {
                const removedItem = availableListRef.current.querySelector(`li[data-value="${_val}"]`);
                if (removedItem !== null) removedItem.classList.remove('hide');
            }


            return _res;
        });


        // update selected data
        setValSelectedData((prevState) => {
            const newData = JSON.parse(JSON.stringify(prevState));
            const index = newData.findIndex((item: any) => item.value == _val);
            if (index !== -1) newData.splice(index, 1);

            const _res = newData;

            return _res;
        });


    }




    function handleSelectAll(event: any) {
        event.preventDefault();
        if (availableListRef.current === null) return;

        const items = [].slice.call(availableListRef.current.querySelectorAll('li[data-value]'));
        items.forEach((item: any) => {

            if (!item.classList.contains('disabled')) {
                selectItem(item);
            }

        });


    }


    function handleRemoveAll(event: any) {
        event.preventDefault();
        if (selectedListRef.current === null) return;

        const items = [].slice.call(selectedListRef.current.querySelectorAll('li[data-value]'));
        items.forEach((item: any) => {
            removeItem(item);
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
                    'm-select__wrapper',
                    clsWrite(wrapperClassName, 'mb-3')
                )}
                ref={rootRef}
                style={{
                    minWidth: WRAPPER_MIN_W === '' ? 'var(--m-select-wrapper-min-w)' : WRAPPER_MIN_W,
                    minHeight: WRAPPER_MIN_H === '' ? 'var(--m-select-wrapper-min-h)' : WRAPPER_MIN_H
                }}
            >

                {/* DIVIDING LINE */}
                <div className="m-select-diving-line"></div>
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


                <div className="m-select-inner">

                    {/*
                    // ++++++++++++++++++++
                    // Available Container
                    // ++++++++++++++++++++
                    */}
                    <div className="m-select__available__container">
                        <div className="m-select__m-select__item-actions m-select__header">

                            {/* SEARCH */}
                            <div className="m-select__search__container">
                                <input
                                    type="text"
                                    value={changedSearchVal}
                                    className="m-select__search"
                                    onChange={handleChangeSearch}
                                />
                                <i><svg width="0.8em" height="0.8em" fill="#ddd" viewBox="0 0 16 16">
                                    <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                </svg></i>
                            </div>
                            {/* /SEARCH */}

                            <span className="m-select__title" dangerouslySetInnerHTML={{ __html: `${availableHeaderTitle || ''}` }}></span>

                            <a href="#" className="m-select__btn--add-all" onClick={handleSelectAll}>{addAllBtnLabel || 'Add all'}</a>
                        </div>



                        {/* OPTIONS LIST */}
                        <ItemList
                            appendControl={appendControl}
                            root={rootRef.current}
                            listContainerClassName="m-select__available m-select__options-contentlist"
                            ref={availableListRef}
                            indentStr={INDENT_LAST_PLACEHOLDER}
                            valSelected={valSelected}
                            iconAdd={iconAdd}
                            onSelect={selectItem}
                            alternateCollapse={alternateCollapse}
                            first={true}
                            arrow={arrow}
                            data={dataInit}
                            childClassName={childClassName || 'm-select__options-contentlist-custom'}
                        />
                        {/* /OPTIONS LIST */}

                    </div>


                    {/*
                    // ++++++++++++++++++++
                    // Selected  Container
                    // ++++++++++++++++++++
                    */}
                    <div className="m-select__selected__container">
                        <div className="m-select__m-select__item-actions m-select__header">
                            <span className="m-select__count" dangerouslySetInnerHTML={{ __html: `${typeof selectedHeaderNote !== 'undefined' ? selectedHeaderNote.replace('{items_num}', valSelectedData.length as never) : ''}` }}></span>
                            <span className="m-select__title" dangerouslySetInnerHTML={{ __html: `${selectedHeaderTitle || ''}` }}></span>
                            <a href="#" className="m-select__btn--remove-all" onClick={handleRemoveAll}>{removeAllBtnLabel || 'Remove all'}</a>
                        </div>


                        {/* OPTIONS LIST */}
                        <ItemList
                            appendControl={appendControl}
                            root={rootRef.current}
                            listContainerClassName="m-select__selected m-select__options-contentlist--sortable m-select__options-contentlist"
                            ref={selectedListRef}
                            indentStr={INDENT_LAST_PLACEHOLDER}
                            valSelected={valSelected}
                            iconRemove={iconRemove}
                            onSelect={removeItem}
                            alternateCollapse={alternateCollapse}
                            first={true}
                            arrow={arrow}
                            data={valSelectedData}
                            childClassName={clsWrite(childClassName, 'm-select__options-contentlist--custom')}
                            selected
                        />
                        {/* /OPTIONS LIST */}

                    </div>




                </div>

            </div>


        </>
    )
});

export default MultipleSelect;
