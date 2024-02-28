# Event Calendar Timeline


## API

### Event Calendar Timeline
```js
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `customTodayDate` | string  | - | Specify a default today. such as `2023-11-16` |
| `eventsValue` | array  | - | Specify the default value for all events. Its properties are described below in the documentation. such as `[{id:1,date:'2023-11-20',time:'',data:'event 1'},{id:2,date:'2023-9-22',time:'',data:'event 2'},{id:3,date:'2023-09-12',time:'',data:'<del>very long event string</del> here, event 3',eventStyles:{background:'rgb(255, 240, 227)'}}]` |
| `langWeek` | array  | `['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']` | Localization in the component of week sequence. <blockquote>Support html tags. <br />such as `['<small>MON</small>', '<small>TUE</small>', '<small>WED</small>', '<small>THU</small>', '<small>FRI</small>', '<small>SAT</small>', '<small>SUN</small>']`</blockquote> |
| `langWeekFull` | array  | `['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']` | Localization in the component of full week sequence. <blockquote>This attribute is not valid yet</blockquote> |
| `langMonths` | array  | `['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']` | Localization in the component of months sequence. |
| `langMonthsFull` | array  | `['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']` | Localization in the component of full months sequence. |
| `langToday` | array  | `Today`| Localization in the component of today button. |
| `iconRemove` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>` | The label of the button to delete current item, if it is not set, only the SVG icon will be included |
| `cellCloseBtnClassName` | string  | - | Specify a class for close button of cell |
| `cellCloseBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the close button of cell |
| `forwardAndBackFillDisabled` | boolean  | false | Disable forward and backfill values in a calendar. |
| `showWeek` | boolean | false | Show week identifier. |
| `tableListSectionTitle` | string \| ReactNode  | - | Table header title. |
| `tableTooltipDisabled` | boolean  | false | Disable table tooltip |
| `tableTooltipDirection` | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left` | bottom | Table tooltip direction of the tip. Defaults to `top`. |
| `tableTooltipOffset` | number  | 10 | Table tooltip position offset |
| `tableTooltipExceededSidePosOffset` | number | 15 | Table tooltip offset px that exceeds the far right or left side of the screen |
| `tableTooltipSize` | `auto` \| `large` \| `medium` \| `small`  | auto | Table tooltip size of the content area. Defaults to `auto`. |
| `tableCellMinWidth` | number  | 50 \| 100 | Define a minimum width in pixels for each cell in the content area. <blockquote>When `showWeek` is true, it defaults to **100**</blockquote> |
| `draggable` | boolean | false | Indicates whether the content area can be dragged. |
| `autoScroll` | boolean | false | Adds scrollbars only when necessary. |
| `onChangeDate` | function  | - | Call a function when a date area is clicked. It returns only two values. <br /> <ol><li>The one is an HTMLElement of this area (**HTMLElement**) </li><li>The second parameter is the current value (**JSON Object**) </li></ol> |
| `onChangeMonth` | function  | - | Called when the date moves to a new month. The function receives the selected month (0-11). Triggered when the previous, next or month selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeYear` | function  | - | Called when the date moves to a new year. The function receives the selected year. Triggered when the year selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `onChangeToday` | function  | - | Called when the date moves to today. Triggered when the today selection button is clicked. It returns only one value which is the current value (**JSON Object**) |
| `modalContent` | ReactNode  | - | **For `<ModalDialog />`** Customize the content in the pop-up window, usually form controls. See the case at the bottom of the document. |
| `modalDeleteContent` | ReactNode  | - | **For `<ModalDialog />`** Customize the content in the pop-up window (the part used for deletion), usually a form control, see the case at the bottom of the document. |
| `modalHeading` | ReactNode  | - | **For `<ModalDialog />`** Set a window title |
| `modalMaskOpacity` | string  | - | **For `<ModalDialog />`** The mask opacity. The value is in the range *0.0* to *1.0* |
| `modalMaxWidth` | number \| string  | false | **For `<ModalDialog />`** Custom modal max-width whick need a unit string. Such as: `200px` |
| `modalMinHeight` | number \| string  | false | **For `<ModalDialog />`** Custom modal max-height whick need a unit string. Such as: `auto` |
| `modalCloseBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for close button |
| `modalCloseBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the close button |
| `modalSubmitBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for submit button |
| `modalSubmitBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the submit button |
| `modalSubmitDeleteBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for delete button |
| `modalSubmitDeleteBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the delete button |
| `onModalEditOpen` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is opened. It returns only one value which is the current value (**JSON Object**). |
| `onModalEditClose` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is closed. It returns a callback value which is the trigger object It returns only one value which is the current value (**JSON Object**). |
| `onModalDeleteOpen` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is opened. It returns only one value which is the current value (**JSON Object**). |
| `onModalDeleteClose` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is closed. It returns a callback value which is the trigger object It returns only one value which is the current value (**JSON Object**). |
| `onModalEditEvent` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is submitted. It returns two callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the closing event (**Function**)</li></ol> |
| `onModalDeleteEvent` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is submitted. It returns two callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the closing event (**Function**)</li></ol> |



---

JSON Object Literals configuration properties of the `eventsValue`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. |
| `date` | string | - | Date of item. such as `2023-11-02` |
| `time` | string | - | Date of item. such as `25:33:00` |
| `data` | string | - | Specify the value for event  <blockquote>Support html tags</blockquote> |
| `dataTooltip` | string | - | **(Optional)**  Specify the value note for event. It will be displayed in the form of Tooltip.  <blockquote>Support html tags</blockquote> |
| `eventStyles` | React.CSSProperties | - | **(Optional)**  Use inline styles to event area. such as `{ backgroundColor: "red", fontSize: "12px" }` |



## Set max height and width

Just put a **div** on the outermost layer of the `<EventCalendarTimeline />`.


```js
import React from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';

