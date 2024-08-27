import React, { useEffect, useState, useRef, forwardRef } from 'react';

import { optionsFlat } from './native-select-utils/func';

import {
    useComId,
    isJSON,
    addTreeDepth,
    addTreeIndent,
    removeArrDuplicateItems
} from 'funda-utils';


export interface ItemConfig {
    [propName: string]: string | number | boolean;
}


export interface OptionConfig {
    [propName: string]: string | number | boolean | ItemConfig[];
}



type NativeSelectOptionChangeFnType = (arg1: any, arg2: any, arg3?: any, arg4?: any) => void;


type NativeSelectProps = {
    wrapperClassName?: string;
    value?: string;
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
  

    
    async function fetchData(params: any) {
        
        // set default value
        if (typeof value !== 'undefined' && value !== '') selectRef.current.dataset.value = value;

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
            setControlValue(value); // value must be initialized

            // Set hierarchical categories ( with sub-categories )
            if ( hierarchical ) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            // remove Duplicate objects from JSON Array
            _ORGIN_DATA = removeArrDuplicateItems(_ORGIN_DATA, 'value');

            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch?.(_ORGIN_DATA);
    
            return _ORGIN_DATA;
        } else {

            // set "<select>" value
            setControlValue(value); // value must be initialized
            

            // remove Duplicate objects from JSON Array
            optionsDataInit = removeArrDuplicateItems(optionsDataInit, 'value');

            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            onFetch?.(optionsDataInit);

            return optionsDataInit;
        }


    }

    //
    function handleFocus(event: any) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event);    
    }

    function handleChange(event: any) {
        const val = event.target.value;

       
        //----
        // update value
        setControlValue(val);


        //----
        //remove focus style
        rootRef.current?.classList.remove('focus');

        //
		if ( typeof(onChange) === 'function' ) {
			onChange(event, optionsFlat(dataInit)[event.target.selectedIndex].value, optionsFlat(dataInit)[event.target.selectedIndex], event.target.selectedIndex);

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
    


    useEffect(() => {

        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','));

    }, [value, options]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
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
                        value={controlValue}  // do not use `defaultValue`
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
                        style={style}
                        {...attributes}
					>
			           {!hasErr ? selectOptionsList : null}
					</select>

            </div>


        </>
    )
});

export default NativeSelect;
