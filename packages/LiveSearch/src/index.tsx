import React, { useId, useEffect, useState, useRef } from 'react';

import { debounce } from './utils/performance';
import useThrottle from './utils/useThrottle';

import SearchBar from 'funda-searchbar';



type LiveSearchProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    appearance?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    winWidth?: string | Function;
    icon?: React.ReactNode | string;
    btnId?: string;
    fetchTrigger?: boolean;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
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
    onFetch?: (data: any) => void;
    onSelect?: (e: any, data: any) => void;
    onChange?: (e: any, data: any) => void;
    onBlur?: (e: any, data: any) => void;
};


const LiveSearch = (props: LiveSearchProps) => {
    const {
        wrapperClassName,
        controlClassName,
        appearance,
        disabled,
        required,
        placeholder,
        value,
        label,
        name,
        id,
        icon,
        btnId,
        fetchTrigger,
        depth,
        maxLength,
        style,
        winWidth,
        tabIndex,
        fetchNoneInfo,
        fetchUpdate,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onSelect,
        onChange,
        onBlur,
    } = props;


    const WIN_WIDTH = typeof winWidth === 'function' ? winWidth() : winWidth ? winWidth : 'auto';
    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const listContentRef = useRef<any>(null);
    const windowScrollUpdate = debounce(handleScrollEvent, 500);
    


    //
    const [firstFetch, setFirstFetch] = useState<boolean>(false);
    const [dataInit, setDataInit] = useState<any[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hasErr, setHasErr] = useState<boolean>(false);
 

   //performance
    const handleChangeFetchSafe = useThrottle((e: any) => {
        handleChange(e);
    }, 150, [dataInit]);




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

        if ( el === null ) return;
        

        const PLACEMENT_TOP = 'top-0';
        const PLACEMENT_BOTTOMEND = 'bottom-0';
        const PLACEMENT_RIGHT = 'end-0';
        const PLACEMENT_LEFT = 'start-0';

        const elTop = inputRef.current.getBoundingClientRect().top;
        const elSpacing = 50 + inputRef.current.clientHeight*3;
        const elMinWindowSpacing = inputRef.current.clientHeight*2;


        //restore position
        if ( restorePos ) {
            if ( isInViewport(el) ) {
                el.classList.remove(PLACEMENT_BOTTOMEND);
                el.style.removeProperty('bottom');
            }
            return;
        }
    
        // STEP 1:
        // If the content exceeds the height of the window, first limit height and add scrollbar
        let maxHeight = window.innerHeight - elSpacing;
        if ( maxHeight < inputRef.current.clientHeight ) maxHeight = elMinWindowSpacing;
        
        if ( el.offsetHeight > 0 && (el.offsetHeight > maxHeight) ) {

            const newH = maxHeight - (elTop > window.innerHeight/2 ? 0 : elTop) + elMinWindowSpacing;

            // default position
            listContentRef.current.style.height = newH + 'px';
            

            // if it's on top
            if ( newH > maxHeight ) {
                listContentRef.current.style.height = elTop - elMinWindowSpacing + 'px';
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
            el.style.setProperty('bottom', inputRef.current.clientHeight + 5 + 'px', "important");
        }



        // STEP 3:
        // It is on top when no scrollbars have been added
        if ( !isInViewport(el) ) {
            if ( el.getBoundingClientRect().top < 0 ) {
                listContentRef.current.style.height = el.offsetHeight + el.getBoundingClientRect().top - elMinWindowSpacing + 'px';
                listContentRef.current.style.overflowY = 'auto';
            }
        }
  
        
    }


    //
    async function matchData(val: string = '', query: boolean = false) {

        let res: any[] = [];
        let filterRes = (data: any[]) => {
            return data.filter((item: any) => {

                // Avoid fatal errors causing page crashes
                const _queryString = typeof item.queryString !== 'undefined' ? item.queryString : '';

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

        // detect string which contains only spaces
        if ( !val.replace(/\s/g, '').length === true ) return;

        //
        if ( !fetchTrigger ) {
            matchData(val, fetchUpdate).then((response: any) => {

                setData(response);

                //
                onChange?.(inputRef.current, response); 

                //
                setIsOpen(true);
            });
        }

        // window position
        setTimeout( ()=> {
            getPlacement(listRef.current);
        }, 0 );

    }
    

    async function activate() {
        if ( fetchTrigger ) {
            const res: any = await matchData(changedVal, fetchUpdate);
            setData(res);
            

            //
            setIsOpen(res.length === 0 ? true : false);
        }   
    }

    async function fetchData(params: any) {

        if ( typeof fetchFuncAsync === 'object' ) {
            
            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;
  
            // reset data structure
            if (typeof (fetchCallback) === 'function') {
                _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if ( _ORGIN_DATA.length > 0 &&  typeof _ORGIN_DATA[0].value === 'undefined' ) {
                console.warn( 'The data structure does not match, please refer to the example in the component documentation.' );
                setHasErr(true);
                _ORGIN_DATA = [];
            }
            

            
            //
            onFetch?.(_ORGIN_DATA);
            
            //
            setDataInit(_ORGIN_DATA);
    
            return _ORGIN_DATA;
        } else {
            return [];
        }


    }

    async function handleSelect(el: any, dataInput: any = false) {
        
        if ( typeof el === 'undefined' ) return;

        let index: number | undefined | string;

        
        // update value
        if ( dataInput ) {
            const _data = JSON.parse(dataInput);

            onSelect?.(inputRef.current, _data);
            setChangedVal(_data.label);
        
        } else {
            index = typeof el.target !== 'undefined' ? el.target.dataset.index : el.dataset.index;

            const res: any = await matchData(inputRef.current.value, false);
            onSelect?.(inputRef.current, res[index as never]);
            setChangedVal(res[index as never].label);
        }

        setData([]);

    }


    function handleFetch() {
        activate();


        // window position
        setTimeout( ()=> {
            getPlacement(listRef.current);
        }, 0 );     
    }


    function handleBlur(e: any) {
        
        setIsOpen(false);
        if ( !fetchTrigger ) {
            setTimeout(() => {
                //
                onBlur?.(inputRef.current, data);
                setData([]);

            }, 300);
        }

    }

    function handleMouseLeaveTrigger() {
        setIsOpen(false);
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

        // update default value
        //--------------
        setChangedVal(value || '');
       

        // data init
        //--------------
        const _oparams: any[] = fetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : (fetchTrigger ? '-' : ''));
        if ( !firstFetch ) {
            fetchData((_params).join(','));
            setFirstFetch(true);  // avoid triggering two data requests if the input value has not changed
        }

        

        // keyboard listener
        //--------------
        const listener = async (event: any) => {

       
            let res: any = null;
 
            if (event.code === "Enter" || event.code === "NumpadEnter") {

                // Determine the "active" class name to avoid listening to other unused components of the same type
                if ( listRef.current === null || !rootRef.current.classList.contains('active') ) return;

                if ( fetchTrigger ) {
                    handleFetch();
                    return;
                }

                if ( listRef.current !== null ) {
                    const currentData = listRef.current.dataset.data;
                    if ( typeof currentData !== 'undefined' ) {
                        handleSelect(null, currentData);
                        const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item:not(.no-match)'));
                        options.forEach((node: any) => {
                            node.classList.remove('active');
                        });
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
            if ( res !== null ) listRef.current.dataset.data = JSON.stringify({
                value: res.dataset.value, 
                label: res.dataset.label,
                queryString: res.dataset.querystring
            });
            

        };

        document.removeEventListener("keydown", listener);
        document.addEventListener("keydown", listener);


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
            window.removeEventListener('scroll', windowScrollUpdate);
            window.removeEventListener('touchmove', windowScrollUpdate);

        };

    }, [value]);


    return (
        <>

            <div className={`livesearch__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'} ${isOpen ? 'active' : ''}`} ref={rootRef} onMouseLeave={handleMouseLeaveTrigger}>
                <SearchBar
                    wrapperClassName=""
                    controlClassName={controlClassName}
                    ref={inputRef}
                    value={changedVal}
                    label={label}
                    tabIndex={tabIndex}
                    id={idRes}
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    disabled={disabled}
                    required={required}
                    style={style}
                    appearance={appearance}
                    onChange={(e: any) => {
                        handleChangeFetchSafe(e);
                    }}    
                    onBlur={handleBlur}
                    onClick={handleFetch}
                    icon={!fetchTrigger ? '' : icon}
                    btnId={btnId}
                    autoComplete='off'
                />


                {data && data.length > 0 && !hasErr ? <>
                    <div ref={listRef} className={`list-group position-absolute border shadow small ${winWidth ? '' : 'w-100'}`} style={{ marginTop: '0.2rem', zIndex: (depth ? depth : 100), minWidth: '200px', width: WIN_WIDTH}} role="tablist">
                        <div className="rounded" ref={listContentRef}>
                            {data ? data.map((item, index) => {
                                const startItemBorder = index === 0 ? 'border-top-0' : '';
                                const endItemBorder = index === data.length-1 ? 'border-bottom-0' : '';

                                return <button tabIndex={-1} onClick={handleSelect} type="button" data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 ${startItemBorder} ${endItemBorder}`} data-value={`${item.value}`} data-label={`${item.label}`} data-querystring={`${item.queryString}`} role="tab">{item.label}</button>
                            }) : null}
                        </div>


                    </div>

                </> : null}

                {data && data.length === 0 && !hasErr && isOpen ? <>
                    <div ref={listRef} className={`list-group position-absolute border shadow small ${winWidth ? '' : 'w-100'}`} style={{ marginTop: '0.2rem', zIndex: (depth ? depth : 100), minWidth: '200px', width: WIN_WIDTH}} role="tablist">

                        <div className="rounded" ref={listContentRef}>
                            <button tabIndex={-1} type="button" className="list-group-item list-group-item-action no-match" disabled>{fetchNoneInfo || 'No match yet'}</button>
                        </div>


                    </div>
                </> : null}


            </div>

        </>
    )
};


export default LiveSearch;