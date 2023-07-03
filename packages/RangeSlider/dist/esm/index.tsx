import React, { useId, useEffect, useState, useRef } from 'react';

import Input from 'rpb-input';


type RangeSliderProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    value?: any;
    label?: React.ReactNode | string;
    minName?: string;
    maxName?: string;
    onlyOne?: boolean;
    step: number;
    min: number;
    max: number;
    disabled?: any;
    required?: any;
    /** -- */
    id?: string;
    tabIndex?: number;
    onChange?: (e: any, param: any) => void;
};


const RangeSlider = (props: RangeSliderProps) => {
    const {
        wrapperClassName,
        controlClassName,
        disabled,
        required,
        value,
        label,
        minName,
        maxName,
        onlyOne,
        step,
        min,
        max,
        id,
        tabIndex,
        onChange
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valMinRef = useRef<any>(null);
    const valMaxRef = useRef<any>(null);

    const [minValue, setMinValue] = useState<any>(value ? value.min : min);
    const [maxValue, setMaxValue] = useState<any>(value ? value.max : max);
    const [minActive, setMinActive] = useState<boolean>(false);
    const [maxActive, setMaxActive] = useState<boolean>(false);

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;


    function initDefaultValue(defaultValue: any) {

        // change the value to trigger component rendering
        if ( typeof defaultValue === 'undefined' || defaultValue === '' ) {
            setMinValue(min);
            setMaxValue(max);
        } else {
            setMinValue(defaultValue.min);
            setMaxValue(defaultValue.max);
        }
    }


    function handleMinEnter(e: any) {
        setMinActive(true);
    }

    function handleMinLeave(e: any) {
        setMinActive(false);
    }

    function handleMaxEnter(e: any) {
        setMaxActive(true);
    }

    function handleMaxLeave(e: any) {
        setMaxActive(false);
    }


    function handleMinChange(e: any) {
        e.preventDefault();
        const newMinVal = Math.min(+e.target.value, (onlyOne ? maxValue : maxValue - step));
        setMinValue(newMinVal);
        onChange?.(e, { min: newMinVal, max: maxValue });
    }

    function handleMaxChange(e: any) {
        e.preventDefault();
        const newMaxVal = Math.max(+e.target.value, minValue + step);
        setMaxValue(newMaxVal);
        onChange?.(e, { min: minValue, max: newMaxVal });
    }



    useEffect(() => {


        // update default value
        //--------------
        initDefaultValue(value);

        // If you use the dynamic form assignment (such as document.getElementById(xxx).value), 
        // you need to judge the value of the input obtained by using the macrotask "setInterval()"
        let timer: any = null;
        let initTimes: number = 0;
        let hasValue: boolean = false;
        timer = setInterval( () => {
            if ( initTimes > 5 || hasValue ) {
                clearInterval(timer);
            } else {
                if ((typeof value === 'undefined' || value === '')) {
                    if (valMinRef.current !== null && valMaxRef.current !== null && valMinRef.current.value !== '' && valMaxRef.current.value !== '')
                        initDefaultValue({ min: valMinRef.current.value, max: valMaxRef.current.value });
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

            {label ? <><div className="range-slider__label"><label htmlFor={`label-${idRes}`} className="form-label">{label}</label></div></> : null}


            <div className={wrapperClassName || wrapperClassName === '' ? `range-slider__wrapper ${onlyOne ? 'only-one' : ''} ${wrapperClassName}` : `range-slider__wrapper ${onlyOne ? 'only-one' : ''} mb-3 position-relative`} ref={rootRef}>

                {/* The <Input /> component is a placeholder that ensures the same height and alignment as other form components */}
                <Input
                    ref={valMinRef}
                    wrapperClassName={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"}
                    controlClassName={controlClassName || controlClassName === '' ? controlClassName : "form-control"}   
                    required={required || null}
                    type="text"
                    id={idRes + '-min'}
                    name={minName}
                    value={minValue.toString()}  //  Convert to a string to ensure that 0 can also be filled
                />

                <Input
                    ref={valMaxRef}
                    wrapperClassName={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"}
                    controlClassName={controlClassName || controlClassName === '' ? controlClassName : "form-control"}   
                    required={required || null}
                    type="text"
                    id={idRes + '-max'}
                    name={maxName}
                    value={maxValue.toString()}  //  Convert to a string to ensure that 0 can also be filled
                />                


                <div className={`range-slider__control-wrapper ${disabled ? 'disabled' : ''}`}>

                    <div className="range-slider__input">
                        <input
                            type="range"
                            value={minValue}
                            min={min}
                            max={max}
                            step={step}
                            tabIndex={tabIndex || 0}
                            disabled={disabled || null}
                            onMouseEnter={handleMinEnter}
                            onMouseLeave={handleMinLeave}
                            onChange={handleMinChange}
                        />
                        <input
                            type="range"
                            value={maxValue}
                            min={min}
                            max={max}
                            step={step}
                            tabIndex={tabIndex || 0}
                            disabled={onlyOne ? true : (disabled || null)}
                            onMouseEnter={handleMaxEnter}
                            onMouseLeave={handleMaxLeave}
                            onChange={handleMaxChange}
                        />

                    </div>

                    <div className="range-slider__placeholder">
                        <div className={`range-slider__placeholder-grab ${minActive ? 'active' : ''}`} style={{ left: `${minPos}%` }} />
                        <div className="range-slider__placeholder-rail">
                            <div
                                className="range-slider__placeholder-inner-rail"
                                style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                            />
                        </div>
                        <div className={`range-slider__placeholder-grab ${maxActive ? 'active' : ''} ${onlyOne ? 'inactive' : ''}`} style={{ left: `${maxPos}%` }} />
                    </div>

                </div>

            </div>

        </>
    )
};


export default RangeSlider;