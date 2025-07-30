# Select

> ✌🏻 You can find the final value of this component by setting the `name` property, similar to **document.querySelector('[name="custom-control-name"]').value**


## General

```tsx
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import 'funda-ui/Select/index.css';

export default () => {
    const handleChange: SelectOptionChangeFnType = (
        e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, 
        e2: HTMLElement, 
        val: OptionConfig | MultiSelectValue
    ): void => {
        console.log(event, element, value);
        /*
        <input ... value=​"[Option 3]​[Option 2]​[Option 1]​">​ 
        <input ... value=​"[value-3]​[value-2]​[value-1]​">​ 
        {
            items: [
                {"label": "Option 3","value": "value-3"},
                {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},
                {"label": "Option 1","value": "value-1"}
            ],
            labels: ['Option 3', '<del style=color:red>deprecate</del>Option 2', 'Option 1'],
            values: ['value-3', 'value-2', 'value-1'], 
            labelsOfString: '[Option 3][<del style=color:red>deprecate</del>Option 2][Option 1]', 
            valuesOfString: '[value-3][value-2][value-1]'
        }
        */
    };
 
    return (
        <>
            <div style={{width: '250px'}}>
                <Select
                    clearIcon={false}  // Hide the clear icon
                    placeholder="Select"
                    name="name"
                    winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                    options={`
                    [
                        {"label": "Option 1","value": "value-1","queryString": "option1"},
                        {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                        {"label": "Option 3","value": "value-3","queryString": "option3"},
                        {"label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                    ]  
                    `}
                    onChange={handleChange}
                />
            </div>

            <div style={{width: '250px'}}>
                <Select
                    clearTrigger={{valid: true, clearValueLabel: 'Clear'}}
                    placeholder="Select"
                    name="name"
                    winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                    options={`
                    [
                        {"label": "Option 1","value": "value-1","queryString": "option1"},
                        {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                        {"label": "Option 3","value": "value-3","queryString": "option3"},
                        {"label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                    ]  
                    `}
                    onChange={handleChange}
                />
            </div>

            <Select
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={handleChange}
            />

            <Select
                value={Array.from({ length: 20 }).fill(0).map((v, i) => ({
                    label: `${i}`,
                    value: `${i}`,
                    queryString: ""
                }))}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all",
                }}
                placeholder="Select"
                name="name"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => ({
                    label: `${i}`,
                    value: `${i}`,
                    queryString: ""
                }))}
                onChange={handleChange}
            />
        </>
    );
}
```



## FAQ

State changes in the page, causing other `<Select />` components to re-render and value to reset.

### Solution:

> The `value` and `options` properties of the controlled component must be **stable references** so that the initial values ​​are not reset due to re-rendering caused by changes in the state (using `useState()`) of the page.


### Example:

When you change the value of the second controlled component, observe the default value of the first controlled component.


**❌ Bad**
```js
import React, { useState } from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {

    const [oneSelectChanged, setOneSelectChanged] = useState<string>('');
 
    return (
        <>
            

            <Select
                value={Array.from({ length: 20 }).fill(0).map((v, i) => {
                        return { label: `${i}`, value: `${i}`, queryString: "" }
                    })}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name="name2"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { label: `${i}`, value: `${i}`, queryString: "" }
                })}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />


            <Select
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    setOneSelectChanged((val as OptionConfig).label);
                }}
            />



        </>
    );
}
```

**👍 Good**

Use `useMemo()` and `useState()` to control `options` and `value` respectively.

```js
import React, { useState, useEffect, useMemo } from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {

    const [oneSelectChanged, setOneSelectChanged] = useState<string>('');
 
    // Create stable references
    const [selectValue, setSelectValue] = useState<any[]>([]);
    const selectOptions = useMemo(() => {
        return Array.from({ length: 100 }).fill(0).map((v, i) => ({
            label: `${i}`,
            value: `${i}`,
            queryString: ""
        }));
    }, []);


    useEffect(() => {
        setSelectValue(Array.from({ length: 20 }).fill(0).map((v, i) => {
            return { label: `${i}`, value: `${i}`, queryString: "" }
        }));
    }, []);

    return (
        <>
            

            <Select
                value={selectValue}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name="name2"
                options={selectOptions}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

            <Select
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    setOneSelectChanged((val as OptionConfig).label);
                }}
            />



        </>
    );
}
```



**👍 Good**

Use `useMemo()` to return the entire component


```js
import React, { useState, useMemo } from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

// DO NOT move `useMemo` to component
function SelectOneMemo(props) {
    const { callback, selectValue, options, name } = props;
    return useMemo(() => {
        return <>
            <Select
                value={selectValue}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name={name}
                options={options}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    callback(val);
                }}
            />

        </>


    }, []);
}


export default () => {
 
    const [oneSelectChanged, setOneSelectChanged] = useState('');
 
    return (
        <>
            

            <SelectOneMemo
                selectValue={Array.from({ length: 20 }).fill(0).map((v, i) => {
                    return { label: `${i}`, value: `${i}`, queryString: "" }
                })}
                callback={(val: any) => {
                    console.log(val);
                }}
                options={Array.from({ length: 100 }).fill(0).map((v, i) => ({
                    label: `${i}`,
                    value: `${i}`,
                    queryString: ""
                }))}
                name="name2"
            />

            <Select
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    setOneSelectChanged((val as OptionConfig).label);
                }}
            />

        </>
    );
  
}
```



**👍 Good**

Use `defaultValue` property.


```js
import React, { useState } from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {

    const [oneSelectChanged, setOneSelectChanged] = useState<string>('');
 

    return (
        <>
            

            <Select
                // using "defaultValue"
                defaultValue={Array.from({ length: 20 }).fill(0).map((v, i) => {
                    return { label: `${i}`, value: `${i}`, queryString: "" }
                })}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name="name2"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { label: `${i}`, value: `${i}`, queryString: "" }
                })}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

            <Select
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    setOneSelectChanged((val as OptionConfig).label);
                }}
            />



        </>
    );
}
```

## Automatically trigger request

You need to use the series property `fetch<METHOD_NAME>` to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';
import axios from 'axios';

// component styles
import 'funda-ui/Select/index.css';

class DataService {

    // `getListAwait()` must be a Promise Object
    async getListAwait(searchStr = '', limit = 0, otherParam = '') {

        console.log('(getListAwait) searchStr: ', searchStr);
        console.log("(getListAwait) limit: ", limit);
        console.log("(getListAwait) otherParam: ", otherParam);

        // Only single symbols such as , #, and @ are allowed, and , a, a, , etc. are not allowed.
        const isSingleSpecialChar = (str) => {
            return typeof str === 'string' && /^[^\w\s]$/.test(str);
        };

        const QUERY_STRING_PLACEHOLDER = '------';  // Invalid parameters for the first automatic request

        if ( searchStr === QUERY_STRING_PLACEHOLDER) return {
            code: 0,
            message: 'OK',
            data: []
        };

        // Simulate request latency
        await new Promise(resolve => setTimeout(resolve, 1500));


        if ( isSingleSpecialChar(searchStr) && searchStr !== '*') return {
            code: 0,
            message: 'OK',
            data: []
        };

        return {
            code: 0,
            message: 'OK',
            data: Array.from({length: 50}).fill(null).map((v, i) => {
                return {item_name: 'foo' + i, item_code: 'bar' + i, kb_code: ''}
            })
        };
    }	
    
    // `getList()` must be a Promise Object
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        return {
            code: 0,
            message: 'OK',
            data: [
                {item_name: 'foo', item_code: 'bar', kb_code: 'fb,foobar'},
                {item_name: 'foo2', item_code: 'bar2', kb_code: 'fb2,foobar2'},
                {item_name: 'foo3', item_code: 'bar3', kb_code: 'fb3,foobar3'}
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

            
            <h3>Single selection</h3>
            {/* ================================================================== */}
            <Select
                value="bar2"
                placeholder="Select"
                name="name"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item, i) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            myOrder: i,
                            queryString: item.kb_code
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar","queryString": "fb,foobar","myOrder":0},
                        {"label": "foo2","value": "bar2","queryString": "fb2,foobar2","myOrder":1},
                        {"label": "foo3","value": "bar3","queryString": "fb3,foobar3","myOrder":2}
                    ]   
                    */

                    return formattedData;
                }}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    const addValue = (name: string, targetValueField: string = 'label') => {
                        [].slice.call(document.querySelectorAll(`[name="${name}"]`)).forEach((node: any) => {
                            node.value = val[targetValueField];
                        });
                    };

                    addValue('name-xxxxxx', 'label');
                    addValue('name-yyyyyy', 'myOrder');
                    

                })}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);

                    const curItem = res.find((v: any) => v.value == value);
                    if (typeof curItem !== 'undefined') {
                        const addValue = (name: string, targetValueField: string = 'label') => {
                            [].slice.call(document.querySelectorAll(`[name="${name}"]`)).forEach((node: any) => {
                                if (typeof curItem[targetValueField] !== 'undefined') node.value = curItem[targetValueField];
                            });
                        };

                        addValue('name-xxxxxx', 'label');
                        addValue('name-yyyyyy', 'myOrder');
                    }


                }}
            />
            Linkage value: 
            <input name="name-xxxxxx" size={5} type="text" defaultValue="" />
            <input name="name-yyyyyy" size={5} type="text" defaultValue="" />


            <h3>Multiple selection</h3>
            {/* ================================================================== */}
            <Select
                value={[{ label: 'foo2', value: 'bar2', queryString: 'fb2,foobar2' }]}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                name="target_user_id"
                placeholder="Select"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />
           

         
        </>
    );
}
```


## Manual trigger request

You need to use the series property `fetch<METHOD_NAME>` to format the data of the API callback, which will match the data structure of the component.

> Using `fetchTrigger` and `fetchUpdate` properties. In general, `fetchUpdate` is also set to **true**. 
>
> If `fetchUpdate` is **false**, each request needs to be triggered by clicking the search button.


```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';
import axios from 'axios';

