# Multiple Checkboxes


## API

### Multiple Checkboxes
```js
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. |
| `inline` | boolean | true | If true the group checkboxes or radios are on the same horizontal row. |
| `options` | JSON Object Literals | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},{"label": "Option 3","value": "value-3"}]`|
| `value` | string | - | Set a default value for this control. Please separate multiple values with square brackets. Such as `[tag1][tag2][tag3]` <blockquote>If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`tag1,tag2,tag3`</blockquote> |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the control of current checkbox</li><li>The second is the current value (an array)</li><li>The third is the current string value (a string)</li></ol>  |


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
                options={[{"label": "Option 1","value": "value-1","queryString": "option1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},{"label": "Option 3","value": "value-3","queryString": "option3"}]}
                onChange={(e, data, dataStr) => {
                    console.log(e, data, dataStr);
                    setVal(dataStr);
                }}
            />



    
        </>
    );
}
```