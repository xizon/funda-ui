# Multiple Checkboxes


## API

### Multiple Checkboxes
```js
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `tableLayout` | boolean | false | Use **\<table\>** HTML tag to display options. | - |
| `tableLayoutClassName` | string | - | The class name of HTML tag `<table>`. <blockquote>It is valid when `tableLayout` is "true"</blockquote> | - |
| `tableLayoutCellClassName` | string | - | The class name of HTML tag `<td>`. <blockquote>It is valid when `tableLayout` is "true"</blockquote> | - |
| `groupWrapperClassName` | string | - | The class name of the radio group wrapper. | - |
| `groupLabelClassName` | string | - | The class name of the radio group label. | - |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. | - |
| `inline` | boolean | true | If true the group checkboxes or radios are on the same horizontal row. | - |
| `options` | JSON Object Literals | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},{"label": "Option 3","value": "value-3"}]`| - |
| `value` | string | - | Set a default value for this control. Please separate multiple values with square brackets. Such as `[tag1][tag2][tag3]` <blockquote>If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`tag1,tag2,tag3`</blockquote> | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (**Array**) | - |
| `onLoad` | function  | - | Call a function when the component has been rendered completely. It returns three callback values. <br /> <ol><li>The first is the passed data （**Array**）</li><li>The second is the default value (**String** \| **undefined**)</li><li> The third is the component wrapper (**HTMLDivElement**)</li></ol> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns seven callback values. <br /> <ol><li>The first is the control of current checkbox</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li><li>The fourth is the current label text (**Array**)</li><li>The fifth is the current string label text (**String**)</li><li>The sixth is the current value (**JSON Object**)</li><li>The last is the value collection (**JSON Object Array**)</li></ol>  | - |




It accepts all props which this control support.


---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. | ✅ |
| `optgroup` | array | - | Creates a grouping of options. It will be displayed using the value of `label`. such as `[{"label":"Option 0","value":"value-0"},{"label":"Group 1","value":"","optgroup":[{"label":"Option 1","value":"value-1"},{"label":"Option 2","value":"value-2"}]}]` | - |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |



## Examples

```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const [val, setVal] = useState('[value-1][value-3]');

    return (
        <>
          
            <MultipleCheckboxes 
                name="name"
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData, dataCollection);
                    /*
                    <input type="checkbox" ... value="value-1">,
                    ['value-3', 'value-2'],
                    '[value-3][value-2]',
                     ['Option 3', '<del style=color:red>deprecate</del>Option 2'],
                    '[Option 3][<del style=color:red>deprecate</del>Option 2]',
                    {"label": "Option 1","value": "value-1"}
                    */
                }}
            />



    
        </>
    );
}
```



```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const [val, setVal] = useState('[<del style=color:red>deprecate</del>Option 2][Option 4]');  // default value is label value

    return (
        <>
          
            <MultipleCheckboxes 
                name="name"
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
            />

    
        </>
    );
}
```


## No spacing

```js
import React from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

export default () => {


    return (
        <>

            <MultipleCheckboxes
                ...
                wrapperClassName="position-relative"
                ...
            />

             <MultipleCheckboxes
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Use table to display options

The options will be displayed using \<table\> tag.


```css
.app-table-nested {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;

    td {
        display: table-cell !important;
        border: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: .5rem .5rem !important;

        label,
        .d-inline-block {
            display: contents !important;
        }

        [type="checkbox"],
        [type="radio"] {
            float: none;
            margin-left: 0;
            margin-right: .5rem;
        }

    }
    tr td:last-child {
        border-color: transparent !important;
    }
}
```

```js
import React from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

export default () => {


    return (
        <>

            <MultipleCheckboxes
                ...
                tableLayout
                tableLayoutClassName="table table-bordered mb-0 app-table-nested"
                tableLayoutCellClassName=""
                ...
            />

        </>
    );
}
```

## Safe Asynchronous Example

When a `useState()` in a child component changes state, it will cause the entire parent component to re-render, resulting in invalidation such as **checkbox**.

At this time, we need to use `useMemo()` to wrap this subcomponent to avoid problems caused when the child component triggers a method of `useState()` of the parent component.



```js
import React, { useState, useMemo } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


// DO NOT move `useMemo` to component
function MemoMultipleCheckboxes(props: any) {
    const {val, callback} = props;
    return useMemo(() => {
        return <MultipleCheckboxes
                wrapperClassName=""
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    callback(value);
                }}
            />
    }, []);
}

