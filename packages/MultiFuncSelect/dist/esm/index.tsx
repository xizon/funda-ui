import React, { useId, useEffect, useState, useRef, KeyboardEvent, forwardRef, useImperativeHandle } from 'react';

import RootPortal from 'funda-root-portal';
import { 
    isJSON,
    useDebounce,
    useClickOutside,
    useWindowScroll,
    extractContentsOfBrackets,
    convertArrToValByBrackets,
    getAbsolutePositionOfStage,
    addTreeDepth,
    addTreeIndent,
    getTextWidth,
} from 'funda-utils';



//Destroys body scroll locking
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from './plugins/BSL';



declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type MultiFuncSelectOptionChangeFnType = (arg1: any, arg2: any, arg3: any) => void;

interface MultiSelectDataConfig {
    values: string[] | number[];
    labels: string[] | number[];
    queryStrings: string[] | number[];
}

interface OptionConfig {
    disabled?: boolean;
    label: any;
    listItemLabel?: any;
    value: any;
    queryString: string | number;
}


interface MultiSelectConfig {
    valid: boolean;
    selectAll: boolean;
    selectAllLabel?: string;
    data: MultiSelectDataConfig | null;
}

interface multiSelectSelectedItemOnlyStatusConfig {
    itemsLabel?: string;
    allItemsLabel?: string;
    noneLabel?: string;
}




interface CleanTriggerConfig {
    valid: boolean;
    cleanValueLabel?: string;
}


type MultiFuncSelectProps = {
    contentRef?: React.RefObject<any>;
    popupRef?: React.RefObject<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    exceededSidePosOffset?: number;
    multiSelect?: MultiSelectConfig;
    multiSelectSelectedItemOnlyStatus?: multiSelectSelectedItemOnlyStatusConfig;
    cleanTrigger?: CleanTriggerConfig;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    options?: OptionConfig[] | string;
    lockBodyScroll?: boolean;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
    winWidth?: string | Function;
    controlArrow?: React.ReactNode;
    fetchTrigger?: boolean;
    fetchTriggerForDefaultData?: MultiSelectDataConfig | null;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
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
    onChange?: MultiFuncSelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};


