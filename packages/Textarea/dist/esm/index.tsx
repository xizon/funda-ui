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
    autoSizeBeginOneline?: boolean;
	/** -- */
	id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any) => void;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};


const Textarea = forwardRef((props: TextareaProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
        cols,
        rows,
        disabled,
        required,
        placeholder,
        autoSize,
        autoSizeBeginOneline,
        readOnly,
        value,
        label,
        name,
        id,
        maxLength,
        style,
        tabIndex,
        onChangeCallback,
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
    useAutosizeTextArea(autoSize ? valRef.current : null, autoSize ? changedVal : '', autoSizeBeginOneline);

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


        //
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(event);
            setChangedVal(newData);
        }

    }

    useEffect(() => {

        // update default value
        //--------------
        setChangedVal(value || '');

    }, [value]);    
    

    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label></> : null}

                <div className="input-group">
                    
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
			          disabled={disabled || null}
					  required={required || null}
                      readOnly={readOnly || null}
					  cols={cols || 20}
					  rows={autoSizeBeginOneline ? 1 : (rows || 1)}
                      style={style}
                      {...attributes}
					/>
                </div>
                {required ? <><span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span></> : ''}

            </div>


        </>
    )

});

export default Textarea;
