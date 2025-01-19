# Multiple Select

> ✌🏻 You can find the final value of this component by setting the `name` property, similar to **document.querySelector('[name="custom-control-name"]').value**

> The components must be wrapped in a container with a height.

## General

If **useState** is used, dragging and sorting will not work:

 - a) use **useMemo** to solve this problem, refer to [Safe Asynchronous Example](#safe-asynchronous-example)
 - b) Or add the property `unattachedSelect` to support right-side dragging without being affected by **useState**, refer to [Unattached Selected Options](#unattached-selected-options)


```js
import React, { useEffect } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';

export default () => {

    const options = [
        {"id": 1, "label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
        {"id": 2, "label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
        {"id": 3, "label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
        {"id": 4, "label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4","disabled":true}
    ];

    useEffect(() => { 
        document.getElementById('demo-res-1').innerHTML = 'value-1, value-3';
        document.getElementById('demo-res-2').innerHTML = 'Option 1, Option 3';
    }, []);

    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                draggable
                handleHide
                dragMode="block"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items (Support drag sorting)"
                selectedHeaderNote="{items_num} items selected"
                value={val}
                options={options}
                onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                    console.log(e, data, dataStr, currentData, type, res);
                    /*
                        <li data-index="0" data-label="Option 1" data-value="value-1">...</li>,
                        ['value-3', 'value-2'],
                        '[value-3][value-2]',
                        {"id": 3, "label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                        add
                */
                    document.getElementById('demo-res-1').innerHTML = res.map((v) => v.value).join(',');
                    document.getElementById('demo-res-2').innerHTML = res.map((v) => v.label).join(',');

                }}
                />
            </div>
                
            <small className="border" id="demo-res-1"></small>
            <br />
            <small className="border" id="demo-res-2"></small>

        </>
    );
}
```


## Unattached Selected Options

The selected value is not affected by the `options` passed in. Setting the `unattachedSelect` property allows the value on the right to remain unaffected when the left option is updated.




```js
import React, { useState } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';

export default () => {

    const options = [
        {"id": 1, "label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
        {"id": 2, "label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
        {"id": 3, "label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
        {"id": 4, "label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4","disabled":true}
    ];
    const [defaultOpt, setDefaultOpt] = useState<any[]>(options);
    const [val, setVal] = useState<string>('[value-1][value-3]');
    const [valLabels, setValLabels] = useState<string[]>([]);
    const [allOptions, setAllOptions] = useState<any[]>(options);

    const uniqueArr = (arr: any[]) => {
        return arr.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.value === item.value)));
    };


    return (
        <>

        <a 
            href="#"
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                const newOpt = [
                    {"id": 10, "label": "New Option 123","value": "value-123","queryString": ""},
                    {"id": 11, "label": "New Option 456","value": "value-456","queryString": ""}
                ];

                setDefaultOpt(newOpt);
                setAllOptions((prevState: any[]) => {
                    let _data = [...prevState, ...newOpt];
                    return uniqueArr(_data);
                });
            }}
        >Change left options(1)</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a 
            href="#"
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                const newOpt = [
                    {"id": 12, "label": "New Option 789","value": "value-789","queryString": ""},
                    {"id": 13, "label": "New Option 666","value": "value-666","queryString": ""}
                ];
                setDefaultOpt(newOpt);
                setAllOptions((prevState: any[]) => {
                    let _data = [...prevState, ...newOpt];
                    return uniqueArr(_data);
                });
            }}
        >Change left options(2)</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a 
            href="#"
            onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                setDefaultOpt(options);
                setAllOptions((prevState: any[]) => {
                    let _data = [...prevState, ...options];
                    return uniqueArr(_data);
                });
            }}
        >Change original options</a>
       


        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                draggable
                handleHide
                dragMode="block"
                unattachedSelect
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items (Support drag sorting)"
                selectedHeaderNote="{items_num} items selected"
                value={val}
                options={defaultOpt}
                onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                    console.log(e, data, dataStr, currentData, type, res);
                    /*
                        <li data-index="0" data-label="Option 1" data-value="value-1">...</li>,
                        ['value-3', 'value-2'],
                        '[value-3][value-2]',
                        {"id": 3, "label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                        add,
                        [{...},{...}]
                    */

                    setVal(dataStr);

                    const _labelVal: string[] = [];
                    data.forEach((v: string) => {
                        const curItem = allOptions.find((item: any) => item.value == v);
                        if (typeof curItem !== 'undefined') {
                            _labelVal.push(curItem.label);
                        }
                    });
                    setValLabels(_labelVal);


                }}
            />
        </div>
   
        <p>{val}</p>
        <p>{valLabels.join(',')}</p>
          


        </>
    );
}
```



## Tree Hierarchy

```js
import React, { useEffect, useState } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';



class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parentId": 0,
                "id": 1,
                "label": "Title 1",
                "listItemLabel": "Title 1",
                "value": "1",
                "queryString": "",
                "typeName": "web"
            },
            {
                "parentId": 0,
                "id": 2,
                "label": "Title 2",
                "listItemLabel": "Title 2",
                "value": "2",
                "queryString": "",
                "typeName": "dev"
            },
            // level 2
            {
                "parentId": 1,
                "id": 3,
                "label": "Title 3",
                "listItemLabel": "Title 3",
                "value": "3",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 1,
                "id": 4,
                "label": "Title 4",
                "listItemLabel": "Title 4",
                "value": "4",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 2,
                "id": 5,
                "label": "Title 5",
                "listItemLabel": "Title 5",
                "value": "5",
                "queryString": "",
                "typeName": "dev"
            },
            // level 3
            {
                "parentId": 4,
                "id": 6,
                "label": "Title 6",
                "listItemLabel": "Title 6",
                "value": "6",
                "queryString": "",
                "typeName": "web/ui/photoshop"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}


export default () => {

    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parentId: item.parentId,
                    label: item.label,
                    value: String(item.id),
                    queryString: '',
                    otherAttr: item.typeName
                }
            });
            setList(_data);

        });
    }, []);



    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                draggable
                handleHide
                dragMode="block"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items (Support drag sorting)"
                selectedHeaderNote="{items_num} items selected"
                options={list}
                onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                    console.log(e, data, dataStr, currentData, type, res);
                }}
            />
        </div>
          

        </>
    );
}
```



**You could also use these following properties directly: `indentation` and `doubleIndent`**


```js
import React, { useEffect, useState } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';



class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parentId": 0,
                "id": 1,
                "label": "Title 1",
                "listItemLabel": "Title 1",
                "value": "1",
                "queryString": "",
                "typeName": "web"
            },
            {
                "parentId": 0,
                "id": 2,
                "label": "Title 2",
                "listItemLabel": "Title 2",
                "value": "2",
                "queryString": "",
                "typeName": "dev"
            },
            // level 2
            {
                "parentId": 1,
                "id": 3,
                "label": "Title 3",
                "listItemLabel": "Title 3",
                "value": "3",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 1,
                "id": 4,
                "label": "Title 4",
                "listItemLabel": "Title 4",
                "value": "4",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 2,
                "id": 5,
                "label": "Title 5",
                "listItemLabel": "Title 5",
                "value": "5",
                "queryString": "",
                "typeName": "dev"
            },
            // level 3
            {
                "parentId": 4,
                "id": 6,
                "label": "Title 6",
                "listItemLabel": "Title 6",
                "value": "6",
                "queryString": "",
                "typeName": "web/ui/photoshop"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}


export default () => {

    const [list, setList] = useState<any[]>([]);


    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parentId: item.parentId,
                    label: item.label,
                    listItemLabel: `${item.listItemLabel}`,
                    value: String(item.id),
                    queryString: ''
                }
            });
         
            setList(_data);

        });
    }, []);



    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                draggable
                handleHide
                dragMode="block"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items (Support drag sorting)"
                selectedHeaderNote="{items_num} items selected"
                options={list}
                onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                    console.log(e, data, dataStr, currentData, type, res);
                }}
                indentation="-"
                doubleIndent
            />
        </div>
          

        </>
    );
}
```


## Collapsible Tree Hierarchy


```js
import React, { useEffect, useState } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';



class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parentId": 0,
                "id": 1,
                "label": "Title 1",
                "listItemLabel": "Title 1",
                "value": "1",
                "queryString": "",
                "typeName": "web"
            },
            {
                "parentId": 0,
                "id": 2,
                "label": "Title 2",
                "listItemLabel": "Title 2",
                "value": "2",
                "queryString": "",
                "typeName": "dev"
            },
            // level 2
            {
                "parentId": 1,
                "id": 3,
                "label": "Title 3",
                "listItemLabel": "Title 3",
                "value": "3",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 1,
                "id": 4,
                "label": "Title 4",
                "listItemLabel": "Title 4",
                "value": "4",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 2,
                "id": 5,
                "label": "Title 5",
                "listItemLabel": "Title 5",
                "value": "5",
                "queryString": "",
                "typeName": "dev"
            },
            // level 3
            {
                "parentId": 4,
                "id": 6,
                "label": "Title 6",
                "listItemLabel": "Title 6",
                "value": "6",
                "queryString": "",
                "typeName": "web/ui/photoshop"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}


export default () => {

    const [list, setList] = useState<any[]>([]);


    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parentId: item.parentId,
                    label: item.label,
                    listItemLabel: `${item.listItemLabel}`,
                    value: String(item.id),
                    queryString: ''
                }
            });
         
            setList(_data);

        });
    }, []);



    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                draggable
                handleHide
                dragMode="block"

                //
                alternateCollapse
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items (Support drag sorting)"
                selectedHeaderNote="{items_num} items selected"
                options={list}
                onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                    console.log(e, data, dataStr, currentData, type, res);
                }}
            />
        </div>
          

        </>
    );
}
```



## Asynchronous Usage via HTTP Request

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import axios from 'axios';
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';



class DataService {
    
    // `getList()` must be a Promise Object
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        return {
            code: 0,
            message: 'OK',
            data: [
                {id: 1, item_name: 'foo', item_code: 'bar'},
                {id: 2, item_name: 'foo2', item_code: 'bar2'},
                {id: 3, item_name: 'foo3', item_code: 'bar3'}
            ]
        };
    }


    async getListUseAxios(searchStr = '', limit = 0) {
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
        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                draggable
                handleHide
                dragMode="block"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items (Support drag sorting)"
                selectedHeaderNote="{items_num} items selected"
                value="[bar2]"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item: any, index: number) => {
                        return {
                            id: item.id,
                            label: item.item_name,
                            value: item.item_code,
                            queryString: "",
                            disabled: index === res.length - 1 ? true : false
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar","disabled": false},
                        {"label": "foo2","value": "bar2","disabled": false},
                        {"label": "foo3","value": "bar3","disabled": true}
                    ]  
                    */

                    return formattedData;
                }}
                onFetch={(res) => {
                    console.log('onFetch: ', res);

                }}
                onChange={(e: any, data: any[], dataStr: string, currentData: any, type: string) => {
                    console.log(e, data, dataStr, currentData, type, res);
                }}
            />

        </div>
          


        </>
    );
}
```




## Safe Asynchronous Example

When a `useState()` in a child component changes state, it will cause the entire parent component to re-render, resulting in invalidation such as **checkbox**.

At this time, we need to use `useMemo()` to wrap this subcomponent to avoid problems caused when the child component triggers a method of `useState()` of the parent component.



```js
import React, { useState, useMemo } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';


