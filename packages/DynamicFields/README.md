# Dynamic Fields



## General

A simple usage, no default value.

> Component `<DynamicFields />` is not re-rendering.



```js
import React from "react";
import DynamicFields from 'funda-ui/DynamicFields';
import Input from 'funda-ui/Input';
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import 'funda-ui/Select/index.css';


type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};


export default () => {

    const LABEL_WIDTH = '200px';

    // For some operations to initialize controls, you can use querySelectorAll to query nodes.
    /*
    setTimeout(() => {
        [].slice.call(document.querySelectorAll(`[data-xxx-control]`)).forEach((field) => {
            field.style.background = 'red';
            //...
        });
    }, 500);
    */


    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const {...rest} = val;
            data = rest;
        } else {
            data = {index: Math.random()};
        }

        const currentRowNum = val !== null ? val.index : undefined;

        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="row align-items-center">
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        User Name
                    </div>
                    <div className="col">
                        {/* CONTROL */}
                        <Input
                            wrapperClassName="position-relative"
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
                        <Select
                            wrapperClassName="position-relative"
                            value={data.role_id}
                            name="role_id[]"
                            placeholder="Select"
                            options={`
                            [
                                {"label": "Option 1","value": "value-1","queryString": "option1"},
                                {"label": "Option 2","value": "value-2","queryString": "option2"},
                                {"label": "Option 3","value": "value-3","queryString": "option3"}
                            ]  
                            `}
                            onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                                const targetId = e2.dataset.id;
                                [].slice.call(document.querySelectorAll(`[name="role_name[]"]`)).forEach((node: any) => {
                                    if (node.id === targetId) {
                                        node.value = (val as OptionConfig).label;
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
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#f00" /></svg></div></>}
                onAdd={(items: HTMLDivElement[], rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    console.log('add', items);
                    // do something

                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string, rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    console.log('remove', items, key, index);
                }}
            />


        </>
    );
}
```


## No spacing

```js
import React from "react";
import DynamicFields from 'funda-ui/DynamicFields';

export default () => {


    return (
        <>

            <DynamicFields
                ...
                wrapperClassName="position-relative"
                ...
            />

             <DynamicFields
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Specify a custom HTML attribute for each row

```js
import React from "react";
import DynamicFields from 'funda-ui/DynamicFields';

export default () => {


    return (
        <>

            <DynamicFields
                ...
                data-my-attr1="1"
                data-my-attr2="2"
                style={...}
                ...
            />

        </>
    );
}
```




## Asynchronous Usage (Use Vanilla JS to manipulate Dom elements)


> Component `<DynamicFields />` is not re-rendering.



```js
import React, { useState, useEffect } from "react";
import DynamicFields from 'funda-ui/DynamicFields';

import Input from 'funda-ui/Input';
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';
import Switch from 'funda-ui/Switch';
import CascadingSelectE2E from 'funda-ui/CascadingSelectE2E';

