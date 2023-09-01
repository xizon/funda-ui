# Dynamic Fields


## API

### Dynamic Fields
```js
import DynamicFields from 'funda-ui/DynamicFields';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `data` | JSON Object | - | <strong>(Required)</strong> Control group are dynamically added after the button is triggered |
| `confirmText` | string | - | The text to display in the confirm box. |
| `doNotRemoveDom` | boolean | false | Click the delete button without removing the Dom element. You can customize the status to delete each group. |
| `iconAddBefore` | ReactNode | - | The button before add. |
| `iconAddAfter` | ReactNode | - | The button after add. |
| `iconAdd` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>` | The label of the button to add a new item |
| `iconRemove` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000"/></svg>` | The label of the button to delete current item, if it is not set, only the SVG icon will be included |
| `maxFields` | number | 10 | Maximum number of control group allowed to be added |
| `onAdd` | function  | - | Call a function when add a control. It returns one callback value which is each group of fields (HTMLDivElement[]) |
| `onRemove` | function  | - | Call a function when remove a control. It returns three callback values. <br /> <ol><li>The first is each group of fields (HTMLDivElement[])</li><li>The second is the current key of removed item (number \| string)</li><li> The third is the current index of removed item (number \| string)</li></ol> |



---

Array configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `init` | React.ReactNode[] | `[]` | Initial fields group with data. |
| `tmpl` | React.ReactNode | `null` | An empty fields group. |

> [!NOTE]
> You can use the placeholder `%i%` instead of the **key** for your component attributes. <br />It allows you to use Vanilla JS to control the component Dom of each row.




## Examples

A simple usage, no default value.

> Component `<DynamicFields />` is not re-rendering.



```js
import React from "react";
import DynamicFields from 'funda-ui/DynamicFields';
import Input from 'funda-ui/Input';
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';


type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};


export default () => {

    const LABEL_WIDTH = '200px';

    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const {...rest} = val;
            data = rest;
        } else {
            data = {index: Math.random()};
        }

        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="row">
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        User Name
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <Input
                            value={data.user_name}
                            tabIndex={-1}
                            name="user_name[]"
                        />
                        {/* /CONTROL */}
                    </div>
             
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role(ID)
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <MultiFuncSelect
                            value={data.role_id}
                            name="role_id[]"
                            data={location.pathname}
                            placeholder="Select"
                            options={`
                            [
                                {"label": "Option 1","value": "value-1","queryString": "option1"},
                                {"label": "Option 2","value": "value-2","queryString": "option2"},
                                {"label": "Option 3","value": "value-3","queryString": "option3"}
                            ]  
                            `}
                            onChange={(e: any, e2: any, val: any) => {
                                const targetId = e2.dataset.id;
                                [].slice.call(document.querySelectorAll(`[name="role_name[]"]`)).forEach((node: any) => {
                                    if (node.id === targetId) {
                                        node.value = val.label;
                                    }
                                });
                            }}
                        />
                        {/* /CONTROL */}
                    </div>
                

                    <div style={{ width: '40px' }}></div>
                </div>  

                <hr />

            {/* ///////////// */}
        </React.Fragment>
    };


    return (
        <>
            <DynamicFields
                data={{
                    init: [],
                    tmpl: tmpl(null, false)
                } as DynamicFieldsValueProps}
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><div className="mt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000"/></svg></div></>}
                onAdd={(items: HTMLDivElement[]) => {
                    console.log('add', items);
                    // do something

                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string) => {
                    console.log('remove', items, key, index);
                }}
            />


        </>
    );
}
```



## Asynchronous Usage (Use Vanilla JS to manipulate Dom elements)


> Component `<DynamicFields />` is not re-rendering.



