# Input


## API

### Input
```js
import Input from 'funda-ui/Input';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set('test value', () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. | - |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. | - |
| `appendControl` | ReactNode  | - | An extension of the same level as \<input \>, usually used to placeholder of some elements | - |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. | - |
| `value` | string | - | Set a default value for this control | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `alt` | string | - | An HTML form with an image that represents the submit button. | - |
| `inputMode` | `search` \| `text` \| `email` \| `tel` \| `url` \| `none` \| `numeric` \| `decimal` \| undefined | `text` | The inputmode global attribute is an enumerated attribute that hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard. | - |
| `step` | number | 1 | Specified legal number intervals. | - |
| `min` | number | - | The minimum value to accept | - |
| `max` | number | - | The maximum value to accept | - |
| `pattern` | string | - | The pattern attribute specifies a regular expression that the \<input \> element's value is checked against on form submission. such as `(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}` | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `maxLength` | number | - | Defines the maximum number of characters | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `autoComplete` | string  | `on` | Turn off autocomplete for input fields. | - |
| `onChangeCallback` | function  | - | Return value from `onChangeCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br >At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when focus is lost. If return is not set, it will not return.</blockquote> | - |
| `onInputCallback` | function  | - | Return value from `onInputCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br >At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires in real time as the user enters. If return is not set, it will not return.</blockquote> | - |
| `onKeyPressedCallback` | function  | - | Return value from `onKeyPressedCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br >At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when the keyboard is pressed. If return is not set, it will not return.</blockquote> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li><li>The last is the control (**HTML Element**)</li></ol>  | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onPressEnter` | function  | - | The callback function that is triggered when Enter key is pressed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |


It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.

## Examples

```js
import React from "react";
import Input from 'funda-ui/Input';

export default () => {

    function handleChange(e, onComposition) {

        let temp = e.target.value;
        if (!onComposition) {
            console.log(temp);
        }
    }

    return (
        <>
            <Input
                placeholder="String"
                name="name"
                label="String"
                onChange={handleChange}
                iconRight={<><i className="fa fa-arrow-up" aria-hidden="true"></i></>}
                required
                disabled
            />

            <Input
                name="name"
                label="String"
                onInputCallback={(e) => {                                                             
                    // only numeric
                    if (isNaN(e.target.value)) return '0';
                    const newVal = e.target.value.replace(/[^0-9.]/g, '');
                    return newVal;
                }}
            />



            <Input
                name="name"
                onChangeCallback={(e) => {
                    // only numeric
                    if (isNaN(e.target.value)) return '0';
                    const newVal = e.target.value.replace(/[^0-9.]/g, '');
                    return newVal;
                }}
            />




        </>
    );
}
```

## No spacing

```js
import React from "react";
import Input from 'funda-ui/Input';

