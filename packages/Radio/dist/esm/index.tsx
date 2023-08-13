import React, { useId, useRef, useState, useEffect } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type RadioOptionChangeFnType = (arg1: any, arg2: any) => void;


type RadioProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options: string;
    inline?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onClick?: RadioOptionChangeFnType | null;
    onChange?: RadioOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const Radio = (props: RadioProps) => {
    const {
        wrapperClassName,
        disabled,
        required,
        value,
        label,
        name,
        id,
        options,
        inline,
        style,
        tabIndex,
        onClick,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;

    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const [val, setVal] = useState<any>(null);

    // Determine whether it is in JSON format
    function isJSON(str: any) {

        if (typeof (str) === 'string' && str.length > 0) {

            if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
                return false;
            } else {

                if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
                    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                    return true;

                } else {
                    return false;
                }

            }

        } else {

            if (
                typeof (str) === 'object' &&
                Object.prototype.toString.call(str) === '[object Object]' &&
                !str.length
            ) {
                return true;
            } else {
                return false;
            }

        }

    }

    function handleFocus(event: any) {
        event.target.parentElement.classList.add('focus');

        //
        onFocus?.(event);    
    }


    function handleChange(event: any) {
        const _val = event.target.value;

        setVal(_val);
        

        //----
        //remove focus style
        [].slice.call(rootRef.current.querySelectorAll('.form-check-input')).forEach( (el: any) => {
            el.parentElement?.classList.remove('focus');
        });
      
     
        //
        if (typeof (onChange) === 'function') {
            onChange(event, _val);
        }
        if (typeof (onClick) === 'function') {
            onClick(event, _val);
        }


    }


    function handleBlur(event: any) {

        //----
        //remove focus style
        event.target.parentElement.classList.remove('focus');

        //
        onBlur?.(event);
    }



    // Get all options from option prop
    const selectOptions = isJSON(options) ? JSON.parse(options) : null;
    const optionKeys = selectOptions === null ? [] : Object.keys(selectOptions);
    const optionValues = selectOptions === null ? [] : Object.values(selectOptions).map((item: any) => item.toString() );



    const radioOptionsList = optionKeys.map((radioOption, index) => {
        const requiredVal = index === 0 ? required || null : null;

      
        return <div key={index} className={inline ? `form-check form-check-inline` : `form-check`}>
                <input 
                    tabIndex={tabIndex || 0}
                    type="radio" 
                    className="form-check-input"
                    id={`field-${uniqueID}-${index}`}
                    name={name} 
                    value={optionValues[index] as string} 
                    required={requiredVal} 
                    disabled={disabled || null}
                    onChange={handleChange}
                    onClick={typeof (onClick) === 'function' ? handleChange : () => void(0)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    checked={val == optionValues[index]}   // component status will not change if defaultChecked is used
                    style={style}
                    {...attributes}
                />
                <label className="form-check-label" htmlFor={`field-${uniqueID}-${index}`} dangerouslySetInnerHTML={{
                    __html: radioOption
                }}></label>
            </div>;

    });



    useEffect(() => {
        setVal(value);
    }, [value, options]);



    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}
                <div id={idRes}>
                    {radioOptionsList}
                </div>
            </div>


        </>
    )
};

export default Radio;
