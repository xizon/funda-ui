import React, { useState, useEffect, useRef, forwardRef, ChangeEvent, FocusEvent, useImperativeHandle } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';
import {
    calcAdd,
    calcSub,
    isNumeric,
    truncateDecimals,
    exceedDecimalPlaces,
    formatNumber
} from 'funda-utils/dist/cjs/math';

export type NumberInputProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    arrowBtnClassName?: string[];
    arrowBtnContainerClassName?: string;
    increaseIcon?: React.ReactNode | string;
    decreaseIcon?: React.ReactNode | string;
    hideArrowButton?: boolean;
    defaultValue?: string;
    value?: string;
    requiredLabel?: React.ReactNode | string;
    label?: React.ReactNode | string;
    units?: React.ReactNode | string;
    name?: string;
    step?: any;
	min?: any;
	max?: any;
    decimalPlaces?: number;
    alt?: any;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChange?: (e: any, el: HTMLElement, val: number) => void;
    onBlur?: (e: any, el: any) => void;
    onFocus?: (e: any, el: any) => void;

};


const NumberInput = forwardRef((props: NumberInputProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        controlClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        arrowBtnClassName,
        arrowBtnContainerClassName,
        increaseIcon,
        decreaseIcon,
        hideArrowButton = false,
        requiredLabel,
        disabled,
        required,
        placeholder,
        readOnly,
        defaultValue,
        value,
        label,
        units,
        name,
        step = 1,
        min = Number.MIN_SAFE_INTEGER,
        max = Number.MAX_SAFE_INTEGER,
        decimalPlaces = 0,
        alt,
        id,
        iconLeft,
        iconRight,
        style,
        tabIndex,
        onChange,
        onBlur,
        onFocus,
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
            getLatestVal: () => {
                return changedVal || '';
            },
            clear: (cb?: any) => {
                setChangedVal('');
                cb?.();

                onChange?.(null, valRef.current, Number(''));
            },
            set: (value: string, cb?: any) => {
                setChangedVal(`${value}`);
                cb?.();

                onChange?.(null, valRef.current, Number(formatValue(`${value}`)));
            },
            increment: (cb?: any) => {
                handleIncrement(null);
                cb?.();
            },
            decrement: (cb?: any) => {
                handleDecrement(null);
                cb?.();
            }

        }),
        [contentRef, changedVal],
    );

    const propExist = (p: any) => {
        return typeof p !== 'undefined' && p !== null && p !== '';
    };

    // Formalized digits, supporting decimal places
    const formatValue = (inputValue: any) => {
        return formatNumber(inputValue, decimalPlaces, min, max);
    };

    const checkResValue = (inputValue: number | string) => {
        // Check whether the number of decimal places exceeds the specified value
        if (exceedDecimalPlaces(inputValue, decimalPlaces)) {
            inputValue = truncateDecimals(Number(inputValue), decimalPlaces);
        }
    
        // check min or max value
        if ( Number(inputValue) > max ) inputValue = max;
        if ( Number(inputValue) < min ) inputValue = min;

        return inputValue;
    };

    const handleIncrement = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        if (e) e.preventDefault();
  
        setChangedVal((prevValue: string) => {
            const newValue = calcAdd(parseFloat(prevValue), step);
            onChange?.(e, valRef.current, Number(formatValue(newValue)));
            return formatValue(newValue);
        });
        
    };

    const handleDecrement = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        if (e) e.preventDefault();

        setChangedVal((prevValue: string) => {
            const newValue = calcSub(parseFloat(prevValue), step);
            onChange?.(e, valRef.current, Number(formatValue(newValue)));
            return formatValue(newValue);
        });
        
    };


    
    function handleFocus(event: FocusEvent<HTMLInputElement>) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event, valRef.current);    
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const val = event.target.value;
        let newVal: number | string = parseFloat(event.target.value);
        
        if (!isNumeric(newVal)) newVal = val;

        // Determine whether it is a null or negative symbol
        if (val === '-') {
            newVal = '-';

        // Determine whether to enter a decimal
        } else if (val.startsWith('-0') && decimalPlaces > 0) {
            newVal = val;

        //
        } else if (val.includes('.') && decimalPlaces > 0) {
            newVal = val;

        }else {
            newVal = formatValue(newVal);
        }

        // Check result
        newVal = checkResValue(newVal);
        

        //
        const resToInput = String(newVal) === 'NaN' ? '0' : String(newVal);
        setChangedVal(resToInput);


        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }
        
        //
        onChange?.(event, valRef.current, Number(!isNumeric(newVal) ? '0' : resToInput));
        

    }

    function handleBlur(event: FocusEvent<HTMLInputElement>) {
        const el = event.target;
        const val = event.target.value;


        // Determine whether to enter a decimal
        if (val.includes('.') && decimalPlaces > 0) {
            setChangedVal(formatValue(val));
        }

        // Determine whether it is a null or negative symbol
        if (val === '' || val === '-') {
            setChangedVal('0');
        }


        //----
        //remove focus style
        if (val === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onBlur?.(event, valRef.current);

    }
   

    useEffect(() => {
        
        // update default value
        //--------------
        if (typeof value !== 'undefined') {
            setChangedVal(`${formatValue(value)}`);   // Avoid displaying the number 0
        }
        

    }, [value]);


    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED
            setChangedVal(`${formatValue(defaultValue)}`);   // Avoid displaying the number 0
        }

    }, []);


    return (
        <>

            <div className={clsWrite(wrapperClassName, 'mb-3 position-relative')} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label> : <label htmlFor={idRes} className="form-label">{label}</label>}</> : null}

                <div className="position-relative">

                    {/* FLEX INPUT GROUP: Use flexbox to align input, units, iconRight, and arrow buttons */}
                    <div
                        className={combinedCls(
                            clsWrite(controlGroupWrapperClassName, 'input-group position-relative z-1 d-flex align-items-stretch'),
                            {
                                'has-left-content': propExist(iconLeft),
                                'has-right-content': propExist(iconRight) || propExist(units)
                            }
                        )}
                    >
                        {/* Left icon, if present */}
                        {propExist(iconLeft) ? (
                            <span className={clsWrite(controlGroupTextClassName, 'input-group-text d-flex align-items-center')}>{iconLeft}</span>
                        ) : null}

                        {/* Main input field */}
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
                            type="text"
                            inputMode={decimalPlaces > 0 ? 'decimal' : 'numeric'}   // numeric | decimal
                            className={combinedCls(
                                clsWrite(controlClassName, 'form-control')
                            )}
                            id={idRes}
                            name={name}
                            min={min || null}
                            max={max || null}
                            alt={alt || null}
                            placeholder={placeholder || ''}
                            value={changedVal}
                            autoComplete={'off'}
                            spellCheck={false}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            disabled={disabled || null}
                            required={required || null}
                            readOnly={readOnly || null}
                            style={style}
                            {...attributes}
                        />

                        {/* Units, if present */}
                        {propExist(units) ? (
                            <span className={clsWrite(controlGroupTextClassName, 'input-group-text d-flex align-items-center')}>{units}</span>
                        ) : null}

                        {/* Right icon, if present */}
                        {propExist(iconRight) ? (
                            <span className={clsWrite(controlGroupTextClassName, 'input-group-text d-flex align-items-center')}>{iconRight}</span>
                        ) : null}


                        {/* ARROW GROUP*/}
                        {hideArrowButton ? null : <>
                            <span 
                                className={clsWrite(
                                    arrowBtnContainerClassName,
                                    'btn-group-vertical d-flex flex-column justify-content-center align-items-center border border-start-0 rounded-end',
                                )}
                                role="group"
                                >
                                <button
                                    type="button"
                                    className={combinedCls(
                                        clsWrite(Array(arrowBtnClassName) && arrowBtnClassName ? arrowBtnClassName[0] : undefined, 'btn btn-sm border-0 border-bottom py-0 lh-1 flex-fill')
                                    )}
                                    tabIndex={-1}
                                    onClick={handleIncrement}
                                    disabled={disabled || null}
                                >
                                    <span>{increaseIcon || <svg width={13} fill="#000000" viewBox="0 0 24 24">
                                        <path d="M18.5,15.5l-6-7l-6,7H18.5z" />
                                        <rect fill="none" width="24" height="24" />
                                        <rect fill="none" width="24" height="24" />
                                    </svg>}</span>
                                </button>

                                <button
                                    type="button"
                                    className={combinedCls(
                                        clsWrite(Array(arrowBtnClassName) && arrowBtnClassName ? arrowBtnClassName[1] : undefined, 'btn btn-sm border-0 py-0 lh-1 flex-fill')
                                    )}
                                    tabIndex={-1}
                                    onClick={handleDecrement}
                                    disabled={disabled || null}
                                >
                                    <span>{decreaseIcon || <svg width={13} fill="#000000" viewBox="0 0 24 24">
                                        <path d="M6.5,8.5l6,7l6-7H6.5z"/>
                                        <rect fill="none" width="24" height="24" />
                                        <rect fill="none" width="24" height="24" />
                                    </svg>}</span>
                                </button>
                            </span>
                        </>}
                        {/* /ARROW GROUP*/}

                    </div>
                    {/* /FLEX INPUT GROUP*/}


                    {/* Required label, if present */}
                    {required ? (
                        <>
                            {requiredLabel || requiredLabel === '' ? requiredLabel : (
                                <span className="position-absolute end-0 top-0 my-2 mx-2 me-3 pe-3 z-1">
                                    <span className="text-danger">*</span>
                                </span>
                            )}
                        </>
                    ) : ''}


                </div>


            </div>


        </>
    )
});

export default NumberInput;
