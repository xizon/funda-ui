import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';

import RootPortal from 'funda-root-portal';

import useComId from 'funda-utils/dist/cjs/useComId';
import useWindowScroll from 'funda-utils/dist/cjs/useWindowScroll';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import {
    extractorExist,
    extractContentsOfBraces,
    extractContentsOfBrackets,
} from 'funda-utils/dist/cjs/extract';
import {
    convertArrToValByBraces
} from 'funda-utils/dist/cjs/convert';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import {
    addTreeDepth,
    addTreeIndent
} from 'funda-utils/dist/cjs/tree';
import {
    htmlToPlain
} from 'funda-utils/dist/cjs/format-string';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



import Group from './Group';



export type CascadingSelectE2EOptionChangeFnType = (input: any, currentData: any, index: any, depth: any, value: any, closeFunc: any) => void;


export interface fetchArrayConfig {
    fetchFuncAsync?: any | undefined;
    fetchFuncMethod?: string | undefined;
    fetchFuncMethodParams?: any[] | undefined;
    fetchCallback?: (data: any) => void;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
}

export type CascadingSelectE2EProps = {
    popupRef?: React.ForwardedRef<any>; // could use "Array" on popupRef.current, such as popupRef.current[0], popupRef.current[1]
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    perColumnHeadersShow?: boolean;
    exceededSidePosOffset?: number;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    placeholder?: string;
    disabled?: any;
    required?: any;
    /** Whether to use curly braces to save result and initialize default value */
    extractValueByBraces?: boolean;
    /** Instead of using `parent_id` of response to match child and parent data 
     * (very useful for multiple fetch requests with no directly related fields), 
     * this operation will directly use the click event to modify the result. */
    destroyParentIdMatch?: boolean;
    /** Set headers for each column group */
    columnTitle?: any[];
    /** Set whether to use "label" or "value" for the value of this form
     * Optional values: `label`, `value`
     */
    valueType?: string;
    /** Whether to display the close button. */
    showCloseBtn?: boolean;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Set a loader component to show while the component waits for the next load of data. 
     * e.g. `<span>Loading...</span>` or any fancy loader element */
    loader?: React.ReactNode;
    /** Whether to show breadcrumb result */
    displayResult?: boolean;
    /** Set an arrow of breadcrumb result */
    displayResultArrow?: React.ReactNode;
    /** Set an arrow of control */
    controlArrow?: React.ReactNode;
    /** Specify a class for trigger. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
    /** Specify a class for clean node button. */
    cleanNodeBtnClassName?: string;
    /** Set a piece of text or HTML code for the clean node button */
    cleanNodeBtnContent?: React.ReactNode;
    /** Configuration for multiple requests */
    fetchArray?: fetchArrayConfig[];
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onFetch?: (data: any, childrenData: any) => void;
    onChange?: CascadingSelectE2EOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};


