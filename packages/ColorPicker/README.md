# Color Picker


## API

### Color Picker
```js
import ColorPicker from 'funda-ui/ColorPicker';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control custom-form-control-color flex-grow-0` | The class name of the control. |
| `clearBtnClassName` | string | `btn btn-link btn-sm` | The class name of the clear button. |
| `clearBtnLabel` | string | `clear` | The label of the clear button. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `shape` | string | `circle` \| `rounded` | Set shape of this control. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns only one callback value which is the control |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns only one callback value which is the control |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the control |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import ColorPicker from 'funda-ui/ColorPicker';

// component styles
import 'funda-ui/ColorPicker/index.css';

export default () => {

    function handleChange(e) {
         console.log(e.target.value);
    }

    return (
        <>
            <ColorPicker
                clearBtnLabel="clear"
                name="name"
                shape="circle"
                onChange={handleChange}
                required
                disabled
            />



        </>
    );
}
```




## Asynchronous Usage


```js
import React, { useEffect, useState } from "react";
import ColorPicker from 'funda-ui/ColorPicker';


// component styles
import 'funda-ui/ColorPicker/index.css';

export default () => {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
       setInputValue('#f00);
    }, []);


    return (
        <>
            <ColorPicker
                value={inputValue}
                name="name"
            />

        </>
    );
}
```