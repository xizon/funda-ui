# Number Input



## General

```js
import React from "react";
import NumberInput from 'funda-ui/NumberInput';

export default () => {

    return (
        <>


            <NumberInput
                name="name1"
                value="-22"
                step={2}
                decimalPlaces={0}
                min={-55}
                max={100}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | null,
                    el: HTMLInputElement | null,
                    val: number
                ) => {
                    console.log(val);
                }}
            />

            <NumberInput
                iconLeft="$"
                name="name2"
                step={0.1}
                decimalPlaces={2}
                min={0}
                max={10}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | null,
                    el: HTMLInputElement | null,
                    val: number
                ) => {
                    console.log(val);
                }}
                required
             
            />

            <NumberInput
                iconLeft="$"
                value="-1.245"
                name="name3"
                decimalPlaces={3}
                min={-10}
                max={10}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | null,
                    el: HTMLInputElement | null,
                    val: number
                ) => {
                    console.log(val);
                }}

            />


            <NumberInput
                placeholder="Price Here"
                name="name4"
                disabled
                
            />
          
        </>
    );
}
```

## No spacing

```js
import React from "react";
import NumberInput from 'funda-ui/NumberInput';

export default () => {


    return (
        <>

            <NumberInput
                ...
                wrapperClassName="position-relative"
                ...
            />

             <NumberInput
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
import React, { useRef } from 'react';
import NumberInput from 'funda-ui/NumberInput';


export default () => {

    const conRef = useRef<any>(null);

    return (


        <>

            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.clear();
                }}
            >Set Empty Value</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.set(15, () => { console.log('callback') });
                }}
            >Set Custom Value</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.increment(() => { console.log('callback') });
                }}
            >Increment</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.decrement(() => { console.log('callback') });
                }}
            >Decrement</a>


            <NumberInput
                contentRef={conRef}
                name="name1"
                step={2}
                decimalPlaces={0}
                min={1}
                max={100}
                onChange={(
                    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | null,
                    el: HTMLInputElement | null,
                    val: number
                ) => {
                    console.log(val);
                }}
            />


        </>
    )
}
```




## ❤️ API


### Number Input
```js
import NumberInput from 'funda-ui/NumberInput';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.getLatestVal()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set('test value', () => { console.log('callback') })`</li><li>`contentRef.current.increment(() => { console.log('callback') })`</li><li>`contentRef.current.decrement(() => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlGroupWrapperClassName` | string | `input-group position-relative z-1` | The class name of the control group wrapper. If you want not to wrap lines when crowded, you can change it to `input-group position-relative z-1 flex-nowrap` | - |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. | - |
| `arrowBtnClassName` | string[] | `['btn btn-sm border-0 border-bottom py-0 lh-1 flex-fill','btn btn-sm border-0 py-0 lh-1 flex-fill']` | The class name of the increase and decrease buttons. | - |
| `arrowBtnContainerClassName` | string | `btn-group-vertical position-absolute top-0 end-0 h-100 z-3 border-start` | The class name of the buttons's container. | - |
| `hideArrowButton` | boolean  | false | Hide the increase and decrease buttons | - |
| `increaseIcon` | ReactNode  | `<svg width={13} fill="#000000" viewBox="0 0 24 24"><path d="M18.5,15.5l-6-7l-6,7H18.5z" /><rect fill="none" width="24" height="24" /><rect fill="none" width="24" height="24" /></svg>` | Set the increase icon | - |
| `decreaseIcon` | ReactNode  | `<svg width={13} fill="#000000" viewBox="0 0 24 24"><path d="M6.5,8.5l6,7l6-7H6.5z" /><rect fill="none" width="24" height="24" /><rect fill="none" width="24" height="24" /></svg>` | Set the decrease icon | - |
| `defaultValue` | string | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. | - |
| `value` | string | - | Set a default value for this control | - |
| `requiredLabel` | string \| ReactNode | `<span className="position-absolute end-0 top-0 my-2 mx-2 me-3 pe-3"><span className="text-danger">*</span></span>` | It is used to specify a label for an element required. | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `alt` | string | - | An HTML form with an image that represents the submit button. | - |
| `step` | number | 1 | Specifies the granularity of the change in value when incrementing or decrementing. | - |
| `min` | number | Number.MIN_SAFE_INTEGER | The minimum value to accept | - |
| `max` | number | Number.MAX_SAFE_INTEGER | The maximum value to accept | - |
| `decimalPlaces` | number | 0 | Set the number of decimal places, which defaults to **0**, which is the integer mode. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the control (**HTML Element**)</li><li>The last is the current value (**Number**)</li></ol> <blockquote>If the *first parameter* is `null`, it means that the exposure method of `contentRef` is used to modify the current value.</blockquote> | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |


It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.