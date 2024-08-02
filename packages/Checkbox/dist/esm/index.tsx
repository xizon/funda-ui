import React, { useImperativeHandle, useState, useEffect, useRef, forwardRef } from 'react';

import {
    useComId
} from 'funda-utils';


type CheckboxOptionChangeFnType = (arg1: any, arg2: any) => void;


type CheckboxProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    wrapperClassName?: string;
    itemSelectedClassName?: string;
    value: string | boolean;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    checked?: boolean;
    indeterminate?: boolean;
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

const Checkbox = forwardRef((props: CheckboxProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        itemSelectedClassName,
        disabled,
        required,
        value,
        label,
        name,
        id,
        checked,
        indeterminate,
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
    const valRef = useRef<any>(null);
    const [val, setVal] = useState<any>(null || false);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"

    
    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return valRef.current;
            },
            clear: (cb?: any) => {
                setVal(false);
                cb?.();
            },
            set: (value: string, cb?: any) => {
                setVal(value);
                cb?.();
            }
        }),
        [contentRef],
    );



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

        // default value
        setVal(checked);

        // Set a checkbox to indeterminate state
        if (typeof indeterminate !== 'undefined') {
            valRef.current.indeterminate = indeterminate;
        }

    }, [checked, indeterminate]);


    return (
        <>

            <div className={`form-check__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ${val ? (itemSelectedClassName || 'item-selected') : ''}`} ref={rootRef}>
                <div className="form-check">
                    <input
                        ref={(node) => {
                            valRef.current = node;
                            if (typeof externalRef === 'function') {
                                externalRef(node);
                            } else if (externalRef) {
                                externalRef.current = node;
                            }
                        }}
                        tabIndex={tabIndex || 0}
                        type="checkbox"
                        className="form-check-input"
                        id={`label-${idRes}`}

                        // Don't use "name", it's just a container to display the label
                        data-name={name?.match(/(\[.*?\])/gi) ? `${name.split('[')[0]}-label[]` : `${name}-label`}
                        data-checkbox
                        data-checked={val}
                        disabled={disabled || null}
                        required={required || null}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        defaultValue={value as string || ''}
                        checked={val || false}   // component status will not change if defaultChecked is used,  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
                        style={{ cursor: 'pointer', ...style }}
                        {...attributes}
                    />


                    <input
                        type="hidden"
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

export default Checkbox;
