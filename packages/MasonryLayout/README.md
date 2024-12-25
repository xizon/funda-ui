# Masonry Layout



## General

```js
import React from "react";
import MasonryLayout from 'funda-ui/MasonryLayout';

export default () => {

    const heights = [100, 120, 200, 150, 75, 120, 180, 100, 100, 90, 150, 130, 88, 80, 110];

    return (
        <>
          
            <MasonryLayout 
                columns={3} 
                gap={15}
            >
                {
                    Array.from({ length: 12 }).fill(null).map((item: any, i: number) => {
                        const height = heights[i];
                        return (
                            <div 
                                key={i} 
                                className="bg-body-tertiary border p-2"
                                style={{         
                                    minHeight: `${height}px` 
                                }}
                            >
                                minHeight: {height} <small className="bg-primary text-white px-2 py-1 rounded">{i}</small>
                            </div>
                        )
                    })
                }
            </MasonryLayout>
        </>
    );
}
```



## Responsive Masonry 

You can resize the window to see the effect.

```js
import React from "react";
import MasonryLayout from 'funda-ui/MasonryLayout';

export default () => {

    const heights = [100, 120, 200, 150, 75, 120, 180, 100, 100, 90, 150, 130, 88, 80, 110];

    return (
        <>
          
            <MasonryLayout 
                gap={15}
                breakPoints={{
                    576: 1, 
                    768: 2,
                    1200: 3
                }}
            >
                {
                    Array.from({ length: 12 }).fill(null).map((item: any, i: number) => {
                        const height = heights[i];
                        return (
                            <div 
                            key={i} 
                            className="bg-body-tertiary border p-2"
                            style={{         
                                minHeight: `${height}px` 
                            }}>
                                minHeight: {height} <small className="bg-primary text-white px-2 py-1 rounded">{i}</small>
                            </div>
                        )
                    })
                }
            </MasonryLayout>
        </>
    );
}
```



## API

### Masonry Layout


```js
import MasonryLayout from 'funda-ui/MasonryLayout';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `columns` | number  | 2 | Set a default height to hide the remaining content. Please include the length unit, such as `em`, `px` | - |
| `gap` | number  | 0 | Speed of scrolling up. Amount of time measured in milliseconds. | - |
| `balanceColumnHeights` | boolean | true | If enabled, the highest column and the lowest column will be balanced, and if the height difference exceeds 2 times, one of the elements will be moved to the other column. | - |
| `breakPoints` | JSON Object | - | Keys are breakpoints in px, values are the columns number. such as `{576:1,768:2,1200: 3}` | - |
| `onResize` | function  | - | The callback function that is triggered when resize. It returns only one callback value which is the wrapper width(**Number**)  | - |




