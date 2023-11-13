# Calendar


## API

### Calendar
```js
import Calendar from 'funda-ui/Calendar';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `militaryTime` | boolean  | false | A 24-hour clock, sometimes referred to as military time, states the time according to the number of hours that have passed since midnight. |
| `tmpl` | function  | - | Call a function. It returns only one callback value which is the current date. You can use this as a template for displaying. |


## Examples

```js
import React from "react";
import Calendar from 'funda-ui/Calendar';

// component styles
import 'funda-ui/Calendar/index.css';


export default () => {

    return (
        <>
            
            <Calendar  />

                  
        </>
    );
}
```