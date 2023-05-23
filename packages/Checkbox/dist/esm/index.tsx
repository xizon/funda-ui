import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type CheckboxOptionChangeFnType = (arg1: any, arg2: any) => void;


type CheckboxProps = {
    wrapperClassName?: string;
    value?: string | boolean;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    checked?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onChange?: CheckboxOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const Checkbox = forwardRef((props: CheckboxProps, ref: any) => {
    const {
        wrapperClassName,
        disabled,
        required,
        value,
        label,
        name,
        id,
        checked,
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
    const [val, setVal] = useState<any>(null);

    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);    
    }


    function handleChange(event: any) {
        const _val = event.target.checked;

        setVal(_val);
        
        //----
        //remove focus style
        rootRef.current.classList.remove('focus');

        //
        if (typeof (onChange) === 'function') {
            onChange(event, _val);
        }

        

    }


    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current.classList.remove('focus');

        //
        onBlur?.(event);
    }


    useEffect(() => {
        setVal(checked);
    }, [checked]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                <div className="form-check">
                    <input 
                        ref={ref}
                        tabIndex={tabIndex || 0}
                        type="checkbox"
                        className="form-check-input"
                        id={idRes}
                        name={name}
                        disabled={disabled || null}
                        required={required || null}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        defaultValue={value as string || ''}
                        checked={val}   // component status will not change if defaultChecked is used
                        style={style}
                        {...attributes}
                    />
                    {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}
                </div>
            </div>


        </>
    )
});

export default Checkbox;
