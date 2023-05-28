# Dynamic Fields


## API

### Dynamic Fields
```js
import DynamicFields from 'react-pure-bootstrap/DynamicFields';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `value` | JSON Object Literals | - | Set a default value for this control. It assigns each form with the `[name]` attribute in the form of an array. Such as: `["title 1","https://example.com/pa1"],["title 2","https://uiux.cc"],["title 3","https://youtube.com"]` <blockquote>Note: This array is written as a string</blockquote> |
| `confirmText` | string | - | The text to display in the confirm box. |
| `iconAdd` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>` | The label of the button to add a new item |
| `iconRemove` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000"/></svg>` | The label of the button to delete current item, if it is not set, only the SVG icon will be included |
| `tempHtmlString` | string \| ReactNode | - | Control group are dynamically added after the button is triggered. Like this: <br />`<><Input placeholder="Title" name="your-title[]" /> <Input ui="medium" placeholder="URL" name="your-url[]" /></>` |
| `maxFields` | number | 10 | Maximum number of control group allowed to be added |
| `onAdd` | function  | - | Call a function when add a control. |
| `onRemove` | function  | - | Call a function when remove a control. |


> **Note:**
> 
> `<DynamicFields />` cannot use the "radio" type, because it will have multiple duplicate names! 
> The following components are recommended: `<Input />`, `<Textarea />`, `<Checkbox />` , `<Switch />`, `<MultiFuncSelect />`, `<Select />`, `<CascadingSelectE2E />`, `<CascadingSelect />`.
>


## Examples

```js
import React from "react";
import DynamicFields from 'react-pure-bootstrap/DynamicFields';
import Input from 'react-pure-bootstrap/Input';


export default () => {

    return (
        <>

            <DynamicFields
                label="String"
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><div className="mt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000"/></svg></div></>}
                tempHtmlString={
                    <>

                        <div className="row">
                            <div className="col">
                                {/* CONTROL */}
                                <Input placeholder="Title" name="appnotice-title[]"/>
                                {/* /CONTROL */}
                            </div>
                            <div className="col">
                                {/* CONTROL */}
                                <Input placeholder="URL" name="appnotice-url[]" />
                                {/* /CONTROL */}
                            </div>
                            <div style={{width: '40px'}}></div>
                        </div>

                    </>
                }
                onAdd={() => {
                    console.log('add');
                }}
                onRemove={() => {
                    console.log('remove');
                }}
            />


        </>
    );
}
```



## Asynchronous Usage

Multiple complex components are used.


```js
import React, { useState, useEffect, useRef } from "react";
import DynamicFields from 'react-pure-bootstrap/DynamicFields';
import Input from 'react-pure-bootstrap/Input';
import MultiFuncSelect from 'react-pure-bootstrap/MultiFuncSelect';
import Switch from 'react-pure-bootstrap/Switch';
import CascadingSelectE2E from 'react-pure-bootstrap/CascadingSelectE2E';

// component styles
import 'react-pure-bootstrap/CascadingSelectE2E/index.css';



class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {


        const demoData = [
            {
                "parent_id": 0,
                "item_code": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "item_code": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }


    // `getListSecond()` must be a Promise Object
    async getListSecond(searchStr = '', limit = 0, parentId = 0) {

  
        const demoData = [
            {
                "parent_id": 1,
                "item_code": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "item_code": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "item_code": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }


}



export default () => {

    const [dynamicFieldsValue, setDynamicFieldsValue] = useState<any[]>([]);

    useEffect(() => {

        const defaultValue = [
            ["title 1","https://example.com/pa1", "", "", "", true],
            ["title 2","https://uiux.cc", "", "Option 2", "value-2", ""],
            ["title 3","https://youtube.com", "Title 2[2],Title 4[5]", "", "", ""]
        ];

        setDynamicFieldsValue(defaultValue);

    }, []);


    return (
        <>

            <DynamicFields
                value={dynamicFieldsValue.map((item: any) => JSON.stringify(item)).join(',')}
                label="String"
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><span className="pt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></span></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000"/></svg></div></>}
                tempHtmlString={
                    <>
                        <div className="row">
                            <div className="col">
                                <Input placeholder="Title" name="appnotice-title[]" onChange={(e: any, onComposition: any) => {
                                    let temp = e.target.value;
                                    if (!onComposition) {
                                        console.log(temp);
                                    }
                                }} />
                            </div>
                            <div className="col">
                                <Input placeholder="URL" name="appnotice-url[]" />
                            </div>
                            <div className="col">
                                    <CascadingSelectE2E
                                    name="appnotice-address[]"
                                    depth={103}
                                    displayResult={true}
                                    valueType="label"
                                    placeholder="Select"
                                    columnTitle={['Heading 1', 'Heading 2']}
                                    loader={<><span>Loading...</span></>}
                                    fetchArray={[
                                        {
                                            "fetchFuncAsync": new DataService,
                                            "fetchFuncMethod": "getListFirst",
                                            "fetchFuncMethodParams": ['', 0, 1],
                                            "fetchCallback": (res) => {

                                                // prevent orginal data
                                                let placesMap: any = {};
                                                for (const val of res) {
                                                    placesMap[val.item_code] = [val.item_name, val.item_type, val.item_code];
                                                }

                                                //
                                                const data = [];
                                                for (const key in placesMap) {
                                                    data.push({
                                                        id: key,
                                                        queryId: placesMap[key][2],
                                                        name: placesMap[key][0],
                                                        type: placesMap[key][1]
                                                    } as never);
                                                }

                                                return data;

                                            }
                                        },
                                        {
                                            "fetchFuncAsync": new DataService,
                                            "fetchFuncMethod": "getListSecond",
                                            "fetchFuncMethodParams": ['', 0, '$QUERY_ID'],
                                            "fetchCallback": (res) => {

                                                // prevent orginal data
                                                let placesMap: any = {};
                                                for (const val of res) {
                                                    placesMap[val.item_code] = [val.item_name, val.item_type, val.item_code];
                                                }

                                                //
                                                const data = [];
                                                for (const key in placesMap) {
                                                    data.push({
                                                        id: key,
                                                        queryId: placesMap[key][2],
                                                        name: placesMap[key][0],
                                                        type: placesMap[key][1]
                                                    } as never);
                                                }

                                                return data;

                                            }
                                        }
                                    ]}
                                />
                            </div>
                            <div className="col">
                                <MultiFuncSelect
                                    placeholder="Select"
                                    name="appnotice-select[]"
                                    options={`
                                        [
                                            {"label": "Option 1","value": "value-1","letter": "option1"},
                                            {"label": "Option 2","value": "value-2","letter": "option2"},
                                            {"label": "Option 3","value": "value-3","letter": "option3"}
                                        ]  
                                    `}
                                />
                            </div>

                            <div style={{width: '80px'}}>
                                <Switch
                                    name="appnotice-switch[]"
                                    value="ok"
                                />

                            </div>  

                            <div style={{width: '40px'}}></div>
                        </div>
                    </>
                }
                
            />

        </>
    )
}
```

