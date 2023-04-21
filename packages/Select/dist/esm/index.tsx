import React, { useId, useEffect, useState, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

export interface fetchResponseField {
    label: string | undefined;
    value: string | undefined;
}

type SelectOptionChangeFnType = (arg1: any, arg2: any) => void;


type SelectProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchResponseField?: fetchResponseField;
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
        style,
        tabIndex,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchResponseField,
        onFetch,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const optionsRes = options ? options : '';

    const [dataInit, setDataInit] = useState<any[]>([]);


    async function fetchData(params: any) {

        if ( typeof fetchFuncAsync === 'object' ) {

            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            const data = response.data.map((item: any) => {
                return {
                    'label': item[`${fetchResponseField?.label}`],
                    'value': item[`${fetchResponseField?.value}`]
                }
            }); 
            
            //
            onFetch?.(data);
            
            //
            setDataInit(data);
    
            return data;
        } else {
            return [];
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


    //
    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);    
    }

    function handleChange(event: any) {
        const val = event.target.value;


        //----
        //remove focus style
        rootRef.current.classList.remove('focus');

        //
		if ( typeof(onChange) === 'function' ) {
			onChange(event, val);

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

    
    // Get all options from option prop
    let selectOptions: any[];
    let optionKeys: string[];
    let optionValues: string[];

    // Use API data if database query exists
    if ( dataInit.length > 0 ) {
        selectOptions = dataInit;
        optionKeys = dataInit.map( (item: any) => item.label);
        optionValues = dataInit.map( (item: any) => item.value);
    } else {
        selectOptions =isJSON( optionsRes ) ? JSON.parse( optionsRes ) : {};
        optionKeys = Object.keys(selectOptions);
        optionValues = Object.values(selectOptions);
    }

    
    
    // Generate list of options
    const selectOptionsList = optionKeys.map((selectOption, index) => {
        return <option key={index} value={optionValues[index] as string}>{selectOption}</option>;
    });



    useEffect(() => {

        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','));


    }, []);


    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}
                <select  
                        ref={ref}
                        tabIndex={tabIndex || 0}
                        className="form-select"
                        id={idRes}
                        name={name}
                        defaultValue={value || ''}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
                        style={style}
                        {...attributes}
					>
			           {selectOptionsList}
					</select>

            </div>


        </>
    )
});

export default Select;
