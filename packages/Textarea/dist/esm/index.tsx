import React, { useId, useRef } from 'react';

declare module 'react' {
    interface HTMLAttributes<T> {
        children?: any;
    }
}

type TextareaProps = {
    wrapperClassName?: string;
	value?: string;
	label?: string | object;
	name?: string;
	maxLength?: any;
	cols?: number;
	rows?: number;
	disabled?: any;
	required?: any;
	placeholder?: string;
	/** -- */
	id?: string;
};


export default function Textarea(props: TextareaProps) {

    const uniqueID = useId();
    const rootRef = useRef<any>(null);

    function handleFocus(event) {
        const el = event.target;
        rootRef.current.classList.add('is-active');
    }

    function handleBlurChange(event) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '' || val === 'blank') {
            rootRef.current.classList.remove('is-active');
        }
    }


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
        ...attributes
    } = props;

    const idRes = id || uniqueID;

    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "app-form-group"} ref={rootRef}>
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
					  onBlur={handleBlurChange}
			          onChange={handleBlurChange}
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