// component styles
import 'funda-ui/Select/index.css';
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

    const LABEL_WIDTH = '200px';
    const [dynamicFieldsValue, setDynamicFieldsValue] = useState<DynamicFieldsValueProps | null>(null);
    const [dynamicFieldsJsonValue, setDynamicFieldsJsonValue] = useState<any[]>([]);


    // For some operations to initialize controls, you can use querySelectorAll to query nodes.
    /*
    setTimeout(() => {
        [].slice.call(document.querySelectorAll(`[data-xxx-control]`)).forEach((field) => {
            field.style.background = 'red';
            //...
        });
    }, 500);
    */

    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const {...rest} = val;
            data = rest;
        } else {
            data = {index: Math.random()};
        }

        const currentRowNum = val !== null ? val.index : undefined;
        
        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="row align-items-center">
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        User Name
                    </div>
                    <div className="col-auto">
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
                    <div className="col-auto">
                        {/* CONTROL */}
                        <div style={{width: '80%'}}>
                            <Select
                                value={data.role_id}
                                name="role_id[]"
                                data-id={init ? `role_name-dy-${data.index}` : `role_name-dy-%i%`}
                                placeholder="Select"
                                options={`
                                [
                                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                                    {"label": "Option 2","value": "value-2","queryString": "option2"},
                                    {"label": "Option 3","value": "value-3","queryString": "option3"}
                                ]  
                                `}
                                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                                    const targetId = e2.dataset.id;
                                    [].slice.call(document.querySelectorAll(`[name="role_name[]"]`)).forEach((node: any) => {
                                        if (node.id === targetId) {
                                            node.value = (val as OptionConfig).label;
                                        }
                                    });
                                }}
                            />
                        </div>
                        {/* /CONTROL */}
                    </div>
                
                
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role Name
                    </div>
                    <div className="col-auto">
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
                                        let placesMap: Record<string, unknown[]> = {};
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
                                        let placesMap: Record<string, unknown[]> = {};
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


        //initialize JSON value
        setDynamicFieldsJsonValue(myData.map((item: any, index: number) => (
            {
                user_name: item.user_name,
                role_id: item.role_id,
                role_name: item.role_name,
                role_cat: item.role_cat,
                role_disabled: item.role_disabled
            }
        )));



        //initialize default value
        const initData = myData.map((item: any, index: number) => {
            const {...rest} = item;
            return tmpl({...rest, index});
        });

        const tmplData = tmpl(null, false); 

        setDynamicFieldsValue({
            init: initData,
            tmpl: tmplData
        });

    }, []);



    return (
        <>
            <DynamicFields
                key={JSON.stringify(dynamicFieldsJsonValue)}  // Trigger child component update when prop of parent changes
                data={dynamicFieldsValue}
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><div className="mt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#f00" /></svg></div></>}
                onAdd={(items: HTMLDivElement[], rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    console.log('add', items);
                
                    //update `data-id` and `id` attributes of control
                    items.forEach((node: any) => {
                        const keyIndex = node.dataset.key;
                        [].slice.call(node.querySelectorAll(`[name]`)).forEach((field: any) => {
                            if (typeof field.id !== 'undefined' ) field.id = field.id.replace('%i%', keyIndex);
                            if (typeof field.dataset.id !== 'undefined' ) field.dataset.id = field.dataset.id.replace('%i%', keyIndex);
                        });


                        // if using `<File />` component 
                        // ==> <label for="xxxx-%i%-yyyyy">
                        [].slice.call(node.querySelectorAll(`[data-label]`)).forEach((field: any) => {
                            if (field.getAttribute('for') !== null) field.setAttribute('for', field.getAttribute('for').replace('%i%', keyIndex));
                        });

                    });


                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string, rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
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
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import 'funda-ui/Select/index.css';



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


    const updateJsonNode = (inputData: any[], curIndex: number, nodes: any) => {
        
        return inputData.map((v: any, i: number) => {
            if (i === curIndex) {

                const params: any[] = Object.keys(nodes);
                params.forEach((key: string) => {
                    delete v[key];
                });

                const {...rest} = v;
                return {
                    ...nodes,
                    ...rest
                }
            } else {
                return v;
            }

        });
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


    // For some operations to initialize controls, you can use querySelectorAll to query nodes.
    /*
    setTimeout(() => {
        [].slice.call(document.querySelectorAll(`[data-xxx-control]`)).forEach((field) => {
            field.style.background = 'red';
            //...
        });
    }, 500);
    */


    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const {...rest} = val;
            data = rest;
        } else {
            data = {index: Math.random()};
        }

        const currentRowNum = val !== null ? val.index : undefined;
        
        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="row align-items-center">
                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        User Name
                    </div>
                    <div className="col-auto">
                        {/* CONTROL */}
                        <Input
                            value={data.user_name}
                            tabIndex={-1}
                            name="user_name[]"
                            onChange={(e: any) => {
                                const curIndex = getRowIndex(e.currentTarget);

                                // updata row data
                                setRawData((prevState: any[]) => {

                                    const newData = updateJsonNode(prevState, curIndex, {
                                        user_name: e.currentTarget.value
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
                    <div className="col-auto">
                        {/* CONTROL */}
                        <div style={{width: '80%'}}>
                            <Select
                                value={data.role_id}
                                name="role_id[]"
                                placeholder="Select"
                                options={`
                                [
                                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                                    {"label": "Option 2","value": "value-2","queryString": "option2"},
                                    {"label": "Option 3","value": "value-3","queryString": "option3"}
                                ]  
                                `}
                                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                                    const curIndex = getRowIndex(e2);

                                    // updata row data
                                    setRawData((prevState: any[]) => {

                                        const newData = updateJsonNode(prevState, curIndex, {
                                            role_id: (val as OptionConfig).value,
                                            role_name: (val as OptionConfig).label,
                                        });

                                        // data of Dynamic Fields
                                        updateComponentData(newData);

                                        return newData;
                                    });


                                }}
                            />
                        </div>
                        
                        {/* /CONTROL */}
                    </div>
                

                    <div className="text-end" style={{ width: LABEL_WIDTH }}>
                        Role Name
                    </div>
                    <div className="col-auto">
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
                iconRemove={<><div className="position-absolute top-0 end-0 mt-2 mx-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#f00" /></svg></div></>}
                onAdd={(items: HTMLDivElement[], rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    addNewRow();
                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string, rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    deleteRow(index);
                }}
                doNotRemoveDom
            />


        </>
    );
}
```



## Table layout

Use the following properties `innerAppend*` to change the layout to an HTML table.

`styles.scss`:
```css
/* ---------- Table Div  ----------- */
.app-div-table__wrapper {

    --app-div-table-scrollbar-color: rgba(0, 0, 0, 0.2);
    --app-div-table-scrollbar-track: rgba(0, 0, 0, 0);
    --app-div-table-scrollbar-h: 3px;

    overflow-x: auto;

    &::-webkit-scrollbar {
        height: var(--app-div-table-scrollbar-h);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--app-div-table-scrollbar-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--app-div-table-scrollbar-track);
    }
}

.app-div-table {
    .app-div-table__body {
        display: table-row-group;

        &.last .border {
            border-bottom-width: 1px !important;
        }
    }

    .border {
        border-bottom-width: 0 !important;
        border-right-width: 0 !important;
    
        &.last {
            border-right-width: 1px !important;
        }
    }

}
```

`index.tsx`:
```js
import React, { useState } from "react";
import DynamicFields from 'funda-ui/DynamicFields';
import Input from 'funda-ui/Input';
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import 'funda-ui/Select/index.css';


type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};


export default () => {

    // For some operations to initialize controls, you can use querySelectorAll to query nodes.
    /*
    setTimeout(() => {
        [].slice.call(document.querySelectorAll(`[data-xxx-control]`)).forEach((field) => {
            field.style.background = 'red';
            //...
        });
    }, 500);
    */

    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const {...rest} = val;
            data = rest;
        } else {
            data = {index: Math.random()};
        }
        
        const currentRowNum = val !== null ? val.index : undefined;

        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="d-table-cell border py-2 px-2">
                    {/* CONTROL */}
                    <Input
                        wrapperClassName="position-relative"
                        value={data.user_name}
                        tabIndex={-1}
                        name="user_name[]"
                    />
                    {/* /CONTROL */}
                </div>
            
                <div className="d-table-cell border py-2 px-2"  style={{width: '150px'}}>
                    {/* CONTROL */}
                    <Select
                        wrapperClassName="position-relative"
                        value={data.role_id}
                        name="role_id[]"
                        placeholder="Select"
                        options={`
                        [
                            {"label": "Option 1","value": "value-1","queryString": "option1"},
                            {"label": "Option 2","value": "value-2","queryString": "option2"},
                            {"label": "Option 3","value": "value-3","queryString": "option3"}
                        ]  
                        `}
                        onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                            const targetId = e2.dataset.id;
                            [].slice.call(document.querySelectorAll(`[name="role_name[]"]`)).forEach((node: any) => {
                                if (node.id === targetId) {
                                    node.value = (val as OptionConfig).label;
                                }
                            });
                        }}
                    />
                    {/* /CONTROL */}
                </div>
            
                <div className="d-table-cell border py-2 px-2 last" style={{ width: '40px' }}></div>
            {/* ///////////// */}
        </React.Fragment>
    };


    return (
        <>
            <DynamicFields
                wrapperClassName="mb-3 position-relative app-div-table__wrapper"
                btnRemoveWrapperClassName="position-relative d-inline-block align-middle"   // Compatible with safari
                data={{
                    init: [],
                    tmpl: tmpl(null, false)
                } as DynamicFieldsValueProps}
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><div className="mt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mx-2" style={{marginTop: '-10px'}}><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#f00" /></svg></div></>}
                onAdd={(items: HTMLDivElement[], rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    console.log('add', items);
                    // do something

                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string, rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    console.log('remove', items, key, index);
                }}

                innerAppendClassName="app-div-table d-table w-100"
                innerAppendCellClassName="d-table-row"
                innerAppendLastCellClassName="last"
                innerAppendHideClassName="d-none"
                innerAppendBodyClassName="app-div-table__body"
                innerAppendHeadData={[
                    <>User Name</>,
                    <>Role(ID)</>,
                    <>&nbsp;</>
                ]}
                innerAppendHeadRowClassName="d-table-row fw-bold bg-body-tertiary"
                innerAppendHeadCellClassName="d-table-cell border py-2 px-2"  
                innerAppendEmptyContent={<><div className={`app-div-table__body--empty px-2 py-2 border`}>No data.</div></>}
            />


        </>
    );
}
```




## Use custom ADD behavior

Use the `onLoad()` method to get the ID of the add button and then trigger it. 

The current example achieves the following goals:

  - Place the add button in the first row of the table
  - The head of the table is displayed by default
  - Set the style of each column of the table head.


`styles.scss`:
```css
/* ---------- Table Div  ----------- */
.app-div-table__wrapper {

    --app-div-table-scrollbar-color: rgba(0, 0, 0, 0.2);
    --app-div-table-scrollbar-track: rgba(0, 0, 0, 0);
    --app-div-table-scrollbar-h: 3px;

    overflow-x: auto;

    &::-webkit-scrollbar {
        height: var(--app-div-table-scrollbar-h);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--app-div-table-scrollbar-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--app-div-table-scrollbar-track);
    }
}

