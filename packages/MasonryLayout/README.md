# Masonry Layout


## API

### Masonry Layout
```js
import MasonryLayout from 'funda-ui/MasonryLayout';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | number  | 2 | Set a default height to hide the remaining content. Please include the length unit, such as `em`, `px` |
| `gap` | number  | 0 | Speed of scrolling up. Amount of time measured in milliseconds. |
| `breakPoints` | JSON Object | - | Keys are breakpoints in px, values are the columns number. such as `{576:1,768:2,1200: 3}` |



## Examples

```js
import React from "react";
import MasonryLayout from 'funda-ui/MasonryLayout';

// component styles
import 'funda-ui/MasonryLayout/index.css';

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
                            className="d-inline-block bg-body-tertiary border p-2"
                            style={{         
                                height: `${height}px` 
                            }}>
                                height: {height} <small className="d-inline-block bg-primary text-white px-2 py-1 rounded">{i}</small>
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


```js
import React from "react";
import MasonryLayout from 'funda-ui/MasonryLayout';

// component styles
import 'funda-ui/MasonryLayout/index.css';

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
                            className="d-inline-block bg-body-tertiary border p-2"
                            style={{         
                                height: `${height}px` 
                            }}>
                                height: {height} <small className="d-inline-block bg-primary text-white px-2 py-1 rounded">{i}</small>
                            </div>
                        )
                    })
                }
            </MasonryLayout>
        </>
    );
}
```

