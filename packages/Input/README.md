# Input



## General

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
                name="name"
                label="Title"
                onChange={handleChange}
            />


            <Input
                placeholder="String"
                name="name"
                label="Disabled"
                onChange={handleChange}
                iconLeft={<><i className="fa fa-arrow-up" aria-hidden="true"></i></>}
                required
                disabled
            />


            <Input
                placeholder="String"
                name="name"
                onChange={handleChange}
                iconRight={<><i className="fa fa-arrow-up" aria-hidden="true"></i></>}
                required
                disabled
            />

            <Input
                name="name"
                label="Only Numeric (realtime)"
                onInputCallback={(e) => {                                                             
                    // only numeric
                    if (isNaN(e.target.value)) return '0';
                    const newVal = e.target.value.replace(/[^0-9.]/g, '');
                    return newVal;
                }}
            />



            <Input
                name="name"
                label="Only Numeric (change)"
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
            <p>{inputValue}</p>

        </>
    );
}
```



## Implement independent time elements


Use the `appendControl` property to extend the settings


`styles.scss`:
```css
.input-group:not(.has-left-content) {
    .app-input-demo {
        left: 0.5rem;
    }
}

.app-input-demo {
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

    .app-input-demo--year {
        width: 2.5rem;
    }
    
}
```

`index.tsx`:
```js
import React from "react";
import Input from 'funda-ui/Input';

export default () => {
    const [val, setVal] = useState<any>({
        year: '2024',
        month: '03',
        day: '15',
        hours: '22',
        minutes: '15',
        seconds: '00'
    }as {
        year: string | number;
        month: string | number;
        day: string | number;
        hours: string | number;
        minutes: string | number;
        seconds: string | number;
    });

    return (
        <>
            <Input
                name="name"
                label="DateTime Custom"
                type="text"
                appendControl={<>
                    <div className="app-input-demo">

                        <input
                            tabIndex={-1}
                            className="app-input-demo--year"
                            value={val.year}
                            onChange={(e: React.MouseEvent) => {
                                setVal((prevState) => {
                                    return {
                                        ...prevState,
                                        year: e.target.value
                                    }
                                })
                            }}
                        />
                        -
                        <input
                            tabIndex={-1}
                            className="app-input-demo--month"
                            value={val.month}
                            onChange={(e: React.MouseEvent) => {
                                setVal((prevState) => {
                                    return {
                                        ...prevState,
                                        month: e.target.value
                                    }
                                })
                            }}
                        />
                        -
                        <input
                            tabIndex={-1}
                            className="app-input-demo--day"
                            value={val.day}
                            onChange={(e: React.MouseEvent) => {
                                setVal((prevState) => {
                                    return {
                                        ...prevState,
                                        day: e.target.value
                                    }
                                })
                            }}
                        />
                        &nbsp;
                        <input
                            tabIndex={-1}
                            className="app-input-demo--hours"
                            value={val.hours}
                            onChange={(e: React.MouseEvent) => {
                                setVal((prevState) => {
                                    return {
                                        ...prevState,
                                        hours: e.target.value
                                    }
                                })
                            }}
                        />
                        :
                        <input
                            tabIndex={-1}
                            className="app-input-demo--minutes"
                            value={val.minutes}
                            onChange={(e: React.MouseEvent) => {
                                setVal((prevState) => {
                                    return {
                                        ...prevState,
                                        minutes: e.target.value
                                    }
                                })
                            }}
                        />
                        :
                        <input
                            tabIndex={-1}
                            className="app-input-demo--seconds"
                            value={val.seconds}
                            onChange={(e: React.MouseEvent) => {
                                setVal((prevState) => {
                                    return {
                                        ...prevState,
                                        seconds: e.target.value
                                    }
                                })
                            }}
                        />

                    </div>
                </>}
            /> 
        </>
    )
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
                    if (conRef.current) conRef.current.set('new value', () => { console.log('callback') });
                }}
            >Set Custom Value</a>



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

            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) {
                        conRef.current.forEach((obj: any) => {
                            obj.clear();
                        });
                    }
                }}
            >Set Empty Value</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) {
                        conRef.current.forEach((obj: any, i: number) => {
                            obj.set('new value__' + i);
                        });
                    }
                }}
            >Set Custom Value</a>


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
      
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    setShow(true);
                }}
            >Open Input Popup</a>


         
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

    const [myInput, setMyInput] = useState('test');

    return (
        <>
          
            <MemoInput 
                val={myInput} 
                name="name"
                callback={setMyInput} 
            />
            <p>{myInput}</p>
            
        </>
    );
}

