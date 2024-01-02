import React, { useId, useEffect, useState, useRef, forwardRef } from 'react';

import { debounce } from './utils/performance';
import useDebounce from './utils/useDebounce';

import { extractContentsOfBrackets } from './utils/extract';
import { convertArrToValByBrackets } from './utils/convert';

//Destroys body scroll locking
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from './plugins/BSL';


import {
    addTreeDepth,
    addTreeIndent
} from './utils/tree';


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
    value: any;
    queryString: string | number;
}


interface MultiSelectConfig {
    valid: boolean;
    selectAll: boolean;
    selectAllLabel?: string;
    data: MultiSelectDataConfig | null;
}


type MultiFuncSelectProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    multiSelect?: MultiSelectConfig;
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
    onLoad?: (e: any, e2: any, value: string | null | undefined ) => void;
    onSelect?: (data: any) => void;
    onChange?: MultiFuncSelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const MultiFuncSelect = forwardRef((props: MultiFuncSelectProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
        multiSelect,
        disabled,
        required,
        value,
        label,
        name,
        readOnly,
        placeholder,
        id,
        options,
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

    
    const LIVE_SEARCH_OK = typeof fetchTrigger !== 'undefined' && fetchTrigger === true ? true : false;
    const LIVE_SEARCH_DISABLED = (typeof fetchTrigger === 'undefined' || fetchTrigger === false) && typeof window !== 'undefined' && typeof (window as any)['funda-ui__MultiFuncSelect-disable-livesearch'] !== 'undefined' ? true : false; // Globally disable real-time search functionality (only valid for non-dynamic requests)

    const INPUT_READONLY = LIVE_SEARCH_DISABLED ? true : (typeof readOnly === 'undefined' ? null : readOnly);
    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const LOCK_BODY_SCROLL = typeof lockBodyScroll === 'undefined' ? true : lockBodyScroll;
    const WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
    const INDENT_PLACEHOLDER = doubleIndent ? `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` : `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${typeof indentation !== 'undefined' && indentation !== '' ? `${indentation}&nbsp;&nbsp;` : ''}`;
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const rootSingleRef = useRef<any>(null);
    const rootMultiRef = useRef<any>(null);
    const selectInputRef = useRef<any>(null);
    const valueInputRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);
    const optionsRes = options ? isJSON( options ) ? JSON.parse( options as string ) : options : [];
    const windowScrollUpdate = debounce(handleScrollEvent, 500);
    

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes; 
   
    //
    const [orginalData, setOrginalData] = useState<OptionConfig[]>(optionsDataInit);
    const [optionsData, setOptionsData] = useState<OptionConfig[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [controlLabel, setControlLabel] = useState<string | undefined>('');
    const [controlValue, setControlValue] = useState<string | undefined>('');
    const [controlTempValue, setControlTempValue] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [listContentHeight, setListContentHeight] = useState<number>(0);
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);
    const [componentFirstLoad, setComponentFirstLoad] = useState<boolean>(false);


    // Multiple selection
    const MULTI_SEL_VALID = multiSelect ? multiSelect.valid : false;
    const [controlArr, setControlArr] = useState<any>({
        labels: [],
        values: []
    });
    const [itemSelectedAll, setItemSelectedAll] = useState<boolean>(false);
    const multiSelControlOptionExist = (arr: any[], val: any) => arr.map((v: any) => v.toString()).includes(val.toString());



    //performance
    const handleChangeFetchSafe = useDebounce((val: any) => {
        
        
        let _orginalData: OptionConfig[] = [];
        const update = (inputData: any) => {
            const filterRes = (data: any[]) => {
                
                return inputData.filter((item: any) => {
          
                    // Avoid fatal errors causing page crashes
                    const _queryString = typeof item.queryString !== 'undefined' && item.queryString !== null ? item.queryString : '';

                    
                    if (
                        (
                            _queryString.split(',').some((l: any) => l.charAt(0) === val.toLowerCase()) ||
                            _queryString.split(',').some((l: any) => l.replace(/ /g, '').indexOf(val.toLowerCase()) >= 0) ||
                            item.label.toLowerCase().indexOf(val.toLowerCase()) >= 0
                        ) &&
                        val != ''
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });


            }

            setOptionsData(filterRes);
        };
   
        if (fetchUpdate) {

            handleFetch(val).then((response: any) => {
                _orginalData = response;
                update(_orginalData);


                // Adjust the overall height to fit the wrapper
                fixContentHeight();
            });
        } else {
            _orginalData = orginalData;
            update(_orginalData);


            // Adjust the overall height to fit the wrapper
            fixContentHeight();
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
            return inputData.map((s: string) => s.replace(reVar,'').replace(/\&nbsp;/ig,''));
        } else {
            return inputData.replace(reVar,'').replace(/\&nbsp;/ig,'');
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
     * @param {string} str 
     * @returns {string}
     */
    function stripHTML(str: string) {
        return str.replace(/<\/?[^>]+(>|$)(.*?)<\/?[^>]+(>|$)/ig, '');
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
    function fixContentHeight() {
   
        setTimeout(() => {

            if (listContentRef.current !== null) {
                const _displayedItems = listContentRef.current.querySelectorAll('.list-group-item');

                if (typeof _displayedItems[0] !== 'undefined') {
                    const _displayedHeight = _displayedItems[0].clientHeight * _displayedItems.length;
                    listContentRef.current.style.height = _displayedHeight + 'px';
                }

            }

        }, 0);

    }

    function getPlacement(el: HTMLElement, restorePos: boolean = false) {

        if ( el === null ) return;
        if ( selectInputRef.current === null ) return;

        const PLACEMENT_TOP = 'top-0';
        const PLACEMENT_BOTTOMEND = 'bottom-0';
        const PLACEMENT_RIGHT = 'end-0';
        const PLACEMENT_LEFT = 'start-0';

        const inputBox = selectInputRef.current.getBoundingClientRect();
        const elTop = inputBox.top;
        const elSpacing = 50 + selectInputRef.current.clientHeight*3;
        const elMinWindowSpacing = selectInputRef.current.clientHeight*2;


        //restore position
        if ( restorePos ) {
            if ( isInViewport(el) ) {
                el.classList.remove(PLACEMENT_BOTTOMEND);
                el.style.removeProperty('bottom');
            }
            return;
        }

        if ( listContentRef.current === null || listRef.current === null ) return;


        // STEP 0:
        // save content height (Suitable for initial data with unchanged open options)
        let _contentHeight = el.offsetHeight;
        if ( listContentHeight === 0 ) {
            setListContentHeight(el.offsetHeight);
        } else {
            _contentHeight = listContentHeight;
        }
        
    
        // STEP 1:
        // If the content exceeds the height of the window, first limit height and add scrollbar
        let maxHeight = window.innerHeight - elSpacing;
        if ( maxHeight < selectInputRef.current.clientHeight ) maxHeight = elMinWindowSpacing;
        
        if ( _contentHeight > 0 && (_contentHeight > maxHeight) ) {

            const newH = maxHeight - (elTop > window.innerHeight/2 ? 0 : elTop) + elMinWindowSpacing;

            // default position
            listContentRef.current.style.height = newH + 'px';


            // if it's on top
            if ( newH > maxHeight ) {
                listContentRef.current.style.height = elTop - elMinWindowSpacing + 'px';
            }

        
            // Adjust the overall height to fit the wrapper
            const _displayedItems = listContentRef.current.querySelectorAll('.list-group-item');
            const _displayedHeight = _displayedItems[0].clientHeight * _displayedItems.length;
            if ( _displayedHeight < listRef.current.clientHeight ) {
                listContentRef.current.style.height = _displayedHeight + 'px';
            }

            //
            listContentRef.current.style.overflowY = 'auto';



        } else {
            listContentRef.current.style.height = 'auto';
            listContentRef.current.style.overflowY = 'inherit';
        }
    

        // STEP 2:
        // Adjust position
        if ( !isInViewport(el) ) {
            el.classList.add(PLACEMENT_BOTTOMEND);
            el.style.setProperty('bottom', selectInputRef.current.clientHeight + 5 + 'px', "important");
        }



        // STEP 3:
        // It is on top when no scrollbars have been added
        if ( !isInViewport(el) ) {
            if ( el.getBoundingClientRect().top < 0 ) {
                el.classList.remove(PLACEMENT_BOTTOMEND);
                el.style.removeProperty('bottom');
                //
                listContentRef.current.style.height = _contentHeight + el.getBoundingClientRect().top - elMinWindowSpacing + 'px';
                listContentRef.current.style.overflowY = 'auto';
            }
        }
  


        // STEP 4:
        // Detect content height
        const heightOffset = 80;
        const contentBox = listContentRef.current.getBoundingClientRect();
        if (contentBox.height - heightOffset > window.innerHeight/2) {
            listContentRef.current.style.height = (window.innerHeight - inputBox.height - inputBox.top - heightOffset) + 'px';
        }


    }




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


    function adjustMultiControlContainerHeight() {
        setTimeout(() => {

            // Sometimes you may get 0, you need to judge
            if (rootMultiRef.current.clientHeight > 0) {
                rootSingleRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
                selectInputRef.current.style.height = rootMultiRef.current.clientHeight + 'px';
            }

        },0);              
    }


    async function fetchData(params: any, inputDefaultValue: any, init: boolean = true) {

        // get incoming options from `data-options` of component
        // It is usually used for complex cascading `<MultiFuncSelect />` components
        const incomingOptionsData = valueInputRef.current.dataset.options;


        // Determine whether the default value is user query input or default input
        const defaultValue = init ? inputDefaultValue : '';

        if ( typeof fetchFuncAsync === 'object' ) {


            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;
  
            // reset data structure
            if (typeof (fetchCallback) === 'function') {
                _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if ( _ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].value === 'undefined' ) {
                console.warn( 'The data structure does not match, please refer to the example in the component documentation.' );
                setHasErr(true);
                _ORGIN_DATA = [];
            }

            
            // STEP 1: ===========
            // get incoming options from `data-options` of component
            if ( typeof incomingOptionsData !== 'undefined' ) {
                _ORGIN_DATA = JSON.parse( incomingOptionsData );

                // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
                if (typeof defaultValue !== 'undefined' && defaultValue !== '') valueInputRef.current.dataset.value = defaultValue;
            }
            
            
            // STEP 2: ===========
            // Set hierarchical categories ( with sub-categories )
            if ( hierarchical ) {
                _ORGIN_DATA = addTreeDepth(_ORGIN_DATA);
                addTreeIndent(_ORGIN_DATA, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }

            


            // STEP 3: ===========
            // value & label must be initialized
            let filterRes: any = [];

            
            if ( fetchTrigger ) {

                // If a manual action is used to trigger the request
                if ( typeof fetchTriggerForDefaultData !== 'undefined' && fetchTriggerForDefaultData !== null && typeof fetchTriggerForDefaultData?.values[0] !== 'undefined' ) {
                    filterRes = [{
                        value: fetchTriggerForDefaultData?.values[0],
                        label: fetchTriggerForDefaultData?.labels[0],
                        queryString: fetchTriggerForDefaultData?.queryStrings[0]
                    }];
                }

            } else {
                const filterResQueryValue = _ORGIN_DATA.filter((item: any) => item.value == defaultValue );
                const filterResQueryLabel = _ORGIN_DATA.filter((item: any) => item.label == defaultValue );
    
                filterRes = filterResQueryValue;
                if ( filterResQueryValue.length === 0 ) filterRes = filterResQueryLabel;
            }



            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if ( typeof defaultValue === 'undefined' || defaultValue === '' ) {  // Do not use `init`, otherwise the query will revert to the default value if there is no value
                setControlValue(''); 
                setControlLabel('');
            } else {
                if ( filterRes.length > 0 ) {
                    setControlValue(filterRes[0].value); 
                    setControlLabel(formatIndentVal(filterRes[0].label) as string);
                }

            }


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if ( MULTI_SEL_VALID ) {


                if ( (typeof defaultValue === 'undefined' || defaultValue === '') && init ) {
                    setControlArr({
                        labels: [],
                        values: []
                    });
                    setItemSelectedAll(false);
                }

                

                if ( typeof defaultValue !== 'undefined' && defaultValue !== '' && multiSelect?.data !== null ) {
        
                    // initialize default values of Multiple selection
                    const _currentData: any = multiSelect?.data;

                    setControlArr({
                        labels: _currentData.labels,
                        values: _currentData.values,
                    });

                    //
                    const _values: string[] = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.split(',');
                    _values.forEach((_value: string, _index: number) => {

                        if ( !multiSelControlOptionExist(_currentData.values, _value) && typeof _currentData.values[_index] !== 'undefined' )  {

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



                    // Appropriate multi-item container height
                    adjustMultiControlContainerHeight();
   
                    
                }

    
            }


            // STEP 5: ===========
            //
            setOptionsData(_ORGIN_DATA); // data must be initialized

            //
            setOrginalData(_ORGIN_DATA);


            // STEP 6: ===========
            //
            onFetch?.(selectInputRef.current, valueInputRef.current, defaultValue, _ORGIN_DATA, incomingData);


            // STEP 7: ===========
            //
            // window position
            if (componentFirstLoad) {
                setTimeout( ()=> {
                    getPlacement(listRef.current);
                }, 500 );  
            }



            //
            return _ORGIN_DATA;

            
        } else {
            

            // STEP 1: ===========
            // get incoming options from `data-options` of component
            if ( typeof incomingOptionsData !== 'undefined' ) {
                optionsDataInit = JSON.parse( incomingOptionsData );

                // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
                if (typeof defaultValue !== 'undefined' && defaultValue !== '') valueInputRef.current.dataset.value = defaultValue;

            }


            // STEP 2: ===========
            // Set hierarchical categories ( with sub-categories )
            if ( hierarchical ) {
                optionsDataInit = addTreeDepth(optionsDataInit);
                addTreeIndent(optionsDataInit, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            }



            // STEP 3: ===========
            // value & label must be initialized
            let filterRes: any = [];
            const filterResQueryValue = optionsDataInit.filter((item: any) => item.value == defaultValue );
            const filterResQueryLabel = optionsDataInit.filter((item: any) => item.label == defaultValue );

            filterRes = filterResQueryValue;
            if ( filterResQueryValue.length === 0 ) filterRes = filterResQueryLabel;

            // STEP 4: ===========
            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            if ( typeof defaultValue === 'undefined' || defaultValue === '' ) {  // Do not use `init`, otherwise the query will revert to the default value if there is no value
                setControlValue(''); 
                setControlLabel('');
            } else {
                if ( filterRes.length > 0 ) {
                    setControlValue(filterRes[0].value); 
                    setControlLabel(formatIndentVal(filterRes[0].label));
                }

            }

            

            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            if ( MULTI_SEL_VALID ) {


                if ( (typeof defaultValue === 'undefined' || defaultValue === '') && init ) {
                    setControlArr({
                        labels: [],
                        values: []
                    });
                    setItemSelectedAll(false);
                }

                if ( typeof defaultValue !== 'undefined' && defaultValue !== '' && multiSelect?.data !== null ) {

                    // initialize default values of Multiple selection
                    const _currentData: any = multiSelect?.data;

                    setControlArr({
                        labels: _currentData.labels,
                        values: _currentData.values,
                    });

                    //
                    const _values: string[] = typeof defaultValue !== 'undefined' ? (VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.split(',')) : [];
                    _values.forEach((_value: string, _index: number) => {

                        if ( !multiSelControlOptionExist(_currentData.values, _value) && typeof _currentData.values[_index] !== 'undefined' )  {
                            

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

                    // Appropriate multi-item container height
                    adjustMultiControlContainerHeight();   
                }


            }


            // STEP 5: ===========
            //
            setOptionsData(optionsDataInit); // data must be initialized

            //
            setOrginalData(optionsDataInit);   

            // STEP 6: ===========
            //
            onFetch?.(selectInputRef.current, valueInputRef.current, defaultValue, optionsDataInit, incomingData);

            // STEP 7: ===========
            //
            // window position
            if (componentFirstLoad) {
                setTimeout( ()=> {
                    getPlacement(listRef.current);
                }, 500 );  
            }

            //
            return optionsDataInit;
        }


    }

    function cancel() {
        // hide list
        setIsOpen(false);


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

    function rootWrapperSwitch() {
        // remove active styles from the root container and activate current wrapper
        [].slice.call(document.querySelectorAll('.multifunc-select__wrapper')).forEach((node: any) => {
            node.classList.remove('active', 'focus');
        });
        rootRef.current.classList.add('active', 'focus');
    }


    async function handleSelect(el: any, dataInput: any = false, valueArr: any[] = [], labelArr: any[] = []) {
        
        if ( typeof el === 'undefined' ) return;
        
        let index: number | undefined | string;
        
        // get incoming options from `data-options` of component
        // It is usually used for complex cascading `<MultiFuncSelect />` components
        const incomingOptionsData = valueInputRef.current.dataset.options;


        // cancel
        if ( !(MULTI_SEL_VALID && isOpen) ) {
            cancel();
        }

        //remove focus style
        if ( !(MULTI_SEL_VALID && isOpen) ) {
            rootRef.current.classList.remove('focus');
        }


        // update value * label
        if ( dataInput ) {

            // using keyboard
            const _data = JSON.parse(dataInput);
            const _value = _data.value;
            const _label = _data.label;

            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            setControlValue(_value); 
            setControlLabel(formatIndentVal(_label)); 


            // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
            if ( typeof incomingOptionsData !== 'undefined' ) {
                valueInputRef.current.dataset.value = _value;
            }  


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            let currentControlValueArr: any[] = JSON.parse(JSON.stringify(valueArr));
            let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(labelArr));

            if ( MULTI_SEL_VALID ) {
                
                if ( multiSelControlOptionExist(valueArr, _value) ) {

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

            }

            //
            if ( typeof(onChange) === 'function' ) {
                onChange?.(
                    selectInputRef.current, 
                    valueInputRef.current, 
                    !MULTI_SEL_VALID ? optionsData[index as never] : {
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

            index = typeof el.currentTarget !== 'undefined' ? el.currentTarget.dataset.index : el.dataset.index;

            const _value = optionsData[index as never].value;
            const _label = optionsData[index as never].label;

            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            setControlValue(_value); 
            setControlLabel(formatIndentVal(_label)); 

            // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
            if ( typeof incomingOptionsData !== 'undefined' ) {
                valueInputRef.current.dataset.value = _value;
            }  


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            let currentControlValueArr: any[] = JSON.parse(JSON.stringify(controlArr.values));
            let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(controlArr.labels));
            
            if ( MULTI_SEL_VALID ) {
                
                if ( multiSelControlOptionExist(controlArr.values, _value) ) {

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

            }

            //
            if ( typeof(onChange) === 'function' ) {

                onChange?.(
                    selectInputRef.current, 
                    valueInputRef.current, 
                    !MULTI_SEL_VALID ? optionsData[index as never] : {
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


    function handleSelectAll(event: any) {
        event.preventDefault();

        const onChangeSelectAll = (labelsArr: string[], valuesArr: string[]) => {
            if ( typeof(onChange) === 'function' ) {

                onChange?.(
                    selectInputRef.current, 
                    valueInputRef.current, 
                    {
                        labels: labelsArr.map((v: any) => v.toString()), 
                        values: valuesArr.map((v: any) => v.toString()), 
                        labelsOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(labelsArr.map((v: any) => v.toString())) : labelsArr.map((v: any) => v.toString()).join(','), 
                        valuesOfString: VALUE_BY_BRACKETS ? convertArrToValByBrackets(valuesArr.map((v: any) => v.toString())) : valuesArr.map((v: any) => v.toString()).join(',')
                    }
                );

                //
                selectInputRef.current.blur();
            }    
        };

        setItemSelectedAll((prevState) => {

            if ( !prevState ) {

        
                setControlArr((prevData: any) => {

                    const currentControlValueArr = [...prevData.values, ...optionsData.map((v: any) => v.value)].filter((item: any, index: number, arr: any[]) => arr.indexOf(item, 0) === index );
                    const currentControlLabelArr = [...formatIndentVal(prevData.labels), ...formatIndentVal(optionsData.map((v: any) => v.label))].filter((item: any, index: number, arr: any[]) => arr.indexOf(item, 0) === index );

                    //
                    onChangeSelectAll(currentControlLabelArr, currentControlValueArr);            
          
                    return {
                        labels: currentControlLabelArr,
                        values: currentControlValueArr
                    }
                });


                
            } else {

        
                setControlArr((prevData: any) => {

                    const currentControlValueArr = removeItems(prevData.values, optionsData.map((v: any) => v.value));
                    const currentControlLabelArr = removeItems(formatIndentVal(prevData.labels), formatIndentVal(optionsData.map((v: any) => v.label)));


                    //
                    onChangeSelectAll(currentControlLabelArr, currentControlValueArr);     
                    
                    return {
                        labels: currentControlLabelArr,
                        values: currentControlValueArr
                    }
                });

            }

            return !prevState;
        } );

    }


    function handleMultiControlItemRemove(event: any) {
        event.preventDefault();

        const valueToRemove = String(event.currentTarget.dataset.item);
        const getCurrentIndex = controlArr.values.findIndex((item: any) => item.toString() === valueToRemove );

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
        if ( typeof(onChange) === 'function' ) {

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
        rootWrapperSwitch();

        //
        if ( !isOpen ) {
            activate();
            

            // window position
            setTimeout( ()=> {
                getPlacement(listRef.current);
            }, 0 );  
        }

    }


    async function handleFetch(inputVal: any = null) {
        
        // data init
        const searchStr: string = typeof inputVal === 'string' ? inputVal : (controlTempValue || controlTempValue === '' ? controlTempValue : '');
        const _oparams: any[] = fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : searchStr);

        // if empty
        if ( searchStr.replace(/\s/g, "") === '' ) return [];

       

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

        // update temporary value
        setControlTempValue(val);

    
        //
        if ( val.replace(/\s/g, "") === '' ) {
            // No elements found. Consider changing the search query.


            if (LIVE_SEARCH_OK) {
                // clean data
                setOptionsData([]);
            } else {
                // restore data
                setOptionsData(orginalData);
            }

  

        } else {
            handleChangeFetchSafe(val);
        }

        // window position
        setTimeout( ()=> {
            getPlacement(listRef.current);
        }, 0 );  

    }

    //
    function handleFocus(event: any) {

        rootRef.current.classList.add('focus');
  
        // update temporary value
        setControlTempValue('');

        //
        onFocus?.(event);    
    }

    function handleBlur(event: any) {



        //remove focus style
        if ( !(MULTI_SEL_VALID && isOpen) ) {
            rootRef.current.classList.remove('focus');
        }
        
        setTimeout(() => {
         
            // cancel
            if ( !(MULTI_SEL_VALID && isOpen) ) {
                cancel();
            }

            onBlur?.(event);
        }, 300);

    }



    function handleClose(event: any) {
        
 
        if (event.target.closest(`.${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'multifunc-select__wrapper'}`) === null ) {
            // cancel
            cancel();
        }
    }


    function generateInputFocusStr() {
        return controlTempValue || controlTempValue === '' ? (controlTempValue.length === 0 ? '|' : controlTempValue) : (placeholder || '');
    }
    

    function optionFocus(type: string) {

        return new Promise(function (resolve) {

            // Determine the "active" class name to avoid listening to other unused components of the same type
            if ( listRef.current === null || !rootRef.current.classList.contains('active') ) return;

       
            const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item'));
            const currentIndex = options.findIndex((e) => e === listRef.current.querySelector('.list-group-item.active'));


            // get the next element in the list, "%" will loop around to 0
            let nextIndex;
            if ( type === 'increase' ) {
                nextIndex = currentIndex + 1 % options.length;
            } else {
                nextIndex = (currentIndex < 0 ? options.length : currentIndex) - 1 % options.length;
            }

            
            //only one
            if ( options.length === 1 ) nextIndex = 0;
            
        
            if ( !isNaN(nextIndex) ) {
                options.forEach( (node: any, index: number) => {
                    node?.classList.remove('active');
                });

                const targetOption = options[nextIndex] as HTMLElement;
                if ( typeof targetOption !== 'undefined' && !targetOption.classList.contains('no-match') ) {
                    targetOption.classList.add('active');
                    resolve(targetOption);
                }

            }
        });


    }
    



    useEffect(() => {

        
        // Component first load
        //--------------
        if (!componentFirstLoad) {
            setComponentFirstLoad(true);
        }

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


        // keyboard listener
        //--------------
        const listener = async (event: any) => {

            let res: any = null;

            if (event.code === "Enter" || event.code === "NumpadEnter") {

                // Determine the "active" class name to avoid listening to other unused components of the same type
                if ( listRef.current === null || !rootRef.current.classList.contains('active') ) return;

    
                if ( listRef.current !== null ) {
                    const currentData = await listRef.current.dataset.data;
                    if ( typeof currentData !== 'undefined' ) {

                        const currentControlValueArr: any[] = [];
                        const currentControlLabelArr: any[] = [];

                        const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.no-match)'));
                        options.forEach((node: any) => {
                            node.classList.remove('active');

                            if ( node.classList.contains('item-selected') ) {
                                currentControlValueArr.push(node.dataset.value);
                                currentControlLabelArr.push(node.dataset.label);
                            }
                        
                        });

                        handleSelect(null, currentData, currentControlValueArr, currentControlLabelArr);


                        //
                        if ( typeof(onChange) === 'function' ) {

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

                return;
            }


            switch (event.code) {
                case "ArrowLeft":
                    // Left pressed
                    break;
                case "ArrowRight":
                    // Right pressed
                    break;
                case "ArrowUp":
                    // Up pressed
                    res = await optionFocus('decrease');
                    break;
                case "ArrowDown":
                    // Down pressed
                    res = await optionFocus('increase');
                    break;
            }
            
            // temporary data
            if ( res !== null ) listRef.current.dataset.data = res.dataset.itemdata;
            
       

        };
        
        document.removeEventListener("keydown", listener);
        document.addEventListener("keydown", listener);



        //--------------
        document.removeEventListener('pointerdown', handleClose);
        document.addEventListener('pointerdown', handleClose);



        
        // Add function to the element that should be used as the scrollable area.
        //--------------
        window.removeEventListener('scroll', windowScrollUpdate);
        window.removeEventListener('touchmove', windowScrollUpdate);
        window.addEventListener('scroll', windowScrollUpdate);
        window.addEventListener('touchmove', windowScrollUpdate);
       // windowScrollUpdate();


        return () => {
            
            if (LOCK_BODY_SCROLL) clearAllBodyScrollLocks();

            document.removeEventListener("keydown", listener);
            document.removeEventListener('pointerdown', handleClose);
            window.removeEventListener('scroll', windowScrollUpdate);
            window.removeEventListener('touchmove', windowScrollUpdate);
            
        }

    }, [value, options, data]);


    return (
        <>

            {label ? <><div className="multifunc-select__label"><label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label></div></> : null}

            <div id={`multifunc-select__wrapper-${idRes}`} className={`multifunc-select__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'} ${MULTI_SEL_VALID ? 'multiple-selection' : ''} ${isOpen ? 'active focus' : ''}`} ref={rootRef}>
                
                    {/*
                    // ++++++++++++++++++++
                    // Single selection Control (includes result container)
                    // ++++++++++++++++++++
                    */}
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
                            id={`label-${idRes}`}

                            // Don't use "name", it's just a container to display the label
                            data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                            data-select
                            placeholder={placeholder || ''}
                            className={controlClassName || controlClassName === '' ? controlClassName : "form-control"}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={typeof readOnly === 'undefined' || !readOnly ? handleShowList : ()=>void(0)}
                            onChange={handleChange}
                            onCompositionStart={handleComposition}
                            onCompositionUpdate={handleComposition}
                            onCompositionEnd={handleComposition}
                            disabled={disabled || null}
                            required={required || null}
                            readOnly={INPUT_READONLY}
                            value={controlTempValue || controlTempValue === '' ? controlTempValue : (MULTI_SEL_VALID ? (VALUE_BY_BRACKETS ? convertArrToValByBrackets(formatIndentVal(controlArr.labels).map((v: any) => stripHTML(v))) : formatIndentVal(controlArr.labels).map((v: any) => stripHTML(v)).join(',')) :  stripHTML(controlLabel as never))}  // do not use `defaultValue`
                          
                            style={{cursor: 'pointer', borderBottomWidth: MULTI_SEL_VALID? '0' : '1px', ...style}}
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

                        
                        <span className="arrow position-absolute top-0 end-0 me-2 mt-1" style={{translate: 'all .2s', transform: isOpen ? 'rotate(180deg) translateY(-4px)' : 'rotate(0) translateY(0)', pointerEvents: 'none', display: fetchTrigger ? 'none' : 'inline-block'}}>
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


                        {fetchTrigger ? <>
                            <span className="multifunc-select-single__control-searchbtn position-absolute top-0 end-0">
                                <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" style={{pointerEvents: 'none'}}>
                                    <svg width="1em" height="1em" fill="#a5a5a5" viewBox="0 0 16 16">
                                        <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                    </svg>
                                </button>

                            </span>
                        </> : null}



                    </div>

                    
                    {/*
                    // ++++++++++++++++++++
                    // Multiple selection Control
                    // ++++++++++++++++++++
                    */}
                    {MULTI_SEL_VALID ? <div ref={rootMultiRef} className="multifunc-select-multi__wrapper">

                        <div className="multifunc-select-multi__control-wrapper">
                            <div>
                                <ul className="multifunc-select-multi__list">

                                    {controlArr.labels.map((item: any, index: number) => (
                                        <li key={index}>
                                            {stripHTML(item)}

                                            <a href="#" tabIndex={-1} onClick={handleMultiControlItemRemove} data-item={controlArr.values[index]}><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path fill="#000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a>
                                        </li>
                                    ))}
                                    
                                    <li className={`multifunc-select-multi__list-item-placeholder ${typeof placeholder === 'undefined' || placeholder === '' ? 'hide' : ''}`}>
                                        <span className={`multifunc-select-multi__control-blinking-cursor ${generateInputFocusStr() === placeholder && placeholder !== '' && typeof placeholder !== 'undefined' ? 'control-placeholder' : ''} ${generateInputFocusStr() === '|' ? 'animated' : ''}`}>
                                            {generateInputFocusStr()}
                                        </span>
                                    </li>
                                </ul>

                            </div>

                        </div>

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


                        {fetchTrigger ? <>
                            <span className="multifunc-select-multi__control-searchbtn position-absolute top-0 end-0">
                                <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" onClick={handleFetch}>
                                    <svg width="1em" height="1em" fill="#a5a5a5" viewBox="0 0 16 16">
                                        <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                    </svg>
                                </button>

                            </span>
                        </> : null}


                    </div> : null}




                    {optionsData && !hasErr ? <>
                    <div ref={listRef} className={`list-group position-absolute border shadow small ${winWidth ? '' : 'w-100'}`} style={{ marginTop: '0.2rem', zIndex: (depth ? depth : 100), width: WIN_WIDTH}} role="tablist">

                        {controlTempValue !== null && optionsData.length === 0 ? <>
                            <button tabIndex={-1} type="button" className="list-group-item list-group-item-action no-match" disabled>{fetchNoneInfo || 'No match yet'}</button>
                        </> : <>
                            <div className="rounded" style={{backgroundColor: 'var(--bs-list-group-bg)'}} ref={listContentRef}>

                                {MULTI_SEL_VALID ? <>
                                    <button tabIndex={-1} type="button" className="list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light multifunc-select-multi__control-select-all" role="tab" style={{display: multiSelect?.selectAll ? 'block' : 'none'}}>
                                        <a tabIndex={-1}  href="#" onClick={handleSelectAll}  className="btn btn-secondary" dangerouslySetInnerHTML={{
                                            __html: `${multiSelect?.selectAllLabel || 'Select all options'}`
                                        }}></a>
                                    </button>
                                </> : null}

                                {optionsData ? optionsData.map((item, index) => {
                                    const startItemBorder = index === 0 ? 'border-top-0' : '';
                                    const endItemBorder = index === optionsData.length - 1 ? 'border-bottom-0' : '';
                                    
                                    

                                    if (!MULTI_SEL_VALID) {

                                        // ++++++++++++++++++++
                                        // Single selection
                                        // ++++++++++++++++++++
                                        return <button tabIndex={-1} onClick={handleSelect} type="button" data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 ${startItemBorder} ${endItemBorder} border-bottom-0 ${typeof item.disabled === 'undefined' ? '' : (item.disabled == true ? 'disabled' : '')}`} data-value={`${item.value}`} data-label={`${item.label}`} data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`} data-itemdata={JSON.stringify(item)} role="tab" dangerouslySetInnerHTML={{
                                            __html: item.label
                                        }}></button>

                                    } else {
                                        
                                        // ++++++++++++++++++++
                                        // Multiple selection
                                        // ++++++++++++++++++++
                                        const itemSelected = multiSelControlOptionExist(controlArr.values, item.value) ? true : false;

                                        return <button tabIndex={-1} onClick={handleSelect} type="button" data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 ${startItemBorder} ${endItemBorder} border-bottom-0 ${itemSelected ? 'list-group-item-secondary item-selected' : ''} ${typeof item.disabled === 'undefined' ? '' : (item.disabled == true ? 'disabled' : '')}`} data-value={`${item.value}`} data-label={`${item.label}`} data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`} data-itemdata={JSON.stringify(item)} role="tab">
                                            <var className="d-inline-block me-1 ">
                                                {!itemSelected ? <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none">
                                                    <path d="M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg> : <svg width="1.2em" height="1.2em" fill="#000000" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>}
                                                
                                            </var>
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.label
                                            }}></span>
                                        </button>

                                    }


                                }) : null}

                            </div>

                        </>}


                    </div>

                </> : null}

                


            </div>


        </>
    )
});

export default MultiFuncSelect;
