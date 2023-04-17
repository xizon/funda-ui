import React, { useId, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type InputProps = {
    wrapperClassName?: string;
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
    placeholder?: string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const Input = forwardRef((props: InputProps, ref: any) => {
    const {
        wrapperClassName,
        type,
        disabled,
        required,
        placeholder,
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
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId().replace(/[^a-zA-Z ]/g, "-");;
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const typeRes = typeof (type) === 'undefined' ? 'text' : type;
    

    function handleFocus(event: any) {
        rootRef.current.classList.add('is-active');

        //
        onFocus?.(event);    
    }

    function handleChange(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onChange?.(event);
    }

    function handleBlur(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onBlur?.(event);
    }

    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                <div className="input-group">
                    {iconLeft ? <><span className="input-group-text">{iconLeft}</span></>: null}
                    <input
                        ref={ref}
                        type={typeRes}
                        className="form-control"
                        id={idRes}
                        name={name}
                        step={step || 1}
                        min={min || ''}
                        max={max || ''}
                        placeholder={placeholder || ''}
                        defaultValue={value || ''}
                        maxLength={maxLength || null}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
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
