import React, { useId, useState, useEffect, useRef, forwardRef, ChangeEvent, CompositionEvent } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type InputProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    type?: string;
    value?: string;
    label?: React.ReactNode | string;
    units?: string;
    name?: string;
    step?: any;
	min?: any;
	max?: any;
    src?: any;
    size?: any;
    minLength?: any;
    maxLength?: any;
    alt?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    pattern?: any;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any) => void;
    onInputCallback?: (e: any) => void;
    onKeyPressedCallback?: (e: any) => void;
    onChange?: (e: any, param: any) => void;
    onBlur?: (e: any, param: any) => void;
    onFocus?: (e: any, param: any) => void;

};


const Input = forwardRef((props: InputProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        type,
        disabled,
        required,
        placeholder,
        pattern,
        readOnly,
        value,
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
        id,
        iconLeft,
        iconRight,
        autoComplete,
        style,
        tabIndex,
        onChangeCallback,
        onInputCallback,
        onKeyPressedCallback,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const typeRes = typeof (type) === 'undefined' ? 'text' : type;
    const [onComposition, setOnComposition] = useState(false);
    const [changedVal, setChangedVal] = useState<string>(value || '');

    function handleComposition(event: CompositionEvent<HTMLInputElement>) {
        if (event.type === 'compositionstart') {
            setOnComposition(true);
        }
        if (event.type === 'compositionend') {
            setOnComposition(false);
        }
    }


    function handleFocus(event: ChangeEvent<HTMLInputElement>) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event, onComposition);    
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;

        setChangedVal(val);


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onChange?.(event, onComposition);

        // It fires in real time as the user enters
        if (typeof (onInputCallback) === 'function') {
            const newData: any = onInputCallback(event);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }


    }

    function handleBlur(event: ChangeEvent<HTMLInputElement>) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onBlur?.(event, onComposition);

        // It fires when focus is lost
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(event);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }
    }
   
    function handleKeyPressed(event: React.KeyboardEvent<HTMLInputElement>) {
        if (typeof (onKeyPressedCallback) === 'function') {
            const newData: any = onKeyPressedCallback(event);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }
    }


    useEffect(() => {
        
        // update default value
        //--------------
        if (typeof value !== 'undefined') {
            setChangedVal(`${value}`);   // Avoid displaying the number 0
        }
        

    }, [value]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className={controlGroupWrapperClassName || "form-label"} dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={idRes} className={controlGroupWrapperClassName || "form-label"}>{label}</label>}</> : null}

                <div className="input-group">
                    {typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? <><span className={controlGroupTextClassName || "input-group-text"}>{iconLeft}</span></>: null}

                    <input
                        ref={(node) => {
                            valRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }}
                        tabIndex={tabIndex || 0}
                        type={typeRes}
                        className={controlClassName || controlClassName === '' ? controlClassName : "form-control"}
                        id={idRes}
                        name={name}
                        step={step || null}
                        min={min || null}
                        max={max || null}
                        src={src || null}
                        size={size || null}
                        alt={alt || null}
                        pattern={pattern || null}
                        placeholder={placeholder || ''}
                        value={changedVal}
                        minLength={minLength || null}
                        maxLength={maxLength || null}
                        autoComplete={typeof autoComplete === 'undefined' ? 'off' : autoComplete}
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
                    {units ? <><span className={controlGroupTextClassName || "input-group-text"}>{units}</span></>: null}
                    {typeof iconRight !== 'undefined' && iconRight !== null && iconRight !== '' ? <><span className={controlGroupTextClassName || "input-group-text"}>{iconRight}</span></>: null}
                </div>
                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}

            </div>


        </>
    )
});

export default Input;
