# Dropdown Menu




## General

```js
import React from "react";
import DropdownMenu from 'funda-ui/DropdownMenu';

// component styles
import 'funda-ui/DropdownMenu/index.css';

export default () => {

    return (
        <>
            
        <h3>When selected, the label is not displayed</h3>
        {/* ================================================================== */} 
        <DropdownMenu
            wrapperClassName="dd-menu-default"
            listClassName="dd-menu-default__inner"
            hyperlinkClassName="dd-menu-default__item"
            triggerButton={false}
            triggerClassName="d-block-inline w-auto"
            triggerContent=""
            triggerSwitchActive={true}
            iconLeft={<><span className="pe-1 opacity-50">

                <svg width="1rem" height="1rem" viewBox="0 0 28 28">

                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-310.000000, -208.000000)" fill="#000000">
                            <path d="M328,232 L312,232 C310.896,232 310,232.896 310,234 C310,235.104 310.896,236 312,236 L328,236 C329.104,236 330,235.104 330,234 C330,232.896 329.104,232 328,232 L328,232 Z M336,224 L312,224 C310.896,224 310,224.896 310,226 C310,227.104 310.896,228 312,228 L336,228 C337.104,228 338,227.104 338,226 C338,224.896 337.104,224 336,224 L336,224 Z M312,220 L328,220 C329.104,220 330,219.104 330,218 C330,216.896 329.104,216 328,216 L312,216 C310.896,216 310,216.896 310,218 C310,219.104 310.896,220 312,220 L312,220 Z M312,212 L336,212 C337.104,212 338,211.104 338,210 C338,208.896 337.104,208 336,208 L312,208 C310.896,208 310,208.896 310,210 C310,211.104 310.896,212 312,212 L312,212 Z" >

                            </path>
                        </g>
                    </g>
                </svg>

            </span></>}
            name="app-ddmenu-1"
            options={[
                { label: '', listItemLabel: "Option 1", value: "option-1" },
                { label: '', listItemLabel: "Option 2", value: "option-2" },
                { label: '', listItemLabel: "Option 3", value: "option-3" }
            ]}
            onChange={(res, currentData) => {
                console.log(res, currentData); // option-2 {label: 'Option 2', value: 'option-2'}
            }}
        />



        <h3>Using default styles</h3>
        {/* ================================================================== */} 
        <DropdownMenu
            wrapperClassName="dd-menu-default"
            listClassName="dd-menu-default__inner"
            hyperlinkClassName="dd-menu-default__item"
            triggerButton={false}
            triggerClassName="d-block-inline w-auto"
            triggerContent={`Option 1`}
            triggerSwitchActive={true}
            name="app-ddmenu-1"
            options={[
                { label: "Option 1", value: "option-1" },
                { label: "Option 2", value: "option-2" },
                { label: "Option 3", value: "option-3" }
            ]}
            onChange={(res, currentData) => {
                console.log(res, currentData); // option-2 {label: 'Option 2', value: 'option-2'}
            }}
        />


        <h3>Using Bootstrap's styles</h3>
        {/* ================================================================== */}
        <DropdownMenu
            iconLeft={<><span className="pe-1 opacity-50"><svg width="15px" height="15px" viewBox="-5 0 20 20">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-265.000000, -2679.000000)" fill="var(--bs-link-color)">
                        <g transform="translate(56.000000, 160.000000)">
                            <path d="M219,2521 L219,2537.998 C219,2538.889 217.923,2539.335 217.293,2538.705 L214.707,2536.119 C214.317,2535.729 213.683,2535.729 213.293,2536.119 L210.707,2538.705 C210.077,2539.335 209,2538.889 209,2537.998 L209,2521 C209,2519.895 209.895,2519 211,2519 L217,2519 C218.105,2519 219,2519.895 219,2521">
                            </path>
                        </g>
                    </g>
                </g>
            </svg></span></>}
            hoverOn={true}
            hoverOff={true}
            wrapperClassName="dropdown"
            listClassName="dd-menu-menu"
            hyperlinkClassName="dd-menu-item"
            triggerButton={true}
            triggerClassName="btn btn-warning btn-sm"
            triggerContent={`<img src="https://placehold.co/30x30" alt="" />`}
            name="app-ddmenu-2"
            options={[
                { label: "<s>Option 1</s>", listItemLabel: "Option 1 (No: 001)", value: "option-1", mydata: "a" },
                { label: "<span style='color: red'>Option 2</span>", listItemLabel: "Option 2 (No: 002)", value: "option-2", mydata: "b"}
            ]}
            onChange={(res, currentData) => {
                console.log(res, currentData); // option-1 {label: '<s>Option 1</s>', listItemLabel: 'Option 1 (No: 001)', value: 'option-1', mydata: 'a'}
            }}
        />



          
        </>
    );
}
```


## API

### Dropdown Menu
```js
import DropdownMenu from 'funda-ui/DropdownMenu';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `wrapperClassName` | string | `dd-menu-default` | The class name of the menu wrapper. | - |
| `listClassName` | string | `dd-menu-default__inner` | The class name of the list. | - |
| `hyperlinkClassName` | string | `dd-menu-default__item` | The class name of the hyperlink of each item. | - |
| `showClassName` | string | `show` | Activates the class name for the display list | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `hoverOn` | boolean | false | Use hover to trigger opening. | - |
| `hoverOff` | boolean | false | Use hover to trigger closing. | - |
| `hoverDelay` | number | 150 | This will delay applying the hover effects. | - |
| `iconLeft` | ReactNode  | - | Set the left icon of this control | - |
| `iconRight` | ReactNode  | - | Set the right icon of this control | - |
| `name` | string  | - | Set a name for the form field for this component. Name is not deprecated when used with form fields. | - |
| `triggerButton` | boolean  | false | Whether to use button style, otherwise use "div" | - |
| `triggerClassName` | string  | `d-block-inline w-auto` | Specify a class for your trigger | - |
| `triggerContent` | string  | - | Set a piece of text for the trigger <blockquote>Support html tags</blockquote> | - |
| `triggerSwitchActive` | boolean  | false | When enabled, the corresponding option content will be displayed after selecting an option | - |
| `options` | array  | - | Specify data of Dropdown Menu as a JSON string format. Such as: <br /> `[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}]` <blockquote>Support html tags</blockquote> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the value selected (**String**)</li><li>The last is data about the option as an argument (**JSON Object**).</li></ol> | - |
| `tabIndex` | number  | -1 | This attribute allows developers to make HTML elements focusable. | - |



Array configuration properties of the `options`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option <blockquote>Support html tags</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |


Among them, `label` and `value` are attributes used by the system, and other attributes can be added freely

