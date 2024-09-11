import React, { useState, useEffect, useRef, forwardRef } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite } from 'funda-utils/dist/cjs/cls';


export type SwitchOptionChangeFnType = (arg1: any, arg2: any) => void;


export type SwitchProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    value: string | boolean;
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
    onChange?: SwitchOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const Switch = forwardRef((props: SwitchProps, externalRef: any) => {
    const {
        wrapperClassName,
        controlClassName,
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

    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const [val, setVal] = useState<any>(null || false);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"

    function handleFocus(event: any) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event);    
    }


    function handleChange(event: any) {
        const _val = event.target.checked;

        setVal(_val);
        
        //----
        //remove focus style
        rootRef.current?.classList.remove('focus');

        //
        if (typeof (onChange) === 'function') {
            onChange(event, _val);
        }

        

    }


    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current?.classList.remove('focus');

        //
        onBlur?.(event);
    }


    useEffect(() => {
        setVal(checked);
    }, [checked]);


    return (
        <>

            <div className={clsWrite(wrapperClassName, 'mb-3 position-relative')} ref={rootRef}>
                <div className="form-check form-switch">
                    <input 
                        ref={externalRef}
                        tabIndex={tabIndex || 0}
                        type="checkbox"
                        className={clsWrite(controlClassName, 'form-check-input')}
                        id={`label-${idRes}`}
                        
                        // Don't use "name", it's just a container to display the label
                        data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}    
                        data-checkbox
                        disabled={disabled || null}
                        required={required || null}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        defaultValue={value as string || ''}
                        checked={val}   // component status will not change if defaultChecked is used
                        style={{cursor: 'pointer', ...style}}
                        {...attributes}
                    />


                    <input 
                        type="hidden"
                        tabIndex={-1}
                        id={idRes}
                        name={name}
                        value={val ? value as string || '' : ''}  // do not use `defaultValue`
                        onChange={() => void(0)}
                        {...attributes}
                    />


                    {label ? <>{typeof label === 'string' ? <label htmlFor={`label-${idRes}`} className="form-check-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={`label-${idRes}`} className="form-check-label">{label}</label>}</> : null}
                </div>
            </div>


        </>
    )
});

export default Switch;
