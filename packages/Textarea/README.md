# Textarea


## API

### Textarea
```js
import Textarea from 'react-pure-bootstrap/Textarea';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3` | The class name of the control wrapper. |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `cols` | number  | - | The cols attribute specifies the visible width of a text area. |
| `rows` | number  | - | The rows attribute specifies the visible height of a text area, in lines. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. |
| `onBlur` | function  | - | Call a function when a user leaves an input field. |
| `onFocus` | function  | - | Call a function when an input field gets focus. |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Textarea from 'react-pure-bootstrap/Textarea';

export default () => {
    return (
        <>
            <Textarea
                placeholder="String"
                name="String"
                label="String"
                rows={4}
            />

        </>
    );
}
```