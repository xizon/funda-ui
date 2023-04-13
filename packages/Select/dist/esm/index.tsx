import React, { useId, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type OptionChangeFnType = (arg1: any, arg2: any) => void;


type SelectProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options: string;
    /** -- */
    id?: string;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onChange?: OptionChangeFnType | null;
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
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const rootRef = useRef<any>(null);

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

    function handleFocus(event: any) {
        rootRef.current.classList.add('is-active');

        //
        onFocus?.(event);    
    }

    function handleChange(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('is-active');
        }

        //
		if ( typeof(onChange) === 'function' ) {
			onChange(event, {
                "name": name,
				"value": event.target.value
			});
		}

    }

    function handleBlur(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onBlur?.(event);
    }

    const idRes = id || uniqueID;

		// Get all options from option prop
		const selectOptions = isJSON( options ) ? JSON.parse( options ) : {};
		const optionKeys = Object.keys(selectOptions);
		const optionValues = Object.values(selectOptions);
		
		
		// Generate list of options
		const selectOptionsList = optionKeys.map((selectOption, index) => {
		    return <option key={index} value={optionValues[index] as string}>{selectOption}</option>;
		});


    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}
                <select  
                        ref={ref}
                        className="form-select"
                        id={idRes}
                        name={name}
                        defaultValue={value || ''}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
                        {...attributes}
					>
			           {selectOptionsList}
					</select>

            </div>


        </>
    )
});

export default Select;