```js
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import DynamicFields from 'funda-ui/DynamicFields';

import Input from 'funda-ui/Input';
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';
import Switch from 'funda-ui/Switch';
import CascadingSelectE2E from 'funda-ui/CascadingSelectE2E';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';
import 'funda-ui/CascadingSelectE2E/index.css';




type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};


const myData: any[] = [
    {
        user_name: 'Test 1',
        role_id: 'value-2',
        role_name: 'Name 1',
        role_cat: '',
        role_disabled: false
    },
    {
        user_name: 'Test 2',
        role_id: 'value-3',
        role_name: 'Name 2',
        role_cat: 'Title 2[2],Title 5[5]',
        role_disabled: true
    }
];



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

    const location = useLocation();
    const LABEL_WIDTH = '200px';
    const [dynamicFieldsValue, setDynamicFieldsValue] = useState<DynamicFieldsValueProps | null>(null);


    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const {...rest} = val;
            data = rest;
        } else {
            data = {index: Math.random()};
        }

        
        
        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="row">
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        User Name
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <Input
                            value={data.user_name}
                            tabIndex={-1}
                            name="user_name[]"
                        />
                        {/* /CONTROL */}
                    </div>
             
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role(ID)
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <MultiFuncSelect
                            value={data.role_id}
                            name="role_id[]"
                            data={location.pathname}
                            data-id={init ? `role_name-dy-${data.index}` : `role_name-dy-%i%`}
                            placeholder="Select"
                            options={`
                            [
                                {"label": "Option 1","value": "value-1","queryString": "option1"},
                                {"label": "Option 2","value": "value-2","queryString": "option2"},
                                {"label": "Option 3","value": "value-3","queryString": "option3"}
                            ]  
                            `}
                            onChange={(e: any, e2: any, val: any) => {
                                const targetId = e2.dataset.id;
                                [].slice.call(document.querySelectorAll(`[name="role_name[]"]`)).forEach((node: any) => {
                                    if (node.id === targetId) {
                                        node.value = val.label;
                                    }
                                });
                            }}
                        />
                        {/* /CONTROL */}
                    </div>
                
                
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role Name
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <Input
                            value={data.role_name}
                            tabIndex={-1}
                            id={init ? `role_name-dy-${data.index}` : `role_name-dy-%i%`}
                            name="role_name[]"
                        />
                        {/* /CONTROL */}
                    </div>


                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role Category
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <CascadingSelectE2E
                            value={data.role_cat}
                            name="role_cat[]"
                            depth={103}
                            displayResult={true}
                            valueType="label"
                            placeholder="Select Category"
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
                                        const data: any[] = [];
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
                                        const data: any[] = [];
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
                            {/* /CONTROL */}
                    </div>

                    <div style={{ width: '80px' }}>
                        <Switch
                            checked={data.role_disabled}
                            name="role_disabled[]"
                            value="ok"
                        />

                    </div> 

                    <div style={{ width: '40px' }}></div>
                </div>  

                <hr />

            {/* ///////////// */}
        </React.Fragment>
    };

    useEffect(() => {

        const initData = myData.map((item: any, index: number) => {
            const {...rest} = item;
            return tmpl({...rest, index});
        });

        const tmplData = tmpl(null, false); 

        setDynamicFieldsValue({
            init: initData,
            tmpl: tmplData
        });

    }, [location]);



    return (
        <>
            <DynamicFields
                data={dynamicFieldsValue}
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><div className="mt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000"/></svg></div></>}
                onAdd={(items: HTMLDivElement[]) => {
                    console.log('add', items);
                
                    //update `data-id` and `id` attributes of control
                    items.forEach((node: any) => {
                        const keyIndex = node.dataset.key;
                        [].slice.call(node.querySelectorAll(`[name]`)).forEach((field: any) => {
                            if (typeof field.id !== 'undefined' ) field.id = field.id.replace('%i%', keyIndex);
                            if (typeof field.dataset.id !== 'undefined' ) field.dataset.id = field.dataset.id.replace('%i%', keyIndex);
                        });
                    });


                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string) => {
                    console.log('remove', items, key, index);
                }}
            />


        </>
    );
}
```


## Asynchronous Usage (Re-render using data changes)


Modify the original data of `<DynamicFields />`, that is the `data` attribute. it will make the whole component re-render. It is often used for states of multiple nested components.


> Once the delete button is clicked, the DOMElement is removed first. You need to set the `doNotRemoveDom` attribute to prevent removing actively.




