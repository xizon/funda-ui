import React, { useState, useEffect, useRef, forwardRef, ChangeEvent, FocusEvent } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


export interface ColorPickerProps extends React.ComponentPropsWithoutRef<"input"> {
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    clearBtnClassName?: string;
    clearBtnLabel?: string;
    value?: string;
    requiredLabel?: React.ReactNode | string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    readOnly?: any;
    shape?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    onClear?: (e: any) => void;
    
};


const ColorPicker = forwardRef((props: ColorPickerProps, externalRef: any) => {
    const {
        wrapperClassName,
        controlClassName,
        controlExClassName,
        clearBtnClassName,
        clearBtnLabel,
        disabled,
        required,
        readOnly,
        value,
        requiredLabel,
        label,
        name,
        shape,
        id,
        style,
        tabIndex,
        onChange,
        onBlur,
        onFocus,
        onClear,
        ...attributes
    } = props;


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const [changedVal, setChangedVal] = useState<string>(value || '');
    let shapeClassName = '';

    if (shape && typeof shape === 'string') {
        switch (shape) {
            case 'rounded':
                shapeClassName = 'custom-colorpicker--rounded';
                break;
            case 'circle':
                shapeClassName = 'custom-colorpicker--circle';
                break;
        }
    }



    function handleFocus(event: FocusEvent<HTMLInputElement>) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;

        setChangedVal(val);


        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onChange?.(event);

    }

    function handleBlur(event: FocusEvent<HTMLInputElement>) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onBlur?.(event);
    }


    useEffect(() => {

        // update default value
        //--------------
        setChangedVal(value || '');

    }, [value]);


    return (
        <>

            <div className={combinedCls(
                'custom-colorpicker__wrapper',
                shapeClassName,
                clsWrite(wrapperClassName, 'mb-3 position-relative')
            )} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={idRes} className="form-label">{label}</label>}</> : null}

                <div className="input-group">
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
                        type='color'
                        className={combinedCls(
                            clsWrite(controlClassName, 'form-control custom-colorpicker-control flex-grow-0'),
                            controlExClassName
                        )}
                        value={changedVal}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        readOnly={readOnly || null}
                        style={style}
                        {...attributes}
                    />

                    {/* Prevents the color from automatically becoming #000000 when it is empty */}
                    <input
                        tabIndex={-1}
                        type="hidden"
                        id={idRes}
                        name={name}
                        value={changedVal}  // do not use `defaultValue`
                        onChange={() => void(0)}
                        required={required || null}
                        {...attributes}
                    />

                    {changedVal !== '' ? <><button tabIndex={-1} type="button" className={clearBtnClassName || 'btn btn-link btn-sm'} onClick={(e: React.MouseEvent) => {
                        setChangedVal('');
                        onChange?.(e);
                        onClear?.(e);
                    }}>{clearBtnLabel || 'clear'}
                    </button></> : null}


                </div>
                {required ? <>{requiredLabel || requiredLabel === '' ? requiredLabel : <span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>}</> : ''}

                {changedVal === '' ? <><div className="custom-colorpicker__transparent-placeholder"></div></> : null}

            </div>


        </>
    )
});

export default ColorPicker;
