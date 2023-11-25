# Live Search


## API

### Live Search
```js
import LiveSearch from 'funda-ui/LiveSearch';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `controlClassName` | string | `form-control` | The class name of the control. |
| `btnId` | string  | - | ID of the specified button. |
| `appearance` | string | - | The overlay style of the control. The optional values are:<br />**corners:**<br />`pill` |
| `depth` | number  | 100 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `icon` | ReactNode  | - | Set the icon of search |
| `winWidth` | number \| function  | `auto` | Set the container width of options. Such as: `500px` or `() => window.innerWidth/2 + 'px'`  |
| `fetchTrigger` | boolean  | false | Use buttons to trigger data queries. |
| `fetchNoneInfo` | string  | - | The text of the data not fetched. <br />Only takes effect when `fetchTrigger` is *true*. |
| `fetchUpdate` | boolean  | false | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',99,'string 1','$QUERY_STRING']` <br /><blockquote>There should be at least one parameter which is the query string.  <br />`$QUERY_STRING` identifies the ID of the automatic query, and its value depends on the user input string.</blockquote> |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br >At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (an array) |
| `onSelect` | function  | - | Call a function when option selected from list. It returns two callback values. <br /> <ol><li>The first is the control</li><li>The second is the fetched data (an array)</li></ol>  |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the control</li><li>The second is the fetched data (an array)</li></ol> |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values. <br /> <ol><li>The first is the control</li><li>The second is the fetched data (an array)</li></ol> |



### Create Callback 

A successful response returns the details of the callback such as Sample Request Body:

Among them, `label`, `value` and `queryString` are attributes used by the system, and other attributes can be added freely



## Examples

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import LiveSearch from 'funda-ui/LiveSearch';
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
            <LiveSearch
                depth={100}
                btnId="app-livesearch-btn"
                name="app-livesearch-name"
                label="String"
                fetchTrigger={false}
                fetchUpdate={false}
                fetchNoneInfo="No match yet"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['$QUERY_STRING',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar","queryString": "fb,foobar"},
                        {"label": "foo2","value": "bar2","queryString": "fb2,foobar2"},
                        {"label": "foo3","value": "bar3","queryString": "fb3,foobar3"}
                    ]  
                    */

                    return formattedData;
                }}
                onFetch={(res) => {
                    console.log('onFetch: ', res);

                }}
                onSelect={(input, res) => {
                    console.log('onSelect: ', res);

                    input.value = res.label;
                    document.querySelector('[name="app-livesearch-name-v"]').value = res.value;
                }}
                onChange={(input, res) => {
                    console.log('onChange: ', res);
                }}
                onBlur={async(input, res) => {
                    console.log('onBlur: ', res);

                    if (Array.isArray(res) && res.length > 0) {
                        const nameInc = res.some( (item) => item.label === input.value);
                        if ( !nameInc ) {
                            input.value = res[0].label;
                            document.querySelector('[name="app-livesearch-name-v"]').value = res[0].value;
                        }
                    }
                }}
            />
            <input
                type="text"
                name="app-livesearch-name-v"
            />
        </>
    );
}
```