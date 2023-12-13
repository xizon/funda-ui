import React, { useId, useRef, useState, useEffect } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

interface OptionConfig {
    [propName: string]: string | number | React.ReactNode;
}


type RadioOptionChangeFnType = (arg1: any, arg2: any, arg3?: any, arg4?: any) => void;


type RadioProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    options?: OptionConfig[] | string;
    inline?: boolean;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    fetchCallback?: (data: any) => void;
    onFetch?: (data: any) => void;
    onClick?: RadioOptionChangeFnType | null;
    onChange?: RadioOptionChangeFnType | null;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
};

const Radio = (props: RadioProps) => {
    const {
        wrapperClassName,
        disabled,
        required,
        value,
        label,
        name,
        id,
        options,
        inline,
        style,
        tabIndex,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        fetchCallback,
        onFetch,
        onClick,
        onChange,
        onBlur,
        onFocus,
        ...attributes
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const optionsRes = options ? isJSON(options) ? JSON.parse(options as string) : options : '';

    // return a array of options
    let optionsDataInit: OptionConfig[] = optionsRes;
    

    //
    const [dataInit, setDataInit] = useState<OptionConfig[]>(optionsDataInit);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [controlValue, setControlValue] = useState<string | undefined>('');



    async function fetchData(params: any) {

        // set default value
        if (typeof value !== 'undefined' && value !== '') rootRef.current.dataset.value = value;

        //
        if (typeof fetchFuncAsync === 'object') {

            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;

            // reset data structure
            if (typeof (fetchCallback) === 'function') {
                _ORGIN_DATA = fetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (_ORGIN_DATA.length > 0 && typeof _ORGIN_DATA[0].value === 'undefined') {
                console.warn('The data structure does not match, please refer to the example in the component documentation.');
                setHasErr(true);
                _ORGIN_DATA = [];
            }

            //
            setControlValue(value); // value must be initialized


            //
            setDataInit(_ORGIN_DATA); // data must be initialized

            //
            onFetch?.(_ORGIN_DATA);

            return _ORGIN_DATA;
        } else {

            //
            setControlValue(value); // value must be initialized

            //
            setDataInit(optionsDataInit); // data must be initialized

            //
            onFetch?.(optionsDataInit);

            return optionsDataInit;
        }


    }


    // Determine whether it is in JSON format
    function isJSON(str: any) {

        if (typeof (str) === 'string' && str.length > 0) {

            if (str.replace(/\"\"/g, '').replace(/\,/g, '') == '[{}]') {
                return false;
            } else {

                if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
                    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
                    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                    return true;

                } else {
                    return false;
                }

            }

        } else {

            if (
                typeof (str) === 'object' &&
                Object.prototype.toString.call(str) === '[object Object]' &&
                !str.length
            ) {
                return true;
            } else {
                return false;
            }

        }

    }

    //
    function handleFocus(event: any) {
        rootRef.current.classList.add('focus');

        //
        onFocus?.(event);
    }

    function handleChange(event: any) {
        const val = event.target.value;
        const currentIndex = event.target.dataset.index;


        //----
        // update value
        setControlValue(val);


        //----
        //remove focus style
        rootRef.current.classList.remove('focus');

   
        //
        if (typeof (onChange) === 'function') {
            onChange(event, val, dataInit[currentIndex], currentIndex);
        }
        if (typeof (onClick) === 'function') {
            onClick(event, val, dataInit[currentIndex], currentIndex);
        }
    }

    function handleBlur(event: any) {

        //----
        //remove focus style
        rootRef.current.classList.remove('focus');

        //
        onBlur?.(event);
    }


    // Generate list of options
    const itemsList = dataInit.map((item: any, index: number) => {
        const requiredVal = index === 0 ? required || null : null;

        return <div key={index} className={inline ? `form-check form-check-inline` : `form-check`}>

            <div className="d-inline-block">
                <input
                    tabIndex={tabIndex || 0}
                    type="radio"
                    className="form-check-input"
                    id={`field-${uniqueID}-${index}`}
                    name={name}
                    data-index={index}
                    value={`${item.value}`}
                    required={requiredVal}
                    disabled={disabled || null}
                    onChange={handleChange}
                    onClick={typeof (onClick) === 'function' ? handleChange : () => void (0)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    checked={controlValue == item.value}   // component status will not change if defaultChecked is used
                    style={style}
                    {...attributes}
                />
                <label className="form-check-label" htmlFor={`field-${uniqueID}-${index}`} dangerouslySetInnerHTML={{
                    __html: `${item.label}`
                }}></label>
            </div>
            <div className="d-inline-block">
                <div className="form-control-extends__wrapper">{typeof item.extends !== 'undefined' ? <>{item.extends}</> : null}</div>
            </div>


            
        </div>;

    });



    useEffect(() => {

        // data init
        //--------------
        const _params: any[] = fetchFuncMethodParams || [];
        fetchData((_params).join(','));

    }, [value, options]);


    return (
        <>


            <div id={`radio__wrapper-${idRes}`} className={`radio__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'mb-3 position-relative'}`} ref={rootRef}>
                {label ? <><label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label></> : null}
                <div id={idRes}>
                    {!hasErr ? itemsList : null}
                </div>
            </div>




        </>
    )
};

export default Radio;

