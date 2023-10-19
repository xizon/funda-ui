# Checkbox


## API

### Checkbox
```js
import Checkbox from 'funda-ui/Checkbox';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `checked` | boolean | false | Is it selected. |
| `indeterminate` | boolean | false | Set a checkbox to indeterminate state. |
| `value` | string | - | **(required)** Set a default value for this control. If unchecked, it will pass an empty value |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed.  It returns two callback values, one is the control and the other is the current value (a boolean)  |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import Checkbox from 'funda-ui/Checkbox';

export default () => {

    function handleChange(e, val) {
        console.log(e.target, val); // <input .../>, true
    }

    return (
        <>


            <Checkbox
                name="string"
                label='Label'
                value="ok"
                onChange={handleChange}
            />
            
            <Checkbox
                name="string"
                label='Label'
                value="ok"
                checked
            />
            

            <Checkbox
                name="string"
                label='Label'
                value="ok"
                disabled
            />

            
            <Checkbox
                name="string"
                label='&nbsp;'
                value="ok"
                indeterminate
            />


        </>
    );
}
```




## Asynchronous Usage


```js
import React, { useState } from "react";
import Checkbox from 'funda-ui/Checkbox';

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
            
            <Checkbox
                name="string"
                label='Label'
                value="ok"
                checked={checked}
            />


        </>
    )
}
```



## Simulate multiple selection


```js
import React, { useState, useEffect } from "react";
import Checkbox from 'funda-ui/Checkbox';



const myCheckboxesData = [
    {
        "item_code": "01",
        "item_name": "Title 1"
    },
    {
        "item_code": "02",
        "item_name": "Title 2"
    },
    {
        "item_code": "03",
        "item_name": "Title 3"
    },
    {
        "item_code": "04",
        "item_name": "Title 4"
    }
];


export default () => {

    const defaultValue = 'Title 1,Title 3';
    const [valSelected, setValSelected] = useState<any[]>([]);
   
    useEffect(() => {
        setValSelected(defaultValue.split(',').filter(v => v !== ''));
    },[]);

    return (
        <>

            {myCheckboxesData ? myCheckboxesData.map((item: any) => {
                return <div key={item.item_code} className="mb-3 position-relative d-inline-block pe-3">
                    <Checkbox
                        wrapperClassName=""
                        label={item.item_name}
                        value={item.item_name}
                        onChange={(e: any, val: boolean) => {

                            setValSelected((prevState) => {
                                const newData = JSON.parse(JSON.stringify(prevState));
                                const index = newData.findIndex((item: string | number) => item == e.target.value);
                                if (index !== -1) newData.splice(index, 1);

                                return (val) ? Array.from(new Set([e.target.value, ...newData])) : newData;
                            });

                            
                        }}
                        checked={valSelected.includes(item.item_name)}
                    /></div>;
            }) : null}
            <input
                name="reg_tag"
                type="text"
                tabIndex={-1}
                value={valSelected.join(',')}
            />


        </>
    )
}
```