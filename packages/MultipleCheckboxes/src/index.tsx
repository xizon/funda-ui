import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

import Checkbox from 'funda-checkbox';



import { extractContentsOfBrackets } from './utils/extract';
import { convertArrToValByBrackets } from './utils/convert';

interface OptionConfig {
    [propName: string]: string | number | boolean;
}


type MultipleCheckboxesProps = {
    wrapperClassName?: string;
    groupWrapperClassName?: string;
    groupLabelClassName?: string;
    inline?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string | unknown;
    disabled?: any;
    required?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any) => void;

};


const MultipleCheckboxes = forwardRef((props: MultipleCheckboxesProps, ref: any) => {
    const {
        wrapperClassName,
        groupWrapperClassName,
        groupLabelClassName,
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
             
                // If the default value is label, match value
                let _realValue: any[] = _val.filter((v: any) => v !== '');
                let filterRes: any = [];
                const filterResQueryValue = optionsRes.filter((item: any) => _val.includes(item.value));
                const filterResQueryLabel = optionsRes.filter((item: any) => _val.includes(item.label));

                if (filterResQueryValue.length === 0 && filterResQueryLabel.length > 0) {
                    filterRes = filterResQueryValue;
                    if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
                    if (filterRes.length > 0 && filterResQueryLabel.length) _realValue = filterRes.filter((v: any) => v.value !== '').map((k: any) => k.value);
                }


                //
                setValSelected(_realValue);
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

                    {valData ? valData.map((item: any, index: number) => {

                        if (typeof item.optgroup !== 'undefined') {
                            return <div className={`multiple-checkboxes-group__wrapper ${groupWrapperClassName || ''}`} key={'optgroup-' + index}>
                                    {/* GROUP LABEL */}
                                    <div className={`rmultiple-checkboxes-group__label ${groupLabelClassName || ''}`}>{item.label}</div>
                                    {/* /GROUP LABEL */}

                                    {item.optgroup.map((opt: any, optIndex: number) => {

                                        return <div 
                                                    key={'checkbox' + optIndex} 
                                                    className={`multiple-checkboxes__control ${_inline ? 'd-inline-block' : ''} pe-3`}
                                                    data-index={`${index}-${optIndex}`}
                                                    data-label={opt.label}
                                                    data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`} 
                                                    data-value={opt.value}
                                                    data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                                                >
                                                    <Checkbox
                                                        wrapperClassName=""
                                                        name={`${name}-checkbox-item`}
                                                        data-index={`${index}-${optIndex}`}
                                                        data-label={opt.label}
                                                        data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`} 
                                                        data-value={opt.value}
                                                        data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                                                        label={typeof opt.listItemLabel === 'undefined' ? opt.label : opt.listItemLabel}
                                                        value={opt.value}
                                                        disabled={disabled || (typeof opt.disabled !== 'undefined' ? opt.disabled : null)}
                                                        onChange={(e: any, val: boolean) => {

                                                            setValSelected((prevState) => {
                                                                const newData = JSON.parse(JSON.stringify(prevState));
                                                                const elIndex = newData.findIndex((item: string | number) => item == e.target.value);
                                                                if (elIndex !== -1) newData.splice(elIndex, 1);

                                                                const _res = (val) ? Array.from(new Set([e.target.value, ...newData])) : newData;
                                                                const _resLabel = optionsRes.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);

                                                                //
                                                                let curData: any;
                                                              
                                                                // if group
                                                                if (typeof item.optgroup !== 'undefined') {
                                                                    const groupItemIndex = optIndex;
                                                                    const groupOpts: any = item.optgroup;
                                                        
                                                                    curData = groupOpts[groupItemIndex];
                                                                } else {
                                                                    curData = item;
                                                                }
                                                        

                                                                onChange?.(e.target, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), curData);

                                                                return _res;
                                                            });

                                                        }}
                                                        checked={valSelected.includes(opt.value)}
                                                        {...attributes}
                                                    />
                                                </div>;

                                    })}

                                </div>;
                        } else {

                            return <div 
                                        key={'checkbox' + index} 
                                        className={`multiple-checkboxes__control ${_inline ? 'd-inline-block' : ''} pe-3`}
                                        data-index={index}
                                        data-label={item.label}
                                        data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`} 
                                        data-value={item.value}
                                        data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                                    >
                                        <Checkbox
                                            wrapperClassName=""
                                            name={`${name}-checkbox-item`}
                                            data-index={index}
                                            data-label={item.label}
                                            data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`} 
                                            data-value={item.value}
                                            data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                                            label={typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel}
                                            value={item.value}
                                            disabled={disabled || (typeof item.disabled !== 'undefined' ? item.disabled : null)}
                                            onChange={(e: any, val: boolean) => {

                                                setValSelected((prevState) => {
                                                    const newData = JSON.parse(JSON.stringify(prevState));
                                                    const elIndex = newData.findIndex((item: string | number) => item == e.target.value);
                                                    if (elIndex !== -1) newData.splice(elIndex, 1);

                                                    const _res = (val) ? Array.from(new Set([e.target.value, ...newData])) : newData;
                                                    const _resLabel = optionsRes.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);

                                                    onChange?.(e.target, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), item);

                                                    return _res;
                                                });

                                            }}
                                            checked={valSelected.includes(item.value)}
                                            {...attributes}
                                        />
                                    </div>;

                        }


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
