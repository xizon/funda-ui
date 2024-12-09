import React, { useState, useEffect, useRef, forwardRef, ChangeEvent, CompositionEvent, KeyboardEvent, FocusEvent, useImperativeHandle } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';
import { actualPropertyValue, getTextTop } from 'funda-utils/dist/cjs/inputsCalculation';
import useDebounce from 'funda-utils/dist/cjs/useDebounce';



export type InputProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    controlGroupWrapperClassName?: string;
    controlGroupTextClassName?: string;
    type?: string;
    defaultValue?: string;
    value?: string;
    requiredLabel?: React.ReactNode | string;
    label?: React.ReactNode | string;
    units?: React.ReactNode | string;
    name?: string;
    step?: any;
    min?: any;
    max?: any;
    src?: any;
    size?: any;
    minLength?: any;
    maxLength?: any;
    alt?: any;
    inputMode?: "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;
    disabled?: any;
    required?: any;
    readOnly?: any;
    placeholder?: string;
    pattern?: any;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    appendControl?: React.ReactNode;
    aiPredict?: boolean;
    aiPredictRemainingTextRGB?: number[];
    aiPredictConfirmKey?: Array<string[]>;
    aiPredictFetchFuncAsync?: any;
    aiPredictFetchFuncMethod?: string;
    aiPredictFetchFuncMethodParams?: any[];
    aiPredictFetchCallback?: (data: any) => void;
    /** -- */
    id?: string;
    style?: React.CSSProperties;
    autoComplete?: string;
    autoCapitalize?: string;
    spellCheck?: boolean;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    onChangeCallback?: (e: any, el: any) => void;
    onInputCallback?: (e: any, el: any) => void;
    onKeyPressedCallback?: (e: any, el: any) => void;
    onChange?: (e: any, param: any, el: any, value: string) => void;
    onBlur?: (e: any, param: any, el: any) => void;
    onFocus?: (e: any, param: any, el: any) => void;
    onPressEnter?: (e: any, el: any) => void;

};