export default () => {

    const [myCheckboxes, setMyCheckboxes] = useState('[<del style=color:red>deprecate</del>Option 2][Option 4]');  // default value is label value

    return (
        <>
          
            <MemoMultipleCheckboxes 
                val={"value-3"} 
                name="name"
                callback={setMyCheckboxes} 
            />
            
            

    
        </>
    );
}

```



## The Option Group element

Specify the content in the `optgroup` attribute of `options`.


```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const [val, setVal] = useState('[value-1][value-3]');

    return (
        <>
          
            <MultipleCheckboxes 
                groupWrapperClassName="border rounded p-2 mb-2"
                groupLabelClassName="fw-bold mb-2"
                name="name"
                value={val}
                options={[
                    { "label": "Option 0", "value": "value-0" },
                    {
                        "label": "Group 1", "value": "", "optgroup": [
                            { "label": "Option 1", "value": "value-1" },
                            { "label": "Option 2", "value": "value-2" }
                        ]
                    },
                    {
                        "label": "Group 2", "value": "", "optgroup": [
                            { "label": "Option 3", "value": "value-3" },
                            { "label": "Option 4", "value": "value-4" },
                            { "label": "Option 5", "value": "value-5" }
                        ]
                    }
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData, dataCollection);
                }}
            />

    
        </>
    );
}
```





## Asynchronous Usage via HTTP Request

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
import axios from 'axios';

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

    const [val, setVal] = useState('[bar2]');

    return (
        <>

            <MultipleCheckboxes 
                name="name"
                value={val}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item, index) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            customArg1: index
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar","customArg1": 0},
                        {"label": "foo2","value": "bar2","customArg1": 1},
                        {"label": "foo3","value": "bar3","customArg1": 2}
                    ]  
                    */

                    return formattedData;
                }}
                onFetch={(res) => {
                    console.log('onFetch: ', res);
                }}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData, dataCollection);
                }}
            />


        </>
    );
}
```




## Do some actions when Radio rendering is complete


```js
import React from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';

export default () => {

    const optionsFlat = (allData: any[]) => {

        const flatItems: any[] = [];

        allData.forEach((item: any) => {
            if (typeof item.optgroup !== 'undefined') {
                item.optgroup.forEach((opt: any) => {
                    flatItems.push(opt);
                });
            } else {
                flatItems.push(item);
            }
        });

        return flatItems;
    };


    return (
        <>           
            <MultipleCheckboxes
                name="name"
                value="value-2"
                options={[
                    {"label": "Option 1","value": "value-1","attr1": false},
                    {"label": "Option 2","value": "value-2","attr1": true},
                ]}
                onLoad={(data: any, defaultVal: any, root: any) => {
                              
                    const _flatData = optionsFlat(data);
                
                    if (root) {
                        [].slice.call(root.querySelectorAll(`[type="checkbox"]`)).forEach((el: HTMLInputElement, i:number) => {
                            if (defaultVal.includes(_flatData[i].value) && _flatData[i].attr1) {
                                (el.closest('.form-check') as HTMLDivElement).style.backgroundColor = 'red';
                            } else {
                                (el.closest('.form-check') as HTMLDivElement).style.backgroundColor = 'yellow';
                            }
        
                        });
                    }
                    
                }}
            />

        </>
    );
}
```


## Filter results individually

Sometimes `onChange` requires a new result to satisfy the business. Please do not use `onChange` to modify the `value` in real time, because it may cause incorrect rendering.

```js
import React, { useId, useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const uniqueID = useId();
    const [val, setVal] = useState('[<del style=color:red>deprecate</del>Option 2][Option 4]');  // default value is label value

    return (
        <>
          
            <MultipleCheckboxes 
                name="name"
                value={val}
                options={[
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any, dataCollection: any) => {


                    // Exclude the value of "Option 3"
                    const _input: any = document.getElementById(`checkboxes-res-${uniqueID}`);
                    if (_input !== null) {
                        _input.value = value.filter((v: any) => v != 'value-3').map((v: any) => `[${v}]`).join('');
                    }
                    
                }}
            />

            <input
                tabIndex={-1}
                type="text"
                id={`checkboxes-res-${uniqueID}`}
                name="name-here"
            />


    
        </>
    );
}
```

