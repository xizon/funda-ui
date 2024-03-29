import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';


import useAutosizeTextArea from './utils/useAutosizeTextArea';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
	value?: string;
	label?: React.ReactNode | string;
	name?: string;
	maxLength?: any;
	cols?: number;
	rows?: number;
	disabled?: any;
	required?: any;
    readOnly?: any;
	placeholder?: string;
    autoSize?: boolean;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
	/** -- */
	id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any) => void;
    onInputCallback?: (e: any) => void;
    onKeyPressedCallback?: (e: any) => void;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};


const Textarea = forwardRef((props: TextareaProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        cols,
        rows,
        disabled,
        required,
        placeholder,
        autoSize,
        iconLeft,
        iconRight,
        readOnly,
        value,
        label,
        name,
        id,
        maxLength,
        style,
        tabIndex,
        onChangeCallback,
        onInputCallback,
        onKeyPressedCallback,
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


    // auto size
    useAutosizeTextArea(autoSize ? valRef.current : null, autoSize ? changedVal : '');

    function handleFocus(event: any) {
        const el = event.target;
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);     
    }

    function handleChange(event: any) {
        const val = event.target.value;

        setChangedVal(val);

        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onChange?.(event);

        // It fires in real time as the user enters
        if (typeof (onInputCallback) === 'function') {
            const newData: any = onInputCallback(event);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }

    }

    function handleBlur(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onBlur?.(event);


        // It fires when focus is lost
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(event);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }

    }

    function handleKeyPressed(event: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (typeof (onKeyPressedCallback) === 'function') {
            const newData: any = onKeyPressedCallback(event);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }
    }


    useEffect(() => {

     
        // update default value
        //--------------
        if (typeof value !== 'undefined' && value !== null) {
      
            if (value.length > 0 && autoSize) {

                // Recalculate height if default value exceeds initial height
                setChangedVal(``);
                setTimeout(() => {
                    setChangedVal(`${value}`);
                }, 0);

            } else {
                setChangedVal(`${value}`);   // Avoid displaying the number 0
            }

        }

    }, [value]);    
    

    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className={controlGroupWrapperClassName || "form-label"} dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={idRes} className={controlGroupWrapperClassName || "form-label"}>{label}</label>}</> : null}

                <div className="input-group">
                    {typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? <><span className={controlGroupTextClassName || "input-group-text"}>{iconLeft}</span></>: null}
                    
                    <textarea  
                        ref={(node) => {
                            valRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }}
                      tabIndex={tabIndex || 0}
					  className={controlClassName || controlClassName === '' ? controlClassName : "form-control"}
			          id={idRes}
					  name={name}
					  placeholder={placeholder || ''}
					  value={changedVal}
					  maxLength={maxLength || null}
			          onFocus={handleFocus}
					  onBlur={handleBlur}
			          onChange={handleChange}
                      onKeyDown={handleKeyPressed}
			          disabled={disabled || null}
					  required={required || null}
                      readOnly={readOnly || null}
					  cols={cols || 20}
					  rows={rows || 2}
                      style={style}
                      {...attributes}
					/>
                     {typeof iconRight !== 'undefined' && iconRight !== null && iconRight !== '' ? <><span className={controlGroupTextClassName || "input-group-text"}>{iconRight}</span></>: null}
                </div>
                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}

            </div>


        </>
    )

});

export default Textarea;
