import React, { useImperativeHandle, useState, useEffect, useRef, forwardRef } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    isJSON
} from 'funda-utils/dist/cjs/initDefaultOptions';
import {
    extractContentsOfBrackets
} from 'funda-utils/dist/cjs/extract';
import {
    convertArrToValByBrackets
} from 'funda-utils/dist/cjs/convert';
import {
    removeArrDuplicateItems
} from 'funda-utils/dist/cjs/object';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



export interface OptionConfig {
    [propName: string]: string | number | boolean;
}

export interface CustomOptionsItemsListParams {
    name?: string;
    groupLabelClassName?: string;
    groupWrapperClassName?: string;
    tableLayoutCellClassName?: string;
    tableLayout?: boolean;
    dataInit: OptionConfig[];
    required?: boolean;
    inline?: boolean;
    selectedItems: Set<any>;
    uniqueID: string;
    valueBrackets?: boolean;
    disabled?: boolean;
    labelRes: (label: any, id: any) => React.ReactNode;
    valRes: (setData: any) => any[];
    handleCheckboxChange: (itemKey: string) => Set<any>;
    convertArrToValByBrackets: (arr: string[]) => string;
    isAllSelected: boolean;
    handleSelectAll: () => void;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement> | null,
        value: string[] | null,
        valueStr: string,
        label: string[] | null,
        labelStr: string,
        currentData: OptionConfig | null,
        dataCollection: OptionConfig[]
    ) => void;
    attributes: React.HTMLAttributes<HTMLInputElement>;
}

export type MultipleCheckboxesProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    wrapperClassName?: string;
    controlClassName?: string;
    tableLayout?: boolean;
    tableLayoutClassName?: string;
    tableLayoutCellClassName?: string;
    groupWrapperClassName?: string;
    groupLabelClassName?: string;
    inline?: boolean;
    defaultValue?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    options?: OptionConfig[] | string | unknown;
    disabled?: any;
    required?: any;
    showSelectAll?: boolean;
    selectAllLabel?: string; 
    singleSelect?: boolean;
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
    fetchCallback?: (data: OptionConfig[]) => OptionConfig[];
    onFetch?: (data: OptionConfig[]) => void;
    onLoad?: (
        latestData: OptionConfig[],
        defaultValue: string | string[],
        rootElement: HTMLDivElement | HTMLTableElement | null
    ) => void;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement> | null,
        value: string[] | null,
        valueStr: string,
        label: string[] | null,
        labelStr: string,
        currentData: OptionConfig | null,
        dataCollection: OptionConfig[]
    ) => void;
    onCallbackListItem?: (optiondata: any) => void;

};


