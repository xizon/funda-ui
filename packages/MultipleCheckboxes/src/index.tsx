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
    /** This function is called whenever the data is updated.
 *  Exposes the JSON format data about the option as an argument.
 */
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onLoad?: (arg1: any, arg2: any, arg3: any) => void;
    onChange?: (e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => void;

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
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onLoad,
        onChange,
        ...attributes
    } = props;


    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const optionsRes = options ? isJSON( options ) ? JSON.parse( options as string ) : options : [];
    const [valSelected, setValSelected] = useState<any[]>([]);
    const _inline = typeof inline === 'undefined' ? true : inline;

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes;
    
    //
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);



    const optionsFlat = (allData: any[]) => {

        const flatItems: any[] = [];

        allData.forEach((item: any) => {
            if (typeof item.optgroup !== 'undefined') {
                item.optgroup.forEach((opt: any) => {
                    flatItems.push(opt);
                });
            } else {
                flatItems.push(item);
            }
        });

        return flatItems;
    };



    async function fetchData(params: any) {

        // set default value
        if (typeof value !== 'undefined' && value !== '') rootRef.current.dataset.value = value;

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
                _ORGIN_DATA = [];
            }


            //
            initDefaultValue(value, _ORGIN_DATA); // value must be initialized


            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch?.(_ORGIN_DATA);


            return _ORGIN_DATA;
        } else {

            //
            initDefaultValue(value, optionsDataInit); // value must be initialized

            //
            setDataInit(optionsDataInit); // data must be initialized

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



    function initDefaultValue(defaultValue: any, latestData: any[]) {

        // change the value to trigger component rendering
        if ( typeof defaultValue === 'undefined' || defaultValue === '' ) {
            setValSelected([]);

            //
            onLoad?.(latestData, defaultValue, rootRef.current);


        } else {

            const _val = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');
            if (Array.isArray(_val)) {
             
                // If the default value is label, match value
                let _realValue: any[] = _val.filter((v: any) => v !== '');
                let filterRes: any = [];
                const filterResQueryValue = latestData.filter((item: any) => _val.includes(item.value));
                const filterResQueryLabel = latestData.filter((item: any) => _val.includes(item.label));

                if (filterResQueryValue.length === 0 && filterResQueryLabel.length > 0) {
                    filterRes = filterResQueryValue;
                    if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
                    if (filterRes.length > 0 && filterResQueryLabel.length) _realValue = filterRes.filter((v: any) => v.value !== '').map((k: any) => k.value);
                }


                //
                setValSelected(_realValue);

                //
                onLoad?.(latestData, _realValue, rootRef.current);

            } else {
                setValSelected([]);

                //
                onLoad?.(latestData, defaultValue, rootRef.current);

            }

            
        }
    }

    useEffect(() => {


        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','));


    }, [value, options]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? `multiple-checkboxes__wrapper ${wrapperClassName}` : `multiple-checkboxes__wrapper mb-3 position-relative`} ref={rootRef}>

                {label ? <><label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label></> : null}


                <div className="multiple-checkboxes__control-wrapper" style={style}>

                    {dataInit ? dataInit.map((item: any, index: number) => {

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
                                                                const _resLabel = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
                                                                const _resDataCollection = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k);


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
                                                                
                                                                onChange?.(e.target, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), curData, _resDataCollection);

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
                                                    const _resLabel = dataInit.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
                                                    const _resDataCollection = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k);


                                                    onChange?.(e.target, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), item, _resDataCollection);

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
