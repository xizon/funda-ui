# File



## General

Use the default [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) method

```js
import React from "react";
import File from 'funda-ui/File';


export default () => {

    function handleChange(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
        console.log(input, submitEl, value);
    }

    function handleComplete(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
       console.log(input, value);
    }

    function handleProgress(files: any[], input: HTMLInputElement, submitEl: HTMLElement) {
        console.log(files);
    }

    return (
        <>
            <File 
                fetchUrl="http://api"
                fetchMethod="POST"
                fetchParams={{
                    Authorization: `Bearer xxxx-xxxx-xxxx-xxxx`,
                }}
                label="Select file" 
                labelClassName="btn btn-outline-secondary"       
                labelHoverClassName="btn btn-primary"
                submitLabel="Upload" 
                submitClassName="btn btn-primary mt-2"
                onChange={handleChange}
                onComplete={handleComplete}
                onProgress={handleProgress}
            />

        </>
    );
}
```

## No spacing

```js
import React from "react";
import File from 'funda-ui/File';

export default () => {


    return (
        <>

            <File
                ...
                wrapperClassName="position-relative"
                ...
            />

             <File
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```



## Upload controls and buttons are on the same line

Use the `inline` attribute.


```js
import React from "react";
import File from 'funda-ui/File';

export default () => {
    return (
        <>
            <File 
                ...
                inline
                ...
            />

        </>
    );
}
```



## Proactively specify the type of upload

Use the `accept` attribute.


```js
import React from "react";
import File from 'funda-ui/File';

export default () => {
    return (
        <>
            <File 
                ...
                accept="image/*"
                ...
            />

        </>
    );
}
```





## Use a custom API interface:



```js
import React from "react";
import File from 'funda-ui/File';


class UploadService {
    
    // `upto()` must be a Promise Object
    async upto(param1 = '', limit = 0) {

        alert(`searchStr: ${param1} limit: ${limit}`);

        // processing stream type via php/java/go/...
        // ...
        
        return {
            code: 0,
            message: 'OK',
            data: 'upload successfully'
        };
    }

}


export default () => {

    function handleChange(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
        console.log(input, submitEl, value);
    }

    function handleComplete(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
       console.log(input, value);
    }

    function handleProgress(files: any[], input: HTMLInputElement, submitEl: HTMLElement) {
        console.log(files);
    }


    return (
        <>
            <File 
                fetchFuncAsync={new UploadService}
                fetchFuncMethod="upto"
                fetchFuncMethodParams={['',0]}
                label="Select file" 
                labelClassName="btn btn-outline-secondary"       
                labelHoverClassName="btn btn-primary"
                submitLabel="Upload" 
                submitClassName="btn btn-primary mt-2"
                onChange={handleChange}
                onComplete={handleComplete}
                onProgress={handleProgress}
            />

        </>
    );
}
```





## Access streams of data with this component


