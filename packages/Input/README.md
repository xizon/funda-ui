# Input


## API

### Input
```js
import Input from 'funda-ui/Input';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
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
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `iconLeft` | ReactNode  | - | Set the left icon of this control |
| `iconRight` | ReactNode  | - | Set the right icon of this control |
| `autoComplete` | string  | - | Turn off autocomplete for input fields. |
| `onChangeCallback` | function  | - | Return value from `onChangeCallback` property to format the data of the control element, which will match the data structure of the component. <br >At the same time it returns the current control, you will use this function and use the `return` keyword to return a new value. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values, one is the control and the other is the composition event (a boolean) |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values, one is the control and the other is the composition event (a boolean) |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns two callback values, one is the control and the other is the composition event (a boolean) |


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
                label="Date"
                type="datetime-local"
                onFocus={(e) => {
                    e.target.setAttribute("max", new Date().toISOString().split("T")[0] + 'T00:00');
                }}
                step={1}
            /> 

            <Input
                name="name"
                label="Time"
                type="time"
                step={60}
            />


            <Input
                name="name"
                onChangeCallback={(e) => {
                    // only numeric
                    const newVal = e.target.value.replace(/[^0-9]/g, '');
                    return newVal;
                }}
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