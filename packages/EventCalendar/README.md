# Event Calendar



## General

```js
import React from "react";
import EventCalendar from 'funda-ui/EventCalendar';

// component styles
import 'funda-ui/EventCalendar/index.css';

export default () => {

    return (
        <>
            
            <EventCalendar 
                cellCloseBtnClassName="d-none" // if hidden delete button, set it to `d-none`
                cellAddBtnClassName="d-none" // if hidden add button, set it to `d-none`
            />
            <EventCalendar 
                customTodayDate="2023-02-14" 
                cellCloseBtnClassName="d-none" // if hidden delete button, set it to `d-none`
                cellAddBtnClassName="d-none" // if hidden add button, set it to `d-none`
            />
                  
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
                langMonths={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langMonthsFull={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langToday="今天"
                ...
            />
                  
        </>
    );
}
```

## Has Modal Dialog & Event Planning

**Features**

 - The capabilities like multi-day events, responsiveness are supported. 
 - Convert a flat piece of data into what a component needs.
 

```js
import React, { useState, useEffect, useRef } from "react";
import EventCalendar from 'funda-ui/EventCalendar';
import Input from 'funda-ui/Input';

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
            if (_name !== null && _name.match(/(\[.*?\])/gi)) {
                const inputs = form.querySelectorAll("[name='" + _name + "']");
                const _arrFieldValue = [];
                for (let j = 0; j < inputs.length; j++) {
                    const _arrField: any = inputs[j];
                    _arrFieldValue.push(_arrField.value);
                }

                _value = _arrFieldValue;
            }


            //if checkbox or radio
            if (fields[i].type === 'radio' || fields[i].type === 'checkbox') {
                if (fields[i].checked === true) {
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
    if (Array.isArray(input)) {
        return input.some((str) => !str.replace(/\s/g, '').length === true)
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
            "date": "2023-11-20", "list": [{
                "id": 1,
                "date": "2023-11-20",
                "time": "",
                "data": "<span class=\"text-warning\">event 1 </span>",
                "eventStyles": {
                    "background": "rgb(255, 240, 227)"
                }
            }]
        },
        {
            "date": "2023-09-22", "list": [{
                "id": 2,
                "date": "2023-09-22",
                "time": "",
                "data": "event 2",
            },
            {
                "id": 3,
                "date": "2023-09-22",
                "time": "",
                "data": "event 2_2",
            }]
        },
        {
            "date": "2023-09-12", "list": [{
                "id": 4,
                "date": "2023-09-12",
                "time": "",
                "data": "event 3",
                "eventStyles": {
                    "background": "rgb(255, 240, 227)"
                }
            }]
        },
        {
            "date": "2023-11-24", "list": [{
                "id": 5,
                "date": "2023-11-24",
                "time": "",
                "data": "<del>very long event string</del> here, very long event string here ",
                "eventStyles": {
                    "background": "rgb(203, 228, 240)"
                }
            }]
        }
    ];
    const defaultCustomTodayDate = '2023-11-16';


    //----
    const LABEL_WIDTH = '100px';
    const formRef = useRef<any>(null);
    const formDeleteRef = useRef<any>(null);

    const [data, setData] = useState<any>(null);
    const [updateCalendarData, setUpdateCalendarData] = useState<boolean>(false);
    const [modalFormData, setModalFormData] = useState<any>(null);
    const [modalOpenType, setModalOpenType] = useState<string>(''); // It is used to determine whether it is NEW or EDIT

    const updateOrginalData = (orginalData: any[], currentData: any, date: string, queryId: string, upadteData: Record<string, any>) => {

        const _perData = orginalData.filter((item: any) => item.date === date);


        //-------------------------
        // add new item
        //-------------------------
        if (modalOpenType === 'new') {

            if (_perData.length === 0) {

                // update current row data
                orginalData.push({
                    date: upadteData.date,
                    list: [upadteData]
                });

            } else {

                if (_perData[0]) {
                    _perData[0].list.push(upadteData);
                }
            }

        } else {
            //-------------------------
            // update item
            //-------------------------
            if (_perData[0]) {
                const _items = _perData[0].list;
                const currentItemObj = _items.find((o: any) => o.id == queryId);

                if (currentItemObj) {
                    for (let key in upadteData) {
                        currentItemObj[key] = upadteData[key];
                    }
                }


                // remove Duplicate objects from JSON Array
                const clean = _items.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.id === item.id)));

                // update current row data
                _perData[0].list = clean;
            }

        }
    };


    const deleteTargetData = (orginalData: any[], currentData: any, date: string, queryId: string) => {

        const _perData = orginalData.filter((item: any) => item.date === date);

        //-------------------------
        // delete old item
        //-------------------------
        if (_perData[0]) {
            const _items = _perData[0].list;

            const currentItemIndex = _items.findIndex((o: any) => o.id == queryId);
            if (currentItemIndex >= 0) {
                _items.splice(currentItemIndex, 1);
            }

            // update current row data
            _perData[0].list = _items;
        }
    };


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
                customTodayDate={defaultCustomTodayDate}
                eventsValue={data}
                modalMaxWidth="850px"
                // cellCloseBtnClassName="d-none" // if hidden delete button, set it to `d-none`
                // cellAddBtnClassName="d-none" // if hidden add button, set it to `d-none`
                modalHeading={<>Settings</>}
                modalCloseBtnClassName={'btn btn-secondary'}
                modalSubmitBtnClassName={'btn btn-primary'}
                modalSubmitDeleteBtnClassName={'btn btn-danger'}
                modalSubmitBtnLabel={<>Confirm</>}
                modalCloseBtnLabel={<>Cancel</>}
                modalSubmitDeleteBtnLabel={<>Delete</>}
                modalDeleteContent={<>

                    <div ref={formDeleteRef}>

                        <Input
                            tabIndex={-1}
                            wrapperClassName=""
                            type="hidden"
                            value={modalFormData ? modalFormData.id : ''}
                            name="post_id"
                        />
                        Are you sure?（ID: {modalFormData ? modalFormData.id : ''}）
                    </div>



                </>}
                modalContent={<>

                    <div ref={formRef}>



                        <div className="row mb-3">
                            <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                Content
                            </div>
                            <div className="col">
                                <Input

                                    type="text"
                                    value={modalFormData ? modalFormData.content : ''}
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
                                <Input

                                    type="date"
                                    value={modalFormData ? modalFormData.date : ''}
                                    name="post_date"
                                />
                            </div>
                        </div>
                        {/* ///////////// */}


                    </div>


                </>}
                onModalEditOpen={(currentData: any, openwin: any, type: 'normal' | 'new') => {
                    setModalOpenType(type);

                    // open the modal
                    openwin();

                    
                    console.log('onModalEditOpen: ', currentData);
                    setModalFormData({
                        id: currentData.id,
                        content: currentData.data,
                        date: currentData.date
                    })
                }}
                onModalEditClose={(currentData: any) => {
                    setModalFormData(null);
                }}
                onModalDeleteOpen={(currentData: any, openwin: any) => {
                    console.log('onModalDeleteOpen: ', currentData);

                    // open the modal
                    openwin();

                    setModalFormData({
                        id: currentData.id,
                        content: currentData.data,
                        date: currentData.date
                    })
                }}
                onModalEditEvent={(currentData: any, closewin: any) => {
                    console.log('edit event:currentData: ', currentData);

                    validate(formRef.current, {
                        success: 'Successfully',
                        empty: 'Do not empty'
                    }, (formData: any) => {
                        console.log('submit: ', formData);



                        // update data
                        const newData: Record<string, any> = {
                            id: Math.random(),
                            date: formData.post_date,
                            time: '',
                            data: formData.post_title,
                            eventStyles: {
                                background: 'rgb(203, 240, 207)'
                            }
                        };

                           
                        setData((prevState: any[]) => {
                            const _data = prevState;

                            updateOrginalData(_data, currentData, currentData.date, currentData.id, newData);

                            return _data;
                        });


                        // close the modal
                        closewin();

                    });


                }}
                onModalDeleteEvent={(currentData: any, closewin: any) => {
                    console.log('delete event:currentData: ', currentData);
                    
                    validate(formDeleteRef.current, {
                        success: 'Successfully',
                        empty: 'Do not empty'
                    }, (formData: any) => {
                        console.log('submit: ', formData);

                        setData((prevState: any[]) => {
                            const _data = prevState;
                            deleteTargetData(_data, currentData, currentData.date, currentData.id);
                    
                            return _data;
                        });

                        //
                        setModalFormData(null);

                        // close the modal
                        closewin();

                    });


                }}
                onChangeDate={(e: any, currentData: any) => {
                    console.log(e.currentTarget.dataset.date, e.currentTarget.dataset.week); // 2023-11-22, 2
                    console.log(currentData); // {id: 0, date: '2023-11-22'}  or {id: 1, date: '2023-11-20', time: '', data: 'event 1'}
                }}
                onChangeMonth={(currentData: any) => {
                    console.log(currentData); // {day: '14', month: '03', year: '2024'}
                }}
                onChangeYear={(currentData: any) => {
                    console.log(currentData); // {day: '14', month: '03', year: '2030'}
                }}
                onChangeToday={(currentData: any) => {
                    console.log(currentData); // {day: '26', month: '03', year: '2024'}
                }}

            />

        </>
    );
}
```