// DO NOT move `useMemo` to component
function MemoMultipleSelect(props: any) {
    const {val, callback} = props;
    return useMemo(() => {
        return <MultipleSelect 
                name="name"
                draggable
                handleHide
                dragMode="block"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items (Support drag sorting)"
                selectedHeaderNote="{items_num} items selected"
                value={val}
                options={
                    [
                        {"id": 1, "label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                        {"id": 2, "label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                        {"id": 3, "label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                        {"id": 4, "label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4","disabled":true}
                    ]  
                }
                onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                    callback(dataStr);
                }}
            />

    }, []);
}

export default () => {

    const [myMultipleSelect, setMyMultipleSelect] = useState('Option 3');  // default value is label value

    return (
        <>
        <div className="mb-3" style={{height: '300px'}}>
            <MemoMultipleSelect 
                val={myMultipleSelect}
                name="name"
                callback={setMyMultipleSelect} 
            />
            
        </div>
          
            
        </>
    );
}

```




## Implement the option to save other data

Use the `extendedContent` field to extend the options.


```js
import React, { useEffect, useState, useRef } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';
import Input from 'funda-ui/Input';

// component styles
import 'funda-ui/MultipleSelect/index.css';


class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parentId": 0,
                "id": 1,
                "label": "Title 1",
                "listItemLabel": "Title 1",
                "value": "1",
                "queryString": "",
                "typeName": "web"
            },
            {
                "parentId": 0,
                "id": 2,
                "label": "Title 2",
                "listItemLabel": "Title 2",
                "value": "2",
                "queryString": "",
                "typeName": "dev"
            },
            // level 2
            {
                "parentId": 1,
                "id": 3,
                "label": "Title 3",
                "listItemLabel": "Title 3",
                "value": "3",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 1,
                "id": 4,
                "label": "Title 4",
                "listItemLabel": "Title 4",
                "value": "4",
                "queryString": "",
                "typeName": "web/ui"
            },
            {
                "parentId": 2,
                "id": 5,
                "label": "Title 5",
                "listItemLabel": "Title 5",
                "value": "5",
                "queryString": "",
                "typeName": "dev"
            },
            // level 3
            {
                "parentId": 4,
                "id": 6,
                "label": "Title 6",
                "listItemLabel": "Title 6",
                "value": "6",
                "queryString": "",
                "typeName": "web/ui/photoshop"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}