```js
import React, { useState } from "react";
import File from 'funda-ui/File';


export default () => {

    const [filesData, setFilesData] = useState<any[]>([]);

    const getExt = (filename: string) => {
        const ext = /^.+\.([^.]+)$/.exec(filename);
        return ext == null ? "" : ext[1];
    };



    /**
     * base64 to ArrayBuffer
     * @param {String} data 
     * @returns {ArrayBuffer}
     */
    /*
    @returns:

    ArrayBuffer(522240)

        byteLength: 522240
        detached: false
        maxByteLength: 522240
        resizable: false
        [[Prototype]]: ArrayBuffer
        [[Int8Array]]: Int8Array(522240)
        [[Uint8Array]]: Uint8Array(522240)
        [[Int16Array]]: Int16Array(261120)
        [[Int32Array]]: Int32Array(130560)
        [[ArrayBufferByteLength]]: 522240
        [[ArrayBufferData]]: 673
    */
    function base64ToArrayBuffer(data) {

        let res = data;
        if (data.indexOf('base64,') >= 0) {
            res = data.split('base64,')[1];
        }

        //
        const binaryString = atob(res);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    /**
     * ArrayBuffer to Uint8Array
     * @param {ArrayBuffer} data 
     * @returns {Uint8Array}
     */
    /*
    @returns:

    Uint8Array(522240) [208, 207, 17, 224, 161, 177, 26, 225, 0, 0, ......]
    */
    function arrayBufferToUint8Array(data) {
        const bytes = new Uint8Array(data);
        return bytes;
    }




    function handleChange(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
        setFilesData([]);
        console.log(input, submitEl, value);
    }

    function handleComplete(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
       console.log(input, value);
    }

    function handleProgress(files: any[], input: HTMLInputElement, submitEl: HTMLElement) {
        if (files.length === 0) {
            alert('Please select a file')
            return;
        } else {

            // setFilesData
            [].slice.call(files).forEach((file: any) => {
             
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

                    console.log(b64string);
                    console.log(arrayBufferData);
                    console.log(uint8ArrayData);

                    // save to database
                    // ...


            
                });
                reader.readAsDataURL(file);

                
                setFilesData((prevState: any) => [...prevState, {
                    size, 
                    mimeType,
                    name,
                    ext
                }]);

            });

            
        }
    }


    return (
        <>
            <p>{JSON.stringify(filesData)}</p>
            <File 
                label="Select file" 
                labelClassName="btn btn-outline-secondary"       
                labelHoverClassName="btn btn-primary"
                submitLabel="Upload" 
                submitClassName="btn btn-primary mt-2"
                onChange={handleChange}
                onComplete={handleComplete}
                onProgress={handleProgress}
                multiple
            />

        </>
    );
}
```


## Customize the business upload component


`Uploader.tsx`:
```js
import React, { forwardRef, useRef } from 'react';
import File from 'funda-ui/File';

type UploaderProps = {
    label?: React.ReactNode | string;
    name?: string;
    id?: string;
    accept?: string;
    wrapperClassName?: string;
    waitingClassName?: string;
    support?: string;
    fetchUrl?: string;
    fetchMethod?: string;
    fetchParams?: any;
    labelClassName?: string;
    labelHoverClassName?: string;
    inline?: boolean;
    autoSubmit?: boolean;
    multiple?: boolean;
    submitLabel?: React.ReactNode | string;
    submitClassName?: string;
    onSuccess?: (data: any, input: HTMLInputElement, submitEl: HTMLElement) => void;
    onChange?: () => void;
    onEmpty?: () => void;
    onIncorrectFormat?: () => void;
};
const Uploader = forwardRef((props: UploaderProps, externalRef: any) => {
    const {
        label,
        name,
        id,
        wrapperClassName,
        waitingClassName,
        accept,
        support,
        fetchUrl,
        fetchMethod,
        fetchParams,
        labelClassName,
        labelHoverClassName,
        inline,
        autoSubmit,
        multiple,
        submitLabel,
        submitClassName,
        onSuccess,
        onChange,
        onEmpty,
        onIncorrectFormat,
        ...attributes
    } = props;

    const WAITING_CLASS = waitingClassName || '';
    const hasFormatErr = useRef<boolean>(false);
    const SUPPORT_EXT = support || 'jpg|jpeg|png|gif|webp';

    const conRef = useRef<any>(null);

    const handleChange = (input: HTMLInputElement, submitEl: HTMLElement, value: any) => {
        onChange?.();
        submitEl.classList.remove(WAITING_CLASS);
        hasFormatErr.current = false;
    };

    const handleComplete = (input: HTMLInputElement, submitEl: HTMLElement, value: any) => {
        if (hasFormatErr.current) {
            submitEl.classList.remove(WAITING_CLASS);
            return;
        }

        if (typeof value !== 'undefined') {
            submitEl.classList.remove(WAITING_CLASS);
            onSuccess?.(value, input, submitEl);
        }
    };

    const handleProgress = (files: any[], input: HTMLInputElement, submitEl: HTMLElement) => {
        if (files.length === 0) {
            onEmpty?.();
            return false;
        }

        hasFormatErr.current = false;
        submitEl.classList.add(WAITING_CLASS);
        
        // check format
        [].slice.call(files).forEach((file: any) => {
      
            if (typeof support === 'undefined' || support !== '*') {
                const re = new RegExp(`\.(${SUPPORT_EXT})$`, "i");
                if (! re.test(file.name)) {
                    onIncorrectFormat?.();
                    hasFormatErr.current = true;
                    submitEl.classList.remove(WAITING_CLASS);
                }
            }
        });


        // You can intercept requests or responses before they are handled by then or catch. 
        // This function could set a return value (Boolean). If "false", the request will be intercepted.
        return !hasFormatErr.current;
        
    };



    return (
        <>

            <div className={wrapperClassName || ''}>

                <File
                    {...attributes}
                    contentRef={conRef}
                    ref={externalRef}
                    label={label}
                    name={name}
                    id={id}
                    accept={accept}
                    fetchUrl={fetchUrl}
                    fetchMethod={fetchMethod}
                    fetchParams={fetchParams}
                    labelClassName={labelClassName}
                    labelHoverClassName={labelHoverClassName}
                    inline={inline || false}
                    multiple={multiple || false}
                    submitLabel={submitLabel}
                    submitClassName={submitClassName}
                    onChange={handleChange}
                    onComplete={handleComplete}
                    onProgress={handleProgress}
                    autoSubmit={autoSubmit}
                />

            </div>
            

        </>
    )
});

Uploader.displayName = 'Uploader';
export default Uploader;
```


