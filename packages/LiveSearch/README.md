# Live Search


## API

### Live Search
```js
import LiveSearch from 'react-pure-bootstrap/LiveSearch';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `btnId` | string  | - | ID of the specified button. |
| `appearance` | string | - | The overlay style of the control. The optional values are:<br />**corners:**<br />`pill` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `icon` | ReactNode  | - | Set the icon of search |
| `fetchTrigger` | boolean  | false | Use buttons to trigger data queries. |
| `fetchNoneInfo` | string  | - | The text of the data not fetched. <br />Only takes effect when `fetchTrigger` is *true*. |
| `fetchUpdate` | boolean  | false | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']` <br /><blockquote>There should be at least one parameter which is the query string.</blockquote> |
| `fetchResponseField` | array  | - | Specify the field name of the response, it should match your backend data. <br /> Such as `{label: 'item_name',value: 'item_code'}` |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns one callback value which is the fetched data (an array) |
| `onSelect` | function  | - | Call a function when option selected from list. It returns two callback values, one is the control and the other is the fetched data (an array) |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values, one is the control and the other is the fetched data (an array) |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values, one is the control and the other is the fetched data (an array) |




## Examples

```js
import React from "react";
import LiveSearch from 'react-pure-bootstrap/LiveSearch';


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
}

export default () => {

    return (
        <>
            <LiveSearch
                btnId="app-livesearch-btn"
                name="app-livesearch-name"
                label={t('民族')}
                fetchTrigger={false}
                fetchUpdate={false}
                fetchNoneInfo="No match yet"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchResponseField={{
                    label: 'item_name',
                    value: 'item_code'                        
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