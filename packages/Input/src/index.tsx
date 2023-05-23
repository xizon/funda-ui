import React, { useId, useState, useRef, forwardRef } from 'react';

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
    step?: number | string;
	min?: number | string;
	max?: number | string;
    maxLength?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
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
        readOnly,
        value,
        label,
        units,
        name,
        step,
        min,
        max,
        id,
        maxLength,
        iconLeft,
        iconRight,
        autoComplete,
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
    const typeRes = typeof (type) === 'undefined' ? 'text' : type;
    const [onComposition, setOnComposition] = useState(false);

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
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onChange?.(event, onComposition);
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

    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                <div className="input-group">
                    {iconLeft ? <><span className="input-group-text">{iconLeft}</span></>: null}
                    <input
                        ref={ref}
                        tabIndex={tabIndex || 0}
                        type={typeRes}
                        className={controlClassName || controlClassName === '' ? controlClassName : "form-control"}
                        id={idRes}
                        name={name}
                        step={step || 1}
                        min={min || ''}
                        max={max || ''}
                        placeholder={placeholder || ''}
                        defaultValue={value || ''}
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
                {required ? <><span className="position-absolute end-0 bottom-0 my-1 mx-2"><span className="text-danger">*</span></span></> : ''}

            </div>


        </>
    )
});

export default Input;
