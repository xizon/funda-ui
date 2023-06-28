import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type TagInputProps = {
    wrapperClassName?: string;
    value?: string;
    maxTags?: number;
    label?: React.ReactNode | string;
    name?: string;
    maxLength?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any, param: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;

};


const TagInput = forwardRef((props: TagInputProps, ref: any) => {
    const {
        wrapperClassName,
        maxTags,
        disabled,
        required,
        placeholder,
        readOnly,
        value,
        label,
        name,
        id,
        maxLength,
        style,
        tabIndex,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const max = maxTags ? maxTags : 10;
    const [lastId, setLastId] = useState<number>(-1);
    const [userInput, setUserInput] = useState<string>('');
    const [items, setItems] = useState<any[]>([]);
    const [alreadyInItems, setAlreadyInItems] = useState<boolean>(false);
    const [onComposition, setOnComposition] = useState(false);


    function initDefaultValue(defaultValue: any) {

        // change the value to trigger component rendering
        if ( typeof defaultValue === 'undefined' || defaultValue === '' ) {
            setItems([]);
        } else {
            setItems(defaultValue.trim().replace(/^\,|\,$/g, '').split(',').map((item: any, index: number) => {
                return {
                    content: item,
                    id: index
                }
            }));
        }
    }


    function handleRemove(e: any) {
        e.preventDefault();

        const idToRemove = Number(e.currentTarget.dataset.item);
        const newArray = items!.filter((item: any) => item.id !== idToRemove);
        setItems(newArray);

        //
        onChange?.(inputRef.current, newArray);
    }

    function handleKeypress(event: any) {
        
        // Avoid adding results before when the user enters text is not complete
        if ( onComposition ) return;
        

        if (event.code == "Enter" || event.code == "Space") {
            event.preventDefault();

            if (alreadyInItems) return false;

            //
            const newArray = items;
            const currentcontent = userInput!.trim();
            if (!currentcontent) {
                return;
            }

            //Limit the total number of tags added
            if (max - 1 < newArray!.length) {
                return;
            }

            newArray!.push({
                content: currentcontent,
                id: lastId + 1
            });

            setLastId((prevState) => ++prevState);
            setItems(newArray);
            setUserInput('');

            //
            onChange?.(inputRef.current, items);
            

        }
    }

    function handleComposition(event: any) {
        if (event.type === 'compositionstart') {
            setOnComposition(true);
        }
        if (event.type === 'compositionend') {
            setOnComposition(false);
        }
    }


    function handleChange(event: any) {

        const val = event.target.value;
        
        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        let _alreadyInItems = alreadyInItems;

        if (items && items.length > 0) {
            const alreadyIn = items.some(function (obj) {
                return obj.content.toLowerCase() == val.toLowerCase();
            });
            if (alreadyIn) {
                _alreadyInItems = true;
            } else {
                _alreadyInItems = false;
            }

        }

        setAlreadyInItems(_alreadyInItems);
        setUserInput(val);

    }



    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);
    }


    function handleBlur(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onBlur?.(event);
    }


    useEffect(() => {


        // update default value
        //--------------
        initDefaultValue(value);


        // If you use the dynamic form assignment (such as document.getElementById(xxx).value), 
        // you need to judge the value of the input obtained by using the macrotask "setInterval()"
        let timer: any = null;
        let initTimes: number = 0;
        let hasValue: boolean = false;
        timer = setInterval( () => {
            if ( initTimes > 5 || hasValue ) {
                clearInterval(timer);
            } else {
                if (valRef.current !== null && valRef.current.value !== '' && (typeof value === 'undefined' || value === '')) {
                    initDefaultValue(valRef.current.value);
                    hasValue = true;
                }
                initTimes++;

            }
        }, 500);


    }, [value]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? `tag-input__wrapper ${wrapperClassName}` : `tag-input__wrapper mb-3 position-relative`} ref={rootRef}>

                {label ? <><label htmlFor={`label-${idRes}`} className="form-label">{label}</label></> : null}


                <div className="tag-input__control-wrapper">
                    <div>
                        <ul className="tag-input__list">
                            {items ? items.map((item: any, index: number) => (
                                <li key={index}>
                                    {item.content}
                                    
                                    <a href="#" tabIndex={-1} onClick={handleRemove} data-item={item.id}><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path fill="#000"  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg></a>
                                </li>
                            )) : null}
                        </ul>


                        <div className={`tag-input__control ${disabled ? 'disabled' : ''}`} style={{display: max - 1 < items!.length ? 'none' : 'inherit'}}>
                            <input
                                ref={inputRef}
                                tabIndex={tabIndex || 0}
                                type="text"
                                id={`label-${idRes}`}

                                // Don't use "name", it's just a container to display the label
                                data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                                data-tag-input
                                autoComplete="off"
                                placeholder={placeholder || ''}
                                value={userInput}
                                maxLength={maxLength || null}
                                disabled={disabled || null}
                                readOnly={readOnly || null}
                                onChange={handleChange}
                                onCompositionStart={handleComposition}
                                onCompositionUpdate={handleComposition}
                                onCompositionEnd={handleComposition}
                                onKeyDown={handleKeypress}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                style={style}
                                {...attributes}
                            />

                        </div>

                        {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}
                    </div>

                    <input
                        tabIndex={-1}
                        ref={(node) => {
                            valRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }}
                        type="hidden"
                        id={idRes}
                        name={name}
                        value={items.map((item: any) => item.content).join(',')}
                        required={required || null}
                    />


                </div>


            </div>


        </>
    )
});

export default TagInput;
