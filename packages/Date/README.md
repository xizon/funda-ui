# Date




## General

Use the parent container to control the width, default 100%

```js
import React from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    return (
        <>
        
            <Date
                name="name"
                label="Date"
                value="2024-03-13"
                type="date"
                placeholder="yyyy/MM/dd"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean, allSplittingInputs: any[]) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes, allSplittingInputs)
                }}
                onLoad={(initValue: string, dateRes: any, allSplittingInputs: any[]) => {
                    console.log(initValue, dateRes, allSplittingInputs)
                }}
                onPressEnter={(control: HTMLElement, allControls: HTMLElement[]) => {
                    // ...
                }}
            />



            <Date
                name="name"
                label="Date & Time (no seconds)"
                value="2024-03-14 10:22"
                type="datetime-local"
                placeholder="yyyy/MM/dd HH:mm"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean, allSplittingInputs: any[]) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes, allSplittingInputs)
                }}
                onLoad={(initValue: string, dateRes: any, allSplittingInputs: any[]) => {
                    console.log(initValue, dateRes, allSplittingInputs)
                }}
                truncateSeconds
            />


            <Date
                name="name"
                label="Time"
                value="07:30:38"
                placeholder="HH:mm:ss"
                type="time"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean, allSplittingInputs: any[]) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes, allSplittingInputs)
                }}
                onLoad={(initValue: string, dateRes: any, allSplittingInputs: any[]) => {
                    console.log(initValue, dateRes, allSplittingInputs)
                }}
                onlyTime
            />

        </>
    );
}
```


## No spacing

```js
import React from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {


    return (
        <>

            <Date
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Date
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```



## Use asynchronous to specify a value

When you make asynchronous changes, the time widget is rendered in real time, so you need to update the action when you lose focus. If you only need the default value to be loaded once, you can use `defaultValue`.


```js
import React, { useState } from 'react';
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';



export default () => {

    const [myValue, setMyValue] = useState<string>('2024-12-23');
    
    /**
     * Zero Padding
     * @param {Number} num
     * @param {Boolean} padZeroEnabled 
     * @returns {String}  '01', '05', '12'
     */
    const padZero = (num, padZeroEnabled = true) => {
        if (padZeroEnabled) {
            return num < 10 ? '0' + num : num.toString();
        } else {
            return num.toString();
        }

    };

    return (

        <>

             <Date
                value={myValue}
                // defaultValue={myValue}
                type="date"
                placeholder="yyyy/MM/dd"
                onBlur={(e: any, allSplittingInputs: any[]) => {
                    const _curDate = `${allSplittingInputs[0].value}-${padZero(Number(allSplittingInputs[1].value))}-${padZero(Number(allSplittingInputs[2].value))}`;
                    setMyValue(_curDate);
                    console.log('current value is ', _curDate);
                    // location.hash = xxxxxxx;
                }}
            />

            <small>{myValue}</small>

        </>
    )
}
```


## Auto/Custom Width

You can also set a parent container to control the width.

```js
import React from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    return (
        <>

            <Date 
                triggerClassName="w-auto"
                ...
            />


            <div style={{ width: '300px'}}>
                <Date
                    ...
                />
            </div>

 
        </>
    );
}
```




## Remove Date Control border and background color


```js
import React from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {


    return (
        <>

            <div style={{ background: '#d7fcf7', borderRadius: '0.35rem'}}>

                <Date
                    ...
                    style={{border: 'none', background: 'transparent', fontSize: '0.75rem'}}
                    ...
                />

            </div>


 
        </>
    );
}
```




## Asynchronous Usage


```js
import React, { useEffect, useState } from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    const defaultVal = '2024-03-14 10:22:05';
    const [customDate, setCustomDate] = useState<string>('');


    useEffect(() => {
       setCustomDate(defaultVal);
    }, []);


    return (
        <>


           <Date
                name="name"
                defaultValue={customDate} // Don't use the "value" attribute to specify a state that changes in real time
                type="datetime-local"
                placeholder="yyyy/MM/dd HH:mm:ss"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean, allSplittingInputs: any[]) => {
                    let _valRes = dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes;
                    _valRes = _valRes.split(':').length === 3 ? _valRes : `${_valRes}:00`;
                    if (_valRes === ':00') _valRes = '';

                    console.log(_valRes);
                    setCustomDate(_valRes);
                }}
            />


        </>
    );
}
```



## Change language

```js
import React from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    return (
        <>

            <Date 
                langHoursTitle="时"
                langMinutesTitle="分"
                langSecondsTitle="秒"
                langWeek={['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']}
                langMonths={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langMonthsFull={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langToday="今天"
                ...
            />



            <Date 
                localization="zh_CN"
                ...
            />
 
        </>
    );
}
```

## Popup closes automatically after a minute of tapping

Lets you callback the handle exposed as attribute `popupRef`.


