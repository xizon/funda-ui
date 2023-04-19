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
    const [dataInit, setDataInit] = useState<any[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [dataFetched, setDataFetched] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [searchTrigger, setSearchTrigger] = useState<boolean>(false);


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
            setDataFetched(true);
    
            return data;
        } else {
            return [];
        }


    }

    async function handleSelect(el: any) {

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

            }, 300);
        }

    }

    function handleMouseLeaveTrigger() {
        setSearchTrigger(false);
    }

    function optionFocus(type: string) {
        
        const options = [].slice.call(listRef.current.querySelectorAll('.list-group-item'));
        const currentIndex = options.findIndex((e) => e === listRef.current.querySelector('.list-group-item.active'));

        // get the next element in the list, "%" will loop around to 0
        let nextIndex;
        if ( type === 'increase' ) {
            nextIndex = currentIndex + 1 % options.length;
        } else {
            nextIndex = (currentIndex < 0 ? options.length : currentIndex) - 1 % options.length;
        }
        
    
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
        fetchData((fetchFuncMethodParams as []).join(','));

        // keyboard listener
        //--------------
        const listener = (event: any) => {
       
            if (event.code === "Enter" || event.code === "NumpadEnter") {

                // if option has active class
                const activedOption = listRef.current.querySelector('.list-group-item.active');
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

    }, [dataFetched]);


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

                <div ref={listRef} className="list-group position-absolute w-100" style={{ marginTop: '-1.1rem' }} role="tablist">
                    {data ? data.map((item, index) => {
                        return <button onClick={handleSelect} type="button" data-index={index} key={index} className="list-group-item list-group-item-action" data-value={`${item.value}`} role="tab">{item.label}</button>
                    }) : null}

                    {data.length === 0 && searchTrigger ? <button type="button" className="list-group-item list-group-item-action" disabled>{fetchNoneInfo || 'No match yet'}</button> : null}
                </div>

            </div>

        </>
    )
};

export default LiveSearch;