.app-div-table {
    .app-div-table__body {
        display: table-row-group;

        &.last .border {
            border-bottom-width: 1px !important;
        }
    }

    .border {
        border-bottom-width: 0 !important;
        border-right-width: 0 !important;
    
        &.last {
            border-right-width: 1px !important;
        }
    }

}
```

`index.tsx`:
```js
import React, { useState } from "react";
import DynamicFields from 'funda-ui/DynamicFields';
import Input from 'funda-ui/Input';

// component styles
import 'funda-ui/Select/index.css';


type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};


export default () => {


    const dfRef = useRef<any>(null);
    const [dynamicFieldsInnerAppendHeadInit, setDynamicFieldsInnerAppendHeadInit] = useState<boolean>(false);
    const [dynamicFieldsInnerAppendHeadData, setDynamicFieldsInnerAppendHeadData] = useState<any[]>([]);

    const initInnerAppendHeadData = (addBtnId: string) => {
        if (dynamicFieldsInnerAppendHeadInit) return;

        setDynamicFieldsInnerAppendHeadData([
            <>User Name</>,
            <>User Pass</>,
            <>
                <span className="d-inline-block text-success btn-sm" style={{ transform: 'translateX(4px)', cursor: 'pointer' }} onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (dfRef.current) dfRef.current.addNew();
                }}><svg width="25px" height="25px" viewBox="0 0 24 28" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#146c43" /></svg></span>
            </>
        ]);
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
        
        const currentRowNum = val !== null ? val.index : undefined;

        return <React.Fragment key={'tmpl-' + data.index}>
                {/* ///////////// */}
                <div className="d-table-cell border py-2 px-2">
                    {/* CONTROL */}
                    <Input
                        wrapperClassName="position-relative"
                        value={data.user_name}
                        tabIndex={-1}
                        name="user_name[]"
                    />
                    {/* /CONTROL */}
                </div>

                {/* ///////////// */}
                <div className="d-table-cell border py-2 px-2">
                    {/* CONTROL */}
                    <Input
                        wrapperClassName="position-relative"
                        value={data.user_pass}
                        tabIndex={-1}
                        name="user_pass[]"
                    />
                    {/* /CONTROL */}
                </div>


                <div className="d-table-cell border py-2 px-2 last" style={{ width: '40px' }}></div>
            {/* ///////////// */}

        </React.Fragment>
    };



    return (
        <>
            <DynamicFields
                contentRef={dfRef}
                wrapperClassName="mb-3 position-relative app-div-table__wrapper"
                btnRemoveWrapperClassName="position-relative d-inline-block align-middle"  // Compatible with safari
                data={{
                    init: [],
                    tmpl: tmpl(null, false)
                } as DynamicFieldsValueProps}
                maxFields="10"
                confirmText="Are you sure?"
                iconAdd={<><div className="d-none"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                iconRemove={<><div className="position-absolute top-0 end-0 mx-2" style={{marginTop: '-10px'}}><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#f00" /></svg></div></>}
                onAdd={(items: HTMLDivElement[], rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    console.log('add', items);
                    // do something

                }}
                onRemove={(items: HTMLDivElement[], key: number | string, index: number | string, rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                    console.log('remove', items, key, index);
                }}
                onLoad={(addBtn: string, rootNode: HTMLDivElement, perRowDomClassName: string) => {
             
                    // initialize list head
                    initInnerAppendHeadData(addBtn);
                    setDynamicFieldsInnerAppendHeadInit(true);

                
                }}


                innerAppendClassName="app-div-table d-table w-100"
                innerAppendCellClassName="d-table-row"
                innerAppendLastCellClassName="last"
                innerAppendHideClassName="d-none"
                innerAppendBodyClassName="app-div-table__body"
                innerAppendHeadData={dynamicFieldsInnerAppendHeadData}
                innerAppendHeadRowClassName="d-table-row fw-bold bg-body-tertiary"
                innerAppendHeadCellClassName="d-table-cell border py-2 px-2"  
                innerAppendHeadCellStyles={dynamicFieldsInnerAppendHeadData.map((v: any, i: number) => {
                    if (i === dynamicFieldsInnerAppendHeadData.length - 1) {
                        return { width: "40px" };
                    } else {
                        return { background: "#f60", color: '#fff' };
                    }
                })}
                innerAppendEmptyContent={<><div className={`app-div-table__body--empty px-2 py-2 border`}>No data.</div></>}
                innerAppendHeadRowShowFirst
            />


        </>
    );
}
```



## Example of switching between edit and preview modes


```js
import React, { useEffect, useState } from "react";
import Textarea from 'funda-ui/Textarea';
import DynamicFields from 'funda-ui/DynamicFields';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};

