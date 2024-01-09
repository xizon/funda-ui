import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

import Checkbox from 'funda-checkbox';

import { extractContentsOfBrackets } from './utils/extract';
import { convertArrToValByBrackets } from './utils/convert';

interface OptionConfig {
    [propName: string]: string | number;
}


type MultipleCheckboxesProps = {
    wrapperClassName?: string;
    inline?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string;
    disabled?: any;
    required?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any, data: any, dataStr: any) => void;

};


const MultipleCheckboxes = forwardRef((props: MultipleCheckboxesProps, ref: any) => {
    const {
        wrapperClassName,
        inline,
        options,
        disabled,
        required,
        value,
        label,
        name,
        id,
        extractValueByBrackets,
        style,
        onChange,
        ...attributes
    } = props;


    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const optionsRes = options ? isJSON( options ) ? JSON.parse( options as string ) : options : [];
    const [valData, setValData] = useState<any[]>([]);
    const [valSelected, setValSelected] = useState<any[]>([]);
    const _inline = typeof inline === 'undefined' ? true : inline;


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


    function initDefaultValue(defaultValue: any) {

        // change the value to trigger component rendering
        if ( typeof defaultValue === 'undefined' || defaultValue === '' ) {
            setValSelected([]);
        } else {

            const _val = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');
            if (Array.isArray(_val)) {
                setValSelected(_val.filter((v: any) => v !== ''));
            } else {
                setValSelected([]);
            }

            
        }
    }

    useEffect(() => {


        // update default value
        //--------------
        initDefaultValue(value);


        // Initialize options
        //--------------
        setValData(optionsRes);



    }, [value, options]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? `multiple-checkboxes__wrapper ${wrapperClassName}` : `multiple-checkboxes__wrapper mb-3 position-relative`} ref={rootRef}>

                {label ? <><label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label></> : null}


                <div className="multiple-checkboxes__control-wrapper" style={style}>

                    {valData ? valData.map((item: any, i: number) => {
                        return <div 
                            key={'checkbox' + i} 
                            className={`multiple-checkboxes__control ${_inline ? 'd-inline-block' : ''} pe-3`}
                            data-index={i}
                            data-label={item.label}
                            data-value={item.value}
                            data-disabled={disabled || 'false'}
                        >
                            <Checkbox
                                wrapperClassName=""
                                label={item.label}
                                value={item.value}
                                disabled={disabled || null}
                                onChange={(e: any, val: boolean) => {

                                    setValSelected((prevState) => {
                                        const newData = JSON.parse(JSON.stringify(prevState));
                                        const index = newData.findIndex((item: string | number) => item == e.target.value);
                                        if (index !== -1) newData.splice(index, 1);

                                        const _res = (val) ? Array.from(new Set([e.target.value, ...newData])) : newData;

                                        onChange?.(e.target, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','));

                                        return _res;
                                    });


                                }}
                                checked={valSelected.includes(item.value)}
                            /></div>;
                    }) : null}
                    
                    <input
                        ref={inputRef}
                        tabIndex={-1}
                        type="hidden"
                        id={idRes}
                        name={name}
                        value={VALUE_BY_BRACKETS ? convertArrToValByBrackets(valSelected) : valSelected.join(',')}
                        required={required || null}
                        {...attributes}
                    />


                </div>

                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}


            </div>


        </>
    )
});

export default MultipleCheckboxes;