const CascadingSelectE2E = (props: CascadingSelectE2EProps) => {
    const {
        popupRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
        searchable = false,
        searchPlaceholder = '',
        perColumnHeadersShow = true,
        exceededSidePosOffset,
        disabled,
        required,
        value,
        label,
        placeholder,
        name,
        id,
        extractValueByBraces,
        destroyParentIdMatch,
        columnTitle,
        depth,
        loader,
        displayResult,
        displayResultArrow,
        controlArrow,
        valueType,
        showCloseBtn,
        style,
        tabIndex,
        triggerClassName,
        triggerContent,
        cleanNodeBtnClassName,
        cleanNodeBtnContent,
        fetchArray,
        onFetch,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const DEPTH = depth || 1055;  // the default value same as bootstrap
    const POS_OFFSET = 0;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const VALUE_BY_BRACES = typeof extractValueByBraces === 'undefined' ? true : extractValueByBraces;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const listRef = useRef<any>(null);

    // searchable
    const [columnSearchKeywords, setColumnSearchKeywords] = useState<string[]>([]);


    // exposes the following methods
    useImperativeHandle(
        popupRef,
        () => ({
            close: () => {
                cancel();
            },
        }),
        [popupRef],
    );

    


    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // DO NOT USE `useState()` for `allData`,, `optData`, `dictionaryData`, `listData`, `selectedData`, `selectedDataByClick`,  
    // because the list uses vanilla JS DOM events which will cause the results of useState not to be displayed in real time.
    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    // current data depth (GLOBAL)
    const [currentDataDepth, setCurrentDataDepth] = useState<number>(0);

    // all data from fetched data (GLOBAL)
    const allData = useRef<any[]>([]);

    // options data (GLOBAL)
    const optData = useRef<any[]>([]);


    // dictionary data
    const dictionaryData = useRef<any[]>([]);

    const [loading, setLoading] = useState<boolean>(false);
    const [columnTitleData, setColumnTitleData] = useState<any[]>([]);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [firstDataFeched, setFirstDataFeched] = useState<boolean>(false);
    const [changedVal, setChangedVal] = useState<string>(value || '');

    //for variable 
    const listData = useRef<any[]>([]);
    const selectedData = useRef<any>({
        labels: [],
        values: [],
        queryIds: []
    });

    // destroy `parent_id` match
    const selectedDataByClick = useRef<any>({
        labels: [],
        values: [],
        queryIds: []
    });

    const [isShow, setIsShow] = useState<boolean>(false);



    // click outside
    useClickOutside({
        enabled: isShow && rootRef.current && listRef.current,
        isOutside: (event: any) => {

            // close dropdown when other dropdown is opened
            return (
                (rootRef.current !== event.target && !rootRef.current.contains(event.target as HTMLElement)) &&
                listRef.current !== event.target && !listRef.current.contains(event.target as HTMLElement)
            )
              
        },
        handle: (event: any) => {
            cancel();
        }
    }, [isShow, rootRef, listRef]);



    // Add function to the element that should be used as the scrollable area.
    const [scrollData, windowScrollUpdate] = useWindowScroll({
        performance: ['debounce', 500],   // "['debounce', 500]" or "['throttle', 500]"
        handle: (scrollData: any) => {
            popwinPosInit(false);
        }
    });



    function popwinPosInit(showAct: boolean = true) {
        if (rootRef.current === null || valRef.current === null) return;


        // update modal position
        const _modalRef: any = document.querySelector(`#cas-select-e2e__items-wrapper-${idRes}`);
        const _triggerRef: any = valRef.current;
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
        if (showAct) _modalRef.classList.add('active');


        // STEP 2:
        //-----------
        // Detect position
        if (window.innerHeight - _triggerBox.top > 100) {
            targetPos = 'bottom';
        } else {
            targetPos = 'top';
        }


        // STEP 3:
        //-----------
        // Adjust position
        if (targetPos === 'top') {
            _modalRef.style.left = x + 'px';
            //_modalRef.style.top = y - POS_OFFSET - (listRef.current.clientHeight) - 2 + 'px';
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



        // STEP 4:
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



    }



    function popwinPosHide() {

        const _modalRef: any = document.querySelector(`#cas-select-e2e__items-wrapper-${idRes}`);

        if (_modalRef !== null) {
            // remove classnames and styles
            _modalRef.classList.remove('active');

        }

    }



    function updateColDisplay(useFetch: boolean, emptyAction: boolean = false, level: number | undefined) {
        if (listRef.current === null) return;

        let latestDisplayColIndex: number = 0;
        const currentItemsInner: any = listRef.current.querySelector('.cas-select-e2e__items-inner');
        if (currentItemsInner !== null) {
            const colItemsWrapper = [].slice.call(currentItemsInner.querySelectorAll('.cas-select-e2e__items-col'));
            colItemsWrapper.forEach((perCol: any) => {
                perCol.classList.remove('hide-col');
            });

            colItemsWrapper.some((perCol: any, i: number) => {
                const hasActive = [].slice.call(perCol.querySelectorAll('[data-opt]')).some((el: HTMLElement) => el.classList.contains('active'));
                if (!hasActive) {
                    latestDisplayColIndex = i;
                    return true;
                }
                return false;
            });

            // remove columns behind the current empty trigger
            colItemsWrapper.forEach((perCol: any, i: number) => {
                if (!emptyAction) {
                    if (useFetch) {
                        if (i > latestDisplayColIndex && latestDisplayColIndex > 0) perCol.classList.add('hide-col');
                    } else {
                        if (i === latestDisplayColIndex && latestDisplayColIndex > 0) perCol.classList.add('hide-col');
                    }
                } else {
                    if (typeof level !== 'undefined' && Number.isInteger(level)) {
                        if (i > level) perCol.classList.add('hide-col');
                    }

                }



            });
        }


    }


    function cancel() {
        // hide list
        setIsShow(false);
        popwinPosHide();
    }

    function activate() {
        // show list
        setIsShow(true);

        // Execute the fetch task
        if (!firstDataFeched) {
            setLoading(true);
            setFirstDataFeched(true);
            doFetch(false, currentDataDepth, 0, false);
        }

        // window position
        setTimeout(() => {
            popwinPosInit();
        }, 0);


    }

    async function fetchData(_fetchArray: any, params: string, dataDepth: number, parentId: number = 0) {


        const fetchFuncAsync = _fetchArray.fetchFuncAsync;
        const fetchFuncMethod = _fetchArray.fetchFuncMethod;
        const fetchCallback = _fetchArray.fetchCallback;

        //
        const hierarchical = _fetchArray.hierarchical;
        const indentation = _fetchArray.indentation;
        const doubleIndent = _fetchArray.doubleIndent;
        const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
        const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;



        if (typeof fetchFuncAsync === 'object') {

            //
            setLoading(true);

            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA: any[] = response.data;
            let _TEMP_ALL_DATA: any[] = [];

            // loading 
            setLoading(false);

            if (typeof _ORGIN_DATA[0] === 'undefined') return;

            // reset data structure
            if (typeof (fetchCallback) === 'function') {
                _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }


            // Determine whether the data structure matches
            if (_ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].id === 'undefined') {
                console.warn('The data structure does not match, please refer to the example in the component documentation.');
                setHasErr(true);
                _ORGIN_DATA = [];
            }


            // STEP 0-1: ===========
            // Set hierarchical categories ( with sub-categories )
            if (hierarchical) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }


            // STEP 0-2: ===========
            // add data depth
            _ORGIN_DATA.forEach((item: any) => {
                item.itemDepth = dataDepth;
            });



            if (dataDepth === 0) {

                // STEP 1: ===========
                // all data from fetched data 
                _TEMP_ALL_DATA = JSON.parse(JSON.stringify(_ORGIN_DATA));
                allData.current = _TEMP_ALL_DATA;

                // STEP 2: ===========
                // dictionary data (orginal)
                dictionaryData.current = _TEMP_ALL_DATA;


            }
            if (dataDepth > 0) {

                // STEP 1: ===========
                // all data from fetched data  
                _TEMP_ALL_DATA = allData.current;
                addChildrenOpt(_TEMP_ALL_DATA, parentId, _ORGIN_DATA);

                // STEP 2: ===========
                // dictionary data (orginal)
                dictionaryData.current = _TEMP_ALL_DATA;


            }


            // STEP 3: ===========
            // Add an empty item to each list to support empty item selection
            const _EMPTY_SUPPORTED_DATA = JSON.parse(JSON.stringify(_TEMP_ALL_DATA));
            addEmptyOpt(_EMPTY_SUPPORTED_DATA, 0);



            // STEP 4: ===========
            // Turn the data of each group into an array
            let _temp_optData;
            if (dataDepth === 0) {

                _temp_optData = [_EMPTY_SUPPORTED_DATA];
                optData.current = _temp_optData;
                listData.current = _temp_optData;
            }

            if (dataDepth > 0) {
                _temp_optData = listData.current;

                // Add an empty item to each list to support empty item selection
                addEmptyOpt(_ORGIN_DATA, 0);

                const childList = _ORGIN_DATA;
                _temp_optData[dataDepth] = childList;


                optData.current = _temp_optData;
                listData.current = optData.current;
            }

            // STEP 5: ===========
            //
            onFetch?.(_EMPTY_SUPPORTED_DATA, _ORGIN_DATA);



            // STEP 6: ===========
            // update column display with DOM
            updateColDisplay(true, false, undefined);



            return [_ORGIN_DATA, _EMPTY_SUPPORTED_DATA];


        } else {
            return [];
        }


    }


    //
    function doFetch(dataDepthMax: boolean, dataDepth: number = 0, parentId: number = 0, emptyAction: boolean = false) {

        // if empty selection is selected
        if (emptyAction) return;

        // If the depth is max, no more requests
        if (dataDepthMax) return;


        // other
        if (typeof fetchArray![dataDepth] === 'undefined') return new Promise((resolve, reject) => resolve([[], []]));

        // data fetch action
        const _oparams: any[] = fetchArray![dataDepth].fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_ID' ? item : parentId);
        return fetchData(fetchArray![dataDepth], (_params).join(','), dataDepth, parentId);
    }



    function handleFocus(event: any) {
        rootRef.current?.classList.add('focus');

        //
        handleDisplayOptions(null);

        //
        onFocus?.(event);
    }


    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current?.classList.remove('focus');


        //
        onBlur?.(event);
    }



    function handleDisplayOptions(event: any) {
        if (event) event.preventDefault();

        //
        activate();

    }


    function handleClickItem(e: any, resValue: any, index: number, level: number, curData: any[]) {
        e.preventDefault();

        const dataDepthMax: boolean = resValue.itemDepth === fetchArray!.length - 1;
        const parentId: number = e.currentTarget.dataset.query;
        const emptyAction: boolean = resValue.id.toString().indexOf('$EMPTY_ID_') < 0 ? false : true;


        // update data depth
        //////////////////////////////////////////
        setCurrentDataDepth((prevState) => {
            const _currentDataDepth = resValue.itemDepth + 1;


            // update column display with DOM
            //////////////////////////////////////////
            updateColDisplay(false, emptyAction, level);

            // Execute the fetch task
            //////////////////////////////////////////
            doFetch(dataDepthMax, _currentDataDepth, parentId, emptyAction)?.then((res: any) => {

                // if no data is available with request, close the modal
                if (typeof res === 'undefined') {
                    updateColDisplay(false, true, level); // clean rest colums hardhanded 
                    cancel();
                }

            });

            return _currentDataDepth;

        });


        //update selected data by clicked item
        //////////////////////////////////////////
        updateValueByClickedItem(resValue, level);


        // update value
        //////////////////////////////////////////
        const inputVal = updateValue(dictionaryData.current, resValue.id, level);

        // callback
        //////////////////////////////////////////
        if (typeof (onChange) === 'function') {
            onChange(valRef.current, resValue, index, level, inputVal, cancel);
        }


        // update data
        //////////////////////////////////////////
        let newData: any = curData;  // such as: [Array(6), Array(3)]

        // remove Duplicate objects from JSON Array
        newData = newData.filter((item: any, index: number, self: any) => index === self.findIndex((t: any) => (JSON.stringify(t) === JSON.stringify(item))));


        // All the elements from start(array.length - start) to the end of the array will be deleted.
        newData.splice(level + 1);

        // active status
        if (resValue.children) {
            const childList = resValue.children;
            markAllItems(childList);
            newData[level + 1] = childList;
        }

        markCurrent(newData[level], index);



        // close modal
        //////////////////////////////////////////
        if (dataDepthMax && resValue.id.toString().indexOf('$EMPTY_ID_') < 0) {

            //
            cancel();

            // update data depth
            setCurrentDataDepth(0);
        }

        // active current option with DOM
        //////////////////////////////////////////
        const currentItemsInner: any = e.currentTarget.closest('.cas-select-e2e__items-inner');
        if (currentItemsInner !== null) {
            curData.forEach((v: any, col: number) => {
                const colItemsWrapper = currentItemsInner.querySelectorAll('.cas-select-e2e__items-col');
                colItemsWrapper.forEach((perCol: HTMLUListElement) => {
                    const _col = Number(perCol.dataset.col);

                    if (_col >= level) {
                        [].slice.call(perCol.querySelectorAll('[data-opt]')).forEach((node: HTMLElement) => {
                            node.classList.remove('active');
                        });
                    }
                });
            });


            // not header option
            if (typeof e.currentTarget.dataset.optHeader === 'undefined') e.currentTarget.classList.add('active');


        }




    }



    /**
     * Active the selected item
    * @param arr 
    * @param index 
    * @returns 
    */
    function markCurrent(arr: any[], index: number) {
        if (!Array.isArray(arr)) return;

        // click an item
        //////////////////////////////////////////
        for (let i = 0; i < arr.length; i++) {
            if (i === index) {
                arr[i].current = true;
            } else {
                arr[i].current = false;
            }
        }

        // return result
        //////////////////////////////////////////
        return arr;
    }

    /**
     * Deactivate all items
     * @param arr 
     * @returns 
     */
    function markAllItems(arr: any[]) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].current = false;
            if (arr[i].children) markAllItems(arr[i].children);
        }
    }



    function updateValue(arr: any[], targetVal: any, level: number | boolean = false) {

        const inputEl: any = valRef.current;
        let _valueData: any, _labelData: any, _queryIdsData: any;


        if (targetVal.toString().indexOf('$EMPTY_ID_') >= 0) {

            // If clearing the current column
            //////////////////////////////////////////
            _valueData = selectedData.current.values;
            _labelData = selectedData.current.labels;
            _queryIdsData = selectedData.current.queryIds;

            // update result to input
            _valueData.splice(level);
            _labelData.splice(level);
            _queryIdsData.splice(level);

            //
            selectedData.current = {
                labels: _labelData,
                values: _valueData,
                queryIds: _queryIdsData,
            };



        } else {


            // click an item
            //////////////////////////////////////////
            //search JSON key that contains specific string
            const _labels = queryResultOfJSON(arr, targetVal, 'value');
            const _values = queryResultOfJSON(arr, targetVal, 'key');
            const _queryIds = queryResultOfJSON(arr, targetVal, 'query');



            // update result to input
            _valueData = _values ? _values.map((item: any) => item) : [];
            _labelData = _labels ? _labels.map((item: any) => item) : [];
            _queryIdsData = _queryIds ? _queryIds.map((item: any) => item) : [];

            //
            selectedData.current = {
                labels: _labelData,
                values: _valueData,
                queryIds: _queryIdsData,
            };



        }


        // update selected data 
        //////////////////////////////////////////
        if (destroyParentIdMatch) {
            _valueData = selectedDataByClick.current.values;
            _labelData = selectedDataByClick.current.labels;
            _queryIdsData = selectedDataByClick.current.queryIds;
        }

        const inputVal_0 = VALUE_BY_BRACES ? convertArrToValByBraces(_valueData.map((item: any, i: number) => `${item}[${_queryIdsData[i]}]`)) : _valueData.map((item: any, i: number) => `${item}[${_queryIdsData[i]}]`)!.join(',');
        const inputVal_1 = VALUE_BY_BRACES ? convertArrToValByBraces(_labelData.map((item: any, i: number) => `${item}[${_queryIdsData[i]}]`)) : _labelData.map((item: any, i: number) => `${item}[${_queryIdsData[i]}]`)!.join(',');

        if (valueType === 'value') {
            if (inputEl !== null) setChangedVal(inputVal_0);
        } else {
            if (inputEl !== null) setChangedVal(inputVal_1);
        }

        return {
            0: inputVal_0,
            1: inputVal_1
        }

    }

    function updateValueByClickedItem(targetData: any, level: number) {

        //update selected data by clicked item
        //////////////////////////////////////////
        const _valueData = selectedDataByClick.current.values.slice(0, level + 1);
        const _labelData = selectedDataByClick.current.labels.slice(0, level + 1);
        const _queryIdsData = selectedDataByClick.current.queryIds.slice(0, level + 1);

        _valueData.splice(level, 1, targetData.id);
        _labelData.splice(level, 1, targetData.name);
        if (Array.isArray(_queryIdsData)) _queryIdsData.splice(level, 1, targetData.queryId);


        selectedDataByClick.current = {
            labels: _labelData.filter((v: any) => v != ''),
            values: _valueData.filter((v: any) => v.toString().indexOf('$EMPTY_ID_') < 0),
            queryIds: Array.isArray(_queryIdsData) ? _queryIdsData.filter((v: any) => v != undefined) : _labelData.filter((v: any) => v != ''),
        };

    }


    function cleanValue() {
        selectedData.current = {
            labels: [],
            values: [],
            queryIds: []
        };

        selectedDataByClick.current = {
            labels: [],
            values: [],
            queryIds: []
        };

        listData.current = [];
        allData.current = [];
        optData.current = [];
        dictionaryData.current = [];

        setChangedVal('');
        setFirstDataFeched(false);

    }

    function chkValueExist(v: any) {
        return typeof v !== 'undefined' && v !== '';
    }

    
    function initDefaultValue(defaultValue: any) {

    
        // STEP 1:
        // Determine whether the splicing value of the default value is empty
        //--------------------------------  
        if (chkValueExist(defaultValue)) {

            // if the default value uses the pure string
            if (!extractorExist(defaultValue)) {

                //Set a default value
                selectedData.current = {
                    labels: [defaultValue],
                    values: [''],
                    queryIds: ['']
                };

                selectedDataByClick.current = {
                    labels: [defaultValue],
                    values: [''],
                    queryIds: ['']
                };
                setChangedVal(defaultValue);

                return; // required RETURN

            }


            //
            const formattedDefaultValue = VALUE_BY_BRACES ? extractContentsOfBraces(defaultValue) : defaultValue.split(',');
            const emptyDefaultValueCheck = Array.isArray(formattedDefaultValue) ? formattedDefaultValue.every((item: any, index: number) => {
                if (item !== '[]') {
                    return false;
                }

                return true;
            }) : true;

            if (emptyDefaultValueCheck) {
                cleanValue();
                return; // required RETURN
            }
        }

        // STEP 2:
        // change the value to trigger component rendering
        //--------------------------------  
        if (!chkValueExist(defaultValue)) {
            cleanValue();
            return; // required RETURN
        } else {
            setChangedVal(defaultValue);
        }


        // STEP 3:
        // update the status of the first fetch
        //--------------------------------  
        setFirstDataFeched(true);


        // STEP 4:
        // do fetch
        //--------------------------------  
        doFetch(false, 0, 0, false)?.then((firstColResponse: any) => {


            const _ORGIN_DATA: any[] = firstColResponse[0];
            const _CHILDREN_DATA: any[] = firstColResponse[1];
            let activedIndex: any;
            const allFetch: any[] = [];

            const rowQueryAttr: string = valueType === 'value' ? 'id' : 'name';
            const targetVal: any = defaultValue.match(/(\[.*?\])/gi)!.map((item: any, i: number) => VALUE_BY_BRACES ? extractContentsOfBraces(defaultValue)[i].replace(item, '') : defaultValue.split(',')[i].replace(item, ''));
            const queryIds: any = extractContentsOfBrackets(defaultValue);

            //
            let _TEMP_ALL_DATA: any[] = [];

            //
            const _allColumnsData: any[] = [];
            const _allLables: any[] = [];
            const _allValues: any[] = [];


            // loop over each column
            //////////////////////////////////////////
            for (let col = 0; col <= targetVal.length; col++) {

                if (col === 0) {

                    // STEP 1: ===========
                    //active item from current column
                    const newData: any[] = JSON.parse(JSON.stringify(_CHILDREN_DATA));
                    activedIndex = _CHILDREN_DATA.findIndex((item: any) => {
                        return item[rowQueryAttr].toString() === targetVal[col].toString();
                    });

                    markAllItems(newData);
                    markCurrent(newData, activedIndex);


                    // STEP 2: ===========
                    // all data from fetched data 
                    _TEMP_ALL_DATA = _ORGIN_DATA;

                    // STEP 3: ===========
                    // dictionary data (orginal)
                    // Same as the `STEP 2`


                    // STEP 4: ===========
                    // update result data
                    if (activedIndex !== -1) {
                        _allLables.push(newData[activedIndex].name);
                        _allValues.push(newData[activedIndex].id);
                    }

                    _allColumnsData.push(newData);



                }

                if (col > 0) {
                    allFetch.push(doFetch(false, col, queryIds[col - 1], false));
                }


            }

            // fetch all columns except the first
            //////////////////////////////////////////
            Promise.all(allFetch).then((values) => {


                values.filter((v: any) => typeof v !== 'undefined').forEach((colResponse: any, i: number) => {

                    const _CURRENT_COL_DATA: any[] = colResponse[0];
                    const curDepth: number = i + 1;

                    // STEP 1: ===========
                    //active item from current column
                    const newData: any[] = JSON.parse(JSON.stringify(_CURRENT_COL_DATA));
                    activedIndex = newData.findIndex((item: any) => {
                        if (typeof targetVal[curDepth] !== 'undefined') {
                            return item[rowQueryAttr].toString() === targetVal[curDepth].toString();
                        }
                    });

                    markAllItems(newData);
                    markCurrent(newData, activedIndex);

                    // STEP 2: ===========
                    // all data from fetched data 
                    if (typeof values[curDepth] !== 'undefined') {
                        const childList = values[curDepth][0];

                        // if the value of some column is not fetched
                        if (typeof newData[activedIndex] !== 'undefined') newData[activedIndex].children = childList;

                    }



                    _TEMP_ALL_DATA.forEach((item: any) => {
                        if (item.id === queryIds[i]) item.children = newData;
                    });


                    // STEP 3: ===========
                    // dictionary data (orginal)
                    dictionaryData.current = newData;


                    // STEP 4: ===========
                    // update result data
                    if (activedIndex !== -1) {
                        _allLables.push(newData[activedIndex].name);
                        _allValues.push(newData[activedIndex].id);
                    }

                    _allColumnsData.push(newData);


                    return true;

                });


                // STEP 5: ===========
                // all data from fetched data 
                allData.current = _TEMP_ALL_DATA;

                // STEP 6: ===========
                // dictionary data (orginal)
                dictionaryData.current = _TEMP_ALL_DATA;


                // STEP 7: ===========
                //update data
                optData.current = _allColumnsData;
                listData.current = _allColumnsData;


                // STEP 8: ===========
                //Set a default value
                selectedData.current = {
                    labels: _allLables,
                    values: _allValues,
                    queryIds: queryIds,
                };

                selectedDataByClick.current = {
                    labels: _allLables,
                    values: _allValues,
                    queryIds: queryIds,
                };




            });



        });


    }



    function fillColumnTitle() {

        const dataDepth = fetchArray!.length;
        const oldColumnTitleData = columnTitle ? columnTitle : [];
        const newColumnTitleData = new Array(dataDepth)?.fill('');
        oldColumnTitleData!.forEach((item: any, index: number) => {
            newColumnTitleData[index] = item;
        });

        //
        if (oldColumnTitleData.length > dataDepth) {
            newColumnTitleData.splice(dataDepth, oldColumnTitleData.length - dataDepth);
        }

        setColumnTitleData(newColumnTitleData);
    }


    function addChildrenOpt(obj: any[], parentId: number, childrenData: any[]) {


        // Traverse the results obtained by all fetch
        obj.forEach((item: any) => {

            // !!!IMPORTANT:
            // You need to put the contents of other columns after fetch into the "children" attribute
            if (item.id === parentId) item.children = childrenData;

            if (item.children) {
                addChildrenOpt(item.children, parentId, childrenData);
            }
        });
    }


    function addEmptyOpt(obj: any[], index: number) {

        index++;

        obj.unshift({
            id: "$EMPTY_ID_" + index,
            name: "",
            itemDepth: obj.length === 0 ? 0 : obj[0].itemDepth
        });

        obj.forEach((item: any, depth: number) => {
            if (item.children) {
                addEmptyOpt(item.children, index * (depth + 1));
            }
        });
    }

    function queryResultOfJSON(data: any[], targetVal: any, returnType: string) {

        let callbackValueNested: any[] = [];
        let lastFirstLevelName = '';
        let loop = true;
        let resDepth = 0;
        const rowQueryAttr = 'id';

        const getIndexOf = function (arr: any[], val: any) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][rowQueryAttr].toString() === val.toString()) return i;
            }
            return -1;
        };


        const searchJsonStr = function (list: any[], depth?: any) {

            // `depth` is very important, it is used to accurately judge the final result
            if (typeof (depth) === 'undefined') {
                depth = 0;
            } else {
                depth++;
            }

            for (let i = 0; i < list.length; i++) {

                const row = list[i];
                let callbackValue: any;

                if (returnType === 'key') callbackValue = row[rowQueryAttr].toString();
                if (returnType === 'value') callbackValue = row.name.toString();
                if (returnType === 'query') callbackValue = typeof row.queryId !== 'undefined' ? row.queryId.toString() : '';


                if (loop) {
                    // get first-level item
                    if (getIndexOf(data, row[rowQueryAttr]) !== -1) {
                        callbackValueNested.push(callbackValue as never);
                        lastFirstLevelName = callbackValue;
                    }

                    // get child-level item
                    if (row.children) {
                        callbackValueNested.push(callbackValue as never);
                    }

                }


                //check the value
                if (row[rowQueryAttr].toString() === targetVal.toString()) {
                    callbackValueNested.push(callbackValue as never);
                    loop = false;
                    resDepth = depth;
                    break;
                }

                // Note: Recursion must be placed here
                if (loop) {
                    if (row.children) {
                        searchJsonStr(row.children, depth);
                    }
                }


            }


        }
        searchJsonStr(data);


        // (1) Remove duplicate values
        //------------------------------------------
        callbackValueNested = callbackValueNested.filter(function (item, index, arr) {
            return arr.indexOf(item, 0) === index;
        });


        // (2) Delete needless first-level
        //------------------------------------------
        let resAll = callbackValueNested.slice(callbackValueNested.indexOf(lastFirstLevelName as never), callbackValueNested.length)


        // (3) Returns result
        //------------------------------------------
        if (resAll.length > 1) {
            // Get first-level item
            resAll.splice(1);

            // Get child-level item
            let resChild = callbackValueNested.slice(-resDepth); // Get the last elements in reverse

            // Combine
            resAll = resAll.concat(resChild);

        }

        return resAll;

    }

    function displayInfo(destroyParentId: boolean) {

        const _data = destroyParentId ? selectedDataByClick.current : selectedData.current;
        let formattedDefaultValue: any = changedVal !== '' ? VALUE_BY_BRACES ? extractContentsOfBraces(changedVal) : changedVal.split(',') : [];
        let _labels = Array.isArray(_data.labels) && _data.labels.length > 0 ? _data.labels : [];

        // Prevent value from being a pure string that does not include "[]"
        if (formattedDefaultValue === '') formattedDefaultValue = [];

        // Sometimes the array may be empty due to rendering speed
        if (_labels.length === 0) {
            _labels = formattedDefaultValue.map((s: string | number) => s.toString().replace(/[\w\s]/gi, '').replace(/\[\]/g, ''));
        }

        return _labels.length > 0 ? _labels.map((item: any, i: number, arr: any[]) => {
            if (arr.length - 1 === i) {
                return (
                    <div key={i}>
                        <span dangerouslySetInnerHTML={{
                            __html: item
                        }}></span>
                    </div>
                )
            } else {
                return (
                    <div key={i}>
                        <span dangerouslySetInnerHTML={{
                            __html: item
                        }}></span>
                        {arrowGenerator()}
                    </div>
                )
            }
        }) : '';

    }

    function arrowGenerator() {
        return displayResultArrow ? displayResultArrow : <svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>;
    }


    useEffect(() => {


        // column titles
        //--------------
        fillColumnTitle();

        // Initialize default value (request parameters for each level)
        //--------------
        initDefaultValue(value);


    }, [value]);


    // Automatically complete and truncate column Search Keywords each time the number of columns changes
    useEffect(() => {
        if (listData.current.length !== columnSearchKeywords.length) {
            setColumnSearchKeywords(
                Array(listData.current.length).fill('').map((v, i) => columnSearchKeywords[i] || '')
            );
        }
    }, [listData.current.length]);


    return (
        <>

            <div
                className={clsWrite(wrapperClassName, 'cas-select-e2e__wrapper mb-3 position-relative', `cas-select-e2e__wrapper ${wrapperClassName}`)}
                ref={rootRef}
                data-overlay-id={`cas-select-e2e__items-wrapper-${idRes}`}
            >
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={idRes} className="form-label" >{label}</label>}</> : null}

                {triggerContent ? <>
                    <div className={clsWrite(triggerClassName, 'cas-select-e2e__trigger d-inline w-auto', `cas-select-e2e__trigger ${triggerClassName}`)} onClick={handleDisplayOptions}>{triggerContent}</div>
                </> : null}


                {!hasErr ? (
                    <RootPortal show={true} containerClassName="CascadingSelectE2E">
                        <div
                            ref={listRef}
                            id={`cas-select-e2e__items-wrapper-${idRes}`}
                            className="cas-select-e2e__items-wrapper position-absolute border shadow small"
                            style={{ zIndex: DEPTH, display: 'none' }}
                        >
                            <ul className="cas-select-e2e__items-inner">
                                {loading ? <><div className="cas-select-e2e__items-loader">{loader || <svg height="12px" width="12px" viewBox="0 0 512 512"><g><path fill="inherit" d="M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z" /><path fill="inherit" d="M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z" /><path fill="inherit" d="M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z" /><path fill="inherit" d="M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z" /><path fill="inherit" d="M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z" /><path fill="inherit" d="M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z" /><path fill="inherit" d="M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z" /><path fill="inherit" d="M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z" /></g></svg>}</div></> : null}
                                {showCloseBtn ? <a href="#" tabIndex={-1} onClick={(e) => {
                                    e.preventDefault();
                                    cancel();
                                }} className="cas-select-e2e__close position-absolute top-0 end-0 mt-0 mx-1"><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a> : null}



                                {listData.current.map((item: any, level: number) => {

                                    if (item.length > 0) {

                                        // filter data
                                        let filteredItem = item;
                                        if (searchable && columnSearchKeywords[level]) {
                                            const keyword = columnSearchKeywords[level].toLowerCase();
                                            filteredItem = item.filter((opt: any) =>
                                                (htmlToPlain(opt.name) || '').toLowerCase().includes(keyword)
                                            );
                                        }


                                        return (
                                            <li key={level} data-col={level} className="cas-select-e2e__items-col">

                                 
                                                {/* SEARCH BOX */}
                                                {searchable && (
                                                    <div className="cas-select-e2e__items-col-searchbox">
                                                        <input
                                                            type="text"
                                                            placeholder={searchPlaceholder}
                                                            value={columnSearchKeywords[level] || ''}
                                                            onChange={e => {
                                                                const newKeywords = [...columnSearchKeywords];
                                                                newKeywords[level] = e.target.value;
                                                                setColumnSearchKeywords(newKeywords);
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                                {/* /SEARCH BOX */}

                                                <Group
                                                    perColumnHeadersShow={perColumnHeadersShow}
                                                    level={level}
                                                    columnTitle={columnTitleData}
                                                    data={filteredItem}  // filter result
                                                    cleanNodeBtnClassName={cleanNodeBtnClassName}
                                                    cleanNodeBtnContent={cleanNodeBtnContent}
                                                    selectEv={(e, value, index) => handleClickItem(e, value, index, level, listData.current)}
                                                />
                                            </li>
                                        )
                                    } else {
                                        return null;
                                    }

                                })}
                            </ul>

                        </div>

                    </RootPortal>

                ) : null}



                <div className="cas-select-e2e__val" onClick={handleDisplayOptions}>

                    {/** REVIEW RESULT */}
                    {destroyParentIdMatch ? <>
                        {displayResult ? <div className="cas-select-e2e__result">{displayInfo(true)}</div> : null}
                    </> : <>
                        {displayResult ? <div className="cas-select-e2e__result">{displayInfo(false)}</div> : null}
                    </>}

                    
                    <input
                        ref={valRef}
                        id={idRes}
                        data-overlay-id={`cas-select-e2e__items-wrapper-${idRes}`}
                        name={name}
                        className={combinedCls(
                            clsWrite(controlClassName, 'form-control'),
                            controlExClassName
                        )}
                        placeholder={placeholder}
                        value={destroyParentIdMatch
                            ?
                            (valueType === 'value' ? (VALUE_BY_BRACES ? convertArrToValByBraces(selectedDataByClick.current.values.map((item: any, i: number) => `${item}[${selectedDataByClick.current.queryIds[i]}]`)) : selectedDataByClick.current.values.map((item: any, i: number) => `${item}[${selectedDataByClick.current.queryIds[i]}]`)!.join(',')) : (VALUE_BY_BRACES ? convertArrToValByBraces(selectedDataByClick.current.labels.map((item: any, i: number) => `${item}[${selectedDataByClick.current.queryIds[i]}]`)) : selectedDataByClick.current.labels.map((item: any, i: number) => `${item}[${selectedDataByClick.current.queryIds[i]}]`)!.join(',')))
                            :
                            changedVal
                        } // placeholder will not change if defaultValue is used
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={disabled || null}
                        required={required || null}
                        style={style}
                        tabIndex={tabIndex || 0}
                        readOnly
                        {...attributes}
                    />


                    {isShow ? <div
                        className="cas-select-e2e__closemask"
                        onClick={(e) => {
                            e.preventDefault();
                            cancel();
                        }}></div> : null}


                    <span className="arrow" style={{ pointerEvents: 'none' }}>
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

                </div>





            </div>


        </>
    )
};

export default CascadingSelectE2E;
