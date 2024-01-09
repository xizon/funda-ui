import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

import {
    addTreeDepth,
    addTreeIndent
} from './utils/tree';


import { extractContentsOfBrackets } from './utils/extract';
import { convertArrToValByBrackets } from './utils/convert';

interface OptionConfig {
    [propName: string]: string | number | boolean;
}


type MultipleSelectProps = {
    wrapperClassName?: string;
    availableHeaderTitle?: string;
    selectedHeaderTitle?: string;
    selectedHeaderNote?: string;
    removeAllBtnLabel?: string | React.ReactNode;
    addAllBtnLabel?: string | React.ReactNode;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string;
    disabled?: any;
    required?: any;
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
    onChange?: (e: any, data: any, dataStr: any) => void;

};


const MultipleSelect = forwardRef((props: MultipleSelectProps, ref: any) => {
    const {
        wrapperClassName,
        availableHeaderTitle,
        selectedHeaderTitle,
        selectedHeaderNote,
        removeAllBtnLabel,
        addAllBtnLabel,
        iconAdd,
        iconRemove,
        hierarchical,
        indentation,
        doubleIndent,
        options,
        disabled,
        required,
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

    const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;
    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const uniqueID = useId();
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
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);



    async function fetchData(params: any) {
        
        // set default value
        if (typeof value !== 'undefined' && value !== '') inputRef.current.dataset.value = value;

        //
        if ( typeof fetchFuncAsync === 'object' ) {

            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;
  
            // reset data structure
            if (typeof (fetchCallback) === 'function') {
                _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if ( _ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].value === 'undefined' ) {
                console.warn( 'The data structure does not match, please refer to the example in the component documentation.' );
                setHasErr(true);
                _ORGIN_DATA = [];
            }

    
            // Set hierarchical categories ( with sub-categories )
            if ( hierarchical ) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }


            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            initDefaultValue(value, _ORGIN_DATA); // value must be initialized


            //
            onFetch?.(_ORGIN_DATA);
    
            return _ORGIN_DATA;
        } else {

   
            //
            setDataInit(optionsDataInit); // data must be initialized


            //
            initDefaultValue(value, optionsDataInit); // value must be initialized




            //
            onFetch?.(optionsDataInit);

            return optionsDataInit;
        }


    }

    // Determine whether it is in JSON format
    function isJSON(str: any) {

        if (typeof (str) === 'string' && str.length > 0) {

            if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
                return false;
            } else {

                if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
                    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                    return true;

                } else {
                    return false;
                }

            }

        } else {

            if (
                typeof (str) === 'object' &&
                Object.prototype.toString.call(str) === '[object Object]' &&
                !str.length
            ) {
                return true;
            } else {
                return false;
            }

        }

    }


    function initDefaultValue(defaultValue: any, options: any[]) {

        // change the value to trigger component rendering
        if (typeof defaultValue === 'undefined' || defaultValue === '') {
            setValSelected([]);
        } else {

            const _val = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');

            if (Array.isArray(_val)) {

                const _initVal = _val.filter((v: any) => v !== '');
                setValSelected(_initVal);

                // Initialize selected options
                setValSelectedData(options.filter((item: any) => {
                    return _initVal.includes(item.value);
                }));


            } else {
                setValSelected([]);
            }


        }
    }

    useEffect(() => {


        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','));


    }, [value, options, data]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? `m-select__wrapper ${wrapperClassName}` : `m-select__wrapper mb-3`} ref={rootRef}>

                {/* DIVIDING LINE */}
                <div className="m-select-diving-line"></div>
                {/* /DIVIDING LINE */}

                {/* INPUT */}
                <input
                    ref={(node) => {
                        inputRef.current = node;
                        if (typeof ref === 'function') {
                            ref(node);
                        } else if (ref) {
                            ref.current = node;
                        }
                    }}
                    tabIndex={-1}
                    type="hidde"
                    id={idRes}
                    name={name}
                    value={VALUE_BY_BRACKETS ? convertArrToValByBrackets(valSelected) : valSelected.join(',')}
                    required={required || null}
                    {...attributes}
                />
                {/* /INPUT */}


                <div className="m-select-inner">

                    {/*
                    // ++++++++++++++++++++
                    // Available Container
                    // ++++++++++++++++++++
                    */}
                    <div className="m-select__available__container">
                        <div className="m-select__m-select__item-actions m-select__header">
                            <input
                                type="text"
                                className="m-select__search"
                            />

                            <span className="m-select__title" dangerouslySetInnerHTML={{__html: `${availableHeaderTitle || ''}`}}></span>

                            <a href="#" className="m-select__btn--add-all">{addAllBtnLabel || 'Add all'}</a>
                        </div>
                        <ul className="m-select__available m-select__options-contentlist" ref={availableListRef}>

                            {/* OPTIONS LIST */}
                            {dataInit ? dataInit.map((item: any, i: number) => {

                                
                                return <li
                                    key={'item' + i}
                                    data-index={i}
                                    data-label={item.label}
                                    data-value={item.value}
                                    data-disabled={item.disabled || 'false'}
                                    className={`${item.disabled ? 'disabled' : ''} ${valSelected.includes(item.value) ? 'hide' : ''}`}
                                >
                                   
                                    <span>
                                        {item.label}
                                        <a
                                            href="#"
                                            className="m-select__item-action"
                                        ></a>
                                    </span>
                                    <i
                                        onClick={(e: React.MouseEvent) => {

                                            const _li = (e.target as  any).closest('li');
                                            const _val = _li.dataset.value;
                                            const _label = _li.dataset.label;
                                  

                                            setValSelected((prevState) => {
                                                const newData = JSON.parse(JSON.stringify(prevState));
                                                const index = newData.findIndex((item: string | number) => item == _val);
                                                if (index !== -1) newData.splice(index, 1);

                                                const _res = (_val) ? Array.from(new Set([_val, ...newData])) : newData;
                                                onChange?.(_li, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','));

                                                // hide current item
                                                _li.classList.add('hide');

                                                return _res;
                                            });


                                            // update selected data
                                            setValSelectedData((prevState) => {
                                                const newData = JSON.parse(JSON.stringify(prevState));
                                                const index = newData.findIndex((item: any) => item.value == _val);
                                                if (index !== -1) newData.splice(index, 1);

                                                const _res = (_val) ? Array.from(new Set([{
                                                    label: _label,
                                                    value: _val
                                                }, ...newData])) : newData;


                                                return _res;
                                            });


                                        }}>
                                        {iconAdd ? <>{iconAdd}</> : <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></>}

                                        
                                    </i>

                                </li>;
                            }) : null}

                            {/* /OPTIONS LIST */}

                         
                        </ul>
                    </div>


                    {/*
                    // ++++++++++++++++++++
                    // Selected  Container
                    // ++++++++++++++++++++
                    */}                    
                    <div className="m-select__selected__container">
                        <div className="m-select__m-select__item-actions m-select__header">
                            <span className="m-select__count" dangerouslySetInnerHTML={{__html: `${typeof selectedHeaderNote !== 'undefined' ? selectedHeaderNote.replace('{items_num}', valSelectedData.length as never) : ''}`}}></span>
                            <span className="m-select__title" dangerouslySetInnerHTML={{__html: `${selectedHeaderTitle || ''}`}}></span>
                            <a href="#" className="m-select__btn--remove-all">{removeAllBtnLabel || 'Remove all'}</a>
                        </div>
                        <ul className="m-select__selected m-select__options-contentlist--sortable m-select__options-contentlist" ref={selectedListRef}>

                            {/* OPTIONS LIST */}
                            {valSelectedData ? valSelectedData.map((item: any, i: number) => {
                                return <li
                                    key={'item-selected' + i}
                                    data-index={i}
                                    data-label={item.label}
                                    data-value={item.value}
                                    className="selected"
                                >
                                   
                                    <span>
                                        {item.label}
                                        <a
                                            href="#"
                                            className="m-select__item-action"
                                        ></a>
                                    </span>
                                    <i
                                        onClick={(e: React.MouseEvent) => {

                                            const _li = (e.target as  any).closest('li');
                                            const _val = _li.dataset.value;

                                            setValSelected((prevState) => {
                                                const newData = JSON.parse(JSON.stringify(prevState));
                                                const index = newData.findIndex((item: string | number) => item == _val);
                                                if (index !== -1) newData.splice(index, 1);

                                                const _res = newData;

                                                onChange?.(_li, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','));

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


                                        }}>
                                        {iconRemove ? <>{iconRemove}</> : <><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                                        
                                    </i>

                                </li>;
                            }) : null}
                            {/* /OPTIONS LIST */}

                        </ul>
                    </div>




                </div>

            </div>


        </>
    )
});

export default MultipleSelect;