// component styles
import 'funda-ui/Select/index.css';

class DataService {

    // `getListAwait()` must be a Promise Object
    async getListAwait(searchStr = '', limit = 0, otherParam = '') {

        console.log('(getListAwait) searchStr: ', searchStr);
        console.log("(getListAwait) limit: ", limit);
        console.log("(getListAwait) otherParam: ", otherParam);

        // Only single symbols such as , #, and @ are allowed, and , a, a, , etc. are not allowed.
        const isSingleSpecialChar = (str) => {
            return typeof str === 'string' && /^[^\w\s]$/.test(str);
        };

        const QUERY_STRING_PLACEHOLDER = '------';  // Invalid parameters for the first automatic request

        if ( searchStr === QUERY_STRING_PLACEHOLDER) return {
            code: 0,
            message: 'OK',
            data: []
        };

        // Simulate request latency
        await new Promise(resolve => setTimeout(resolve, 1500));


        if ( isSingleSpecialChar(searchStr) && searchStr !== '*') return {
            code: 0,
            message: 'OK',
            data: []
        };

        return {
            code: 0,
            message: 'OK',
            data: Array.from({length: 50}).fill(null).map((v, i) => {
                return {item_name: 'foo' + i, item_code: 'bar' + i, kb_code: ''}
            })
        };
    }	
    
