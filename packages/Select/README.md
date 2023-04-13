# Select


## API

### Select
```js
import Select from 'react-pure-bootstrap/Select';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3` | The class name of the control wrapper. |
| `options` | JSON Object Literals | - | <strong>(Required)</strong> Set the default value using JSON string format for menu of options, like this: `{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}`|
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Select from 'react-pure-bootstrap/Select';

export default () => {

    function handleChange(e, val) {
        console.log(e.target, val.name, val.value);
    }

    return (
        <>
            <Select
                value="value-2"
                name="String"
                label="String"
                options={`{
                    "Option 1":"value-1",
                    "Option 2":"value-2",
                    "Option 3":"value-3",
                    "Option 4":"value-4"
                }`}
                onChange={handleChange}
            />

        </>
    );
}
```