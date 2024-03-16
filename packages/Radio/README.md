# Radio


## API

### Radio
```js
import Radio from 'funda-ui/Radio';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `groupWrapperClassName` | string | - | The class name of the radio group wrapper. |
| `groupLabelClassName` | string | - | The class name of the radio group label. |
| `itemSelectedClassName` | string | `item-selected` | The class name of the item selected. |
| `inline` | boolean | false | If true the group checkboxes or radios are on the same horizontal row. |
| `options` | JSON Object Literals \| JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},{"label": "Option 3","value": "value-3","customAttr1": "attr1","customAttr2": "attr2"}]`<blockquote>Note: Use API data if database query exists. That is, the attribute `fetchXXXX`</blockquote> <br /><blockquote>The label string supports html tags</blockquote>|
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (**Array**) |
| `onLoad` | function  | - | Call a function when the component has been rendered completely. It returns three callback values. <br /> <ol><li>The first is the passed data （**Array**）</li><li>The second is the default value (**String** \| **undefined**)</li><li> The third is the component wrapper (**HTMLDivElement**)</li></ol> |
| `onClick` | function  | - | Call a function when the value of an HTML element is clicked. It returns four callback values. <br /> <ol><li>The first is the current control (**HTML Element**)</li><li>The second is the current value (**String**)</li><li>The third is the data (Exposes the JSON format data) about the option.  (**JSON Object**)</li><li>The last is the current index number  (**Number**)</li></ol> |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns four callback values. <br /> <ol><li>The first is the current control (**HTML Element**)</li><li>The second is the current value (**String**)</li><li>The third is the data (Exposes the JSON format data) about the option.  (**JSON Object**)</li><li>The last is the current index number  (**Number**)</li></ol> |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.



---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags</blockquote> |
| `listItemLabel` | string | - | **(Optional)** Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> |
| `value` | string | - | Specify the value for each option |
| `optgroup` | array | - | **(Optional)** Creates a grouping of options. It will be displayed using the value of `label`. such as `[{"label":"Option 0","value":"value-0"},{"label":"Group 1","value":"","optgroup":[{"label":"Option 1","value":"value-1"},{"label":"Option 2","value":"value-2"}]}]` |
| `extends` | ReactNode | - | **(Optional)** Append additional content to the end of the current control. |
| `disabled` | boolean | - | **(Optional)** When present, it specifies that an option should be disabled. |


### Create Callback 

A successful response returns the details of the callback such as Sample Request Body:

Among them, `label`, `value`, `listItemLabel`, `extends` and `disabled`  are attributes used by the system, and other attributes can be added freely




## Examples

```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    function handleChange(e: any, val: string, currentData: any, currentIndex: number) {
        console.log(e.target, val, currentData, currentIndex);
    }

    return (
        <>

            <Radio
                inline={true}
                value="value-2"
                name="String"
                label="String"
                options={[
                    {"label": "Option 1","value": "value-1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},
                    {"label": "Option 3","value": "value-3","customAttr1": "attr1","customAttr2": "attr2"}
                ]}
                onChange={handleChange}
            />



            <Radio
                inline={true}
                value="Option 3"  // default value is label value
                name="String"
                label="String"
                options={[
                    {"label": "Option 1","value": "value-1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},
                    {"label": "Option 3","value": "value-3","customAttr1": "attr1","customAttr2": "attr2"}
                ]}
                onChange={handleChange}
            />


            <Radio
                inline={true}
                value="value-2"
                name="String"
                label="String"
                options={[
                    { "label": "Option 1", "listItemLabel": "Option 1 (No: 001)", "value": "value-1" },
                    { "label": "<del style=color:red>deprecate</del>Option 2", "listItemLabel": "<del style=color:red>deprecate</del>Option 2 (No: 002)", "value": "value-2" },
                    { "label": "Option 3", "listItemLabel": "Option 3 (No: 003)", "value": "value-3" },
                    { "label": "Option 4", "listItemLabel": "Option 4 (No: 004)", "value": "value-4", "disabled": true, "customAttr1": "attr1","customAttr2": "attr2" }
                ]}
                onChange={handleChange}
            />

                          
        </>
    );
}
```



## The Option Group element

Specify the content in the `optgroup` attribute of `options`.


```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    function handleChange(e: any, val: string, currentData: any, currentIndex: number) {
        console.log(e.target, val, currentData, currentIndex);
    }

    return (
        <>         

            <Radio
                inline={true}
                value="value-2"
                name="name"
                groupWrapperClassName="border rounded p-2 mb-2"
                groupLabelClassName="fw-bold mb-2"
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
                onChange={handleChange}
            />

        </>
    );
}
```



## Append additional controls

Specify the content in the `extends` attribute of `options`.


```js
import React from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    function handleChange(e: any, val: string, currentData: any, currentIndex: number) {
        console.log(e.target, val, data, currentIndex);
    }

    return (
        <>           

            <Radio
                inline={true}
                value="value-2"
                name="String"
                label="String"
                options={[
                    {"label": "Option 1","value": "value-1","extends":<><div className="ms-3" id={`radio-1`}></div></>},
                    {"label": "Option 2","value": "value-2","extends":<><div className="ms-3" id={`radio-2`}><input type="color" /></div></>},
                ]}
                onChange={handleChange}
            />


        </>
    );
}
```



## Asynchronous Usage


```js
import React, { useState } from "react";
import Radio from 'funda-ui/Radio';

export default () => {

    const [val, setVal] = useState<string>('value-2');
    const [opt, setOpt] = useState<any>([
        {"label": "Option 1","value": "value-1"},
        {"label": "Option 2","value": "value-2"},
        {"label": "Option 3","value": "value-3"}
    ]);

    
   
    function handleClick1(e: any) {
        e.preventDefault();
        setVal('value-4');
    }

    function handleClick2(e: any) {
        e.preventDefault();
        setOpt([
            {"label": "Custom Option 1","value": "value-1_1"},
            {"label": "Custom Option 2","value": "value-2_1"}
        ]);
    }

    return (
        <>

            <a href="#" onClick={handleClick1}>change value</a>
            <a href="#" onClick={handleClick2}>change options</a>
            

            <Radio
                inline={true}
                value={val}
                name="String"
                label="String"
                options={JSON.stringify(opt)}
            />
                   
            
        </>
    )
}
```




## Asynchronous Usage via HTTP Request

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import Radio from 'funda-ui/Radio';
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

    function handleChange(e, val, data) {
        console.log(e.target, val, data);
    }

    return (
        <>
            <Radio
                inline={true}
                value="bar2"
                name="String"
                label="String"
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
            />
              


        </>
    );
}
```


## Do some actions when Radio rendering is complete


```js
import React from "react";
import Radio from 'funda-ui/Radio';

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
            <Radio
                inline={true}
                value="value-2"
                name="String"
                label="String"
                options={[
                    {"label": "Option 1","value": "value-1","attr1": false,"extends":<><div className="ms-3" id={`radio-1`}></div></>},
                    {"label": "Option 2","value": "value-2","attr1": true,"extends":<><div className="ms-3" id={`radio-2`}><input type="color" /></div></>},
                ]}
                onLoad={(data: any, defaultVal: any, root: any) => {

                    const _flatData = optionsFlat(data);
  
                    if (root) {
                        [].slice.call(root.querySelectorAll(`[type="radio"]`)).forEach((el: HTMLInputElement, i:number) => {
                            if (_flatData[i].value === defaultVal && _flatData[i].attr1) {
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

