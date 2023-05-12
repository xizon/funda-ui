import React, { useId, useRef, forwardRef } from 'react';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
type TextareaProps = {
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
	/** -- */
	id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
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
        readOnly,
        value,
        label,
        name,
        id,
        maxLength,
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

    function handleFocus(event) {
        const el = event.target;
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);     
    }

    function handleChange(event: any) {
        const el = event.target;
        const val = event.target.value;


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
    }

    

    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label">{label}</label></> : null}

                <div className="input-group">
                    
                    <textarea  
                      ref={ref}
                      tabIndex={tabIndex || 0}
					  className={controlClassName ? controlClassName : "form-control"}
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
                      readOnly={readOnly || null}
					  cols={cols || 20}
					  rows={rows || 2}
                      style={style}
                      {...attributes}
					/>
                </div>
                {required ? <><span className="position-absolute end-0 bottom-0 my-1 mx-2"><span className="text-danger">*</span></span></> : ''}

            </div>


        </>
    )

});

export default Textarea;
