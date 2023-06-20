import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type InputProps = {
    wrapperClassName?: string;
    controlClassName?: string;
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
    onChange?: (e: any, param: any) => void;
    onBlur?: (e: any, param: any) => void;
    onFocus?: (e: any, param: any) => void;

};


const Input = forwardRef((props: InputProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
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

    function handleComposition(event: any) {
        if (event.type === 'compositionstart') {
            setOnComposition(true);
        }
        if (event.type === 'compositionend') {
            setOnComposition(false);
        }
    }


    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event, onComposition);    
    }

    function handleChange(event: any) {
        const val = event.target.value;

        setChangedVal(val);


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onChange?.(event, onComposition);
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(event);
            setChangedVal(newData);
        }

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
        onBlur?.(event, onComposition);
    }


    useEffect(() => {

        // update default value
        //--------------
        setChangedVal(value || '');

        // If you use the dynamic form assignment (such as document.getElementById(xxx).value), 
        // you need to judge the value of the input obtained by using the macrotask "setInterval()"
        let timer: any = null;
        let initTimes: number = 0;
        let hasValue: boolean = false;
        timer = setInterval( () => {
            if ( initTimes > 5 || hasValue ) {
                clearInterval(timer);
            } else {
                if ( valRef.current !== null && valRef.current.value !== '' && ( typeof value === 'undefined' || value === '' ) ) {
                    setChangedVal(valRef.current.value);
                    hasValue = true;
                }
                initTimes++;

            }
        }, 500);



    }, [value]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                <div className="input-group">
                    {iconLeft ? <><span className="input-group-text">{iconLeft}</span></>: null}
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
                        autoComplete={autoComplete ? 'on' : 'off'}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onCompositionStart={handleComposition}
                        onCompositionUpdate={handleComposition}
                        onCompositionEnd={handleComposition}
                        disabled={disabled || null}
                        required={required || null}
                        readOnly={readOnly || null}
                        style={style}
                        {...attributes}
                    />
                    {units ? <><span className="input-group-text">{units}</span></>: null}
                    {iconRight ? <><span className="input-group-text">{iconRight}</span></>: null}
                </div>
                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}

            </div>


        </>
    )
});

export default Input;