## API

### Event Calendar
```js
import EventCalendar from 'funda-ui/EventCalendar';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.today()`</li><li>`contentRef.current.next()`</li><li>`contentRef.current.prev()`</li><li>`contentRef.current.closeModal()`</li></ol> | - |
| `calendarWrapperClassName` | string | - | The class name of the calendar wrapper. | - |
| `customTodayDate` | string  | - | Specify a default today. such as `2023-11-06` | - |
| `eventsValue` | array  | - | Specify the default value for all events. Its properties are described below in the documentation. such as `[{"date":"2023-11-20","list":[{"id":1,"date":"2023-11-20","time":"","data":"<span class=\"text-warning\">event 1 </span>","eventStyles":{"background":"rgb(255, 240, 227)"}}]},{"date":"2023-09-22","list":[{"id":2,"date":"2023-09-22","time":"","data":"event 2",},{"id":3,"date":"2023-09-22","time":"","data":"event 2_2",}]},{"date":"2023-09-12","list":[{"id":4,"date":"2023-09-12","time":"","data":"event 3","eventStyles":{"background":"rgb(255, 240, 227)"}}]},{"date":"2023-11-24","list":[{"id":5,"date":"2023-11-24","time":"","data":"<del>very long event string</del> here, very long event string here ","eventStyles":{"background":"rgb(203, 228, 240)"}}]}]` | - |
| `langWeek` | array  | `['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']` | Localization in the component of week sequence. <blockquote>Support html tags. <br />such as `['<small>MON</small>', '<small>TUE</small>', '<small>WED</small>', '<small>THU</small>', '<small>FRI</small>', '<small>SAT</small>', '<small>SUN</small>']`</blockquote> | - |
| `langWeekFull` | array  | `['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']` | Localization in the component of full week sequence. <blockquote>This attribute is not valid yet</blockquote> | - |
| `langMonths` | array  | `['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']` | Localization in the component of months sequence. | - |
| `langMonthsFull` | array  | `['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']` | Localization in the component of full months sequence. | - |
| `langToday` | string  | `Today`| Localization in the component of today button. | - |
| `iconRemove` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>` | The label of the button to delete current item, if it is not set, only the SVG icon will be included | - |
| `iconAdd` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 32 32"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-102.000000, -1037.000000)" fill="#000000"><path d="M124,1054 L119,1054 L119,1059 C119,1059.55 118.552,1060 118,1060 C117.448,1060 117,1059.55 117,1059 L117,1054 L112,1054 C111.448,1054 111,1053.55 111,1053 C111,1052.45 111.448,1052 112,1052 L117,1052 L117,1047 C117,1046.45 117.448,1046 118,1046 C118.552,1046 119,1046.45 119,1047 L119,1052 L124,1052 C124.552,1052 125,1052.45 125,1053 C125,1053.55 124.552,1054 124,1054 L124,1054 Z M130,1037 L106,1037 C103.791,1037 102,1038.79 102,1041 L102,1065 C102,1067.21 103.791,1069 106,1069 L130,1069 C132.209,1069 134,1067.21 134,1065 L134,1041 C134,1038.79 132.209,1037 130,1037 L130,1037 Z"></path></g></g></svg>` | The label of the button to add current item, if it is not set, only the SVG icon will be included | - |
| `cellCloseBtnClassName` | string  | - | Specify a class for close button of cell | - |
| `cellCloseBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the close button of cell | - |
| `cellAddBtnClassName` | string  | - | Specify a class for add button of cell | - |
| `cellAddBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the add button of cell | - |
| `onChangeDate` | function  | - | Call a function when a date area is clicked. It returns two values. <br /> <ol><li>The one is an HTMLElement of this area (**HTMLElement**) </li><li>The second parameter is the current value (**JSON Object**) </li></ol> | - |
| `onChangeMonth` | function  | - | Called when the date moves to a new month. The function receives the selected month (0-11). Triggered when the previous, next or month selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeYear` | function  | - | Called when the date moves to a new year. The function receives the selected year. Triggered when the year selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeToday` | function  | - | Called when the date moves to today. Triggered when the today selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onListRenderComplete` | function  | - | Call a function when the list has been rendered completely. It doesn't have any return value | - |
| `modalContent` | ReactNode  | - | **For `<ModalDialog />`** Customize the content in the pop-up window, usually form controls. See the case at the bottom of the document. | - |
| `modalDeleteContent` | ReactNode  | - | **For `<ModalDialog />`** Customize the content in the pop-up window (the part used for deletion), usually a form control, see the case at the bottom of the document. | - |
| `modalHeading` | ReactNode  | - | **For `<ModalDialog />`** Set a window title | - |
| `modalMaskOpacity` | string  | - | **For `<ModalDialog />`** The mask opacity. The value is in the range *0.0* to *1.0* | - |
| `modalMaxWidth` | number \| string  | false | **For `<ModalDialog />`** Custom modal max-width whick need a unit string. Such as: `200px` | - |
| `modalMinHeight` | number \| string  | false | **For `<ModalDialog />`** Custom modal max-height whick need a unit string. Such as: `auto` | - |
| `modalCloseBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for close button | - |
| `modalCloseBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the close button | - |
| `modalSubmitBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for submit button | - |
| `modalSubmitBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the submit button | - |
| `modalSubmitDeleteBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for delete button | - |
| `modalSubmitDeleteBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the delete button | - |
| `onModalEditOpen` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is opened. It returns three callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the opening event (**Function**)</li><li>The last is the type of operation (**String**), the options are `normal` \| `new`</li></ol> | - |
| `onModalEditClose` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is closed. It returns a callback value which is the trigger object It returns only one value which is the current value (**JSON Object**). | - |
| `onModalDeleteOpen` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is opened. It returns two callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the opening event (**Function**)</li></ol> | - |
| `onModalDeleteClose` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is closed. It returns a callback value which is the trigger object It returns only one value which is the current value (**JSON Object**). | - |
| `onModalEditEvent` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is submitted. It returns three callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the closing event (**Function**)</li><li>The last is A function that initializes a table grid (**Function**)</li></ol> | - |
| `onModalDeleteEvent` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is submitted. It returns three callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the closing event (**Function**)</li><li>The last is A function that initializes a table grid (**Function**)</li></ol> | - |
| `onCellMouseEnter` | function  | - | It fires when the mouse pointer enters a cell. It returns only one callback value which is the current cell event (**Event**). | - |
| `onCellMouseLeave` | function  | - | It fires when the mouse pointer leaves a cell. It returns only one callback value which is the current cell event (**Event**). | - |
| `onCellClick` | function  | - | It fires when the mouse pointer clicks a cell. It returns only one callback value which is the current cell event (**Event**). | - |
| `onCellDoubleClick` | function  | - | It fires when the mouse pointer double clicks a cell. It returns only one callback value which is the current cell event (**Event**). | - |
| `onCellMouseUp` | function  | - | It fires when the user presses a key on the keyboard in the table. It returns only one callback value which is the current cell event (**Event**) | - |
| `onKeyPressed` | function  | - | It fires when the user presses a key on the keyboard in the table. It returns only one callback value which is the current cell event (**Event**). | - |

---

Array Object configuration properties of the `eventsValue` (**Array**):

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `date` | string | - | Date of item. such as `2023-11-02` | ✅ |
| `list` | string | - | The data at each time point, representing a cell. <blockquote>Each cell can support multiple pieces of data</blockquote> | ✅ |



Array Object configuration properties of the `eventsValue.list` (**Array**):

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. | ✅ |
| `date` | string | - | Date of item. such as `2023-11-02` <blockquote>Each cell can support multiple pieces of data</blockquote> | ✅ |
| `time` | string | - | Date of item. such as `25:33:00` | ✅ |
| `data` | string \| ReactNode | - | Specify the value for event  <blockquote>Support html tags if "string"</blockquote> | ✅ |
| `dataTooltip` | string | - | Specify the value note for event. It will be displayed in the form of Tooltip.  <blockquote>Support html tags</blockquote> | - |
| `eventStyles` | React.CSSProperties | - | Use inline styles to event area. such as `{ backgroundColor: "red", fontSize: "12px" }` | - |
| `callback` | function | - | Click on the callback function for this item. <blockquote>If this field exists, triggering it will not close the pop-up.</blockquote> | - |

