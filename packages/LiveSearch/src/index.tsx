import React, { useId, useEffect, useState, useRef } from 'react';

import SearchBar from 'rpb-searchbar';

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


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const listRef = useRef<any>(null);


    //
    const [firstFetch, setFirstFetch] = useState<boolean>(false);
    const [dataInit, setDataInit] = useState<any[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hasErr, setHasErr] = useState<boolean>(false);


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



    //
    function getPlacement(el: HTMLElement, restore: boolean = false) {

        if ( el === null ) return;

        const PLACEMENT_TOP = 'top-0';
        const PLACEMENT_BOTTOMEND = 'bottom-0';
        const PLACEMENT_RIGHT = 'end-0';
        const PLACEMENT_LEFT = 'start-0';

        // Determine whether the height of the window is smaller than the object
        if ( (window.innerHeight || document.documentElement.clientHeight) < el.clientHeight ) {
            el.classList.add('scroll-enabled');
            el.style.maxHeight = window.innerHeight - 50 + 'px';
            el.style.overflowY = 'auto';

            return true;
        } else {
            el.classList.remove('scroll-enabled');
            el.style.maxHeight = 'none';
            el.style.overflowY = 'inherit';
        }
    
        //restore status
        if ( restore ) {
            listRef.current.classList.remove(PLACEMENT_BOTTOMEND, 'scroll-enabled');
            return;
        }

        //
        if ( !isInViewport(el) ) {
            el.classList.add(PLACEMENT_BOTTOMEND);
            el.style.setProperty('bottom', inputRef.current.clientHeight + 5 + 'px', "important");
        } else {
            el.classList.remove(PLACEMENT_BOTTOMEND);
            el.style.removeProperty('bottom');
        }
        
    }


    //
    async function matchData(val: string = '', query: boolean = false) {

        let res: any[] = [];
        let filterRes = (data: any[]) => {
            return data.filter((item: any) => {
                if (
                    (
                        item.letter.split(',').some((l: any) => l.charAt(0) === val.toLowerCase()) ||
                        item.letter.split(',').some((l: any) => l.replace(/ /g, '').indexOf(val.toLowerCase()) >= 0) ||
                        item.label.indexOf(val) >= 0
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
            const paramsFromUser = fetchFuncMethodParams as [];
            paramsFromUser.shift();
            paramsFromUser.unshift(val as never);
            const params = (paramsFromUser as []).join(',');
            const response: any = await fetchData(params);
            res = filterRes(response) as never;
            return res;
        } else {
            res = filterRes(dataInit) as never;
            return res;
        }


    }


    async function handleChange(e: any, onComposition: any) {
        const val = e.target.value;

        setInputValue(val);

        // detect string which contains only spaces
        if ( !val.replace(/\s/g, '').length === true ) return;

        //
        if ( !fetchTrigger ) {
            if (onComposition || !onComposition) {
                const res: any = await matchData(val, fetchUpdate);
                setData(res);

                //
                onChange?.(inputRef.current, res); 

                //
                setIsOpen(true);
            }
        }

        // window position
        setTimeout( ()=> {
            getPlacement(listRef.current);
        }, 0 );

    }
    

    async function activate() {
        if ( fetchTrigger ) {
            const res: any = await matchData(inputValue, fetchUpdate);
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
            if ( typeof _ORGIN_DATA[0].value === 'undefined' ) {
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
        
        } else {
            index = typeof el.target !== 'undefined' ? el.target.dataset.index : el.dataset.index;

            const res: any = await matchData(inputRef.current.value, false);
            onSelect?.(inputRef.current, res[index as never]);
        }

        setData([]);

    }


    function handleSearch() {
        activate();
    }


    function handleBlur(e: any) {
        
        setIsOpen(false);
        if ( !fetchTrigger ) {
            setTimeout(() => {
                //
                onBlur?.(inputRef.current, data);
                setData([]);
                getPlacement(listRef.current, true);

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

        // data init
        //--------------
        if ( !firstFetch ) {
            fetchData((fetchFuncMethodParams as []).join(','));
            setFirstFetch(true);  // avoid triggering two data requests if the input value has not changed
        }


        // keyboard listener
        //--------------
        const listener = async (event: any) => {

       
            let res: any = null;
 
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                if ( listRef.current !== null ) {
                    const currentData = listRef.current.dataset.data;
                    if ( typeof currentData !== 'undefined' ) {
                        handleSelect(null, currentData);
                        const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item'));
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
                letter: res.dataset.letter
            });
            

        };

        document.removeEventListener("keydown", listener);
        document.addEventListener("keydown", listener);

        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            document.removeEventListener("keydown", listener);
        };

    }, [data]);


    return (
        <>

            <div className={isOpen ? `livesearch__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'} active` : `livesearch__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'}`} ref={rootRef} onMouseLeave={handleMouseLeaveTrigger}>
                <SearchBar
                    wrapperClassName=""
                    controlClassName={controlClassName}
                    ref={inputRef}
                    value={value}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onClick={handleSearch}
                    icon={!fetchTrigger ? '' : icon}
                    btnId={btnId}
                    autoComplete='off'
                />


                {data && data.length > 0 && !hasErr ? <>
                    <div ref={listRef} className="list-group position-absolute w-100 border shadow small" style={{ marginTop: '0.2rem', zIndex: (depth ? depth : 100)}} role="tablist">
                        {data ? data.map((item, index) => {
                            const startItemBorder = index === 0 ? 'border-top-0' : '';
                            const endItemBorder = index === data.length-1 ? 'border-bottom-0' : '';

                            return <button tabIndex={-1} onClick={handleSelect} type="button" data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 ${startItemBorder} ${endItemBorder}`} data-value={`${item.value}`} data-label={`${item.label}`} data-letter={`${item.letter}`} role="tab">{item.label}</button>
                        }) : null}

                    </div>

                </> : null}

                {data && data.length === 0 && !hasErr && isOpen ? <>
                    <div ref={listRef} className="list-group position-absolute w-100 border shadow small" style={{ marginTop: '0.2rem', zIndex: (depth ? depth : 100)}} role="tablist">
                        <button tabIndex={-1} type="button" className="list-group-item list-group-item-action no-match" disabled>{fetchNoneInfo || 'No match yet'}</button>
                    </div>
                </> : null}


            </div>

        </>
    )
};


export default LiveSearch;