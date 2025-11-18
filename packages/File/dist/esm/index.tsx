import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';


import useComId from 'funda-utils/dist/cjs/useComId';
import {
    base64ToArrayBuffer,
    arrayBufferToUint8Array
} from 'funda-utils/dist/cjs/buffer';
import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';



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
    progressLabel?: React.ReactNode | string;
    progressClassName?: string;
    value?: string;
    requiredLabel?: React.ReactNode | string;
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
    formDataAppend?: (formData: FormData, files: FileList) => void;
    /** Enable chunked upload for large files */
    enableChunkedUpload?: boolean;
    /** Chunk size in bytes (default: 2MB) */
    chunkSize?: number;
    /** Custom function to append chunk data to FormData. Receives (formData: FormData, chunk: Blob, chunkIndex: number, totalChunks: number, file: File) */
    chunkDataAppend?: (formData: FormData, chunk: Blob, chunkIndex: number, totalChunks: number, file: File) => void;
    /** Callback for chunk upload progress. Receives (uploadedBytes: number, totalBytes: number, file: File, chunkIndex: number, totalChunks: number) */
    onChunkProgress?: (uploadedBytes: number, totalBytes: number, file: File, chunkIndex: number, totalChunks: number) => void;
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
        progressLabel,
        progressClassName,
        disabled,
        required,
        value,
        requiredLabel,
        label,
        name,
        id,
        data,
        tabIndex,
        fetchFuncAsync,
        fetchFuncMethod,
        fetchFuncMethodParams,
        formDataAppend,
        onChange,
        onComplete,
        onProgress,
        
        // Upload file in chunks
        enableChunkedUpload,
        chunkSize = 2 * 1024 * 1024, // Default 2MB
        chunkDataAppend,
        onChunkProgress,

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

    const [progressing, setProgressing] = useState<boolean>(false);


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
            const response = await fetch(typeof fetchParams !== 'undefined' ? url + '?' + new URLSearchParams(fetchParams as any) : url, {
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

    /**
     * Upload file in chunks
     */
    async function uploadFileInChunks(file: File, url: string, method: string = 'POST'): Promise<any> {
        const totalChunks = Math.ceil(file.size / chunkSize);
        const uploadId = `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
        let uploadedBytes = 0;

        // Upload each chunk sequentially
        for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
            const start = chunkIndex * chunkSize;
            const end = Math.min(start + chunkSize, file.size);
            const chunk = file.slice(start, end);

            const formData = new FormData();
            
            if (chunkDataAppend) {
                // Use custom chunk data append function
                chunkDataAppend(formData, chunk, chunkIndex, totalChunks, file);
            } else {
                // Default chunk upload format
                formData.append('chunk', chunk);
                formData.append('chunkIndex', chunkIndex.toString());
                formData.append('totalChunks', totalChunks.toString());
                formData.append('uploadId', uploadId);
                formData.append('fileName', file.name);
                formData.append('fileSize', file.size.toString());
                formData.append('fileType', file.type);
            }

            // Update progress
            uploadedBytes += (end - start);
            onChunkProgress?.(uploadedBytes, file.size, file, chunkIndex, totalChunks);

            // Upload chunk
            const response: any = await fetchDataDefault(
                url,
                formData,
                method,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            );

            // Check if chunk upload failed
            if (response.error) {
                throw new Error(`Chunk ${chunkIndex + 1}/${totalChunks} upload failed: ${response.error}`);
            }

            // If server returns a specific response indicating chunk upload success/failure, handle it
            if (response.code !== undefined && response.code !== 0 && response.code !== 200) {
                throw new Error(`Chunk ${chunkIndex + 1}/${totalChunks} upload failed: ${response.message || 'Unknown error'}`);
            }
        }

        // After all chunks are uploaded, return the final response
        // The server should merge chunks and return the final result
        return {
            code: 0,
            message: 'Upload completed',
            data: {
                uploadId,
                fileName: file.name,
                fileSize: file.size,
                totalChunks
            }
        };
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

        setProgressing(true);


        // Use the default "fetch()" method to handle file references
        if (fetchUrl) {

            // Check if chunked upload is enabled
            if (enableChunkedUpload) {
                // Upload files in chunks
                (async () => {
                    try {
                        const uploadPromises: Promise<any>[] = [];
                        
                        for (let i = 0; i < curFiles.length; i++) {
                            const file = curFiles[i];
                            uploadPromises.push(uploadFileInChunks(file, fetchUrl, fetchMethod ? fetchMethod : 'POST'));
                        }

                        const results = await Promise.all(uploadPromises);
                        
                        // Combine results from all files
                        const jsonData = {
                            code: 0,
                            message: 'All files uploaded successfully',
                            data: results
                        };
                        
                        onComplete?.(fileInputRef.current, submitRef.current, jsonData, incomingData);
                        setProgressing(false);
                        resetDefaultVal();
                    } catch (error: any) {
                        const errorResponse = {
                            code: -1,
                            message: error.message || 'Upload failed',
                            error: error
                        };
                        onComplete?.(fileInputRef.current, submitRef.current, errorResponse, incomingData);
                        setProgressing(false);
                    }
                })();
            } else {
                // Original non-chunked upload
                const formData = new FormData();
                
                if (formDataAppend) {
                    // Use custom formData.append function
                    formDataAppend(formData, curFiles);
                } else {
                    // Default behavior
                    formData.append('action', 'upload_plug_action');
                    for (let i = 0; i < curFiles.length; i++) {
                        formData.append("clientFiles", curFiles[i]);
                    }
                }

                fetchDataDefault(fetchUrl, formData, fetchMethod ? fetchMethod : 'POST', {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(function (response: any) {
                    const jsonData = response;
                    onComplete?.(fileInputRef.current, submitRef.current, jsonData, incomingData);
                    setProgressing(false);

                    // update default value
                    resetDefaultVal();

                });
            }
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
                            setProgressing(false);

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
                            setProgressing(false);

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


            <div className={clsWrite(wrapperClassName, 'mb-3 position-relative upload-control')} ref={rootRef}>
                

                <div className={combinedCls(
                    'upload-control-group d-flex',
                    typeof inline === 'undefined' || inline === false ? 'flex-column' : 'flex-row'
                )}>
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
                            <button className={clsWrite(labelClassName, 'btn btn-outline-secondary')} type="button" style={{ pointerEvents: 'none' }}>{label ? label : <svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z" fill="#000000" fillRule="evenodd" /></svg>} {required ? <>{requiredLabel || requiredLabel === '' ? requiredLabel : <span className="text-danger">*</span>}</> : ''}</button>
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
                                    className={combinedCls(
                                        clsWrite(controlClassName, 'form-control'),
                                        controlExClassName
                                    )}
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
                    <div className={combinedCls(
                        'upload-control-group__btn',
                        {
                            'd-none': autoSubmit
                        }
                    )}>
                        {/* BUTTON */}
                        {progressing ? <>
                            <button ref={submitRef} className={combinedCls(
                                clsWrite(progressClassName, clsWrite(submitClassName, 'btn btn-primary mt-2')),
                                {
                                    'disabled': disabled
                                }
                            )} type="button" onClick={handleSubmit}>{progressLabel ? progressLabel : submitLabel}</button>
                        </> : <>
                            <button ref={submitRef} className={combinedCls(
                                clsWrite(submitClassName, 'btn btn-primary mt-2'),
                                {
                                    'disabled': disabled
                                }
                            )} type="button" onClick={handleSubmit}>{submitLabel ? submitLabel : null}</button>
                        </>}

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
