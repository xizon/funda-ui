import React, { useId, useState, useEffect, useRef, forwardRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type FileProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    labelClassName?: string;
    labelHoverClassName?: string;
    fetchUrl?: string;
    fetchMethod?: string;
    multiple?: boolean;
    submitLabel?: React.ReactNode | string;
    submitClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    /** Incoming data, you can set the third parameter of `onComplete` */
    data?: string;
    /** -- */
    id?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    onChange?: (e: any, e2: any, value: any) => void;
    onComplete?: (e: any, e2: any, callback: any, incomingData: string | null | undefined) => void;
    onProgress?: (files: any, e2: any) => void;

};


const File = forwardRef((props: FileProps, ref: any) => {
    const {
        wrapperClassName,
        controlClassName,
        labelClassName,
        labelHoverClassName,
        fetchUrl,
        fetchMethod,
        multiple,
        submitLabel,
        submitClassName,
        disabled,
        required,
        value,
        label,
        name,
        id,
        data,
        tabIndex,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        onChange,
        onComplete,
        onProgress,
        ...attributes
    } = props;


    const uniqueID = useId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const fileInputRef = useRef<any>(null);
    const labelRef = useRef<any>(null);
    const submitRef = useRef<any>(null);
    const [forceUpdate, setForceUpdate] = useState<Boolean>(false);
    const [defaultValue, setDefaultValue] = useState<any>(null);
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);

    function handleFileInput(event: any) {
        if (fileInputRef.current.nextSibling.contains(document.activeElement)) {
            // Bind space to trigger clicking of the button when focused
            if (event.keyCode === 32) {
                fileInputRef.current.click();
            }
        }
    }

    async function fetchData(params: any, data: any) {

        if (typeof fetchFuncAsync === 'object') {
            const response: any = await fetchFuncAsync[`${fetchFuncMethod}`](...params.split(','), data);
            return response.data;
        } else {
            return null;
        }

    }

    async function fetchDataDefault(url: string, data: any = {}, methord: string = 'GET', ...rest: any) {

        let res = {};
        if (typeof window === 'undefined') return res;

        try {
            const response = await fetch(url, {
                method: methord,
                body: data,
                ...rest
            });

            res = await response.json();

        } catch (error) {
            res = {
                'error': error
            }
        }

        return res;

    }


    function handleLabelEnter(event: any) {
        event.currentTarget.getElementsByTagName('button')[0].className = labelHoverClassName ? labelHoverClassName : 'btn btn-primary';
    }

    function handleLabelLeave(event: any) {
        event.currentTarget.getElementsByTagName('button')[0].className = labelClassName ? labelClassName : 'btn btn-outline-secondary';
    }



    function handleSubmit(event: any) {
        event.preventDefault();

        
        const curFiles = fileInputRef.current.files;

        onProgress?.(curFiles, submitRef.current);

        if (fetchUrl) {

            const formData = new FormData();
            formData.append('action', 'upload_plug_action');

            for (let i = 0; i < curFiles.length; i++) {
                formData.append("clientFiles", curFiles[i]);
            }

            fetchDataDefault(fetchUrl, formData, fetchMethod ? fetchMethod : 'POST', {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(function (response: any) {
                const jsonData = response.data;
                onComplete?.(event, submitRef.current, jsonData, incomingData);

                // update default value
                setDefaultValue(undefined);
                fileInputRef.current.value = '';

            });
        } else {

            const streamToText = async (blob: any) => {
                const readableStream = await blob.getReader();
                const chunk = await readableStream.read();

                return new TextDecoder('utf-8').decode(chunk.value);
            };


            (async () => {

                const allFiles: any[] = [];
                for (let i = 0; i < curFiles.length; i++) {

                    const file = curFiles[i];
                    const fileSliceBlob = file.slice(0, file.length);
                    const fileSliceBlobStream = await fileSliceBlob.stream();
                    allFiles.push(await streamToText(fileSliceBlobStream));

                }

                //send 
                Promise.all(allFiles).then((values) => {
                    const _params: any[] = fetchFuncMethodParams || [];
                    fetchData((_params).join(','), values);

                });
            })();


        }

    }

    function handleChange(event: any) {
        const val = event.target.value;

        setForceUpdate(!forceUpdate);


        // update default value
        setDefaultValue(null);


        //----
        //remove focus style
        if (val === '') {
            rootRef.current.classList.remove('focus');
        }

        //
        onChange?.(event, submitRef.current, fileInputRef.current.files);
    }

    function fileNames() {

        const { current } = fileInputRef;

        if (current && current.files.length > 0) {
            let messages: string[] = [];
            for (let file of current.files) {
                messages = messages.concat(file.name);
            }
            return messages.join(',');
        }
        return null;
    }


    useEffect(() => {

        // update incoming data
        //------------------------------------------
        setIncomingData(data);       

        // update default value
        //--------------
        setDefaultValue(value);

    }, [data]);



    return (
        <>


            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative upload-control"} ref={rootRef}>
                <label
                    ref={labelRef}
                    onMouseEnter={handleLabelEnter}
                    onMouseLeave={handleLabelLeave}
                    style={{ cursor: 'pointer', pointerEvents: disabled ? 'none' : 'auto', opacity: disabled ? 0.5 : 1 }}
                    htmlFor={idRes}
                    className="form-label d-inline"
                ><button className={labelClassName ? labelClassName : 'btn btn-outline-secondary'} type="button" style={{ pointerEvents: 'none' }}>{label ? label : <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z" fill="#000000" fillRule="evenodd" /></svg>} {required ? <><span className="text-danger">*</span></> : ''}</button></label>


                <div className="input-group">
                    <input
                        ref={(node) => {
                            fileInputRef.current = node;
                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }}
                        tabIndex={tabIndex || 0}
                        className={controlClassName || controlClassName === '' ? controlClassName : "form-control"}
                        id={idRes}
                        type="file"
                        // The onChange should trigger updates whenever
                        // the value changes?
                        // Try to select a file, then try selecting another one.
                        multiple={multiple || false}
                        name={name}
                        onKeyUp={handleFileInput}
                        onChange={handleChange}
                        disabled={disabled || null}
                        required={required || null}
                        style={{ display: 'none' }}
                        {...attributes}
                    />
                    {typeof defaultValue !== 'undefined' ? fileNames() : null}
                    {defaultValue}

                </div>

                <button ref={submitRef} className={submitClassName ? submitClassName + ` ${disabled ? 'disabled' : ''}` : 'btn btn-primary mt-2' + ` ${disabled ? 'disabled' : ''}`} type="button" onClick={handleSubmit}>{submitLabel ? submitLabel : null}</button>


            </div>


        </>
    )
});

export default File;
