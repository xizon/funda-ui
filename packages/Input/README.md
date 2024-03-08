# Input


## API

### Input
```js
import Input from 'funda-ui/Input';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `step` | number | 1 | Specified legal number intervals. |
| `min` | number | - | The minimum value to accept |
| `max` | number | - | The maximum value to accept |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `iconLeft` | ReactNode  | - | Set the left icon of this control |
| `iconRight` | ReactNode  | - | Set the right icon of this control |
| `autoComplete` | string  | - | Turn off autocomplete for input fields. |
| `onChangeCallback` | function  | - | Return value from `onChangeCallback` property to format the data of the control element, which will match the data structure of the component. <br >At the same time it returns the current control, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when focus is lost. If return is not set, it will not return.</blockquote> |
| `onInputCallback` | function  | - | Return value from `onInputCallback` property to format the data of the control element, which will match the data structure of the component. <br >At the same time it returns the current control, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires in real time as the user enters. If return is not set, it will not return.</blockquote> |
| `onKeyPressedCallback` | function  | - | Return value from `onKeyPressedCallback` property to format the data of the control element, which will match the data structure of the component. <br >At the same time it returns the current control, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when the keyboard is pressed. If return is not set, it will not return.</blockquote> |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The second is the composition event (**Boolean**)</li></ol>  |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The second is the composition event (**Boolean****)</li></ol> |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The second is the composition event (**Boolean**)</li></ol> |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Input from 'funda-ui/Input';

export default () => {

    function handleChange(e, onComposition) {

        let temp = e.target.value;
        if (!onComposition) {
            console.log(temp);
        }
    }

    return (
        <>
            <Input
                placeholder="String"
                name="name"
                label="String"
                onChange={handleChange}
                iconRight={<><i className="fa fa-arrow-up" aria-hidden="true"></i></>}
                required
                disabled
            />

            <Input
                name="name"
                label="String"
                onInputCallback={(e) => {                                                             
                    // only numeric
                    if (isNaN(e.target.value)) return '0';
                    const newVal = e.target.value.replace(/[^0-9.]/g, '');
                    return newVal;
                }}
            />



            <Input
                name="name"
                onChangeCallback={(e) => {
                    // only numeric
                    if (isNaN(e.target.value)) return '0';
                    const newVal = e.target.value.replace(/[^0-9.]/g, '');
                    return newVal;
                }}
            />




        </>
    );
}
```



## Date or DateTime

```js
import React from "react";
import Input from 'funda-ui/Input';

export default () => {

    return (
        <>


            <Input
                name="name"
                label="Date"
                type="date"
                step={1}
            /> 

            <Input
                name="name"
                label="DateTime"
                type="datetime-local"
                onFocus={(e) => {
                    e.target.setAttribute("max", new Date().toISOString().split("T")[0] + 'T00:00');
                }}
                step={1}
            /> 

            <Input
                name="name"
                label="DateTime"
                type="datetime-local"
                step={60}
                onInputCallback={(e) => {
                    // YYYY-MM-DD HH:MM
                    const date = new Date(e.target.value);
                    const padZero = (num: number): string => {
                        return num < 10 ? '0' + num : num.toString();
                    };
                    const year = date.getFullYear();
                    const month = padZero(date.getMonth() + 1);
                    const day = padZero(date.getDate());
                    const hours = padZero(date.getHours());
                    const minutes = padZero(date.getMinutes());
                    const res = `${year}-${month}-${day} ${hours}:${minutes}`;
                    return res;
                }}
            /> 


            <Input
                name="name"
                label="Time"
                type="time"
                step={60}
            />



        </>
    );
}
```




## Asynchronous Usage


```js
import React, { useEffect, useState } from "react";
import Input from 'funda-ui/Input';

export default () => {

    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    useEffect(() => {
       setInputValue('default);
    }, []);


    return (
        <>
            <Input
                value={inputValue}
                name="name"
                onChange={handleChange}
            />

        </>
    );
}
```