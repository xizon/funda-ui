# Multiple Select

> The components must be wrapped in a container with a height.

## General


```js
import React, { useState } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';

export default () => {

    const options = [
        {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
        {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
        {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
        {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
    ];
    const [val, setVal] = useState<string>('[value-1][value-3]');
    const [valLabels, setValLabels] = useState<string[]>([]);

    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items"
                selectedHeaderNote="{items_num} items selected"
                value={val}
                options={options}
                onChange={(e, data, dataStr, currentData, type) => {
                    console.log(e, data, dataStr, currentData, type);
                    /*
                        <li data-index="0" data-label="Option 1" data-value="value-1">...</li>,
                        ['value-3', 'value-2'],
                        '[value-3][value-2]',
                        {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                        add
                    */

                    setVal(dataStr);

                    const _labelVal: string[] = [];
                    data.forEach((v: string) => {
                        const curItem = options.find((item: any) => item.value == v);
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


## Unattached Selected Options

The selected value is not affected by the `options` passed in. Setting the `unattachedSelect` property allows the value on the right to remain unaffected when the left option is updated.




```js
import React, { useState } from "react";
import MultipleSelect from 'funda-ui/MultipleSelect';

// component styles
import 'funda-ui/MultipleSelect/index.css';

export default () => {

    const options = [
        {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
        {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
        {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
        {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
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
                    {"label": "New Option 123","value": "value-123","queryString": ""},
                    {"label": "New Option 456","value": "value-456","queryString": ""}
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
                    {"label": "New Option 789","value": "value-789","queryString": ""},
                    {"label": "New Option 666","value": "value-666","queryString": ""}
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
                unattachedSelect
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items"
                selectedHeaderNote="{items_num} items selected"
                value={val}
                options={defaultOpt}
                onChange={(e, data, dataStr, currentData, type) => {
                    console.log(e, data, dataStr, currentData, type);
                    /*
                        <li data-index="0" data-label="Option 1" data-value="value-1">...</li>,
                        ['value-3', 'value-2'],
                        '[value-3][value-2]',
                        {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                        add
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
                "parent_id": 0,
                "id": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "id": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            },
            // level 2
            {
                "parent_id": 1,
                "id": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "id": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "id": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            },
            // level 3
            {
                "parent_id": 4,
                "id": 6,
                "item_name": "Title 6",
                "item_type": "web/ui/photoshop"
            },  
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}


export default () => {

    const indentation = "—";
    const INDENT_PLACEHOLDER = `&nbsp;&nbsp;&nbsp;&nbsp;`;
    const INDENT_LAST_PLACEHOLDER = `${indentation}&nbsp;&nbsp;`;
    const [list, setList] = useState<any[]>([]);

    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr: any[], parentId: string = '', keyId: string = 'id', keyParentId: string = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter((item: any) => !item[keyParentId]).map((item: any) => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter((item: any) => item[keyParentId] === parentId).map((item: any) => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        }
    }


    /**
    * Add depth to each item in the tree
    * @param {Array} arr       - Hierarchical array
    * @param  {?string} keyId               - Key value of id.
    * @param  {?string} keyParentId         - Key value of parent id.
    * @param  {?number} depth               - Depth of the item.
    * @returns Number
    */
    function addTreeDepth(arr: any[], keyId: string = 'id', parentItem: string = '', depth: number = 0): any[] {
    return arr.reduce((acc, el) => {
        const { children, ...otherProps } = el;
        acc.push({ ...otherProps, parentItem, depth });
        if (children) {
            return acc.concat(addTreeDepth(children, keyId, el[keyId], depth + 1));
        }
        return acc;
    }, []);
    }



    /**
     * Add indent placeholder
     * @param {Array} arr                    - Flat array
     * @param  {?string} placeholder         - String of placeholder
     * @param  {?string} lastPlaceholder     - Last String of placeholder
     * @param  {?string} keyName             - Key value of name.
     * @returns Array
     */
    function addTreeIndent(arr: any[], placeholder: string = '&nbsp;&nbsp;&nbsp;&nbsp;', lastPlaceholder: string = '', keyName: string = 'label'): void {

        arr.forEach((item) => {
            let indent = ''; 
            if (item.depth) {
                Array(item.depth).fill(0).forEach((k, i) => {
                    indent += placeholder;
                    if (i === item.depth-1) {
                        item[keyName] = indent + lastPlaceholder + item[keyName];
                    }
                });
            }
        });
    }



    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parent_id: item.parent_id,
                    label: item.item_name,
                    value: item.id,
                    queryString: ''
                }
            });
         
            const treeData = convertTree(_data);
            let resData = addTreeDepth(treeData, 'id');
            addTreeIndent(resData, INDENT_PLACEHOLDER, INDENT_LAST_PLACEHOLDER, 'label');
            setList(resData);

        });
    }, []);



    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items"
                selectedHeaderNote="{items_num} items selected"
                options={list}
                onChange={(e, data, dataStr, currentData, type) => {
                    console.log(e, data, dataStr, currentData, type);
                }}
            />
        </div>
          

        </>
    );
}
```



**You could also use these following properties directly: `hierarchical`, `indentation` and `doubleIndent`**


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
                "parent_id": 0,
                "id": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "id": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            },
            // level 2
            {
                "parent_id": 1,
                "id": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "id": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "id": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            },
            // level 3
            {
                "parent_id": 4,
                "id": 6,
                "item_name": "Title 6",
                "item_type": "web/ui/photoshop"
            },  
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

    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr: any[], parentId: string = '', keyId: string = 'id', keyParentId: string = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter((item: any) => !item[keyParentId]).map((item: any) => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter((item: any) => item[keyParentId] === parentId).map((item: any) => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        }
    }


    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parent_id: item.parent_id,
                    active: false,
                    title: `${item.item_name}`,
                    link: "#",
                    slug: item.id
                }
            });
         
            const treeData = convertTree(_data);
            setList(treeData);

        });
    }, []);



    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items"
                selectedHeaderNote="{items_num} items selected"
                options={list}
                onChange={(e, data, dataStr, currentData, type) => {
                    console.log(e, data, dataStr, currentData, type);
                }}
                hierarchical
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
                "parent_id": 0,
                "id": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "id": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            },
            // level 2
            {
                "parent_id": 1,
                "id": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "id": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "id": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            },
            // level 3
            {
                "parent_id": 4,
                "id": 6,
                "item_name": "Title 6",
                "item_type": "web/ui/photoshop"
            },  
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

    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr: any[], parentId: string = '', keyId: string = 'id', keyParentId: string = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter((item: any) => !item[keyParentId]).map((item: any) => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter((item: any) => item[keyParentId] === parentId).map((item: any) => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        }
    }


    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parent_id: item.parent_id,
                    active: false,
                    title: `${item.item_name}`,
                    link: "#",
                    slug: item.id
                }
            });
         
            const treeData = convertTree(_data);
            setList(treeData);

        });
    }, []);



    return (
        <>

        <div className="mb-3" style={{height: '300px'}}>
            <MultipleSelect 
                name="name"
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items"
                selectedHeaderNote="{items_num} items selected"
                options={list}
                onChange={(e, data, dataStr, currentData, type) => {
                    console.log(e, data, dataStr, currentData, type);
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
                {item_name: 'foo', item_code: 'bar'},
                {item_name: 'foo2', item_code: 'bar2'},
                {item_name: 'foo3', item_code: 'bar3'}
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
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items"
                selectedHeaderNote="{items_num} items selected"
                value="[bar2]"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item: any, index: number) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
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
                    console.log(e, data, dataStr, currentData, type);
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
                availableHeaderTitle="Select One Item"
                selectedHeaderTitle="Selected Items"
                selectedHeaderNote="{items_num} items selected"
                value={val}
                options={
                    [
                        {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                        {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                        {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                        {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                    ]  
                }
                onChange={(e, data, dataStr, currentData, type) => {
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



## API

### Multiple Select
```js
import MultipleSelect from 'funda-ui/MultipleSelect';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `wrapperClassName` | string | `mb-3` | The class name of the control wrapper. | - |
| `childClassName` | string | - | The additional class name of the child on `<ul>`. | - |
| `wrapperMinHeight` | string | - | Minimum height of wrapper. If not specified, the default value in css will be used, which is **315px** | - |
| `wrapperMinWidth` | string | - | Minimum width of wrapper. If not specified, the default value in css will be used, which is **350px** | - |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. | - |
| `availableHeaderTitle` | string  | - | Header title for available areas. <blockquote>Support html tags</blockquote> | - |
| `selectedHeaderTitle` | string  | - | Header title for selected areas. <blockquote>Support html tags</blockquote> | - |
| `selectedHeaderNote` | string  | - | Identification text for the selected item area, using `{items_num}` as placeholder. <blockquote>Support html tags</blockquote> | - |
| `removeAllBtnLabel` | string \| ReactNode  | `Remove all` | Label of remove all button | - |
| `addAllBtnLabel` | string \| ReactNode  | `Add all` | Label of add all button | - |
| `iconAdd` | string \| ReactNode  | `<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>` | The label of the button to add a new item | - |
| `iconRemove` | string \| ReactNode  | `<svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>` | The label of the button to delete current item | - |
| `options` | JSON Object Literals \| JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1","queryString": "option1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},{"label": "Option 3","value": "value-3","queryString": "option3"},{"label": "Option 4","value": "value-4","disabled":true}]` <br /> <blockquote>Note: Use API data if database query exists. That is, the attribute `fetchXXXX`</blockquote> <hr /> <blockquote>When the attribute `hierarchical` is true, you need to use a hierarchical structure to pass data, such as: `[{label:"Top level 1",value:'level-1',queryString:""},{label:"Top level 2",value:'level-2',queryString:""},{label:"Top level 3",value:'level-3',queryString:"",children:[{label:"Sub level 3_1",value:'level-3_1',queryString:""},{label:"Sub level 3_2",value:'level-3_2',queryString:"",children:[{label:"Sub level 3_2_1",value:'level-3_2_1',queryString:""}]},{label:"Sub level 3_3",value:'level-3_3',queryString:""}]}]`</blockquote>| - |
| `unattachedSelect` | boolean  | false | The selected value is not affected by the `options` passed in. | - |
| `hierarchical` | boolean  | false | Set hierarchical categories ( with sub-categories ) to attribute `options`. | - |
| `indentation` | string  | - | Set hierarchical indentation placeholders, valid when the `hierarchical` is true. | - |
| `doubleIndent` | boolean  | false | Set double indent effect, valid when the `hierarchical` is true. | - |
| `alternateCollapse` | boolean | false | Mutually exclusive alternate expansion between the first levels. | - |
| `arrow` | ReactNode  | `<svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>` | Set an arrow of control | - |
| `value` | string | - | Set a default value for this control. Please separate multiple values with square brackets. Such as `[tag1][tag2][tag3]` <blockquote>If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`tag1,tag2,tag3`</blockquote> | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onFetch`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> <hr /> <blockquote>!!!Note: Using `data` and `value` at the same time may cause two different parameter transfers, which will affect the final rendering. Please choose the appropriate usage based on your business.</blockquote>| - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (**Array**) | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns five callback values. <br /> <ol><li>The first is the control of current checkbox</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li><li>The fourth is the data (Exposes the JSON format data) about the option. (**JSON Object**)</li><li>The last is Add or delete operation identifier, value is `add` or `remove`. (**String**)</li></ol>  | - |


It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.


---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. <blockquote>Valid when the `hierarchical` is true</blockquote> | - |
| `parent_id` | string \| number | - | Parent ID of item. <blockquote>Valid when the `hierarchical` is true</blockquote> | - |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags. But must have at least a string other than the HTML Tag, because the HTML Tag in this field will be sanitized when assigning the value. such as `<small>abc</small>efg`</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `queryString` | string | - | Quick query string, such as Chinese pinyin or English initials | - |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |
| `children` | array | - | Specify a set of sub-navigation, Eg. `[{"label": "Option 1","value": "value-1","queryString": "option1"}]` | - |