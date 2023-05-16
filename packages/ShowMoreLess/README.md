# Show More Less


## API

### Show More Less
```js
import ShowMoreLess from 'react-pure-bootstrap/ShowMoreLess';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultHeight` | string  | 8.5rem | Set a default height to hide the remaining content. Please include the length unit, such as `em`, `px` |
| `speed` | number  | 500| Speed of scrolling up. Amount of time measured in milliseconds. |
| `easing` | `linear` \| `easeIn` \| `easeOut` \| `easeInOut` | - | Types of easing animation |
| `triggerShowClassName` | string  | `d-inline w-auto` | Specify a class for the show trigger |
| `triggerHideClassName` | string  | `d-inline w-auto` | Specify a class for the hide trigger |
| `triggerShowContent` | ReactNode  | - | Set a piece of text or HTML code for the show trigger |
| `triggerHideContent` | ReactNode  | - | Set a piece of text or HTML code for the hide trigger |
| `maskColor` | string  | `255 255 255` | Specifies the color effect of the mask. It takes the value of rgb. |
| `maskOpacity` | number  | `100` | Set the opacity of the mask. It is a percentage. |
| `maskHeight` | string  | `2em` | Specifies the height of the mask. |


## Examples

```js
import React from "react";
import ShowMoreLess from 'react-pure-bootstrap/ShowMoreLess';

// component styles
import 'react-pure-bootstrap/ShowMoreLess/index.css';

export default () => {

    return (
        <>
          
            <ShowMoreLess 
                speed={350}
                tabIndex={-1}
                easing="easeOut"
                defaultHeight="130px"
                maskColor="0 0 0"
                maskOpacity={30}
                maskHeight="3em"
                triggerShowClassName="d-block text-center text-white-50 text-decoration-none mt-2" 
                triggerHideClassName="d-block text-center text-white-50 text-decoration-none mt-2" 
                triggerShowContent={<>
                Show More
                </>}
                triggerHideContent={<>
                Hide
                </>}>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>	

                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </ShowMoreLess>


          
        </>
    );
}
```