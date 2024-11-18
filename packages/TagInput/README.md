# Tag Input

> Note: Enter or space to add an element


## General


```js
import React from "react";
import TagInput from 'funda-ui/TagInput';

// component styles
import 'funda-ui/TagInput/index.css';

export default () => {

    return (
        <>
          
            <TagInput 
                placeholder="Add tag..." 
                name="tagInput-name-1" 
                onChange={(e, data, dataStr) => {
                    console.log(e, data, dataStr);
                    /*
                    <input ... placeholder="Add tag..." value="">,
                    [
                        {
                            "content": "1",
                            "id": 0
                        },
                        {
                            "content": "3",
                            "id": 1
                        },
                        {
                            "content": "34",
                            "id": 2
                        }
                    ],
                    '[1][3][34]'
                    */
                }}
            />


            <TagInput 
                placeholder="Add tag..." 
                name="tagInput-name-2" 
                maxTags={5} 
                value="[tag1][tag2]"
            />

            
        </>
    );
}
```


## No spacing

```js
import React from "react";
import TagInput from 'funda-ui/TagInput';

// component styles
import 'funda-ui/TagInput/index.css';


export default () => {


    return (
        <>

            <TagInput
                ...
                wrapperClassName="position-relative"
                ...
            />

             <TagInput
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```



## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
import React, { useRef } from 'react';
import TagInput from 'funda-ui/TagInput';

// component styles
import 'funda-ui/TagInput/index.css';



export default () => {

    const conRef = useRef<any>(null);

    return (


        <>

            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.clear();
                }}
            >Set Empty Value</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    if (conRef.current) conRef.current.set('[tag1][tag2]', () => { console.log('callback') });
                }}
            >Set Custom Value</a>


            <TagInput 
                contentRef={conRef}
                name="name"
            />


        </>
    )
}
```


## API

### Tag Input
```js
import TagInput from 'funda-ui/TagInput';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.RefObject | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set('test value', () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. | - |
| `maxTags` | number | 10 | Maximum number of tags that can be added. | - |
| `value` | string | - | Set a default value for this control. Please separate multiple values with square brackets. Such as `[tag1][tag2][tag3]` <blockquote>If `extractValueByBrackets` is false, the default value will be separated by comma, such as <br />`tag1,tag2,tag3`</blockquote> | - |
| `requiredLabel` | string \| ReactNode | `<span className="position-absolute end-0 top-0 my-2 mx-2"><span className="text-danger">*</span></span>` | It is used to specify a label for an element required. | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `autoComplete` | string  | `off` | The autocomplete attribute provides a hint to the user agent specifying how to, or indeed whether to, prefill a form control. | - |
| `autoCapitalize` | string  | `off` | The autocapitalize property of the HTMLElement interface represents the element's capitalization behavior for user input. | - |
| `spellCheck` | boolean  | false | The spellcheck global attribute is an enumerated attribute that defines whether the element may be checked for spelling errors. | - |
| `maxLength` | number | - | Defines the maximum string length that the user can enter into it. | - |
| `minLength` | number | - | Defines the minimum string length that the user can enter into it. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the control (**HTML Element**)</li><li>The second is the current value (**Array**)</li><li>The third is the current string value (**String**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves a form field. It returns only one callback value which is the Control Event (**Event**) | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the Control Event (**Event**) | - |


It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.
