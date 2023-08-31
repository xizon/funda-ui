# Range Slider


## API

### Range Slider
```js
import RangeSlider from 'funda-ui/RangeSlider';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `onlyOne` | boolean | false | Only one numeric control is allowed. |
| `value` | JSON Object | - | Set a default value for this control. Such as `{ min: 0, max: 100 }` |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `minName` | string | - | Name is not deprecated when used with form fields. Specify the name of minimizing rang control. |
| `maxName` | string | - | Name is not deprecated when used with form fields. Specify the name of maximizing rang control. |
| `step` | number \| string | 1 | Specified legal number intervals. |
| `min` | number \| string | - | The minimum value to accept |
| `max` | number \| string | - | The maximum value to accept |
| `disabled` | boolean | false | Whether it is disabled |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values, one is the control and the other is the composition event (a boolean) |


## Examples

```js
import React from "react";
import RangeSlider from 'funda-ui/RangeSlider';

// component styles
import 'funda-ui/RangeSlider/index.css';

export default () => {

    return (
        <>

            <RangeSlider
                label="String"
                minName="name"
                min={0}
                max={100}
                step={5}
                value={{min: 15, max: 100}} 
                onChange={(e, res) => {
                    console.log(`value: ${res.min}`);
                }}
                onlyOne
            />


            <RangeSlider 
                label="String"
                minName="name-1"
                maxName="name-2"
                min={0} 
                max={100} 
                step={5} 
                onChange={(e, res) => {
                    console.log(`min: ${res.min} | max: ${res.max}`);
                }} 
            />


            <RangeSlider 
                label="String"
                minName="name-1"
                maxName="name-2"
                min={0} 
                max={100} 
                step={5} 
                value={{min: 25, max: 55}} 
                onChange={(e, res) => {
                    console.log(`min: ${res.min} | max: ${res.max}`);
                }} 
            />


        </>
    );
}
```