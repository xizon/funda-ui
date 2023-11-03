# Textarea


## API

### Textarea
```js
import Textarea from 'funda-ui/Textarea';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. |
| `value` | string | - | Set a default value for this control |
| `autoSize` | boolean | false | Creating a Textarea with dynamic height. |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `cols` | number  | - | The cols attribute specifies the visible width of a text area. |
| `rows` | number  | - | The rows attribute specifies the visible height of a text area, in lines. |
| `onChangeCallback` | function  | - | Return value from `onChangeCallback` property to format the data of the control element, which will match the data structure of the component. <br >At the same time it returns the current control, you will use this function and use the `return` keyword to return a new value. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns only one callback value which is the current control. |
| `onBlur` | function  | - | Call a function when a user leaves an form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Textarea from 'funda-ui/Textarea';

export default () => {
    return (
        <>
            <Textarea
                placeholder="String"
                name="String"
                label="String"
                rows={4}
                onChangeCallback={(e) => {
                    if (e.target.value.length > 20) {
                        return e.target.value.slice(0, 20);
                    }
                }}
            />


            <Textarea
                placeholder="String"
                name="String"
                rows={4}
                autoSize
            />


        </>
    );
}
```