import React, { useId, useRef } from 'react';

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


export default function Input(props: InputProps) {

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
        id,
        maxLength,
        iconLeft,
        iconRight,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const rootRef = useRef<any>(null);

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
        if (val === '' || val === 'blank') {
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
        if (val === '' || val === 'blank') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onBlur?.(event);
    }

    const typeRes = typeof (type) === 'undefined' ? 'text' : type;
    const idRes = id || uniqueID;

    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                <div className="input-group">
                    
                    {iconLeft ? <><span className="input-group-text">{iconLeft}</span></>: null}
                    <input
                        type={typeRes}
                        className="form-control"
                        id={idRes}
                        name={name}
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
                    {required ? <><span className="input-group-text bg-transparent"><span className="text-danger">*</span></span></> : ''}

                </div>

            </div>


        </>
    )
}
