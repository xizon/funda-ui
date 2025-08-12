import React, { forwardRef, useEffect, useState, useRef, KeyboardEvent, useImperativeHandle } from 'react';


import RootPortal from 'funda-root-portal';
import SearchBar from 'funda-searchbar';

import useComId from 'funda-utils/dist/cjs/useComId';
import {
    isJSON
} from 'funda-utils/dist/cjs/validate';
import useWindowScroll from 'funda-utils/dist/cjs/useWindowScroll';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import useDebounce from 'funda-utils/dist/cjs/useDebounce';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



export interface OptionConfig {
    disabled?: boolean;
    label: any;
    listItemLabel?: any;
    value: any;
    queryString: string | number;
}


export type LiveSearchProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    popupRef?: React.ForwardedRef<any>; // could use "Array" on popupRef.current, such as popupRef.current[0], popupRef.current[1]
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    optionsExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    exceededSidePosOffset?: number;
    appearance?: string;
    isSearchInput?: boolean;
    loader?: React.ReactNode;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    units?: React.ReactNode | string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    minLength?: any;
    maxLength?: any;
    readOnly?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    noMatchPopup?: boolean;
    options?: OptionConfig[] | string;
    winWidth?: string | Function;
    icon?: React.ReactNode | string;
    btnId?: string;
    fetchTrigger?: boolean;
    hideIcon?: boolean;
    renderOption?: (optionData: OptionConfig, index: number) => React.ReactNode;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** -- */
    id?: string;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    autoShowOptions?: boolean;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onClick?: (inputEl: any, popupEl: any) => void;
    onChange?: (inputEl: any, data: any, selectedData: any, popupEl: any) => void;
    onKeyboardInput?: (e: any, inputEl: any, popupEl: any) => void;
    onBlur?: (inputEl: any, popupEl: any) => void;
    onPressEnter?: (inputEl: any, popupEl: any) => void;
};

