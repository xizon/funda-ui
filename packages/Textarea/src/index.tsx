import React, { useState, useEffect, useRef, forwardRef, KeyboardEvent, useImperativeHandle } from 'react';



import useComId from 'funda-utils/dist/cjs/useComId';
import useAutosizeTextArea from 'funda-utils/dist/cjs/useAutosizeTextArea';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



export type TextareaProps = {
    contentRef?: React.ForwardedRef<any>; // could use "Array" on contentRef.current, such as contentRef.current[0], contentRef.current[1]
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
	value?: string;
    defaultValue?: string;
    requiredLabel?: React.ReactNode | string;
	label?: React.ReactNode | string;
	name?: string;
    minLength?: any;
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
    onChangeCallback?: (e: any, el: any) => void;
    onInputCallback?: (e: any, el: any) => void;
    onKeyPressedCallback?: (e: any, el: any) => void;
    onChange?: (e: any, el: any) => void;
    onBlur?: (e: any, el: any) => void;
    onFocus?: (e: any, el: any) => void;
    onPressEnter?: (e: any, el: any) => void;
    onResize?: (el: any, params: number[]) => void;
    
};


const Textarea = forwardRef((props: TextareaProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
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
        defaultValue,
        value,
        requiredLabel,
        label,
        name,
        id,
        minLength,
        maxLength,
        style,
        tabIndex,
        onChangeCallback,
        onInputCallback,
        onKeyPressedCallback,
        onChange,
        onBlur,
        onFocus,
        onPressEnter,
        onResize,
        ...attributes
    } = props;


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const [changedVal, setChangedVal] = useState<string>(value || '');

    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            control: () => {
                return valRef.current;
            },
            clear: (cb?: any) => {
                setChangedVal('');
                cb?.();
            },
            set: (value: string, cb?: any) => {
                setChangedVal(`${value}`);
                cb?.();
            }
        }),
        [contentRef]
    );


    // auto size
    useAutosizeTextArea({
        el: autoSize ? valRef.current : null,
        value: autoSize ? changedVal : '',
        cb: (res: any[]) => {
            onResize?.(valRef.current, res);
        }
    });

    function handleFocus(event: any) {
        const el = event.target;
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event, valRef.current);     
    }

    function handleChange(event: any) {
        const val = event.target.value;

        setChangedVal(val);

        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onChange?.(event, valRef.current);

        // It fires in real time as the user enters
        if (typeof (onInputCallback) === 'function') {
            const newData: any = onInputCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }

    }

    function handleBlur(event: any) {
        const el = event.target;
        const val = event.target.value;


        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onBlur?.(event, valRef.current);


        // It fires when focus is lost
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }

    }

    function handleKeyPressed(event: KeyboardEvent<HTMLTextAreaElement>) {
        if (typeof (onKeyPressedCallback) === 'function') {
            const newData: any = onKeyPressedCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }

        if (event.code == "Enter") {
            // DO NOT USE "preventDefault()"
            onPressEnter?.(event, valRef.current);
        }

    }


    useEffect(() => {

     
        // update default value
        //--------------
        if (typeof value !== 'undefined') {
      
            if (typeof value === 'string' && value.length > 0 && autoSize) {  // The value may be NULL

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
    


    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED

            if (typeof defaultValue === 'string' && defaultValue.length > 0 && autoSize) {  // The value may be NULL

                // Recalculate height if default value exceeds initial height
                setChangedVal(``);
                setTimeout(() => {
                    setChangedVal(`${defaultValue}`);
                }, 0);

            } else {
                setChangedVal(`${defaultValue}`);   // Avoid displaying the number 0
            }
        }

    }, []);

    return (
        <>

            <div className={clsWrite(wrapperClassName, 'mb-3 position-relative')} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={idRes} className="form-label">{label}</label>}</> : null}

                <div className={clsWrite(controlGroupWrapperClassName, 'input-group')}>
                    {typeof iconLeft !== 'undefined' && iconLeft !== null && iconLeft !== '' ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{iconLeft}</span></>: null}
                    
                    <textarea  
                        ref={(node) => {
                            valRef.current = node;
                            if (typeof externalRef === 'function') {
                                externalRef(node);
                            } else if (externalRef) {
                                externalRef.current = node;
                            }
                        }}
                      tabIndex={tabIndex || 0}
					  className={combinedCls(
                        clsWrite(controlClassName, 'form-control'),
                        controlExClassName
                      )}
			          id={idRes}
					  name={name}
					  placeholder={placeholder || ''}
                      defaultValue={defaultValue}
					  value={changedVal}
                      minLength={minLength || null}
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
                     {typeof iconRight !== 'undefined' && iconRight !== null && iconRight !== '' ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{iconRight}</span></>: null}
                </div>
                {required ? <>{requiredLabel || requiredLabel === '' ? requiredLabel : <span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>}</> : ''}

            </div>


        </>
    )

});

export default Textarea;