`index.tsx`:
```js
import React, { useState } from "react";
import Uploader from './Uploader';


export default () => {

    const [upInfoProgImgs, setUpInfoProgImgs] = useState<any>(null);

    return (
        <>
            <Uploader
                waitingClassName="app-button-state--waiting"
                // fetchUrl={"https://api"}
                // fetchMethod="POST"
                // fetchParams={{ 'Authorization': 'Bearer xxxx-xxxx-xxxx-xxxx' }}
                inline
                support="jpg|jpeg|png|gif|webp"  // "*" means all
                labelClassName="btn btn-outline-secondary d-flex align-items-center"
                labelHoverClassName="btn btn-primary d-flex align-items-center"
                submitLabel={"Upload"}
                submitClassName="btn btn-primary ms-2"
                label={<><svg width="15px" height="15px" viewBox="0 -2 32 32">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-258.000000, -467.000000)" fill="#000000">
                            <path d="M286,471 L283,471 L282,469 C281.411,467.837 281.104,467 280,467 L268,467 C266.896,467 266.53,467.954 266,469 L265,471 L262,471 C259.791,471 258,472.791 258,475 L258,491 C258,493.209 259.791,495 262,495 L286,495 C288.209,495 290,493.209 290,491 L290,475 C290,472.791 288.209,471 286,471 Z M274,491 C269.582,491 266,487.418 266,483 C266,478.582 269.582,475 274,475 C278.418,475 282,478.582 282,483 C282,487.418 278.418,491 274,491 Z M274,477 C270.687,477 268,479.687 268,483 C268,486.313 270.687,489 274,489 C277.313,489 280,486.313 280,483 C280,479.687 277.313,477 274,477 L274,477 Z">

                            </path>
                        </g>
                    </g>
                </svg>&nbsp;&nbsp;Select</>}
                onSuccess={(data: any) => {
                    alert('Upload Successfully');

                    const res = {
                        imgData: data.b64string,
                        imgName: data.fileData.name
                    };

                    //
                    setUpInfoProgImgs(res);


                }}
                onChange={() => {
                    setUpInfoProgImgs(null);
                }}
                onEmpty={() => {
                    alert('No files are selected');
                }}
                onIncorrectFormat={() => {
                    alert('Incorrect file')
                }}
            />
            {upInfoProgImgs !== null ? <div><img src={upInfoProgImgs.imgData} height={70} /></div> : null}
        </>
    );
}
```





## Use the exposed method to upload automatically or manually