```js
import React, {useRef} from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    const popupRef = useRef<any>();


    return (
        <>



           <Date
                popupRef={popupRef}
                name="name"
                label="Date & Time (no seconds)"
                value="2024-03-14 10:22"
                placeholder="yyyy/MM/dd HH:mm"
                type="datetime-local"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean, allSplittingInputs: any[]) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes, allSplittingInputs)
                }}
                onLoad={(initValue: string, dateRes: any, allSplittingInputs: any[]) => {
                    console.log(initValue, dateRes, allSplittingInputs)
                }}
                truncateSeconds
                onChangeMinutes={(dateRes: any) => {
                    console.log(dateRes);

                    // close popup
                    if (popupRef.current) popupRef.current.close();
                }}
                onChangeToday={(dateRes: any) => {
                    // close popup
                    if (datePopupRef.current) datePopupRef.current.close();
                }}
            />

 
        </>
    );
}
```




## Focus hours's input control when popup opens

```js
import React from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    return (
        <>

            <Date
                name="name"
                value="16:36"
                type="time" 
                truncateSeconds
                onOpenPopup={(allSplittingInputs: any[]) => {

                    console.log(allSplittingInputs);
            
                    // focus hours input
                    if (allSplittingInputs[3] !== null) {
                        allSplittingInputs[3].select();
                    }
                }}
                onlyTime
            />

 
        </>
    );
}
```



## The default value sets a click initialization time for the null value

```js
import React from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    return (
        <>

            <Date
                name="name"
                value=""
                clickInitValue="2024-03-14 10:22:00"
                type="datetime-local"
            />

 
        </>
    );
}
```





## Focus year's input control and set a default value when component rendered

Lets you callback the handle exposed as attribute `contentRef`.

```js
import React, {useRef} from "react";
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';

export default () => {

    const inputRef = useRef<any>();

    return (
        <>

            <Date
                contentRef={inputRef}
                name="name"
                value=""
                type="datetime-local"
                onLoad={(initValue: string, dateRes: any, allSplittingInputs: any[]) => {
                    console.log(allSplittingInputs)

                    // focus hours input
                    if (allSplittingInputs[0] !== null) {

                        // Make sure it is not affected by other rendering
                        setTimeout(() => {
                            if (inputRef.current) inputRef.current.set('2024-04-18 21:54:09', () => { console.log('callback') });
                        }, 0);

                        setTimeout(() => {
                            allSplittingInputs[0].select();
                        }, 150);

                        setTimeout(() => {
                            if (inputRef.current) {
                                inputRef.current.clear();
                                inputRef.current.blur();
                            }
                        }, 5000);
                    }
                }}
            />

 
        </>
    );
}
```



## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
import React, { useRef } from 'react';
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Date/index.css';



