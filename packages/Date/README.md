# Date


## API

### Date
```js
import Date from 'funda-ui/Date';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  |
| `popupRef` | React.RefObject | - | It exposes the following methods when the component's popup opens or closes:  <br /> <ol><li>`popupRef.current.close()`</li></ol> |
| `offset` | number  | 10 | Position offset of top and bottom. |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen |
| `popupClassName` | string | - | The class name of the popup. |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. |
| `localization` | `en_US` \| `zh_CN` | en_US | Localization in the component of all. You could also use `lang*` to set the language individually. |
| `type` | `date` \| `datetime-local` \| `time` | date | The type of date control.|
| `onlyTime` | boolean  | false | Only the time is displayed, not the date. such as `2024-03-22 18:33:23` to `18:33:23`. <blockquote>It can be used in conjunction with `truncateSeconds`</blockquote> |
| `truncateSeconds` | boolean  | false | Truncate the number of seconds of time. such as `18:33:23` to `18:33` |
| `valueUseSlash` | boolean  | false | Replace the dash with a slash as the result. such as `2024-03-22` to `2024/03/22`. |
| `customTodayDate` | string  | - | Specify a default today. such as `2023-11-16` |
| `langHoursTitle` | string  | `Hours`| Localization in the component of hours section title. |
| `langMinutesTitle` | string  | `Minutes`| Localization in the component of minutes section title. |
| `langSecondsTitle` | string  | `Seconds`| Localization in the component of seconds section title. |
| `langWeek` | array  | `['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']` | Localization in the component of week sequence. <blockquote>Support html tags. <br />such as `['<small>MON</small>', '<small>TUE</small>', '<small>WED</small>', '<small>THU</small>', '<small>FRI</small>', '<small>SAT</small>', '<small>SUN</small>']`</blockquote> |
| `langWeekFull` | array  | `['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']` | Localization in the component of full week sequence. <blockquote>This attribute is not valid yet</blockquote> |
| `langMonths` | array  | `['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']` | Localization in the component of months sequence. |
| `langMonthsFull` | array  | `['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']` | Localization in the component of full months sequence. |
| `langToday` | string  | `Today`| Localization in the component of today button. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `iconLeft` | ReactNode  | - | Set the left icon of this control |
| `iconRight` | ReactNode  | - | Set the right icon of this control |
| `onLoad` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the value at which the requirement was initialized (**String**)</li><li>The second is the current date info (**JSON Object**)</li></ol> |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The second is the current date info (**JSON Object** \| **String**)</li><li>The last is the boolean value that determine whether the date is valid (**Boolean**)</li></ol> |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns only one callback value which is the control (**HTML Element**) |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the control (**HTML Element**) |
| `onClosePopup` | function  | - | Call a function when close popup. It has no return value. |
| `onChangeDate` | function  | - | Call a function when a date area is clicked. The function receives the selected date (yyyy-MM-dd).  Triggered when the date cell selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeMonth` | function  | - | Called when the date moves to a new month. The function receives the selected month (0-11). Triggered when the previous, next or month selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeYear` | function  | - | Called when the date moves to a new year. The function receives the selected year. Triggered when the year selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeToday` | function  | - | Called when the date moves to today. Triggered when the today selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeHours` | function  | - | Called when the date moves to hours. Triggered when the hours selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeMinutes` | function  | - | Called when the date moves to minutes. Triggered when the minutes selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeSeconds` | function  | - | Called when the date moves to seconds. Triggered when the seconds selection button is clicked. It returns only one value which is the current value (**JSON Object**) |




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
                label="Date"
                value="2024-03-13"
                type="date"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes)
                }}
                onLoad={(initValue: string, dateRes: any) => {
                    console.log(initValue, dateRes)
                }}
            />



           <Date
                label="Date & Time (no seconds)"
                value="2024-03-14 10:22"
                type="datetime-local"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes)
                }}
                onLoad={(initValue: string, dateRes: any) => {
                    console.log(initValue, dateRes)
                }}
                truncateSeconds
            />


           <Date
                label="Time"
                value="07:30:38"
                type="time"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes)
                }}
                onLoad={(initValue: string, dateRes: any) => {
                    console.log(initValue, dateRes)
                }}
                onlyTime
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
            />



            <Date 
                localization="zh_CN"
            />
 
        </>
    );
}
```

## Popup closes automatically after a minute of tapping

Lets you callback the handle exposed as a ref.


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
                label="Date & Time (no seconds)"
                value="2024-03-14 10:22"
                type="datetime-local"
                onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean) => {
                    console.log(isValidDate, input, dateRes, dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes)
                }}
                onLoad={(initValue: string, dateRes: any) => {
                    console.log(initValue, dateRes)
                }}
                truncateSeconds
                onChangeMinutes={(dateRes: any) => {
                    console.log(dateRes);

                    // close popup
                    if (popupRef.current) popupRef.current.close();
                }}
            />

 
        </>
    );
}
```

