import React, { useEffect, useState, useRef, KeyboardEvent, forwardRef, useImperativeHandle } from 'react';

import {
    formatIndentVal,
    unique,
    removeItemOnce,
    optionsCustomSelectFlat,
    isObject
} from './utils/func';


import RootPortal from 'funda-root-portal';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    isJSON
} from 'funda-utils/dist/cjs/initDefaultOptions';
import useDebounce from 'funda-utils/dist/cjs/useDebounce';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import useWindowScroll from 'funda-utils/dist/cjs/useWindowScroll';
import {
    extractContentsOfBrackets
} from 'funda-utils/dist/cjs/extract';
import {
    convertArrToValByBrackets
} from 'funda-utils/dist/cjs/convert';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import {
    addTreeDepth,
    addTreeIndent,
} from 'funda-utils/dist/cjs/tree';
import {
    getTextWidth
} from 'funda-utils/dist/cjs/inputsCalculation';
import {
    removeArrDuplicateItems
} from 'funda-utils/dist/cjs/object';

// Destroys body scroll locking
import {
    clearAllBodyScrollLocks, 
    disableBodyScroll, 
    enableBodyScroll,
} from 'funda-utils/dist/cjs/bodyScrollLock';
import {
    stripTagsAndContent
} from 'funda-utils/dist/cjs/format-string';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



export type SelectOptionChangeFnType = (arg1: any, arg2: any, arg3: any) => void;


export interface MultiSelectControlValConfig {
    values: string[];
    labels: string[];
}

export interface OptionConfig {
    disabled?: boolean;
    optgroup?: any[];
    group?: boolean;
    label: string;
    listItemLabel?: string;
    value: string | number | boolean;
    queryString: string | number;
    callback?: () => void;
}


export interface MultiSelectConfig {
    valid: boolean;
    selectAll: boolean;
    selectAllLabel?: string;
    deselectAllLabel?: string;
}

export interface multiSelectSelectedItemOnlyStatusConfig {
    itemsLabel?: string;
    allItemsLabel?: string;
    noneLabel?: string;
}



export interface ClearTriggerConfig {
    valid: boolean;
    clearValueLabel?: string;
}


export type SelectProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    popupRef?: React.ForwardedRef<any>; // could use "Array" on popupRef.current, such as popupRef.current[0], popupRef.current[1]
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    optionsExClassName?: string;
    exceededSidePosOffset?: number;
    clearIcon?: boolean; 
    multiSelect?: MultiSelectConfig;
    multiSelectEntireAreaTrigger?: boolean;
    multiSelectSelectedItemOnlyStatus?: multiSelectSelectedItemOnlyStatusConfig;
    renderSelectedValue?: (selectedData: MultiSelectControlValConfig, removeFunc: (e: React.MouseEvent) => void) => React.ReactNode;
    clearTrigger?: ClearTriggerConfig;
    defaultValue?: string | OptionConfig | OptionConfig[];
    value?: string | OptionConfig | OptionConfig[];
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    options?: OptionConfig[] | string;
    lockBodyScroll?: boolean;
    loader?: React.ReactNode;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    winWidth?: string | Function;
    controlArrow?: React.ReactNode;
    firstRequestAutoExec?: boolean;
    fetchTrigger?: boolean;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (e: any, e2: any, value: string, data: any, incomingData: string | null | undefined) => void;
    onLoad?: (e: any, e2: any, value: string | null | undefined) => void;
    onSelect?: (data: any) => void;
    onChange?: SelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    onKeyPressed?: (arg1: any, arg2: any, arg3: any) => void;
};


