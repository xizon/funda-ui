# File


## API

### File
```js
import File from 'funda-ui/File';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. |
| `labelClassName` | string | `btn btn-outline-secondary` | The class name of the label. |
| `labelHoverClassName` | string | `btn btn-primary` | The class name of the select button on hover. |
| `submitLabel` | string \| ReactNode | - | Specifies a label for submit button |
| `submitClassName` | string | `btn btn-primary mt-2` | The class name of the submit button. |
| `inline` | boolean | false | If true the group are on the same horizontal row. |
| `fetchUrl` | string | - | If the URL exists, it is passed using the default fetch method ([Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)). |
| `fetchMethod` | string | `POST` | The request's method (GET, POST, etc.) <blockquote>Valid when the `fetchUrl` attribute is not empty</blockquote>|
| `fetchParams` | JSON Object | - | Set of query parameters in the request <blockquote>Valid when the `fetchUrl` attribute is not empty</blockquote> |
| `multiple` | boolean | false | A file upload field that accepts multiple values |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | `<svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z" fill="#000000" fillRule="evenodd"/></svg>` | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onComplete`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the file input (**HTML Element**)</li><li>The second parameter is submit button (**HTML Element**)</li><li> The third is current value (**[An object of FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)**)</li></ol> |
| `onProgress` | function  | - | Call a function when upload is in progress. It returns three callback values. <br /> <ol><li>The first is (**[An object of FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)**)</li><li>The second is the file input (**HTML Element**)</li><li>The last parameter is submit button (**HTML Element**)</li></ol> |
| `onComplete` | function  | - | Call a function when the modal is submitted. It returns four callback values. <br /> <ol><li>The one is the file input (**HTML Element**)</li><li>The second parameter is submit button (**HTML Element**)</li><li>The third parameter is the callback from backend (**JSON Object Literals**)</li><li>The last is incoming data from attribute `data`. (**Any**)</li></ol> |




It accepts all props which this control support.

## Examples

### Use the default [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) method

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


### Upload controls and buttons are on the same line

Use the `inline` attribute.


```js
import React from "react";
import File from 'funda-ui/File';

export default () => {
    return (
        <>
            <File 
                fetchUrl="http://api"
                fetchMethod="POST"
                fetchParams={{
                    Authorization: `Bearer xxxx-xxxx-xxxx-xxxx`,
                }}
                label="Select file" 
                labelClassName="btn btn-sm btn-outline-secondary px-0 border-0 text-primary"
                labelHoverClassName="btn btn-sm btn-outline-secondary px-0 border-0 text-primary"
                submitLabel="Upload" 
                submitClassName="btn btn-sm btn-primary"
                inline
            />

        </>
    );
}
```



### Use a custom API interface:



```js
import React from "react";
import File from 'funda-ui/File';


class UploadService {
    
    // `upto()` must be a Promise Object
    async upto(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam (file data with stream): ", otherParam);

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





### Access streams of data with this component


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