# Multiple Checkboxes


## API

### Multiple Checkboxes
```js
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `groupWrapperClassName` | string | - | The class name of the radio group wrapper. |
| `groupLabelClassName` | string | - | The class name of the radio group label. |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. |
| `inline` | boolean | true | If true the group checkboxes or radios are on the same horizontal row. |
| `options` | JSON Object Literals | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},{"label": "Option 3","value": "value-3"}]`|
| `value` | string | - | Set a default value for this control. Please separate multiple values with square brackets. Such as `[tag1][tag2][tag3]` <blockquote>If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`tag1,tag2,tag3`</blockquote> |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns six callback values. <br /> <ol><li>The first is the control of current checkbox</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li><li>The fourth is the current label text (**Array**)</li><li>The fifth is the current string label text (**String**)</li><li>The sixth is the current value (**JSON Object**)</li></ol>  |




It accepts all props which this control support.


---

JSON Object Literals configuration properties of the `options`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | string | - | Specify the label text for each option. |
| `optgroup` | array | - | **(Optional)** Creates a grouping of options. It will be displayed using the value of `label`. such as `[{"label":"Option 0","value":"value-0"},{"label":"Group 1","value":"","optgroup":[{"label":"Option 1","value":"value-1"},{"label":"Option 2","value":"value-2"}]}]` |
| `listItemLabel` | string | - | **(Optional)** Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> |
| `value` | string | - | Specify the value for each option |
| `disabled` | boolean | - | **(Optional)** When present, it specifies that an option should be disabled. |



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
                    {"label": "<del style=color:red>deprecate</del>Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData);
                    /*
                    <input type="checkbox" ... value="value-1">,
                    ['value-3', 'value-2'],
                    '[value-3][value-2]',
                     ['Option 3', '<del style=color:red>deprecate</del>Option 2'],
                    '[Option 3][<del style=color:red>deprecate</del>Option 2]',
                    {"label": "Option 1","value": "value-1"}
                    */
                   
                    setVal(valueStr);
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
                    {"label": "<del style=color:red>deprecate</del>Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","disabled":true}
                ]}
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
                onChange={(e: any, value: any, valueStr: any, label: any, labelStr: any, currentData: any) => {
                    console.log(e, value, valueStr, label, labelStr, currentData);
                    setVal(valueStr);
                }}
            />

    
        </>
    );
}
```
