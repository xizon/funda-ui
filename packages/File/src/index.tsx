import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    base64ToArrayBuffer,
    arrayBufferToUint8Array
} from 'funda-utils/dist/cjs/buffer';


export type FileProps = {
    contentRef?: React.ForwardedRef<any>;
    wrapperClassName?: string;
    controlClassName?: string;
    controlExClassName?: string;
    labelClassName?: string;
    labelHoverClassName?: string;
    accept?: string;
    inline?: boolean;
    autoSubmit?: boolean;
    fetchUrl?: string;
    fetchMethod?: string;
    fetchParams?: any;
    multiple?: boolean;
    submitLabel?: React.ReactNode | string;
    submitClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    name?: string;
    disabled?: any;
    required?: any;
    /** Incoming data, you can set the third parameter of `onComplete` */
    data?: any;
    /** -- */
    id?: string;
    tabIndex?: number;
    [key: `data-${string}`]: string | undefined;
    fetchFuncAsync?: any;
    fetchFuncMethod?: string;
    fetchFuncMethodParams?: any[];
    onChange?: (e: any, e2: any, value: any) => void;
    onComplete?: (e: any, e2: any, callback: any, incomingData: string | null | undefined) => void;
    onProgress?: (files: any, e: any, e2: any) => void;

};


const File = forwardRef((props: FileProps, externalRef: any) => {
    const {
        contentRef,
        wrapperClassName,
        controlClassName,
        controlExClassName,
        labelClassName,
        labelHoverClassName,
        accept,
        inline,
        autoSubmit,
        fetchUrl,
        fetchMethod,
        fetchParams,
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


    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const fileInputRef = useRef<any>(null);
    const labelRef = useRef<any>(null);
    const submitRef = useRef<any>(null);
    const [forceUpdate, setForceUpdate] = useState<Boolean>(false);
    const [defaultValue, setDefaultValue] = useState<any>(null);
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);


    // exposes the following methods
    useImperativeHandle(
        contentRef,
        () => ({
            upload: (val: boolean) => {
                handleSubmit(null);
            }
        }),
        [contentRef],
    );

    const getExt = (filename: string) => {
        const ext = /^.+\.([^.]+)$/.exec(filename);
        return ext == null ? "" : ext[1];
    };

    function resetDefaultVal() {
        setDefaultValue(undefined);
        fileInputRef.current.value = '';
    }

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
            const response = await fetch(url + '?' + new URLSearchParams(fetchParams as any), {
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
        if (event) event.preventDefault();


        const curFiles = fileInputRef.current.files;

        const interceptRequests: any = onProgress?.(curFiles, fileInputRef.current, submitRef.current);

         // interceptor
        //----------------------------------------------------------------
        if (interceptRequests === false) return;


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
                onComplete?.(fileInputRef.current, submitRef.current, jsonData, incomingData);

                // update default value
                resetDefaultVal();

            });
        } else {


            if (typeof fetchFuncAsync === 'object') {
                // Using custom request structure of class
                //----------------------------------------------------------------
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
                        fetchData((_params).join(','), values).then((res: any) => {
                            onComplete?.(fileInputRef.current, submitRef.current, res, incomingData);

                            // update default value
                            resetDefaultVal();
                        });

                    });
                })();

            } else {
                // Using ReadableStream
                //----------------------------------------------------------------
                (async () => {


                    // setFilesData
                    [].slice.call(curFiles).forEach((file: any) => {

                        const size = file.size;
                        const mimeType = file.type;
                        const name = file.name;
                        const ext = getExt(name);


                        // get file content
                        const reader = new FileReader();
                        reader.addEventListener('load', (event) => {
                            const b64string = (event.currentTarget as any).result;
                            const arrayBufferData = base64ToArrayBuffer(b64string);
                            const uint8ArrayData = arrayBufferToUint8Array(arrayBufferData);

                            // console.log('b64string: ', b64string);
                            // console.log('arrayBufferData: ', arrayBufferData);
                            // console.log('uint8ArrayData: ', uint8ArrayData);

                            //send 
                            const jsonData = {
                                fileData: {
                                    size,
                                    mimeType,
                                    name,
                                    ext
                                },
                                b64string,
                                arrayBufferData,
                                uint8ArrayData
                            };
                            onComplete?.(fileInputRef.current, submitRef.current, jsonData, incomingData);

                            // update default value
                            resetDefaultVal();


                        });
                        reader.readAsDataURL(file);

                    });



                })();

            }

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
            rootRef.current?.classList.remove('focus');
        }

        //
        onChange?.(fileInputRef.current, submitRef.current, fileInputRef.current.files);

        // Enable automatic upload
        if (autoSubmit) {
            handleSubmit(null);
        }
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
                

                <div className={`upload-control-group d-flex ${typeof inline === 'undefined' || inline === false ? 'flex-column' : 'flex-row' }`}>
                    <div className="upload-control-group__control">
                        {/* INPUT */}
                        <label
                            ref={labelRef}
                            onMouseEnter={handleLabelEnter}
                            onMouseLeave={handleLabelLeave}
                            style={{ cursor: 'pointer', pointerEvents: disabled ? 'none' : 'auto', opacity: disabled ? 0.5 : 1 }}
                            htmlFor={idRes}
                            data-label="1"
                            data-input-id={idRes}
                            className="form-label d-inline"
                        >
                            <button className={labelClassName ? labelClassName : 'btn btn-outline-secondary'} type="button" style={{ pointerEvents: 'none' }}>{label ? label : <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z" fill="#000000" fillRule="evenodd" /></svg>} {required ? <><span className="text-danger">*</span></> : ''}</button>
                        </label>

                        <div className="input-group">
                            <div className="upload-control-group__control-inner" style={{ display: 'none' }}>
                                <input
                                    ref={(node) => {
                                        fileInputRef.current = node;
                                        if (typeof externalRef === 'function') {
                                            externalRef(node);
                                        } else if (externalRef) {
                                            externalRef.current = node;
                                        }
                                    }}
                                    
                                    tabIndex={tabIndex || 0}
                                    className={`${controlClassName || controlClassName === '' ? controlClassName : "form-control"} ${controlExClassName || ''}`}
                                    id={idRes}
                                    type="file"
                                    accept={accept}
                                    // The onChange should trigger updates whenever
                                    // the value changes?
                                    // Try to select a file, then try selecting another one.
                                    multiple={multiple || false}
                                    name={name}
                                    onKeyUp={handleFileInput}
                                    onChange={handleChange}
                                    disabled={disabled || null}
                                    required={required || null}
                                    {...attributes}
                                />
                            </div>
                        </div>
                        {/* /INPUT */}
                    </div>
                    <div className={`upload-control-group__btn ${autoSubmit ? 'd-none' : ''}`}>
                        {/* BUTTON */}
                        <button ref={submitRef} className={submitClassName ? submitClassName + ` ${disabled ? 'disabled' : ''}` : 'btn btn-primary mt-2' + ` ${disabled ? 'disabled' : ''}`} type="button" onClick={handleSubmit}>{submitLabel ? submitLabel : null}</button>
                        {/* BUTTON */}
                    </div>
                </div>

                {/* RESULT */}
                <div className="pload-control-result">
                    <small>
                        {typeof defaultValue !== 'undefined' ? fileNames() : null}
                        {defaultValue}
                    </small>
                </div>
                {/* /RESULT */}


                


            </div>


        </>
    )
});

export default File;
