# File


## API

### File
```js
import File from 'funda-ui/File';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `labelClassName` | string | `btn btn-outline-secondary` | The class name of the label. |
| `labelHoverClassName` | string | `btn btn-primary` | The class name of the select button on hover. |
| `submitLabel` | string \| ReactNode | - | Specifies a label for submit button |
| `submitClassName` | string | `btn btn-primary mt-2` | The class name of the submit button. |
| `fetchUrl` | string | - | If the URL exists, it is passed using the default fetch method ([Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)). |
| `fetchMethod` | string | `POST` | The request's method (GET, POST, etc.) <blockquote>Valid when the `fetchUrl` attribute is not empty</blockquote>|
| `fetchParams` | JSON Object | - | Set of query parameters in the request <blockquote>Valid when the `fetchUrl` attribute is not empty</blockquote> |
| `multiple` | boolean | false | A file upload field that accepts multiple values |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | `<svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z" fill="#000000" fillRule="evenodd"/></svg>` | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `data` | any  | - | Incoming data, you can set the third parameter of `onComplete`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the control</li><li>The second is an HTMLElement of submit button</li><li> The third is current value ([An object of FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList))</li></ol> |
| `onProgress` | function  | - | Call a function when upload is in progress. It returns two callback values, one is ([An object of FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)), the other is an HTMLElement of submit button. |
| `onComplete` | function  | - | Call a function when the modal is submitted. It returns four callback values. <br /> <ol><li>The one is the trigger object</li><li>The second parameter is an HTMLElement of submit button</li><li>The third parameter is the callback from backend (JSON Object Literals)</li><li>The last is incoming data from attribute `data`.</li></ol> |




It accepts all props which this control support.

## Examples

### Use the default [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) method

```js
import React from "react";
import File from 'funda-ui/File';


export default () => {

    function handleChange(e, submitEl, value) {
        console.log(e, submitEl, value);
    }

    function handleComplete(e, submitEl, value) {
        console.log(e, value);
    }

    function handleProgress(files, submitEl) {
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

    function handleChange(e, submitEl, value) {
        console.log(e, submitEl, value);
    }

    function handleComplete(e, submitEl, value) {
        console.log(e, value);
    }

    function handleProgress(files, submitEl) {
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