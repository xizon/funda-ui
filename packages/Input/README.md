# Input


## API

### Input
```js
import Input from 'react-pure-bootstrap/Input';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `step` | number \| string | 1 | Specified legal number intervals. |
| `min` | number \| string | - | The minimum value to accept |
| `max` | number \| string | - | The maximum value to accept |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `iconLeft` | ReactNode  | - | Set the left icon of this control |
| `iconRight` | ReactNode  | - | Set the right icon of this control |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. |
| `onBlur` | function  | - | Call a function when a user leaves an form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Input from 'react-pure-bootstrap/Input';

export default () => {

    function handleChange(e) {
        console.log(e.target.value);
    }

    return (
        <>
            <Input
                placeholder="String"
                name="String"
                label="String"
                onChange={handleChange}
                iconRight={<><i className="fa fa-arrow-up" aria-hidden="true"></i></>}
                required
                disabled
            />

            <Input
                name="String"
                label="Date"
                type="datetime-local"
                onFocus={(e) => {
                    e.target.setAttribute("max", new Date().toISOString().split("T")[0] + 'T00:00');
                }}
                step={1}
            /> 

        </>
    );
}
```