import React, { useId, useState, useEffect, useRef, forwardRef, ChangeEvent, FocusEvent } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

interface ColorPickerProps extends React.ComponentPropsWithoutRef<"input"> {
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    clearBtnClassName?: string;
    clearBtnLabel?: string;
    value?: string;
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


const ColorPicker = forwardRef((props: ColorPickerProps, ref: any) => {
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


    const uniqueID = useId();
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

            <div className={wrapperClassName || wrapperClassName === '' ? `custom-colorpicker__wrapper  ${shapeClassName} ${wrapperClassName}` : `custom-colorpicker__wrapper mb-3 position-relative  ${shapeClassName}`} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={idRes} className="form-label">{label}</label>}</> : null}

                <div className="input-group">
                    <input
                        ref={(node) => {
                            valRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }}

                        
                        tabIndex={tabIndex || 0}
                        type='color'
                        className={`${controlClassName || controlClassName === '' ? controlClassName : "form-control custom-colorpicker-control flex-grow-0"} ${controlExClassName || ''}`}
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
                        value={changedVal}
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
                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}

                {changedVal === '' ? <><div className="custom-colorpicker__transparent-placeholder"></div></> : null}

            </div>


        </>
    )
});

export default ColorPicker;
