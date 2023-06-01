# Tag Input


## API

### Tag Input
```js
import TagInput from 'react-pure-bootstrap/TagInput';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. |
| `maxTags` | number | 10 | Maximum number of tags that can be added. |
| `value` | string | - | Set a default value for this control. Please separate multiple values with commas. Such as `tag1,tag2,tag3` |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form. |
| `name` | string | - | Name is not deprecated when used with form fields. |
| `placeholder` | string | - |  Specifies a short hint that describes. |
| `maxLength` | number | - | Defines the maximum number of characters |
| `disabled` | boolean | false | Whether it is disabled |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values, one is the control and the other is the current value (an array) |
| `onBlur` | function  | - | Call a function when a user leaves a form field. |
| `onFocus` | function  | - | Call a function when an form field gets focus. |


It accepts all props which this control support.


## Examples

```js
import React from "react";
import TagInput from 'react-pure-bootstrap/TagInput';

// component styles
import 'react-pure-bootstrap/TagInput/index.css';

export default () => {

    return (
        <>
          
            <TagInput 
                placeholder="Add tag..." 
                name="tagInput-name-1" 
                onChange={(e, res) => {
                    console.log(res);
                }}
            />


            <TagInput 
                placeholder="Add tag..." 
                name="tagInput-name-2" 
                maxTags={5} 
                value="tag1,tag2,tag3"
            />


          
        </>
    );
}
```