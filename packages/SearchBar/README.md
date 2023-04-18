# Search Bar


## API

### Search Bar
```js
import SearchBar from 'react-pure-bootstrap/SearchBar';
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
| `autoComplete` | string  | - | Turn off autocomplete for input fields. |
| `onClick` | function  | - | Call a function when a form is submitted. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values, one is the control and the other is the composition event (a boolean) |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values, one is the control and the other is the composition event (a boolean) |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns two callback values, one is the control and the other is the composition event (a boolean) |


It accepts all props which this control support.

## Examples

```js
import React from "react";
import SearchBar from 'react-pure-bootstrap/SearchBar';

export default () => {

    function handleChange(e, onComposition) {

        let temp = e.target.value;
        if (!onComposition) {
            console.log(temp);
        }
    }

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
                onChange={handleChange}
                onClick={handleSubmit}
            />

        </>
    );
}
```