function MemoMultipleSelect(props: any) {
    const { list, callback } = props;

    return useMemo(() => {
        return <MultipleSelect
            name="name"
            draggable
            handleHide
            dragMode="block"
            availableHeaderTitle="Select One Item"
            selectedHeaderTitle="Selected Items (Support drag sorting)"
            selectedHeaderNote="{items_num} items selected"
            options={list}
            onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                console.log(e, data, dataStr, currentData, type, res);
                callback(res);
                
            }}
        />
    }, [list]);


}

export default () => {
    const [selected, setSelected] = useState<any[]>([]);
    const [list, setList] = useState<any[]>([]);
    const formRef = useRef<any>(null);
    /**
     * Serialize form values
     * @param  {Array} types   - An array of field strings.
     * @param {HTMLFormElement} form      - Element
     * @returns Array
     */
    function serializeArray(form: HTMLFormElement, types = ['input', 'textarea', 'select', 'checkbox', 'progress', 'datalist']) {

        const objects: any = [];
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
        const clean = objects.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.name === item.name)));

        return clean;
    }


    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {

            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parentId: item.parentId,
                    label: item.label,
                    value: String(item.id),
                    queryString: '',
                    extendedContent: <>
                        <div className="row g-0 align-items-center">
                            <div className="col-auto">
                                Index:
                            </div>
                            <div className="col-auto">
                                <Input
                                    wrapperClassName=""
                                    tabIndex={-1}
                                    type="text"
                                    name="init_txt[]"
                                    defaultValue=""
                                    size={5}
                                    style={{
                                        padding: 0,
                                        fontSize: '0.75rem',
                                        marginRight: '.5rem',
                                        background: '#ededed',
                                        borderColor: 'rgba(255, 255, 255, .4)'
                                    }}          
                                    />
                            </div>
                        </div>
                    </>
                  
                }
            });

            setList(_data);

        });
    }, []);



    return (
        <>

            <a
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    const fieldsData: any = serializeArray(formRef.current);
                    alert(JSON.stringify(fieldsData));
                }}
            >Click here to show Form Data</a>
            &nbsp;|&nbsp;
            <a
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    const ids = selected.map((v: any) => v.id);
                    ids.forEach((val: number, key: number) => {
                        const curInputSortSelected = document.querySelector('#m-select-v2__ext-' + val + '-selected [name="init_txt[]"]');
                        if (curInputSortSelected !== null) (curInputSortSelected as HTMLInputElement).value = (key + 1).toString().padStart(3, '0');
                    });
                }}
            >Bulk Indexing</a>

            

            <form ref={formRef}>
                <Input type="text" name="my_text" value={'test'} />

                <div className="mb-3" style={{ height: '300px' }}>
                    <MemoMultipleSelect list={list} callback={(res: any[]) => {
                        setSelected(res);
                    }} />
                </div>   
            </form>



        </>
    );
}
```


## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
 import React, { useState, useRef } from 'react';

import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';


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
                    if (conRef.current) conRef.current.set([
                        {"id": 2, "label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                        {"id": 3, "label": "Option 3","value": "value-3","queryString": "option3"}
                    ], () => { console.log('callback') });
                }}
            >Set Custom Value</a>


            <div className="mb-3" style={{ height: '300px' }}>
                <MultipleSelect
                    contentRef={conRef}
                    value="[value-2]"
                    placeholder="MultipleSelect"
                    name="name"
                    draggable
                    handleHide
                    dragMode="block"
                    options={`
                    [
                        {"id": 1, "label": "Option 1","value": "value-1","queryString": "option1"},
                        {"id": 2, "label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                        {"id": 3, "label": "Option 3","value": "value-3","queryString": "option3"},
                        {"id": 4, "label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                    ]  
                    `}
                    onChange={(e: HTMLElement | null, data: any[], dataStr: string, currentData: any, type: string, res: any[]) => {
                        console.log(e, data, dataStr, currentData, type, res);
                    }}
                />
            </div>
                    


        </>
    )
}
```


## Drag and Drop Sort

It is valid when `draggable` exists. You can set more properties, such as: `onDrag`.


```js

export default () => {

    const [sortedData, setSortedData] = useState<any[]>([]);

    return (
        <>
           
   

            <small>{JSON.stringify(sortedData)}</small>
        </>
    );
}
```



## API

### Multiple Select
```js
import MultipleSelect from 'funda-ui/MultipleSelect';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set([{"id": 1, "label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote> | - |
| `wrapperClassName` | string | `mb-3` | The class name of the control wrapper. | - |
| `childClassName` | string | - | The additional class name of the child on `<ul>`. | - |
| `wrapperMinHeight` | string | - | Minimum height of wrapper. If not specified, the default value in css will be used, which is **315px** | - |
| `wrapperMinWidth` | string | - | Minimum width of wrapper. If not specified, the default value in css will be used, which is **350px** | - |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. | - |
| `availableHeaderTitle` | string  | - | Header title for available areas. <blockquote>Support html tags</blockquote> | - |
| `selectedHeaderTitle` | string  | - | Header title for selected areas. <blockquote>Support html tags</blockquote> | - |
| `selectedHeaderNote` | string  | - | Identification text for the selected item area, using `{items_num}` as placeholder. <blockquote>Support html tags</blockquote> | - |
| `selectedResultReverse` | boolean | false | The results of the selection are displayed in reverse. | - |
| `removeAllBtnLabel` | string \| ReactNode  | `Remove all` | Label of remove all button | - |
| `addAllBtnLabel` | string \| ReactNode  | `Add all` | Label of add all button | - |
| `iconAdd` | string \| ReactNode  | `<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>` | The label of the button to add a new item | - |
| `iconRemove` | string \| ReactNode  | `<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>` | The label of the button to delete current item | - |
| `options` | JSON Object Literals \| JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"id":1,"label":"Title 1","listItemLabel":"Title 1","value":1,"queryString":"","disabled":true},{"id":2,"label":"Title 2","listItemLabel":"Title 2","value":2,"queryString":"","otherAttr":"web/ui"}]`| - |
| `unattachedSelect` | boolean  | false | The selected value is not affected by the `options` passed in. | - |
| `defaultValue` | string | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. | - |
| `value` | string | - | Set a default value for this control. Please separate multiple values with square brackets. Such as `[value1][value2][value3]` <blockquote>If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`tag1,tag2,tag3`</blockquote> | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |  
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onFetch`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> <hr /> <blockquote>!!!Note: Using `data` and `value` at the same time may cause two different parameter transfers, which will affect the final rendering. Please choose the appropriate usage based on your business.</blockquote>| - |
| `dragMode` | `handle` | `handle` \| `block` | Whether it is triggered using a handle or a whole area. | - |
| `draggable` | boolean | true | Indicates whether the content area can be dragged. | - |
| `handleHide` | boolean | false | Hide the drag handle. | - |
| `handlePos` | `left` | `left` \| `right` | The drag handle position. | - |
| `handleIcon` | string  | `☰` | Specify an icon of drag handle. | - |
| `indentation` | string  | - | Set hierarchical indentation placeholders. | - |
| `doubleIndent` | boolean  | false | Set double indent effect. | - |
| `alternateCollapse` | boolean | false | Mutually exclusive alternate expansion between the first levels. | - |
| `arrow` | ReactNode  | `<svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>` | Set an arrow of control | - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (**Array**) | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns six callback values. <br /> <ol><li>The first is the control of current checkbox</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li><li>The fourth is the data (Exposes the JSON format data) about the option. (**JSON Object**)</li><li>The fifth is Add or delete operation identifier, value is `add` or `remove`. (**String**)</li><li>The last is the result of full data (**Array**)</li></ol>  | - |
| `onAddAll` | function  | - | Triggers when all items are added. It returns four callback values. <br /> <ol><li>The first is the Button Event (**Event**)</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li><li>The last is the result of full data (**Array**)</li></ol>  | - |
| `onRemoveAll` | function  | - | Triggers when all items are removed. It returns four callback values. <br /> <ol><li>The first is the Button Event (**Event**)</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li><li>The last is the result of full data (**Array**)</li></ol>  | - |



It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.


---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:


| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. | ✅ |
| `parentId` | string \| number | - | Parent ID of item. <blockquote>`parentId` and `id` can be used to build a tree structure and achieve hierarchical relationships. </blockquote> | - |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags. But must have at least a string other than the HTML Tag, because the HTML Tag in this field will be sanitized when assigning the value. such as `<small>abc</small>efg`</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `queryString` | string | - | Quick query string, such as Chinese pinyin or English initials | ✅ |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |
| `extendedContent` | ReactNode  | - | An extension of the same level, It can usually be used for complex content, such as \<input \> | - |


> Among them, `id`, `parentId`, `label`, `listItemLabel`, `value`, `queryString`, `disabled` and `extendedContent` are attributes used by the system, and other attributes can be added freely.



```json
[
    {
        "parentId": 0,
        "id": 1,
        "label": "banana",
        "listItemLabel": "banana (No. 0)",
        "value": "b",
        "queryString": "banana,xiangjiao,xj",
        "disabled": false
    },
    {
        "parentId": 0,
        "id": 2,
        "label": "apple",
        "listItemLabel": "apple (No. 1)",
        "value": "a",
        "queryString": "apple,pingguo,pg",
        "disabled": false
    },
    {
        "parentId": 1,
        "id": 3,
        "label": "lemon",
        "listItemLabel": "lemon (No. 3)",
        "value": "a",
        "queryString": "lemon,lingmeng,lm",
        "disabled": false
    },
    ...
]
```