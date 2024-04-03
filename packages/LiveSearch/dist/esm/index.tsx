import React, { useId, useEffect, useState, useRef } from 'react';

import { debounce } from './utils/performance';
import useDebounce from './utils/useDebounce';

import { getAbsolutePositionOfStage } from './utils/get-element-property';

import RootPortal from 'funda-root-portal';
import SearchBar from 'funda-searchbar';



interface OptionConfig {
    disabled?: boolean;
    label: any;
    listItemLabel?: any;
    value: any;
    queryString: string | number;
}


type LiveSearchProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    exceededSidePosOffset?: number;
    appearance?: string;
    isSearchInput?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    readOnly?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    options?: OptionConfig[] | string;
    winWidth?: string | Function;
    icon?: React.ReactNode | string;
    btnId?: string;
    fetchTrigger?: boolean;
    hideIcon?: boolean;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Incoming data, you can set the third parameter of `onFetch` */
    data?: any;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchAutoShow?: boolean;
    fetchNoneInfo?: string;
    fetchUpdate?: boolean;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onChange?: (e: any, data: any, selectedData: any) => void;
    onBlur?: (e: any) => void;
};


const LiveSearch = (props: LiveSearchProps) => {
    const {
        wrapperClassName,
        controlClassName,
        exceededSidePosOffset,
        appearance,
        isSearchInput,
        readOnly,
        disabled,
        required,
        placeholder,
        options,
        value,
        label,
        name,
        id,
        icon,
        btnId,
        fetchTrigger,
        hideIcon,
        depth,
        maxLength,
        style,
        winWidth,
        tabIndex,
        data,
        fetchAutoShow,
        fetchNoneInfo,
        fetchUpdate,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onChange,
        onBlur,
        ...attributes
    } = props;


    const POS_OFFSET = 0;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const INPUT_MATCH_ENABLED = typeof fetchAutoShow === 'undefined' || fetchAutoShow === false ? true : false;
    const WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);
    const optionsRes = options ? (isJSON(options) ? JSON.parse(options as string) : options) : [];
    const windowScrollUpdate = debounce(handleScrollEvent, 500);

    // return a array of options
    let staticOptionsData: OptionConfig[] = optionsRes;

    //
    const [firstFetch, setFirstFetch] = useState<boolean>(false);
    const [dataInit, setOrginalDataInit] = useState<any[]>(staticOptionsData);
    const [orginalData, setOrginalData] = useState<any[]>([]);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [componentFirstLoad, setComponentFirstLoad] = useState<boolean>(false);


    //performance
    const handleChangeFetchSafe = useDebounce((e: any) => {
        handleChange(e);
    }, 350, [dataInit]);


    // Determine whether it is in JSON format
    function isJSON(str: any) {

        if (typeof (str) === 'string' && str.length > 0) {

            if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
                return false;
            } else {

                if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
                    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                    return true;

                } else {
                    return false;
                }

            }

        } else {

            if (
                typeof (str) === 'object' &&
                Object.prototype.toString.call(str) === '[object Object]' &&
                !str.length
            ) {
                return true;
            } else {
                return false;
            }

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
        popwinPosInit(false);
    }



    function popwinPosInit(showAct: boolean = true) {
        if (listContentRef.current === null || inputRef.current === null) return;

        const contentHeightOffset = 80;
        let contentMaxHeight = 0;

        // update modal position
        const _modalRef: any = document.querySelector(`#livesearch__options-wrapper-${idRes}`);
        const _triggerRef: any = inputRef.current;

        // console.log(getAbsolutePositionOfStage(_triggerRef));

        if (_modalRef === null) return;

        const { x, y, width, height } = getAbsolutePositionOfStage(_triggerRef);
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

        if (typeof listContentRef.current.dataset.pos === 'undefined') listContentRef.current.dataset.pos = targetPos;



        // STEP 3:
        //-----------
        // Detect content MAX HEIGHT and ACTUAL HEIGHT
        let _contentBox = listContentRef.current.getBoundingClientRect();
        const _contentActualHeight = listContentRef.current.querySelector('.livesearch__options-contentlist-inner').clientHeight;


        if (targetPos === 'top') {
            contentMaxHeight = _triggerBox.top;

            if (_contentBox.height > _contentActualHeight) {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';
            } else {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';

                // recalculate the height
                _contentBox = listContentRef.current.getBoundingClientRect();
                if (_contentBox.height > contentMaxHeight) listContentRef.current.style.height = contentMaxHeight - contentHeightOffset + 'px';

            }
        }

        if (targetPos === 'bottom') {
            contentMaxHeight = window.innerHeight - _triggerBox.bottom;

            if (_contentBox.height > _contentActualHeight) {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';
            } else {
                if (_contentActualHeight > 0) listContentRef.current.style.height = _contentActualHeight + 'px';

                // recalculate the height
                _contentBox = listContentRef.current.getBoundingClientRect();
                if (_contentBox.height > contentMaxHeight) listContentRef.current.style.height = contentMaxHeight - 10 + 'px';
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

            if (_modalBox.right > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if (_modalBox.left < 0) {
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
    async function matchData(val: string = '', query: boolean = false) {

        let res: any[] = [];
        let filterRes = (data: any[]) => {
            return data.filter((item: any) => {

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

        if (INPUT_MATCH_ENABLED) {

            //
            if (!fetchTrigger) {
                matchData(val, fetchUpdate).then((response: any) => {

                    setOrginalData(response);


                    //
                    onChange?.(inputRef.current, response, '');

                    //
                    setIsOpen(true);

                    // window position
                    setTimeout(() => {
                        popwinPosInit();
                    }, 0);



                });
            } else {

                //
                onChange?.(inputRef.current, orginalData, '');

                // window position
                setTimeout(() => {
                    popwinPosInit();
                }, 0);

            }

        } else {

            //
            onChange?.(inputRef.current, orginalData, '');


            // window position
            setTimeout(() => {
                popwinPosInit();
            }, 0);
        }



    }

    function cancel() {
        setOrginalData([]);
        popwinPosHide();
    }


    async function fetchData(params: any) {

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


            return _ORGIN_DATA;
        } else {
            return [];
        }


    }

    async function handleSelect(el: any, dataInput: any = false) {

        if (typeof el === 'undefined') return;


        // update value
        if (dataInput) {
            const _data = JSON.parse(dataInput);

            onChange?.(inputRef.current, orginalData, _data);
            setChangedVal(_data.label);

        } else {
            const _curData = typeof el.target !== 'undefined' ? el.target.dataset.itemdata : el.dataset.itemdata;
    
            const _data = JSON.parse(_curData);

            let res: any = [];

            if (INPUT_MATCH_ENABLED) {
                res = await matchData(inputRef.current.value, false);
            } else {
                res = dataInit;
            }

            onChange?.(inputRef.current, res, _data);
            setChangedVal(_data.label);
        }


        // cancel
        setIsOpen(false);
        cancel();
    }

    async function handleFetch() {
        if (fetchTrigger) {
            const res: any = await matchData(changedVal, fetchUpdate);
            setOrginalData(res);


            //
            setIsOpen(res.length === 0 ? true : false);

            // window position
            setTimeout(() => {
                popwinPosInit();
            }, 0);

        }
    }

    function handleClick() {
        if (!INPUT_MATCH_ENABLED) {
            setOrginalData(dataInit);
            setIsOpen(true);
        }

        // window position
        setTimeout(() => {
            popwinPosInit();
        }, 0);
    }


    function handleBlur(e: any) {

        setIsOpen(false);
        if (!fetchTrigger) {
            setTimeout(() => {

                //
                onBlur?.(inputRef.current);

                //
                cancel();

            }, 300);
        }

    }

    function handleMouseLeaveTrigger() {
        setIsOpen(false);
    }

    function handleClose(event: any) {

        if (event.target.closest(`.livesearch__wrapper`) === null && event.target.closest(`.livesearch__options-wrapper`) === null) {
            // cancel
            setIsOpen(false);
            cancel();
        }
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
        const _oparams: any[] = fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : (fetchTrigger && !fetchUpdate) ? '' : (fetchUpdate ? '------' : (fetchTrigger ? '------' : '')));
        if (!firstFetch) {
            fetchData((_params).join(','));
            setFirstFetch(true);  // avoid triggering two data requests if the input value has not changed
        }



        // keyboard listener
        //--------------
        const listener = async (event: any) => {


            let res: any = null;

            if (event.code === "Enter" || event.code === "NumpadEnter") {

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
                        onChange?.(inputRef.current, options.map((node: HTMLElement) => JSON.parse(node.dataset.itemdata as any)), JSON.parse(currentData));

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
            if (res !== null) listRef.current.dataset.data = JSON.stringify({
                value: res.dataset.value,
                label: res.dataset.label,
                queryString: res.dataset.querystring
            });


        };

        document.removeEventListener("keydown", listener);
        document.addEventListener("keydown", listener);

        //--------------
        document.removeEventListener('pointerdown', handleClose);
        document.addEventListener('pointerdown', handleClose);
        document.addEventListener('touchstart', handleClose);


        // Add function to the element that should be used as the scrollable area.
        //--------------
        window.removeEventListener('scroll', windowScrollUpdate);
        window.removeEventListener('touchmove', windowScrollUpdate);
        window.addEventListener('scroll', windowScrollUpdate);
        window.addEventListener('touchmove', windowScrollUpdate);
        windowScrollUpdate();




        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {

            document.removeEventListener("keydown", listener);
            document.removeEventListener('pointerdown', handleClose);
            window.removeEventListener('scroll', windowScrollUpdate);
            window.removeEventListener('touchmove', windowScrollUpdate);

        };

    }, [value, data]);


    return (
        <>

            {label ? <><div className="livesearch__wrapper__label">{typeof label === 'string' ? <label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={`label-${idRes}`} className="form-label">{label}</label>}</div></> : null}

            <div className={`livesearch__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'} ${isOpen ? 'active' : ''}`} ref={rootRef} onMouseLeave={handleMouseLeaveTrigger}>
                <SearchBar
                    wrapperClassName=""
                    controlClassName={controlClassName}
                    ref={inputRef}
                    value={changedVal}
                    label=""
                    tabIndex={tabIndex}
                    id={idRes}
                    name={name}
                    placeholder={placeholder}
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
                    onClick={handleClick}
                    icon={hideIcon ? '' : (!fetchTrigger ? '' : icon)}
                    btnId={btnId}
                    autoComplete='off'
                    isSearchInput={isSearchInput}
                    {...attributes}
                />


                {orginalData && !hasErr ? <>
                    <RootPortal show={true} containerClassName="LiveSearch">
                        <div
                            ref={listRef}
                            id={`livesearch__options-wrapper-${idRes}`}
                            className={`livesearch__options-wrapper list-group position-absolute border shadow small ${winWidth ? '' : ''}`}
                            style={{ zIndex: (depth ? depth : 1055), width: WIN_WIDTH, display: 'none' }}
                            role="tablist"
                        >
                            <div
                                className="livesearch__options-contentlist rounded"
                                style={{ backgroundColor: 'var(--bs-list-group-bg)' }}
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
                                        >{fetchNoneInfo || 'No match yet'}</button>
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
                                            className={`list-group-item list-group-item-action border-start-0 border-end-0 border-top-0 border-bottom-0 livesearch__control-option-item ${startItemBorder} ${endItemBorder} ${typeof item.disabled === 'undefined' ? '' : (item.disabled == true ? 'disabled' : '')}`}
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
                                    }) : null}

                                </div>

                            </div>


                        </div>


                    </RootPortal>

                </> : null}


                {hideIcon ? null : <>
                    {!fetchTrigger ? <>
                        <span className="livesearch__wrapper-searchbtn position-absolute top-0 end-0">
                            <button tabIndex={-1} type="button" className="btn border-end-0 rounded-pill" style={{ pointerEvents: 'none' }}>
                                <svg width="1em" height="1em" fill="#a5a5a5" viewBox="0 0 16 16">
                                    <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                </svg>
                            </button>

                        </span>
                    </> : null}
                </>}






            </div>

        </>
    )
};


export default LiveSearch;