export default () => {

    return (
        <>
            <div style="height: 100px; width: 600px;">
                <EventCalendarTimeline />
            </div>
            
                  
        </>
    );
}
```



## Change language

```js
import React from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';

export default () => {

    return (
        <>
            <EventCalendarTimeline 
                langWeek={['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']}
                langMonths={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langMonthsFull={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langToday="今天"
            />
                  
        </>
    );
}
```





## Use of data


```js
import React, { useState, useEffect } from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';



export default () => {

    // default data
    const defaultData = [
        {
            "listSection": "Smith One",
            "eventSources": [
                {
                    "id": 4505,
                    "date": "2024-01-06",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4508,
                    "date": "2023-12-04",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>",
                    "dataTooltip": `<span>Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4510,
                    "date": "2024-02-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\"> </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4513,
                    "date": "2024-02-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4516,
                    "date": "2023-12-30",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4521,
                    "date": "2024-01-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4524,
                    "date": "2023-12-05",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4525,
                    "date": "2023-12-19",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4527,
                    "date": "2024-02-18",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4528,
                    "date": "2024-01-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4529,
                    "date": "2023-12-10",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4534,
                    "date": "2023-12-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4535,
                    "date": "2024-02-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4537,
                    "date": "2024-01-16",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4538,
                    "date": "2024-02-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4541,
                    "date": "2024-02-25",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4543,
                    "date": "2023-12-26",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4544,
                    "date": "2024-01-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4546,
                    "date": "2023-12-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": "David",
            "eventSources": [
                {
                    "id": 4509,
                    "date": "2024-02-28",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4512,
                    "date": "2024-01-15",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4515,
                    "date": "2024-01-01",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4567,
                    "date": "2024-01-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                }
            ]
        },
        {
            "listSection": "Dony Marketplace",
            "eventSources": [
                {
                    "id": 4574,
                    "date": "2024-01-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4575,
                    "date": "2024-01-12",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4576,
                    "date": "2024-01-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4578,
                    "date": "2024-01-14",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        }
    ];

    const defaultCustomTodayDate = '2023-12-01';

    const [data, setData] = useState<any>(null);
    const [updateCalendarData, setUpdateCalendarData] = useState<boolean>(false);

    useEffect(() => {

        // update calendar data
        if (!updateCalendarData && defaultData.length > 0) {
            setData(defaultData);
            setUpdateCalendarData(true);
        }
    
    }, [defaultData, defaultCustomTodayDate]);


    return (
        <>
   
            <div style={{height: '500px', width: '1280px'}}>
                <EventCalendarTimeline
                    customTodayDate={defaultCustomTodayDate}
                    eventsValue={data}
                    tableListSectionTitle="Name"
                    langWeek={['<small class="ps-1">MON</small>', '<small class="ps-1">TUE</small>', '<small class="ps-1">WED</small>', '<small class="ps-1">THU</small>', '<small class="ps-1">FRI</small>', '<small class="ps-1">SAT</small>', '<small class="ps-1">SUN</small>']}
                    cellCloseBtnClassName="d-none"
                    onChangeDate={(e: any, currentData: any) => {
                        console.log(e.currentTarget.dataset.date, e.currentTarget.dataset.week); // 2023-11-22, 2
                        console.log(currentData); // {id: 0, date: '2023-11-22'}  or {id: 1, date: '2023-11-20', time: '', data: 'event 1'}
                    }}
                    onChangeMonth={(currentData: any) => {
                        console.log(currentData); // {day: 22, month: 10, year: 2024}
                    }}
                    onChangeYear={(currentData: any) => {
                        console.log(currentData); // {day: 22, month: 10, year: 2030}
                    }}
                    onChangeToday={(currentData: any) => {
                        console.log(currentData); // {day: 22, month: 10, year: 2024}
                    }}
                    forwardAndBackFillDisabled
                    draggable
                    showWeek
                    autoScroll

                />
            </div>

                  
        </>
    );
}

```






## Has Modal Dialog & Event Planning

The capabilities like multi-day events, responsiveness are supported.

```js
import React, { useState, useEffect, useRef } from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';



/**
 * Serialize form values
 * @param  {Array} types   - An array of field strings.
 * @param {HTMLFormElement} form      - Element
 * @returns Array
 */
function serializeArray(form: HTMLFormElement, types: string[] = ['input', 'textarea', 'select', 'checkbox', 'progress', 'datalist']) {

    const objects: any[] = [];
    const fieldsTypes = types;
    
    fieldsTypes.map((item, index) => {
        const fields: any = form.getElementsByTagName(item);
        for (let i = 0; i < fields.length; i++) {

            const _name = fields[i].getAttribute("name");
            let _value = fields[i].value;

            // if field is Array
            if ( _name !== null && _name.match(/(\[.*?\])/gi) ) {
                const inputs = form.querySelectorAll("[name='"+_name+"']");
                const _arrFieldValue = [];
                for (let j = 0; j < inputs.length; j++) {
                    const _arrField: any = inputs[j];
                    _arrFieldValue.push(_arrField.value);
                }

                _value = _arrFieldValue;
            }

            
            //if checkbox or radio
            if ( fields[i].type === 'radio' || fields[i].type === 'checkbox' ) {
                if ( fields[i].checked === true ) {
                    objects[objects.length] = {
                        name: _name,
                        value: _value
                    };
                }
            } else {
                objects[objects.length] = {
                    name: _name,
                    value: _value
                };
            }
        

        }
    });

    // remove Duplicate objects from JSON Array
    const clean = objects.filter((item, index, self) => index === self.findIndex((t) => (t.name === item.name)));

    return clean;
}

/**
 * Object validation
 * @param {String} input
 * @return {boolean}
 */

function isEmpty(input: string | any[]) {
    if ( Array.isArray(input) ) {
        return input.some((str) => !str.replace(/\s/g, '').length === true )
    } else {
        return !input.replace(/\s/g, '').length === true;
    }
}

function validate(form: any, lang: any, callback: any) {

    const formData: any = {};
    const fieldsData: any = serializeArray(form);
    let fieldsCheck: boolean = true;
    let customFieldsCheck: boolean = true;

    // Step 1: everything is ok  
    //-------------
    // required fields
    const emptyFieldsCheck = fieldsData.every((item: any, index: number) => {

        if (item.name !== null && item.name !== '') {
            formData[item.name] = item.value;

            const _field = form.querySelector('[name="' + item.name + '"]');
            const fieldRequired = _field.getAttribute('required');
            if (fieldRequired !== null && fieldRequired !== 'false') {
                if (item.value === '' || isEmpty(item.value)) {

                    const _label = _field.dataset.requiredTitle;
                    window.alert(`${_label}${lang.empty}`);
                    return false;
                }
            }
        }

        return true;
    });

    //  merged result
    fieldsCheck = [emptyFieldsCheck, customFieldsCheck].every((item: boolean) => {
        return item;
    });


    // Step 2: everything is ok  
    //-------------
    if (fieldsCheck) {
        callback?.(formData);
    }
}


export default () => {

    // default data
    const defaultData = [
        {
            "listSection": "Smith One",
            "eventSources": [
                {
                    "id": 4505,
                    "date": "2024-01-06",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4508,
                    "date": "2023-12-04",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>",
                    "dataTooltip": `<span>Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4510,
                    "date": "2024-02-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\"> </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4513,
                    "date": "2024-02-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4516,
                    "date": "2023-12-30",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4521,
                    "date": "2024-01-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4524,
                    "date": "2023-12-05",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4525,
                    "date": "2023-12-19",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4527,
                    "date": "2024-02-18",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4528,
                    "date": "2024-01-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4529,
                    "date": "2023-12-10",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4534,
                    "date": "2023-12-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4535,
                    "date": "2024-02-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4537,
                    "date": "2024-01-16",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4538,
                    "date": "2024-02-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4541,
                    "date": "2024-02-25",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4543,
                    "date": "2023-12-26",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4544,
                    "date": "2024-01-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4546,
                    "date": "2023-12-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": "David",
            "eventSources": [
                {
                    "id": 4509,
                    "date": "2024-02-28",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4512,
                    "date": "2024-01-15",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4515,
                    "date": "2024-01-01",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4567,
                    "date": "2024-01-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                }
            ]
        },
        {
            "listSection": "Dony Marketplace",
            "eventSources": [
                {
                    "id": 4574,
                    "date": "2024-01-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4575,
                    "date": "2024-01-12",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4576,
                    "date": "2024-01-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4578,
                    "date": "2024-01-14",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        }
    ];

    const defaultCustomTodayDate = '2023-12-01';


    //----
    const LABEL_WIDTH = '100px';
    const formRef = useRef<any>(null);
    const formDeleteRef = useRef<any>(null);

    const [data, setData] = useState<any>(null);
    const [updateCalendarData, setUpdateCalendarData] = useState<boolean>(false);
    const [modalFormData, setModalFormData] = useState<any>(null);


    useEffect(() => {

        // update calendar data
        if (!updateCalendarData && defaultData.length > 0) {
            setData(defaultData);
            setUpdateCalendarData(true);
        }
    
    }, [defaultData, defaultCustomTodayDate]);


    return (
        <>
   
            <div style={{ height: '500px', width: '1280px' }}>
                <EventCalendarTimeline
                    customTodayDate={defaultCustomTodayDate}
                    eventsValue={data}
                    tableListSectionTitle="Name"
                    langWeek={['<small class="ps-1">MON</small>', '<small class="ps-1">TUE</small>', '<small class="ps-1">WED</small>', '<small class="ps-1">THU</small>', '<small class="ps-1">FRI</small>', '<small class="ps-1">SAT</small>', '<small class="ps-1">SUN</small>']}
                    cellCloseBtnClassName="d-none"
                    forwardAndBackFillDisabled
                    draggable
                    showWeek
                    autoScroll

                    modalMaxWidth="850px"
                    modalHeading="Settings"
                    modalCloseBtnClassName={'btn btn-secondary'}
                    modalCloseBtnLabel="Cancel"
                    modalSubmitBtnClassName={'btn btn-primary'}
                    modalSubmitBtnLabel={<>Confirm</>}
                    modalSubmitDeleteBtnLabel={<>Delete</>}
                    modalDeleteContent={<>
                    
                        <div ref={formDeleteRef}>
    
                            <input
                                tabIndex={-1}
                                type="hidden"
                                defaultValue={modalFormData ? modalFormData.id : ''}
                                name="post_id"
                            />
                            Are you sure?（ID: {modalFormData ? modalFormData.id : ''}）
                        </div>
    
    
                    
                    </>}
                    modalContent={<>
    
                        <div ref={formRef}>

                        
                            <div className="row mb-3">
                                <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                Row
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        type="text"
                                        defaultValue={modalFormData ? modalFormData.rowData : ''}
                                        name="post_row"
                                    />
                                </div>
                            </div>
                            {/* ///////////// */}
    
    
                            <div className="row mb-3">
                                <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                    Content
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        type="text"
                                        defaultValue={modalFormData ? modalFormData.content : ''}
                                        name="post_title"
                                    />
                                </div>
                            </div>
                            {/* ///////////// */}
    
    
    
                            <div className="row mb-3">
                                <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                    Post Date
                                </div>
                                <div className="col">
                                    <input
                                        className="form-control"
                                        type="date"
                                        defaultValue={modalFormData ? modalFormData.date : ''}
                                        name="post_date"
                                    />
                                </div>
                            </div>
                            {/* ///////////// */}
    
    
                        </div>
    
    
                    </>}
                    onModalEditOpen={(currentData: any) => {
                        setModalFormData({
                            rowData: currentData.rowData,
                            id: currentData.id,
                            content: currentData.data,
                            date: currentData.date
                        })
                    }}
                    onModalDeleteOpen={(currentData: any) => {
                        setModalFormData({
                            rowData: currentData.rowData,
                            id: currentData.id,
                            content: currentData.data,
                            date: currentData.date
                        })
                    }}
                    onModalEditEvent={(currentData: any, closewin: any) => {
                        console.log('currentData: ', currentData);
    
                        validate(formRef.current, {
                            success: 'Successfully',
                            empty: 'Do not empty'
                        }, (formData: any) => {
                            console.log('submit: ', formData);
    
                            // close the modal
                            closewin();
                        });
    
    
                    }}
                    onModalDeleteEvent={(currentData: any, closewin: any) => {
                        validate(formDeleteRef.current, {
                            success: 'Successfully',
                            empty: 'Do not empty'
                        }, (formData: any) => {
                            console.log('submit: ', formData);
    
                            // close the modal
                            closewin();
                        });
    
                    }}
                    onChangeDate={(e: any, currentData: any) => {
                        console.log(e.currentTarget.dataset.date, e.currentTarget.dataset.week); // 2023-11-22, 2
                        console.log(currentData); // {rowData: 'Dony Marketplace', id: 0, date: '2023-11-22'}  or {rowData: 'Dony Marketplace', id: 1, date: '2023-11-20', time: '', data: 'event 1'}
                    }}
                    onChangeMonth={(currentData: any) => {
                        console.log(currentData); // {day: 22, month: 10, year: 2024}
                    }}
                    onChangeYear={(currentData: any) => {
                        console.log(currentData); // {day: 22, month: 10, year: 2030}
                    }}
                    onChangeToday={(currentData: any) => {
                        console.log(currentData); // {day: 22, month: 10, year: 2024}
                    }}

                />
            </div>

                  
        </>
    );
}
```