Lets you callback the handle exposed as attribute `contentRef`. Set the property `autoSubmit` to true and it will be uploaded automatically.


```js
import React, { useRef } from 'react';
import File from 'funda-ui/File';


export default () => {

    const conRef = useRef<any>(null);

    function handleChange(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
        console.log(input, submitEl, value);
    }

    function handleComplete(input: HTMLInputElement, submitEl: HTMLElement, value: any) {
       console.log(input, value);
    }

    function handleProgress(files: any[], input: HTMLInputElement, submitEl: HTMLElement) {
        console.log(files);
    }


    return (


        <>

            <button
                type="button" 
                className="btn bg-primary-subtle text-black mb-2"
                onClick={(e: React.MouseEvent) => {
                    if (conRef.current) conRef.current.upload();
                }}
            >Upload Manually</button>

            <File 
                contentRef={conRef}
                label="Select file" 
                labelClassName="btn btn-outline-secondary"       
                labelHoverClassName="btn btn-primary"
                submitLabel="Upload" 
                submitClassName="btn btn-primary mt-2"
                onChange={handleChange}
                onComplete={handleComplete}
                onProgress={handleProgress}
                // autoSubmit  // Enable automatic upload
            />

        </>
    )
}
```



## API

### File
```js
import File from 'funda-ui/File';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.upload()`</li></ol>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `labelClassName` | string | `btn btn-outline-secondary` | The class name of the label. | - |
| `labelHoverClassName` | string | `btn btn-primary` | The class name of the select button on hover. | - |
| `submitLabel` | string \| ReactNode | - | Specifies a label for submit button | - |
| `submitClassName` | string | `btn btn-primary mt-2` | The class name of the submit button. | - |
| `inline` | boolean | false | If true the group are on the same horizontal row. | - |
| `autoSubmit` | boolean | false | Enable automatic upload, which will hide the upload button. | - |
| `fetchUrl` | string | - | If the URL exists, it is passed using the default fetch method ([Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)). <blockquote>If it does not exist, the file content is read by [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)</blockquote> | - |
| `fetchMethod` | string | `POST` | The request's method (GET, POST, etc.) <blockquote>Valid when the `fetchUrl` attribute is not empty</blockquote>| - |
| `fetchParams` | JSON Object | - | Set of query parameters in the request <blockquote>Valid when the `fetchUrl` attribute is not empty</blockquote> | - |
| `multiple` | boolean | false | A file upload field that accepts multiple values | - |
| `accept` | string | - | The accept attribute takes as its value a comma-separated list of one or more file types, or unique file type specifiers, describing which file types to allow. such as `video/*`, `image/*`, `image/png, image/jpeg`, `video/*`, `image/*,.pdf`, `` | - |
| `value` | string | - | Set a default value for this control | - |
| `requiredLabel` | string \| ReactNode | `<span className="text-danger">*</span>` | It is used to specify a label for an element required. | - |
| `label` | string \| ReactNode | `<svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z" fill="#000000" fillRule="evenodd"/></svg>` | It is used to specify a label for an element of a form. | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onComplete`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> | - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the file input (**HTML Element**)</li><li>The second parameter is submit button (**HTML Element**)</li><li> The third is current value (**[An object of FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)**)</li></ol> | - |
| `onProgress` | function  | - | Call a function when upload is in progress. It returns three callback values. <br /> <ol><li>The first is (**[An object of FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)**)</li><li>The second is the file input (**HTML Element**)</li><li>The last parameter is submit button (**HTML Element**)</li></ol> <blockquote>You can intercept requests or responses before they are handled by then or catch. This function could set a return value (**Boolean**). If "false", the request will be intercepted.</blockquote> | - |
| `onComplete` | function  | - | Call a function when the modal is submitted. It returns four callback values. <br /> <ol><li>The one is the file input (**HTML Element**)</li><li>The second parameter is submit button (**HTML Element**)</li><li>The third parameter is the callback from backend (**JSON Object Literals**)</li><li>The last is incoming data from attribute `data`. (**Any**)</li></ol> | - |



It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.