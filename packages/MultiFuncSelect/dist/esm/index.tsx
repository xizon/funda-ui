import React, { useId, useEffect, useState, useRef, forwardRef } from 'react';

import { throttle } from './utils/performance';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type MultiFuncSelectOptionChangeFnType = (arg1: any, arg2: any) => void;


type MultiFuncSelectProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    options?: any;
    controlArrow?: React.ReactNode;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchNoneInfo?: string;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onSelect?: (data: any) => void;
    onChange?: MultiFuncSelectOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const MultiFuncSelect = forwardRef((props: MultiFuncSelectProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
        disabled,
        required,
        value,
        label,
        name,
        readOnly,
        placeholder,
        id,
        options,
        style,
        depth,
        controlArrow,
        tabIndex,
        fetchNoneInfo,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onSelect,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const selectInputRef = useRef<any>(null);
    const valueInputRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const optionsRes = options ? isJSON( options ) ? JSON.parse( options ) : options : '';
    const windowScrollUpdate = throttle(handleScrollEvent, 5);
    

    // return a array of options
    let optionsDataInit: any[] = optionsRes; 
   
    //
    const [orginalData, setOrginalData] = useState<any[]>(optionsDataInit);
    const [data, setData] = useState<any[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [controlLabel, setControlLabel] = useState<string | undefined>('');
    const [controlValue, setControlValue] = useState<string | undefined>('');
    const [controlTempValue, setControlTempValue] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);




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


        //restore position
        if ( restorePos ) {
            if ( isInViewport(el) ) {
                el.classList.remove(PLACEMENT_BOTTOMEND);
                el.style.removeProperty('bottom');
            }
            return;
        }


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

        //
        if ( !isInViewport(el) ) {
            el.classList.add(PLACEMENT_BOTTOMEND);
            el.style.setProperty('bottom', selectInputRef.current.clientHeight + 5 + 'px', "important");
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


    async function fetchData(params: any, defaultValue) {

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

            // value & label must be initialized
            setControlValue(defaultValue); 

            const filterRes = _ORGIN_DATA.filter((item: any) => item.value == value );
            if ( typeof filterRes[0] !== 'undefined' ) setControlLabel(filterRes[0].label);
            

            //
            setData(_ORGIN_DATA); // data must be initialized

            //
            setOrginalData(_ORGIN_DATA);

            //
            onFetch?.(_ORGIN_DATA);

        
            return _ORGIN_DATA;
        } else {


            // value & label must be initialized
            setControlValue(defaultValue);

            const filterRes = optionsDataInit.filter((item: any) => item.value == defaultValue );
            if ( typeof filterRes[0] !== 'undefined' ) setControlLabel(filterRes[0].label);
            

            //
            setData(optionsDataInit); // data must be initialized

            //
            setOrginalData(optionsDataInit);   

            return [];
        }


    }

    function cancel() {
        // hide list
        setIsOpen(false);

        // restore data
        setData(orginalData);
        
        // update temporary value
        setControlTempValue(null);
    }

    function activate() {
        // show list
        setIsOpen(true);

        // restore data
        setData(orginalData);

        // update temporary value
        setControlTempValue('');
 
    }


    async function handleSelect(el: any, dataInput: any = false) {
        
        if ( typeof el === 'undefined' ) return;
        
        let index: number | undefined | string;
        

        // cancel
        cancel();

        // update value * label
        if ( dataInput ) {
            const _data = JSON.parse(dataInput);
            setControlValue(_data.value); 
            setControlLabel(_data.label); 

            if ( typeof(onChange) === 'function' ) {
                onChange?.(selectInputRef.current, _data);
                selectInputRef.current.blur();
            }

        } else {
            
            index = typeof el.target !== 'undefined' ? el.target.dataset.index : el.dataset.index;
            setControlValue(data[index as never].value); 
            setControlLabel(data[index as never].label); 

            if ( typeof(onChange) === 'function' ) {
                onChange?.(selectInputRef.current, data[index as never]);
                selectInputRef.current.blur();
            }            
        }


        //remove focus style
        rootRef.current.classList.remove('focus');


    }


    function handleSearch(event: any) {

        activate();

        // window position
        setTimeout( ()=> {
            getPlacement(listRef.current);
        }, 0 );  
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
        if ( val === '' ) {
            // No elements found. Consider changing the search query.
            // restore data
            setData(orginalData);
        } else {

            const filterRes = (data: any[]) => {
                return orginalData.filter((item: any) => {
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

            setData(filterRes);

            // window position
            setTimeout( ()=> {
                getPlacement(listRef.current);
            }, 0 );  
        }


    }

    //
    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);    
    }

    function handleBlur(event: any) {

        //remove focus style
        rootRef.current.classList.remove('focus');

        setTimeout(() => {
            // cancel
            cancel();
            onBlur?.(event);
        }, 300);

    }



    function handleClose(event: any) {
        if (event.target.closest(`.${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'multifunc-select__wrapper'}`) === null) {
            // cancel
            cancel();
        }
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
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','), value);


        // If you use the dynamic form assignment (such as document.getElementById(xxx).value), 
        // you need to judge the value of the input obtained by using the macrotask("setTimeout()")
        setTimeout(() => {
            if ( valueInputRef.current.value !== '' && ( typeof value === 'undefined' || value === '' ) ) {
                fetchData((_params).join(','), valueInputRef.current.value);
            }
        }, 500);



        // keyboard listener
        //--------------
        const listener = async (event: any) => {

            let res: any = null;

            if (event.code === "Enter" || event.code === "NumpadEnter") {
                if ( listRef.current !== null ) {
                    const currentData = await listRef.current.dataset.data;
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



        //--------------
        document.removeEventListener('pointerdown', handleClose);
        document.addEventListener('pointerdown', handleClose);



        
        // Add function to the element that should be used as the scrollable area.
        //--------------
        window.removeEventListener('scroll', windowScrollUpdate);
        window.removeEventListener('touchmove', windowScrollUpdate);
        window.addEventListener('scroll', windowScrollUpdate);
        window.addEventListener('touchmove', windowScrollUpdate);
        windowScrollUpdate();



        return () => {
            document.removeEventListener("keydown", listener);
            document.removeEventListener('pointerdown', handleClose);
            window.removeEventListener('scroll', windowScrollUpdate);
            window.removeEventListener('touchmove', windowScrollUpdate);
        }



    }, [value]); // required `value` parameter


    return (
        <>

            <div className={isOpen ? `multifunc-select__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'} active` : `multifunc-select__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'}`} ref={rootRef}>
                
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                    <div className="position-relative">
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
                            name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                            placeholder={placeholder || ''}
                            className={controlClassName || controlClassName === '' ? controlClassName : "form-control"}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onClick={handleSearch}
                            onChange={handleChange}
                            onCompositionStart={handleComposition}
                            onCompositionUpdate={handleComposition}
                            onCompositionEnd={handleComposition}
                            disabled={disabled || null}
                            required={required || null}
                            readOnly={readOnly || null}
                            value={controlTempValue || controlTempValue === '' ? controlTempValue : controlLabel}  // do not use `defaultValue`
                            style={{cursor: 'pointer', ...style}}
                            autoComplete='off'
                            {...attributes}
                        />

                        <input 
                            ref={valueInputRef}
                            type="hidden"
                            id={idRes}
                            name={name}
                            value={controlValue}  // do not use `defaultValue`
                        />

                        <span className="arrow position-absolute top-0 end-0 me-2 mt-1" style={{translate: 'all .2s', transform: isOpen ? 'rotate(180deg) translateY(-4px)' : 'rotate(0) translateY(0)', pointerEvents: 'none'}}>
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


                    {data && !hasErr ? <>
                    <div ref={listRef} className="list-group position-absolute w-100 border shadow small" style={{ marginTop: '0.2rem', zIndex: (depth ? depth : 100), display: isOpen ? 'block' : 'none'}} role="tablist">
                        {data ? data.map((item, index) => {
                            const startItemBorder = index === 0 ? 'border-top-0' : '';
                            const endItemBorder = index === data.length-1 ? 'border-bottom-0' : '';

                            return <button tabIndex={-1} onClick={handleSelect} type="button" data-index={index} key={index} className={`list-group-item list-group-item-action border-start-0 border-end-0 ${startItemBorder} ${endItemBorder} border-bottom-0`} data-value={`${item.value}`} data-label={`${item.label}`} data-letter={`${item.letter}`} role="tab">{item.label}</button>
                        }) : null}

                        {controlTempValue !== null && data.length === 0 ? <button tabIndex={-1} type="button" className="list-group-item list-group-item-action no-match" disabled>{fetchNoneInfo || 'No match yet'}</button> : null}

                    </div>

                </> : null}

                


            </div>


        </>
    )
});

export default MultiFuncSelect;
