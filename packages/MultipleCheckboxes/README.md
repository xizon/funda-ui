# Multiple Checkboxes


## API

### Multiple Checkboxes
```js
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `inline` | boolean | true | If true the group checkboxes or radios are on the same horizontal row. |
| `options` | JSON Object Literals | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2"},{"label": "Option 3","value": "value-3"}]`|
| `value` | string | - | Set a default value for this control. Please separate multiple values with commas. Such as `tag1,tag2,tag3` |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns only one callback values which is the current value (an array) |



## Examples

```js
import React, { useState } from "react";
import MultipleCheckboxes from 'funda-ui/MultipleCheckboxes';


export default () => {

    const [val, setVal] = useState('');

    return (
        <>
          
            <MultipleCheckboxes 
                name="name"
                value={val}
                options={[{"label": "Option 1","value": "value-1","queryString": "option1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},{"label": "Option 3","value": "value-3","queryString": "option3"}]}
                onChange={(data) => {
                    console.log(data);
                    setVal(data.join(','));
                }}
            />

    
        </>
    );
}
```