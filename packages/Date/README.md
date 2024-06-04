# Date


## API

### Date
```js
import Date from 'funda-ui/Date';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.blur(() => { console.log('callback') })`</li><li>`contentRef.current.set('2024-04-25 21:54:18', () => { console.log('callback') })`</li></ol>  <blockquote>DO NOT USE it in the `onChange` and `onChange***` of this component, otherwise it will cause infinite rendering</blockquote> | - |
| `popupRef` | React.RefObject | - | It exposes the following methods when the component's popup opens or closes:  <br /> <ol><li>`popupRef.current.close()`</li></ol> | - |
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
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. | - |
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
| `value` | string | - | Set a default value for this control | - |
| `clickInitValue` | string | - | If the default value does not exist, the time is automatically initialized when the input is focused, and if not set, the current time is defaulted. | - |
| `min` | string | - | The minimum date & time to accept. such as `2024-02-26 08:05:00` | - |
| `max` | string | - | The maximum date & time to accept. such as `2024-02-26 09:25:45` | - |
| `placeholder` | string | `yyyy/MM/dd HH:mm:ss` |  Specifies a short hint that describes. | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
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




## Examples

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



## Remove Date Control border and background color


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
                style={{border: 'none', background: 'transparent', textAlign: 'center', fontSize: '0.75rem'}}
                ...
            />

 
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
    const [defaultCustomDate, setDefaultCustomDate] = useState<string>('');


    useEffect(() => {

       // "setDefaultCustomDate" is generally used to assign values after http requests 
       // (usually used for real business APIs needs)
       setCustomDate(defaultVal);
       setDefaultCustomDate(defaultVal);  
    }, []);


    return (
        <>


           <Date
                name="name"
                value={defaultCustomDate} // Don't use customDate assignments directly
                type="datetime-local"
                placeholder="yyyy/MM/dd HH:mm:ss"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean, allSplittingInputs: any[]) => {
                    let _valRes = dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes;
                    _valRes = _valRes.split(':').length === 3 ? _valRes : `${_valRes}:00`;
                    if (_valRes === ':00') _valRes = '';

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




## Auto Width

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
                value=""
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

