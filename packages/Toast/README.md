# Toast


## API

### Toast
```js
import Toast from 'react-pure-bootstrap/Toast';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | array | - | **(required)** Specify data of toasts as a JSON string format. Such as: <br />`[{"title":"Title 1","note":"","message":"description..."},{"title":"Title 2","note":"","message":"description..."}]`. <br />If its value is an empty array `[]`, the Toast will not be displayed. <br /> <blockquote>Note: If the data is asynchronous, the attribute `async` needs to be set to `true`</blockquote> |
| `async` | boolean  | false | Use asynchronous triggering. |
| `lock` | boolean  | false | You can not close pop-win when it is enabled. |
| `schemeBody` | string  | - | Self-defined class name for body, such as: `align-items-center text-white bg-primary border-0` |
| `schemeHeader` | string  | - | Self-defined class name for header, such as: `text-white bg-dark` |
| `closeBtnColor` | string  | - | Set the color of the close button. |
| `closeDisabled` | boolean  | false | Disable the close button. |
| `direction` | `bottom-left` \| `bottom-center` \| `bottom-right` \| `top-left` \| `top-center` \| `top-right` \| `vertical-center`  | bottom-center | The direction of the toast |
| `autoCloseTime` | boolean \| number  | false | Set an automatic closing time, multiple items will be accumulated in order. Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled. |
| `autoCloseReverse` | boolean  | false | Starts from the top position of the Array when we use the automatic close. |
| `onClose` | function  | - | Call a function when the modal is opened. It returns two callback values, one is the current element and the other is the current value. |


Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string \| ReactNode \| boolean | - | Specifies an alternate and title for the toast |
| `note` | string \| ReactNode \| boolean | - | A light-colored comment next to the title, which can be information such as time. |
| `message` | string \| ReactNode  | - | Specifies the content, or HTML elements to the toast |



## Examples

```js
import React from "react";
import Toast from 'react-pure-bootstrap/Toast';

// component styles
import 'react-pure-bootstrap/Toast/index.css';

export default () => {

    return (
        <>
          
        <Toast 
            direction="bottom-right" 
            autoCloseTime={3000} 
            data={[
                { title: "Toast one", message: "First..." },
                { title: "Toast two", message: "Source of radiant heat." },
                { title: "Toast three", message: "ok!" },
                { title: "Toast four", message: "Last item here..." }
            ]} 
        />
                
        <Toast 
            direction="bottom-center" 
            autoCloseTime={false} data={[
                { title: false, note: "11 mins ago", message: <><div style={{fontSize:"14px"}}>This is <span style={{color:"orange"}}>orange</span> text <p>...</p></div></> }
            ]} 
        />	


        <Toast 
            direction="vertical-center" 
            schemeHeader="text-white bg-dark" 
            closeBtnColor="#fff"  
            data={[
                { title: false, note: "11 mins ago", message: <><div>Text here</div></> }
            ]} 
        />	


       <Toast 
            direction="bottom-center" 
            schemeBody="align-items-center text-white bg-dark border-0" 
            closeBtnColor="#fff" 
            data={[
                { title: false, note: false, message: <><div>Text Here</div></> }
            ]} 
        />


          
        </>
    );
}
```


## Asynchronous Usage

Use asynchronous toast information to dynamically display notifications


```js
import React, { useState } from "react";
import Toast from 'react-pure-bootstrap/Toast';

// component styles
import 'react-pure-bootstrap/Toast/index.css';

export default () => {

    const [toastData, setToastData] = useState<any[]>([]);
    
    function handleClick(e) {
        e.preventDefault();
        kkk++;
        //
        setToastData([
            { title: false, note: false, message: <><div>No.{kkk}: {Date.now()}</div></> }
        ]);

    }

    return (
        <>

            <a href="#" onClick={handleClick}>Click here to display Toast information dynamically</a>
            <Toast 
                autoCloseTime={3000} 
                direction="bottom-center" 
                schemeBody="align-items-center text-white bg-dark border-0" 
                closeBtnColor="#fff" 
                data={toastData} 
                async
            />

        </>
    )
}
```