const LiveSearch = forwardRef((props: LiveSearchProps, externalRef: any) => {
    const {
        contentRef,
        popupRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
        optionsExClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        exceededSidePosOffset,
        appearance,
        isSearchInput,
        loader,
        readOnly,
        disabled,
        required,
        placeholder,
        noMatchPopup,
        options,
        value,
        label,
        name,
        units,
        iconLeft,
        iconRight,
        minLength,
        maxLength,
        id,
        autoComplete,
        autoCapitalize,
        spellCheck,
        icon,
        btnId,
        fetchTrigger,
        hideIcon,
        renderOption,
        depth,
        style,
        winWidth,
        tabIndex,
        data,
        autoShowOptions,
        fetchNoneInfo = 'No match yet',
        fetchUpdate,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onClick,
        onFetch,
        onChange,
        onKeyboardInput,
        onBlur,
        onPressEnter,
        ...attributes
    } = props;


    const QUERY_STRING_PLACEHOLDER = '------';  // Invalid parameters for the first automatic request
    const DEPTH = depth || 1055;  // the default value same as bootstrap
    const POS_OFFSET = 0;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const AUTO_SHOW_OPTIONS = typeof autoShowOptions !== 'undefined' && autoShowOptions === true ? true : false; 
    const MANUAL_REQ = typeof fetchTrigger !== 'undefined' && fetchTrigger === true ? true : false;  // Manual requests
    const MIN_SPACE_FOR_DROPDOWN = 200; // Minimum space needed to show dropdown below trigger

    const NO_MATCH_POPUP = typeof noMatchPopup === 'undefined' ? true : noMatchPopup;
    const WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);
    const optionsRes = options ? (isJSON(options) ? JSON.parse(options as string) : options) : [];
    

    // return a array of options
    let staticOptionsData: OptionConfig[] = optionsRes;

    //
    const [controlTempValue, setControlTempValue] = useState<string | null>(null); // Storage for temporary input
    const [firstFetch, setFirstFetch] = useState<boolean>(false);
    const [dataInit, setOrginalDataInit] = useState<any[]>(staticOptionsData);
    const [orginalData, setOrginalData] = useState<any[]>([]);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [componentFirstLoad, setComponentFirstLoad] = useState<boolean>(false);
    const [reqProgress, setReqProgress] = useState<boolean>(false);


    // Mark whether it is out of focus
    // Fixed the issue that caused the pop-up window to still display due to 
    // the delayed close in handleBlur and the timing of the call to popwinPosInit
    const isBlurringRef = useRef<boolean>(false);

    //performance
    const handleChangeFetchSafe = useDebounce((e: any) => {
        handleChange(e);
    }, 350, [dataInit]);


    // exposes the following methods
    useImperativeHandle(
        popupRef,
        () => ({
            close: () => {
                cancel();
            },
            open: () => {
                activate();
            },
        }),
        [popupRef],
    );

    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return inputRef.current;
            },
            getLatestVal: () => {
                return changedVal || '';
            },
            
            clear: (cb?: any) => {
                setChangedVal('');
                cb?.();

                onChange?.(inputRef.current, [], '', listRef.current);
            },
            set: (value: string, cb?: any) => {
                setChangedVal(`${value}`);
                cb?.();

                onChange?.(inputRef.current, [], '', listRef.current);
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
        }
    }, [isOpen, rootRef, listRef]);



    // Only single symbols such as , #, and @ are allowed, and , a, a, , etc. are not allowed.
    const isSingleSpecialChar = (str: string) => {
        return typeof str === 'string' && /^[^\w\s]$/.test(str);
    };


    // Add function to the element that should be used as the scrollable area.
    const [scrollData, windowScrollUpdate] = useWindowScroll({
        performance: ['debounce', 500],   // "['debounce', 500]" or "['throttle', 500]"
        handle: (scrollData: any) => {
            popwinPosInit(false);
        }
    });


    function popwinPosInit(showAct: boolean = true) {
        if (listContentRef.current === null || inputRef.current === null) return;

        // If it is out of focus, do not perform position initialization
        if (isBlurringRef.current && !MANUAL_REQ) return;


        //
        let contentMaxHeight = 0;

        // update modal position
        const _modalRef: any = document.querySelector(`#livesearch__options-wrapper-${idRes}`);
        const _triggerRef: any = inputRef.current;

        // console.log(getAbsolutePositionOfStage(_triggerRef));

        if (_modalRef === null) return;

        const { x } = getAbsolutePositionOfStage(_triggerRef);
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
        if (window.innerHeight - _triggerBox.top > MIN_SPACE_FOR_DROPDOWN) {
            targetPos = 'bottom';
        } else {
            targetPos = 'top';
        }

        if (typeof listContentRef.current.dataset.pos === 'undefined') listContentRef.current.dataset.pos = targetPos;



        // STEP 3:
        //-----------
        // Detect content MAX HEIGHT and ACTUAL HEIGHT
        let _contentBox = listContentRef.current.getBoundingClientRect();
        const _contentActualHeight = listContentRef.current.querySelector('.livesearch__options-contentlist-inner').clientHeight;


        if (targetPos === 'top') {
            contentMaxHeight = _triggerBox.top;

            // Calculate the final height with minimum height protection
            const contentHeightOffset = 0;
            const finalHeight = Math.max(contentMaxHeight - contentHeightOffset, 150); // Ensure minimum height of 150px

            if (_contentBox.height > _contentActualHeight) {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';
            } else {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';

                // recalculate the height
                _contentBox = listContentRef.current.getBoundingClientRect();
                if (_contentBox.height > contentMaxHeight) listContentRef.current.style.height = finalHeight + 'px';

            }
        }

        if (targetPos === 'bottom') {
            contentMaxHeight = window.innerHeight - _triggerBox.bottom;

            // Calculate the final height with minimum height protection
            const contentHeightOffset = 10;
            const finalHeight = Math.max(contentMaxHeight - contentHeightOffset, 150); // Ensure minimum height of 150px

            if (_contentBox.height > _contentActualHeight) {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';
            } else {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';

                // recalculate the height
                _contentBox = listContentRef.current.getBoundingClientRect();
                if (_contentBox.height > contentMaxHeight) listContentRef.current.style.height = finalHeight + 'px';
            }

        }



        // STEP 4:
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



    }




    function popwinPosHide() {

        const _modalRef: any = document.querySelector(`#livesearch__options-wrapper-${idRes}`);

        if (_modalRef !== null && listContentRef.current !== null) {


            // remove classnames and styles
            _modalRef.classList.remove('active');
            listContentRef.current.style.removeProperty('height');

            // remove data-* attibutes
            popwinContainerHeightReset();

        }


    }


    function popwinContainerHeightReset() {
        if (listContentRef.current === null) return;

        // remove data-* attibutes
        listContentRef.current.removeAttribute('data-height');
        listContentRef.current.removeAttribute('data-pos');

    }

    //
    async function matchData(val: string = '', query: boolean = false, emptyValShowAll: boolean = false) {


        let res: any[] = [];
        let filterRes = (data: any[]) => {
            return data.filter((item: any) => {

                // Avoid fatal errors causing page crashes
                const _queryString = typeof item.queryString !== 'undefined' && item.queryString !== null ? item.queryString : '';
                const _val = typeof val !== 'undefined' && val !== null ? val : '';

                // STEP 1
                //========
                if (emptyValShowAll && _val === '') {
                    return true;
                }


                // STEP 2
                //========
                // @@@ This code is triggered only if a custom request is used to update "options" @@@
                if (query && _val == ' ') {
                    return true;
                }


                // STEP 3
                //========
                // @@@ This code is triggered only if a custom request is used to update "options" @@@
                if (query && _val != '' && isSingleSpecialChar(_val)) {
                    return true;
                }


                // STEP 4
                //========
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

        if (query) {
            const _oparams: any[] = fetchFuncMethodParams || [];
            const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : val);
            const response: any = await fetchData((_params).join(','));
            res = filterRes(response) as never;
            return res;
        } else {
            res = filterRes(dataInit) as never;
            return res;
        }


    }



    function handleChange(e: any) {
        const val = e.target.value;

        setChangedVal(val);

        // update temporary value
        setControlTempValue(val);

        //
        if (!MANUAL_REQ) {
            matchData(val, fetchUpdate, AUTO_SHOW_OPTIONS).then((response: any) => {

                setOrginalData(response);


                //
                onChange?.(inputRef.current, response, '', listRef.current);

                //
                setIsOpen(true);

                // window position
                setTimeout(() => {
                    popwinPosInit();
                }, 0);



            });
        } else {

            //
            onChange?.(inputRef.current, orginalData, '', listRef.current);

            // window position
            setTimeout(() => {
                popwinPosInit();
            }, 0);

        }



    }

    function cancel() {
        // hide list
        setIsOpen(false);


        //
        setOrginalData([]);
        popwinPosHide();

        // update temporary value
        setControlTempValue(null);

    }


    async function fetchData(params: any) {

        // update request process
        setReqProgress(true);

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


            //
            onFetch?.(_ORGIN_DATA);

            //
            setOrginalDataInit(_ORGIN_DATA);


            //
            // window position
            if (componentFirstLoad) {

                setTimeout(() => {
                    popwinPosInit();
                }, 500);
            }

            // update request process
            setReqProgress(false);

            return _ORGIN_DATA;
        } else {

            // update request process
            setReqProgress(false);

            return [];
        }


    }

    async function handleSelect(el: any, dataInput: any = false) {

        if (typeof el === 'undefined') return;


        // update value
        if (dataInput) {
            const _data = JSON.parse(dataInput);

            onChange?.(inputRef.current, orginalData, _data, listRef.current);
            setChangedVal(_data.label);

        } else {
            const _curData = typeof el.currentTarget !== 'undefined' ? el.currentTarget.dataset.itemdata : el.dataset.itemdata;
            if (typeof _curData === 'undefined') return;
    
            const _data = JSON.parse(_curData);

            let res: any = [];

            if (!AUTO_SHOW_OPTIONS) {
                res = await matchData(inputRef.current.value, false, AUTO_SHOW_OPTIONS);
            } else {
                res = dataInit;
            }

            onChange?.(inputRef.current, res, _data, listRef.current);
            setChangedVal(_data.label);
        }


        // cancel
        cancel();
    }

    async function handleFetch() {
        if (MANUAL_REQ) {
            
            const res: any = await matchData(changedVal, true, true);
            setOrginalData(res);

            //
            setIsOpen(res.length === 0 ? true : false);

            // window position
            setTimeout(() => {
                popwinPosInit();
            }, 0);

        }
    }

    function activate() {
        if (AUTO_SHOW_OPTIONS) {
            setOrginalData(dataInit);
            setIsOpen(true);
        }

        // window position
        setTimeout(() => {
            popwinPosInit();
        }, 0);
    }

    function handleShowList() {

        // Reset the out-of-focus marker
        isBlurringRef.current = false;

        if (!isOpen) {
            activate();
        } else {
            // cancel
            cancel();
        }


        // Every time the input changes or the search button is clicked, a data request will be triggered
        if (
            (!AUTO_SHOW_OPTIONS && (controlTempValue === '' || controlTempValue === null)) || 
            MANUAL_REQ
        ) {
            setTimeout(() => {
                popwinPosHide();
            }, 0);
        }
        
      
        onClick?.(inputRef.current, listRef.current)
    }


    function handleBlur(e: any) {

        // Set the out-of-focus marker
        isBlurringRef.current = true;

        setTimeout(() => {
            // cancel
            cancel(); // The delay is to avoid losing focus and not being able to click on the option

            //
            onBlur?.(inputRef.current, listRef.current);
        }, 300);

    }


    function optionFocus(type: string) {

        return new Promise(function (resolve) {

            // Determine the "active" class name to avoid listening to other unused components of the same type
            if (listRef.current === null || !rootRef.current.classList.contains('active')) return;


            let options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.hide)'));
            // Avoid selecting options that are disabled
            options = options.filter((options: HTMLElement) => !options.classList.contains('disabled'));

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


            if (listRef.current !== null) {
                const currentData = listRef.current.dataset.data;

                if (typeof currentData !== 'undefined') {
                    handleSelect(null, currentData);

                    //
                    const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.no-match)'));
                    options.forEach((node: any) => {
                        node.classList.remove('active');
                    });


                    //
                    onChange?.(inputRef.current, options.map((node: HTMLElement) => JSON.parse(node.dataset.itemdata as any)), JSON.parse(currentData), listRef.current);

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
        if (res !== null) listRef.current.dataset.data = JSON.stringify({
            value: res.dataset.value,
            label: res.dataset.label,
            queryString: res.dataset.querystring
        });
    }
    

    useEffect(() => {


        // Component first load
        //--------------
        if (!componentFirstLoad) {
            setComponentFirstLoad(true);
        }


        // update default value
        //--------------
        setChangedVal(value || '');


        // data init
        //--------------
        // If automatic request enabled, do not send them for the first time
        if (AUTO_SHOW_OPTIONS) {
            const _oparams: any[] = fetchFuncMethodParams || [];
            const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : (MANUAL_REQ && !fetchUpdate) ? '' : (fetchUpdate ? QUERY_STRING_PLACEHOLDER : (MANUAL_REQ ? QUERY_STRING_PLACEHOLDER : '')));
            if (!firstFetch) {
                fetchData((_params).join(','));
                setFirstFetch(true);  // avoid triggering two data requests if the input value has not changed
            }
        }


    }, [value, data]);


    return (
        <>

            {label ? <><div className="livesearch__wrapper__label">{typeof label === 'string' ? <label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={`label-${idRes}`} className="form-label">{label}</label>}</div></> : null}

            <div 
                ref={rootRef} 
                className={combinedCls(
                    'livesearch__wrapper',
                    clsWrite(wrapperClassName, 'mb-3 position-relative'),
                    {
                        'active': isOpen
                    }
                )} 
                onKeyDown={handleKeyPressed}
            >

       
                <SearchBar
                    wrapperClassName=""
                    controlClassName={controlClassName}
                    controlExClassName={controlExClassName}
                    controlGroupWrapperClassName={controlGroupWrapperClassName}
                    controlGroupTextClassName={controlGroupTextClassName}  
                    ref={(node) => {
                        inputRef.current = node;
                        if (typeof externalRef === 'function') {
                            externalRef(node);
                        } else if (externalRef) {
                            externalRef.current = node;
                        }
                    }}
                    value={changedVal}
                    label=""
                    tabIndex={tabIndex}
                    id={idRes}
                    name={name}
                    placeholder={placeholder}
                    units={units}
                    iconLeft={iconLeft}
                    iconRight={iconRight}
                    minLength={minLength}
                    maxLength={maxLength}
                    disabled={disabled}
                    required={required}
                    readOnly={readOnly}
                    style={style}
                    appearance={appearance}
                    onChange={(e: any) => {
                        handleChangeFetchSafe(e);
                    }}
                    onBlur={handleBlur}
                    onSubmit={handleFetch}
                    onClick={handleShowList}
                    icon={hideIcon ? '' : (!MANUAL_REQ ? '' : icon)}
                    btnId={btnId}
                    autoComplete={typeof autoComplete === 'undefined' ? 'off' : autoComplete}
                    autoCapitalize={typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize}
                    spellCheck={typeof spellCheck === 'undefined' ? false : spellCheck}
                    isSearchInput={isSearchInput}
                    onKeyPressedCallback={(e: KeyboardEvent<any>) => {
                        onKeyboardInput?.(e, inputRef.current, listRef.current);
                    }}
                    onPressEnter={(event: any, onComposition: any) => {
                        onPressEnter?.(event, onComposition);
                    }}
                    {...attributes}
                />


                {orginalData && !hasErr ? <>
                    <RootPortal show={true} containerClassName="LiveSearch">
                        <div
                            ref={listRef}
                            id={`livesearch__options-wrapper-${idRes}`}
                            className={combinedCls(
                                'livesearch__options-wrapper list-group position-absolute border shadow small',
                                optionsExClassName,
                                {
                                    'shadow-none border-0': (orginalData && orginalData.length === 0) && !NO_MATCH_POPUP
                                }
                            )}
                            style={{ zIndex: DEPTH, width: WIN_WIDTH, display: 'none' }}
                            role="tablist"
                        >
                            <div
                                className={combinedCls(
                                    'livesearch__options-contentlist rounded',
                                    {
                                        'd-none': (orginalData && orginalData.length === 0) && !NO_MATCH_POPUP
                                    }
                                )}
                                ref={listContentRef}
                            >
                                <div className="livesearch__options-contentlist-inner">



                                    {/* NO MATCH */}
                                    {orginalData && orginalData.length === 0 ? <>
                                        <button
                                            tabIndex={-1}
                                            type="button"
                                            className="list-group-item list-group-item-action border-top-0 border-bottom-0 no-match livesearch__control-option-item--nomatch"
                                            disabled
                                        >{fetchNoneInfo}</button>
                                    </> : null}
                                    {/* /NO MATCH */}


                                    {orginalData ? orginalData.map((item, index) => {
                                        const startItemBorder = index === 0 ? 'border-top-0' : '';
                                        const endItemBorder = index === orginalData.length - 1 ? 'border-bottom-0' : '';

                                        return <button
                                            tabIndex={-1}
                                            type="button"
                                            data-index={index}
                                            key={index}
                                            className={combinedCls(
                                                'list-group-item list-group-item-action border-start-0 border-end-0 border-top-0 border-bottom-0 livesearch__control-option-item',
                                                startItemBorder,
                                                endItemBorder,
                                                {
                                                    'disabled': item.disabled
                                                }

                                            )}
                                            data-value={`${item.value}`}
                                            data-label={`${item.label}`}
                                            data-querystring={`${typeof item.queryString === 'undefined' ? '' : item.queryString}`}
                                            data-itemdata={JSON.stringify(item)}
                                            data-list-item-label={`${typeof item.listItemLabel === 'undefined' ? '' : item.listItemLabel}`}
                                            role="tab"
                                            onClick={handleSelect}
                                        >

                                            {typeof renderOption === 'function' ? <>
                                                {renderOption(item, index)}
                                            </> : <>
                                                <span dangerouslySetInnerHTML={{
                                                    __html: typeof item.listItemLabel === 'undefined' ? item.label : item.listItemLabel
                                                }}></span>
                                            </>}

                                        </button>
                                    }) : null}

                                </div>

                            </div>


                        </div>


                    </RootPortal>

                </> : null}


                {/* LOADER */}
                {reqProgress ? <><div className={`livesearch-loader ${!hideIcon ? 'pos-offset' : ''}`}>{loader || <svg height="12px" width="12px" viewBox="0 0 512 512"><g><path fill="inherit" d="M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z" /><path fill="inherit" d="M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z" /><path fill="inherit" d="M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z" /><path fill="inherit" d="M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z" /><path fill="inherit" d="M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z" /><path fill="inherit" d="M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z" /><path fill="inherit" d="M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z" /><path fill="inherit" d="M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z" /></g></svg>}</div></> : null}
                {/* /LOADER */}


                {hideIcon ? null : <>
                    <span className="livesearch__wrapper-searchbtn">
                        <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" style={MANUAL_REQ ? undefined :{pointerEvents: 'none'}} onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleFetch();
                        }}>
                            <svg width="1em" height="1em" fill="#a5a5a5" viewBox="0 0 16 16">
                                <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                            </svg>
                        </button>

                    </span>
                </>}






            </div>

        </>
    )
});


export default LiveSearch;