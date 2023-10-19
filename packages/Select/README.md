# Select


## API

### Select
```js
import Select from 'funda-ui/Select';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `options` | JSON Object Literals | - | Set the default value using JSON string format for menu of options, like this: `{"Option 1":"value-1","Option 2":"value-2","Option 3":"value-3"}` <br /> <blockquote>Note: Use API data if database query exists. That is, the attribute `fetchXXXX`</blockquote>|
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (an array) |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values, one is the current control and the other is the value. |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.





## Examples

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import Select from 'funda-ui/Select';
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
        const response = await axios.get(`https://api?s=${searchStr}&limit=${limit}`);
        return response;
    }

    	
}

export default () => {

    function handleChange(e, val) {
        console.log(e.target, val);
    }

    return (
        <>
            <Select
                value="value-2"
                name="name"
                label="String"
                options={`{
                    "Option 1":"value-1",
                    "Option 2":"value-2",
                    "Option 3":"value-3",
                    "Option 4":"value-4"
                }`}
                onChange={handleChange}
            />


            <Select
                value="bar2"
                name="name"
                label="String"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar"},
                        {"label": "foo2","value": "bar2"},
                        {"label": "foo3","value": "bar3"}
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




## Examples (Using Vanilla JavaScript to assignment)

Modify options or value with Vanilla JavaScript, which is generally used for dynamic forms with cascading relationships.

```js
import React from "react";
import Select from 'funda-ui/Select';

export default () => {

    function addOptions(data: any[], defaultValue = '', node: HTMLElement) {
        if ( !Array.isArray(data) ) return;
    
        node.innerHTML = '';
        for(let i = 0; i < data.length; i++) {
            const opt = document.createElement("option");
            opt.textContent = data[i].label;
            opt.value = data[i].value;
    
            //
            if ( 
                (typeof node.dataset.value !== 'undefined' && node.dataset.value == data[i].value) ||
                (defaultValue !== '' && data[i].value == defaultValue)
            ) {
                opt.selected = true;
            }
    
            node.appendChild(opt);
        }
    }
    
    

    function handleAssign1(e: any) {
        e.preventDefault();

        const optionsData = [
            {"label": "foo","value": "bar"},
            {"label": "foo2","value": "bar2"},
            {"label": "foo3","value": "bar3"}
        ];
        
        optionsData.unshift({"label": "Select","value": ""});

        const el = document.querySelector('#my-select') as HTMLElement;
        addOptions(optionsData, 'bar2', el);

    }

    function handleAssign2(e) {
        e.preventDefault();


        // If the `data-value` attribute exists
        const optionsData = [
            {"label": "foo","value": "bar"},
            {"label": "foo2","value": "bar2"}
        ];
        
        optionsData.unshift({"label": "Select","value": ""});

        const el = document.querySelector('#my-select2') as HTMLElement;
        addOptions(optionsData, '', el);

    }

    return (
        <>
            <a href="#" onClick={handleAssign1}>Assign1 ("bar2" will be selected)</a>
            <Select
                value=""
                id="my-select"
                name="name1"
                options={``}
            />


            <a href="#" onClick={handleAssign2}>Assign2 ("bar2" will be selected)</a>
            <Select
                data-value="bar2"
                value=""
                id="my-select2"
                name="name2"
                options={``}
            />

        </>
    );
}
```