```




## AI Predict

Set `aiPredict` to true, and you need to use a `aiPredictFetchCallback` property to format the data of the API callback, which will match the data structure of the component.



```js
import React from "react";
import Input from 'funda-ui/Input';


class DataService {
    
    // `getSuggestionsList()` must be a Promise Object
    async getSuggestionsList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        const isNotPureWhitespace =(str: string): boolean  =>{
            return str.trim().length > 0;
        };

        return {
            code: 0,
            message: 'OK',
            data: isNotPureWhitespace(searchStr) ? [
                'Using React can simplify complex data operations! ',
                'What is the difference between front-end development and back-end development? ',
                'I don\'t know how to learn math, can you teach me?',
                'How can I upgrade my system to the latest version? ',
                '数据的复杂操作！',
                '前后端开发的一些基本框架'
            ]: []
        };
    }


    async getSuggestionsListUseAxios(searchStr = '', limit = 0) {
        let _data = null;
        const res = await axios.get(`https://api`, {
            params: {
                s: searchStr,
                limit: limit
            },
            headers: {
                'Authorization': 'Bearer xxxx-xxxxxxxx-xxxxxxxx'
                'Content-Type': 'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        if (res && res.status == 200) _data = res.data;


        // result
        if (_data === null) {
            return {
                code: 0,
                message: 'OK',
                data: []
            };
        } else {
            return {
                code: 0,
                message: 'OK',
                data: _data
            };
        }

    }
    	
}


export default () => {

    return (
        <>

            <p><small>Type "how can" or "what is the f" to see the effect</small></p>

            <Input
                name="name"

                // AI
                aiPredict
                aiPredictFetchFuncAsync={new DataService}
                aiPredictFetchFuncMethod="getSuggestionsList"
                aiPredictFetchFuncMethodParams={['$QUERY_STRING',0]}
                aiPredictFetchCallback={(res) => {
                    return res;
                }}
                onChange={(e: React.MouseEvent, onComposition: any, el: any, value: string) => {
                    console.log(value);
                }}
            />
      
        </>
    );
}
```




## Double Ctrl Pressed


```js
import React, { useEffect, useState } from "react";
import Input from 'funda-ui/Input';
import getOs from 'funda-ui/Utils/os';

export default () => {

    const [ctrlPressed, setCtrlPressed] = useState<boolean>(false);
    const [lastPressTime, setLastPressTime] = useState<number>(0);

    return (
        <>
            <Input
                name="name"
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>, el: HTMLElement) => {
                    const isMac = getOs().isOSX;
                    const currentTime = new window.Date().getTime();
                    const isCtrlKey = isMac ? event.metaKey : event.ctrlKey;

                 
                    if (isCtrlKey) {
                        if (ctrlPressed && currentTime - lastPressTime < 500) {
                            // Double Ctrl pressed
                            alert('Double Ctrl pressed!');
                        } else {
                            setCtrlPressed(true);
                            setLastPressTime(currentTime);
                        }
                    } else {
                        setCtrlPressed(false);
                    }

                }}
                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>, el: HTMLElement) => {
                    const isMac = getOs().isOSX;
                    const isCtrlKey = isMac ? event.metaKey : event.ctrlKey;
                    if (isCtrlKey) {
                        setCtrlPressed(false);
                    }
                }}
            />
     
        </>
    );
}
```





## API

### Input
```js
import Input from 'funda-ui/Input';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set('test value', () => { console.log('callback') })`</li><li>`contentRef.current.aiPredictReset()`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. | - |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. | - |
| `appendControl` | ReactNode  | - | An extension of the same level as \<input \>, usually used to placeholder of some elements | - |
| `type` | string | text | The type of input. Such as \<input type="text" name="name"\> gives a text box. | - |
| `defaultValue` | string | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. | - |
| `value` | string | - | Set a default value for this control | - |
| `requiredLabel` | string \| ReactNode | `<span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>` | It is used to specify a label for an element required. | - |
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
| `src` | string | - | specifies the URL of the image to use as a submit button. The src attribute can only be used with (and is required for) \<input type="image"\>. | - |
| `size` | number | - | The size attribute specifies the visible width, in characters, of an \<input \> element. <blockquote>It is valid when `controlClassName` is changed.</blockquote> | - |
| `maxLength` | number | - | Defines the maximum string length that the user can enter into it. | - |
| `minLength` | number | - | Defines the minimum string length that the user can enter into it. | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `autoComplete` | string  | `on` | The autocomplete attribute provides a hint to the user agent specifying how to, or indeed whether to, prefill a form control. | - |
| `autoCapitalize` | string  | `off` | The autocapitalize property of the HTMLElement interface represents the element's capitalization behavior for user input. | - |
| `spellCheck` | boolean  | false | The spellcheck global attribute is an enumerated attribute that defines whether the element may be checked for spelling errors. | - |
| `aiPredict` | boolean | false | Whether to enable AI prediction | - |
| `aiPredictRemainingTextRGB` | Array | `[153, 153, 153]` | Define a color value for the remaining characters, passed using an RGB array. | - |
| `aiPredictConfirmKey` | Array | `[['Enter'],['Tab'],['Shift', ' ']]` | Confirm the value of the key pressed. check out [Key values for keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) | - |
| `aiPredictFetchFuncAsync` | Constructor | - | (**valid when the `aiPredict` is true**) A method as a string from the constructor. | - |
| `aiPredictFetchFuncMethod` | string  | - | (**valid when the `aiPredict` is true**) When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `aiPredictFetchFuncMethodParams` | array  | - | (**valid when the `aiPredict` is true**) The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',99,'string 1','$QUERY_STRING']` <br /><blockquote>There should be at least one parameter which is the query string.  <br />`$QUERY_STRING` identifies the ID of the automatic query, and its value depends on the user input string.</blockquote> | - |
| `aiPredictFetchCallback` | function  | - | (**valid when the `aiPredict` is true**) Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onChangeCallback` | function  | - | Return value from `onChangeCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br />At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when focus is lost. If return is not set, it will not return.</blockquote> | - |
| `onInputCallback` | function  | - | Return value from `onInputCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br />At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires in real time as the user enters. If return is not set, it will not return.</blockquote> | - |
| `onKeyPressedCallback` | function  | - | Return value from `onKeyPressedCallback` property to format the data of the control element, which will match the data structure of the component.  It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the control (**HTML Element**)</li></ol><br />At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when the keyboard is pressed. If return is not set, it will not return.</blockquote> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns four callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li><li>The third is the control (**HTML Element**)</li><li>The last is the current value (**String**)</li></ol>  | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onPressEnter` | function  | - | The callback function that is triggered when Enter key is pressed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**KeyboardEvent**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onKeyDown` | function  | - | The callback function that is triggered when the user presses a key on the keyboard. It returns two callback values. <br /> <ol><li>The first is the Control Event (**KeyboardEvent**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |
| `onKeyUp` | function  | - | The callback function that is triggered when the user releases a key. It returns two callback values. <br /> <ol><li>The first is the Control Event (**KeyboardEvent**)</li><li>The last is the control (**HTML Element**)</li></ol> | - |

It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.




### Create Callback via `aiPredictFetchCallback` 

A successful response returns the details of the callback such as Sample Request Body:

The return value is an array of strings. such as `[]`


```json
[
    "String 1",
    "String 2",
    ...
]
```