import React, { useId, useRef } from 'react';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
type TextareaProps = {
    wrapperClassName?: string;
	value?: string;
	label?: React.ReactNode | string;
	name?: string;
	maxLength?: any;
	cols?: number;
	rows?: number;
	disabled?: any;
	required?: any;
	placeholder?: string;
	/** -- */
	id?: string;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};


export default function Textarea(props: TextareaProps) {

    const {
        wrapperClassName,
        cols,
        rows,
        disabled,
        required,
        placeholder,
        value,
        label,
        name,
        id,
        maxLength,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const rootRef = useRef<any>(null);

    function handleFocus(event) {
        const el = event.target;
        rootRef.current.classList.add('is-active');

        //
        onFocus?.(event);     
    }

    function handleChange(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '' || val === 'blank') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onChange?.(event);
    }

    function handleBlur(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '' || val === 'blank') {
            rootRef.current.classList.remove('is-active');
        }

        //
        onBlur?.(event);
    }

    const idRes = id || uniqueID;

    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                <div className="input-group">
                    
                    <textarea  
					  className="form-control"
			          id={idRes}
					  name={name}
					  placeholder={placeholder || ''}
					  defaultValue={value || ''}
					  maxLength={maxLength || null}
			          onFocus={handleFocus}
					  onBlur={handleBlur}
			          onChange={handleChange}
			          disabled={disabled || null}
					  required={required || null}
					  cols={cols || 20}
					  rows={rows || 2}
                      {...attributes}
					/>
					
                    {required ? <><span className="input-group-text bg-transparent"><span className="text-danger">*</span></span></> : ''}

                </div>

            </div>


        </>
    )
}
