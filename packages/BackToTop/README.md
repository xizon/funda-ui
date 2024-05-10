# Back To Top


## API

### Back To Top
```js
import BackToTop from 'funda-ui/BackToTop';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `speed` | number  | 500| Speed of scrolling up. Amount of time measured in milliseconds. | - |
| `easing` | `linear` \| `easeIn` \| `easeOut` \| `easeInOut` | - | Types of easing animation | - |
| `btnIcon` | ReactNode  | - | Button Icon | - |

Scroll the page down to preview. The button is in the bottom right corner of the screen.



## Examples

```js
import React from "react";
import BackToTop from 'funda-ui/BackToTop';

// component styles
import 'funda-ui/BackToTop/index.css';

export default () => {

    return (
        <>
          
            <BackToTop speed={700} easing="easeOut" btnIcon={<>Top</>} />

          
        </>
    );
}
```