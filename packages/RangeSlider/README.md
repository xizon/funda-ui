# Range Slider

## General

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



## No spacing

```js
import React from "react";
import RangeSlider from 'funda-ui/RangeSlider';

// component styles
import 'funda-ui/RangeSlider/index.css';

export default () => {


    return (
        <>

            <RangeSlider
                ...
                wrapperClassName="position-relative"
                ...
            />

             <RangeSlider
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Asynchronous & Complex State Problem Solving

Prevent collapsing problems caused by re-rendering of sub-component. You need to use `useMemo()` hook to solve.


```js
import React, { useEffect, useState, useMemo } from "react";
import RangeSlider from 'funda-ui/RangeSlider';

// component styles
import 'funda-ui/RangeSlider/index.css';

// DO NOT move `useMemo` to component
function RangeSliderMemo(props: any) {
    const {callback, data} = props;
    return useMemo(() => {
        return <>
       
            <RangeSlider
                minName="age_min"
                maxName="age_max"
                min={0}
                max={100}
                step={1}
                value={{ min: data ? data.age_min : 3, max: data ? data.age_max : 80 }}
                onChange={(e, res) => {
                    callback({
                        min: res.min,
                        max: res.max
                    });
                }}
            />

        </>
        
        
    }, [data, callback]);
}



export default () => {

    
    const [data, setData] = useState<any>({
        age_min: 15,
        age_max: 75
    });
    const [age, setAge] = useState<any>({
        min: data ? data.age_min : 3,
        max: data ? data.age_max : 80
    });

    useEffect(() => {
        
        // update age
        setAge({
            min: data.age_min,
            max: data.age_max
        });

    }, [data]);


    return (
        <>


            <div className="row">
                <div className="col-auto" style={{width: '150px'}}>
                    Age: {age.min} ~ {age.max}
                </div>
           
                <div className="col">
                    <RangeSliderMemo data={data} callback={setAge}/>
                </div>
            </div>
        </>
    )
}
```




## ❤️ API

### Range Slider
```js
import RangeSlider from 'funda-ui/RangeSlider';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `onlyOne` | boolean | false | Only one numeric control is allowed. | - |
| `value` | JSON Object | - | Set a default value for this control. Such as `{ min: 0, max: 100 }` | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `minName` | string | - | Name is not deprecated when used with form fields. Specify the name of minimizing rang control. | - |
| `maxName` | string | - | Name is not deprecated when used with form fields. Specify the name of maximizing rang control. | - |
| `step` | number \| string | 1 | Specified legal number intervals. | - |
| `min` | number \| string | - | The minimum value to accept | - |
| `max` | number \| string | - | The maximum value to accept | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li></ol> | - |