const Input = forwardRef((props: InputProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
        controlGroupWrapperClassName,
        controlGroupTextClassName,
        type,
        disabled,
        required,
        placeholder,
        pattern,
        readOnly,
        defaultValue,
        value,
        requiredLabel,
        label,
        units,
        name,
        step,
        min,
        max,
        src,
        size,
        minLength,
        maxLength,
        alt,
        inputMode,
        id,
        appendControl,
        aiPredict = false,
        aiPredictRemainingTextRGB = [153, 153, 153],
        aiPredictConfirmKey = [['Enter'], ['Tab'], ['Shift', ' ']],
        aiPredictFetchFuncAsync,
        aiPredictFetchFuncMethod,
        aiPredictFetchFuncMethodParams,
        aiPredictFetchCallback,
        iconLeft,
        iconRight,
        autoComplete,
        autoCapitalize,
        spellCheck,
        style,
        tabIndex,
        onChangeCallback,
        onInputCallback,
        onKeyPressedCallback,
        onChange,
        onBlur,
        onFocus,
        onPressEnter,
        ...attributes
    } = props;


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const valRef = useRef<any>(null);
    const typeRes = typeof (type) === 'undefined' ? 'text' : type;
    const [onComposition, setOnComposition] = useState<boolean>(false);
    const [changedVal, setChangedVal] = useState<string>(value || '');


    //================================================================
    // AI Predict
    //================================================================    
    const [currentSuggestion, setCurrentSuggestion] = useState<string>('');
    const [tempMatchedSuggestion, setTempMatchedSuggestion] = useState<string[]>([]);
    const [textWidth, setTextWidth] = useState<number>(0);
    const aiInputRef = useRef<any>(null);
    const originInputComputedStyle = useRef<Record<string, any>>({
        fontSize: 16,
        fontFamily: 'inherit',
        letterSpacing: 'normal',
        textTop: 10
    });
    const [hasErr, setHasErr] = useState<boolean>(false);
    const currentSuggestionIndex = useRef<number>(0);

    


    // A list of suggestions
    //----------------
    const [suggestions, setSuggestions] = useState<string[]>([]);

    //performance
    const handleChangeSuggestionsFetchSafe = useDebounce((e: any, curVal: string) => {
        const _oparams: any[] = aiPredictFetchFuncMethodParams || [];
        const _params: any[] = _oparams.map((item: any) => item !== '$QUERY_STRING' ? item : curVal);
        fetchSuggestionsData((_params).join(',')).then((resSuggestions: string[]) => {
            handleInputAiPredictChange(curVal, resSuggestions);
        });
    }, 350, []);

    async function fetchSuggestionsData(params: any) {

        if (typeof aiPredictFetchFuncAsync === 'object') {

            const response: any = await aiPredictFetchFuncAsync[`${aiPredictFetchFuncMethod}`](...params.split(','));
            let _ORGIN_DATA = response.data;

            // reset data structure
            if (typeof (aiPredictFetchCallback) === 'function') {
                _ORGIN_DATA = aiPredictFetchCallback(_ORGIN_DATA);
            }

            // Determine whether the data structure matches
            if (!Array.isArray(_ORGIN_DATA)) {
                console.warn('The data structure does not match, please refer to the example in the component documentation.');
                setHasErr(true);
                _ORGIN_DATA = [];
            }


            //
            setSuggestions(_ORGIN_DATA);

            return _ORGIN_DATA;
        } else {
            return [];
        }


    }



    // Calculates the width of the input text
    //----------------
    const calculateTextWidth = (text: string) => {
        if (valRef.current) {
            const canvas = document.createElement('canvas');
            const context: any = canvas.getContext('2d');
            context.font = `${originInputComputedStyle.current.fontSize}px ${originInputComputedStyle.current.fontFamily}`;
            return context.measureText(text).width;
        }
        return 0;
    };


    // Get the rest of the suggested text
    //----------------
    const getRemainingText = (fullSuggestion: string) => {
        if (!changedVal || !fullSuggestion) return '';
       

        // Only the parts of the suggested text that were not entered are returned
        const lastInputChar = changedVal[changedVal.length - 1];
        const lastCharIndex = fullSuggestion.toLowerCase().lastIndexOf(lastInputChar.toLowerCase());
        return fullSuggestion.slice(lastCharIndex + 1);

    };

    // Match exactly from the start
    //----------------
    const preciseMatch = (input: any, suggestions: string[]) => {
        if (!input) return '';

        const filtered = suggestions.filter(s =>
            s.toLowerCase().startsWith(input.toLowerCase())
        );

        setTempMatchedSuggestion(filtered);
        return filtered;
    };


    // Fuzzy matching
    //----------------
    const fuzzyMatch = (input: any, suggestions: string[]) => {
        if (!input) return '';

        // Convert input to a regular expression pattern with support for arbitrary position matching
        const pattern = input.split('').map((char: string) =>
            char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        ).join('.*');
        const regex = new RegExp(pattern, 'i');

        // Find the first matching suggestion (multiple matches)
        const filtered = suggestions.filter((suggestion: string) => regex.test(suggestion));
        setTempMatchedSuggestion(filtered);
        return filtered;
    };

    // Handle input variations
    //----------------
    const handleInputAiPredictChange = (newValue: string, curSuggestions: string[]) => {
        setTextWidth(calculateTextWidth(newValue));

        // Match results
        const matchedSuggestion = fuzzyMatch(newValue, curSuggestions);
        setCurrentSuggestion(matchedSuggestion[0] || '');

    };




    // Calculate the color shade of the prompt text
    //----------------
    const calculateOpacity = () => {
        // Transparency is calculated based on the input length
        const baseOpacity = 0.5;
        const inputLength = changedVal.length;
        return Math.max(0.2, baseOpacity - (inputLength * 0.05));
    };



    // Confirm
    //----------------
    const handleAiPredictKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // Prevents the default behavior of the enter key
        e.preventDefault();

        const remainingText = getRemainingText(currentSuggestion);
        if (remainingText) {
            // Only the second half of the text is added
            handleChange(e, changedVal + remainingText);
            setCurrentSuggestion('');
        }
    };

    //
    const remainingText = getRemainingText(currentSuggestion);


    //================================================================
    // General
    //================================================================  
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
        [contentRef],
    );

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


    function handleFocus(event: FocusEvent<HTMLInputElement>) {
        rootRef.current?.classList.add('focus');

        //
        onFocus?.(event, onComposition, valRef.current);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement> | null, curVal: string) {
        setChangedVal(curVal);

   
        //----
        //remove focus style
        if (curVal === '') {
            rootRef.current?.classList.remove('focus');
        }

        //
        onChange?.(event, onComposition, valRef.current, curVal);

        // It fires in real time as the user enters
        if (typeof (onInputCallback) === 'function') {
            const newData: any = onInputCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }


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
        onBlur?.(event, onComposition, valRef.current);

        // It fires when focus is lost
        if (typeof (onChangeCallback) === 'function') {
            const newData: any = onChangeCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }
    }


    function handleKeyPressed(event: KeyboardEvent<HTMLInputElement>) {
        if (typeof (onKeyPressedCallback) === 'function') {
            const newData: any = onKeyPressedCallback(event, valRef.current);
            if (newData) setChangedVal(newData);  // Avoid the error "react checkbox changing an uncontrolled input to be controlled"
        }


        if (event.code == "Enter") {
            // DO NOT USE "preventDefault()"
            onPressEnter?.(event, valRef.current);
        }


        // AI Predict
        //----
        if (aiPredict && currentSuggestion !== '') {
            const keyBindings: Array<string[]> = aiPredictConfirmKey;
            // The parameter 'registerKeyEvents' is an array, and each element is an object
            // eg. { keys: ["Control", "S"], action: () => { console.log("Ctrl+S"); } }
            const registerKeyEvents: Record<string, any>[] = keyBindings.map((s: string[]) => {
                return {
                    keys: s,
                    action: () => {
                        handleAiPredictKeyDown(event);
                    },
                };
            });

            registerKeyEvents.forEach((binding: Record<string, any>) => {
                const keysPressed = binding.keys.every((key: string) =>
                    key === "Shift" ? event.shiftKey :
                        key === "Control" ? event.ctrlKey :
                            key === "Alt" ? event.altKey :
                                key === "Meta" ? event.metaKey :
                                    event.key === key
                );

                if (keysPressed) {
                    binding.action();
                }
            });


            // switch result of suggestions
            if (event.code === 'ArrowUp') {
                currentSuggestionIndex.current = (currentSuggestionIndex.current - 1 + tempMatchedSuggestion.length) % tempMatchedSuggestion.length;
            }

            if (event.code === 'ArrowDown') {
                currentSuggestionIndex.current = (currentSuggestionIndex.current + 1) % tempMatchedSuggestion.length;
            }
            setCurrentSuggestion(tempMatchedSuggestion[currentSuggestionIndex.current] || '');

        }


    }


    useEffect(() => {

        // update default value
        //--------------
        if (typeof value !== 'undefined') {
            setChangedVal(`${value}`);   // Avoid displaying the number 0
        }


    }, [value]);


    useEffect(() => {

        // update default value (It does not re-render the component because the incoming value changes.)
        //--------------
        if (typeof defaultValue !== 'undefined') { //REQUIRED
            setChangedVal(`${defaultValue}`);   // Avoid displaying the number 0
        }


        // AI Predict initalization
        //--------------
        if (aiPredict && valRef.current !== null) {
            originInputComputedStyle.current = {
                fontSize: actualPropertyValue(valRef.current as HTMLInputElement, 'fontSize'),
                fontFamily: actualPropertyValue(valRef.current as HTMLInputElement, 'fontFamily'),
                letterSpacing: actualPropertyValue(valRef.current as HTMLInputElement, 'letterSpacing'),
                textTop: getTextTop(valRef.current)
            };
        }


    }, []);


    return (
        <>

            <div className={clsWrite(wrapperClassName, 'mb-3 position-relative')} ref={rootRef}>
                {label ? <>{typeof label === 'string' ? <label htmlFor={idRes} className="form-label" dangerouslySetInnerHTML={{ __html: `${label}` }}></label> : <label htmlFor={idRes} className="form-label">{label}</label>}</> : null}

                <div className={combinedCls(
                    'position-relative z-1',
                    clsWrite(controlGroupWrapperClassName, 'input-group'),
                    {
                        'has-left-content': propExist(iconLeft),
                        'has-right-content': propExist(iconRight) || propExist(units)
                    }
                )}>
                    {propExist(iconLeft) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{iconLeft}</span></> : null}

                    <div className="input-group-control-container flex-fill position-relative">
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
                            type={typeRes}
                            className={combinedCls(
                                clsWrite(controlClassName, 'form-control'),
                                controlExClassName,
                                {
                                    'rounded': !propExist(iconLeft) && !propExist(iconRight) && !propExist(units),
                                    'rounded-start-0': propExist(iconLeft),
                                    'rounded-end-0': propExist(iconRight) || propExist(units)
                                }
                            )}
                            id={idRes}
                            name={name}
                            step={step || null}
                            min={min || null}
                            max={max || null}
                            src={src || null}
                            size={size || null}
                            alt={alt || null}
                            inputMode={inputMode || 'text'}
                            pattern={pattern || null}
                            placeholder={placeholder || ''}
                            value={changedVal}
                            minLength={minLength || null}
                            maxLength={maxLength || null}
                            autoComplete={typeof autoComplete === 'undefined' ? 'on' : autoComplete}
                            autoCapitalize={typeof autoCapitalize === 'undefined' ? 'off' : autoCapitalize}
                            spellCheck={typeof spellCheck === 'undefined' ? false : spellCheck}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(e: any) => {
                                handleChange(e, e.target.value);

                                // AI Predict
                                if (aiPredict) {
                                    handleChangeSuggestionsFetchSafe(e, e.target.value);
                                }

                            }}
                            onKeyDown={handleKeyPressed}
                            onCompositionStart={handleComposition}
                            onCompositionUpdate={handleComposition}
                            onCompositionEnd={handleComposition}
                            disabled={disabled || null}
                            required={required || null}
                            readOnly={readOnly || null}
                            style={style}
                            {...attributes}
                        />
                        
                        {appendControl || ''}
    
                        {/* AI Predict */}
                        {aiPredict && remainingText && (
                            <div
                                ref={aiInputRef}
                                className="position-absolute z-1"
                                style={{
                                    left: `${originInputComputedStyle.current.fontSize + textWidth}px`,
                                    top: originInputComputedStyle.current.textTop + 'px',
                                    color: `rgba(${aiPredictRemainingTextRGB[0]}, ${aiPredictRemainingTextRGB[1]}, ${aiPredictRemainingTextRGB[2]}, ${calculateOpacity()})`,
                                    pointerEvents: 'none',
                                    fontSize: originInputComputedStyle.current.fontSize + 'px',
                                    fontFamily: originInputComputedStyle.current.fontFamily,
                                    letterSpacing: originInputComputedStyle.current.letterSpacing
                                }}
                            >
                                {remainingText}
                            </div>
                        )}

                        {/* Required marking */}
                        {required ? <>{requiredLabel || requiredLabel === '' ? requiredLabel : <span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>}</> : ''}

                    </div>

                    
                    {propExist(units) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{units}</span></> : null}
                    {propExist(iconRight) ? <><span className={clsWrite(controlGroupTextClassName, 'input-group-text')}>{iconRight}</span></> : null}


                </div>
                


            </div>


        </>
    )
});

export default Input;
