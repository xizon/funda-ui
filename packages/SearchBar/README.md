# Search Bar


## API

### Search Bar
```js
import SearchBar from 'react-pure-bootstrap/SearchBar';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3` | The class name of the control wrapper. |
| `btnId` | string  | - | ID of the specified button. |
| `appearance` | string | - | The overlay style of the control. The optional values are:<br />**corners:**<br />`pill` |
| `value` | string | - | Set a default value for this control |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `icon` | ReactNode  | - | Set the icon of search |
| `onClick` | function  | - | Call a function when a form is submitted. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. |
| `onBlur` | function  | - | Call a function when a user leaves an input field. |
| `onFocus` | function  | - | Call a function when an input field gets focus. |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import SearchBar from 'react-pure-bootstrap/SearchBar';

export default () => {

    function handleSubmit() {
        console.log('submit');
    }

    return (
        <>

            <SearchBar
                placeholder="Search..."
                name="app-searchfiled"
            />


            <SearchBar
                btnId="app-submit-btn"
                name="app-searchfiled"
                appearance="pill"
                placeholder="Search..."
                onClick={handleSubmit}
            />

        </>
    );
}
```