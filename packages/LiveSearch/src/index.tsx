import React, { useId, useEffect, useState, useRef } from 'react';

import SearchBar from 'rpb-searchbar';
const pinyin = require("chinese-to-pinyin");


export interface fetchResponseField {
    label: string | undefined;
    value: string | undefined;
}


type LiveSearchProps = {
    wrapperClassName?: string;
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
    fetchResponseField?: fetchResponseField;
    onFetch?: (data: any) => void;
    onSelect?: (e: any, data: any) => void;
    onChange?: (e: any, data: any) => void;
    onBlur?: (e: any, data: any) => void;
};


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



const LiveSearch = (props: LiveSearchProps) => {
    const {
        wrapperClassName,
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
        maxLength,
        style,
        tabIndex,
        fetchNoneInfo,
        fetchUpdate,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchResponseField,
        onFetch,
        onSelect,
        onChange,
        onBlur,
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const inputRef = useRef<any>(null);
    const listRef = useRef<any>(null);


    //
    const [firstFetch, setFirstFetch] = useState<boolean>(false);
    const [dataInit, setDataInit] = useState<any[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [searchTrigger, setSearchTrigger] = useState<boolean>(false);


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
            el.style.setProperty('bottom', inputRef.current.clientHeight + 'px', "important");
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
                    (item.letter.charAt(0) === val.toLowerCase() ||
                        item.letter.replace(/ /g, '').indexOf(val.toLowerCase()) >= 0 ||
                        item.label.indexOf(val) >= 0) &&
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
        setSearchTrigger(false);
        if ( !fetchTrigger ) {
            if (onComposition || !onComposition) {
                const res: any = await matchData(val, fetchUpdate);
                setData(res);

                //
                onChange?.(inputRef.current, res); 
            }
        }

        // window position
        setTimeout( ()=> {
            getPlacement(listRef.current);
        }, 0 );

    }
    

    async function triggerEv() {
        if ( fetchTrigger ) {
            const res: any = await matchData(inputValue, fetchUpdate);
            setData(res);
            
            setSearchTrigger(res.length === 0 ? true : false);
        }   
    }

    async function fetchData(params: any) {

        if ( typeof fetchFuncAsync === 'object' ) {

            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            const data = response.data.map((item: any) => {
                return {
                    'label': item[`${fetchResponseField?.label}`],
                    'value': item[`${fetchResponseField?.value}`],
                    'letter': pinyin(item[`${fetchResponseField?.label}`], { removeTone: true })
                }
            }); 
            
            //
            onFetch?.(data);
            
            //
            setDataInit(data);
    
            return data;
        } else {
            return [];
        }


    }

    async function handleSelect(el: any) {
        
        if ( typeof el === 'undefined' ) return;

        const index: number | undefined | string = typeof el.target !== 'undefined' ? el.target.dataset.index : el.dataset.index;
        const res: any = await matchData(inputRef.current.value, false);

        //
        onSelect?.(inputRef.current, res[index as never]);
        setData([]);

    }


    function handleSearch() {
        triggerEv();
    }


    function handleBlur(e: any) {
        
        setSearchTrigger(false);
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
        setSearchTrigger(false);
    }

    function optionFocus(type: string) {

        if ( listRef.current === null ) return;
        
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
            (options[nextIndex] as HTMLElement)?.classList.add('active');
        }
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
        const listener = (event: any) => {

            if (event.code === "Enter" || event.code === "NumpadEnter") {

                // if option has active class
                const activedOption = listRef.current?.querySelector('.list-group-item.active');
                if ( activedOption === null ) {
                    triggerEv();
                } else {
                    handleSelect(activedOption);
                }

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
                    optionFocus('decrease');

                    break;
                case "ArrowDown":
                    // Down pressed
                    optionFocus('increase');

                    break;
            }

        };

        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };

    }, [data]);


    return (
        <>

            <div className="position-relative" onMouseLeave={handleMouseLeaveTrigger}>
                <SearchBar
                    wrapperClassName={wrapperClassName}
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


                {data && data.length > 0 ? <>
                    <div ref={listRef} className="list-group position-absolute w-100 border shadow" style={{ marginTop: '-1.1rem'}} role="tablist">
                        {data ? data.map((item, index) => {
                            const startItemBorder = index === 0 ? 'border-top-0' : '';
                            const endItemBorder = index === data.length-1 ? 'border-bottom-0' : '';

                            return <button onClick={handleSelect} type="button" data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 ${startItemBorder} ${endItemBorder}`} data-value={`${item.value}`} role="tab">{item.label}</button>
                        }) : null}

                        {data.length === 0 && searchTrigger ? <button type="button" className="list-group-item list-group-item-action" disabled>{fetchNoneInfo || 'No match yet'}</button> : null}
                    </div>

                </> : null}


            </div>

        </>
    )
};

export default LiveSearch;