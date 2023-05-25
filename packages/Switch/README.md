# Switch


## API

### Switch
```js
import Switch from 'react-pure-bootstrap/Switch';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `checked` | boolean | false | Is it selected. |
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
import Switch from 'react-pure-bootstrap/Switch';

export default () => {

    function handleChange(e, val) {
        console.log(e.target, val);
    }

    return (
        <>

		<Switch 
            label="Default switch"
            label="Label"
            name="switch-name-1" 
            onChange={handleChange} 
        />

        <Switch
            label="Checked switch"
            name="switch-name-2"
            value="ok"
            checked
        />
        <Switch
            label="Disabled switch"
            name="switch-name-3"
            disabled
        />


        </>
    );
}
```




## Asynchronous Usage


```js
import React, { useState } from "react";
import Switch from 'react-pure-bootstrap/Switch';

export default () => {

    const [checked, setChecked] = useState<any>(null);
   
    function handleClick1(e: any) {
        e.preventDefault();
        setChecked(true);
    }

    function handleClick2(e: any) {
        e.preventDefault();
        setChecked(false);
    }  

    return (
        <>

            <a href="#" onClick={handleClick1}>checked</a>
            <a href="#" onClick={handleClick2}>unchecked</a>
            
            <Switch
                name="string"
                label='Label'
                name="switch-name-1" 
                checked={checked}
            />
            

        </>
    )
}
```