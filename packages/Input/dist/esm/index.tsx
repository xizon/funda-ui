import React, { useState, useEffect, useRef, forwardRef, ChangeEvent, CompositionEvent, KeyboardEvent, FocusEvent, useImperativeHandle } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


export type InputProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    type?: string;
    defaultValue?: string;
    value?: string;
    requiredLabel?: React.ReactNode | string;
    label?: React.ReactNode | string;
    units?: React.ReactNode | string;
    name?: string;
    step?: any;
	min?: any;
	max?: any;
    src?: any;
    size?: any;
    minLength?: any;
    maxLength?: any;
    alt?: any;
    inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    pattern?: any;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    appendControl?: React.ReactNode;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any, el: any) => void;
    onInputCallback?: (e: any, el: any) => void;
    onKeyPressedCallback?: (e: any, el: any) => void;
    onChange?: (e: any, param: any, el: any) => void;
    onBlur?: (e: any, param: any, el: any) => void;
    onFocus?: (e: any, param: any, el: any) => void;
    onPressEnter?: (e: any, el: any) => void;

};


const Input = forwardRef((props: InputProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        type,
        disabled,
        required,
        placeholder,
        pattern,
        readOnly,
        defaultValue,
        value,
        requiredLabel,
        label,
        units,
        name,
        step,
        min,
        max,
        src,
        size,
        minLength,
        maxLength,
        alt,
        inputMode,
        id,
        appendControl,
        iconLeft,
        iconRight,
        autoComplete,
        autoCapitalize,
        spellCheck,
        style,
        tabIndex,
        onChangeCallback,
        onInputCallback,
        onKeyPressedCallback,
        onChange,
        onBlur,
        onFocus,
        onPressEnter,
        ...attributes
    } = props;


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const typeRes = typeof (type) === 'undefined' ? 'text' : type;
    const [onComposition, setOnComposition] = useState<boolean>(false);
    const [changedVal, setChangedVal] = useState<string>(value || '');

    

    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return valRef.current;
            },
            clear: (cb?: any) => {
                setChangedVal('');
                cb?.();
            },
            set: (value: string, cb?: any) => {
                setChangedVal(`${value}`);
                cb?.();
            }
        }),
        [contentRef],
    );

    const propExist = (p: any) => {
        return typeof p !== 'undefined' && p !== null && p !== '';
    };

    function handleComposition(event: CompositionEvent<HTMLInputElement>) {
        if (event.type === 'compositionstart') {
            setOnComposition(true);
        }
        if (event.type === 'compositionend') {
            setOnComposition(false);
        }
    }


    function handleFocus(event: FocusEvent<HTMLInputElement>) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event, onComposition, valRef.current);    
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;

        setChangedVal(val);


        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onChange?.(event, onComposition, valRef.current);

        // It fires in real time as the user enters
        if (typeof (onInputCallback) === 'function') {
            const newData: any = onInputCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }


    }

    function handleBlur(event: FocusEvent<HTMLInputElement>) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onBlur?.(event, onComposition, valRef.current);

        // It fires when focus is lost
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }
    }
   
    function handleKeyPressed(event: KeyboardEvent<HTMLInputElement>) {
        if (typeof (onKeyPressedCallback) === 'function') {
            const newData: any = onKeyPressedCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }

        if (event.code == "Enter") {
            // DO NOT USE "preventDefault()"
            onPressEnter?.(event, valRef.current);
        }

    }

    useEffect(() => {
        
        // update default value
        //--------------
        if (typeof value !== 'undefined') {
            setChangedVal(`${value}`);   // Avoid displaying the number 0
        }
        

    }, [value]);


    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED
            setChangedVal(`${defaultValue}`);   // Avoid displaying the number 0
        }

    }, []);


    return (
        <>

            <div className={clsWrite(wrapperClassName, 'mb-3 position-relative')} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={idRes} className="form-label">{label}</label>}</> : null}
                
                <div className={combinedCls(
                    'position-relative',
                    clsWrite(controlGroupWrapperClassName, 'input-group'),
                    {
                        'has-left-content': propExist(iconLeft),
                        'has-right-content': propExist(iconRight) || propExist(units)
                    }
                )}>
                    {propExist(iconLeft) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{iconLeft}</span></>: null}

                    {appendControl && (propExist(iconLeft)) ? <>
                        <div className="input-group-control-container w-100 position-relative">

                            <input
                                ref={(node) => {
                                    valRef.current = node;
                                    if (typeof externalRef === 'function') {
                                        externalRef(node);
                                    } else if (externalRef) {
                                        externalRef.current = node;
                                    }
                                }}
                                
                                tabIndex={tabIndex || 0}
                                type={typeRes}
                                className={combinedCls(
                                    propExist(iconLeft) ? 'rounded-start-0' : 'rounded',
                                    clsWrite(controlClassName, 'form-control ')
                                )}
                                id={idRes}
                                name={name}
                                step={step || null}
                                min={min || null}
                                max={max || null}
                                src={src || null}
                                size={size || null}
                                alt={alt || null}
                                inputMode={inputMode || 'text'}
                                pattern={pattern || null}
                                placeholder={placeholder || ''}
                                defaultValue={defaultValue}
                                value={changedVal}
                                minLength={minLength || null}
                                maxLength={maxLength || null}
                                autoComplete={typeof autoComplete === 'undefined' ? 'on' : autoComplete}
                                autoCapitalize={typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize}
                                spellCheck={typeof spellCheck === 'undefined' ? false : spellCheck}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onKeyDown={handleKeyPressed}
                                onCompositionStart={handleComposition}
                                onCompositionUpdate={handleComposition}
                                onCompositionEnd={handleComposition}
                                disabled={disabled || null}
                                required={required || null}
                                readOnly={readOnly || null}
                                style={style}
                                {...attributes}
                            />
                            {appendControl || ''}
                            {propExist(units) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{units}</span></> : null}
                            {propExist(iconRight) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{iconRight}</span></> : null}
                        </div>
                    
                    </> : <>


                        <input
                            ref={(node) => {
                                valRef.current = node;
                                if (typeof externalRef === 'function') {
                                    externalRef(node);
                                } else if (externalRef) {
                                    externalRef.current = node;
                                }
                            }}
                            
                            tabIndex={tabIndex || 0}
                            type={typeRes}
                            className={combinedCls(
                                clsWrite(controlClassName, 'form-control'),
                                controlExClassName,
                                {
                                    'rounded': !propExist(iconLeft) && !propExist(iconRight) && !propExist(units)
                                }
                            )}
                            id={idRes}
                            name={name}
                            step={step || null}
                            min={min || null}
                            max={max || null}
                            src={src || null}
                            size={size || null}
                            alt={alt || null}
                            inputMode={inputMode || 'text'}
                            pattern={pattern || null}
                            placeholder={placeholder || ''}
                            value={changedVal}
                            minLength={minLength || null}
                            maxLength={maxLength || null}
                            autoComplete={typeof autoComplete === 'undefined' ? 'on' : autoComplete}
                            autoCapitalize={typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize}
                            spellCheck={typeof spellCheck === 'undefined' ? false : spellCheck}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onKeyDown={handleKeyPressed}
                            onCompositionStart={handleComposition}
                            onCompositionUpdate={handleComposition}
                            onCompositionEnd={handleComposition}
                            disabled={disabled || null}
                            required={required || null}
                            readOnly={readOnly || null}
                            style={style}
                            {...attributes}
                        />
                        {appendControl || ''}
                        {propExist(units) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{units}</span></> : null}
                        {propExist(iconRight) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{iconRight}</span></> : null}

                    
                    </>}

                   
                </div>
                {required ? <>{requiredLabel || requiredLabel === '' ? requiredLabel : <span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>}</> : ''}

            </div>


        </>
    )
});

export default Input;
