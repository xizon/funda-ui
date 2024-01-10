import React, { useId, useEffect, useState, useRef } from 'react';

import { debounce } from './utils/performance';

import Group from './Group';

import { extractContentsOfBraces, extractContentsOfBrackets } from './utils/extract';
import { convertArrToValByBraces } from './utils/convert';

import {
    addTreeDepth,
    addTreeIndent
} from './utils/tree';



declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}


type CascadingSelectE2EOptionChangeFnType = (input: any, currentData: any, index: any, depth: any, value: any) => void;


interface fetchArrayConfig {
    fetchFuncAsync?: any | undefined;
    fetchFuncMethod?: string | undefined;
    fetchFuncMethodParams?: any[] | undefined;
    fetchCallback?: (data: any) => void;
    hierarchical?: boolean;
    indentation?: string;
    doubleIndent?: boolean;
}

type CascadingSelectE2EProps = {
    wrapperClassName?: string;
    controlClassName?: string;
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
    /** Set whether to use "label" or "value" for the value of this form, they will be separated by commas, such as `Text 1,Text 1_1,Text 1_1_1` or `1,1_1,1_1_1`.
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
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
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
        wrapperClassName,
        controlClassName,
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
        fetchArray,
        onFetch,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const VALUE_BY_BRACES = typeof extractValueByBraces === 'undefined' ? true : extractValueByBraces;
    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const listRef = useRef<any>(null);


    // current data depth (GLOBAL)
    const [currentDataDepth, setCurrentDataDepth] = useState<number>(0);

    // all data from fetched data (GLOBAL)
    const [allData, setAllData] = useState<any[]>([]);

    // options data (GLOBAL)
    const [optData, setOptData] = useState<any[]>([]);



    const [dictionaryData, setDictionaryData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [columnTitleData, setColumnTitleData] = useState<any[]>([]);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [firstDataFeched, setFirstDataFeched] = useState<boolean>(false);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    const windowScrollUpdate = debounce(handleScrollEvent, 500);



    //for variable 
    const [data, setData] = useState<any[]>([]);
    const [selectedData, setSelectedData] = useState<any>({
        labels: [],
        values: [],
        queryIds: []
    });
    const [isShow, setIsShow] = useState<boolean>(false);


    // destroy `parent_id` match
    const [selectedDataByClick, setSelectedDataByClick] = useState<any>({
        labels: [],
        values: [],
        queryIds: []
    });

    /**
     * Format indent value
     * @param {String|Array} str 
     * @returns {String|Array}
     */
    function formatIndentVal(str: any, indentLastPlaceholder: string) {
        const reVar = new RegExp(indentLastPlaceholder, 'g');
        if (Array.isArray(str)) {
            return str.map((s: string) => s.replace(reVar, '').replace(/\&nbsp;/ig, ''));
        } else {
            return str.replace(reVar, '').replace(/\&nbsp;/ig, '');
        }

    }



    /**
     * Check if an element is in the viewport
     * @param {HTMLElement} elem 
     * @returns {boolean}
     */
    function isInViewport(elem: HTMLElement) {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    function handleScrollEvent() {
        getPlacement(listRef.current, true);
    }


    //
    function getPlacement(el: HTMLElement, restorePos: boolean = false) {

        if (el === null) return;


        const PLACEMENT_TOP = 'top-0';
        const PLACEMENT_BOTTOMEND = 'bottom-0';
        const PLACEMENT_RIGHT = 'end-0';
        const PLACEMENT_LEFT = 'start-0';


        //restore position
        if (restorePos) {
            if (isInViewport(el)) {
                el.classList.remove(PLACEMENT_BOTTOMEND);
                el.style.removeProperty('bottom');
            }
            return;
        }


        // Adjust position
        if (!isInViewport(el)) {
            el.classList.add(PLACEMENT_BOTTOMEND);
            el.style.setProperty('bottom', -1 + 'px', "important");
        }


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
                setAllData(_TEMP_ALL_DATA);

                // STEP 2: ===========
                // dictionary data (orginal)
                setDictionaryData(_TEMP_ALL_DATA);


            }
            if (dataDepth > 0) {

                // STEP 1: ===========
                // all data from fetched data  
                _TEMP_ALL_DATA = allData;
                addChildrenOpt(_TEMP_ALL_DATA, parentId, _ORGIN_DATA);

                // STEP 2: ===========
                // dictionary data (orginal)
                setDictionaryData(_TEMP_ALL_DATA);


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
                setOptData(_temp_optData);
                setData(_temp_optData);
            }

            if (dataDepth > 0) {
                _temp_optData = data;

                // Add an empty item to each list to support empty item selection
                addEmptyOpt(_ORGIN_DATA, 0);

                const childList = _ORGIN_DATA;
                _temp_optData[dataDepth] = childList;


                setOptData(_temp_optData);
                setData(optData);
            }


            // STEP 5: ===========
            //
            onFetch?.(_EMPTY_SUPPORTED_DATA, _ORGIN_DATA);

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
        rootRef.current.classList.add('focus');

        //
        handleDisplayOptions(null);

        //
        onFocus?.(event);
    }


    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current.classList.remove('focus');


        //
        onBlur?.(event);
    }



    /**
     * If clicked on outside of element
     */
    function handleClickOutside(event: any) {

        // svg element
        if (typeof event.target.className === 'object') return;

        if (
            event.target.className != '' && (
                event.target.className.indexOf('cascading-select-e2e__wrapper') < 0 &&
                event.target.className.indexOf('form-control') < 0 &&
                event.target.className.indexOf('cascading-select-e2e__trigger') < 0 &&
                event.target.className.indexOf('cascading-select-e2e__items') < 0 &&
                event.target.className.indexOf('cascading-select-e2e__opt') < 0
            )
        ) {

            setIsShow(false);

        }
    }

    function handleDisplayOptions(event: any) {
        if (event) event.preventDefault();

        setIsShow(true);

        // Execute the fetch task
        if (!firstDataFeched) {
            setLoading(true);
            setFirstDataFeched(true);
            doFetch(false, currentDataDepth, 0, false);
        }

        // window position
        setTimeout(() => {
            getPlacement(listRef.current);
        }, 0);

    }


    function handleClickItem(e: any, resValue: any, index: number, level: number) {

        const dataDepthMax: boolean = resValue.itemDepth === fetchArray!.length - 1;
        const parentId: number = e.currentTarget.dataset.query;
        const emptyAction: boolean = resValue.id.toString().indexOf('$EMPTY_ID_') < 0 ? false : true;


        //update selected data by clicked item
        //////////////////////////////////////////
        setSelectedDataByClick((prevState: any) => {

            const _valueData = prevState.values.slice(0, level + 1);
            const _labelData = prevState.labels.slice(0, level + 1);
            const _queryIdsData = prevState.queryIds.slice(0, level + 1);

            _valueData.splice(level, 1, resValue.id);
            _labelData.splice(level, 1, resValue.name);
            if (Array.isArray(_queryIdsData)) _queryIdsData.splice(level, 1, resValue.queryId);


            return {
                labels: _labelData.filter((v: any) => v != ''),
                values: _valueData.filter((v: any) => v.toString().indexOf('$EMPTY_ID_') < 0),
                queryIds: Array.isArray(_queryIdsData) ? _queryIdsData.filter((v: any) => v != undefined) : _labelData.filter((v: any) => v != ''),
            };
        });

        // update dis
        //////////////////////////////////////////


        // update data depth
        //////////////////////////////////////////
        setCurrentDataDepth(resValue.itemDepth + 1);
        setCurrentDataDepth((prevState) => {
            const _currentDataDepth = resValue.itemDepth + 1;

            // Execute the fetch task
            //////////////////////////////////////////
            doFetch(dataDepthMax, _currentDataDepth, parentId, emptyAction);

            return _currentDataDepth;

        });

        // update value
        //////////////////////////////////////////
        const inputVal = updateValue(dictionaryData, resValue.id, level);

        // callback
        //////////////////////////////////////////
        if (typeof (onChange) === 'function') {
            onChange(valRef.current, resValue, index, level, inputVal);
        }


        // update data
        //////////////////////////////////////////
        const newData: any = data;  // such as: [Array(6), Array(3)]

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
            setIsShow(false);

            // update data depth
            setCurrentDataDepth(0);
        }


    }



    /**
     * Active the selected item
    * @param arr 
    * @param index 
    * @returns 
    */
    function markCurrent(arr: any[], index: number) {

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
            _valueData = selectedData.values;
            _labelData = selectedData.labels;
            _queryIdsData = selectedData.queryIds;

            // update result to input
            _valueData.splice(level);
            _labelData.splice(level);
            _queryIdsData.splice(level);

            //
            setSelectedData({
                labels: _labelData,
                values: _valueData,
                queryIds: _queryIdsData,
            });


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
            setSelectedData({
                labels: _labelData,
                values: _valueData,
                queryIds: _queryIdsData,
            });



        }


        // update selected data 
        //////////////////////////////////////////
        if (destroyParentIdMatch) {
            _valueData = selectedDataByClick.values;
            _labelData = selectedDataByClick.labels;
            _queryIdsData = selectedDataByClick.queryIds;
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


    function cleanValue() {
        setSelectedData({
            labels: [],
            values: [],
            queryIds: []
        });

        setSelectedDataByClick({
            labels: [],
            values: [],
            queryIds: []
        });


        setAllData([]);
        setDictionaryData([]);
        setOptData([]);
        setData([]);
        setChangedVal('');
        setFirstDataFeched(false);
    }

    function initDefaultValue(defaultValue: any) {

        // Determine whether the splicing value of the default value is empty
        if (typeof defaultValue !== 'undefined' && defaultValue !== '') {
            const formattedDefaultValue = VALUE_BY_BRACES ? extractContentsOfBraces(defaultValue) : defaultValue.split(',');
            
            const emptyDefaultValueCheck = formattedDefaultValue.every((item: any, index: number) => {
                if (item !== '[]') {
                    return false;
                }
        
                return true;
            });

            if (emptyDefaultValueCheck) {
                cleanValue();
                return; // required RETURN
            }
        }


        // change the value to trigger component rendering
        if (typeof defaultValue === 'undefined' || defaultValue === '') {
            cleanValue();
            return; // required RETURN
        } else {
            setChangedVal(defaultValue);
        }


        //
        setFirstDataFeched(true);
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
                    setDictionaryData(newData);


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
                setAllData(_TEMP_ALL_DATA);

                // STEP 6: ===========
                // dictionary data (orginal)
                setDictionaryData(_TEMP_ALL_DATA);


                // STEP 7: ===========
                //update data
                setOptData(_allColumnsData);
                setData(_allColumnsData);


                // STEP 8: ===========
                //Set a default value
                setSelectedData({
                    labels: _allLables,
                    values: _allValues,
                    queryIds: queryIds,
                });

                setSelectedDataByClick({
                    labels: _allLables,
                    values: _allValues,
                    queryIds: queryIds,
                });




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

        const _data = destroyParentId ? selectedDataByClick : selectedData;

        return _data!.labels ? _data!.labels.map((item: any, i: number, arr: any[]) => {
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


        //
        //--------------
        document.removeEventListener('pointerdown', handleClickOutside);
        document.addEventListener('pointerdown', handleClickOutside);


        // Add function to the element that should be used as the scrollable area.
        //--------------
        window.removeEventListener('scroll', windowScrollUpdate);
        window.removeEventListener('touchmove', windowScrollUpdate);
        window.addEventListener('scroll', windowScrollUpdate);
        window.addEventListener('touchmove', windowScrollUpdate);
        windowScrollUpdate();


        return () => {
            document.removeEventListener('pointerdown', handleClickOutside);
            window.removeEventListener('scroll', windowScrollUpdate);
            window.removeEventListener('touchmove', windowScrollUpdate);

        }


    }, [value]);

    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? `cascading-select-e2e__wrapper ${wrapperClassName}` : `cascading-select-e2e__wrapper mb-3 position-relative`} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label></> : null}

                {triggerContent ? <>
                    <div className={triggerClassName ? `cascading-select-e2e__trigger ${triggerClassName}` : `cascading-select-e2e__trigger d-inline w-auto`} onClick={handleDisplayOptions}>{triggerContent}</div>
                </> : null}


                <div className="cascading-select-e2e" style={{ zIndex: (depth ? depth : 100) }}>

                    {isShow && !hasErr ? (
                        <div ref={listRef} className="cascading-select-e2e__items shadow">
                            <ul>
                                {loading ? <><div className="position-absolute top-0 start-0 mt-1 mx-1">{loader}</div></> : null}
                                {showCloseBtn ? <a href="#" tabIndex={-1} onClick={(e) => {
                                    e.preventDefault();
                                    setIsShow(false);
                                }} className="cascading-select-e2e__close position-absolute top-0 end-0 mt-0 mx-1"><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a> : null}



                                {data.map((item: any, level: number) => {

                                    if (item.length > 0) {
                                        return (
                                            <li key={level}>
                                                <Group
                                                    level={level}
                                                    columnTitle={columnTitleData}
                                                    data={item}
                                                    selectEv={(e, value, index) => handleClickItem(e, value, index, level)}
                                                />
                                            </li>
                                        )
                                    } else {
                                        return null;
                                    }

                                })}
                            </ul>

                        </div>
                    ) : null}


                </div>

                <div className="cascading-select-e2e__val" onClick={handleDisplayOptions}>




                    {destroyParentIdMatch ? <>
                        {displayResult ? (selectedDataByClick!.labels && selectedDataByClick!.labels.length > 0 ? <div className="cascading-select-e2e__result">{displayInfo(true)}</div> : null) : null}
                    </> : <>
                        {displayResult ? (selectedData!.labels && selectedData!.labels.length > 0 ? <div className="cascading-select-e2e__result">{displayInfo(false)}</div> : null) : null}
                    </>}


                    <input
                        ref={valRef}
                        id={idRes}
                        name={name}
                        className={controlClassName || controlClassName === '' ? controlClassName : "form-control"}
                        placeholder={placeholder}
                        value={destroyParentIdMatch
                            ?
                            (valueType === 'value' ? (VALUE_BY_BRACES ? convertArrToValByBraces(selectedDataByClick.values.map((item: any, i: number) => `${item}[${selectedDataByClick.queryIds[i]}]`)) : selectedDataByClick.values.map((item: any, i: number) => `${item}[${selectedDataByClick.queryIds[i]}]`)!.join(',')) : (VALUE_BY_BRACES ? convertArrToValByBraces(selectedDataByClick.labels.map((item: any, i: number) => `${item}[${selectedDataByClick.queryIds[i]}]`)) : selectedDataByClick.labels.map((item: any, i: number) => `${item}[${selectedDataByClick.queryIds[i]}]`)!.join(',')))
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
                        className="cascading-select-e2e__closemask"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsShow(false);
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
