import React, { useId, useState, useEffect, useRef, forwardRef, ChangeEvent } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

interface ColorPickerProps extends React.ComponentPropsWithoutRef<"input"> {
    wrapperClassName?: string;
    controlClassName?: string;
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

};


const ColorPicker = forwardRef((props: ColorPickerProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
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
                shapeClassName = 'custom-form-control-color--rounded';
                break;   
            case 'circle':
                shapeClassName = 'custom-form-control-color--circle';
                break;    
        }
    }



    function handleFocus(event: ChangeEvent<HTMLInputElement>) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);    
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;

        setChangedVal(val);


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onChange?.(event);

    }

    function handleBlur(event: ChangeEvent<HTMLInputElement>) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onBlur?.(event);
    }


    useEffect(() => {

        // update default value
        //--------------
        setChangedVal(value || '');

        // If you use the dynamic form assignment (such as document.getElementById(xxx).value), 
        // you need to judge the value of the input obtained by using the macrotask "setInterval()"
        let timer: any = null;
        let initTimes: number = 0;
        let hasValue: boolean = false;
        timer = setInterval( () => {
            if ( initTimes > 5 || hasValue ) {
                clearInterval(timer);
            } else {
                if ( valRef.current !== null && valRef.current.value !== '' && ( typeof value === 'undefined' || value === '' ) ) {
                    setChangedVal(valRef.current.value);
                    hasValue = true;
                }
                initTimes++;

            }
        }, 500);

        return () => {
            clearInterval(timer);
        }

    }, [value]);


    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

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
                        className={`${controlClassName || controlClassName === '' ? controlClassName : "form-control custom-form-control-color flex-grow-0"} ${shapeClassName}`}
                        id={idRes}
                        name={name}
                        value={changedVal}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
                        readOnly={readOnly || null}
                        style={style}
                        {...attributes}
                    />

                </div>
                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}

            </div>


        </>
    )
});

export default ColorPicker;