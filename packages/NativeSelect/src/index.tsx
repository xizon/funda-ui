import React, { useEffect, useState, useRef, forwardRef } from 'react';

import { optionsFlat, isObject } from './utils/func';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    isJSON
} from 'funda-utils/dist/cjs/initDefaultOptions';
import {
    addTreeDepth,
    addTreeIndent,
} from 'funda-utils/dist/cjs/tree';
import {
    removeArrDuplicateItems
} from 'funda-utils/dist/cjs/object';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


export interface ItemConfig {
    [propName: string]: string | number | boolean;
}


export interface OptionConfig {
    [propName: string]: string | number | boolean | ItemConfig[];
}



export type NativeSelectOptionChangeFnType = (arg1: any, arg2: any, arg3?: any, arg4?: any) => void;


export type NativeSelectProps = {
    wrapperClassName?: string;
    defaultValue?: string | OptionConfig;
    value?: string | OptionConfig;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: OptionConfig[] | string | unknown;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    firstRequestAutoExec?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onChange?: NativeSelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const NativeSelect = forwardRef((props: NativeSelectProps, externalRef: any) => {
    const {
        wrapperClassName,
        disabled,
        required,
        defaultValue,
        value,
        label,
        name,
        id,
        options,
        hierarchical,
        indentation,
        doubleIndent,
        style,
        tabIndex,
        firstRequestAutoExec,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const FIRST_REQUEST_AUTO = typeof firstRequestAutoExec === 'undefined' ? true : firstRequestAutoExec;
    const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const selectRef = useRef<any>(null);
    const optionsRes = options ? isJSON( options ) ? JSON.parse( options as string ) : options : '';
    

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes; 

    //
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [controlValue, setControlValue] = useState<string | undefined>('');
    const [firstRequestExecuted, setFirstRequestExecuted] = useState<boolean>(false);
  

    const optionsFormatGroupOpt = (allData: any[]) => {
        if (!Array.isArray(allData)) return;

        allData.forEach((item: any) => {
            if (typeof item.optgroup !== 'undefined') {
                item.value = String(Math.random());
            }
        });
    };

    const finalRes = (val: any) => {
        return isObject(val) ? val.value : val;
    };


    
    // Generate list of options
    const selectOptionsList = Array.isArray(dataInit) ? dataInit.map((item: any, index: number) => {

        if (typeof item.optgroup !== 'undefined') {
            return <optgroup key={'optgroup-' + index} label={item.label}>

                {item.optgroup.map((opt: any, optIndex: number) => {
                    const _disabled = typeof opt.disabled === 'undefined' ? false : opt.disabled;
                    return <option key={'option-' + optIndex} value={opt.value as string} dangerouslySetInnerHTML={{
                        __html: `${typeof opt.listItemLabel === 'undefined' ? opt.label : opt.listItemLabel}`,
                    }} disabled={_disabled}></option>;
                })}

            </optgroup>;
        } else {
            const _disabled = typeof item.disabled === 'undefined' ? false : item.disabled;

            return <option key={'option-' + index} value={item.value as string} dangerouslySetInnerHTML={{
                __html: `${typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel}`,
            }} disabled={_disabled}></option>;

        }

    }) : null;
    

    // If the current value is not one of the options, the default value is displayed
    const extraSelectOption = () => {
        if (!Array.isArray(dataInit)) return null;

        let curValue: any = defaultValue;
        
        if (typeof curValue === 'undefined') {
            curValue = value;
        }

        if (typeof curValue === 'undefined') return null;
        
        // if the value is not object
        if (!isObject(curValue)) return null;
        

        const hasExtraOpt = optionsFlat(dataInit).some(option => option.value === finalRes(curValue));

        if (!hasExtraOpt) {
            const _disabled = typeof curValue.disabled === 'undefined' ? false : curValue.disabled;
            return <option value={curValue.value as string} dangerouslySetInnerHTML={{
                __html: `${typeof curValue.listItemLabel === 'undefined' ? curValue.label : curValue.listItemLabel}`,
            }} disabled={_disabled}></option>;

        } else {
            return null;
        }
    };
    
    async function fetchData(params: any, valueToInputDefault: any, inputDefault: any) {

        // Determine whether the default value is user query input or default input
        const defaultValue = valueToInputDefault;

        
        // set default value
        if (typeof defaultValue !== 'undefined' && defaultValue !== '') selectRef.current.dataset.value = defaultValue;

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

            // set "<select>" value
            setControlValue(defaultValue); // value must be initialized

            // Set hierarchical categories ( with sub-categories )
            if ( hierarchical ) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(_ORGIN_DATA); // prevent the value from being filtered out
            _ORGIN_DATA = removeArrDuplicateItems(_ORGIN_DATA, 'value');

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch?.(_ORGIN_DATA);
    
            return _ORGIN_DATA;
        } else {


            // set "<select>" value
            setControlValue(defaultValue); // value must be initialized
            

            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(optionsDataInit); // prevent the value from being filtered out
            optionsDataInit = removeArrDuplicateItems(optionsDataInit, 'value');

            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            onFetch?.(optionsDataInit);

            return optionsDataInit;
        }


    }

    async function handleFirstFetch(inputVal: any = null) {
        const _params: any[] = fetchFuncMethodParams || [];
        const res = await fetchData((_params).join(','), finalRes(inputVal), inputVal);

        return res;
    }



    //
    function handleFocus(event: any) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event);    
    }

    function handleChange(event: any) {
        const val = event.target.value;
        const curIndex = event.target.selectedIndex;
        const curItem = optionsFlat(dataInit)[curIndex];

       
        //----
        // update value
        setControlValue(val);


        //----
        // Callback
        curItem.callback?.();

        //----
        //remove focus style
        rootRef.current?.classList.remove('focus');

        //
		if ( typeof(onChange) === 'function' ) {
			onChange(event, curItem.value, curItem, curIndex);

            event.target.blur();
		}

    }

    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current?.classList.remove('focus');

        //
        onBlur?.(event);
    }

    function activate() {

        // trigger the first asynchronous request when the options area is expanded
        if (!FIRST_REQUEST_AUTO && !firstRequestExecuted) {
            let curValue: any = defaultValue;
        
            if (typeof curValue === 'undefined') {
                curValue = value;
            }
    
            handleFirstFetch(curValue);

            //
            setFirstRequestExecuted(true);
        }
    }



    useEffect(() => {

        // data init
        //--------------
        if (FIRST_REQUEST_AUTO) {
            handleFirstFetch(value);
        }

    }, [value, options]);


    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED

            // data init
            //--------------
            if (FIRST_REQUEST_AUTO) {
                handleFirstFetch(defaultValue);
            }
        }

    }, []);



    return (
        <>

            <div className={clsWrite(wrapperClassName, 'mb-3 position-relative')} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={idRes} className="form-label">{label}</label>}</> : null}
                <select  
                        ref={(node) => {
                            selectRef.current = node;
                            if (typeof externalRef === 'function') {
                                externalRef(node);
                            } else if (externalRef) {
                                externalRef.current = node;
                            }
                        }}
                        tabIndex={tabIndex || 0}
                        className="form-select"
                        id={idRes}
                        name={name}

                        // `value` prop on `select` should not be null. Consider using an empty string 
                        // to clear the component or `undefined` for uncontrolled components.
                        value={controlValue === null ? undefined : controlValue}  // do not use `defaultValue`
                        onFocus={handleFocus}
                        onClick={activate}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
                        style={style}
                        {...attributes}
					>
                        
			           {!hasErr ? <>{extraSelectOption()}{selectOptionsList}</> : null}
					</select>

            </div>


        </>
    )
});

export default NativeSelect;
