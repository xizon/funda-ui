import React, { useId, useRef } from 'react';

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
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;

    const uniqueID = useId().replace(/[^a-zA-Z ]/g, "-");;
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    


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
        event.target.parentElement.classList.add('is-active');

        //
        onFocus?.(event);    
    }


    function handleChange(event: any) {
        const val = event.target.value;

        //----
        //remove focus style
        [].slice.call(rootRef.current.querySelectorAll('.form-check-input')).forEach( (el: any) => {
            el.parentElement?.classList.remove('is-active');
        });
      
     
        //
        if (typeof (onChange) === 'function') {
            onChange(event, val);
        }

    }


    function handleBlur(event: any) {

        //----
        //remove focus style
        event.target.parentElement.classList.remove('is-active');

        //
        onBlur?.(event);
    }



    // Get all options from option prop
    const selectOptions = isJSON(options) ? JSON.parse(options) : {};
    const optionKeys = Object.keys(selectOptions);
    const optionValues = Object.values(selectOptions);


    // Generate list of options
    const defaultValIndex = value ? optionValues.indexOf(value) : false; //get index from default value
    const radioOptionsList = optionKeys.map((radioOption, index) => {
        const requiredVal = index === 0 ? required || null : null;

        if (index === defaultValIndex) {
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
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        defaultChecked
                        style={style}
                        {...attributes}
                    />
                    <label className="form-check-label" htmlFor={`field-${uniqueID}-${index}`}>
                        {radioOption}
                    </label>
                </div>;
            
        } else {
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
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        style={style}
                        {...attributes}
                    />
                    <label className="form-check-label" htmlFor={`field-${uniqueID}-${index}`}>
                        {radioOption}
                    </label>
                </div>;
        }


    });


    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}
                <div id={idRes}>
                    {radioOptionsList}
                </div>
            </div>


        </>
    )
};

export default Radio;
