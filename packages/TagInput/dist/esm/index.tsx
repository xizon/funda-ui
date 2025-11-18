import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, ChangeEvent, MouseEvent, KeyboardEvent, FocusEvent, CompositionEvent } from 'react';



import useComId from 'funda-utils/dist/cjs/useComId';
import {
    extractContentsOfBrackets
} from 'funda-utils/dist/cjs/extract';
import {
    convertArrToValByBrackets
} from 'funda-utils/dist/cjs/convert';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



export interface TagValConfig {
    content: string;
    id: number;
    [key: string]: string | boolean | number; // Allows dynamic attributes
}

export type TagInputProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    value?: string;
    maxTags?: number;
    requiredLabel?: React.ReactNode | string;
    label?: React.ReactNode | string;
    name?: string;
    minLength?: any;
    maxLength?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    renderSelectedValue?: (selectedData: TagValConfig[], removeFunc: (e: React.MouseEvent) => void) => React.ReactNode;
    /** Whether to use square brackets to save result and initialize default value */
    extractValueByBrackets?: boolean;
    /** -- */
    id?: string;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChange?: (el: HTMLElement, data: any, dataStr: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;

};


const TagInput = forwardRef((props: TagInputProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        maxTags,
        disabled,
        required,
        placeholder,
        renderSelectedValue,
        readOnly,
        value,
        requiredLabel,
        label,
        name,
        id,
        autoComplete,
        autoCapitalize,
        spellCheck,
        extractValueByBrackets,
        minLength,
        maxLength,
        style,
        tabIndex,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const VALUE_BY_BRACKETS = typeof extractValueByBrackets === 'undefined' ? true : extractValueByBrackets;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const max = maxTags ? maxTags : 10;
    const [lastId, setLastId] = useState<number>(-1);
    const [userInput, setUserInput] = useState<string>('');
    const [items, setItems] = useState<TagValConfig[]>([]);
    const [alreadyInItems, setAlreadyInItems] = useState<boolean>(false);
    const [onComposition, setOnComposition] = useState<boolean>(false);


    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return valRef.current;
            },
            getLatestVal: () => {
                return VALUE_BY_BRACKETS ? convertArrToValByBrackets(items.map((item: any) => item.content)) : items.map((item: any) => item.content).join(',');
            },
            clear: (cb?: any) => {
                initDefaultValue('');
                cb?.();

                onChange?.(inputRef.current, items, '');
            },
            set: (value: string, cb?: any) => {
                initDefaultValue(`${value}`);
                cb?.();

                onChange?.(inputRef.current, items, `${value}`);
            }
        }),
        [contentRef, items],
    );


    function initDefaultValue(defaultValue: any) {

        // change the value to trigger component rendering
        if ( typeof defaultValue === 'undefined' || defaultValue === '' ) {
            setItems([]);
        } else {
            const _val = VALUE_BY_BRACKETS ? extractContentsOfBrackets(defaultValue) : defaultValue.trim().replace(/^\,|\,$/g, '').split(',');
            if (Array.isArray(_val)) {
                setItems(_val.map((item: string, index: number) => {
                    return {
                        content: item,
                        id: index
                    }
                }));
            } else {
                setItems([]);
            }
            
        }
    }


    function handleRemove(e: any) {
        e.preventDefault();
        e.stopPropagation();  /* REQUIRED */

        const idToRemove = Number(e.currentTarget.dataset.item);
        const newArray = items!.filter((item: any) => item.id !== idToRemove);
        setItems(newArray);


        //
        onChange?.(inputRef.current, newArray, VALUE_BY_BRACKETS ? convertArrToValByBrackets(newArray.map(v => v.content)) : newArray.map(v => v.content).join(','));
    }

    function handleKeypress(event: KeyboardEvent<HTMLInputElement>) {
        
        // Avoid adding results before when the user enters text is not complete
        if ( onComposition ) return;
        

        if ((event.key === 'Enter' || event.key === 'NumpadEnter') || event.code === "Space") {
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
            onChange?.(inputRef.current, items, VALUE_BY_BRACKETS ? convertArrToValByBrackets(items.map(v => v.content)) : items.map(v => v.content).join(','));
            

        }
    }

    function handleComposition(event: CompositionEvent<HTMLInputElement>) {
        if (event.type === 'compositionstart') {
            setOnComposition(true);
        }
        if (event.type === 'compositionend') {
            setOnComposition(false);
        }
    }


    function handleChange(event: ChangeEvent<HTMLInputElement>) {

        const val = event.target.value;

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



    function handleFocus(event: FocusEvent<HTMLInputElement>) {
        // tag style
        rootRef.current?.classList.add('focus-floating');

        //
        onFocus?.(event);
    }


    function handleBlur(event: FocusEvent<HTMLInputElement>) {
        const el = event.target;
        const val = event.target.value;

        setUserInput('');
        setAlreadyInItems(false);

        onBlur?.(event);
    }


    useEffect(() => {


        // update default value
        //--------------
        initDefaultValue(value);


    }, [value]);


    return (
        <>

            <div className={combinedCls(
                'taginput__wrapper',
                clsWrite(wrapperClassName, 'mb-3 position-relative'),
                {
                    'focus-floating': userInput !== ''
                }
            )} ref={rootRef}>

                {label ? <>{typeof label === 'string' ? <label htmlFor={`label-${idRes}`} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={`label-${idRes}`} className="form-label">{label}</label>}</> : null}


                <div className="taginput__control-wrapper">
                    <div>
                        <ul className="taginput__list">

                             {/* ITEMS LIST */}
                            {typeof renderSelectedValue === 'function' ? <>
                                {renderSelectedValue(items, handleRemove)}
                            </> : <>
                                {items ? items.map((item: any, index: number) => (
                                    <li key={index}>
                                        {item.content}
                                        
                                        <a href="#" tabIndex={-1} onClick={handleRemove} data-item={item.id}><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path fill="#000"  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg></a>
                                    </li>
                                )) : null}
                            </>}




                        </ul>


                        <div className={combinedCls(
                            'taginput__control',
                            {
                                'disabled': disabled
                            }
                        )} style={{display: max - 1 < items!.length ? 'none' : 'inherit'}}>
                            <input
                                ref={inputRef}
                                tabIndex={tabIndex || 0}
                                type="text"
                                id={`label-${idRes}`}

                                // Don't use "name", it's just a container to display the label
                                data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                                data-taginput
                                autoComplete={typeof autoComplete === 'undefined' ? 'off' : autoComplete}
                                autoCapitalize={typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize}
                                spellCheck={typeof spellCheck === 'undefined' ? false : spellCheck}
                                placeholder={placeholder || ''}
                                value={userInput}
                                minLength={minLength || null}
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

                        {required ? <>{requiredLabel || requiredLabel === '' ? requiredLabel : <span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>}</> : ''}
                    </div>

                    <input
                        tabIndex={-1}
                        ref={(node) => {
                            valRef.current = node;
                            if (typeof externalRef === 'function') {
                                externalRef(node);
                            } else if (externalRef) {
                                externalRef.current = node;
                            }
                        }}
                        type="hidden"
                        id={idRes}
                        name={name}
                        value={VALUE_BY_BRACKETS ? convertArrToValByBrackets(items.map((item: any) => item.content)) : items.map((item: any) => item.content).join(',')} // do not use `defaultValue`
                        onChange={() => void(0)}
                        required={required || null}
                    />


                </div>


            </div>


        </>
    )
});

export default TagInput;