const myData: any[] = [
    {
        myname: `string here\nstring here\nstring here\nstring here\nstring here\nstring here\nstring here\n`
    },
    {
        myname: `long string, long string long string long string long string long string long string long string long stringlong string, long string long string long string long string long string long string long string long stringlong string, long string long string long string long string long string long string long string long stringlong string, long string long string long string long string long string long string long string long stringlong string, long string long string long string long string long string long string long string long stringlong string, long string long string long string long string long string long string long string long string`
    }
];

export default () => {

    const dfRef = useRef<any>(null);
    const [dynamicFieldsValue, setDynamicFieldsValue] = useState<DynamicFieldsValueProps | null>(null);
    const [dynamicFieldsJsonValue, setDynamicFieldsJsonValue] = useState<any[]>([]);
    const [edit, setEdit] = useState<boolean>(false);


    //initialize default value
    const tmpl = (val: any, init: boolean = true) => {
        let data: any = null;
        if (init) {
            const { ...rest } = val;
            data = rest;
        } else {
            data = { index: Math.random() };
        }

        const currentRowNum = val !== null ? val.index : undefined;

        return <React.Fragment key={'tmpl-' + data.index}>
            {/* ///////////// */}
            <div className="row align-items-center">
               <div className="text-end" style={{ width: '55px' }}>
                    ID
                </div>
                <div className="col-auto text-primary" data-id-show>
                    {data.index+1}
                </div>

                <div className="text-end" style={{ width: '150px' }}>
                    Content
                </div>
                <div className="col">
                    {/* CONTROL */}
                    <Textarea
                        placeholder="String"
                        rows={3}
                        value={data.myname}
                        name="myname[]"
                        autoSize
                    />
                    {/* /CONTROL */}
                </div>

                <div style={{ width: '40px' }}></div>
            </div>

            <hr />

            {/* ///////////// */}
        </React.Fragment>
    };

    useEffect(() => {


        if (dfRef.current && myData.length === 0) {
            setTimeout(() => {
                if (dfRef.current.appendedItemsCounter() === 0) dfRef.current.showAddBtn();
            }, 500);
        }

        //initialize JSON value
        setDynamicFieldsJsonValue(myData.map((item: any, index: number) => (
            {
                itemId: index+1,
                myname: item.myname
            }
        )));

        //initialize default value
        const initData = myData.map((item: any, index: number) => {
            const { ...rest } = item;
            return tmpl({ ...rest, index });
        });

        const tmplData = tmpl(null, false);

        setDynamicFieldsValue({
            init: initData,
            tmpl: tmplData
        });

    }, []);



    return (
        <>



            {/* LIST */}
            {dynamicFieldsJsonValue.length > 0 ? <>
                {!edit ? <button tabIndex={-1} type="button" onClick={(e: any) => {
                    setEdit(true);
                    if (dfRef.current) {
                        if (dfRef.current.appendedItemsCounter() === 0) dfRef.current.showAddBtn();
                    }
                }} className="btn btn-outline-primary btn-sm mb-2"><i className="fa-solid fa-pen-to-square" aria-hidden="true"></i> Edit</button> : <button tabIndex={-1} type="button" onClick={(e: any) => {
                    setEdit(false);
                }} className="btn btn-outline-primary btn-sm mb-2"><i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Cancel</button>}
            </> : null}


            {dynamicFieldsJsonValue.length > 0 && !edit ? <><Table
                tableClassName="table table-hover table-bordered"
            >
                
                <TableHead className="table-light">
                    <TableRow>
                        <TableCell scope="col">Id</TableCell>
                        <TableCell scope="col">Content</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dynamicFieldsJsonValue.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row" style={{fontWeight: 'normal'}}>{item.itemId}</TableCell>
                            <TableCell>{item.myname}</TableCell>
                            
                        </TableRow>

                    })}
                </TableBody>
            </Table></> : null}

            <div style={edit || dynamicFieldsJsonValue.length === 0 ? {} : {height: '0', overflow: 'hidden'}}>
                <DynamicFields
                    contentRef={dfRef}
                    key={JSON.stringify(dynamicFieldsJsonValue)}  // Trigger child component update when prop of parent changes
                    data={dynamicFieldsValue}
                    maxFields="10"
                    confirmText="Are you sure?"
                    iconAdd={<><div className="mt-1"><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></div></>}
                    iconRemove={<><div className="position-absolute top-0 end-0 mx-2" style={{ marginTop: '-10px' }}><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#f00" /></svg></div></>}
                    onAdd={(items: HTMLDivElement[], rootNode: HTMLDivElement, btnNode: HTMLAnchorElement, perRowDomClassName: string) => {
                        console.log('add', items);
                    
                        //update `data-id` and `id` attributes of control
                        items.forEach((node) => {
                            const keyIndex = node.dataset.key;
                            [].slice.call(node.querySelectorAll(`[data-id-show]`)).forEach((field) => {
                                field.textContent = parseFloat(Number(keyIndex)+1);
                            });
                        });


                    }}
                />
            </div>
        </>
    );
}

