# Search Bar


## API

### Search Bar
```js
import SearchBar from 'funda-ui/SearchBar';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `controlGroupWrapperClassName` | string | `input-group` | The class name of the control group wrapper. | - |
| `controlGroupTextClassName` | string | `input-group-text` | The class name of the control group text. | - |
| `btnId` | string  | - | ID of the specified button. | - |
| `appearance` | string | - | The overlay style of the control. The optional values are:<br />**corners:**<br />`pill` | - |
| `isSearchInput` | boolean | false | Whether to enable the search input, it will have an clear button | - |
| `value` | string | - | Set a default value for this control | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `units` | string | - | Specify a unit identification string. Such as `em`, `px`, and so on. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `maxLength` | number | - | Defines the maximum number of characters | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `icon` | ReactNode  | `<svg width="1.2em" height="1.2em" fill="#333" viewBox="0 0 16 16"><path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fillRule="evenodd" /></svg>` | Set the icon of search | - |
| `autoComplete` | string  | off | Turn off autocomplete for input fields. | - |
| `onClick` | function  | - | Call a function when the value of an HTML element is clicked. | - |
| `onKeyPressedCallback` | function  | - | Return value from `onKeyPressedCallback` property to format the data of the control element, which will match the data structure of the component. <br >At the same time it returns the Control Event, you will use this function and use the `return` keyword to return a new value. <blockquote>It fires when the keyboard is pressed. If return is not set, it will not return.</blockquote> | - |
| `onSubmit` | function  | - | Call a function when a form is submitted. | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the  Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves an form field. It returns two callback values. <br /> <ol><li>The first is the  Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li></ol> | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns two callback values. <br /> <ol><li>The first is the  Control Event (**Event**)</li><li>The second is the composition event (**Boolean**)</li></ol> | - |
| `onPressEnter` | function  | - | The callback function that is triggered when Enter key is pressed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the composition event (**Boolean**)</li></ol> | - |



It accepts all props which this control support.

## Examples

```js
import React from "react";
import SearchBar from 'funda-ui/SearchBar';

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
                onSubmit={handleSubmit}
            />

        </>
    );
}
```



## No spacing

```js
import React from "react";
import SearchBar from 'funda-ui/SearchBar';

export default () => {


    return (
        <>

            <SearchBar
                ...
                wrapperClassName="position-relative"
                ...
            />

             <SearchBar
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```