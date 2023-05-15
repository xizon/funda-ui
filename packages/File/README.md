# File


## API

### File
```js
import File from 'react-pure-bootstrap/File';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `labelClassName` | string | `btn btn-outline-secondary` | The class name of the label. |
| `labelHoverClassName` | string | `btn btn-primary` | The class name of the select button on hover. |
| `submitLabel` | string \| ReactNode | - | Specifies a label for submit button |
| `submitClassName` | string | `btn btn-primary mt-2` | The class name of the submit button. |
| `fetchUrl` | string | - | If the URL exists, it is passed using the default fetch method. |
| `fetchMethod` | string | `POST` | The request's method (GET, POST, etc.) |
| `multiple` | boolean | false | A file upload field that accepts multiple values |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | `<svg width="25px" height="25px" viewBox="0 0 1024 1024"><path d="M512 256l144.8 144.8-36.2 36.2-83-83v311.6h-51.2V354l-83 83-36.2-36.2L512 256zM307.2 716.8V768h409.6v-51.2H307.2z" fill="#000000" fill-rule="evenodd"/></svg>` | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (an array) |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values, one is the control, the second is an HTMLElement of submit button, and the last is current value ([An object of FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)) |
| `onSubmit` | function  | - | Call a function when the modal is submitted. It returns two callback values, one is the trigger object and the other is the callback from backend (JSON Object Literals) |


It accepts all props which this control support.

## Examples

### Use the default [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) method

```js
import React from "react";
import File from 'react-pure-bootstrap/File';


export default () => {

    function handleChange(e, submitEl, value) {
        console.log(e, submitEl, value);
    }

    function handleSubmit(e, value) {
        console.log(e, value);
    }

    return (
        <>
            <File 
                fetchUrl="http://api"
                fetchMethod="POST"
                label="Select file" 
                labelClassName="btn btn-outline-secondary"       
                labelHoverClassName="btn btn-primary"
                submitLabel="Upload" 
                submitClassName="btn btn-primary mt-2"
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

        </>
    );
}
```


### Use a custom API interface:



```js
import React from "react";
import File from 'react-pure-bootstrap/File';


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

    function handleSubmit(e, value) {
        console.log(e, value);
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
                onSubmit={handleSubmit}
            />

        </>
    );
}
```