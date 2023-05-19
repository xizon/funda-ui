# Toaster


## API

### Toaster
```js
import Toaster from 'react-pure-bootstrap/Toaster';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `lock` | boolean  | false | You can not close pop-win when it is enabled. |
| `schemeBody` | string  | - | Self-defined class name for body, such as: `align-items-center text-white bg-primary border-0` |
| `schemeHeader` | string  | - | Self-defined class name for header, such as: `text-white bg-dark` |
| `closeBtnColor` | string  | - | Set the color of the close button. |
| `direction` | `bottom-left` \| `bottom-center` \| `bottom-right` \| `top-left` \| `top-center` \| `top-right` \| `vertical-center`  | bottom-center | The direction of the toaster |
| `autoCloseTime` | boolean \| number  | false | Set an automatic closing time, multiple items will be accumulated in order. Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled. |
| `autoCloseReverse` | boolean  | false | Starts from the top position of the Array when we use the automatic close. |
| `data` | array | - | Specify data of toasts as a JSON string format. Such as: <br />`[{"title":"Title 1","note":"","message":"description..."},{"title":"Title 2","note":"","message":"description..."}]` |


Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | string \| ReactNode | - | Specifies an alternate and title for the toast |
| `note` | string \| ReactNode | - | A light-colored comment next to the title, which can be information such as time. |
| `message` | string \| ReactNode | - | Specifies the content, or HTML elements to the toast |



## Examples

```js
import React from "react";
import Toaster from 'react-pure-bootstrap/Toaster';

// component styles
import 'react-pure-bootstrap/Toaster/index.css';

export default () => {

    return (
        <>
          
        <Toaster direction="bottom-right" autoCloseTime={3000} data={[
            { title: "Toast one", message: "First..." },
            { title: "Toast two", message: "Source of radiant heat." },
            { title: "Toast three", message: "ok!" },
            { title: "Toast four", message: "Last item here..." }
        ]} />
                
        <Toaster direction="bottom-center" autoCloseTime={false} data={[
            { title: false, note: "11 mins ago", message: <><div style={{fontSize:"14px"}}>This is <span style={{color:"orange"}}>orange</span> text <p></p></div></> }
        ]} />	


        <Toaster direction="vertical-center" schemeHeader="text-white bg-dark" closeBtnColor="#fff"  data={[
            { title: false, note: "11 mins ago", message: <><div>Text here</div></> }
        ]} />	

        <Toaster direction="top-center" lock schemeBody="align-items-center text-white bg-primary border-0" data={[
            { title: false, note: false, message: <><div>Text here</div></> }
        ]} />	

          
        </>
    );
}
```