const MultipleCheckboxes = forwardRef((props: MultipleCheckboxesProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        controlClassName,
        tableLayout,
        tableLayoutClassName,
        tableLayoutCellClassName,
        groupWrapperClassName,
        groupLabelClassName,
        inline,
        options,
        disabled,
        required,
        defaultValue,
        value,
        label,
        name,
        id,
        showSelectAll = false,
        selectAllLabel = 'Select all',
        singleSelect = false,
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
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const optionsRes = options ? isJSON(options) ? JSON.parse(options as string) : options : [];
    const _inline = typeof inline === 'undefined' ? true : inline;

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes;


    //
    const [selectedItems, setSelectedItems] = useState<Set<any>>(new Set());
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);


    const optionsFormatGroupOpt = (allData: any[]) => {
        allData.forEach((item: any) => {
            if (typeof item.optgroup !== 'undefined') {
                item.value = String(Math.random());
            }
        });
    };

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


    const isAllSelected = () => {
        const allOptions = optionsFlat(dataInit);
        const enabledOptions = allOptions.filter(option => 
            !(disabled || (typeof option.disabled !== 'undefined' ? option.disabled : false))
        );
        return enabledOptions.length > 0 && enabledOptions.every(option => selectedItems.has(option.value));
    };

    const handleSelectAll = () => {
        const allOptions = optionsFlat(dataInit);
        const enabledOptions = allOptions.filter(option => 
            !(disabled || (typeof option.disabled !== 'undefined' ? option.disabled : false))
        );
        const newSelectedItems = new Set(selectedItems);
        
        if (isAllSelected()) {
            enabledOptions.forEach(option => newSelectedItems.delete(option.value));
        } else {
            enabledOptions.forEach(option => newSelectedItems.add(option.value));
        }
        
        setSelectedItems(newSelectedItems);
        
        //
        const _res = valRes(newSelectedItems);
        const _resLabel = allOptions.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
        const _resDataCollection = allOptions.filter((v: any) => _res.includes(v.value)).map((k: any) => k);
        
        onChange?.(null, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), 
            _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), 
            null, _resDataCollection);
    };


    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return getAllControls();
            },
            getLatestVal: () => {
                return VALUE_BY_BRACKETS ? convertArrToValByBrackets(valRes(selectedItems)) : valRes(selectedItems).join(',');
            },
            clear: (cb?: any) => {
                initDefaultValue('', dataInit);
                cb?.();

                onChange?.(null, null, '', null, '', null, []);
            },
            set: (value: any, cb?: any) => {
                initDefaultValue(value, dataInit);
                cb?.();

                if (Array.isArray(value)) {
                    const _resDataCollection = value;
                    const _value = value.map((k: any) => k.value);
                    const _valueStr = VALUE_BY_BRACKETS ? value.map((k: any) => `[${k.value}]`).join('') : value.map((k: any) => k.value).join(',');
                    const _label = value.map((k: any) => k.label);
                    const _labelStr = VALUE_BY_BRACKETS ? value.map((k: any) => `[${k.label}]`).join('') : value.map((k: any) => k.label).join(',');

                    onChange?.(null, _value, _valueStr, _label, _labelStr, null, _resDataCollection);
                } else {
                    onChange?.(null, null, value ?? '', null, '', null, []);
                }
                
            },
            selectAll: () => {
                const allOptions = optionsFlat(dataInit);
                const enabledOptions = allOptions.filter(option => 
                    !(disabled || (typeof option.disabled !== 'undefined' ? option.disabled : false))
                );
                const newSelectedItems = new Set([
                    ...Array.from(selectedItems),
                    ...enabledOptions.map(option => option.value)
                ]);
                setSelectedItems(newSelectedItems);

                //
                const _res = valRes(newSelectedItems);
                const _resLabel = allOptions.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
                const _resDataCollection = allOptions.filter((v: any) => _res.includes(v.value)).map((k: any) => k);
                
                onChange?.(null, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), 
                    _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), 
                    null, _resDataCollection);

            },
            deselectAll: () => {
                setSelectedItems(new Set());
                onChange?.(null, [], '', [], '', null, []);

            },
            isAllSelected: () => isAllSelected(),
        }),
        [dataInit, contentRef, selectedItems],
    );



    function handleCheckboxChange(itemKey: string) {
        // first, make a copy of the original set rather than mutating the original
        const newSelectedItems = new Set(selectedItems);


        if (singleSelect) {
            // If singleSelect is true, clear all selections first
            newSelectedItems.clear();
            // Only add the new selection if it wasn't already selected
            if (!selectedItems.has(itemKey)) {
                newSelectedItems.add(itemKey);
            }
        } else {
            // Original multi-select behavior
            if (!newSelectedItems.has(itemKey)) {
                newSelectedItems.add(itemKey);
            } else {
                newSelectedItems.delete(itemKey);
            }
        }

        setSelectedItems(newSelectedItems);

        return newSelectedItems;
    }



    async function fetchData(params: any, inputDefault: any) {

        // set default value
        if (typeof inputDefault !== 'undefined' && inputDefault !== '') rootRef.current.dataset.value = inputDefault;

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



            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(_ORGIN_DATA); // prevent the value from being filtered out
            _ORGIN_DATA = removeArrDuplicateItems(_ORGIN_DATA, 'value');


            //
            initDefaultValue(inputDefault, _ORGIN_DATA); // value must be initialized


            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch?.(_ORGIN_DATA);

            return _ORGIN_DATA;
        } else {

            
            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(optionsDataInit); // prevent the value from being filtered out
            optionsDataInit = removeArrDuplicateItems(optionsDataInit, 'value');

            //
            initDefaultValue(inputDefault, optionsDataInit); // value must be initialized

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

    // Generate custom list of options
    const itemsList = (fn: any) => {

        if (typeof fn === 'function') {
            const params: CustomOptionsItemsListParams = {
                name,
                groupLabelClassName,
                groupWrapperClassName,
                tableLayoutCellClassName,
                tableLayout,
                dataInit,
                inline: _inline,
                selectedItems,
                uniqueID,
                valueBrackets: VALUE_BY_BRACKETS,
                disabled,
                labelRes,
                valRes,
                handleCheckboxChange,
                convertArrToValByBrackets,
                isAllSelected: isAllSelected(),
                handleSelectAll,
                onChange,
                attributes,
            };
            return fn?.(params);
        }
    

                
        const allOptions = optionsFlat(dataInit);

        return (
            <>

                {/* SELECT ALL */}
                {showSelectAll && allOptions.length > 0 && (
                    <div
                        className={combinedCls(
                            'multiple-checkboxes__control form-check pe-3',
                            {
                                'd-inline-block': _inline
                            }
                        )}
                    >
                        <input
                            type="checkbox"
                            className={clsWrite(controlClassName, 'form-check-input')}
                            name={`${name}-select-all`}
                            id={`multiple-checkboxes__select-all-${idRes}`}
                            checked={isAllSelected()}
                            onChange={handleSelectAll}
                            disabled={disabled}
                        />
                        {labelRes(selectAllLabel, `multiple-checkboxes__select-all-${idRes}`)}
                    </div>
                )}
                
                {/* LIST */}
                {Array.isArray(dataInit) ? dataInit.map((item: OptionConfig, index: number) => {

                    const _optiondata: any = {};
                    Object.entries(item).forEach(([key, value]) => {
                        if (key !== 'extends') {
                            _optiondata[key] = value;
                        }
                    });

                    const _groupEl = () => {
                        return <>

                            {/* GROUP LABEL */}
                            <div className={`rmultiple-checkboxes-group__label ${groupLabelClassName || ''}`}>{item.label}</div>
                            {/* /GROUP LABEL */}

                            {Array.isArray(item.optgroup) && item.optgroup.map((opt: OptionConfig, optIndex: number) => {

                                const _optiondata2: any = {};
                                Object.entries(item).forEach(([key, value]) => {
                                    if (key !== 'extends') {
                                        _optiondata2[key] = value;
                                    }
                                });

                                return <div
                                    key={'checkbox' + optIndex}
                                    className={combinedCls(
                                        'multiple-checkboxes__control form-check pe-3',
                                        {
                                            'd-inline-block': _inline
                                        }
                                    )}
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
                                        className={clsWrite(controlClassName, 'form-check-input')}
                                        name={`${name}-checkbox-item`}
                                        id={`multiple-checkboxes__control-label-${index}-${optIndex}-${idRes}`}
                                        data-index={`${index}-${optIndex}`}
                                        data-label={opt.label}
                                        data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`}
                                        data-value={opt.value}
                                        data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                                        data-optiondata={JSON.stringify(_optiondata2)}
                                        value={opt.value as string}
                                        disabled={disabled || (typeof opt.disabled !== 'undefined' ? opt.disabled : null)}
                                        checked={selectedItems.has(opt.value)}
                                        onChange={(e: any) => {


                                            const _newSelectedItems = handleCheckboxChange(opt.value as string);

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

                                    {/* EXTENDS */}
                                    {typeof opt.extends !== 'undefined' ? <>
                                        <div className="d-inline-block">
                                            <div className="form-control-extends__wrapper">{opt.extends}</div>
                                        </div>
                                    </> : null}


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
                                className={clsWrite(controlClassName, 'form-check-input')}
                                name={`${name}-checkbox-item`}
                                id={`multiple-checkboxes__control-label-${index}-${idRes}`}
                                data-index={index}
                                data-label={item.label}
                                data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                                data-value={item.value}
                                data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                                data-optiondata={JSON.stringify(_optiondata)}
                                value={item.value as string}
                                disabled={disabled || (typeof item.disabled !== 'undefined' ? item.disabled : null)}
                                checked={selectedItems.has(item.value)}
                                onChange={(e: any) => {

                                    const _newSelectedItems = handleCheckboxChange(item.value as string);

                                    //
                                    const _res = valRes(_newSelectedItems);
                                    const _resLabel = dataInit.filter((v: any) => _res.includes(v.value)).map((k: any) => k.label);
                                    const _resDataCollection = optionsFlat(dataInit).filter((v: any) => _res.includes(v.value)).map((k: any) => k);


                                    onChange?.(e.target, _res, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_res) : _res.join(','), _resLabel, VALUE_BY_BRACKETS ? convertArrToValByBrackets(_resLabel) : _resLabel.join(','), item, _resDataCollection);


                                }}
                                {...attributes}

                            />

                            {labelRes(typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel, `multiple-checkboxes__control-label-${index}-${idRes}`)}

                            {/* EXTENDS */}
                            {typeof item.extends !== 'undefined' ? <>
                                <div className="d-inline-block">
                                    <div className="form-control-extends__wrapper">{item.extends}</div>
                                </div>
                            </> : null}

                        </>;
                    };


                    if (tableLayout) {

                        /* TABLE LAYOUT */
                        if (typeof item.optgroup !== 'undefined') {
                            return <td
                                colSpan={1}
                                className={combinedCls(
                                    'multiple-checkboxes-group__wrapper',
                                    groupWrapperClassName,
                                    tableLayoutCellClassName
                                )}
                                key={'optgroup-' + index}
                            >
                                {_groupEl()}
                            </td>;
                        } else {

                            return <td colSpan={1}
                                className={combinedCls(
                                    'multiple-checkboxes__control form-check pe-3',
                                    tableLayoutCellClassName,
                                    {
                                        'd-inline-block': _inline
                                    }

                                )}
                                data-index={index}
                                data-label={item.label}
                                data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                                data-value={item.value}
                                data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                                key={'checkbox' + index}
                                data-optiondata={JSON.stringify(_optiondata)}
                            >
                                {_normalEl()}
                            </td>;

                        }
                        /* /TABLE LAYOUT */
                    } else {

                        if (typeof item.optgroup !== 'undefined') {
                            return <div
                                className={combinedCls(
                                    'multiple-checkboxes-group__wrapper',
                                    groupWrapperClassName
                                )}
                                key={'optgroup-' + index}
                            >
                                {_groupEl()}
                            </div>;
                        } else {

                            return <div
                                className={combinedCls(
                                    'multiple-checkboxes__control form-check pe-3',
                                    {
                                        'd-inline-block': _inline
                                    }
                                )}
                                data-index={index}
                                data-label={item.label}
                                data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                                data-value={item.value}
                                data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                                key={'checkbox' + index}
                                data-optiondata={JSON.stringify(_optiondata)}
                            >
                                {_normalEl()}
                            </div>;

                        }

                    }

                }) : null}
            </>
        );




    };



    useEffect(() => {

        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','), value);


    }, [value, options]);


    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED
            const _params: any[] = fetchFuncMethodParams || [];
            fetchData((_params).join(','), defaultValue);
        }

    }, []);

    return (
        <>

            {tableLayout ? <>
                
                {/* TABLE LAYOUT */}
                <table
                    id={`multiple-checkboxes-tablelayout__wrapper-${idRes}`}
                    className={combinedCls(
                        'multiple-checkboxes-tablelayout__wrapper',
                        tableLayoutClassName
                    )}
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
                            onChange={() => void(0)}
                            required={required || null}
                            {...attributes}
                        />
                    </tfoot>

                </table>
                {/* /TABLE LAYOUT */}

            </> : <>
                <div
                    id={`multiple-checkboxes__wrapper-${idRes}`}
                    className={combinedCls(
                        'multiple-checkboxes__wrapper',
                        clsWrite(wrapperClassName, 'mb-3 position-relative')
                    )}
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
                            onChange={() => void(0)}
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