const Select = forwardRef((props: SelectProps, externalRef: any) => {
    const {
        contentRef,
        popupRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
        optionsExClassName,
        exceededSidePosOffset,
        clearIcon,
        multiSelect,
        multiSelectEntireAreaTrigger,
        multiSelectSelectedItemOnlyStatus,
        renderSelectedValue,
        disabled,
        required,
        defaultValue,
        value,
        label,
        name,
        readOnly,
        placeholder,
        id,
        autoComplete,
        autoCapitalize,
        spellCheck,
        options,
        clearTrigger,
        loader,
        lockBodyScroll,
        hierarchical,
        indentation,
        doubleIndent,
        style,
        depth,
        controlArrow,
        winWidth,
        tabIndex,
        firstRequestAutoExec,
        fetchTrigger,
        fetchNoneInfo = 'No match yet',
        fetchUpdate,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        data,
        extractValueByBrackets,
        fetchCallback,
        onFetch,
        onLoad,
        onSelect,
        onChange,
        onBlur,
        onFocus,
        onKeyPressed,
        ...attributes
    } = props;


    const QUERY_STRING_PLACEHOLDER = '------';  // Invalid parameters for the first automatic request
    const DEPTH = depth || 1055;  // the default value same as bootstrap
    const MANUAL_REQ = typeof fetchTrigger !== 'undefined' && fetchTrigger === true ? true : false;  // Manual requests
    const LIVE_SEARCH_DISABLED = !MANUAL_REQ && typeof window !== 'undefined' && typeof (window as any)['funda-ui__Select-disable-livesearch'] !== 'undefined' ? true : false; // Globally disable real-time search functionality (only valid for non-dynamic requests)

    const CLEAR_ICON = typeof clearIcon === 'undefined' ? true : clearIcon;
    const FIRST_REQUEST_AUTO = typeof firstRequestAutoExec === 'undefined' ? true : firstRequestAutoExec;
    const INPUT_READONLY = LIVE_SEARCH_DISABLED ? true : (typeof readOnly === 'undefined' ? null : readOnly);
    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const LOCK_BODY_SCROLL = typeof lockBodyScroll === 'undefined' ? false : lockBodyScroll;
    const WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
    const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;
    const POS_OFFSET = 0;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const rootMultiRef = useRef<any>(null);
    const selectInputRef = useRef<any>(null);
    const valueInputRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);
    const optionsRes = options ? (isJSON(options) ? JSON.parse(options as string) : options) : [];
    const LIST_CONTAINER_MAX_HEIGHT = 300;

    const keyboardSelectedItem = useRef<any>(null);


    // return a array of options
    let staticOptionsData: OptionConfig[] = optionsRes;

    //
    const [orginalData, setOrginalData] = useState<OptionConfig[]>(staticOptionsData);
    const [optionsData, setOptionsData] = useState<OptionConfig[]>(staticOptionsData);
    const [hasErr, setHasErr] = useState<boolean>(false);

    // Set the final result
    const [controlLabel, setControlLabel] = useState<string | undefined>('');
    const [controlValue, setControlValue] = useState<string | undefined>('');

    //
    const [controlTempValue, setControlTempValue] = useState<string | null>(null); // Storage for temporary input
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);
    const [firstRequestExecuted, setFirstRequestExecuted] = useState<boolean>(false);
    const [handleFirstFetchCompleted, setHandleFirstFetchCompleted] = useState<boolean>(false);

    // Mark whether it is out of focus
    // Fixed the issue that caused the pop-up window to still display due to 
    // the delayed close in handleBlur and the timing of the call to popwinPosInit
    const isBlurringRef = useRef<boolean>(false);

    // filter status
    const [filterItemsHasNoMatchData, setFilterItemsHasNoMatchData] = useState<boolean>(false);
    

    // blinking cursor
    const BLINKING_CURSOR_STR = '|';
    const [blinkingPosStart, setBlinkingPosStart] = useState<number>(0);
    const blinkingPosFauxRef = useRef<any>(null);
    const blinkingCursorPosDivRef = useRef<any>(null);



    const selectedSign = useRef<boolean>(false);
    const MULTI_SEL_VALID = multiSelect ? multiSelect.valid : false;
    const MULTI_SEL_ENTIRE_AREA_TRIGGER = typeof multiSelectEntireAreaTrigger === 'undefined' ? true : multiSelectEntireAreaTrigger;
    const MULTI_SEL_LABEL = multiSelect ? multiSelect.selectAllLabel : 'Select all';
    const MULTI_DESEL_LABEL = multiSelect ? multiSelect.deselectAllLabel : 'Deselect all';
    const MULTI_SEL_SELECTED_STATUS: Record<string, string> = {
        itemsLabel: '{num} Selected',
        allItemsLabel: 'All Content ({num})',
        noneLabel: 'No items selected',
    };

    const [controlArr, setControlArr] = useState<MultiSelectControlValConfig>({
        labels: [],
        values: []
    });

    function chkValueExist(v: any) {
        return typeof v !== 'undefined' && v !== '';
    }


    const listContainerHeightLimit = (num: number) => {
        let res = num;
        if (res > LIST_CONTAINER_MAX_HEIGHT) res = LIST_CONTAINER_MAX_HEIGHT;

        // Avoid the height of the child div containing decimal points and scrollbars
        res = res + 1;

        return res;
    };

    const multiSelControlOptionExist = (arr: any[], val: any) => {
        const _data = arr.filter(Boolean);
        return _data.map((v: any) => v.toString()).includes(val.toString());
    };

    // clear trigger
    const CLEAR_TRIGGER_VALID = typeof clearTrigger === 'undefined' ? false : (clearTrigger ? clearTrigger.valid : false);
    const CLEAR_TRIGGER_LABEL = clearTrigger ? clearTrigger.clearValueLabel : 'Clear';


    const optionsFormatGroupOpt = (allData: any[]) => {
        allData.forEach((item: any) => {
            if (typeof item.optgroup !== 'undefined') {
                item.value = String(Math.random());
            }
        });
    };

    const finalRes = (val: any) => {
        return isObject(val) ? val.value : val;
    };

    // exposes the following methods
    useImperativeHandle(
        popupRef,
        () => ({
            close: () => {
                cancel();

                if (MULTI_SEL_VALID) popwinPosHide();
            },
            open: () => {
                activate();
            },
            
        }),
        [popupRef],
    );

    useImperativeHandle(
        contentRef,
        () => ({
            active: () => {
                handleShowList();
                selectInputRef.current.select();
            },
            
            focus: () => {
                selectInputRef.current.select();
            },
            clear: (cb?: any) => {

                if (MULTI_SEL_VALID) {
                    updateOptionCheckboxes('remove');
                } else {
                    handleClearValue();
                }

                selectInputRef.current.blur();

                cb?.();
            },
            /*
            set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') }])
            */
            set: (value: any, cb?: any) => {

                if (MULTI_SEL_VALID) {
                    updateOptionCheckboxesViaAddSingleItem({
                        labels: value.map((v: any) => v.label),
                        values: value.map((v: any) => v.value)
                    });
                } else {
                    const _val = value[0];
                    handleSelect(null, (typeof _val === 'object' ? JSON.stringify(_val) : _val), [`${_val.value}`], [`${_val.label}`]);
                }


                cb?.();
            }
        }),
        [contentRef],
    );



    // click outside
    useClickOutside({
        enabled: isOpen && rootRef.current && listRef.current,
        isOutside: (event: any) => {

            // close dropdown when other dropdown is opened
            return (
                (rootRef.current !== event.target && !rootRef.current.contains(event.target as HTMLElement)) &&
                listRef.current !== event.target && !listRef.current.contains(event.target as HTMLElement)
            )

        },
        handle: (event: any) => {
            // cancel
            cancel();
            if (MULTI_SEL_VALID) popwinPosHide();
        }
    }, [isOpen, rootRef, listRef]);



    // Add function to the element that should be used as the scrollable area.
    const [scrollData, windowScrollUpdate] = useWindowScroll({
        performance: ['debounce', 500],   // "['debounce', 500]" or "['throttle', 500]"
        handle: (scrollData: any) => {
            // remove data-* attibutes
            popwinContainerHeightReset();
        }
    });


    // value of multiple selection callback
    const multipleSelectionCallback = (valuesRes: any[], labelsRes: any[]) => {
        return {
            items: valuesRes.map((v: any, i: number) => (
                {label: labelsRes[i].toString(), value: v.toString()}
            )),
            labels: labelsRes.map((v: any) => v.toString()),
            values: valuesRes.map((v: any) => v.toString()),
            labelsOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(labelsRes.map((v: any) => v.toString())) : labelsRes.map((v: any) => v.toString()).join(','),
            valuesOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(valuesRes.map((v: any) => v.toString())) : valuesRes.map((v: any) => v.toString()).join(',')
        };
    };


    //performance
    const handleChangeFetchSafe = useDebounce((val: any) => {

        let _orginalData: OptionConfig[] = [];
        const update = (inputData: any) => {
            const filterRes = () => {

                return inputData.filter((item: any) => {

                    // Avoid fatal errors causing page crashes
                    const _queryString = typeof item.queryString !== 'undefined' && item.queryString !== null ? item.queryString : '';
                    const _val = typeof val !== 'undefined' && val !== null ? val : '';

                    if (
                        (
                            _queryString.split(',').some((l: any) => l.charAt(0) === _val.toLowerCase()) ||
                            _queryString.split(',').some((l: any) => l.replace(/ /g, '').indexOf(_val.toLowerCase()) >= 0) ||
                            item.label.toLowerCase().indexOf(_val.toLowerCase()) >= 0
                        ) &&
                        _val != ''
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }

            return filterRes();
        };

        if (fetchUpdate) {

            // update filter status
            setFilterItemsHasNoMatchData(false); 


            // Make a request
            handleFetch(val).then((response: any) => {
                _orginalData = response;
                const _filterRes = update(_orginalData);

                // pop win initalization
                setTimeout(() => {
                    popwinPosInit();
                    popwinFilterItems(val);
                }, 0);
            });
        } else {
            _orginalData = orginalData;
            const _filterRes = update(_orginalData);

            // pop win initalization
            setTimeout(() => {
                popwinPosInit();
                popwinFilterItems(val);
            }, 0);

        }


    }, 350, [optionsData]);



    async function fetchData(params: any, valueToInputDefault: any, inputDefault: any, init: boolean = true) {


        // Determine whether the default value is user query input or default input
        const defaultValue = init ? valueToInputDefault : '';

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


            // STEP 1: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }


            // STEP 2: ===========
            // Flatten the group
            _ORGIN_DATA = optionsCustomSelectFlat(_ORGIN_DATA);




            // STEP 3: ===========
            // value & label must be initialized
            let filterRes: any = [];
            // If the default value is label, match value
            const filterResQueryValue = _ORGIN_DATA.filter((item: any) => item.value == defaultValue);
            const filterResQueryLabel = _ORGIN_DATA.filter((item: any) => item.label == defaultValue);

            filterRes = filterResQueryValue;
            if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;

            // if the default value is Object
            if (isObject(inputDefault) && filterRes.length === 0) {
                filterRes = [inputDefault];
            }


            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (!chkValueExist(defaultValue)) {  // Do not use `init`, otherwise the query will revert to the default value if there is no value
                setControlValue('');
                setControlLabel('');
            } else {
                if (filterRes.length > 0) {
                    setControlValue(filterRes[0].value);
                    setControlLabel(formatIndentVal(filterRes[0].label, INDENT_LAST_PLACEHOLDER) as string);
                }

            }


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if (MULTI_SEL_VALID) {


                if (!chkValueExist(defaultValue) && init) {
                    setControlArr({
                        labels: [],
                        values: []
                    });
                }



                if (chkValueExist(defaultValue) && Array.isArray(defaultValue)) {

                    // initialize default values of Multiple selection
                    const _currentData: OptionConfig[] = defaultValue;
                    const _defaultValues = _currentData.map((v: OptionConfig) => v.value as string);
                    const _defaultLabels = _currentData.map((v: OptionConfig) => v.label as string);

                    setControlArr({
                        labels: _defaultLabels,
                        values: _defaultValues,
                    });

                }

                // Appropriate multi-item container height
                setTimeout(() => {
                    adjustMultiControlContainerHeight();
                }, 0);
                

                // hide disabled item
                _ORGIN_DATA = _ORGIN_DATA.filter((v: any) => typeof v.disabled !== 'undefined' && v.disabled == true ? false : true);

            }

            // STEP 5: ===========
            //
            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(_ORGIN_DATA); // prevent the value from being filtered out
            _ORGIN_DATA = removeArrDuplicateItems(_ORGIN_DATA, 'value');

            setOptionsData(_ORGIN_DATA); // data must be initialized

            //
            setOrginalData(_ORGIN_DATA);


            // STEP 6: ===========
            //
            onFetch?.(selectInputRef.current, valueInputRef.current, defaultValue, _ORGIN_DATA, incomingData);



            //
            return _ORGIN_DATA;


        } else {


            // STEP 1: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
                staticOptionsData = addTreeDepth(staticOptionsData);
                addTreeIndent(staticOptionsData, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }


            // STEP 2: ===========
            // Flatten the group
            staticOptionsData = optionsCustomSelectFlat(staticOptionsData);


            // STEP 3: ===========
            // If the default value is label, match value
            let filterRes: any = [];
            const filterResQueryValue = staticOptionsData.filter((item: any) => item.value == defaultValue);
            const filterResQueryLabel = staticOptionsData.filter((item: any) => item.label == defaultValue);

            filterRes = filterResQueryValue;
            if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;

   
            // if the default value is Object
            if (isObject(inputDefault) && filterRes.length === 0) {
                filterRes = [inputDefault];
            }



            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (!chkValueExist(defaultValue)) {  // Do not use `init`, otherwise the query will revert to the default value if there is no value
                setControlValue('');
                setControlLabel('');
            } else {
                if (filterRes.length > 0) {
                    setControlValue(filterRes[0].value);
                    setControlLabel(formatIndentVal(filterRes[0].label, INDENT_LAST_PLACEHOLDER));
                }

            }



            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if (MULTI_SEL_VALID) {


                if (!chkValueExist(defaultValue) && init) {
                    setControlArr({
                        labels: [],
                        values: []
                    });
                }

                if (chkValueExist(defaultValue) && Array.isArray(defaultValue)) {

                    // initialize default values of Multiple selection
                    const _currentData: OptionConfig[] = defaultValue;
                    const _defaultValues = _currentData.map((v: OptionConfig) => v.value as string);
                    const _defaultLabels = _currentData.map((v: OptionConfig) => v.label as string);
                    
                    setControlArr({
                        labels: _defaultLabels,
                        values: _defaultValues,
                    });
                }

                // Appropriate multi-item container height
                setTimeout(() => {
                    adjustMultiControlContainerHeight();
                }, 0);


                // hide disabled item
                staticOptionsData = staticOptionsData.filter((v: any) => typeof v.disabled !== 'undefined' && v.disabled == true ? false : true);

            }

            // STEP 5: ===========
            //
            // remove Duplicate objects from JSON Array
            optionsFormatGroupOpt(staticOptionsData); // prevent the value from being filtered out
            staticOptionsData = removeArrDuplicateItems(staticOptionsData, 'value');
            

            setOptionsData(staticOptionsData); // data must be initialized

            //
            setOrginalData(staticOptionsData);

            // STEP 6: ===========
            //
            onFetch?.(selectInputRef.current, valueInputRef.current, defaultValue, staticOptionsData, incomingData);


            //
            return staticOptionsData;
        }


    }


    function adjustMultiControlContainerHeight(scrollbarInit: boolean = true) {
        if (rootMultiRef.current === null) return;
        
        setTimeout(() => {


            // Sometimes you may get 0, you need to judge
            if (MULTI_SEL_VALID && rootMultiRef.current.clientHeight > 0) {
                rootRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
            }

            // popwin position update
            const _modalRef: any = document.querySelector(`#custom-select__options-wrapper-${idRes}`);
            if (MULTI_SEL_VALID && _modalRef !== null && _modalRef.classList.contains('active')) {
                popwinPosInit(scrollbarInit);
            }


        }, 0);
    }

    function syncListContentScrollBody() {
        const el: any = listContentRef.current;
        if (el === null) return;

        const activedItem = el.querySelectorAll(`.list-group-item.${!MULTI_SEL_VALID ? 'active' : 'item-selected'}`)[0];
        if (typeof activedItem !== 'undefined') {
            
            const clearItem = el.querySelector(`.list-group-item.${!MULTI_SEL_VALID ? 'custom-select-multi__control-option-item--clear' : 'custom-select-multi__control-option-item--select-all'}`);
            const clearItemHeight = clearItem === null ? 0 : clearItem.clientHeight;
            const _latestScrollTop = activedItem.offsetTop - clearItemHeight;
            
            el.scrollTop = _latestScrollTop;
        }

    }


    function popwinPosInit(scrollbarInit: boolean = true) {
        if (listContentRef.current === null || rootRef.current === null || selectInputRef.current === null) return;

        // If it is out of focus, do not perform position initialization
        if (isBlurringRef.current) return;

        //
        const contentHeightOffset = 80;
        let contentMaxHeight = 0;

        // update modal position
        const _modalRef: any = document.querySelector(`#custom-select__options-wrapper-${idRes}`);
        const _triggerRef: any = selectInputRef.current;
        const _triggerXaxisRef: any = rootRef.current;

        // console.log(getAbsolutePositionOfStage(_triggerRef));

        if (_modalRef === null) return;

        const { x } = getAbsolutePositionOfStage(_triggerXaxisRef);
        const { y, width, height } = getAbsolutePositionOfStage(_triggerRef);
        const _triggerBox = _triggerRef.getBoundingClientRect();
        let targetPos = '';

        

        // STEP 1:
        //-----------
        // display wrapper
        _modalRef.classList.add('active');




        // STEP 2:
        //-----------
        // Detect content MAX HEIGHT and ACTUAL HEIGHT
        const _contentBox = listContentRef.current.getBoundingClientRect();
        let _contentOldHeight = listContentRef.current.clientHeight;

        // height restrictions
        _contentOldHeight = listContainerHeightLimit(_contentOldHeight);

        // You need to wait for the height of the pop-up container to be set
        // Detect position、
        if (window.innerHeight - _triggerBox.top > 100) {
            targetPos = 'bottom';
        } else {
            targetPos = 'top';
        }

        if (typeof listContentRef.current.dataset.pos === 'undefined') listContentRef.current.dataset.pos = targetPos;



        // STEP 3:
        //-----------
        // Set the pop-up height
        if (targetPos === 'top') {
            contentMaxHeight = _triggerBox.top;

            // height restrictions
            contentMaxHeight = listContainerHeightLimit(contentMaxHeight);


            if (_contentBox.height > contentMaxHeight) {
                listContentRef.current.style.height = contentMaxHeight - contentHeightOffset + 'px';
                if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = contentMaxHeight - contentHeightOffset;

                // has scrollbar
                listContentRef.current.dataset.hasScrollbar = 'true';
                

            } else {
                if (_contentOldHeight > 50) {
                    listContentRef.current.style.height = _contentOldHeight + 'px';
                    if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = _contentOldHeight;
                }

                // has scrollbar
                listContentRef.current.dataset.hasScrollbar = 'false';

            }
        }

        if (targetPos === 'bottom') {
            contentMaxHeight = window.innerHeight - _triggerBox.bottom;


            // height restrictions
            contentMaxHeight = listContainerHeightLimit(contentMaxHeight);


            if (_contentBox.height > contentMaxHeight) {
                listContentRef.current.style.height = contentMaxHeight - 10 + 'px';
                if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = contentMaxHeight - 10;

                // has scrollbar
                listContentRef.current.dataset.hasScrollbar = 'true';

            } else {
                if (_contentOldHeight > 50) {
                    listContentRef.current.style.height = _contentOldHeight + 'px';
                    if (typeof listContentRef.current.dataset.height === 'undefined') listContentRef.current.dataset.height = _contentOldHeight;
                }

                // has scrollbar
                listContentRef.current.dataset.hasScrollbar = 'false';

            }

        }


        // STEP 4:
        //-----------
        // Adjust position
        if (targetPos === 'top') {
            _modalRef.style.left = x + 'px';
            //_modalRef.style.top = y - POS_OFFSET - (listContentRef.current.clientHeight) - 2 + 'px';
            _modalRef.style.top = 'auto';
            _modalRef.style.bottom = (window.innerHeight - _triggerBox.top) + POS_OFFSET + 2 + 'px';
            _modalRef.style.setProperty('position', 'fixed', 'important');
            _modalRef.classList.add('pos-top');
        }

        if (targetPos === 'bottom') {
            _modalRef.style.left = x + 'px';
            _modalRef.style.bottom = 'auto';
            _modalRef.style.top = y + height + POS_OFFSET + 'px';
            _modalRef.style.setProperty('position', 'absolute', 'important');
            _modalRef.classList.remove('pos-top');
        }



        // STEP 5:
        //-----------
        // Determine whether it exceeds the far right or left side of the screen
        const _modalContent = _modalRef;
        const _modalBox = _modalContent.getBoundingClientRect();
        if (typeof _modalContent.dataset.offset === 'undefined' && _modalBox.left > 0) {

            // 10 pixels is used to account for some bias in mobile devices
            if ((_modalBox.right + 10) > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if ((_modalBox.left - 10) < 0) {
                const _modalOffsetPosition = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


        }




        // STEP 6:
        //-----------
        // no data label
        popwinNoMatchInit();



        // STEP 7:
        //-----------
        // Scrollbar position synchronization
        if (scrollbarInit) syncListContentScrollBody();
        


    }


    function popwinPosHide() {

        const _modalRef: any = document.querySelector(`#custom-select__options-wrapper-${idRes}`);

        if (_modalRef !== null && listContentRef.current !== null) {


            // remove classnames and styles
            _modalRef.classList.remove('active');
            listContentRef.current.style.removeProperty('height');

            // remove data-* attibutes
            popwinContainerHeightReset();


            // display all filtered items
            const _items = [].slice.call(listContentRef.current.querySelectorAll('.custom-select-multi__control-option-item'));
            _items.forEach((node: any) => {
                node.classList.remove('hide');
            });


            // nomatch & button of select all 
            const _noDataDiv = listContentRef.current.querySelector('.custom-select-multi__control-option-item--nomatch');
            const _btnSelectAll = listContentRef.current.querySelector('.custom-select-multi__control-option-item--select-all');
            _noDataDiv.classList.add('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');


        }


    }


    function popwinFilterItems(val: any) {
        if (listContentRef.current === null) return;

        [].slice.call(listContentRef.current.querySelectorAll('.custom-select-multi__control-option-item')).forEach((node: any) => {

            // Avoid fatal errors causing page crashes
            const _queryString = typeof node.dataset.querystring !== 'undefined' && node.dataset.querystring !== null ? node.dataset.querystring : '';
            const _val = typeof val !== 'undefined' && val !== null ? val : '';

            if (
                (
                    _queryString.split(',').some((l: any) => l.charAt(0) === _val.toLowerCase()) ||
                    _queryString.split(',').some((l: any) => l.replace(/ /g, '').indexOf(_val.toLowerCase()) >= 0) ||
                    node.dataset.label.toLowerCase().indexOf(_val.toLowerCase()) >= 0
                ) &&
                _val != ''
            ) {
                node.classList.remove('hide');
            } else {
                node.classList.add('hide');
            }

        });

        // Determine if all options are hidden
        const allHidden = [].slice.call(listContentRef.current.querySelectorAll('.custom-select-multi__control-option-item'))
            .every((node: any) => node.classList.contains('hide'));

   
        // no data label
        popwinNoMatchInit();


        // display all filtered items
        const _btnSelectAll = listContentRef.current.querySelector('.custom-select-multi__control-option-item--select-all');
        const _noDataDiv = listContentRef.current.querySelector('.custom-select-multi__control-option-item--nomatch');
        if ((val === null ? '' : val).replace(/\s/g, "") === '') {
            [].slice.call(listContentRef.current.querySelectorAll('.custom-select-multi__control-option-item')).forEach((node: any) => {
                node.classList.remove('hide');
            });
            _noDataDiv.classList.add('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');
        }

        // filter status
        setFilterItemsHasNoMatchData(allHidden);


        // Appropriate list container height
        popwinContainerHeightAdjust();


    }

    function popwinContainerHeightAdjust() {
        if (listContentRef.current === null) return;

        let oldHeight = listContentRef.current.dataset.height;
        const pos = listContentRef.current.dataset.pos;
        let filteredHeight = listContentRef.current.firstChild.clientHeight;

        // height restrictions
        oldHeight = listContainerHeightLimit(oldHeight);
        filteredHeight = listContainerHeightLimit(filteredHeight);


        if (parseFloat(oldHeight) > filteredHeight) {
            listContentRef.current.style.height = filteredHeight + 'px';
        } else {
            listContentRef.current.style.height = oldHeight + 'px';
        }

    }




    function popwinNoMatchInit() {
        if (listContentRef.current === null) return;

        const _btnSelectAll = listContentRef.current.querySelector('.custom-select-multi__control-option-item--select-all');
        const _noDataDiv = listContentRef.current.querySelector('.custom-select-multi__control-option-item--nomatch');
        const emptyFieldsCheck = [].slice.call(listContentRef.current.querySelectorAll('.custom-select-multi__control-option-item')).every((node: any) => {
            if (!node.classList.contains('hide')) {
                return false;
            }
            return true;
        });

        if (emptyFieldsCheck) {
            _noDataDiv.classList.remove('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.add('hide');
        } else {
            _noDataDiv.classList.add('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');
        }

    }


    function popwinContainerHeightReset() {
        if (listContentRef.current === null) return;

        // remove data-* attibutes
        listContentRef.current.removeAttribute('data-height');
        listContentRef.current.removeAttribute('data-pos');

        //
        if (selectInputRef.current) selectInputRef.current.value = '';
        

    }

    function cancel() {
        // hide list
        setIsOpen(false);
        if (!MULTI_SEL_VALID) popwinPosHide();


        if (MANUAL_REQ) {
            // clear data
            setOptionsData([]);
        } else {
            // restore data
            setOptionsData(orginalData);
        }

        // update temporary value
        setControlTempValue(null);

        // update filter status
        setFilterItemsHasNoMatchData(false);


        // Unlocks the page
        if (LOCK_BODY_SCROLL) enableBodyScroll(document.querySelector('body'));
    }

    function activate() {

        // trigger the first asynchronous request when the options area is expanded
        if (!FIRST_REQUEST_AUTO && !firstRequestExecuted) {
            let curValue: any = defaultValue;
        
            if (typeof curValue === 'undefined') {
                curValue = value;
            }
    
            handleFirstFetch(curValue).then((response: any) => {
                if (response.length > 0) {
                    // nomatch
                    const _noDataDiv = listContentRef.current.querySelector('.custom-select-multi__control-option-item--nomatch');
                    _noDataDiv.classList.add('hide');

                    // After the data is loaded, reinitialize the pop-up window position and height
                    setTimeout(() => {
                        popwinPosInit();
                    }, 0);
                }
            });

            //
            setFirstRequestExecuted(true);
        }

        // show list
        setIsOpen(true);

        // pop win initalization
        setTimeout(() => {
            popwinPosInit();
        }, 0);

        // make sure the event handler is registered
        if (orginalData.length === 0) {
            setTimeout(() => {
                // no data label
                popwinNoMatchInit();
            }, 500);

        }


        if (MANUAL_REQ) {
            // clear data
            setOptionsData([]);
        } else {
            // restore data
            setOptionsData(orginalData);
        }


        // When you select multiple times, it automatically focuses on the search input box
        if (MULTI_SEL_VALID) {
            selectInputRef.current.select();
        }


        // Every time the input changes or the search button is clicked, a data request will be triggered
        if (MANUAL_REQ && (controlTempValue === '' || controlTempValue === null)) {
            setTimeout(() => {
                popwinPosHide();
            }, 0);
        }
        

        // update temporary value
        setControlTempValue('');

        


        // Locks the page
        //
        // Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        if (LOCK_BODY_SCROLL) disableBodyScroll(document.querySelector('body'));


    }
    

    function fixFocusStatus() {
        // When selecting multiple times, in order to avoid losing 
        if (MULTI_SEL_VALID) handleFocus(selectInputRef.current);
    }

    async function handleSelect(el: any, dataInput: any = false, valueArr: any[] = [], labelArr: any[] = []) {

        if (typeof el === 'undefined') return;


        const curItem: any = el === null ? (isObject(dataInput) ? dataInput : JSON.parse(dataInput)) : optionsData[Number(el.currentTarget.dataset.index)];
        

        // get options
        const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.no-match)'));


        // current control of some option
        const curBtn: any = options.filter((node: HTMLElement) => node.dataset.itemdata == JSON.stringify(curItem))[0];

       
        // Determine whether there is a callback
        const noCallback = typeof curItem.callback === 'undefined';
        
        // ==========================================================================
        // Whether to cancel or not
        // ==========================================================================
        if (noCallback) {
            // cancel
            if (!MULTI_SEL_VALID) {
                cancel();
            }

            //remove focus style
            if (!MULTI_SEL_VALID) {
                rootRef.current?.classList.remove('focus');
            }
        }



        // update value * label
        if (dataInput) {

            // ==========================================================================
            // Use the "keyboard" to trigger
            // ==========================================================================

            const _data = isObject(dataInput) ? dataInput : JSON.parse(dataInput);
            const _value = _data.value;
            const _label = _data.label;

            // ++++++++++++++++++++
            // Callback
            // ++++++++++++++++++++
            _data.callback?.();


            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            // clear all active classes of options 
            // (Avoid using the keyboard to select and two actives will appear after clicking on a non-selected option.)
            if (noCallback) {
                options.forEach((node: any) => {
                    node.classList.remove('active');
                });
            }

            // If there is a callback, delete the activated style
            if (!noCallback) {
                setTimeout(() => {
                    curBtn.classList.remove('active', 'disabled');
                }, 0);
            }



            //
            setControlValue(_value);
            setControlLabel(formatIndentVal(_label, INDENT_LAST_PLACEHOLDER));


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            let currentControlValueArr: any[] = JSON.parse(JSON.stringify(valueArr));
            let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(labelArr));

            if (MULTI_SEL_VALID) {

                const $el = el === null ? curBtn : el.currentTarget;


                // update option checkboxes
                const _selected = $el.dataset.selected;
                const _selectedVal = _selected == 'true' ? true : false;
                if (_selectedVal) {
                    //#########
                    // remove item
                    //#########
                    $el.dataset.selected = 'false';
                    $el.querySelector('.custom-select-multi__control-option-checkbox-selected').classList.add('d-none');
                    $el.querySelector('.custom-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');

                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: removeItemOnce(prevState.labels, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER)),
                            values: removeItemOnce(prevState.values, _value)
                        }
                    });


                    currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
                    currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER));


                } else {
                    //#########
                    // add item
                    //#########
                    $el.dataset.selected = 'true';
                    $el.querySelector('.custom-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                    $el.querySelector('.custom-select-multi__control-option-checkbox-placeholder').classList.add('d-none');

                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: [...prevState.labels, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER)],
                            values: [...prevState.values, _value]
                        }
                    });

                    currentControlValueArr.push(_value);
                    currentControlLabelArr.push(_label);

                }

                // Appropriate multi-item container height
                // ！！！set `false` to prevents the scrollbar position from changing when multi-selecting the option is clicked
                adjustMultiControlContainerHeight(false);


                // active current option
                if (noCallback) {
                    setTimeout(() => {
                        $el.classList.add('active');
                    }, 0);

                }



            }

            //
            if (noCallback && typeof (onChange) === 'function') {
                
                onChange?.(
                    selectInputRef.current,
                    valueInputRef.current,
                    !MULTI_SEL_VALID ? curItem : multipleSelectionCallback(currentControlValueArr, currentControlLabelArr)
                );


                //
                selectInputRef.current.blur();
            }




        } else {

            // ==========================================================================
            // Use the "mouse" to trigger
            // ==========================================================================

            const _value = typeof curItem !== 'undefined' ? curItem.value : '';
            const _label = typeof curItem !== 'undefined' ? curItem.label : '';



            // ++++++++++++++++++++
            // Callback
            // ++++++++++++++++++++
            curItem.callback?.();

            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++

            // clear all active classes of options
            // (Avoid using the keyboard to select and two actives will appear after clicking on a non-selected option.)
            if (noCallback) {
                options.forEach((node: any) => {
                    node.classList.remove('active');
                });

            }



            // If there is a callback, delete the activated style
            if (!noCallback) {
                setTimeout(() => {
                    curBtn.classList.remove('active', 'disabled');
                }, 0);
            }



            //
            setControlValue(_value);
            setControlLabel(formatIndentVal(_label, INDENT_LAST_PLACEHOLDER));


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            let currentControlValueArr: any[] = JSON.parse(JSON.stringify(controlArr.values));
            let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(controlArr.labels));

            if (MULTI_SEL_VALID) {


                const $el = el === null ? curBtn : el.currentTarget;


                // update option checkboxes
                const _selected = $el.dataset.selected;
                const _selectedVal = _selected == 'true' ? true : false;
                if (_selectedVal) {
                    //#########
                    // remove item
                    //#########
                    $el.dataset.selected = 'false';
                    $el.querySelector('.custom-select-multi__control-option-checkbox-selected').classList.add('d-none');
                    $el.querySelector('.custom-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');


                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: removeItemOnce(prevState.labels, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER)),
                            values: removeItemOnce(prevState.values, _value)
                        }
                    });

                    currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
                    currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER));

                } else {
                    //#########
                    // add item
                    //#########

                    $el.dataset.selected = 'true';
                    $el.querySelector('.custom-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                    $el.querySelector('.custom-select-multi__control-option-checkbox-placeholder').classList.add('d-none');


                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: [...prevState.labels, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER)],
                            values: [...prevState.values, _value]
                        }
                    });


                    currentControlValueArr.push(_value);
                    currentControlLabelArr.push(_label);

                }


                // Appropriate multi-item container height
                // ！！！set `false` to prevents the scrollbar position from changing when multi-selecting the option is clicked
                adjustMultiControlContainerHeight(false);

                // active current option
                if (noCallback) {
                    setTimeout(() => {
                        $el.classList.add('active');
                    }, 0);
                }



            }

            //
            if (noCallback && typeof (onChange) === 'function') {
            
                onChange?.(
                    selectInputRef.current,
                    valueInputRef.current,
                    !MULTI_SEL_VALID ? curItem : multipleSelectionCallback(currentControlValueArr, currentControlLabelArr)
                );


                //
                selectInputRef.current.blur();
            }
        }

        // Fixed an out-of-focus issue
        fixFocusStatus();

    }


    function updateOptionCheckboxes(type: string) {

        const _labels: any[] = [];
        const _values: any[] = [];

        [].slice.call(listContentRef.current.querySelectorAll('.custom-select-multi__control-option-item:not(.hide)')).forEach((node: any) => {

            const _label = node.dataset.label;
            const _value = node.dataset.value;


            if (type === 'remove') {
                //#########
                // remove item
                //#########
                node.dataset.selected = 'false';
                node.querySelector('.custom-select-multi__control-option-checkbox-selected').classList.add('d-none');
                node.querySelector('.custom-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');

                //
                const _indexLable = _labels.findIndex((item: any) => item == _label);
                const _indexValue = _values.findIndex((item: any) => item == _value);
                if (_indexLable !== -1) _labels.splice(_indexLable, 1);
                if (_indexValue !== -1) _values.splice(_indexValue, 1);


            } else {
                //#########
                // add item
                //#########
                node.dataset.selected = 'true';
                node.querySelector('.custom-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                node.querySelector('.custom-select-multi__control-option-checkbox-placeholder').classList.add('d-none');

                //
                _labels.push(_label);
                _values.push(_value);

            }

        });

        setControlArr({
            labels: _labels,
            values: _values
        });



        // Appropriate multi-item container height
        adjustMultiControlContainerHeight();

        return {
            labels: _labels,
            values: _values
        }

    };

    function updateOptionCheckboxesViaAddSingleItem(data: any) {

        const _labels: any[] = data.labels || [];
        const _values: any[] = data.values || [];

        setControlArr({
            labels: _labels,
            values: _values
        });

        // Appropriate multi-item container height
        adjustMultiControlContainerHeight();

    };



    function handleSelectAll(event: any) {
        event.preventDefault();
        event.stopPropagation();  /* REQUIRED */
        
        let _labels: any[] = [];
        let _values: any[] = [];
        
        if (controlArr.values.length === optionsData.length) { // selected all items
            const { labels, values } = updateOptionCheckboxes('remove');
            selectedSign.current = false;
            
            _labels = labels;
            _values = values;
        } else {
    
            const { labels, values } = updateOptionCheckboxes(selectedSign.current ? 'remove' : 'add');
            selectedSign.current = !selectedSign.current;

            _labels = labels;
            _values = values;

        }

        onChange?.(
            selectInputRef.current,
            valueInputRef.current,
            multipleSelectionCallback(_values, _labels)
        );

        // Fixed an out-of-focus issue
        fixFocusStatus();


    }

    function handleClearValue(event?: any) {
        if (typeof event !== 'undefined') {
            event.preventDefault();
            event.stopPropagation();  /* REQUIRED */
        }
        
        // It is valid when a single selection
        const emptyValue: Record<string, string> = { label: '', value: '', queryString: '' };
        handleSelect(null, JSON.stringify(emptyValue), [], []);

        // update temporary value
        setControlTempValue(null);

        // update filter status
        setFilterItemsHasNoMatchData(false); 

    }



    function handleMultiControlItemRemove(event: any) {
        event.preventDefault();
        event.stopPropagation();  /* REQUIRED */

        const valueToRemove = String(event.currentTarget.dataset.value);
        const getCurrentIndex = controlArr.values.findIndex((item: any) => item.toString() === valueToRemove);

        let currentControlValueArr: any[] = JSON.parse(JSON.stringify(controlArr.values));
        let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(controlArr.labels));

        const _value = valueToRemove;
        const _label = controlArr.labels[getCurrentIndex];


        setControlArr((prevState: any) => {

            // update temporary value
            setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

            return {
                labels: removeItemOnce(prevState.labels, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER)),
                values: removeItemOnce(prevState.values, _value)
            }
        });

        currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
        currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label, INDENT_LAST_PLACEHOLDER));


        // Appropriate multi-item container height
        adjustMultiControlContainerHeight();


        //
        if (typeof (onChange) === 'function') {

            onChange?.(
                selectInputRef.current,
                valueInputRef.current,
                multipleSelectionCallback(currentControlValueArr, currentControlLabelArr)
            );


            //
            selectInputRef.current.blur();
        }

    }



    function handleShowList() {

        // Reset the out-of-focus marker
        isBlurringRef.current = false;

        //
        if (!isOpen) {
            activate();
        } else {
            cancel();
            if (MULTI_SEL_VALID) popwinPosHide();
        }

    }


    async function handleFetch(inputVal: any = null) {

        // data init
        const searchStr: string = typeof inputVal === 'string' ? inputVal : (controlTempValue || controlTempValue === '' ? controlTempValue : '');
        const _oparams: any[] = fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : searchStr);


        const res = await fetchData((_params).join(','), '', '', false);


        return res;
    }


    async function handleFirstFetch(inputVal: any = null) {

        const _oparams: any[] = fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : (MANUAL_REQ ? QUERY_STRING_PLACEHOLDER : ''));
        const res = await fetchData((_params).join(','), finalRes(inputVal), inputVal);

        // Set an identifier indicating that the first request has been completed
        if (!handleFirstFetchCompleted) setHandleFirstFetchCompleted(true);

        return res;
    }


    function handleComposition(event: any) {

        if (event.type === 'compositionstart' || event.type === 'compositionend') {
            //fire change method to update for Chrome v53
            handleChange(event);
        }
    }



    function handleChange(event: any) {

        const val = event.target.value;

        //Calculates the position of the blinking cursor
        setBlinkingPosStart(getTextWidth(event.target, blinkingPosFauxRef.current, blinkingCursorPosDivRef.current));

        // update temporary value
        setControlTempValue(val);

        //
        handleChangeFetchSafe(val);

        // Fixed an out-of-focus issue
        fixFocusStatus();
        
        // Every time the input changes or the search button is clicked, a data request will be triggered
        if (MANUAL_REQ && val !== '') {
            popwinPosInit();
        }
        

    }

    //
    function handleFocus(event: any) {

        rootRef.current?.classList.add('focus');

        //
        onFocus?.(selectInputRef.current);
        
    }

    function handleBlur(event: any) {

        // Set the out-of-focus marker
        isBlurringRef.current = true;


        // Fix the focus issue with using the "Tabs" and "Enter" keys
        //
        //
        rootRef.current?.classList.remove('focus');

        if (!MULTI_SEL_VALID) {
            if (!isOpen) {
                cancel();
                if (MULTI_SEL_VALID) popwinPosHide();
            }
        } else {
            if (listContentRef.current) listContentRef.current.focus();
        }


        setTimeout(() => {
            onBlur?.(selectInputRef.current);
        }, 300);
    }


    function generateInputFocusStr() {
        return controlTempValue || controlTempValue === '' ? (controlTempValue.length === 0 ? BLINKING_CURSOR_STR : controlTempValue) : (placeholder || '');
    }

    function hideBlinkingCursor() {
        return (generateInputFocusStr() === placeholder && placeholder !== '' && typeof placeholder !== 'undefined') || (controlTempValue === null || controlTempValue.length === 0);
    }

    function optionFocus(type: string) {

        return new Promise(function (resolve) {

            // Determine the "active" class name to avoid listening to other unused components of the same type
            if (listRef.current === null || !rootRef.current.classList.contains('active')) return;


            // Avoid selecting options that are disabled
            const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.custom-select-multi__control-option-item--select-all):not(.custom-select-multi__control-option-item--clear)'));
            const currentIndex = options.findIndex((e) => e === listRef.current.querySelector('.list-group-item.active'));


            // get the next element in the list, "%" will loop around to 0
            let nextIndex;
            if (type === 'increase') {
                nextIndex = currentIndex + 1 % options.length;
            } else {
                nextIndex = (currentIndex < 0 ? options.length : currentIndex) - 1 % options.length;
            }



            //only one
            if (options.length === 1) nextIndex = 0;


            if (!isNaN(nextIndex)) {
                options.forEach((node: any, index: number) => {
                    node?.classList.remove('active');
                });

                const targetOption = options[nextIndex] as HTMLElement;
                if (typeof targetOption !== 'undefined' && !targetOption.classList.contains('no-match')) {
                    targetOption.classList.add('active');

                    keyboardSelectedItem.current = targetOption;
                    resolve(targetOption);
                }

            }
        });


    }


    async function handleKeyPressed(event: KeyboardEvent<HTMLDivElement>) {
        const key = event.code;

        //
        onKeyPressed?.(
            event,
            selectInputRef.current,
            valueInputRef.current
        );


        if (!isOpen) return;

        let res: any = null;

        if (key === 'Enter' || key === 'NumpadEnter') {
            event.preventDefault();

            // Determine the "active" class name to avoid listening to other unused components of the same type
            if (listRef.current === null || !rootRef.current.classList.contains('active')) return;

            // Avoid selecting options that are disabled
            if (keyboardSelectedItem.current !== null && keyboardSelectedItem.current.classList.contains('disabled')) return;

            if (listRef.current !== null) {
                const currentIndex = await listRef.current.dataset.data;


                if (typeof currentIndex !== 'undefined') {


                    const currentData = optionsData[Number(currentIndex)];
                    const currentControlValueArr: any[] = [];
                    const currentControlLabelArr: any[] = [];

                    const htmlOptions = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.no-match)'));

                    htmlOptions.forEach((node: any) => {
                        node.classList.remove('active');

                        // multiple options
                        if (node.classList.contains('item-selected')) {
                            currentControlValueArr.push(node.dataset.value);
                            currentControlLabelArr.push(node.dataset.label);
                        }

                    });


                    handleSelect(null, currentData, currentControlValueArr, currentControlLabelArr);

                    //
                    if (typeof (onChange) === 'function') {

                        onChange?.(
                            selectInputRef.current,
                            valueInputRef.current,
                            !MULTI_SEL_VALID ? currentData : multipleSelectionCallback(currentControlValueArr, currentControlLabelArr)
                        );


                        //
                        selectInputRef.current.blur();
                    }

                }
            }
        }

        if (key === 'ArrowUp') {
            res = await optionFocus('decrease');

        }

        if (key === 'ArrowDown') {
            res = await optionFocus('increase');
        }


        // temporary data
        if (res !== null) listRef.current.dataset.data = res.dataset.index;


    }

    function handleDocOut(e: any) {

        if (e.target.closest('.custom-select__options-wrapper') === null && e.target.closest('.custom-select__wrapper') === null) {
            // cancel
            cancel();
            if (MULTI_SEL_VALID) popwinPosHide();

            // DO NOT USE "handleBlur(null)"
        }
    }


    useEffect(() => {

        // Call a function when the component has been rendered completely
        //--------------
        onLoad?.(selectInputRef.current, valueInputRef.current, finalRes(value));


        // update incoming data
        //--------------
        setIncomingData(data);


        // data init
        //--------------
        if (FIRST_REQUEST_AUTO) {
            handleFirstFetch(value);
        } else {
            if (MULTI_SEL_VALID) {
                // Appropriate multi-item container height
                setTimeout(() => {
                    adjustMultiControlContainerHeight();
                }, 0);
            }
        }

        // Forced assignment does not depend on "fetch" or "firstRequestAutoExe"
        // Don't use "value.value && value.label" directly, if it is empty, it will be treated as FALSE
        if (chkValueExist(value)) {
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (typeof value === 'object' && !Array.isArray(value)) {
                if (typeof value.value !== 'undefined' && value.value !== null) setControlValue(value.value as string);
                if (typeof value.label !== 'undefined' && value.label !== null) setControlLabel(formatIndentVal(value.label, INDENT_LAST_PLACEHOLDER));
            }
            
            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if (MULTI_SEL_VALID) {
                if (chkValueExist(value) && Array.isArray(value)) {

                    const _currentData: OptionConfig[] = value;
                    const _defaultValues = _currentData.map((v: OptionConfig) => v.value as string);
                    const _defaultLabels = _currentData.map((v: OptionConfig) => v.label as string);

                    setControlArr({
                        labels: _defaultLabels,
                        values: _defaultValues,
                    });
                }
            }

        } else {
            // ++++++++++++++++++++
            // Single selection & Multiple selection
            // ++++++++++++++++++++
            if (!FIRST_REQUEST_AUTO) {
                setControlValue('');
                setControlLabel('');
                setControlArr({
                    labels: [],
                    values: []
                });
            }
        }





        //
        //--------------
        return () => {
            if (LOCK_BODY_SCROLL) clearAllBodyScrollLocks();
        }

    }, [value, options, data]);


    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED

            // Call a function when the component has been rendered completely
            //--------------
            onLoad?.(selectInputRef.current, valueInputRef.current, finalRes(defaultValue));


            // data init
            //--------------
            if (FIRST_REQUEST_AUTO) {
                handleFirstFetch(defaultValue);
            } else {
               if (MULTI_SEL_VALID) {
                    // Appropriate multi-item container height
                    setTimeout(() => {
                        adjustMultiControlContainerHeight();
                    }, 0);
               }
            }


            // Forced assignment does not depend on "fetch" or "firstRequestAutoExe"
            // Don't use "value.value && value.label" directly, if it is empty, it will be treated as FALSE
            if (chkValueExist(defaultValue)) {
                // ++++++++++++++++++++
                // Single selection
                // ++++++++++++++++++++
                if (typeof defaultValue === 'object' && !Array.isArray(defaultValue)) {
                    if (typeof defaultValue.value !== 'undefined' && defaultValue.value !== null) setControlValue(defaultValue.value as string);
                    if (typeof defaultValue.label !== 'undefined' && defaultValue.label !== null) setControlLabel(formatIndentVal(defaultValue.label, INDENT_LAST_PLACEHOLDER));
                }

                // ++++++++++++++++++++
                // Multiple selection
                // ++++++++++++++++++++
                if (MULTI_SEL_VALID) {
                    if (chkValueExist(defaultValue) && Array.isArray(defaultValue)) {

                        const _currentData: OptionConfig[] = defaultValue;
                        const _defaultValues = _currentData.map((v: OptionConfig) => v.value as string);
                        const _defaultLabels = _currentData.map((v: OptionConfig) => v.label as string);

                        setControlArr({
                            labels: _defaultLabels,
                            values: _defaultValues,
                        });
                    }
                }

            } else {
                // ++++++++++++++++++++
                // Single selection & Multiple selection
                // ++++++++++++++++++++
                if (!FIRST_REQUEST_AUTO) {
                    setControlValue('');
                    setControlLabel('');
                    setControlArr({
                        labels: [],
                        values: []
                    });
                }
            }


        }

    }, []);


    // Fixed an out-of-focus issue
    //--------------
    // !!! TIPS:
    // Fixed: When `fixFocusStatus()` is triggered, the above judgment will be invalidated, and this judgment will be used
    // Fixed: The pop-up window is not closed due to the mixing of business components
    useEffect(() => {
        document.addEventListener('pointerdown', handleDocOut);
        return () => {
            document.removeEventListener('pointerdown', handleDocOut);
        };
    }, [orginalData]); // Avoid the issue that `setOptionsData(orginalData)` sets the original value to empty on the first entry



    return (
        <>

            {label ? <><div className="custom-select__label">{typeof label === 'string' ? <label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={`label-${idRes}`} className="form-label">{label}</label>}</div></> : null}

            <span ref={blinkingPosFauxRef}></span>

            <div
                ref={rootRef}
                data-overlay-id={`custom-select__options-wrapper-${idRes}`}
                id={`custom-select__wrapper-${idRes}`}
                className={combinedCls(
                    'custom-select__wrapper',
                    clsWrite(wrapperClassName, 'mb-3 position-relative'),
                    {
                        'multiple-selection': MULTI_SEL_VALID,
                        'active focus': isOpen
                    }
                )}
                onKeyDown={handleKeyPressed}
                
            >


                {/* CLEAR ICON */}
                {CLEAR_ICON && ( 
                    (!MULTI_SEL_VALID && controlValue) ||   // Single selection Control
                    (MULTI_SEL_VALID && controlArr.values.length > 0 ) // Multiple selection Control
                ) ? (
                    <span className={`custom-select-clear-icon ${MANUAL_REQ ? 'pos-offset' : ''}`}>
                        <button
                            tabIndex={-1}
                            type="button"
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (MULTI_SEL_VALID) {
                                    updateOptionCheckboxes('remove');

                                    onChange?.(
                                        selectInputRef.current,
                                        valueInputRef.current,
                                        multipleSelectionCallback([], [])
                                    );

                                } else {
                                    handleClearValue();
                                }

                            }}
                        >
                            <svg width="12px" height="12px" viewBox="0 0 1024 1024">
                                <path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
                            </svg>
                        </button>
                    </span>
                ) : null}
                {/* CLEAR ICON */}


                {!MULTI_SEL_VALID ? <>

                    {/** INPUT */}
                    <div className="position-relative">
                        <input
                            ref={(node) => {
                                selectInputRef.current = node;
                                if (typeof externalRef === 'function') {
                                    externalRef(node);
                                } else if (externalRef) {
                                    externalRef.current = node;
                                }
                            }}
                            tabIndex={tabIndex || 0}
                            type="text"
                            data-overlay-id={`custom-select__options-wrapper-${idRes}`}
                            id={`label-${idRes}`}

                            // Don't use "name", it's just a container to display the label
                            data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                            data-select
                            className={combinedCls(
                                clsWrite(controlClassName, 'form-control'),
                                controlExClassName
                            )}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={typeof readOnly === 'undefined' || !readOnly ? handleShowList : () => void (0)}
                            onChange={handleChange}
                            onCompositionStart={handleComposition}
                            onCompositionUpdate={handleComposition}
                            onCompositionEnd={handleComposition}
                            disabled={disabled || null}
                            required={required || null}
                            readOnly={INPUT_READONLY}
                            value={controlTempValue || controlTempValue === '' ? controlTempValue : (MULTI_SEL_VALID ? (VALUE_BY_BRACKETS ? convertArrToValByBrackets(formatIndentVal(controlArr.labels, INDENT_LAST_PLACEHOLDER).map((v: any) => stripTagsAndContent(v))) : formatIndentVal(controlArr.labels, INDENT_LAST_PLACEHOLDER).map((v: any) => stripTagsAndContent(v)).join(',')) : stripTagsAndContent(controlLabel as never))}  // do not use `defaultValue`
      
                            style={{ 
                                cursor: 'pointer', 
                                color: 'transparent', 
                                borderBottomWidth: MULTI_SEL_VALID ? '0' : '1px', 
                                ...style 
                            }}
                            autoComplete={typeof autoComplete === 'undefined' ? 'off' : autoComplete}
                            autoCapitalize={typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize}
                            spellCheck={typeof spellCheck === 'undefined' ? false : spellCheck}
                            {...attributes}
                        />

                    </div>
                </> : null}

                {/* ========== RESULT CONTAINER ========== */}
                <input
                    ref={valueInputRef}
                    tabIndex={-1}
                    type="hidden"
                    id={idRes}
                    name={name}
                    value={MULTI_SEL_VALID ? (VALUE_BY_BRACKETS ? convertArrToValByBrackets(controlArr.values) : controlArr.values.join(',')) : controlValue}  // do not use `defaultValue`
                    onChange={() => void (0)}
                    {...attributes}
                />


                {/* BLINKING CURSOR */}
                {!MULTI_SEL_VALID ? <>
                    <span
                        className={combinedCls(
                            'custom-select-multi__control-blinking-following-cursor animated',
                            {
                                'd-none': hideBlinkingCursor()
                            }
                        )}
                        style={{
                            left: `${blinkingPosStart}px`
                        }}
                    >
                        {BLINKING_CURSOR_STR}
                    </span>
                </> : null}
                {/* /BLINKING CURSOR */}

                {/* ========== /RESULT CONTAINER ==========  */}



                {/*
                // ++++++++++++++++++++
                // Single selection Control
                // ++++++++++++++++++++
                */}
                {!MULTI_SEL_VALID ? <div className="custom-select-single__inputplaceholder-wrapper">

                    {/* PLACEHOLDER */}
                    <div className="custom-select-single__inputplaceholder-inner" style={style}>
                        <input
                            tabIndex={-1}
                            type="text"
                            className={combinedCls(
                                clsWrite(controlClassName, 'form-control'),
                                controlExClassName
                            )}
                        />

                        <span ref={blinkingCursorPosDivRef} className={combinedCls(
                            'custom-select-multi__control-blinking-cursor',
                            {
                                'animated': generateInputFocusStr() === BLINKING_CURSOR_STR
                            }
                        )}>
                            {controlTempValue || controlTempValue === '' ? (controlTempValue.length === 0 ? <span className={`${!hideBlinkingCursor() ? 'control-placeholder' : ''}`}>{generateInputFocusStr()}</span> : <span>{controlTempValue}</span>) : (stripTagsAndContent(controlLabel as never).length === 0 ? <span className={`${!hideBlinkingCursor() ? 'control-placeholder' : ''}`}>{generateInputFocusStr()}</span> : <span>{stripTagsAndContent(controlLabel as never)}</span>)}
                        </span>

                    </div>


                    {/* /PLACEHOLDER */}


                    {/* ARROW */}
                    <span className={combinedCls(
                        'custom-select-arrow',
                        {
                            'reverse': isOpen
                        }
                    )} style={{display: MANUAL_REQ ? 'none' : 'inline-block' }}>
                        {controlArrow ? controlArrow : <svg width="10px" height="10px" viewBox="0 -4.5 20 20">
                            <g stroke="none" strokeWidth="1" fill="none">
                                <g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5">
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>}
                    </span>


                    {/* /ARROW */}



                    {/* SEARCH BUTTON */}
                    {MANUAL_REQ ? <>
                        <span className="custom-select-multi__control-searchbtn">
                            <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();
                                
                                handleFetch().then((response: any) => {

                                    // pop win initalization
                                    setTimeout(() => {
                                        popwinPosInit();
                                        popwinFilterItems(controlTempValue);
                                    }, 0);
                                });
                                
                            }}>
                                <svg width="1em" height="1em" fill="#a5a5a5" viewBox="0 0 16 16">
                                    <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                </svg>
                            </button>

                        </span>
                    </> : null}
                    {/* /SEARCH BUTTON */}



                </div> : null}



                {/*
                // ++++++++++++++++++++
                // Multiple selection Control
                // ++++++++++++++++++++
                */}
                {MULTI_SEL_VALID ? <div ref={rootMultiRef} className="custom-select-multi__inputplaceholder-wrapper">
      
                    {/* PLACEHOLDER */}
                    <div className="custom-select-multi__inputplaceholder-inner">
                        <div style={MULTI_SEL_ENTIRE_AREA_TRIGGER ? {pointerEvents: 'auto', cursor: 'pointer'} : undefined} onClick={(e: React.MouseEvent) => {
                            if (MULTI_SEL_ENTIRE_AREA_TRIGGER) {
                                if (typeof readOnly === 'undefined' || !readOnly) handleShowList();
                            }
                        }}>
                            <ul className="custom-select-multi__list">

                                {typeof multiSelectSelectedItemOnlyStatus !== 'undefined' ? <>

                                    <li className="custom-select-multi__list-item-statusstring" >
                
                                        
                                        {MANUAL_REQ ? <>
                                            {/* ===================== Manual requests ===================== */}
                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.itemsLabel === 'string' && 
                                                controlArr.labels.length > 0
                                                ? 
                                                multiSelectSelectedItemOnlyStatus.itemsLabel.replace('{num}', `${controlArr.labels.length}`) 
                                                : 
                                                null
                                            }
                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.noneLabel === 'string' && 
                                                controlArr.labels.length === 0 
                                                ? 
                                                multiSelectSelectedItemOnlyStatus.noneLabel 
                                                : 
                                                null
                                            }

                                            {/*-- DEFAULT VALUE ---*/}
                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.itemsLabel !== 'string' && 
                                                controlArr.labels.length > 0 
                                                ? 
                                                MULTI_SEL_SELECTED_STATUS.itemsLabel.replace('{num}', `${controlArr.labels.length}`) 
                                                : 
                                                null
                                            }
                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.noneLabel !== 'string' && 
                                                controlArr.labels.length === 0 
                                                ? 
                                                MULTI_SEL_SELECTED_STATUS.noneLabel 
                                                : 
                                                null
                                            }

                                            {/* ===================== /Manual requests ===================== */}

                                        </> : <>
                                            {/* ===================== Auto requests ===================== */}

                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.itemsLabel === 'string' && 
                                                controlArr.labels.length > 0 && 
                                                controlArr.labels.length < optionsData.length 
                                                ? 
                                                multiSelectSelectedItemOnlyStatus.itemsLabel.replace('{num}', `${controlArr.labels.length}`) 
                                                : 
                                                null
                                            }
                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.noneLabel === 'string' && 
                                                controlArr.labels.length === 0 
                                                ? 
                                                multiSelectSelectedItemOnlyStatus.noneLabel 
                                                : 
                                                null
                                            }

                                            {/* all */}
                                            {controlArr.labels.length > 0 ? <>
                                                {
                                                    typeof multiSelectSelectedItemOnlyStatus.allItemsLabel === 'string' && 
                                                    controlArr.labels.length === optionsData.length 
                                                    ? 
                                                    multiSelectSelectedItemOnlyStatus.allItemsLabel.replace('{num}', `${controlArr.labels.length}`) 
                                                    : 
                                                    null
                                                }
                                            </>: null}


                                            {/*-- DEFAULT VALUE ---*/}
                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.itemsLabel !== 'string' && 
                                                controlArr.labels.length > 0 
                                                ? 
                                                MULTI_SEL_SELECTED_STATUS.itemsLabel.replace('{num}', `${controlArr.labels.length}`) 
                                                : 
                                                null
                                            }
                                            {
                                                typeof multiSelectSelectedItemOnlyStatus.noneLabel !== 'string' && 
                                                controlArr.labels.length === 0 
                                                ? 
                                                MULTI_SEL_SELECTED_STATUS.noneLabel 
                                                : 
                                                null
                                            }

                                            {/* all */}
                                            {controlArr.labels.length > 0 ? <>
                                                {
                                                    typeof multiSelectSelectedItemOnlyStatus.allItemsLabel !== 'string' && 
                                                    controlArr.labels.length === optionsData.length 
                                                    ? 
                                                    MULTI_SEL_SELECTED_STATUS.allItemsLabel.replace('{num}', `${controlArr.labels.length}`) 
                                                    : 
                                                    null
                                                }
                                            </>: null}
                                            {/* ===================== /Auto requests ===================== */}

                                        </>}

                                    </li>
                                </> : <>
                                
                                    {/* ITEMS LIST */}
                                    {typeof renderSelectedValue === 'function' ? <>
                                        {renderSelectedValue(controlArr, handleMultiControlItemRemove)}
                                    </> : <>
                                        {controlArr.labels.map((item: any, index: number) => (
                                            <li 
                                                key={'selected-item-' + index}
                                                data-value={controlArr.values[index]}
                                                data-label-full={item}
                                                data-label-text={formatIndentVal(stripTagsAndContent(item), INDENT_LAST_PLACEHOLDER)}
                                            >
                                                {formatIndentVal(stripTagsAndContent(item), INDENT_LAST_PLACEHOLDER)}

                                                <a 
                                                    href="#" 
                                                    tabIndex={-1} 
                                                    onClick={handleMultiControlItemRemove} 
                                                    data-value={controlArr.values[index]}
                                                ><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a>
                                            </li>
                                        ))}
                                    </>} 

                                    
                                </>}


                                {/** INPUT */}
                                <li className="custom-select-multi__list-item-add">
                                    <div className="position-relative">
                                        {/*
                                            // DO NOT USE following attributes in " Multiple selection Control":
                                                a) data-select
                                                b) value
                                            */}
                                        <input
                                            ref={(node) => {
                                                selectInputRef.current = node;
                                                if (typeof externalRef === 'function') {
                                                    externalRef(node);
                                                } else if (externalRef) {
                                                    externalRef.current = node;
                                                }
                                            }}
                                            tabIndex={tabIndex || 0}
                                            type="text"
                                            data-overlay-id={`custom-select__options-wrapper-${idRes}`}
                                            id={`label-${idRes}`}

                                            // Don't use "name", it's just a container to display the label
                                            data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                                            className={combinedCls(
                                                clsWrite(controlClassName, 'form-control'),
                                                controlExClassName
                                            )}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            onClick={typeof readOnly === 'undefined' || !readOnly ? handleShowList : () => void (0)}
                                            onChange={handleChange}
                                            onCompositionStart={handleComposition}
                                            onCompositionUpdate={handleComposition}
                                            onCompositionEnd={handleComposition}
                                            disabled={disabled || null}
                                            required={required || null}
                                            readOnly={INPUT_READONLY}
                                            placeholder={placeholder}
                                            style={style}
                                            autoComplete={typeof autoComplete === 'undefined' ? 'off' : autoComplete}
                                            autoCapitalize={typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize}
                                            spellCheck={typeof spellCheck === 'undefined' ? false : spellCheck}
                                            {...attributes}
                                        />

                                    </div>


                                </li>

                            </ul>

                        </div>

                    </div>
                    {/* /PLACEHOLDER */}




                    {/* ARROW */}
                    <span className={combinedCls(
                        'custom-select-arrow',
                        {
                            'reverse': isOpen
                        }
                    )} style={{display: MANUAL_REQ ? 'none' : 'inline-block' }}>
                        {controlArrow ? controlArrow : <svg width="10px" height="10px" viewBox="0 -4.5 20 20">
                            <g stroke="none" strokeWidth="1" fill="none">
                                <g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5">
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>}
                    </span>
                    {/* /ARROW */}



                    {/* SEARCH BUTTON */}
                    {MANUAL_REQ ? <>
                        <span className="custom-select-multi__control-searchbtn">
                            <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                e.stopPropagation();

                                handleFetch().then((response: any) => {

                                    // pop win initalization
                                    setTimeout(() => {
                                        popwinPosInit();
                                        popwinFilterItems(controlTempValue);
                                    }, 0);
                                });
                            }}>
                                <svg width="1em" height="1em" fill="#a5a5a5" viewBox="0 0 16 16">
                                    <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                </svg>
                            </button>

                        </span>
                    </> : null}


                </div> : null}
                {/* /SEARCH BUTTON */}




                {optionsData && !hasErr ? <>
                    <RootPortal show={true} containerClassName="Select">

                        <div
                            ref={listRef}
                            id={`custom-select__options-wrapper-${idRes}`}
                            className={combinedCls(
                                'custom-select__options-wrapper list-group position-absolute border shadow small',
                                optionsExClassName,
                                {
                                    'multiple-selection': MULTI_SEL_VALID
                                }
                            )}
                            style={{ zIndex: DEPTH, width: WIN_WIDTH, display: 'none' }}
                            role="tablist"
                        >

                            <div
                                className="custom-select__options-contentlist rounded"
                                style={{ backgroundColor: 'var(--bs-list-group-bg)' }}
                                tabIndex={0}
                                ref={listContentRef}
                            >
                                <div className="custom-select__options-contentlist-inner">

                                    {/* SELECT ALL BUTTON */}
                                    {MULTI_SEL_VALID ? <>
                                        <span
                                            tabIndex={-1}
                                            className="list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light custom-select-multi__control-option-item--select-all position-sticky top-0 z-3"
                                            role="tab"
                                            style={{ display: multiSelect?.selectAll ? 'block' : 'none' }}
                                        >
                                            <span
                                                tabIndex={-1}
                                                className="btn btn-secondary"
                                                dangerouslySetInnerHTML={{
                                                    __html: controlArr.values.length === optionsData.length ? `${MULTI_DESEL_LABEL}` : `${MULTI_SEL_LABEL}`
                                                }}
                                                onClick={handleSelectAll}
                                            ></span>
                                        </span>
                                    </> : null}
                                    {/* /SELECT ALL BUTTON */}



                                    {/* CLEAR BUTTON (Only Single selection) */}
                                    {!MULTI_SEL_VALID ? <>
                                        {CLEAR_TRIGGER_VALID ? <>
                                            <span
                                                tabIndex={-1}
                                                className="list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light custom-select-multi__control-option-item--clear position-sticky top-0 z-3"
                                                role="tab"
                                            >
                                                <span
                                                    tabIndex={-1}
                                                    className="btn btn-secondary"
                                                    dangerouslySetInnerHTML={{
                                                        __html: `${CLEAR_TRIGGER_LABEL}`
                                                    }}
                                                    onClick={handleClearValue}
                                                ></span>
                                            </span>
                                        </> : null}
                                    </> : null}
                                    {/* /CLEAR BUTTON (Only Single selection) */}


                                    {/* NO MATCH & LOADER */}
                                    <button tabIndex={-1} type="button" className="list-group-item list-group-item-action no-match border-0 custom-select-multi__control-option-item--nomatch hide" disabled>
                                        {
                                            // (1) Handling async data with the click event
                                            (!FIRST_REQUEST_AUTO && !handleFirstFetchCompleted) ||

                                            // (2) Every time the input changes or the search button is clicked, a data request will be triggered
                                            (fetchUpdate && !filterItemsHasNoMatchData && controlTempValue !== '')
                                        ? <><div className="cus-select-loader">{loader || <svg height="12px" width="12px" viewBox="0 0 512 512"><g><path fill="inherit" d="M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z" /><path fill="inherit" d="M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z" /><path fill="inherit" d="M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z" /><path fill="inherit" d="M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z" /><path fill="inherit" d="M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z" /><path fill="inherit" d="M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z" /><path fill="inherit" d="M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z" /><path fill="inherit" d="M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z" /></g></svg>}</div></> : <>{fetchNoneInfo}</>}
                                    </button>
                                    {/* /NO MATCH & LOADER */}



                                    {/* OPTIONS LIST */}
                                    {optionsData ? optionsData.map((item, index) => {
                                        const startItemBorder = index === 0 ? 'border-top-0' : '';
                                        const endItemBorder = index === optionsData.length - 1 ? 'border-bottom-0' : '';


                                        // disable selected options (only single selection)
                                        let disabledCurrentOption: boolean = false;
                                        if (
                                            (typeof controlValue !== 'undefined' && controlValue !== null && controlValue !== '') &&
                                            (typeof item.value !== 'undefined' && item.value !== null && item.value !== '')
                                        ) {

                                            if (!MULTI_SEL_VALID) {
                                                const _defaultValue = controlValue.toString();
                                                let filterRes: any = [];
                                                const filterResQueryValue = optionsData.filter((item: any) => item.value == _defaultValue);
                                                const filterResQueryLabel = optionsData.filter((item: any) => item.label == _defaultValue);

                                                if (filterResQueryValue.length === 0 && filterResQueryLabel.length > 0) {
                                                    filterRes = filterResQueryValue;
                                                    if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
                                                }

                                                const _targetValue = filterRes.length > 0 ? filterRes[0].value : _defaultValue;
                                                const _realValue = item.value.toString();

                                                if (_realValue === _targetValue && _targetValue !== '') {
                                                    disabledCurrentOption = true;
                                                }
                                            }

                                        }



                                        if (!MULTI_SEL_VALID) {

                                            // ++++++++++++++++++++
                                            // Single selection
                                            // ++++++++++++++++++++
                                            return <button
                                                tabIndex={-1}
                                                type="button"
                                                data-index={index}
                                                key={index}
                                                className={combinedCls(
                                                    'list-group-item list-group-item-action border-start-0 border-end-0 custom-select-multi__control-option-item border-bottom-0',
                                                    startItemBorder,
                                                    endItemBorder,
                                                    {
                                                        'disabled': item.disabled,
                                                        'active disabled': disabledCurrentOption,
                                                        'custom-select-grouptitle': item.group
                                                    }

                                                )}
                                                data-value={`${item.value}`}
                                                data-label={`${item.label}`}
                                                data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`}
                                                data-itemdata={JSON.stringify(item)}
                                                data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                                                role="tab"
                                                dangerouslySetInnerHTML={{
                                                    __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
                                                }}
                                                onClick={handleSelect}
                                            ></button>

                                        } else {

                                            // ++++++++++++++++++++
                                            // Multiple selection
                                            // ++++++++++++++++++++
                                            const itemSelected = multiSelControlOptionExist(controlArr.values, item.value) ? true : false;

                                            return <button
                                                tabIndex={-1}
                                                type="button"
                                                data-selected={`${itemSelected ? 'true' : 'false'}`}
                                                data-index={index}
                                                key={index}
                                                className={combinedCls(
                                                    'list-group-item list-group-item-action border-start-0 border-end-0 custom-select-multi__control-option-item border-bottom-0',
                                                    startItemBorder,
                                                    endItemBorder,
                                                    {
                                                        'list-group-item-secondary item-selected': itemSelected,
                                                        'disabled': item.disabled,
                                                        'custom-select-grouptitle': item.group

                                                    }
                                                )}
                                                data-value={`${item.value}`}
                                                data-label={`${item.label}`}
                                                data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`}
                                                data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                                                data-itemdata={JSON.stringify(item)}
                                                role="tab"
                                                onClick={handleSelect}
                                            >
                                                <var className={combinedCls(
                                                    'me-1 custom-select-multi__control-option-checkbox-selected',
                                                    {
                                                        'd-none': !itemSelected
                                                    }

                                                )}>
                                                    <svg width="1.2em" height="1.2em" fill="#000000" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>

                                                </var>

                                                <var className={combinedCls(
                                                    'me-1 custom-select-multi__control-option-checkbox-placeholder',
                                                    {
                                                        'd-none': itemSelected
                                                    }
                                                )}>
                                                    <svg width="1.2em" height="1.2em" fill="#000000" viewBox="0 0 24 24"><path d="M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z" /></svg>
                                                </var>
                                                <span dangerouslySetInnerHTML={{
                                                    __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
                                                }}></span>
                                            </button>

                                        }


                                    }) : null}
                                    {/* /OPTIONS LIST */}

                                </div>
                            </div>


                        </div>

                    </RootPortal>

                </> : null}




            </div>


        </>
    )
});

export default Select;
