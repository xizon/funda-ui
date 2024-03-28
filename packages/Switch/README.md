# Switch


## API

### Switch
```js
import Switch from 'funda-ui/Switch';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `checked` | boolean | false | Is it selected. |
| `value` | string | - | **(required)** Set a default value for this control. If unchecked, it will pass an empty value |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the value  (**Boolean**)</li></ol> |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns only one callback value which is the Control Event (**Event**) |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the Control Event (**Event**) |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Switch from 'funda-ui/Switch';

export default () => {

    function handleChange(e, val) {
        console.log(e.target, val);
    }

    return (
        <>

		<Switch 
            label="Default switch"
            name="switch-name-1" 
            value="ok"
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
            value="ok"
            disabled
        />

        <Switch
            label='&nbsp;'
            name="switch-name-2"
            value="ok"
        />

        

        </>
    );
}
```




## Asynchronous Usage


```js
import React, { useState } from "react";
import Switch from 'funda-ui/Switch';

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
                label='Label'
                name="switch-name-1" 
                value="ok"
                checked={checked}
            />
            

        </>
    )
}
```