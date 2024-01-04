import React, { useId, useEffect, useState, useRef, forwardRef } from 'react';

import { debounce } from './utils/performance';
import useDebounce from './utils/useDebounce';

import { extractContentsOfBrackets } from './utils/extract';
import { convertArrToValByBrackets } from './utils/convert';


import { getAbsolutePositionOfStage } from './utils/get-element-property';


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
    const POS_OFFSET = 0;
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
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);


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
            const filterRes = () => {
                
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
            
            return filterRes();
        };
   
        if (fetchUpdate) {

            handleFetch(val).then((response: any) => {
                _orginalData = response;
                const _filterRes = update(_orginalData);

                // pop win initalization
                setTimeout( ()=> {
                    popwinPosInit();
                    popwinBtnEventsInit(_filterRes);
                    popwinFilterItems(val);
                }, 0 );  



            });
        } else {
            _orginalData = orginalData;
            const _filterRes = update(_orginalData);

            // pop win initalization
            setTimeout( ()=> {
                popwinPosInit();
                popwinBtnEventsInit(_filterRes);
                popwinFilterItems(val);
            }, 0 );  

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
        // remove classnames, data-* and styles
        popwinContainerHeightReset();
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

                    
                }



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
                }


                // hide disabled item
                optionsDataInit = optionsDataInit.filter((v: any) => typeof v.disabled !== 'undefined' && v.disabled == true ? false : true);

            }


            // STEP 5: ===========
            //
            setOptionsData(optionsDataInit); // data must be initialized

            //
            setOrginalData(optionsDataInit);   

            // STEP 6: ===========
            //
            onFetch?.(selectInputRef.current, valueInputRef.current, defaultValue, optionsDataInit, incomingData);


            //
            return optionsDataInit;
        }


    }

    function popwinPosInit() {
        if (listContentRef.current === null || selectInputRef.current === null) return;

        const contentHeightOffset = 80;
        let contentMaxHeight = 0;

        // update modal position
        const _modalRef: any = document.querySelector(`#multifunc-select__options-wrapper-${idRes}`);
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
                if (typeof listContentRef.current.dataset.height === 'undefined')  listContentRef.current.dataset.height = contentMaxHeight - contentHeightOffset;
            } else {
                if (_contentOldHeight > 50) {
                    listContentRef.current.style.height = _contentOldHeight + 'px';
                    if (typeof listContentRef.current.dataset.height === 'undefined')  listContentRef.current.dataset.height = _contentOldHeight;
                }
            }
        }

        if (targetPos === 'bottom') {
            contentMaxHeight = window.innerHeight - _triggerBox.bottom;

            if (_contentBox.height > contentMaxHeight) {
                listContentRef.current.style.height = contentMaxHeight - 10 + 'px';
                if (typeof listContentRef.current.dataset.height === 'undefined')  listContentRef.current.dataset.height = contentMaxHeight - 10;
            } else {
                if (_contentOldHeight > 50) {
                    listContentRef.current.style.height = _contentOldHeight + 'px';
                    if (typeof listContentRef.current.dataset.height === 'undefined')  listContentRef.current.dataset.height = _contentOldHeight;
                }
            }

        }

        // STEP 4:
        //-----------
        // Adjust position
        if (targetPos === 'top') {
            _modalRef.style.left = x + 'px';
            _modalRef.style.top = y - POS_OFFSET - (listContentRef.current.clientHeight) - 2 + 'px';
        }

        if (targetPos === 'bottom') {
            _modalRef.style.left = x + 'px';
            _modalRef.style.top = y + height + POS_OFFSET + 'px';
        }





        // STEP 5:
        //-----------
        // Determine whether it exceeds the far right or left side of the screen
        const _modalContent = _modalRef;
        const _modalBox = _modalContent.getBoundingClientRect();
        if (typeof _modalContent.dataset.offset === 'undefined') {

            if (_modalBox.right > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if (_modalBox.left < 0) {
                const _modalOffsetPosition = Math.abs(_modalBox.left) + POS_OFFSET;
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

        const _modalRef: any = document.querySelector(`#multifunc-select__options-wrapper-${idRes}`);

        if (_modalRef !== null && listContentRef.current !== null) {

            const _nodataDiv = listContentRef.current.querySelector('.multifunc-select-multi__control-option-item--nomatch');
            const _btnSelectAll = listContentRef.current.querySelector('.multifunc-select-multi__control-option-item--select-all');

            // remove classnames, data-* and styles
            _modalRef.classList.remove('active');
            listContentRef.current.style.removeProperty('height');

            popwinContainerHeightReset();

            

            // display all filtered items
            [].slice.call(listContentRef.current.querySelectorAll('.multifunc-select-multi__control-option-item')).forEach((node: any) => {
                node.classList.remove('hide');
            });
            _nodataDiv.classList.add('hide');
            if ( _btnSelectAll !== null ) _btnSelectAll.classList.remove('hide');


        }

   
     }
 

     function popwinBtnEventsInit(getOptionsData: any[]) {
        if (listContentRef.current === null) return;


        // options event listener
        // !!! to prevent button mismatch when changing
        [].slice.call(listContentRef.current.querySelectorAll('.multifunc-select-multi__control-option-item')).forEach((node: HTMLElement) => {
            const optVal = node.dataset.value;
            getOptionsData.forEach((item: any) => {
                if (optVal == item.value) {

                    if ( typeof node.dataset.ev === 'undefined' ) {
                        node.dataset.ev = 'true';
                        node.addEventListener('pointerdown', (e: any) => {
                            handleSelect(e);
                        });
                    }
                }
            });


        });


        const _btnSelectAll = listContentRef.current.querySelector('.multifunc-select-multi__control-option-item--select-all > span');
        if ( _btnSelectAll !== null && typeof _btnSelectAll.dataset.ev === 'undefined') {
            _btnSelectAll.dataset.ev = 'true';
            _btnSelectAll.addEventListener('pointerdown', (e: any) => {
                handleSelectAll(e);
            });
        
        }
    
    }

 

    function popwinFilterItems(val: any) {
        if (listContentRef.current === null) return;


        [].slice.call(listContentRef.current.querySelectorAll('.multifunc-select-multi__control-option-item')).forEach((node: any) => {
            
            // Avoid fatal errors causing page crashes
            const _queryString = typeof node.dataset.querystring !== 'undefined' && node.dataset.querystring !== null ? node.dataset.querystring : '';

            if (
                (
                    _queryString.split(',').some((l: any) => l.charAt(0) === val.toLowerCase()) ||
                    _queryString.split(',').some((l: any) => l.replace(/ /g, '').indexOf(val.toLowerCase()) >= 0) ||
                    node.dataset.label.toLowerCase().indexOf(val.toLowerCase()) >= 0
                ) &&
                val != ''
            ) {
                node.classList.remove('hide');
            } else {
                node.classList.add('hide');
            }

        });


        // no data label
        popwinNoMatchInit();
        

        // display all filtered items
        const _btnSelectAll = listContentRef.current.querySelector('.multifunc-select-multi__control-option-item--select-all');
        const _nodataDiv = listContentRef.current.querySelector('.multifunc-select-multi__control-option-item--nomatch');
        if (val.replace(/\s/g, "") === '') {
             [].slice.call(listContentRef.current.querySelectorAll('.multifunc-select-multi__control-option-item')).forEach((node: any) => {
                node.classList.remove('hide');
            });
            _nodataDiv.classList.add('hide');
            if ( _btnSelectAll !== null ) _btnSelectAll.classList.remove('hide');
        }


        // Appropriate list container height
        popwinContainerHeightAdjust();


    }

    function popwinContainerHeightAdjust() {
        if (listContentRef.current === null) return;

        const oldHeight = listContentRef.current.dataset.height;
        const pos = listContentRef.current.dataset.pos;
        const filteredHeight = listContentRef.current.firstChild.clientHeight;

        if (pos === 'bottom') {
            if (parseFloat(oldHeight) > filteredHeight) {
                listContentRef.current.style.height = filteredHeight + 'px';
            } else {
                listContentRef.current.style.height = oldHeight + 'px';
            }
            
        }

    }




    function popwinNoMatchInit() {
        if (listContentRef.current === null) return;

        const _btnSelectAll = listContentRef.current.querySelector('.multifunc-select-multi__control-option-item--select-all');
        const _nodataDiv = listContentRef.current.querySelector('.multifunc-select-multi__control-option-item--nomatch');
        const emptyFieldsCheck = [].slice.call(listContentRef.current.querySelectorAll('.multifunc-select-multi__control-option-item')).every((node: any) => {
            if (!node.classList.contains('hide')) {
                return false;
            }
            return true;
        });

        if (emptyFieldsCheck) {
            _nodataDiv.classList.remove('hide');
            if ( _btnSelectAll !== null ) _btnSelectAll.classList.add('hide');
        } else {
            _nodataDiv.classList.add('hide');
            if ( _btnSelectAll !== null ) _btnSelectAll.classList.remove('hide');
        }

    }


    function popwinContainerHeightReset() {
        if (listContentRef.current === null) return;

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
        setTimeout( ()=> {
            popwinPosInit();
            popwinBtnEventsInit(optionsData);
        }, 0 );  



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

        const curItem: any = el === null ? JSON.parse(dataInput) : JSON.parse(el.currentTarget.dataset.itemdata);

        
        // get incoming options from `data-options` of component
        // It is usually used for complex cascading `<MultiFuncSelect />` components
        const incominggetOptionsData = valueInputRef.current.dataset.options;


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
            if ( typeof incominggetOptionsData !== 'undefined' ) {
                valueInputRef.current.dataset.value = _value;
            }  


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            let currentControlValueArr: any[] = JSON.parse(JSON.stringify(valueArr));
            let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(labelArr));

            if ( MULTI_SEL_VALID ) {


                // update option checkboxes
                const _selected = el.currentTarget.dataset.selected;
                const _selectedVal = _selected == 'true' ? true : false;
                if (_selectedVal) {
                    //#########
                    // remove item
                    //#########
                    el.currentTarget.dataset.selected = 'false';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox--selected').style.display = 'inline-block';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox').style.display = 'none';

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
                    el.currentTarget.dataset.selected = 'true';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox--selected').style.display = 'none';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox').style.display = 'inline-block';

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
            



            }

            //
            if ( typeof(onChange) === 'function' ) {
     
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
            const _label = typeof curItem !== 'undefined' ?curItem.label : '';

            // ++++++++++++++++++++
            // Single selection
            // ++++++++++++++++++++
            setControlValue(_value); 
            setControlLabel(formatIndentVal(_label)); 

            // set value if the attribute `data-options` of component exists, only valid for single selection (it may be an empty array)
            if ( typeof incominggetOptionsData !== 'undefined' ) {
                valueInputRef.current.dataset.value = _value;
            }  


            // ++++++++++++++++++++
            // Multiple selection
            // ++++++++++++++++++++
            let currentControlValueArr: any[] = JSON.parse(JSON.stringify(controlArr.values));
            let currentControlLabelArr: any[] = JSON.parse(JSON.stringify(controlArr.labels));
            
            if ( MULTI_SEL_VALID ) {
                
                

                // update option checkboxes
                const _selected = el.currentTarget.dataset.selected;
                const _selectedVal = _selected == 'true' ? true : false;
                if (_selectedVal) {
                    //#########
                    // remove item
                    //#########
                    el.currentTarget.dataset.selected = 'false';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox--selected').style.display = 'inline-block';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox').style.display = 'none';

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
                    el.currentTarget.dataset.selected = 'true';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox--selected').style.display = 'none';
                    el.currentTarget.querySelector('.multifunc-select-multi__control-option-checkbox').style.display = 'inline-block';

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



            }

            //
            if ( typeof(onChange) === 'function' ) {

        
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


        const updateOptionCheckboxes = (type: string) => {
            [].slice.call(listContentRef.current.querySelectorAll('.multifunc-select-multi__control-option-item')).forEach((node: any) => {

                if (type === 'remove') {
                    //#########
                    // remove item
                    //#########
                    node.dataset.selected = 'false';
                    node.querySelector('.multifunc-select-multi__control-option-checkbox--selected').style.display = 'inline-block';
                    node.querySelector('.multifunc-select-multi__control-option-checkbox').style.display = 'none';

                } else {
                    //#########
                    // add item
                    //#########
                    node.dataset.selected = 'true';
                    node.querySelector('.multifunc-select-multi__control-option-checkbox--selected').style.display = 'none';
                    node.querySelector('.multifunc-select-multi__control-option-checkbox').style.display = 'inline-block';

                }


            });
        };


        setItemSelectedAll((prevState) => {

            if ( !prevState ) {

        
                setControlArr((prevData: any) => {

                    const currentControlValueArr = [...prevData.values, ...optionsData.map((v: any) => v.value)].filter((item: any, index: number, arr: any[]) => arr.indexOf(item, 0) === index );
                    const currentControlLabelArr = [...formatIndentVal(prevData.labels), ...formatIndentVal(optionsData.map((v: any) => v.label))].filter((item: any, index: number, arr: any[]) => arr.indexOf(item, 0) === index );

                    //
                    onChangeSelectAll(currentControlLabelArr, currentControlValueArr);    
                    
                    // update option checkboxes
                    updateOptionCheckboxes('add');

          
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
        
                    // update option checkboxes
                    updateOptionCheckboxes('remove');

        
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

        // update temporary value
        setControlTempValue(val);

        //
        handleChangeFetchSafe(val);
    
    
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
        
        if (event.target.closest(`.multifunc-select__wrapper`) === null && event.target.closest(`.multifunc-select__options-wrapper`) === null ) {
            // cancel
            cancel();

            if (MULTI_SEL_VALID) popwinPosHide();

        }

      

    }


    function generateInputFocusStr() {
        return controlTempValue || controlTempValue === '' ? (controlTempValue.length === 0 ? '|' : controlTempValue) : (placeholder || '');
    }
    

    function optionFocus(type: string) {

        return new Promise(function (resolve) {

            // Determine the "active" class name to avoid listening to other unused components of the same type
            if ( listRef.current === null || !rootRef.current.classList.contains('active') ) return;

       
            const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide)'));
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

        
        // Move HTML templates to tag end body </body>
        // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
        // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
        //--------------
        if (document.body !== null && listRef.current !== null) {
            document.body.appendChild(listRef.current);
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

                        const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide):not(.no-match)'));
                        
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

            //
            document.querySelector(`#multifunc-select__options-wrapper-${idRes}`)?.remove();
            
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
                    <div 
                        ref={listRef} 
                        id={`multifunc-select__options-wrapper-${idRes}`} 
                        className={`multifunc-select__options-wrapper list-group position-absolute border shadow small ${winWidth ? '' : ''}`} 
                        style={{ zIndex: (depth ? depth : 1055), width: WIN_WIDTH}} 
                        role="tablist"
                    >

                        {controlTempValue !== null && optionsData.length === 0 ? <>
                       
                        </> : <>
                        

                        </>}

                        <div className="multifunc-select__options-contentlist rounded" style={{backgroundColor: 'var(--bs-list-group-bg)'}} ref={listContentRef}>
                            <div className="multifunc-select__options-contentlist-inner">

                                {/* SELECT ALL BUTTON */}
                                {MULTI_SEL_VALID ? <>
                                    <span tabIndex={-1} className="list-group-item list-group-item-action border-start-0 border-end-0 text-secondary bg-light multifunc-select-multi__control-option-item--select-all" role="tab" style={{ display: multiSelect?.selectAll ? 'block' : 'none' }}>
                                        <span tabIndex={-1} className="btn btn-secondary" dangerouslySetInnerHTML={{
                                            __html: `${multiSelect?.selectAllLabel || 'Select all options'}`
                                        }}></span>
                                    </span>
                                </> : null}
                                {/* /SELECT ALL BUTTON */}

                                {/* NO MATCH */}
                                <button tabIndex={-1} type="button" className="list-group-item list-group-item-action no-match border-0 multifunc-select-multi__control-option-item--nomatch hide" disabled>{fetchNoneInfo || 'No match yet'}</button>
                                {/* /NO MATCH */}


                                {/* OPTIONS LIST */}
                                {optionsData ? optionsData.map((item, index) => {
                                    const startItemBorder = index === 0 ? 'border-top-0' : '';
                                    const endItemBorder = index === optionsData.length - 1 ? 'border-bottom-0' : '';



                                    if (!MULTI_SEL_VALID) {

                                        // ++++++++++++++++++++
                                        // Single selection
                                        // ++++++++++++++++++++
                                        return <button tabIndex={-1} type="button" data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 multifunc-select-multi__control-option-item ${startItemBorder} ${endItemBorder} border-bottom-0 ${typeof item.disabled === 'undefined' ? '' : (item.disabled == true ? 'disabled' : '')}`} data-value={`${item.value}`} data-label={`${item.label}`} data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`} data-itemdata={JSON.stringify(item)} role="tab" dangerouslySetInnerHTML={{
                                            __html: item.label
                                        }}></button>

                                    } else {

                                        // ++++++++++++++++++++
                                        // Multiple selection
                                        // ++++++++++++++++++++
                                        const itemSelected = multiSelControlOptionExist(controlArr.values, item.value) ? true : false;

                                        return <button tabIndex={-1} type="button" data-selected={`${itemSelected ? 'true' : 'false'}`} data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 multifunc-select-multi__control-option-item ${startItemBorder} ${endItemBorder} border-bottom-0 ${itemSelected ? 'list-group-item-secondary item-selected' : ''} ${typeof item.disabled === 'undefined' ? '' : (item.disabled == true ? 'disabled' : '')}`} data-value={`${item.value}`} data-label={`${item.label}`} data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`} data-itemdata={JSON.stringify(item)} role="tab">
                                            <var className="me-1 multifunc-select-multi__control-option-checkbox multifunc-select-multi__control-option-checkbox--selected">
                                                <svg width="1.2em" height="1.2em" fill="#000000" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>

                                            </var>
                                            <var className="me-1 multifunc-select-multi__control-option-checkbox">
                                                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none">
                                                    <path d="M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </var>
                                            <var className={`me-1 multifunc-select-multi__control-option-checkbox-placeholder ${itemSelected ? 'd-none' : ''}`}>
                                                <svg width="1.2em" height="1.2em" fill="#000000" viewBox="0 0 24 24"><path d="M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z" /></svg>
                                            </var>
                                            <span dangerouslySetInnerHTML={{
                                                __html: item.label
                                            }}></span>
                                        </button>

                                    }


                                }) : null}
                                {/* /OPTIONS LIST */}

                            </div>
                        </div>


                    </div>

                </> : null}

                


            </div>


        </>
    )
});

export default MultiFuncSelect;
