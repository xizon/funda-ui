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
    const [dataInit, setDataInit] = useState<boolean>(false);

    function handleClickAdd(event: any){
        event.preventDefault();

        //button status
        if (rootRef.current.querySelector('.dynamic-fields__append').children.length+1 >= parseFloat(maxFields)) {
            addBtnRef.current.style.setProperty('display', 'none', 'important');
        }

        //
        setData((prevState: any[]) => {
            return [...prevState, [""]];
        });

        //
        onAdd?.();



    }


    function handleClickRemove(param: any) { // param is the argument you passed to the function
        return (e) => { // e is the event object that returned
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
                const _val = value ? JSON.parse( '[' + value + ']' ) : [];
                let controls = [].slice.call(document.querySelectorAll( `#${fieldsRef.current.id} > .dynamic-fields__append [name]` ));

                
                let n = 0;
                _val.map((row: any, index: number) => {
                    row.map((item: any, i: number) => {

                        const _control: any = controls[n];
                        if ( _control ) {


                            let controlType = '';
                            if (_control.tagName == "INPUT" || _control.tagName == "TEXTARTA") {
                
                                //not `radio`, `checkbox`
                                if (_control.type != 'checkbox' && _control.type != 'radio') {
                                    controlType = 'input-textarea';
                                }
                
                                //`checkbox`
                                if (_control.type == 'checkbox') {
                                    controlType = 'checkbox';
                                }
                
                                //`radio`
                                if (_control.type == 'radio') {
                                    controlType = 'radio';
                                }
                
                            }
                
                            //`select`
                            if (_control.tagName == "SELECT") {
                                controlType = 'select';
                            }


                            switch (controlType) {
                                case "input-textarea":
                                    _control.value = item;
                                    break;
                                case "checkbox":
                                    _control.checked = item;
                                    break;
                                case "select":
                                    _control.value = item;
                                    _control.dispatchEvent(new Event('change'));
                                    
                                    break;
                                default:
                                    _control.value = item;
            
                            }//end switch
            

                            
                        }
                        n++;
                    })	

                });
            }

        }, 250);

    }

    function generateList() {

        return data.map((el: any, i: number) =>
            <div key={i} className="dynamic-fields__tmpl__wrapper position-relative">

                {el.map((data, index) => {
                    return (
                        <React.Fragment key={index}>
                            {tempHtmlString}
                        </React.Fragment>
                    )
                })
                }

                <a href="#" className="dynamic-fields__removebtn" onClick={handleClickRemove(i)}>
                    {iconRemove ? <>{iconRemove}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                </a>

            </div>
        );

    }

    useEffect(() => {

        if ( !dataInit ) {
            setData(value ? [...Array(JSON.parse('[' + value + ']').length - 1)].map(() => [""]) : []);
            updateDisplayedControls();
            if ( value !== '' ) {
                setDataInit(true);
            }
        }

	
    }, [data]);


    return (
        <>


            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label className="form-label">{label}</label></> : null}

                <div ref={fieldsRef} className="dynamic-fields-container" data-max-fields={maxFields || 10} id={idRes}>
                    <div className="dynamic-fields__append">
                        {tempHtmlString}
                        {generateList()}
                    </div>
                    <a ref={addBtnRef} href="#" className="dynamic-fields__addbtn" onClick={handleClickAdd}>
                        {iconAdd ? <>{iconAdd}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></>}
                    </a>
                    
                </div>

            </div>



        </>
    )
};

export default DynamicFields;
