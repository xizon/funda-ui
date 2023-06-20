import React, { useId, useState, useEffect, useRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type DynamicFieldsProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    tempHtmlString?: any;
    maxFields?: any;
    confirmText?: string;
    iconAdd?: React.ReactNode | string;
    iconRemove?: React.ReactNode | string;
    startFromZero?: boolean;
    /** -- */
    id?: string;
    onAdd?: () => void;
    onRemove?: () => void;
};

const DynamicFields = (props: DynamicFieldsProps) => {
    const {
        wrapperClassName,
        value,
        label,
        tempHtmlString,
        maxFields,
        iconAdd,
        iconRemove,
        startFromZero,
        id,
        confirmText,
        onAdd,
        onRemove
    } = props;

    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const fieldsRef = useRef<any>(null);
    const addBtnRef = useRef<any>(null);
    const [data, setData] = useState<any[]>([]);
    const controlRefreshValDelay = 1000;

    function replacePlaceholderStr(node: any) {
        const _wapper = node.closest('.dynamic-fields__tmpl__wrapper');
        if ( _wapper === null ) return;

        const perKey = _wapper.dataset.key;
        if (typeof node.id !== 'undefined' ) node.id = node.id.replace('%i%', perKey);
        if (typeof node.name !== 'undefined' ) node.name = node.name.replace('%i%', perKey);
        if (typeof node.dataset.id !== 'undefined' ) node.dataset.id = node.dataset.id.replace('%i%', perKey);
        if (typeof node.dataset.name !== 'undefined' ) node.dataset.name = node.dataset.name.replace('%i%', perKey);
    }

    function groupByNum(arr: any[], n: number) {
        if ( n === 0 || n === Infinity ) return false;

        let result: any[] = [];
        for (let i = 0; i < arr.length; i += n) result.push(arr.slice(i, i + n) as never);
        return result;
    }


    function checkMaxStatus() {
        //button status
        if (rootRef.current.querySelector('.dynamic-fields__append').children.length+1 >= parseFloat(maxFields)) {
            addBtnRef.current.style.setProperty('display', 'none', 'important');
        }
    }
    

    function handleClickAdd(event: any){
        event.preventDefault();

        //button status
        checkMaxStatus();

        //
        setData((prevState: any[]) => {
            return [...prevState, [""]];
        });

        //
        onAdd?.();


        // update placeholder string
        setTimeout(() => {

            if ( fieldsRef.current !== null ) {
                const controls: HTMLFormElement[] = [].slice.call(document.querySelectorAll( `#${fieldsRef.current.id} > .dynamic-fields__append [name]` ));
                controls.forEach((node: any, i: number) => {
                    // replace placeholder string
                    replacePlaceholderStr(node);
                });

            }

        }, controlRefreshValDelay);


    }


    function handleClickRemove(param: any) { // param is the argument you passed to the function
        return (e: any) => { // e is the event object that returned
            e.preventDefault();

            if ( confirm(confirmText || '') ) {

                //button status
                if (rootRef.current.querySelector('.dynamic-fields__append').children.length <= parseFloat(maxFields)) {
                    addBtnRef.current.style.setProperty('display', 'inline', 'important');
                }
    

                //
                let newData = [...data];
                newData.splice(param, 1);
                //console.log(newData); //[[""],[""],[""],[""]]
                setData(newData);

                //
                onRemove?.();  
            }

        };

        
    }

    function updateDisplayedControls() {

        
		// update values for all displayed controls
        // You need to wait for the asynchronous component to render
        setTimeout(() => {
        
            if ( fieldsRef.current !== null ) {
                const _val: any[] = value ? JSON.parse( '[' + value + ']' ) : [];
                const controls: HTMLFormElement[] = [].slice.call(document.querySelectorAll( `#${fieldsRef.current.id} > .dynamic-fields__append [name]` ));
                const integratedControls: HTMLFormElement[] = [];

                let hasRadio: boolean = false;
                controls.forEach((node: any, i: number) => {


                    let controlType = '';
                    if (node.tagName == "INPUT" || node.tagName == "TEXTARTA") {
        
                        //not `radio`, `checkbox`
                        if (node.type != 'checkbox' && node.type != 'radio') {
                            controlType = 'input-textarea';
                        }
        
                        //`checkbox`
                        if (node.type == 'checkbox') {
                            controlType = 'checkbox';
                        }
        
                        //`radio`
                        if (node.type == 'radio') {
                            controlType = 'radio';
                        }
        
                    }
        
                    //`select`
                    if (node.tagName == "SELECT") {
                        controlType = 'select';
                    }

                    //
                    if ( controlType === 'radio' ) {
                        hasRadio = true;
                    }

                    integratedControls.push({
                        target: node,
                        type: controlType
                    } as never);

                    // replace placeholder string
                    replacePlaceholderStr(node);
                });

                

                if ( hasRadio ) {
                    console.error('<DynamicFields /> cannot use the "radio" type, because it will have multiple duplicate names! \nThe following components are recommended: <Input />, <Textarea />, <Checkbox />, <Switch />, <MultiFuncSelect />, <Select />, <CascadingSelectE2E />, <CascadingSelect />, <TagInput />, <RangeSlider />.');
                    return false;
                }
                
                const resControls: any = groupByNum(integratedControls, Math.floor(integratedControls.length / _val.length));

                _val.forEach((row: string[], i: number) => {
                    row.forEach((val: any, j: number) => {
                        
                        if ( typeof resControls[i] !== 'undefined' ) {
                            const _control: any = resControls[i][j];
                            

                            switch (_control.type) {
                                case "input-textarea":

                                    _control.target.value = val;

                                    // if it is checkbox
                                    if ( val === true ) {
                                        const _checkbox = _control.target.parentElement.querySelector('[data-checkbox]');
                                        _checkbox.checked = val == true ? true : false;
                                        _control.target.value = _checkbox.value;
                                    }

                                    break;
                                case "checkbox":
                                    _control.target.checked = val == true ? true : false;
                                    break;
                                case "select":
                                    _control.target.value = val;
                                    _control.target.dispatchEvent(new Event('change'));
                                    
                                    break;
                                default:
                                    _control.target.value = val;
            
                            }//end switch  
                        }

                        
                    })	

                });

                //button status
                checkMaxStatus(); 

            }

        }, controlRefreshValDelay);

    }

    function generateList() {

        return data.map((el: any, i: number) =>
            <div key={i} className="dynamic-fields__tmpl__wrapper position-relative" data-key={i}>

                {el.map((data: any, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            {tempHtmlString}
                        </React.Fragment>
                    )
                })
                }

                <a href="#" tabIndex={-1} className="dynamic-fields__removebtn align-middle" onClick={handleClickRemove(i)}>
                    {iconRemove ? <>{iconRemove}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                </a>

            </div>
        );

    }

    useEffect(() => {

        setData(value ? [...Array(JSON.parse('[' + value + ']').length - (!startFromZero ? 1 : 0))].map(() => [""]) : []);
        updateDisplayedControls();

    }, [value]);


    return (
        <>


            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label className="form-label">{label}</label></> : null}

                <div ref={fieldsRef} className="dynamic-fields-container" data-max-fields={maxFields || 10} id={idRes}>
                    <div className="dynamic-fields__append">
                        {!startFromZero ? tempHtmlString : null}
                        {generateList()}
                    </div>
                    <a ref={addBtnRef} href="#" tabIndex={-1} className="dynamic-fields__addbtn align-middle" onClick={handleClickAdd}>
                        {iconAdd ? <>{iconAdd}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></>}
                    </a>
                    
                </div>

            </div>



        </>
    )
};

export default DynamicFields;
