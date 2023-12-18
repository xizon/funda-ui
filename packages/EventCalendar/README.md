# Event Calendar


## API

### Event Calendar
```js
import EventCalendar from 'funda-ui/EventCalendar';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `customTodayDate` | string  | - | Specify a default today. such as `2023-11-16` |
| `eventsValue` | array  | - | Specify the default value for all events. Its properties are described below in the documentation. such as `[{id:1,date:'2023-11-20',time:'',data:'event 1'},{id:2,date:'2023-9-22',time:'',data:'event 2'},{id:3,date:'2023-09-12',time:'',data:'<del>very long event string</del> here, event 3',eventStyles:{background:'rgb(255, 240, 227)'}}]` |
| `langWeek` | array  | `['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']` | Localization in the component of week sequence. |
| `langWeekFull` | array  | `['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']` | Localization in the component of full week sequence. |
| `langMonths` | array  | `['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']` | Localization in the component of months sequence. |
| `langMonthsFull` | array  | `['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']` | Localization in the component of full months sequence. |
| `langToday` | array  | `Today`| Localization in the component of today button. |
| `iconRemove` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>` | The label of the button to delete current item, if it is not set, only the SVG icon will be included |
| `onChangeDate` | function  | - | Call a function when a date area is clicked. It returns only one value which is the current value (**JSON Object**)  |
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
| `eventStyles` | React.CSSProperties | - | **(Optional)**  Use inline styles to event area. such as `{ backgroundColor: "red", fontSize: "12px" }` |



## Examples

```js
import React from "react";
import EventCalendar from 'funda-ui/EventCalendar';

// component styles
import 'funda-ui/EventCalendar/index.css';

export default () => {

    return (
        <>
            
            <EventCalendar />
            <EventCalendar customTodayDate="2023-02-14" />
                  
        </>
    );
}
```


## Change language

```js
import React from "react";
import EventCalendar from 'funda-ui/EventCalendar';

// component styles
import 'funda-ui/EventCalendar/index.css';

export default () => {

    return (
        <>
            <EventCalendar 
                langWeek={['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']}
                langWeekFull={['周一', '周二', '周三', '周四', '周五', '周六', '周日']}
                langMonths={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langMonthsFull={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langToday="今天"
            />
                  
        </>
    );
}
```

## Has Modal Dialog & Event Planning

The capabilities like multi-day events, responsiveness are supported.

```js
import React, { useState, useEffect, useRef } from "react";
import EventCalendar from 'funda-ui/EventCalendar';

// component styles
import 'funda-ui/EventCalendar/index.css';


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
            id: 1,
            date: '2023-11-20',
            time: '',
            data: 'event 1'
        },
        {
            id: 2,
            date: '2023-9-22',
            time: '',
            data: 'event 2'
        },
        {
            id: 3,
            date: '2023-09-12',
            time: '',
            data: 'event 3',
            eventStyles: {
                background: 'rgb(255, 240, 227)'
            }
        },
        {
            id: 4,
            date: '2023-11-24',
            time: '',
            data: '<del>very long event string</del> here, very long event string here ',
            eventStyles: {
                background: 'rgb(203, 228, 240)'
            }
        }
    ];
    const defaultCustomTodayDate = '2023-11-16';


    //----
    const LABEL_WIDTH = '100px';
    const formRef = useRef<any>(null);
    const formDeleteRef = useRef<any>(null);

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
   
            <EventCalendar
                customTodayDate={data ? data.date : defaultCustomTodayDate}
                eventsValue={data}
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
                            defaultValue={data ? data.id : ''}
                            name="post_id"
                        />
                        Are you sure?（ID: {data ? data.id : ''}）
                    </div>


                
                </>}
                modalContent={<>

                    <div ref={formRef}>


                        <div className="row mb-3">
                            <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                Content
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    type="text"
                                    defaultValue={data ? data.content : ''}
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
                                    defaultValue={data ? data.date : ''}
                                    name="post_date"
                                />
                            </div>
                        </div>
                        {/* ///////////// */}


                    </div>


                </>}
                onModalEditOpen={(currentData: any) => {
                    setData({
                        id: currentData.id,
                        content: currentData.data,
                        date: currentData.date
                    })
                }}
                onModalDeleteOpen={(currentData: any) => {
                    setData({
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
                onChangeDate={(currentData: any) => {
                    console.log(currentData); // {id: 0, date: '2023-11-22'}  or {id: 1, date: '2023-11-20', time: '', data: 'event 1'}
                }}
                
            />       

                  
        </>
    );
}

```