export default () => {

    const popupRef = useRef<any>();
    const popupRef2 = useRef<any>();
    const contentRef = useRef<any>();
    const contentRef2 = useRef<any>();
    
    return (

        <>

            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (contentRef.current) contentRef.current.clear();
                    if (contentRef2.current) contentRef2.current.clear();
                }}
            >Set Empty Value</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (contentRef.current) contentRef.current.set('17:33:20', () => { console.log('callback') });
                }}
            >Set Custom Value (first - 17:33:20)</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (contentRef2.current) contentRef2.current.set('2024-09-03 22:10:01', () => { console.log('callback') });
                }}
            >Set Custom Value (second - 2024-09-03 22:10:01)</a>


            <Date
                popupRef={popupRef}
                contentRef={contentRef}
                name="start_time"
                value=""
                type="time"
                onChangeSeconds={(dateRes: any) => {
                    // close popup
                    if (popupRef.current) popupRef.current.close();
                }}
                onOpenPopup={(allSplittingInputs: any[]) => {

                    // focus hours input
                    if (allSplittingInputs[3] !== null) {
                        allSplittingInputs[3].select();
                    }
                }}
                onlyTime

            />


            <Date
                popupRef={popupRef2}
                contentRef={contentRef2}
                name="end_time"
                value=""
                type="datetime-local"
                onChangeSeconds={(dateRes: any) => {
                    // close popup
                    if (popupRef2.current) popupRef2.current.close();
                }}
            />  

        </>
    )
}
```



## API

### Date
```js
import Date from 'funda-ui/Date';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.blur(() => { console.log('callback') })`</li><li>`contentRef.current.set('2024-04-25 21:54:18', () => { console.log('callback') })`</li></ol>  <blockquote>DO NOT USE it in the `onChange` and `onChange***` of this component, otherwise it will cause infinite rendering</blockquote> | - |
| `popupRef` | React.ForwardedRef | - | It exposes the following methods when the component's popup opens or closes:  <br /> <ol><li>`popupRef.current.close()`</li></ol> | - |
| `depth` | number  | 1055 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. | - |
| `enableEntireAreaPopup` | boolean  | false | Enable the entire area popup. If it is false, you need to click the icon to pop up. | - |
| `delimiter` | string  | `/` | Specify a delimiter from a date string. such as `/`, `-`, ` `, `.` | - |
| `hideClearButton` | boolean  | false | Hide the Clear button | - |
| `showToolsWhenHover` | boolean  | false | The tool icon is displayed when hovering over the mouse | - |
| `offset` | number  | 10 | Position offset of top and bottom. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `popupClassName` | string | - | The class name of the popup. | - |
| `triggerClassName` | string | - | The class name of the date trigger. | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. If you want not to wrap lines when crowded, you can change it to `input-group flex-nowrap` | - |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. | - |
| `localization` | `en_US` \| `zh_CN` | en_US | Localization in the component of all. You could also use `lang*` to set the language individually. | - |
| `type` | `date` \| `datetime-local` \| `time` | date | The type of date control.| - |
| `onlyTime` | boolean  | false | Only the time is displayed, not the date. such as `2024-03-22 18:33:23` to `18:33:23`. <blockquote>It can be used in conjunction with `truncateSeconds`</blockquote> | - |
| `truncateSeconds` | boolean  | false | Truncate the number of seconds of time. such as `18:33:23` to `18:33` | - |
| `valueUseSlash` | boolean  | false | Replace the dash with a slash as the result. such as `2024-03-22` to `2024/03/22`. | - |
| `customTodayDate` | string  | - | Specify a default today. such as `2023-11-16` | - |
| `langHoursTitle` | string  | `Hours`| Localization in the component of hours section title. | - |
| `langMinutesTitle` | string  | `Minutes`| Localization in the component of minutes section title. | - |
| `langSecondsTitle` | string  | `Seconds`| Localization in the component of seconds section title. | - |
| `langWeek` | array  | `['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']` | Localization in the component of week sequence. <blockquote>Support html tags. <br />such as `['<small>MON</small>', '<small>TUE</small>', '<small>WED</small>', '<small>THU</small>', '<small>FRI</small>', '<small>SAT</small>', '<small>SUN</small>']`</blockquote> | - |
| `langWeekFull` | array  | `['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']` | Localization in the component of full week sequence. <blockquote>This attribute is not valid yet</blockquote> | - |
| `langMonths` | array  | `['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']` | Localization in the component of months sequence. | - |
| `langMonthsFull` | array  | `['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']` | Localization in the component of full months sequence. | - |
| `langToday` | string  | `Today`| Localization in the component of today button. | - |
| `defaultValue` | string | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. | - |
| `value` | string | - | Set a default value for this control | - |
| `clickInitValue` | string | - | If the default value does not exist, the time is automatically initialized when the input is focused, and if not set, the current time is defaulted. | - |
| `min` | string | - | The minimum date & time to accept. such as `2024-02-26 08:05:00` | - |
| `max` | string | - | The maximum date & time to accept. such as `2024-02-26 09:25:45` | - |
| `placeholder` | string | `yyyy/MM/dd HH:mm:ss` |  Specifies a short hint that describes. | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `requiredLabel` | string \| ReactNode | `<span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>` | It is used to specify a label for an element required. | - |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `onLoad` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the value at which the requirement was initialized (**String**)</li><li>The second is the current date info (**JSON Object**)</li><li>The last is the existing time-splitting inputs (**Array**)</li></ol> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns four callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The second is the current date info (**JSON Object** \| **String**)</li><li>The third is the boolean value that determine whether the date is valid (**Boolean**)</li><li>The last is the existing time-splitting inputs (**Array**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The last is the existing time-splitting inputs (**Array**)</li></ol> <blockquote>Changes of year/month/day/hours/minutes/seconds/popup will trigger</blockquote> | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The last is the existing time-splitting inputs (**Array**)</li></ol> | - |
| `onOpenPopup` | function  | - | Call a function when open popup. It returns only one value which is the existing time-splitting inputs (**Array**) | - |
| `onClosePopup` | function  | - | Call a function when close popup. It returns only one value which is the existing time-splitting inputs (**Array**) | - |
| `onChangeDate` | function  | - | Call a function when a date area is clicked. The function receives the selected date (yyyy-MM-dd).  Triggered when the date cell selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeMonth` | function  | - | Called when the date moves to a new month. The function receives the selected month (0-11). Triggered when the previous, next or month selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeYear` | function  | - | Called when the date moves to a new year. The function receives the selected year. Triggered when the year selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeToday` | function  | - | Called when the date moves to today. Triggered when the today selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeHours` | function  | - | Called when the date moves to hours. Triggered when the hours selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeMinutes` | function  | - | Called when the date moves to minutes. Triggered when the minutes selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeSeconds` | function  | - | Called when the date moves to seconds. Triggered when the seconds selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onPressEnter` | function  | - | The callback function that is triggered when Enter key is pressed. It returns two callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The last is the existing time-splitting inputs (**Array**)</li></ol> | - |
| `onClear` | function  | - | Clicking the empty button is triggered. It returns only one callback value which is the current value (**JSON Object**) | - |