```js
import React, { useState, useEffect } from "react";
import DynamicFields from 'funda-ui/DynamicFields';

import Input from 'funda-ui/Input';
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';



type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};


const myData: any[] = [
    {
        user_name: 'Test 1',
        role_id: 'value-2',
        role_name: ''
    },
    {
        user_name: 'Test 2',
        role_id: 'value-3',
        role_name: ''
    }
];



export default () => {

    const LABEL_WIDTH = '200px';
    const [rawData, setRawData] = useState<any[]>([]);
    const [dynamicFieldsValue, setDynamicFieldsValue] = useState<DynamicFieldsValueProps | null>(null);


    const getRowIndex = (node: any) => {
        const curItem = node.closest('.dynamic-fields__data__wrapper') as HTMLDivElement;
        return Number(curItem.dataset.index);
    };

    const updateComponentData = (inputData: any[]) => {
        const initData = inputData.map((item: any, index: number) => {
            const {...rest} = item;
            return tmpl({...rest, index});
        });

        const tmplData = tmpl(null, false); 

        setDynamicFieldsValue({
            init: initData,
            tmpl: tmplData
        });

        console.log('rawData: ', inputData);
    };

    const addNewRow = () => {
        // updata row data
        setRawData((prevState: any[]) => {
            const newData = [...prevState, {
                user_name: '',
                role_id: '',
                role_name: ''
            }];

            // data of Dynamic Fields
            updateComponentData(newData);

            return newData;
        });

    };

    const deleteRow = (index: number | string) => {
        // updata row data
        setRawData((prevState: any[]) => {

            // Once the delete button is clicked, the DOMElement is removed first.
            // You need to set the `doNotRemoveDom` attribute to prevent removing actively.
            prevState.splice(index as number, 1);

            // data of Dynamic Fields
            updateComponentData(prevState);

            return prevState;
        });

    };



    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const {...rest} = val;
            data = rest;
        } else {
            data = {index: Math.random()};
        }

        
        
        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="row">
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        User Name
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <Input
                            value={data.user_name}
                            tabIndex={-1}
                            name="user_name[]"
                            onChange={(e: any) => {
                                const curIndex = getRowIndex(e.currentTarget);

                                // updata row data
                                setRawData((prevState: any[]) => {
                                    const newData = prevState.map((v: any, i: number) => {
                                        if (i === curIndex) {
                                            const {user_name, ...rest} = v;
                                            return {
                                                user_name: e.currentTarget.value,
                                                ...rest
                                            }
                                        } else {
                                            return v;
                                        }
    
                                    });

                                    // data of Dynamic Fields
                                    updateComponentData(newData);

                                    return newData;
                                });

                            }}
                        />
                        {/* /CONTROL */}
                    </div>
             
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role(ID)
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <MultiFuncSelect
                            value={data.role_id}
                            name="role_id[]"
                            data={location.pathname}
                            placeholder="Select"
                            options={`
                            [
                                {"label": "Option 1","value": "value-1","queryString": "option1"},
                                {"label": "Option 2","value": "value-2","queryString": "option2"},
                                {"label": "Option 3","value": "value-3","queryString": "option3"}
                            ]  
                            `}
                            onChange={(e: any, e2: any, val: any) => {
                                const curIndex = getRowIndex(e2);

                                // updata row data
                                setRawData((prevState: any[]) => {
                                    const newData = prevState.map((v: any, i: number) => {
                                        if (i === curIndex) {
                                            const {role_id, role_name, ...rest} = v;
                                            return {
                                                role_id: val.value,
                                                role_name: val.label,
                                                ...rest
                                            }
                                        } else {
                                            return v;
                                        }
    
                                    });


                                    // data of Dynamic Fields
                                    updateComponentData(newData);

                                    return newData;
                                });


                            }}
                        />
                        {/* /CONTROL */}
                    </div>
                

                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role Name
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <Input
                            value={data.role_name}
                            tabIndex={-1}
                            name="role_name[]"
                        />
                        {/* /CONTROL */}
                    </div>



                    <div style={{ width: '40px' }}></div>
                </div>  

                <hr />

            {/* ///////////// */}
        </React.Fragment>
    };

    const initData = myData.map((item: any, index: number) => {
        const {...rest} = item;
        return tmpl({...rest, index});
    });

    const tmplData = tmpl(null, false); 


    useEffect(() => {
        setRawData(myData);
    }, []);




    return (
        <>
            <DynamicFields
                data={dynamicFieldsValue ? dynamicFieldsValue : {
                    init: initData,
                    tmpl: tmplData
                }}
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><div className="mt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000"/></svg></div></>}
                onAdd={(items: HTMLDivElement[]) => {
                    addNewRow();
                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string) => {
                    deleteRow(index);
                }}
                doNotRemoveDom
            />


        </>
    );
}
```