export default () => {


    return (
        <>

            <Input
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Input
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```




## Date or DateTime

```js
import React from "react";
import Input from 'funda-ui/Input';

export default () => {

    return (
        <>


            <Input
                name="name"
                label="Date"
                type="date"
                step={1}
            /> 

            <Input
                name="name"
                label="DateTime"
                type="datetime-local"
                onFocus={(e) => {
                    e.target.setAttribute("max", new Date().toISOString().split("T")[0] + 'T00:00');
                }}
                step={1}
            /> 

            <Input
                name="name"
                label="DateTime"
                type="datetime-local"
                step={60}
                onInputCallback={(e) => {
                    // yyyy-MM-dd HH:mm
                    const date = new Date(e.target.value);
                    const padZero = (num: number): string => {
                        return num < 10 ? '0' + num : num.toString();
                    };
                    const year = date.getFullYear();
                    const month = padZero(date.getMonth() + 1);
                    const day = padZero(date.getDate());
                    const hours = padZero(date.getHours());
                    const minutes = padZero(date.getMinutes());
                    const res = `${year}-${month}-${day} ${hours}:${minutes}`;
                    return res;
                }}
            /> 


            <Input
                name="name"
                label="Time"
                type="time"
                step={60}
            />



        </>
    );
}
```




## Asynchronous Usage


```js
import React, { useEffect, useState } from "react";
import Input from 'funda-ui/Input';

export default () => {

    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    useEffect(() => {
       setInputValue('default');
    }, []);


    return (
        <>
            <Input
                value={inputValue}
                name="name"
                onChange={handleChange}
            />

        </>
    );
}
```



## Implement independent time elements

```css
.input-group:not(.has-left-content) {
    .demo {
        left: 0.5rem;
    }
}

.demo {
    display: inline-block;
    position: relative;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    transform: translateY(-50%);
    margin-left: .5rem;

    > input {
        padding: 0 !important;
        margin: 0 !important;
        border: none;
        background: transparent;
        box-shadow: none;
        border: none;
        width: 1.25rem;

        &:focus {
            outline: none;
            border: none;
            box-shadow: none;
            background: none;
        }
    }

    .demo--year {
        width: 2.5rem;
    }
    
}



```


```js
import React from "react";
import Input from 'funda-ui/Input';

export default () => {

    return (
        <>

            <Input
                name="name"
                label="DateTime Custom"
                type="text"
                appendControl={<>
                    <div className="demo">

                        <input
                            tabIndex={-1}
                            className="demo--year"
                            value="2024"
                            onChange={(e: any) => {

                            }}
                        />
                        -
                        <input
                            tabIndex={-1}
                            className="demo--month"
                            value="03"
                            onChange={(e: any) => {

                            }}
                        />
                        -
                        <input
                            tabIndex={-1}
                            className="demo--day"
                            value="15"
                            onChange={(e: any) => {

                            }}
                        />
                        &nbsp;
                        <input
                            tabIndex={-1}
                            className="demo--hours"
                            value="18"
                            onChange={(e: any) => {

                            }}
                        />
                        :
                        <input
                            tabIndex={-1}
                            className="demo--minutes"
                            value="15"
                            onChange={(e: any) => {

                            }}
                        />
                        :
                        <input
                            tabIndex={-1}
                            className="demo--seconds"
                            value="00"
                            onChange={(e: any) => {

                            }}
                        />

                    </div>
                </>}
            /> 


        </>
    );
}
```




## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
import React, { useRef } from 'react';
import Input from 'funda-ui/Input';


export default () => {

    const conRef = useRef<any>(null);

    return (


        <>

            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    if (conRef.current) conRef.current.clear();
                }}
            >Set Empty Value</button>

            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    if (conRef.current) conRef.current.set('new value', () => { console.log('callback') });
                }}
            >Set Custom Value</button>


            <Input
                contentRef={conRef}
                name="name"
            />


        </>
    )
}
```


**Using \<Array\>**

```js
import React, { useRef } from 'react';
import Input from 'funda-ui/Input';


export default () => {

    const conRef = useRef<any[]>([]);

    return (


        <>

            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    if (conRef.current) {
                        conRef.current.forEach((obj: any) => {
                            obj.clear();
                        });
                    }
                }}
            >Set Empty Value</button>

            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    
                    if (conRef.current) {
                        conRef.current.forEach((obj: any, i: number) => {
                            obj.set('new value__' + i);
                        });
                    }
                }}
            >Set Custom Value</button>


            <Input
                contentRef={(node: any) => {
                    if (node) {
                        conRef.current[0] = node;
                    }
                }}
                name="name1"
            />

            <Input
                contentRef={(node: any) => {
                    if (node) {
                        conRef.current[1] = node;
                    }
                }}
                name="name2"
            />


            <Input
                contentRef={(node: any) => {
                    if (node) {
                        conRef.current[2] = node;
                    }
                }}
                name="name2"
            />


        </>
    )
}
```




## Complex use of popup and default value

Lets you callback the handle exposed as attribute `contentRef`.


```js
 import React, { useState, useRef } from 'react';

 // bootstrap components
 import ModalDialog from 'funda-ui/ModalDialog';
import Input from 'funda-ui/Input';

export default () => {

    const conRef = useRef<any>(null);
    const [show, setShow] = useState<boolean>(false);
    const [userContent, setUserContent] = useState<string>('');

    return (


        <>
      
            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    setShow(true);
                }}
            >Open Input Popup</button>


         
            {/*<!-- EDIT INFO -->*/}
            <ModalDialog
                show={show}
                heading="TEST"
                triggerClassName=""
                triggerContent=""
                closeBtnClassName="btn btn-secondary"
                closeBtnLabel="Cancel"
                submitBtnClassName="btn btn-primary"
                submitBtnLabel="Confirm"
                onOpen={() => {
                    // if (conRef.current) conRef.current.set('my default value here', () => { console.log('callback') });
                }}
                onClose={(e) => {

                    // Modifying React State can ensure that the window content is updated in real time
                    setTimeout(() => {
                        setShow(false);
                    }, 350);

                }}
                onSubmit={(e, closewin, data) => {
                    if (e === null) return;


                    closewin();

                    setTimeout(() => {
                        setUserContent('');
                        if (conRef.current) conRef.current.clear();
                        setShow(false);
                    }, 350);


                    // do something 
                    alert(userContent);


                }}
            >

                <Input
                    contentRef={conRef}
                    name="name"
                    onChange={(e) => {
                        setUserContent(e.target.value);
                    }}
                />
                

            </ModalDialog>
            {/*<!-- /EDIT INFOD -->*/}




        </>
    )
}
```




## Safe Asynchronous Example

When a `useState()` in a child component changes state, it will cause the entire parent component to re-render, resulting in invalidation such as **checkbox**.

At this time, we need to use `useMemo()` to wrap this subcomponent to avoid problems caused when the child component triggers a method of `useState()` of the parent component.



```js
import React, { useState, useMemo } from "react";
import Input from 'funda-ui/Input';

// DO NOT move `useMemo` to component
function MemoInput(props: any) {
    const {val, callback} = props;
    return useMemo(() => {
        return <Input 
                name="name"
                value={val}
                onChange={(e) => {
                    callback(e.target.value);
                }}
            />

    }, []);
}

export default () => {

    const [myInput, setMyInput] = useState('value-3');  // default value is label value

    return (
        <>
          
            <MemoInput 
                val={"value-3"} 
                name="name"
                callback={setMyInput} 
            />
            
            
        </>
    );
}

```