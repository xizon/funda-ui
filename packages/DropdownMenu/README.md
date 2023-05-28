# Dropdown Menu


## API

### Dropdown Menu
```js
import DropdownMenu from 'react-pure-bootstrap/DropdownMenu';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `dropdown-default` | The class name of the menu wrapper. |
| `listClassName` | string | `dropdown-menu-default` | The class name of the list. |
| `hyperlinkClassName` | string | `dropdown-item-default` | The class name of the hyperlink of each item. |
| `showClassName` | string | `show` | activates the class name for the display list |
| `name` | string  | - | Set a name for the form field for this component. Name is not deprecated when used with form fields. |
| `triggerButton` | boolean  | false | Whether to use button style, otherwise use "div" |
| `triggerClassName` | string  | `d-inline w-auto` | Specify a class for your trigger |
| `triggerContent` | string  | - | Set a piece of text for the trigger |
| `options` | array  | - | Specify data of Dropdown Menu as a JSON string format. Such as: <br /> `[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}]` |
| `onChange` | function \| null  | - | This function is called whenever the data is updated. Exposes the JSON format data about the option as an argument. You can use it like this: `(res) => console.log(res.value)` |
| `tabIndex` | number  | -1 | This attribute allows developers to make HTML elements focusable. |


Array configuration properties of the `options`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option |
| `value` | string | - | Specify the value for each option |



## Examples

```js
import React from "react";
import DropdownMenu from 'react-pure-bootstrap/DropdownMenu';

// component styles
import 'react-pure-bootstrap/DropdownMenu/index.css';

export default () => {

    return (
        <>
            

        <h3>Using default styles</h3>
        {/* ================================================================== */} 
        <DropdownMenu
            wrapperClassName="dropdown-default"
            listClassName="dropdown-menu-default"
            hyperlinkClassName="dropdown-item-default"
            triggerButton={false}
            triggerClassName="d-inline w-auto"
            triggerContent={`Option 1`}
            name="app-ddmenu-1"
            options={[
                { label: "Option 1", value: "option-1" },
                { label: "Option 2", value: "option-2" },
                { label: "Option 3", value: "option-3" }
            ]}
            onChange={(res) => {
                console.log(res.value); // {"label": "-","value": "-"}
            }}
        />


        <h3>Using Bootstrap's styles</h3>
        {/* ================================================================== */}
        <DropdownMenu
            wrapperClassName="dropdown"
            listClassName="dropdown-menu"
            hyperlinkClassName="dropdown-item"
            triggerButton={true}
            triggerClassName="btn btn-secondary btn-sm"
            triggerContent={`Option 1`}
            name="app-ddmenu-2"
            options={[
                { label: "Option 1", value: "option-1" },
                { label: "Option 2", value: "option-2" },
                { label: "Option 3", value: "option-3" }
            ]}
            onChange={(res) => {
                console.log(res.value); // {"label": "-","value": "-"}
            }}
        />



          
        </>
    );
}
```