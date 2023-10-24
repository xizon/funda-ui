import React, { useId, useEffect, useState, useRef, forwardRef } from 'react';


import {
    addTreeDepth,
    addTreeIndent
} from './utils/tree';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

interface OptionConfig {
    [propName: string]: string | number;
}



type SelectOptionChangeFnType = (arg1: any, arg2: any) => void;


type SelectProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: OptionConfig[] | string;
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
    onChange?: SelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const Select = forwardRef((props: SelectProps, ref: any) => {
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
    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const selectRef = useRef<any>(null);
    const optionsRes = options ? isJSON( options ) ? JSON.parse( options as string ) : options : '';

    // return a array of options
    let optionsDataInit: OptionConfig[] = []; 
    const optionKeys = Object.keys(optionsRes);
    const optionValues = Object.values(optionsRes).map((item: any) => item.toString() );
    
    optionsDataInit = optionKeys.map((item: any, index: number) => {
        return {
            label: optionKeys[index],
            value: optionValues[index]
        }
    });


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

            //
            setControlValue(value); // value must be initialized

            // Set hierarchical categories ( with sub-categories )
            if ( hierarchical ) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }


            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch?.(_ORGIN_DATA);
    
            return _ORGIN_DATA;
        } else {

            //
            setControlValue(value); // value must be initialized
            
            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            onFetch?.(optionsDataInit);

            return optionsDataInit;
        }


    }

    
	// Determine whether it is in JSON format
	function isJSON( str: any ){
		
		if ( typeof(str) === 'string' && str.length > 0 ) {

			if ( str.replace( /\"\"/g, '' ).replace( /\,/g, '' ) == '[{}]' ) {
				return false;
			} else {

				if (/^[\],:{}\s]*$/.test( str.replace(/\\["\\\/bfnrtu]/g, '@' ).
				replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
				replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

					return true;

				}else{
					return false;
				}	

			}

		} else {
			
			if ( 
				typeof(str) === 'object' && 
				Object.prototype.toString.call(str) === '[object Object]' &&
			    ! str.length
			   ) {
				return true;
			} else {
				return false;
			}
			
		}

	} 


    /**
     * Format indent value
     * @param {String|Array} str 
     * @returns {String|Array}
     */
    function formatIndentVal(str: any) {
        const reVar = new RegExp(INDENT_LAST_PLACEHOLDER, 'g');
        if (Array.isArray(str)) {
            return str.map((s: string) => s.replace(reVar,'').replace(/\&nbsp;/ig,''));
        } else {
            return str.replace(reVar,'').replace(/\&nbsp;/ig,'');
        }
        
    }


    //
    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

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
        rootRef.current.classList.remove('focus');

        //
		if ( typeof(onChange) === 'function' ) {
			onChange(event, dataInit[event.target.selectedIndex]);

            event.target.blur();
		}

    }

    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current.classList.remove('focus');

        //
        onBlur?.(event);
    }

    
    // Generate list of options
    const selectOptionsList = dataInit.map((item: any, index: number) => {
        return <option key={index} value={item.value as string} dangerouslySetInnerHTML={{
            __html: `${item.label}`,
        }}></option>;
        
    });
    


    useEffect(() => {

        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','));

    }, [value, options]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label></> : null}
                <select  
                        ref={(node) => {
                            selectRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
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

export default Select;
