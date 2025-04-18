# Checkbox

## General

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
                label='Indeterminate'
                value="ok"
                indeterminate
            />


        </>
    );
}
```

## No spacing

```js
import React from "react";
import Checkbox from 'funda-ui/Checkbox';

export default () => {


    return (
        <>

            <Checkbox
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Checkbox
                ...
                wrapperClassName=""
                ...
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
            &nbsp;&nbsp;|&nbsp;&nbsp;
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
           
           <small className="border">{valSelected.join(',')}</small>


        </>
    )
}
```



## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
 import React, { useState, useRef } from 'react';

 // bootstrap components
 import ModalDialog from 'funda-ui/ModalDialog';
import Checkbox from 'funda-ui/Checkbox';


export default () => {


    const conRef = useRef<any>(null);
    const [userContent, setUserContent] = useState<boolean>(true);

    return (


        <>
      
            <a href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (conRef.current) conRef.current.clear(() => {
                    setUserContent(false)
                });
            }}>Reset</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="#" onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (conRef.current) conRef.current.set(true, () => {
                    setUserContent(true);
                });
                
            }}>Change value</a>
     

            <Checkbox
                contentRef={conRef}
                name="string"
                label='Label'
                value="ok"
                checked={userContent}
            />


        </>
    )
}
```




## API

### Checkbox
```js
import Checkbox from 'funda-ui/Checkbox';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.getLatestVal()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set(false, () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-check-input` | The class name of the control. | - |
| `itemSelectedClassName` | string | `item-selected` | The class name of the item selected. | - |
| `checked` | boolean | false | Is it selected. | - |
| `indeterminate` | boolean | false | Set a checkbox to indeterminate state. | - |
| `value` | string | - | Set a default value for this control. If unchecked, it will pass an empty value | ✅ |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the current value (**Boolean**) </li></ol> <blockquote>If the *first parameter* is `null`, it means that the exposure method of `contentRef` is used to modify the current value.</blockquote> | - |
| `onBlur` | function  | - | Call a function when a user leaves a form field. It returns only one callback value which is the Control Event (**Event**)| - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the Control Event (**Event**)| - |


It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.
