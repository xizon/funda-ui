import React, { useId, useState, useEffect, useRef, ChangeEvent, MouseEvent, CompositionEvent, KeyboardEvent, FocusEvent, forwardRef } from 'react';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type SearchBarProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    appearance?: string;
    isSearchInput?: boolean;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    units?: React.ReactNode | string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    minLength?: any;
    maxLength?: any;
    readOnly?: any;
    disabled?: any;
    required?: any;
    placeholder?: string;
    icon?: React.ReactNode | string;
    btnId?: string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onClick?: (e: any) => void;
    onKeyPressedCallback?: (e: any) => void;
    onSubmit?: (e: any) => void;
    onChange?: (e: any, param: any) => void;
    onBlur?: (e: any, param: any) => void;
    onFocus?: (e: any, param: any) => void;
    onPressEnter?: (e: any, param: any) => void;
};

const SearchBar = forwardRef((props: SearchBarProps, externalRef: any) => {
    const {
        wrapperClassName,
        controlClassName,
        controlExClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        appearance,
        isSearchInput,
        readOnly,
        disabled,
        required,
        placeholder,
        value,
        label,
        name,
        units,
        iconLeft,
        iconRight,
        minLength,
        maxLength,
        btnId,
        id,
        icon,
        autoComplete,
        style,
        tabIndex,
        onClick,
        onKeyPressedCallback,
        onSubmit,
        onChange,
        onBlur,
        onFocus,
        onPressEnter,
        ...attributes
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const [changedVal, setChangedVal] = useState<string>(value || '');


    const [onComposition, setOnComposition] = useState<boolean>(false);

    const propExist = (p: any) => {
        return typeof p !== 'undefined' && p !== null && p !== '';
    };

    function handleComposition(event: CompositionEvent<HTMLInputElement>) {
        if (event.type === 'compositionstart') {
            setOnComposition(true);
        }
        if (event.type === 'compositionend') {
            setOnComposition(false);
        }
    }


    function handleClick(event: MouseEvent<HTMLInputElement>) {
        onClick?.(event);
    }


    function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
        onSubmit?.(event);
    }

    function handleFocus(event: FocusEvent<HTMLInputElement>) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event, onComposition);
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
        onChange?.(event, onComposition);
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
        onBlur?.(event, onComposition);
    }

    function handleKeyPressed(event: KeyboardEvent<HTMLInputElement>) {

        if (typeof (onKeyPressedCallback) === 'function') {
            const newData: any = onKeyPressedCallback(event);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }


        if (event.code == "Enter") {
            // DO NOT USE "preventDefault()"
            onPressEnter?.(event, onComposition);
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
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={idRes} className="form-label" >{label}</label>}</> : null}

                <div className={`${controlGroupWrapperClassName || "input-group"} position-relative ${propExist(iconLeft) ? 'has-left-content' : ''} ${propExist(iconRight) || propExist(units) ? 'has-right-content' : ''}`}>
                    
                    {propExist(iconLeft) ? <><span className={controlGroupTextClassName || "input-group-text"}>{iconLeft}</span></>: null}

                    <input
                        ref={externalRef}
                        tabIndex={tabIndex || 0}
                        type={isSearchInput ? 'search' : 'text'}
                        className={`${appearance === 'pill' ? `${(controlClassName || controlClassName === '' ? controlClassName : "form-control")} border rounded-pill` : (controlClassName || controlClassName === '' ? controlClassName : "form-control")} ${controlExClassName || ''}`}
                        id={idRes}
                        name={name}
                        placeholder={placeholder || ''}
                        value={changedVal}
                        minLength={minLength || null}
                        maxLength={maxLength || null}
                        autoComplete={typeof autoComplete === 'undefined' ? 'off' : autoComplete}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onClick={handleClick}
                        onKeyDown={handleKeyPressed}
                        onCompositionStart={handleComposition}
                        onCompositionUpdate={handleComposition}
                        onCompositionEnd={handleComposition}
                        disabled={disabled || null}
                        readOnly={readOnly || null}
                        required={required || null}
                        style={style}
                        {...attributes}
                    />

                    {propExist(units) ? <><span className={controlGroupTextClassName || "input-group-text"}>{units}</span></> : null}
                    {propExist(iconRight) ? <><span className={controlGroupTextClassName || "input-group-text"}>{iconRight}</span></> : null}


                    {icon || icon !== '' ? <>
                        <span className={appearance === 'pill' ? 'position-absolute end-0' : 'input-group-text m-0 p-0 border-start-0'} style={appearance === 'pill' ? { zIndex: 5 } : {}}>
                            <button id={btnId} type="button" className={appearance === 'pill' ? 'btn border-end-0 rounded-pill' : 'btn btn-sm'} onClick={handleSubmit}>
                                {icon ? <>{icon}</> : <><svg width="1.2em" height="1.2em" fill="#333" viewBox="0 0 16 16">
                                    <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" />
                                </svg></>}
                            </button>

                        </span>
                    </> : null}


                </div>
            </div>


        </>
    )
});

export default SearchBar;