```



## API

### Dynamic Fields
```js
import DynamicFields from 'funda-ui/DynamicFields';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.addNew()`</li><li>`contentRef.current.appendedItemsCounter()`</li><li>`contentRef.current.showAddBtn()`</li><li>`contentRef.current.hideAddBtn()`</li></ol>| - |
| `key` | React.key | - | Trigger child component update when prop of parent changes. <blockquote>Ensure that complex dynamic form components update in real time on the page.</blockquote> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `btnAddWrapperClassName` | string | `align-middle` | The class name of the add button wrapper. | - |
| `btnRemoveWrapperClassName` | string | `align-middle` | The class name of the remove button wrapper. | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `data` | JSON Object | - | Control group are dynamically added after the button is triggered | ✅ |
| `confirmText` | string | - | The text to display in the confirm box. | - |
| `doNotRemoveDom` | boolean | false | Click the delete button without removing the Dom element. You can customize the status to delete each group. | - |
| `iconAddBefore` | ReactNode | - | The button before add. | - |
| `iconAddAfter` | ReactNode | - | The button after add. | - |
| `iconAdd` | string \| ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>` | The label of the button to add a new item | - |
| `iconAddPosition` | `start` \| `end` | `end` | Position of Add button. | - |
| `iconRemove` | string \| ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#f00" /></svg>` | The label of the button to delete current item, if it is not set, only the SVG icon will be included | - |
| `innerAppendClassName` | string | - | Class names of table. <blockquote>Customize the class names of the append area, usually used in table styles</blockquote> | - |
| `innerAppendCellClassName` | string | - | Class names of table cell. <blockquote>Customize the class names of the append area, usually used in table styles</blockquote> | - |
| `innerAppendLastCellClassName` | string | - | Class names of table cell.<blockquote>Customize the class names of the append area, usually used in table styles</blockquote> | - |
| `innerAppendHideClassName` | string | - | Specify a hidden class name.<blockquote>Customize the class names of the append area, usually used in table styles</blockquote> | - |
| `innerAppendBodyClassName` | string | - | Class names of last table cell.<blockquote>Customize the class names of the append area, usually used in table styles</blockquote> | - |
| `innerAppendHeadData` | React.ReactNode[] \| string[] | - | The data of group header content in an HTML table. such as `[<>User Name</>,<>Role(ID)</>,<>&nbsp;</>]` <blockquote>Customize the class names of the append area, usually used in table styles</blockquote> | - |
| `innerAppendHeadRowShowFirst` | boolean | false | The first row of the table head is displayed by default. | - |
| `innerAppendHeadRowClassName` | string | - | Class names of group header in an HTML table. <blockquote>Customize the class names of the append area, usually used in table styles</blockquote>| - |
| `innerAppendHeadCellClassName` | string \| string[] | - | Class names of a cell as the header of a group of table cells. If Array it should be equal to the number of `innerAppendHeadData`. <blockquote>Customize the class names of the append area, usually used in table styles</blockquote>| - |
| `innerAppendHeadCellStyles` | React.CSSProperties[] | false | Use inline styles per cell of table head. It should be equal to the number of `innerAppendHeadData`. such as `[{ background: "#f60" },{ background: "#f60" },{ width: "40px" }]` | - |
| `innerAppendEmptyContent` | React.ReactNode | - | Content displayed when there are no content. If this property is not set, all content will be automatically hidden. <blockquote>Customize the class names of the append area, usually used in table styles</blockquote>| - |
| `maxFields` | number | 10 | Maximum number of control group allowed to be added | - |
| `onAdd` | function  | - | Call a function when add a control. It returns four callback values. <br /> <ol><li>The first is each group of fields (**HTMLDivElement[]**)</li><li> The second is the root div (**HTMLDivElement**)</li><li> The third is the current trigger (**HTMLAnchorElement**)</li><li> The last is classname of the container for each row that is dynamically added (**String**)</li></ol> | - |
| `onRemove` | function  | - | Call a function when remove a control. It returns six callback values. <br /> <ol><li>The first is each group of fields (**HTMLDivElement[]**)</li><li>The second is the current key of removed item (**number** \| **string**)</li><li> The third is the current index of removed item (**number** \| **string**)</li><li> The fourth is the root div (**HTMLDivElement**)</li><li> The fifth is the current trigger (**HTMLAnchorElement**)</li><li> The last is classname of the container for each row that is dynamically added (**String**)</li></ol> | - |
| `onLoad` | function  | - | Call a function when the component has been rendered completely. It returns three callback values. <br /> <ol><li>The first is the button ID of add (**String**)</li><li> The second is the root div (**HTMLDivElement**)</li><li> The last is classname of the container for each row that is dynamically added (**String**)</li></ol> | - |


Element of per row accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.


---

Array Object configuration properties of the `data` (**Array**):

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `init` | React.ReactNode[] | `[]` | Initial fields group with data. | - |
| `tmpl` | React.ReactNode | `null` | An empty fields group. | - |

> [!NOTE]
> You can use the placeholder `%i%` instead of the **key** for your component attributes. <br />It allows you to use Vanilla JS to control the component Dom of each row.


