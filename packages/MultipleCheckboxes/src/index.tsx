import React, { useImperativeHandle, useId, useState, useEffect, useRef, forwardRef } from 'react';

import {
    isJSON,
    extractContentsOfBrackets,
    convertArrToValByBrackets
} from 'funda-utils';



interface OptionConfig {
    [propName: string]: string | number | boolean;
}


type MultipleCheckboxesProps = {
    contentRef?: React.RefObject<any>;
    wrapperClassName?: string;
    tableLayout?: boolean;
    tableLayoutClassName?: string;
    tableLayoutCellClassName?: string;
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
    onCallbackListItem?: (optiondata: any) => void;

};


const MultipleCheckboxes = forwardRef((props: MultipleCheckboxesProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        tableLayout,
        tableLayoutClassName,
        tableLayoutCellClassName,
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
        onCallbackListItem,
        ...attributes
    } = props;


    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const optionsRes = options ? isJSON(options) ? JSON.parse(options as string) : options : [];
    const _inline = typeof inline === 'undefined' ? true : inline;

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes;


    //
    const [selectedItems, setSelectedItems] = useState<any>(new Set());
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);



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

    const labelRes = (label: any, id: any) => {
        return label ? <>{typeof label === 'string' ? <label htmlFor={id} className="form-check-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={id} className="form-check-label">{label}</label>}</> : null;
    };

    const getAllControls = () => {
        return [].slice.call(rootRef.current.querySelectorAll(`[type="checkbox"]`));
    };

    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return getAllControls();
            },
            clear: (cb?: any) => {
                initDefaultValue('', dataInit);
                cb?.();
            },
            set: (value: any, cb?: any) => {
                initDefaultValue(value, dataInit);
                cb?.();
            }
        }),
        [dataInit, contentRef],
    );



    function handleCheckboxChange(itemKey: string) {
        // first, make a copy of the original set rather than mutating the original
        const newSelectedItems = new Set(selectedItems);
        if (!newSelectedItems.has(itemKey)) {
            newSelectedItems.add(itemKey);
        } else {
            newSelectedItems.delete(itemKey);
        }
        setSelectedItems(newSelectedItems);

        return newSelectedItems;
    }



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


    function initDefaultValue(defaultValue: any, latestData: any[]) {

        const newSelectedItems = new Set();

        // change the value to trigger component rendering
        if (typeof defaultValue === 'undefined' || defaultValue === '') {
            setSelectedItems(newSelectedItems);

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
                _realValue.forEach((v: any) => {
                    newSelectedItems.add(v);
                });
                setSelectedItems(newSelectedItems);


                //
                onLoad?.(latestData, _realValue, rootRef.current);

            } else {
                setSelectedItems(newSelectedItems);

                //
                onLoad?.(latestData, defaultValue, rootRef.current);

            }


        }
    }

    function valRes(setData: any) {
        const res: any[] = [];
        const s = setData;
        for (let it = s.values(), val = null; val = it.next().value;) {
            res.push(val);
        }
        return res;
    }

    // Generate list of options
    const itemsList = (fn: any) => {

        if (typeof fn === 'function') {
            return fn?.({
                name,
                groupLabelClassName,
                groupWrapperClassName,
                tableLayoutCellClassName,
                tableLayout,
                dataInit,
                valueBrackets: VALUE_BY_BRACKETS,
                inline: _inline,
                selectedItems,
                uniqueID: idRes,
                disabled,
                labelRes,
                valRes,
                handleCheckboxChange,
                onChange,
                convertArrToValByBrackets,
                attributes
            });
        }

        
        return Array.isArray(dataInit) ? dataInit.map((item: any, index: number) => {

            const _groupEl = () => {
                return <>
    
                    {/* GROUP LABEL */}
                    <div className={`rmultiple-checkboxes-group__label ${groupLabelClassName || ''}`}>{item.label}</div>
                    {/* /GROUP LABEL */}
    
                    {item.optgroup.map((opt: any, optIndex: number) => {
    
                        return <div
                            key={'checkbox' + optIndex}
                            className={`multiple-checkboxes__control form-check ${_inline ? 'd-inline-block' : ''} pe-3`}
                            data-index={`${index}-${optIndex}`}
                            data-label={opt.label}
                            data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`}
                            data-value={opt.value}
                            data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                        >
                            <input
                                ref={(node: any) => {
                                    if (externalRef) externalRef.current = getAllControls();
                                }}
                                type="checkbox"
                                className="form-check-input"
                                name={`${name}-checkbox-item`}
                                id={`multiple-checkboxes__control-label-${index}-${optIndex}-${idRes}`}
                                data-index={`${index}-${optIndex}`}
                                data-label={opt.label}
                                data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`}
                                data-value={opt.value}
                                data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                                data-optiondata={JSON.stringify(opt)}
                                value={opt.value}
                                disabled={disabled || (typeof opt.disabled !== 'undefined' ? opt.disabled : null)}
                                checked={selectedItems.has(opt.value)}
                                onChange={(e: any) => {
    

                                    const _newSelectedItems = handleCheckboxChange(opt.value);
                                    
                                    //
                                    const _res = valRes(_newSelectedItems);
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
    
    
                                }}
                                {...attributes}
    
                            />
    
                            {labelRes(typeof opt.listItemLabel === 'undefined' ? opt.label : opt.listItemLabel, `multiple-checkboxes__control-label-${index}-${optIndex}-${idRes}`)}
    
                        </div>;
    
                    })}
                </>;
            };
    
            const _normalEl = () => {
                return <>
    
                    <input
                        ref={(node: any) => {
                            if (externalRef) externalRef.current = getAllControls();
                            
                        }}
                        type="checkbox"
                        className="form-check-input"
                        name={`${name}-checkbox-item`}
                        id={`multiple-checkboxes__control-label-${index}-${idRes}`}
                        data-index={index}
                        data-label={item.label}
                        data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                        data-value={item.value}
                        data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                        data-optiondata={JSON.stringify(item)}
                        value={item.value}
                        disabled={disabled || (typeof item.disabled !== 'undefined' ? item.disabled : null)}
                        checked={selectedItems.has(item.value)}
                        onChange={(e: any) => {
    
                            const _newSelectedItems = handleCheckboxChange(item.value);
                            
                            //
                            const _res = valRes(_newSelectedItems);
                            const _resLabel = dataInit.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
                            const _resDataCollection = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k);
    
    
                            onChange?.(e.target, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), item, _resDataCollection);
    
    
                        }}
                        {...attributes}
    
                    />
    
                    {labelRes(typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel, `multiple-checkboxes__control-label-${index}-${idRes}`)}
                </>;
            };
    
            
            if (tableLayout) {
    
                /* TABLE LAYOUT */
                if (typeof item.optgroup !== 'undefined') {
                    return <td 
                        colSpan={1} 
                        className={`multiple-checkboxes-group__wrapper ${groupWrapperClassName || ''} ${tableLayoutCellClassName || ''}`} 
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_groupEl()}
                    </td>;
                } else {
    
                    return <td colSpan={1}
                        className={`multiple-checkboxes__control form-check ${_inline ? 'd-inline-block' : ''} pe-3 ${tableLayoutCellClassName || ''}`}
                        data-index={index}
                        data-label={item.label}
                        data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                        data-value={item.value}
                        data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                        key={'checkbox' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_normalEl()}
                    </td>;
    
                }
                /* /TABLE LAYOUT */
            } else {
    
                if (typeof item.optgroup !== 'undefined') {
                    return <div 
                        className={`multiple-checkboxes-group__wrapper ${groupWrapperClassName || ''}`} 
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_groupEl()}
                    </div>;
                } else {
    
                    return <div
                        className={`multiple-checkboxes__control form-check ${_inline ? 'd-inline-block' : ''} pe-3`}
                        data-index={index}
                        data-label={item.label}
                        data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                        data-value={item.value}
                        data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                        key={'checkbox' + index}
                        data-optiondata={JSON.stringify(item)}
                    >
                        {_normalEl()}
                    </div>;
    
                }
    
            }
    
        }) : null
    };



    useEffect(() => {

        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','));


    }, [value, options]);


    return (
        <>

            {tableLayout ? <>
                
                {/* TABLE LAYOUT */}
                <table
                    id={`multiple-checkboxes-tablelayout__wrapper-${idRes}`}
                    className={`multiple-checkboxes-tablelayout__wrapper ${tableLayoutClassName || ''}`}
                    ref={rootRef}
                >
                    {label ? <>{typeof label === 'string' ? <caption dangerouslySetInnerHTML={{ __html: `${label}` }}></caption> : <caption>{label}</caption>}</> : null}
                    <tbody>
                        <tr>
                            {itemsList(onCallbackListItem)}
                        </tr>
                    </tbody>
                    <tfoot style={{display: 'none'}}>
                        <input
                            tabIndex={-1}
                            type="hidden"
                            id={idRes}
                            name={name}
                            value={VALUE_BY_BRACKETS ? convertArrToValByBrackets(valRes(selectedItems)) : valRes(selectedItems).join(',')} // do not use `defaultValue`
                            required={required || null}
                            {...attributes}
                        />
                    </tfoot>

                </table>
                {/* /TABLE LAYOUT */}

            </> : <>
                <div
                    id={`multiple-checkboxes__wrapper-${idRes}`}
                    className={`multiple-checkboxes__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'}`}
                    ref={rootRef}
                >

                    {label ? <>{typeof label === 'string' ? <label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={`label-${idRes}`} className="form-label">{label}</label>}</> : null}

                    <div className="multiple-checkboxes__control-wrapper" style={style}>


                        {itemsList(onCallbackListItem)}

                        <input
                            tabIndex={-1}
                            type="hidden"
                            id={idRes}
                            name={name}
                            value={VALUE_BY_BRACKETS ? convertArrToValByBrackets(valRes(selectedItems)) : valRes(selectedItems).join(',')} // do not use `defaultValue`
                            required={required || null}
                            {...attributes}
                        />


                    </div>

                </div>

            </>}





        </>
    )
});

export default MultipleCheckboxes;