const MultiFuncSelect = forwardRef((props: MultiFuncSelectProps, ref: any) => {
    const {
        contentRef,
        popupRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
        exceededSidePosOffset,
        multiSelect,
        multiSelectSelectedItemOnlyStatus,
        disabled,
        required,
        value,
        label,
        name,
        readOnly,
        placeholder,
        id,
        options,
        cleanTrigger,
        lockBodyScroll,
        hierarchical,
        indentation,
        doubleIndent,
        style,
        depth,
        controlArrow,
        winWidth,
        tabIndex,
        fetchTrigger,
        fetchTriggerForDefaultData,
        fetchNoneInfo,
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
        ...attributes
    } = props;


    const DEPTH = depth || 1055;  // the default value same as bootstrap
    const LIVE_SEARCH_OK = typeof fetchTrigger !== 'undefined' && fetchTrigger === true ? true : false;
    const LIVE_SEARCH_DISABLED = (typeof fetchTrigger === 'undefined' || fetchTrigger === false) && typeof window !== 'undefined' && typeof (window as any)['funda-ui__MultiFuncSelect-disable-livesearch'] !== 'undefined' ? true : false; // Globally disable real-time search functionality (only valid for non-dynamic requests)

    const INPUT_READONLY = LIVE_SEARCH_DISABLED ? true : (typeof readOnly === 'undefined' ? null : readOnly);
    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const LOCK_BODY_SCROLL = typeof lockBodyScroll === 'undefined' ? true : lockBodyScroll;
    const WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
    const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;
    const POS_OFFSET = 0;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const rootSingleRef = useRef<any>(null);
    const rootMultiRef = useRef<any>(null);
    const selectInputRef = useRef<any>(null);
    const valueInputRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);
    const optionsRes = options ? (isJSON(options) ? JSON.parse(options as string) : options) : [];

    const keyboardSelectedItem = useRef<any>(null);


    // return a array of options
    let staticOptionsData: OptionConfig[] = optionsRes;

    //
    const [orginalData, setOrginalData] = useState<OptionConfig[]>(staticOptionsData);
    const [optionsData, setOptionsData] = useState<OptionConfig[]>(staticOptionsData);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [controlLabel, setControlLabel] = useState<string | undefined>('');
    const [controlValue, setControlValue] = useState<string | undefined>('');
    const [controlTempValue, setControlTempValue] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);

    // blinking cursor
    const BLINKING_CURSOR_STR = '|';
    const [blinkingPosStart, setBlinkingPosStart] = useState<number>(0);
    const blinkingPosFauxRef = useRef<any>(null);
    const blinkingCursorPosDivRef = useRef<any>(null);



    const selectedSign = useRef<boolean>(false);
    const MULTI_SEL_VALID = multiSelect ? multiSelect.valid : false;
    const MULTI_SEL_LABEL = multiSelect ? multiSelect.selectAllLabel : 'Select all options';
    const MULTI_SEL_SELECTED_STATUS: Record<string, string> = {
        itemsLabel: '{num} Selected',
        allItemsLabel: 'All Content',
        noneLabel: 'No items selected',
    };

    const [controlArr, setControlArr] = useState<any>({
        labels: [],
        values: []
    });


    const multiSelControlOptionExist = (arr: any[], val: any) => {
        const _data = arr.filter(Boolean);
        return _data.map((v: any) => v.toString()).includes(val.toString());
    };

    // clean trigger
    const CLEAN_TRIGGER_VALID = typeof cleanTrigger === 'undefined' ? false : (cleanTrigger ? cleanTrigger.valid : false);
    const CLEAN_TRIGGER_LABEL = cleanTrigger ? cleanTrigger.cleanValueLabel : 'Clean';



    // exposes the following methods
    useImperativeHandle(
        popupRef,
        () => ({
            close: () => {
                cancel();

                if (MULTI_SEL_VALID) popwinPosHide();
            },
        }),
        [popupRef],
    );

    useImperativeHandle(
        contentRef,
        () => ({
            clear: (cb?: any) => {

                if (MULTI_SEL_VALID) {
                    updateOptionCheckboxes('remove');
                } else {
                    handleCleanValue();
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



    /**
     * Format indent value
     * @param {String|Array} inputData 
     * @returns {String|Array}
     */
    function formatIndentVal(inputData: any) {
        const reVar = new RegExp(INDENT_LAST_PLACEHOLDER, 'g');
        if (Array.isArray(inputData)) {
            return inputData.map((s: any) => String(s).replace(reVar, '').replace(/\&nbsp;/ig, ''));
        } else {
            const _txt: any = typeof inputData === 'string' ? inputData : inputData.toString();
            return _txt.replace(reVar, '').replace(/\&nbsp;/ig, '');
        }

    }


    /**
     * Array unique
     * @param {Array} str 
     * @returns {Array}
     */
    function unique(arr: any[]) {
        return Array.from(new Set(arr));
    }


    /**
     * Remove html tag content
     * @param {string | number} str 
     * @returns {string}
     */
    function stripHTML(str: string | number) {
        return String(str).replace(/<\/?[^>]+(>|$)(.*?)<\/?[^>]+(>|$)/ig, '');
    }


    /**
     * Remove a specific item from an array
     * @param {array} arr 
     * @param {string} value 
     * @returns {array}
     */
    function removeItemOnce(arr: any[], value: string | number) {
        const arrFormat = arr.map((v: any) => v.toString());
        const index = arrFormat.indexOf(value.toString());
        if (index > -1) {
            arrFormat.splice(index, 1);
        }
        return arrFormat;
    }

    /**
     * Remove multiple items from an array
     * @param {array} arr 
     * @param {array} value 
     * @returns {array}
     */
    function removeItems(arr: any[], value: any[]) {
        const arrFormat = arr.map((v: any) => v.toString());
        const valueFormat = value.map((v: any) => v.toString());
        return arrFormat.filter((v: any) => {
            return !valueFormat.includes(v);
        });
    }



    async function fetchData(params: any, inputDefaultValue: any, init: boolean = true) {

        // get incoming options from `data-options` of component
        // It is usually used for complex cascading `<MultiFuncSelect />` components
        const incomingOptionsData = valueInputRef.current.dataset.options;


        // Determine whether the default value is user query input or default input
        const defaultValue = init ? inputDefaultValue : '';


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
            // get incoming options from `data-options` of component
            if (typeof incomingOptionsData !== 'undefined') {
                _ORGIN_DATA = JSON.parse(incomingOptionsData);

                // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
                if (typeof defaultValue !== 'undefined' && defaultValue !== '') valueInputRef.current.dataset.value = defaultValue;
            }


            // STEP 2: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }




            // STEP 3: ===========
            // value & label must be initialized
            let filterRes: any = [];


            if (fetchTrigger) {

                // If a manual action is used to trigger the request
                if (typeof fetchTriggerForDefaultData !== 'undefined' && fetchTriggerForDefaultData !== null && typeof fetchTriggerForDefaultData?.values[0] !== 'undefined') {
                    filterRes = [{
                        value: fetchTriggerForDefaultData?.values[0],
                        label: fetchTriggerForDefaultData?.labels[0],
                        queryString: fetchTriggerForDefaultData?.queryStrings[0]
                    }];
                }

            } else {

                // If the default value is label, match value
                const filterResQueryValue = _ORGIN_DATA.filter((item: any) => item.value == defaultValue);
                const filterResQueryLabel = _ORGIN_DATA.filter((item: any) => item.label == defaultValue);

                filterRes = filterResQueryValue;
                if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;
            }



            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (typeof defaultValue === 'undefined' || defaultValue === '') {  // Do not use `init`, otherwise the query will revert to the default value if there is no value
                setControlValue('');
                setControlLabel('');
            } else {
                if (filterRes.length > 0) {
                    setControlValue(filterRes[0].value);
                    setControlLabel(formatIndentVal(filterRes[0].label) as string);
                }

            }


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if (MULTI_SEL_VALID) {


                if ((typeof defaultValue === 'undefined' || defaultValue === '') && init) {
                    setControlArr({
                        labels: [],
                        values: []
                    });
                }



                if (typeof defaultValue !== 'undefined' && defaultValue !== '' && multiSelect?.data !== null) {

                    // initialize default values of Multiple selection
                    const _currentData: any = multiSelect?.data;

                    setControlArr({
                        labels: _currentData.labels,
                        values: _currentData.values,
                    });

                    //
                    const _values: string[] = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.split(',');


                    _values.forEach((_value: string, _index: number) => {

                        if (!multiSelControlOptionExist(_currentData.values, _value) && typeof _currentData.values[_index] !== 'undefined') {

                            let filterRes: any = [];
                            filterRes = [{
                                value: _currentData.values[_index],
                                label: _currentData.labels[_index],
                                queryString: _currentData.queryStrings[_index]
                            }];

                            setControlArr((prevState: any) => {
                                return {
                                    labels: unique([...prevState.labels, typeof filterRes[0] !== 'undefined' ? filterRes[0].label : ''].filter((v: any) => v !== '')),
                                    values: unique([...prevState.values, typeof filterRes[0] !== 'undefined' ? filterRes[0].value : ''].filter((v: any) => v !== ''))
                                }
                            });

                        }

                    });


                }

                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();

                // hide disabled item
                _ORGIN_DATA = _ORGIN_DATA.filter((v: any) => typeof v.disabled !== 'undefined' && v.disabled == true ? false : true);

            }


            // STEP 5: ===========
            //
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
            // get incoming options from `data-options` of component
            if (typeof incomingOptionsData !== 'undefined') {
                staticOptionsData = JSON.parse(incomingOptionsData);

                // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
                if (typeof defaultValue !== 'undefined' && defaultValue !== '') valueInputRef.current.dataset.value = defaultValue;

            }


            // STEP 2: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
                staticOptionsData = addTreeDepth(staticOptionsData);
                addTreeIndent(staticOptionsData, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }




            // STEP 3: ===========
            // value & label must be initialized

            // If the default value is label, match value
            let filterRes: any = [];
            const filterResQueryValue = staticOptionsData.filter((item: any) => item.value == defaultValue);
            const filterResQueryLabel = staticOptionsData.filter((item: any) => item.label == defaultValue);

            filterRes = filterResQueryValue;
            if (filterResQueryValue.length === 0) filterRes = filterResQueryLabel;

            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if (typeof defaultValue === 'undefined' || defaultValue === '') {  // Do not use `init`, otherwise the query will revert to the default value if there is no value
                setControlValue('');
                setControlLabel('');
            } else {
                if (filterRes.length > 0) {
                    setControlValue(filterRes[0].value);
                    setControlLabel(formatIndentVal(filterRes[0].label));
                }

            }



            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if (MULTI_SEL_VALID) {


                if ((typeof defaultValue === 'undefined' || defaultValue === '') && init) {
                    setControlArr({
                        labels: [],
                        values: []
                    });
                }

                if (typeof defaultValue !== 'undefined' && defaultValue !== '' && multiSelect?.data !== null) {

                    // initialize default values of Multiple selection
                    const _currentData: any = multiSelect?.data;

                    setControlArr({
                        labels: _currentData.labels,
                        values: _currentData.values,
                    });

                    //
                    const _values: string[] = typeof defaultValue !== 'undefined' ? (VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.split(',')) : [];
                    _values.forEach((_value: string, _index: number) => {

                        if (!multiSelControlOptionExist(_currentData.values, _value) && typeof _currentData.values[_index] !== 'undefined') {


                            let filterRes: any = [];
                            filterRes = [{
                                value: _currentData.values[_index],
                                label: _currentData.labels[_index],
                                queryString: _currentData.queryStrings[_index]
                            }];

                            setControlArr((prevState: any) => {
                                return {
                                    labels: unique([...prevState.labels, typeof filterRes[0] !== 'undefined' ? filterRes[0].label : ''].filter((v: any) => v !== '')),
                                    values: unique([...prevState.values, typeof filterRes[0] !== 'undefined' ? filterRes[0].value : ''].filter((v: any) => v !== ''))
                                }
                            });


                        }
                    });
                }

                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();


                // hide disabled item
                staticOptionsData = staticOptionsData.filter((v: any) => typeof v.disabled !== 'undefined' && v.disabled == true ? false : true);

            }


            // STEP 5: ===========
            //
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



    function adjustMultiControlContainerHeight() {
        setTimeout(() => {

            // Sometimes you may get 0, you need to judge
            if (rootMultiRef.current.clientHeight > 0) {
                rootSingleRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
                selectInputRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
            }

            // popwin position update
            const _modalRef: any = document.querySelector(`#mf-select__options-wrapper-${idRes}`);
            if (MULTI_SEL_VALID && _modalRef !== null && _modalRef.classList.contains('active')) {
                popwinPosInit();
            }


        }, 0);
    }



    function popwinPosInit() {
        if (listContentRef.current === null || selectInputRef.current === null) return;

        const contentHeightOffset = 80;
        let contentMaxHeight = 0;

        // update modal position
        const _modalRef: any = document.querySelector(`#mf-select__options-wrapper-${idRes}`);
        const _triggerRef: any = selectInputRef.current;

        // console.log(getAbsolutePositionOfStage(_triggerRef));

        if (_modalRef === null) return;

        const { x, y, width, height } = getAbsolutePositionOfStage(_triggerRef);
        const _triggerBox = _triggerRef.getBoundingClientRect();
        let targetPos = '';

        // STEP 1:
        //-----------
        // display wrapper
        _modalRef.classList.add('active');


        // STEP 2:
        //-----------
        // Detect position
        if (window.innerHeight - _triggerBox.top > 100) {
            targetPos = 'bottom';
        } else {
            targetPos = 'top';
        }

        if (typeof listContentRef.current.dataset.pos === 'undefined') listContentRef.current.dataset.pos = targetPos;



        // STEP 3:
        //-----------
        // Detect content height
        const _contentBox = listContentRef.current.getBoundingClientRect();
        const _contentOldHeight = listContentRef.current.clientHeight;

        if (targetPos === 'top') {
            contentMaxHeight = _triggerBox.top;

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
        if (typeof _modalContent.dataset.offset === 'undefined') {

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

    }


    function popwinPosHide() {

        const _modalRef: any = document.querySelector(`#mf-select__options-wrapper-${idRes}`);

        if (_modalRef !== null && listContentRef.current !== null) {


            // remove classnames and styles
            _modalRef.classList.remove('active');
            listContentRef.current.style.removeProperty('height');

            // remove data-* attibutes
            popwinContainerHeightReset();


            // display all filtered items
            const _items = [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item'));
            _items.forEach((node: any) => {
                node.classList.remove('hide');
            });


            // nomatch & button of select all 
            const _nodataDiv = listContentRef.current.querySelector('.mf-select-multi__control-option-item--nomatch');
            const _btnSelectAll = listContentRef.current.querySelector('.mf-select-multi__control-option-item--select-all');
            _nodataDiv.classList.add('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');


        }


    }


    function popwinFilterItems(val: any) {
        if (listContentRef.current === null) return;


        [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item')).forEach((node: any) => {

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


        // no data label
        popwinNoMatchInit();


        // display all filtered items
        const _btnSelectAll = listContentRef.current.querySelector('.mf-select-multi__control-option-item--select-all');
        const _nodataDiv = listContentRef.current.querySelector('.mf-select-multi__control-option-item--nomatch');
        if ((val === null ? '' : val).replace(/\s/g, "") === '') {
            [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item')).forEach((node: any) => {
                node.classList.remove('hide');
            });
            _nodataDiv.classList.add('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');
        }


        // Appropriate list container height
        popwinContainerHeightAdjust();


    }

    function popwinContainerHeightAdjust() {
        if (listContentRef.current === null) return;

        const oldHeight = listContentRef.current.dataset.height;
        const pos = listContentRef.current.dataset.pos;
        const filteredHeight = listContentRef.current.firstChild.clientHeight;

        if (parseFloat(oldHeight) > filteredHeight) {
            listContentRef.current.style.height = filteredHeight + 'px';
        } else {
            listContentRef.current.style.height = oldHeight + 'px';
        }

    }




    function popwinNoMatchInit() {
        if (listContentRef.current === null) return;

        const _btnSelectAll = listContentRef.current.querySelector('.mf-select-multi__control-option-item--select-all');
        const _nodataDiv = listContentRef.current.querySelector('.mf-select-multi__control-option-item--nomatch');
        const emptyFieldsCheck = [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item')).every((node: any) => {
            if (!node.classList.contains('hide')) {
                return false;
            }
            return true;
        });

        if (emptyFieldsCheck) {
            _nodataDiv.classList.remove('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.add('hide');
        } else {
            _nodataDiv.classList.add('hide');
            if (_btnSelectAll !== null) _btnSelectAll.classList.remove('hide');
        }

    }


    function popwinContainerHeightReset() {
        if (listContentRef.current === null) return;

        // remove data-* attibutes
        listContentRef.current.removeAttribute('data-height');
        listContentRef.current.removeAttribute('data-pos');

    }

    function cancel() {
        // hide list
        setIsOpen(false);
        if (!MULTI_SEL_VALID) popwinPosHide();


        if (LIVE_SEARCH_OK) {
            // clean data
            setOptionsData([]);
        } else {
            // restore data
            setOptionsData(orginalData);
        }

        // update temporary value
        setControlTempValue(null);


        // Unlocks the page
        if (LOCK_BODY_SCROLL) enableBodyScroll(document.querySelector('body'));
    }

    function activate() {

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



        if (LIVE_SEARCH_OK) {
            // clean data
            setOptionsData([]);
        } else {
            // restore data
            setOptionsData(orginalData);
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

    async function handleSelect(el: any, dataInput: any = false, valueArr: any[] = [], labelArr: any[] = []) {

        if (typeof el === 'undefined') return;


        const curItem: any = el === null ? JSON.parse(dataInput) : JSON.parse(el.currentTarget.dataset.itemdata);


        // get incoming options from `data-options` of component
        // It is usually used for complex cascading `<MultiFuncSelect />` components
        const incominggetOptionsData = valueInputRef.current.dataset.options;


        // cancel
        if (!(MULTI_SEL_VALID)) {
            cancel();
        }

        //remove focus style
        if (!(MULTI_SEL_VALID)) {
            rootRef.current?.classList.remove('focus');
        }

        // get options
        const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.no-match)'));


        // current control of some option
        const curBtn = options.filter((node: HTMLElement) => node.dataset.itemdata == JSON.stringify(curItem))[0];


        // update value * label
        if (dataInput) {

            // using keyboard
            const _data = JSON.parse(dataInput);
            const _value = _data.value;
            const _label = _data.label;

            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            // clear all active classes of options 
            // (Avoid using the keyboard to select and two actives will appear after clicking on a non-selected option.)
            options.forEach((node: any) => {
                node.classList.remove('active');
            });



            //
            setControlValue(_value);
            setControlLabel(formatIndentVal(_label));


            // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
            if (typeof incominggetOptionsData !== 'undefined') {
                valueInputRef.current.dataset.value = _value;
            }


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
                    $el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.add('d-none');
                    $el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');

                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: removeItemOnce(prevState.labels, formatIndentVal(_label)),
                            values: removeItemOnce(prevState.values, _value)
                        }
                    });


                    currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
                    currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label));


                } else {
                    //#########
                    // add item
                    //#########
                    $el.dataset.selected = 'true';
                    $el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                    $el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.add('d-none');

                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: [...prevState.labels, formatIndentVal(_label)],
                            values: [...prevState.values, _value]
                        }
                    });

                    currentControlValueArr.push(_value);
                    currentControlLabelArr.push(_label);

                }

                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();


                // active current option
                setTimeout(() => {
                    $el.classList.add('active');
                }, 0);



            }

            //
            if (typeof (onChange) === 'function') {

                onChange?.(
                    selectInputRef.current,
                    valueInputRef.current,
                    !MULTI_SEL_VALID ? curItem : {
                        labels: currentControlLabelArr.map((v: any) => v.toString()),
                        values: currentControlValueArr.map((v: any) => v.toString()),
                        labelsOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlLabelArr.map((v: any) => v.toString())) : currentControlLabelArr.map((v: any) => v.toString()).join(','),
                        valuesOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlValueArr.map((v: any) => v.toString())) : currentControlValueArr.map((v: any) => v.toString()).join(',')
                    }
                );


                //
                selectInputRef.current.blur();
            }




        } else {


            const _value = typeof curItem !== 'undefined' ? curItem.value : '';
            const _label = typeof curItem !== 'undefined' ? curItem.label : '';

            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++

            // clear all active classes of options
            // (Avoid using the keyboard to select and two actives will appear after clicking on a non-selected option.)
            options.forEach((node: any) => {
                node.classList.remove('active');
            });

            //
            setControlValue(_value);
            setControlLabel(formatIndentVal(_label));

            // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
            if (typeof incominggetOptionsData !== 'undefined') {
                valueInputRef.current.dataset.value = _value;
            }



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
                    $el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.add('d-none');
                    $el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');


                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: removeItemOnce(prevState.labels, formatIndentVal(_label)),
                            values: removeItemOnce(prevState.values, _value)
                        }
                    });

                    currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
                    currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label));

                } else {
                    //#########
                    // add item
                    //#########

                    $el.dataset.selected = 'true';
                    $el.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                    $el.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.add('d-none');


                    //
                    setControlArr((prevState: any) => {

                        // update temporary value
                        setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

                        return {
                            labels: [...prevState.labels, formatIndentVal(_label)],
                            values: [...prevState.values, _value]
                        }
                    });


                    currentControlValueArr.push(_value);
                    currentControlLabelArr.push(_label);

                }


                // Appropriate multi-item container height
                adjustMultiControlContainerHeight();

                // active current option
                setTimeout(() => {
                    $el.classList.add('active');
                }, 0);


            }

            //
            if (typeof (onChange) === 'function') {


                onChange?.(
                    selectInputRef.current,
                    valueInputRef.current,
                    !MULTI_SEL_VALID ? curItem : {
                        labels: currentControlLabelArr.map((v: any) => v.toString()),
                        values: currentControlValueArr.map((v: any) => v.toString()),
                        labelsOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlLabelArr.map((v: any) => v.toString())) : currentControlLabelArr.map((v: any) => v.toString()).join(','),
                        valuesOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlValueArr.map((v: any) => v.toString())) : currentControlValueArr.map((v: any) => v.toString()).join(',')
                    }
                );


                //
                selectInputRef.current.blur();
            }
        }

    }


    function updateOptionCheckboxes(type: string) {

        const _labels: any[] = [];
        const _values: any[] = [];

        [].slice.call(listContentRef.current.querySelectorAll('.mf-select-multi__control-option-item:not(.hide)')).forEach((node: any) => {

            const _label = node.dataset.label;
            const _value = node.dataset.value;


            if (type === 'remove') {
                //#########
                // remove item
                //#########
                node.dataset.selected = 'false';
                node.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.add('d-none');
                node.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.remove('d-none');

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
                node.querySelector('.mf-select-multi__control-option-checkbox-selected').classList.remove('d-none');
                node.querySelector('.mf-select-multi__control-option-checkbox-placeholder').classList.add('d-none');

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

        if (selectedSign.current) {
            updateOptionCheckboxes('remove');
        } else {
            updateOptionCheckboxes('add');
        }

        selectedSign.current = !selectedSign.current;


    }

    function handleCleanValue(event?: any) {
        if (typeof event !== 'undefined') event.preventDefault();
        // It is valid when a single selection
        const emptyValue: Record<string, string> = { label: '', value: '', queryString: '' };
        handleSelect(null, JSON.stringify(emptyValue), [], []);

        if (typeof (onChange) === 'function') {
            onChange?.(
                selectInputRef.current,
                valueInputRef.current,
                emptyValue
            );
        }

        // update temporary value
        setControlTempValue(null);

    }



    function handleMultiControlItemRemove(event: any) {
        event.preventDefault();

        const valueToRemove = String(event.currentTarget.dataset.item);
        const getCurrentIndex = controlArr.values.findIndex((item: any) => item.toString() === valueToRemove);

        let currentControlValueArr: any[] = JSON.parse(JSON.stringify(controlArr.values));
        let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(controlArr.labels));

        const _value = valueToRemove;
        const _label = controlArr.labels[getCurrentIndex];


        setControlArr((prevState: any) => {

            // update temporary value
            setControlTempValue(prevState.labels.length >= 0 ? null : (VALUE_BY_BRACKETS ? convertArrToValByBrackets(prevState.labels) : prevState.labels.join(',')));

            return {
                labels: removeItemOnce(prevState.labels, formatIndentVal(_label)),
                values: removeItemOnce(prevState.values, _value)
            }
        });

        currentControlValueArr = removeItemOnce(currentControlValueArr, _value);
        currentControlLabelArr = removeItemOnce(currentControlLabelArr, formatIndentVal(_label));


        // Appropriate multi-item container height
        adjustMultiControlContainerHeight();


        //
        if (typeof (onChange) === 'function') {

            onChange?.(
                selectInputRef.current,
                valueInputRef.current,
                {
                    labels: currentControlLabelArr.map((v: any) => v.toString()),
                    values: currentControlValueArr.map((v: any) => v.toString()),
                    labelsOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlLabelArr.map((v: any) => v.toString())) : currentControlLabelArr.map((v: any) => v.toString()).join(','),
                    valuesOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlValueArr.map((v: any) => v.toString())) : currentControlValueArr.map((v: any) => v.toString()).join(',')
                }
            );


            //
            selectInputRef.current.blur();
        }

    }



    function handleShowList() {

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


        const res = await fetchData((_params).join(','), value, false);


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


    }

    //
    function handleFocus(event: any) {

        rootRef.current?.classList.add('focus');

        // update temporary value
        setControlTempValue('');

        //
        onFocus?.(event);
    }

    function handleBlur(event: any) {
        setTimeout(() => {
            onBlur?.(event);
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
            const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.mf-select-multi__control-option-item--select-all):not(.mf-select-multi__control-option-item--clean)'));
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

        if (!isOpen) return;

        let res: any = null;

        if (key === 'Enter' || key === 'NumpadEnter') {
            event.preventDefault();

            // Determine the "active" class name to avoid listening to other unused components of the same type
            if (listRef.current === null || !rootRef.current.classList.contains('active')) return;

            // Avoid selecting options that are disabled
            if (keyboardSelectedItem.current !== null && keyboardSelectedItem.current.classList.contains('disabled')) return;

            if (listRef.current !== null) {
                const currentData = await listRef.current.dataset.data;


                if (typeof currentData !== 'undefined') {


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
                            !MULTI_SEL_VALID ? JSON.parse(currentData) : {
                                labels: currentControlLabelArr.map((v: any) => v.toString()),
                                values: currentControlValueArr.map((v: any) => v.toString()),
                                labelsOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlLabelArr.map((v: any) => v.toString())) : currentControlLabelArr.map((v: any) => v.toString()).join(','),
                                valuesOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(currentControlValueArr.map((v: any) => v.toString())) : currentControlValueArr.map((v: any) => v.toString()).join(',')
                            }
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
        if (res !== null) listRef.current.dataset.data = res.dataset.itemdata;


    }

    useEffect(() => {



        // Call a function when the component has been rendered completely
        //--------------
        onLoad?.(selectInputRef.current, valueInputRef.current, value);


        // update incoming data
        //--------------
        setIncomingData(data);


        // data init
        //--------------
        const _oparams: any[] = fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : (fetchTrigger ? '------' : ''));
        fetchData((_params).join(','), value);


        return () => {
            if (LOCK_BODY_SCROLL) clearAllBodyScrollLocks();
        }

    }, [value, options, data]);


    return (
        <>

            {label ? <><div className="mf-select__label">{typeof label === 'string' ? <label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={`label-${idRes}`} className="form-label">{label}</label>}</div></> : null}


            <span ref={blinkingPosFauxRef}></span>
            <div
                ref={rootRef}
                data-overlay-id={`mf-select__options-wrapper-${idRes}`}
                id={`mf-select__wrapper-${idRes}`}
                className={`mf-select__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'} ${MULTI_SEL_VALID ? 'multiple-selection' : ''} ${isOpen ? 'active focus' : ''}`}
                onKeyDown={handleKeyPressed}
            >


                {/* RESULT CONTAINER */}
                <div ref={rootSingleRef} className="position-relative">
                    <input
                        ref={(node) => {
                            selectInputRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }}
                        tabIndex={tabIndex || 0}
                        type="text"
                        data-overlay-id={`mf-select__options-wrapper-${idRes}`}
                        id={`label-${idRes}`}

                        // Don't use "name", it's just a container to display the label
                        data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                        data-select
                        className={`${controlClassName || controlClassName === '' ? controlClassName : "form-control"} ${controlExClassName || ''}`}
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
                        value={controlTempValue || controlTempValue === '' ? controlTempValue : (MULTI_SEL_VALID ? (VALUE_BY_BRACKETS ? convertArrToValByBrackets(formatIndentVal(controlArr.labels).map((v: any) => stripHTML(v))) : formatIndentVal(controlArr.labels).map((v: any) => stripHTML(v)).join(',')) : stripHTML(controlLabel as never))}  // do not use `defaultValue`

                        style={{ cursor: 'pointer', color: 'transparent', borderBottomWidth: MULTI_SEL_VALID ? '0' : '1px', ...style }}
                        autoComplete='off'
                        {...attributes}
                    />


                    <input
                        ref={valueInputRef}
                        type="hidden"
                        id={idRes}
                        name={name}
                        value={MULTI_SEL_VALID ? (VALUE_BY_BRACKETS ? convertArrToValByBrackets(controlArr.values) : controlArr.values.join(',')) : controlValue}  // do not use `defaultValue`
                        {...attributes}
                    />


                    {/* BLINKING CURSOR */}
                    {!MULTI_SEL_VALID ? <>
                        <span
                            className={`mf-select-multi__control-blinking-following-cursor animated ${hideBlinkingCursor() ? 'd-none' : ''}`}
                            style={{
                                left: `${blinkingPosStart}px`
                            }}
                        >
                            {BLINKING_CURSOR_STR}
                        </span>
                    </> : null}
                    {/* /BLINKING CURSOR */}



                </div>
                {/* /RESULT CONTAINER */}



                {/*
                // ++++++++++++++++++++
                // Single selection Control
                // ++++++++++++++++++++
                */}
                {!MULTI_SEL_VALID ? <div className="mf-select-single__inputplaceholder-wrapper">


                    {/* PLACEHOLDER */}
                    <div className="mf-select-single__inputplaceholder-inner" style={style}>
                        <input
                            tabIndex={tabIndex || 0}
                            type="text"
                            className={`${controlClassName || controlClassName === '' ? controlClassName : "form-control"} ${controlExClassName || ''}`}
                        />

                        <span ref={blinkingCursorPosDivRef} className={`mf-select-multi__control-blinking-cursor ${generateInputFocusStr() === BLINKING_CURSOR_STR ? 'animated' : ''}`}>
                            {controlTempValue || controlTempValue === '' ? (controlTempValue.length === 0 ? <span className={`${!hideBlinkingCursor() ? 'control-placeholder' : ''}`}>{generateInputFocusStr()}</span> : <span>{controlTempValue}</span>) : (stripHTML(controlLabel as never).length === 0 ? <span className={`${!hideBlinkingCursor() ? 'control-placeholder' : ''}`}>{generateInputFocusStr()}</span> : <span>{stripHTML(controlLabel as never)}</span>)}
                        </span>

                    </div>


                    {/* /PLACEHOLDER */}


                    {/* ARROW */}
                    <span className="arrow position-absolute top-0 end-0 me-2 mt-1" style={{ translate: 'all .2s', transform: isOpen ? 'rotate(180deg) translateY(-4px)' : 'rotate(0) translateY(0)', pointerEvents: 'none', display: fetchTrigger ? 'none' : 'inline-block' }}>
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
                    {fetchTrigger ? <>
                        <span className="mf-select-multi__control-searchbtn position-absolute top-0 end-0">
                            <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" onClick={(e: React.MouseEvent) => {
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
                {MULTI_SEL_VALID ? <div ref={rootMultiRef} className="mf-select-multi__inputplaceholder-wrapper">


                    {/* PLACEHOLDER */}
                    <div className="mf-select-multi__inputplaceholder-inner">
                        <div>
                            <ul className="mf-select-multi__list">

                                {typeof multiSelectSelectedItemOnlyStatus !== 'undefined' ? <>

                                    <li className="mf-select-multi__list-item-statusstring">
                                        {typeof multiSelectSelectedItemOnlyStatus.itemsLabel === 'string' && controlArr.labels.length > 0 && controlArr.labels.length < optionsData.length ? multiSelectSelectedItemOnlyStatus.itemsLabel.replace('{num}', controlArr.labels.length) : null}
                                        {typeof multiSelectSelectedItemOnlyStatus.noneLabel === 'string' && controlArr.labels.length === 0 ? multiSelectSelectedItemOnlyStatus.noneLabel : null}
                                        {typeof multiSelectSelectedItemOnlyStatus.allItemsLabel === 'string' && controlArr.labels.length === optionsData.length ? multiSelectSelectedItemOnlyStatus.allItemsLabel : null}

                                        {/*-----*/}
                                        {typeof multiSelectSelectedItemOnlyStatus.itemsLabel !== 'string' && controlArr.labels.length > 0 ? MULTI_SEL_SELECTED_STATUS.itemsLabel.replace('{num}', controlArr.labels.length) : null}
                                        {typeof multiSelectSelectedItemOnlyStatus.noneLabel !== 'string' && controlArr.labels.length === 0 ? MULTI_SEL_SELECTED_STATUS.noneLabel : null}
                                        {typeof multiSelectSelectedItemOnlyStatus.allItemsLabel !== 'string' && controlArr.labels.length === optionsData.length ? MULTI_SEL_SELECTED_STATUS.allItemsLabel : null}

                                    </li>
                                </> : <>
                                    {controlArr.labels.map((item: any, index: number) => (
                                        <li key={index}>
                                            {stripHTML(item)}

                                            <a href="#" tabIndex={-1} onClick={handleMultiControlItemRemove} data-item={controlArr.values[index]}><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a>
                                        </li>
                                    ))}

                                    <li className={`mf-select-multi__list-item-placeholder ${typeof placeholder === 'undefined' || placeholder === '' ? 'hide' : ''}`}>
                                        <span ref={blinkingCursorPosDivRef} className={`mf-select-multi__control-blinking-cursor ${hideBlinkingCursor() ? 'control-placeholder' : ''} ${generateInputFocusStr() === BLINKING_CURSOR_STR ? 'animated' : ''}`}>
                                            {generateInputFocusStr()}

                                            {/* BLINKING CURSOR */}
                                            <span
                                                className={`mf-select-multi__control-blinking-following-cursor mf-select-multi__control-blinking-following-cursor--puretext animated ${hideBlinkingCursor() ? 'd-none' : ''}`}
                                            >
                                                {BLINKING_CURSOR_STR}
                                            </span>
                                            {/* /BLINKING CURSOR */}

                                        </span>



                                    </li>
                                </>}

                            </ul>

                        </div>

                    </div>
                    {/* /PLACEHOLDER */}




                    {/* ARROW */}
                    <span className="arrow position-absolute top-0 end-0 me-2 mt-1" style={{ translate: 'all .2s', transform: isOpen ? 'rotate(180deg) translateY(-4px)' : 'rotate(0) translateY(0)', pointerEvents: 'none', display: fetchTrigger ? 'none' : 'inline-block' }}>
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
                    {fetchTrigger ? <>
                        <span className="mf-select-multi__control-searchbtn position-absolute top-0 end-0">
                            <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" onClick={(e: React.MouseEvent) => {
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
                    <RootPortal show={true} containerClassName="MultiFuncSelect">

                        <div
                            ref={listRef}
                            id={`mf-select__options-wrapper-${idRes}`}
                            className={`mf-select__options-wrapper list-group position-absolute border shadow small ${winWidth ? '' : ''}`}
                            style={{ zIndex: DEPTH, width: WIN_WIDTH, display: 'none' }}
                            role="tablist"
                        >

                            <div
                                className="mf-select__options-contentlist rounded"
                                style={{ backgroundColor: 'var(--bs-list-group-bg)' }}
                                ref={listContentRef}
                            >
                                <div className="mf-select__options-contentlist-inner">

                                    {/* SELECT ALL BUTTON */}
                                    {MULTI_SEL_VALID ? <>
                                        <span
                                            tabIndex={-1}
                                            className="list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light mf-select-multi__control-option-item--select-all position-sticky top-0 z-3"
                                            role="tab"
                                            style={{ display: multiSelect?.selectAll ? 'block' : 'none' }}
                                        >
                                            <span
                                                tabIndex={-1}
                                                className="btn btn-secondary"
                                                dangerouslySetInnerHTML={{
                                                    __html: `${MULTI_SEL_LABEL}`
                                                }}
                                                onClick={handleSelectAll}
                                            ></span>
                                        </span>
                                    </> : null}
                                    {/* /SELECT ALL BUTTON */}



                                    {/* CLEAN BUTTON (Only Single selection) */}
                                    {!MULTI_SEL_VALID ? <>
                                        {CLEAN_TRIGGER_VALID ? <>
                                            <span
                                                tabIndex={-1}
                                                className="list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light mf-select-multi__control-option-item--clean position-sticky top-0 z-3"
                                                role="tab"
                                            >
                                                <span
                                                    tabIndex={-1}
                                                    className="btn btn-secondary"
                                                    dangerouslySetInnerHTML={{
                                                        __html: `${CLEAN_TRIGGER_LABEL}`
                                                    }}
                                                    onClick={handleCleanValue}
                                                ></span>
                                            </span>
                                        </> : null}
                                    </> : null}
                                    {/* /CLEAN BUTTON (Only Single selection) */}


                                    {/* NO MATCH */}
                                    <button tabIndex={-1} type="button" className="list-group-item list-group-item-action no-match border-0 mf-select-multi__control-option-item--nomatch hide" disabled>{fetchNoneInfo || 'No match yet'}</button>
                                    {/* /NO MATCH */}


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
                                                className={`list-group-item list-group-item-action border-start-0 border-end-0 mf-select-multi__control-option-item ${startItemBorder} ${endItemBorder} border-bottom-0 ${typeof item.disabled === 'undefined' ? '' : (item.disabled == true ? 'disabled' : '')} ${disabledCurrentOption ? 'active disabled' : ''}`}
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
                                                className={`list-group-item list-group-item-action border-start-0 border-end-0 mf-select-multi__control-option-item ${startItemBorder} ${endItemBorder} border-bottom-0 ${itemSelected ? 'list-group-item-secondary item-selected' : ''} ${typeof item.disabled === 'undefined' ? '' : (item.disabled == true ? 'disabled' : '')}`}
                                                data-value={`${item.value}`}
                                                data-label={`${item.label}`}
                                                data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`}
                                                data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                                                data-itemdata={JSON.stringify(item)}
                                                role="tab"
                                                onClick={handleSelect}
                                            >
                                                <var className={`me-1 mf-select-multi__control-option-checkbox-selected ${itemSelected ? '' : 'd-none'}`}>
                                                    <svg width="1.2em" height="1.2em" fill="#000000" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>

                                                </var>

                                                <var className={`me-1 mf-select-multi__control-option-checkbox-placeholder ${itemSelected ? 'd-none' : ''}`}>
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

export default MultiFuncSelect;
