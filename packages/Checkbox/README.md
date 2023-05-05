# Checkbox


## API

### Checkbox
```js
import Checkbox from 'react-pure-bootstrap/Checkbox';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `checked` | boolean | false | Is it selected by default. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Checkbox from 'react-pure-bootstrap/Checkbox';

export default () => {

    function handleChange(e, val) {
        console.log(e.target, val);
    }

    return (
        <>

            <Checkbox
                name="string"
                label='Label'
                value="v1"
                onChange={handleChange}
            />
            
            <Checkbox
                name="string"
                label='Label'
                value="v2"
                checked
            />
            

            <Checkbox
                name="string"
                label='Label'
                disabled
            />

        </>
    );
}
```