    // `getList()` must be a Promise Object
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        return {
            code: 0,
            message: 'OK',
            data: [
                {item_name: 'foo', item_code: 'bar', kb_code: 'fb,foobar'},
                {item_name: 'foo2', item_code: 'bar2', kb_code: 'fb2,foobar2'},
                {item_name: 'foo3', item_code: 'bar3', kb_code: 'fb3,foobar3'}
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

         
            <h3>Single selection (Enter the search character. You can enter 1 or 2)</h3>
            {/* ================================================================== */}
            <Select
                value={{ label: 'foo2', value: 'bar2', queryString: 'fb2,foobar2' }}
                placeholder="Search Options"
                name="name"
                data="mydata"
                fetchUpdate={true}
                fetchTrigger={true}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getListAwait"
                fetchFuncMethodParams={['$QUERY_STRING',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />



            <h3>Single selection and Default value exists (Enter the search character. You can enter 1 or 2)</h3>
            {/* ================================================================== */}
            <Select
                value={{ label: 'foo2', value: 'bar2', queryString: 'fb2,foobar2' }}
                placeholder="Search Options"
                name="name"
                data="mydata"
                options={[
                    {
                        "label": "Default Option Title 1",
                        "value": 'default-1',
                        "queryString": ""
                    },
                    {
                        "label": "Default Option Title 2",
                        "value": 'default-2',
                        "queryString": ""
                    },
                    {
                        "label": "Default Option Title 3",
                        "value": 'default-3',
                        "queryString": "",
                    }
                ]}
                fetchUpdate={true}
                fetchTrigger={true}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getListAwait"
                fetchFuncMethodParams={['$QUERY_STRING',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />


            <h3>Multiple selection (Enter the search character. You can enter 1 or 2)</h3>
            {/* ================================================================== */}  
            <Select
                value={[{ label: 'foo2', value: 'bar2', queryString: 'fb2,foobar2' }]}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                name="target_user_id"
                placeholder="Select"
                fetchUpdate={true}
                fetchTrigger={true}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getListAwait"
                fetchFuncMethodParams={['$QUERY_STRING',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />

        </>
    );
}
```




## No spacing

```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {


    return (
        <>

            <Select
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Select
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Use the object as the default 

You can specify an object as the default, and if the default value is not in the list of options, it will be displayed by default. (Important: An object like `{"label":"Option 0","value":"value-0","queryString":""}` must be passed in as a value.)

> Note: Single selection only!!!


```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {

    return (
        <>         
           
            <Select
                value={{"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"}}
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth / 2 + 'px'}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]}

            />



            <Select
                value={{ "label": "Option New", "value": "value-new", "queryString": "" }}
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth / 2 + 'px'}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]}

            />

        </>
    );
}
```


## Click on the callback via option

Use the `callback` attribute of the option.

```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {

    return (
        <>         
           

            <Select
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth / 2 + 'px'}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (click on the callback)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"<span style='background:blue;color:white;padding:.3rem;margin:.5rem 0;border-radius:5px;'>More</span>","value": "value-3","queryString": "option3", "callback": () => {
                        alert('Option 3');
                    }},
                    
                ]}

            />

        </>
    );
}
```

## Asynchronous requests are not executed by default

Set property `firstRequestAutoExec` to **false**. The first asynchronous request is not executed (saving bandwidth and improving performance). Trigger the first asynchronous request when the options area is expanded. 


> Valid when the series attribute `fetch<METHOD_NAME>` is exist

> If you want to trigger the entire component every time the route changes, you can use `<Select key={<YOUR_PARAM>} ... />`;




```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';


class DataService {

    // `getListAwait()` must be a Promise Object
    async getListAwait(searchStr = '', limit = 0, otherParam = '') {

        console.log('(getListAwait) searchStr: ', searchStr);
        console.log("(getListAwait) limit: ", limit);
        console.log("(getListAwait) otherParam: ", otherParam);

        // Only single symbols such as , #, and @ are allowed, and , a, a, , etc. are not allowed.
        const isSingleSpecialChar = (str) => {
            return typeof str === 'string' && /^[^\w\s]$/.test(str);
        };

        const QUERY_STRING_PLACEHOLDER = '------';  // Invalid parameters for the first automatic request

        if ( searchStr === QUERY_STRING_PLACEHOLDER) return {
            code: 0,
            message: 'OK',
            data: []
        };

        // Simulate request latency
        await new Promise(resolve => setTimeout(resolve, 1500));


        if ( isSingleSpecialChar(searchStr) && searchStr !== '*') return {
            code: 0,
            message: 'OK',
            data: []
        };

        
        return {
            code: 0,
            message: 'OK',
            data: Array.from({length: 50}).fill(null).map((v, i) => {
                return {item_name: 'foo' + i, item_code: 'bar' + i, kb_code: ''}
            })
        };
    }	

}


export default () => {

    return (
        <>         
            
            <Select
                placeholder="Select"
                name="name"
                firstRequestAutoExec={false}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getListAwait"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item, i) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            myOrder: i,
                            queryString: item.kb_code
                        }
                    }); 
                    
                    return formattedData;
                }}
               
            />
        </>
    );
}
```



## The Option Group element

Specify the content in the `optgroup` attribute of `options`.


```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {

    return (
        <>         
            <Select
                value="value-2"
                placeholder="Select"
                name="name"
                options={[
                    { "label": "Option 0", "value": "value-0","queryString":"" },
                    {
                        "label": "Group 1", "value": "", "queryString":"", "optgroup": [
                            { "label": "Option 1", "value": "value-1","queryString":"" },
                            { "label": "Option 2", "value": "value-2","queryString":"" }
                        ]
                    },
                    {
                        "label": "Group 2", "value": "", "queryString":"", "optgroup": [
                            { "label": "Option 3", "value": "value-3","queryString":"" },
                            { "label": "Option 4", "value": "value-4","queryString":"" },
                            { "label": "Option 5", "value": "value-5","queryString":"" }
                        ]
                    },
                    { "label": "Option 6", "value": "value-6","queryString":"" },

                ]}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

        </>
    );
}
```


## Customize option rendering

`renderOption` callback allows you to customize the UI style for the output of each option.

```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import 'funda-ui/Select/index.css';

export default () => {


    return (
        <>
     
            <Select
                placeholder="Select"
                name="name"
                options={[
                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                ]}
                renderOption={(optionData: OptionConfig, index: number) => {
                    return <div style={optionData.disabled ? {pointerEvents: 'none', opacity: .3} : undefined}>
                        <em>{index}. </em>
                        <strong>{optionData.label}</strong>
                        <div><small style={{color: 'gray'}}>value: {optionData.value}</small></div>
                    </div>;
                }}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

            <Select
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name="name2"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => ({
                    label: `Title ${i}`,
                    value: `${i}`,
                    queryString: ""
                }))}
                renderOption={(optionData: OptionConfig, index: number) => {
                    return <div style={optionData.disabled ? {pointerEvents: 'none', opacity: .3} : undefined}>
                        <strong>{optionData.label}</strong>
                        <div><small style={{color: 'gray'}}>value: {optionData.value}</small></div>
                    </div>;
                }}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

        </>
    );
}
```



## Render the selected value for multiple selection

`renderSelectedValue` callback allows you to customize the UI style displayed on the output of the control.

```js
import React from "react";
import Select, { MultiSelectControlValConfig } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {


    return (
        <>

            <Select
                value={Array.from({ length: 12 }).fill(0).map((v, i) => {
                        return { label: `${i}/(ID: ${i})`, value: `${i}`, queryString: ""}
                    })}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                renderSelectedValue={(selectedData: MultiSelectControlValConfig, removeFunc: (e: React.MouseEvent) => void) => (
                    <>
                        {selectedData.labels.map((item: string, index: number) => (
                            <li
                                key={'selected-item-' + index}
                                data-value={selectedData.values[index]}
                                data-label={item}
                                className="bg-transparent m-0"
                                style={{padding: '0.1rem 1.2rem .1rem .2rem'}}
                            >
                                {item}
                                <a
                                    href="#"
                                    tabIndex={-1}
                                    onClick={removeFunc}
                                    data-value={selectedData.values[index]}
                                ><svg width="10px" height="10px" viewBox="0 0 1024 1024"><path style={{fill: '#f60'}} d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg></a>
                            </li>
                        ))}
                    </>
                )}
                placeholder="Select"
                name="name"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { label: `${i}/(ID: ${i})`, value: `${i}`, queryString: ""}
                })}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

        </>
    );
}
```





## Multi-Level Cascading Select (Implemented using `useState()`)


```js
import React, { useState } from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

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

        console.log("parentId: ", parentId);

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

    // `getListThird()` must be a Promise Object
    async getListThird(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 5,
                "item_code": 6,
                "item_name": "Title 6",
                "item_type": "dev"
            },
            {
                "parent_id": 5,
                "item_code": 7,
                "item_name": "Title 7",
                "item_type": "dev"
            },
            {
                "parent_id": 3,
                "item_code": 8,
                "item_name": "Title 8",
                "item_type": "web/ui"
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

    const service = new DataService;

    const [secondValue, setSecondValue] = useState<string>('');
    const [thirdValue, setThirdValue] = useState<string>('');

    const [secondOptions, setSecondOptions] = useState<string>('');
    const [thirdOptions, setThirdOptions] = useState<string>('');

    function toSlug(str: string) {

        return str
            .toString()
            .replace(/[^\w\s\-！￥【】\u4e00-\u9eff]/gi, '')
            .replace(/\s/g, '-')
            .replace(/(\-){2,}/g, '-')
            .replace(/\-\s*$/, '')
            .toLowerCase();
    };
    
    

    return (
        <>

            <Select
                placeholder="Select"
                name="name-1"
                label="Level 1"
                fetchFuncAsync={service}
                fetchFuncMethod="getListFirst"
                fetchFuncMethodParams={['', 0, 1]}
                fetchCallback={(res) => {
                    const formattedData = res.map((item: any) => {
                        return {
                            label: item.item_name,
                            value: toSlug(item.item_name),
                            queryString: '',
                            queryId: item.item_code
                        }
                    }); 
                    return formattedData;
                }}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    const queryId = val.queryId;

                    // value of "name-2" and "name-3"
                    setSecondValue('');
                    setThirdValue('');
                    setThirdOptions('');


                    // options of "name-2"
                    service.getListSecond('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setSecondOptions(JSON.stringify(formattedData));

                    });
                  
                }}
            />


            <Select
                value={secondValue}
                placeholder="Select"
                name="name-2"
                label="Level 2"
                options={secondOptions}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    const queryId = val.queryId;
                
                    // value of "name-3"
                    setThirdValue('');

                    // options of "name-3"
                    service.getListThird('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setThirdOptions(JSON.stringify(formattedData));


                    });  
                }}
            />


            <Select
                value={thirdValue}
                placeholder="Select"
                name="name-3"
                label="Level 3"
                options={thirdOptions}
            />



        </>
    );
}
```



## Convert raw data into a tree structure

Set hierarchical categories ( with sub-categories ) to attribute `options`.


```js
import React, { useEffect, useState } from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';



class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parent_id": 0,
                "id": 1,
                "label": "Top level 1",
                "value": 'level-1',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 2,
                "label": "Top level 2",
                "value": 'level-2',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 3,
                "label": "Top level 3",
                "value": 'level-3',
                "queryString": "",
            },
            // level 2
            {
                "parent_id": 3,
                "id": 4,
                "label": "Sub level 3_1",
                "value": 'level-3_1',
                "queryString": ""
            },
            {
                "parent_id": 1,
                "id": 5,
                "label": "Sub level 3_2",
                "value": 'level-3_2',
                "queryString": "",
            },
            {
                "parent_id": 2,
                "id": 6,
                "label": "Sub level 3_3",
                "value": 'level-3_3',
                "queryString": ""
            },
            // level 3
            {
                "parent_id": 5,
                "id": 7,
                "label": "Sub level 3_2_1",
                "value": 'level-3_2_1',
                "queryString": ""
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

    const [data, setData] = useState<any[]>([]);

    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr, parentId = '', keyId = 'id', keyParentId = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter(item => !item[keyParentId]).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter(item => item[keyParentId] === parentId).map(item => {
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
                    label: `${item.label}`,
                    value: `${item.value}`,
                    queryString: `${item.queryString}`
                }
            });
         

            const treeData = convertTree(_data);
            /*
            [{
                label: "Top level 1",
                value: 'level-1',
                queryString: ""
                
            },
            {
                label: "Top level 2",
                value: 'level-2',
                queryString: ""
                
            },
            {
                label: "Top level 3",
                value: 'level-3',
                queryString: "",
                children: [{
                    label: "Sub level 3_1",
                    value: 'level-3_1',
                    queryString: ""
                },
                {
                    label: "Sub level 3_2",
                    value: 'level-3_2',
                    queryString: "",
                    children: [{
                        label: "Sub level 3_2_1",
                        value: 'level-3_2_1',
                        queryString: ""
                    }]
                },
                {
                    label: "Sub level 3_3",
                    value: 'level-3_3',
                    queryString: ""
                }]
            }]
            */
            setData(treeData);
            
            // do something, such as update `<Scrollbar />`
            // ...

        });
    }, []);


    return (
        <>

            <Select
                hierarchical={true}
                value="level-3_2_1"
                placeholder="Select"
                name="name"
                options={JSON.stringify(data)}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

            <Select
                hierarchical={true}
                value={[
                        { label: 'Top level 1', value: 'level-1', queryString: '' }, 
                        { label: 'Sub level 3_1', value: 'level-3_1', queryString: '' }
                    ]}
                multiSelect={{
                    valid: true, 
                    selectAll: true, 
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name="name"
                options={JSON.stringify(data)}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />



        </>
    )
}
```

Automatic fetch request:

```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parent_id": 0,
                "id": 1,
                "label": "Top level 1",
                "value": 'level-1',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 2,
                "label": "Top level 2",
                "value": 'level-2',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 3,
                "label": "Top level 3",
                "value": 'level-3',
                "queryString": "",
            },
            // level 2
            {
                "parent_id": 3,
                "id": 4,
                "label": "Sub level 3_1",
                "value": 'level-3_1',
                "queryString": ""
            },
            {
                "parent_id": 1,
                "id": 5,
                "label": "Sub level 3_2",
                "value": 'level-3_2',
                "queryString": "",
            },
            {
                "parent_id": 2,
                "id": 6,
                "label": "Sub level 3_3",
                "value": 'level-3_3',
                "queryString": ""
            },
            // level 3
            {
                "parent_id": 5,
                "id": 7,
                "label": "Sub level 3_2_1",
                "value": 'level-3_2_1',
                "queryString": ""
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

    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr, parentId = '', keyId = 'id', keyParentId = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter(item => !item[keyParentId]).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter(item => item[keyParentId] === parentId).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        }
    }

    return (
        <>

            
            <Select
                hierarchical={true}
                doubleIndent={true}
                indentation="-"
                value={[
                        { label: 'Top level 1', value: 'level-1', queryString: '' }, 
                        { label: 'Sub level 3_1', value: 'level-3_1', queryString: '' }
                    ]}
                multiSelect={{
                    valid: true, 
                    selectAll: true, 
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name="name"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['', 0, '']}
                fetchCallback={(res) => {
                    const formattedData = res.map((item: any) => {
                        return {
                            id: item.id,
                            parent_id: item.parent_id,
                            label: item.label,
                            value: item.value,
                            queryString: item.queryString
                        }
                    });

                    const treeData = convertTree(formattedData);
               
                    treeData.unshift({
                        id: 0,
                        parent_id: 0,
                        label: 'Root',
                        value: '0',
                        queryString: ''
                    });


                    return treeData;
                }}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />




        </>
    );
}
```



## Only show the status of selected items for multiple selection

Set `multiSelectSelectedItemOnlyStatus` parameter.

```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {
 
    return (
        <>

            <Select
                value={Array.from({ length: 20 }).fill(0).map((v, i) => {
                        return { label: `${i}`, value: `${i}`, queryString: "" }
                    })}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                multiSelectSelectedItemOnlyStatus={{
                    itemsLabel: '{num} Selected',
                    allItemsLabel: 'All Content ({num})',
                    noneLabel: 'No items selected',
                }}
                placeholder="Select"
                name="name"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { label: `${i}`, value: `${i}`, queryString: "" }
                })}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />

        </>
    );
}
```





## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
import React, { useRef } from "react";

import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';


export default () => {

    const conRef = useRef<any>(null);
    const con2Ref = useRef<any>(null);

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
                    if (conRef.current) conRef.current.set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') });
                }}
            >Set Custom Value</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.active();
                }}
            >Active</a>
             &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.focus();
                }}
            >Focus</a>

            <Select
                contentRef={conRef}
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={typeof window === 'undefined' ? undefined : () => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />


            <hr />


            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (con2Ref.current) con2Ref.current.clear();
                }}
            >Set Empty Value (multiple)</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (con2Ref.current) con2Ref.current.set([{"label": "15","listItemLabel":"15","value": "15","queryString": ""},{"label": "25","listItemLabel":"25","value": "25","queryString": ""},{"label": "33","listItemLabel":"33","value": "33","queryString": ""}], () => { console.log('callback') });
                }}
            >Set Custom Value (multiple)</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (con2Ref.current) con2Ref.current.active();
                }}
            >Active (multiple)</a>
             &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (con2Ref.current) con2Ref.current.focus();
                }}
            >Focus (multiple)</a>



            <Select
                contentRef={con2Ref}
                value={Array.from({ length: 20 }).fill(0).map((v, i) => {
                        return { label: `${i}`, value: `${i}`, queryString: "" }
                    })}
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all",
                    deselectAllLabel: "Deselect all"
                }}
                placeholder="Select"
                name="name"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { label: `${i}`, value: `${i}`, queryString: "" }
                })}
                onChange={(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, e2: HTMLElement, val: OptionConfig | MultiSelectValue): void => {
                    console.log(e, e2, val);
                }}
            />



        </>
    )
}
```


## Use spaces to trigger events


```js
import React from "react";
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {


    return (
        <>

            <Select
                ...
                onKeyPressed={(event: any) => {
                    if (event.key === ' ') {
                        // Prevent the page from scrolling
                        event.preventDefault();
                        
                        // do something
                        alert('You hit the spacebar')
                    }
                }}
                ...
            />

        </>
    );
}
```



### Custom Scroll Container

When `customScrollContainer` prop specified, the component will calculate available space and position the dropdown relative to the specified container instead of the browser window.


```js
import React from "react";
import Select from 'funda-ui/Select';

