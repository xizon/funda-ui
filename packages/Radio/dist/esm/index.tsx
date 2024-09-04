import React, { useImperativeHandle, forwardRef, useRef, useState, useEffect } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    isJSON
} from 'funda-utils/dist/cjs/initDefaultOptions';
import {
    removeArrDuplicateItems
} from 'funda-utils/dist/cjs/object';


export interface OptionConfig {
    [propName: string]: string | number | React.ReactNode | boolean;
}


export type RadioOptionChangeFnType = (arg1: any, arg2: any, arg3?: any, arg4?: any) => void;


export type RadioProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    wrapperClassName?: string;
    controlClassName?: string;
    groupWrapperClassName?: string;
    groupLabelClassName?: string;
    itemSelectedClassName?: string;
    tableLayout?: boolean;
    tableLayoutClassName?: string;
    tableLayoutCellClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: OptionConfig[] | string | unknown;
    inline?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
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
    onClick?: RadioOptionChangeFnType | null;
    onChange?: RadioOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    onCallbackListItem?: (params: any) => void;
    
};

const Radio = forwardRef((props: RadioProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        controlClassName,
        groupWrapperClassName,
        groupLabelClassName,
        itemSelectedClassName,
        tableLayout,
        tableLayoutClassName,
        tableLayoutCellClassName,
        disabled,
        required,
        value,
        label,
        name,
        id,
        options,
        inline,
        style,
        tabIndex,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onLoad,
        onClick,
        onChange,
        onBlur,
        onFocus,
        onCallbackListItem,
        ...attributes
    } = props;

    
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const optionsRes = options ? isJSON(options) ? JSON.parse(options as string) : options : '';

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes;
    

    //
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [controlValue, setControlValue] = useState<string | undefined>('');

    const labelRes = (label: any, id: any) => {
        return label ? <>{typeof label === 'string' ? <label htmlFor={id} className="form-check-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={id} className="form-check-label">{label}</label>}</> : null;
    };

    const getAllControls = () => {
        return [].slice.call(rootRef.current.querySelectorAll(`[type="radio"]`));
    };

    
    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return getAllControls();
            },
            clear: (cb?: any) => {
                setControlValue('');
                cb?.();
            },
            set: (value: string, cb?: any) => {
                setControlValue(`${value}`);
                cb?.();
            }
        }),
        [dataInit, contentRef],
    );


    function stringlineToHump(str: any) {
        if (typeof str === 'string' && str.length > 0) {
            const re = /-(\w)/g;
            str = str.replace(re, function ($0, $1) {
                return $1.toUpperCase();
            });
            return str;
        } else {
            return str;
        }

    }


    function getDataAttributes(node: any) {
        if (node === null) return [];

        const res: any  = {};
        for (const attr of node.attributes) {
            if (/^data-/.test(attr.name)) {
                res[stringlineToHump(attr.name)] = attr.value;
            }
        }

        return res;

    }
 

    async function fetchData(params: any) {

        // set default value
        if (typeof value !== 'undefined' && value !== '') rootRef.current.dataset.value = value;


        if (rootRef.current) {
            const allControlsData: any[] = [];
            getAllControls().forEach((el: HTMLInputElement, i: number) => {
                allControlsData.push(getDataAttributes(el));
            });
            rootRef.current.setAttribute('data-controls-cus-attrs', JSON.stringify(allControlsData));
        }
        
        
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
                setHasErr(true);
                _ORGIN_DATA = [];
            }


                  
            // If the default value is label, match value
            let _realValue = value;
            let filterRes: any = [];
            const filterResQueryValue = _ORGIN_DATA.filter((item: any) => item.value == value);
            const filterResQueryLabel = _ORGIN_DATA.filter((item: any) => item.label == value);

            if (filterResQueryValue.length === 0 && filterResQueryLabel.length > 0) {
                filterRes = filterResQueryValue;
                if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
                if (filterRes.length > 0) _realValue = filterRes[0].value;
            }
    

            // set "<input type="radio">" value
            setControlValue(_realValue); // value must be initialized


            // remove Duplicate objects from JSON Array
            _ORGIN_DATA = removeArrDuplicateItems(_ORGIN_DATA, 'value');


            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch?.(_ORGIN_DATA);

            //
            onLoad?.(_ORGIN_DATA, _realValue, rootRef.current);


            return _ORGIN_DATA;
        } else {


                  
            // If the default value is label, match value
            let _realValue = value;
            let filterRes: any = [];
            const filterResQueryValue = optionsDataInit.filter((item: any) => item.value == value);
            const filterResQueryLabel = optionsDataInit.filter((item: any) => item.label == value);

            if (filterResQueryValue.length === 0 && filterResQueryLabel.length > 0) {
                filterRes = filterResQueryValue;
                if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
                if (filterRes.length > 0) _realValue = filterRes[0].value;
            }




            // set "<input type="radio">" value
            setControlValue(_realValue); // value must be initialized


            // remove Duplicate objects from JSON Array
            optionsDataInit = removeArrDuplicateItems(optionsDataInit, 'value');

            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            onFetch?.(optionsDataInit);

            //
            onLoad?.(optionsDataInit, _realValue, rootRef.current);


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
        let curData: any;
        let currentIndex = event.target.dataset.index;

        // if group
        if (currentIndex.indexOf('-') >= 0) {
            const groupIdArr = currentIndex.split('-');
            const groupIndex = groupIdArr[0];
            const groupItemIndex = groupIdArr[1];
            const groupOpts: any = dataInit[groupIndex].optgroup;

            curData = groupOpts[groupItemIndex];
        } else {
            curData = dataInit[currentIndex];
        }


        //----
        // update value
        setControlValue(val);


        //----
        //remove focus style
        rootRef.current?.classList.remove('focus');

   
        //
        if (typeof (onChange) === 'function') {
            onChange(event, val, curData, currentIndex);
        }
        if (typeof (onClick) === 'function') {
            onClick(event, val, curData, currentIndex);
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
    const itemsList = (fn: any) => {

        if (typeof fn === 'function') {
            return fn?.({
                name,
                dataInit,
                required,
                groupLabelClassName,
                inline,
                controlValue,
                itemSelectedClassName,
                tabIndex,
                uniqueID,
                disabled,
                handleChange,
                onClick,
                handleFocus,
                handleBlur,
                attributes,
                style,
                labelRes,
                groupWrapperClassName,
                tableLayout,
                tableLayoutClassName,
                tableLayoutCellClassName,
            });
        }

        return Array.isArray(dataInit) ? dataInit.map((item: any, index: number) => {
            const requiredVal = index === 0 ? required || null : null;

            const _formatItem = {};
            Object.keys(item).forEach((key: string) => {
                if (key !== 'extends') _formatItem[key] = item[key];
            });

      
            const _groupEl = () => {
                return <>
                    {/* GROUP LABEL */}
                    <div className={`radio-group__label ${groupLabelClassName || ''}`}>{item.label}</div>
                    {/* /GROUP LABEL */}

                    {item.optgroup.map((opt: any, optIndex: number) => {

                        const _formatOpt = {};
                        Object.keys(item).forEach((key: string) => {
                            if (key !== 'extends') _formatOpt[key] = item[key];
                        });
            

                        return <div key={'option-' + optIndex} className={`${inline ? `form-check form-check-inline` : `form-check`} ${controlValue == opt.value ? (itemSelectedClassName || 'item-selected') : ''}`}>
                            <div className="d-inline-block">
                                <input
                                    ref={(node: any) => {
                                        if (externalRef) externalRef.current = getAllControls();
                                    }}
                                    tabIndex={tabIndex || 0}
                                    type="radio"
                                    className={`${controlClassName || controlClassName === '' ? `${controlClassName}` : `form-check-input`}`}
                                    id={`field-${uniqueID}-${index}-${optIndex}`}
                                    name={name}
                                    data-index={`${index}-${optIndex}`}
                                    data-label={opt.label}
                                    data-list-item-label={`${typeof opt.listItemLabel === 'undefined' ? '' : opt.listItemLabel}`}
                                    data-value={opt.value}
                                    data-disabled={disabled || (typeof opt.disabled !== 'undefined' ? `${opt.disabled}` : 'false')}
                                    data-optiondata={JSON.stringify(_formatOpt)}
                                    value={`${opt.value}`}
                                    required={requiredVal}
                                    disabled={disabled || (typeof opt.disabled !== 'undefined' ? opt.disabled : null)}
                                    onChange={handleChange}
                                    onClick={typeof (onClick) === 'function' ? handleChange : () => void (0)}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    checked={controlValue == opt.value}   // component status will not change if defaultChecked is used
                                    style={style}
                                    {...attributes}
                                />
                                {labelRes(typeof opt.listItemLabel === 'undefined' ? opt.label : opt.listItemLabel, `field-${uniqueID}-${index}-${optIndex}`)}

                            </div>
                            <div className="d-inline-block">
                                <div className="form-control-extends__wrapper">{typeof opt.extends !== 'undefined' ? <>{opt.extends}</> : null}</div>
                            </div>
                        </div>;

                    })}

                </>;
            };

            const _normalEl = () => {
                return <>
                    <div className="d-inline-block">
                        <input
                            ref={(node: any) => {
                                if (externalRef) externalRef.current = getAllControls();
                            }}
                            tabIndex={tabIndex || 0}
                            type="radio"
                            className={`${controlClassName || controlClassName === '' ? `${controlClassName}` : `form-check-input`}`}
                            id={`field-${uniqueID}-${index}`}
                            name={name}
                            data-index={index}
                            data-label={item.label}
                            data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                            data-value={item.value}
                            data-disabled={disabled || (typeof item.disabled !== 'undefined' ? `${item.disabled}` : 'false')}
                            data-optiondata={JSON.stringify(_formatItem)}
                            value={`${item.value}`}
                            required={requiredVal}
                            disabled={disabled || (typeof item.disabled !== 'undefined' ? item.disabled : null)}
                            onChange={handleChange}
                            onClick={typeof (onClick) === 'function' ? handleChange : () => void (0)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            checked={controlValue == item.value}   // component status will not change if defaultChecked is used
                            style={style}
                            {...attributes}
                        />
                        <label className="form-check-label" htmlFor={`field-${uniqueID}-${index}`} dangerouslySetInnerHTML={{
                            __html: `${typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel}`
                        }}></label>
                    </div>
                    <div className="d-inline-block">
                        <div className="form-control-extends__wrapper">{typeof item.extends !== 'undefined' ? <>{item.extends}</> : null}</div>
                    </div>

                </>;
            };


            if (tableLayout) {

                /* TABLE LAYOUT */
                if (typeof item.optgroup !== 'undefined') {
                    return <td
                        colSpan={1}
                        className={`radio-group__wrapper ${groupWrapperClassName || ''} ${tableLayoutCellClassName || ''}`}
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(_formatItem)}
                    >
                        {_groupEl()}
                    </td>;
                } else {

                    return <td
                        colSpan={1}
                        className={`${inline ? `form-check form-check-inline` : `form-check`} ${controlValue == item.value ? (itemSelectedClassName || 'item-selected') : ''} ${tableLayoutCellClassName || ''}`}
                        key={'option-' + index}
                        data-optiondata={JSON.stringify(_formatItem)}
                    >
                        {_normalEl()}
                    </td>;
                }
                /* /TABLE LAYOUT */
            } else {
                if (typeof item.optgroup !== 'undefined') {
                    return <div
                        className={`radio-group__wrapper ${groupWrapperClassName || ''}`}
                        key={'optgroup-' + index}
                        data-optiondata={JSON.stringify(_formatItem)}
                    >
                        {_groupEl()}
                    </div>;
                } else {

                    return <div
                        className={`${inline ? `form-check form-check-inline` : `form-check`} ${controlValue == item.value ? (itemSelectedClassName || 'item-selected') : ''}`}
                        key={'option-' + index}
                        data-optiondata={JSON.stringify(_formatItem)}
                    >
                        {_normalEl()}
                    </div>;
                }

            }



        }) : null;
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
                    id={`radio-tablelayout__wrapper-${idRes}`}
                    className={`radio-tablelayout__wrapper ${tableLayoutClassName || ''}`}
                    ref={rootRef}
                >
                    {label ? <>{typeof label === 'string' ? <caption dangerouslySetInnerHTML={{ __html: `${label}` }}></caption> : <caption>{label}</caption>}</> : null}
                    <tbody>
                        <tr>
                            {!hasErr ? itemsList(onCallbackListItem) : null}
                        </tr>
                    </tbody>

                </table>
                {/* /TABLE LAYOUT */}

            </> : <>
                <div
                    id={`radio__wrapper-${idRes}`}
                    className={`radio__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'}`}
                    ref={rootRef}
                >
                    {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={idRes} className="form-label" >{label}</label>}</> : null}
                    <div id={idRes}>
                        {!hasErr ? itemsList(onCallbackListItem) : null}
                    </div>
                </div>

            </>}



        </>
    )
});

export default Radio;

