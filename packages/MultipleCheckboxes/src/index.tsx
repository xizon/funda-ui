import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

import Checkbox from 'funda-checkbox';


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
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    onChange?: (data: any) => void;

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
        style,
        onChange,
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const optionsRes = options ? isJSON( options ) ? JSON.parse( options as string ) : options : [];
    const [regTagData, setRegTagData] = useState<any[]>([]);
    const [regTagSelected, setRegTagSelected] = useState<any[]>([]);
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
            setRegTagSelected([]);
        } else {
            setRegTagSelected(defaultValue.trim().replace(/^\,|\,$/g, '').split(',').filter((v: any) => v !== ''));
        }
    }

    useEffect(() => {


        // update default value
        //--------------
        initDefaultValue(value);


        // Initialize options
        //--------------
        setRegTagData(optionsRes);



    }, [value, options]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? `multiple-checkboxes__wrapper ${wrapperClassName}` : `multiple-checkboxes__wrapper mb-3 position-relative`} ref={rootRef}>

                {label ? <><label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label></> : null}


                <div className="multiple-checkboxes__control-wrapper" style={style}>

                    {regTagData ? regTagData.map((item: any, i: number) => {
                        return <div key={'checkbox' + i} className={`multiple-checkboxes__control ${_inline ? 'd-inline-block' : ''} pe-3`}>
                            <Checkbox
                                wrapperClassName=""
                                label={item.label}
                                value={item.value}
                                disabled={disabled || null}
                                onChange={(e: any, val: boolean) => {

                                    setRegTagSelected((prevState) => {
                                        const newData = JSON.parse(JSON.stringify(prevState));
                                        const index = newData.findIndex((item: string | number) => item == e.target.value);
                                        if (index !== -1) newData.splice(index, 1);

                                        const _res = (val) ? Array.from(new Set([e.target.value, ...newData])) : newData;

                                        onChange?.(_res);

                                        return _res;
                                    });


                                }}
                                checked={regTagSelected.includes(item.value)}
                            /></div>;
                    }) : null}
                    
                    <input
                        ref={inputRef}
                        tabIndex={-1}
                        type="hidden"
                        id={idRes}
                        name={name}
                        value={regTagSelected.join(',')}
                        required={required || null}
                    />


                </div>

                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}


            </div>


        </>
    )
});

export default MultipleCheckboxes;