// component styles
import '../funda-ui/Select/src/index.scss';

export default () => {


    return (
        <>

        <div className="modal">
            <div className="modal-header">Header</div>
            <div className="modal-body" id="modal-scroll-area">
                <Select 
                    customScrollContainer="#modal-scroll-area"
                    options={options}
                    placeholder="Select an option"
                />
            </div>
        </div>

        </>
    );
}
```


## Globally disable real-time search functionality (only valid for non-dynamic requests)

> [!WARNING]
> Globally disabling live search will be invalid when `fetchTrigger` exists and **true**


Prevent the keyboard from popping up when input focus is entered on mobile devices. Just add the window global variable to any page, such as:


```js
window['funda-ui__Select-disable-livesearch'] = 1;
```




## API

### Select
```js
import Select, { OptionConfig, MultiSelectValue } from 'funda-ui/Select';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.active()`</li><li>`contentRef.current.focus()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote> | - |
| `popupRef` | React.ForwardedRef | - | It exposes the following methods when the component's popup opens or closes:  <br /> <ol><li>`popupRef.current.open()`</li><li>`popupRef.current.close()`</li></ol> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `optionsExClassName` | string | - | The extended class name of options from popup. | - |
| `customScrollContainer` | string \| HTMLElement \| React.RefObject<HTMLElement> | - | Custom scroll container for position calculation instead of window. Can be a selector string, DOM element, or React ref. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `clearIcon` | boolean | true | A clear icon is displayed on the right side of the search box to clear the form | - |
| `options` | JSON Object Literals \| JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1","queryString": "option1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},{"label": "Option 3","value": "value-3","queryString": "option3"},{"label": "Option 4","value": "value-4","queryString": "option4","disabled":true}]` <br /> <blockquote>Note: Use API data if database query exists. That is, the attribute `fetch<METHOD_NAME>`</blockquote> <hr /> <blockquote>When the attribute `hierarchical` is true, you need to use a hierarchical structure to pass data, such as: `[{label:"Top level 1",value:'level-1',queryString:""},{label:"Top level 2",value:'level-2',queryString:""},{label:"Top level 3",value:'level-3',queryString:"",children:[{label:"Sub level 3_1",value:'level-3_1',queryString:""},{label:"Sub level 3_2",value:'level-3_2',queryString:"",children:[{label:"Sub level 3_2_1",value:'level-3_2_1',queryString:""}]},{label:"Sub level 3_3",value:'level-3_3',queryString:""}]}]`</blockquote>| - |
| `clearTrigger` | JSON Object | `{"valid": false, "clearValueLabel": "Clear"}` | Enable clearTrigger. <blockquote>**Parameters Description:** <br />`valid` -->  *(Boolean)* *(required)* Display this button that clears the existing value. It is valid when a single selection. <br />`clearValueLabel` -->  *(String)* Sets the clear button label. (Support html tags) </blockquote> | - |
| `lockBodyScroll` | boolean  | false | Enables body scroll locking (for iOS Mobile and Tablet, Android, desktop Safari/Chrome/Firefox) without breaking scrolling of a target element. | - |
| `loader` | ReactNode  | `<svg height="12px" width="12px" viewBox="0 0 512 512"><g><path fill="inherit" d="M256,0c-23.357,0-42.297,18.932-42.297,42.288c0,23.358,18.94,42.288,42.297,42.288c23.357,0,42.279-18.93,42.279-42.288C298.279,18.932,279.357,0,256,0z"/><path fill="inherit" d="M256,427.424c-23.357,0-42.297,18.931-42.297,42.288C213.703,493.07,232.643,512,256,512c23.357,0,42.279-18.93,42.279-42.288C298.279,446.355,279.357,427.424,256,427.424z"/><path fill="inherit" d="M74.974,74.983c-16.52,16.511-16.52,43.286,0,59.806c16.52,16.52,43.287,16.52,59.806,0c16.52-16.511,16.52-43.286,0-59.806C118.261,58.463,91.494,58.463,74.974,74.983z"/><path fill="inherit" d="M377.203,377.211c-16.503,16.52-16.503,43.296,0,59.815c16.519,16.52,43.304,16.52,59.806,0c16.52-16.51,16.52-43.295,0-59.815C420.489,360.692,393.722,360.7,377.203,377.211z"/><path fill="inherit" d="M84.567,256c0.018-23.348-18.922-42.279-42.279-42.279c-23.357-0.009-42.297,18.932-42.279,42.288c-0.018,23.348,18.904,42.279,42.279,42.279C65.645,298.288,84.567,279.358,84.567,256z"/><path fill="inherit" d="M469.712,213.712c-23.357,0-42.279,18.941-42.297,42.288c0,23.358,18.94,42.288,42.297,42.297c23.357,0,42.297-18.94,42.279-42.297C512.009,232.652,493.069,213.712,469.712,213.712z"/><path fill="inherit" d="M74.991,377.22c-16.519,16.511-16.519,43.296,0,59.806c16.503,16.52,43.27,16.52,59.789,0c16.52-16.519,16.52-43.295,0-59.815C118.278,360.692,91.511,360.692,74.991,377.22z"/><path fill="inherit" d="M437.026,134.798c16.52-16.52,16.52-43.304,0-59.824c-16.519-16.511-43.304-16.52-59.823,0c-16.52,16.52-16.503,43.295,0,59.815C393.722,151.309,420.507,151.309,437.026,134.798z"/></g></svg>` | Set a loader component to show while the component waits for the next load of data. e.g. `<span><i className="fa fa-spinner fa-spin fa-fw"></i></span>` | - |
| `hierarchical` | boolean  | false | Set hierarchical categories ( with sub-categories ) to attribute `options`. | - |
| `indentation` | string  | - | Set hierarchical indentation placeholders, valid when the `hierarchical` is true. | - |
| `doubleIndent` | boolean  | false | Set double indent effect, valid when the `hierarchical` is true. | - |
| `multiSelect` | JSON Object | `{"valid": false, "selectAll": true, "selectAllLabel": "Select all", "deselectAllLabel": "Deselect all"}` | Enable multi-select. <blockquote>**Parameters Description:** <ol><li>`valid` -->  *(Boolean)* *(required)* Set component in which multiple options can be selected at once to be valid.</li><li>`selectAll` --> *(Boolean)* *(required)* Enables select all button.</li><li>`selectAllLabel` -->  *(String)* Sets the select all button label. (Support html tags)</li><li>`deselectAllLabel` -->  *(String)* Deselect all items button label. (Support html tags)</li></ol></blockquote> | - |
| `multiSelectEntireAreaTrigger` | boolean | true | The entire Text box area can be triggered. <blockquote>Valid when `multiSelect` parameter exists</blockquote> | - |
| `multiSelectSelectedItemOnlyStatus` | JSON Object | `{"itemsLabel":"{num} Selected","allItemsLabel":"All Content ({num})","noneLabel":"No items selected"}` | Let the selected options only display the status without detailed options. It is not recommended for search to trigger request. <hr /> The `{num}` is a placeholder which will be automatically replaced by a number. <blockquote>Valid when `multiSelect` parameter exists</blockquote> | - |
| `depth` | number  | 1055 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. | - |
| `winWidth` | number \| function  | `auto` | Set the container width of options. Such as: `500px` or `() => window.innerWidth/2 + 'px'`  | - |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. | - |
| `defaultValue` | string \| JSON Object \| Array | - | Specifies the default value. Use when the component is not controlled. It does not re-render the component because the incoming value changes. | - |
| `value` | string \| JSON Object \| Array | - | Set a default value for this control. <blockquote>**Use String:**<ol><li>**(Single selection)** the default value will be used like `value-1`</li><li>**(Multiple selection)** (the `multiSelect` property exists), the default value will be used like `[value-1][value-2]`. If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`value-1,value-2`</li></ol></blockquote> <hr /> <blockquote>**Use Object or Array:**<ol><li>**(Single selection)** the default value will be used like `{"label":"Option 0","value":"value-0","queryString":""}` </li><li>**(Multiple selection)** (the `multiSelect` property exists), the default value will be used like `[{value: 'value-1',label:'Option 1', queryString: ''},{value: 'value-2',label:'Option 2', queryString: ''}]`</li></ol></blockquote> | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `autoComplete` | string  | `off` | The autocomplete attribute provides a hint to the user agent specifying how to, or indeed whether to, prefill a form control. | - |
| `autoCapitalize` | string  | `off` | The autocapitalize property of the HTMLElement interface represents the element's capitalization behavior for user input. | - |
| `spellCheck` | boolean  | false | The spellcheck global attribute is an enumerated attribute that defines whether the element may be checked for spelling errors. | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `controlArrow` | ReactNode  | `<svg width="10px" height="10px" viewBox="0 -4.5 20 20"><g stroke="none" strokeWidth="1" fill="none"><g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5"><g transform="translate(56.000000, 160.000000)"><path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39"></path></g></g></g></svg>` | Set an arrow of control | - |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onFetch`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> <hr /> <blockquote>!!!Note: Using `data` and `value` at the same time may cause two different parameter transfers, which will affect the final rendering. Please choose the appropriate usage based on your business. Generally speaking, if the `multiSelect` exists, it is not recommended to use the `data`.</blockquote>| - |
| `firstRequestAutoExec` | boolean  | true | Handling async data with the click event. When the control is clicked, the interface request is automatically triggered, which can avoid the request when the page is loaded.  <blockquote>Valid when the series attribute `fetch<METHOD_NAME>` is exist</blockquote> | - |
| `fetchTrigger` | boolean  | false | Use search button to trigger data queries. | - |
| `fetchNoneInfo` | string  | `No match yet` | The text of the data not fetched. | - |
| `fetchUpdate` | boolean  | false | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. | - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',99,'string 1','$QUERY_STRING']` <br /><blockquote>There should be at least one parameter which is the query string. <br />`$QUERY_STRING` identifies the ID of the automatic query, and its value depends on the user input string. In general, `$QUERY_STRING` is only used when `fetchTrigger` is true</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `renderOption` | function  | - | A function to render content of the option, replaces the default content of the option. It passes two parameters. <br /> <ol><li>The first is the option data (**JSON Object**)</li><li>The second is the index of the current option (**Number**)</li></ol>| - |
| `renderSelectedValue` | function  | - | Render the selected value. It passes two parameters. <br /> <ol><li>The first is the slected data (**JSON Object**)</li><li>The second is the remove function of item (**Function**)</li></ol> <blockquote>Valid when `multiSelect` parameter exists</blockquote> | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns five callback values. <br /> <ol><li>The first is the current control (**HTML Element**)</li><li>The second is the control of the value save (**HTML Element**)</li><li> The third is the current value (**String**)</li><li>The fourth is the fetched data (**Array**)</li><li>The last is a string passed by the `data` attribute (**Any**)</li></ol> | - |
| `onLoad` | function  | - | Call a function when the component has been rendered completely. It returns three callback values. <br /> <ol><li>The first is the current control</li><li>The second is the control of the value save</li><li> The third is the current value (**String**)</li></ol> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the current control (**HTML Element**)</li><li>The second is the control of the value save (**HTML Element**)</li><li>The last is the data [Exposes the JSON (Returns an Array Collection when `multiSelect` is enabled) format data] about the option as an argument. (**JSON Object**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves a form field. It returns only one callback value which is the Control (**HTML Element**) | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the Control (**HTML Element**)| - |
| `onKeyPressed` | function  | - | Call a function when the user presses a key on the keyboard. It returns three callback values. <br /> <ol><li>The first is the current event (**KeyboardEvent**)</li><li>The second is the current control (**HTML Element**)</li><li>The last is the control of the value save (**HTML Element**)</li></ol> | - |


It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.


---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags. But must have at least a string other than the HTML Tag, because the HTML Tag in this field will be sanitized when assigning the value. such as `<small>abc</small>efg`</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `optgroup` | array | - | Creates a grouping of options. It will be displayed using the value of `label`. such as `[{"label":"Option 0","value":"value-0","queryString":""},{"label":"Group 1","value":"","queryString":"","optgroup":[{"label":"Option 1","value":"value-1","queryString":""},{"label":"Option 2","value":"value-2","queryString":""}]}]` | - |
| `queryString` | string | - | Quick query string, such as Chinese pinyin or English initials | ✅ |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |
| `callback` | function | - | Click on the callback function for this option. <blockquote>If this field exists, triggering it will not close the pop-up.</blockquote> | - |



### Create Callback via `fetchCallback` 

A successful response returns the details of the callback such as Sample Request Body:

Among them, `label`, `listItemLabel`, `value`, `optgroup`, `queryString`, `disabled` and `callback` are attributes used by the system, and other attributes can be added freely.



```json
[
    {
        "label": "banana",
        "listItemLabel": "banana (No. 0)",
        "value": "b",
        "queryString": "banana,xiangjiao,xj",
        "disabled": false
    },
    {
        "label": "apple",
        "listItemLabel": "apple (No. 1)",
        "value": "a",
        "queryString": "apple,pingguo,pg",
        "disabled": false
    },
    ...
]
```


## Types

```typescript
interface OptionConfig {
    disabled?: boolean;
    optgroup?: any[];
    group?: boolean;
    label: string;
    listItemLabel?: string;
    value: string | number | boolean;
    queryString: string | number;
    callback?: () => void | Promise<void>;
    [key: string]: string | number | boolean | any[] | (() => void | Promise<void>) | undefined;
}

interface MultiSelectValue {
    items: { label: string; value: string }[];
    labels: string[];
    values: string[];
    labelsOfString: string;
    valuesOfString: string;
}

type SelectOptionChangeFnType = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    element: HTMLElement,
    value: OptionConfig | MultiSelectValue
) => void | Promise<void>;
```