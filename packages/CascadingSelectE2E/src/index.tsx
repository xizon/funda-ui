import React, { useId, useEffect, useState, useRef } from 'react';

import Group from './Group';
import './index.scss';

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
}

type CascadingSelectE2EProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    placeholder?: string;
    disabled?: any;
    required?: any;
    /** Set headers for each column group */
    columnTitle?: any[];
    /** Set whether to use "label" or "value" for the value of this form, they will be separated by commas, such as `Text 1,Text 1_1,Text 1_1_1` or `1,1_1,1_1_1`.
     * Optional values: `label`, `value`
     */
    valueType?: string;
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
        disabled,
        required,
        value,
        label,
        placeholder,
        name,
        id,
        columnTitle,
        depth,
        loader,
        displayResult,
        displayResultArrow,
        controlArrow,
        valueType,
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


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);

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
    


    //for variable 
    const [data, setData] = useState<any[]>([]);
    const [selectedData, setSelectedData] = useState<any>({
        labels: [],
        values: []
    });
    const [isShow, setIsShow] = useState<boolean>(false);


    async function fetchData(_fetchArray: any, params: string, dataDepth: number, parentId: number = 0) {

        const fetchFuncAsync = _fetchArray.fetchFuncAsync;
        const fetchFuncMethod = _fetchArray.fetchFuncMethod;
        const fetchCallback = _fetchArray.fetchCallback;
 

        if (typeof fetchFuncAsync === 'object') {

            //
            setLoading(true);

            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;

           
            // loading 
            setLoading(false);
            
            if ( typeof _ORGIN_DATA[0] === 'undefined' ) return;

            // reset data structure
            if (typeof (fetchCallback) === 'function') {
                _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }


            // Determine whether the data structure matches
            if ( typeof _ORGIN_DATA[0].id === 'undefined' ) {
                console.warn( 'The data structure does not match, please refer to the example in the component documentation.' );
                setHasErr(true);
                _ORGIN_DATA = [];
            }
            
            // add data depth
            _ORGIN_DATA.forEach( (item: any) => {
                item.depth = dataDepth;
            }); 



            let _temp_allData;
            if ( dataDepth === 0 ) {

                // STEP 1: ===========
                // all data from fetched data 
                _temp_allData = JSON.parse(JSON.stringify(_ORGIN_DATA)); 
                setAllData(_temp_allData);

                // STEP 2: ===========
                // dictionary data (orginal)
                setDictionaryData(_temp_allData);


            }
            if ( dataDepth > 0 ) {

                // STEP 1: ===========
                // all data from fetched data  
                _temp_allData = allData; 
                addChildrenOpt(_temp_allData, parentId, _ORGIN_DATA);

                // STEP 2: ===========
                // dictionary data (orginal)
                setDictionaryData(_temp_allData);

                
            }
      

            // STEP 3: ===========
            // Add an empty item to each list to support empty item selection
            const _EMPTY_SUPPORTED_DATA = JSON.parse(JSON.stringify(_temp_allData));
            addEmptyOpt(_EMPTY_SUPPORTED_DATA, 0);



            // STEP 4: ===========
            // Turn the data of each group into an array
            let _temp_optData;
            if ( dataDepth === 0 ) {
                
                _temp_optData = [_EMPTY_SUPPORTED_DATA];
                setOptData(_temp_optData);
                setData(_temp_optData);
            }

            if ( dataDepth > 0 ) {
                _temp_optData = data;

                // Add an empty item to each list to support empty item selection
                addEmptyOpt(_ORGIN_DATA, 0);

                const childList = _ORGIN_DATA;
                _temp_optData[dataDepth] = childList;
                
                setOptData(_temp_optData);
                setData(optData);
            }


            // STEP 5: ===========
            //Set a default value
            if (value) updateValue(_EMPTY_SUPPORTED_DATA, value);


            // STEP 6: ===========
            //
            onFetch?.(_EMPTY_SUPPORTED_DATA, _ORGIN_DATA);    
            
            return _EMPTY_SUPPORTED_DATA;


            
        } else {
            return [];
        }


    }


    //
    function doFetch(dataDepthMax: boolean, dataDepth: number = 0, parentId: number = 0, emptyAction: boolean = false) {

        // if empty selection is selected
        if ( emptyAction ) return;

        // If the depth is max, no more requests
        if ( dataDepthMax ) return;

        // data fetch action
        const _oparams: any[] = fetchArray![dataDepth].fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map( (item: any) => item !== '$QUERY_ID' ? item : parentId );
        fetchData(fetchArray![dataDepth], (_params).join(','), dataDepth, parentId);
    }


    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

        //
        setIsShow(true);

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

        if (
            event.target.className != '' && (
                event.target.className.indexOf('cascading-select__wrapper') < 0 &&
                event.target.className.indexOf('form-control') < 0 &&
                event.target.className.indexOf('cascading-select__trigger') < 0 &&
                event.target.className.indexOf('cascading-select__items') < 0 &&
                event.target.className.indexOf('cascading-select__opt') < 0
            )
        ) {

            setIsShow(false);
             
        }
    }

    function handleDisplayOptions(event: any) {
        event.preventDefault();
        setIsShow(true);
        
        // Execute the fetch task
        if ( !firstDataFeched ) {
            setLoading(true);
            doFetch(false, currentDataDepth, 0, false);
            setFirstDataFeched(true);
        }

        
    }


    function handleClickItem(e: any, resValue: any, index: number, level: number) {

        const dataDepthMax: boolean = resValue.depth === fetchArray!.length-1;
        const parentId = e.currentTarget.dataset.query;
        const emptyAction = resValue.id.toString().indexOf('$EMPTY_ID_') < 0 ? false : true;


        // update data depth
        //////////////////////////////////////////
        setCurrentDataDepth(resValue.depth+1);
        setCurrentDataDepth((prevState) => {
            const _currentDataDepth = resValue.depth+1;
        
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
        if ( dataDepthMax && resValue.id.toString().indexOf('$EMPTY_ID_') < 0 ) {
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
       }

       return arr;
   }




    function updateValue(arr: any[], targetVal: any, level: number | boolean = false) {

        const inputEl: any = valRef.current;
        let valueTypeValue, valueTypeLabel;

        if ( targetVal.toString().indexOf('$EMPTY_ID_') >= 0 ) {

            // If clearing the current column
            //////////////////////////////////////////
            valueTypeValue = selectedData.values;
            valueTypeLabel = selectedData.labels;

            // update result to input
            valueTypeValue.splice(level);
            valueTypeLabel.splice(level);

            //
            setSelectedData({
                labels: valueTypeLabel,
                values: valueTypeValue
            });


        } else {

            // click an item
            //////////////////////////////////////////
            //search JSON key that contains specific string
            const _labels = queryResultOfJSON(arr, targetVal, 'value');
            const _values = queryResultOfJSON(arr, targetVal, 'key');

            // update result to input
            valueTypeValue = _values ? _values.map((item: any) => item) : [];
            valueTypeLabel = _labels ? _labels.map((item: any) => item) : [];    

            //
            setSelectedData({
                labels: _labels,
                values: _values
            });



        }


         // update selected data 
         //////////////////////////////////////////
        if (valueType === 'value') {
            if (inputEl !== null ) inputEl.value = valueTypeValue!.join(',');
        } else {
            if (inputEl !== null ) inputEl.value = valueTypeLabel!.join(',');
        }
        
        return {
            0 : valueTypeValue!.join(','),
            1 : valueTypeLabel!.join(',')
        }

    }

    
    function fillColumnTitle() {

        const dataDepth = fetchArray!.length;
        const oldColumnTitleData = columnTitle ? columnTitle : [];
        const newColumnTitleData = new Array(dataDepth)?.fill('');
        oldColumnTitleData!.forEach( (item: any, index: number) => {
            newColumnTitleData[index] = item;
        });

        //
        if ( oldColumnTitleData.length > dataDepth ) {
            newColumnTitleData.splice(dataDepth, oldColumnTitleData.length-dataDepth);
        }

        setColumnTitleData(newColumnTitleData);
    }


    function addChildrenOpt(obj: any[], parentId: number, childrenData: any[]) {
        
        obj.forEach((item: any) => {
            if ( item.id === parentId ) item.children = childrenData;

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
            depth: obj[0].depth
        });

        obj.forEach((item: any, depth: number) => {
            if (item.children) {
                addEmptyOpt(item.children, index * (depth+1));
            }
        });
    }



    function queryResultOfJSON(data: any[], targetVal: any, returnType: string) {

        let callbackValueNested: any[] = [];
        let lastFirstLevelName = '';
        let loop = true;
        let resDepth = 0;

        const getIndexOf = function (arr: any[], val: any) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id.toString() === val.toString()) {
                    return i;
                }
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
                const callbackValue: any = returnType === 'key' ? row.id.toString() : row.name.toString();

                if (loop) {
                    // get first-level item
                    if (getIndexOf(data, row.id) !== -1) {
                        callbackValueNested.push(callbackValue as never);
                        lastFirstLevelName = callbackValue;
                    }

                    // get child-level item
                    if (row.children) {
                        callbackValueNested.push(callbackValue as never);
                    }

                }


                //check the value
                if (row.id.toString() === targetVal.toString()) {
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

    function displayInfo() {

        return selectedData!.labels ? selectedData!.labels.map((item: any, i: number, arr: any[]) => {
            if (arr.length - 1 === i) {
                return (
                    <div key={i}>
                        <span>{item}</span>
                    </div>
                )
            } else {
                return (
                    <div key={i}>
                        <span>{item}</span>{arrowGenerator()}
                    </div>
                )
            }
        }) : '';

    }

    function arrowGenerator() {
        return displayResultArrow ? displayResultArrow : <svg viewBox="0 0 22 22" width="8"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>;
    }


    useEffect(() => {

        // column titles
        //--------------
        fillColumnTitle();


        //
        //--------------
        document.removeEventListener('pointerdown', handleClickOutside);
        document.addEventListener('pointerdown', handleClickOutside);


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            document.removeEventListener('pointerdown', handleClickOutside);
        }

    }, []);

    return (
        <>

            <div className={wrapperClassName ? `cascading-select__wrapper ${wrapperClassName}` : `cascading-select__wrapper mb-3 position-relative`} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                {triggerContent ? <>
                    <div className={triggerClassName ? `cascading-select__trigger ${triggerClassName}` : `cascading-select__trigger d-inline w-auto`} onClick={handleDisplayOptions}>{triggerContent}</div>
                </> : null}


                <div className="cascading-select" style={{ zIndex: (depth ? depth : 100) }}>

                    {isShow && !hasErr ? (
                        <div className="cascading-select__items">
                            <ul>
                                {loading ? <><div className="position-absolute top-0 start-0 mt-1 mx-1">{loader}</div></> : null}
                                {data.map((item: any, level: number) => {
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
                                })}
                            </ul>

                        </div>
                    ) : null}


                </div>

                <div className="cascading-select__val" onClick={handleDisplayOptions}>

                    
                    {displayResult ? (selectedData!.labels && selectedData!.labels.length > 0 ? <div className="cascading-select__result">{displayInfo()}</div> : null) : null}

                    <input
                        ref={valRef}
                        id={idRes}
                        name={name}
                        className="form-control"
                        placeholder={placeholder}
                        defaultValue={value || ''}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={disabled || null}
                        required={required || null}
                        style={style}
                        tabIndex={tabIndex || 0}
                        readOnly
                        {...attributes}
                    />

                    <span className="arrow">
                        {controlArrow ? controlArrow : <svg width="10px" height="10px" viewBox="0 -4.5 20 20">
                            <g stroke="none" stroke-width="1" fill="none">
                                <g transform="translate(-180.000000, -6684.000000)" fill="#a5a5a5">
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39" id="arrow_down-[#339]">
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