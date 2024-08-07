# Horizontal Scroll Content


## General

```js
import React from "react";
import HorizontalScrollContent from 'funda-ui/HorizontalScrollContent';

// component styles
import 'funda-ui/HorizontalScrollContent/index.css';

const data = [
    <><span>apple</span></>,
    <><span>apricot</span></>,
    <><span>avocado</span></>,
    <><span>banana</span></>,
    <><span>bell pepper</span></>,
    <><span>blackberry</span></>,
    <><span>bilberry</span></>,
    <><span>black currant</span></>,
    <><span>coconut</span></>,
    <><span>cranberry</span></>
];


export default () => {

    return (
        <>
          
            <HorizontalScrollContent 
                data={data}
                slideOffset={50}
                onMove={(dir: number, wrapperWidth: number, realContentWidth: number, moveOffset: number) => {
                    console.log({ dir, wrapperWidth, realContentWidth, moveOffset });
                }}
            />

          
        </>
    );
}
```


## API

### Horizontal Scroll Content
```js
import HorizontalScrollContent from 'funda-ui/HorizontalScrollContent';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `data` | React.ReactNode[]  | - | Set a default value | - |
| `contentWrapperClassName` | string | - | The class name of the content wrapper. for `<ul>` | - |
| `itemClassName` | string | - | The class name of each item. for `<li>` | - |
| `btnClassName` | string | - | The class name of button. for `<button>` | - |
| `slideOffset` | number  | 50 | The speed of horizontal line scrolling, the value is one pixel length. | - |
| `arrowIcons` | React.ReactNode[] | `[<><svg width="15px" height="15px" viewBox="0 0 24 24" fill="inherit" transform="translate(0 -2)"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" /> </svg></>,<><svg width="15px" height="15px" viewBox="0 0 24 24" fill="inherit" transform="translate(0 -2)"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" /> </svg></>]` | Set left/right icon. Use an array to set four icons. | - |
| `onMove` | function  | - | Call a function when an form field gets focus. It returns two callback values. <br /> <ol><li>The one is the direction in which the content moves, the value is `-1` or `1` (**Number**)</li><li>The second parameter is content wrapper width (**Number**)</li><li>The third parameter is the actual content width (**Number**)</li><li>The last is displacement offset (**Number**).</li></ol> | - |


