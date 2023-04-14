import React, { useId, useState, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type OptionChangeFnType = (arg1: any, arg2: any) => void;


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
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onChange?: OptionChangeFnType | null;
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
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;

    const uniqueID = useId();
    const rootRef = useRef<any>(null);
    const [isChecked, setIsChecked] = useState<boolean>( checked ? true : false);


    function handleFocus(event: any) {
        rootRef.current.classList.add('is-active');

        //
        onFocus?.(event);    
    }


    function handleChange(event: any) {
        const val = event.target.value;

        //----
        //remove focus style
        rootRef.current.classList.remove('is-active');

        //
        if (typeof (onChange) === 'function') {
            onChange(event, !isChecked ? val : '');
            
        }

        setIsChecked(!isChecked);

    }


    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current.classList.remove('is-active');

        //
        onBlur?.(event);
    }


    const idRes = id || uniqueID;

    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                <div className="form-check">
                    {isChecked ? (
                        <input 
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
                            defaultChecked
                            {...attributes}
                        />
        
                    ) : (
                        <input 
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
                            {...attributes}
                        />
                    )}
                    {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}
                </div>
            </div>


        </>
    )
});

export default Checkbox;
