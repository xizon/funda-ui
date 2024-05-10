# Accordion


## API

### Accordion
```js
import { Accordion } from 'funda-ui/Accordion';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `wrapperClassName` | string | `accordion` | The class name of the accordion wrapper. | - |
| `displayTheFirstItem` | boolean | false | Display the only first item of a list | - |
| `displayAllItems` | boolean | false | Display all items. <blockquote>When it is **true**, the `displayTheFirstItem` property is forced to invalid.</blockquote> | - |
| `triggerType` | `click` \| `mouseover`  | click | One event type | - |
| `duration` | number | 200 | The number of milliseconds(ms) each iteration of the animation takes to complete | - |
| `easing` | `linear` \| `easeIn` \| `easeOut` \| `easeInOut` | `linear` | Types of easing animation | - |
| `onChange` | function  | - | Handling events for collapsing item. It returns two callback values. <br /> <ol><li>The first is current item (**HTMLDivElement**)</li><li>The second is the current index number (**Number**)</li></ol> | - |
| `alternateCollapse` | boolean | true | Mutually exclusive alternate expansion between the levels. | - |


### Accordion Item
```js
import { AccordionItem } from 'funda-ui/Accordion';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `defaultActive` | boolean | false | Set an item to activate by default | - |
| `title` | string | - | Set a title for each item | - |
| `itemClassName` | string | `accordion-item` | The class name of item container. | - |
| `itemContentWrapperClassName` | string | `accordion-collapse` | The class name of the content container. | - |
| `itemContentClassName` | string | `accordion-body` | The class name of the content. | - |
| `itemTriggerClassName` | string | `accordion-button` | The class name of the trigger (button). | - |
| `itemHeaderClassName` | string | `accordion-header position-relative` | The class name of the item header. | - |
| `itemStyle` | CSSProperties | - | The styles of item. such as `{color: "red", fontSize: "1rem"}` | - |
| `itemTriggerIcon` | ReactNode | - | The icon of trigger. | - |


## Examples

Show hidden divs on click.

```js
import React from "react";
import { Accordion, AccordionItem } from 'funda-ui/Accordion';

export default () => {


    return (
        <>
           
            <Accordion 
                triggerType="click" 
                displayTheFirstItem={true} 
                onChange={(e, index) => console.log(e, index)} 
                alternateCollapse={false}
                easing="easeInOut"
            >
                <AccordionItem title={<>Item 1</>}>
                <h4>Usage:</h4>Click on an item to open.
                </AccordionItem>
                <AccordionItem title={<>Item 2</>}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </AccordionItem>
                <AccordionItem title={<>Item 3</>} itemStyle={{background: '#eee'}}>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.</p>

                    <p>People think focus means saying yes to the thing you&#8217;ve got to focus on. But that&#8217;s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I&#8217;m actually as proud of the things we haven&#8217;t done as the things I have done. Innovation is saying no to 1,000 things. <cite>Steve Jobs &#8211; Apple Worldwide Developers&#8217; Conference, 1997</cite></p>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.</p>
                </AccordionItem>
                <AccordionItem title={<>Item 4</>}>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </AccordionItem>
            </Accordion>

        </>
    );
}
```


## Using custom styles

And show hidden divs on mouseover.

```js
import React from "react";
import { Accordion, AccordionItem } from 'funda-ui/Accordion';

export default () => {


    return (
        <>
           
            <Accordion 
                triggerType="mouseover"
            >
                <AccordionItem title={<>Item 1</>} itemTriggerClassName="btn btn-primary w-100 px-3 py-1" itemTriggerIcon={<><span className="d-block position-absolute top-0 end-0 me-3 z-1">
                    <svg width="10px" height="10px" viewBox="0 -4.5 20 20">
                        <g stroke="none" strokeWidth="1" fill="none">
                            <g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5">
                                <g transform="translate(56.000000, 160.000000)">
                                    <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </span></>}>
                    <h4>Usage:</h4>Click on an item to open.
                </AccordionItem>
                <AccordionItem title={<>Item 2</>} itemTriggerClassName="btn btn-primary w-100 px-3 py-1" itemTriggerIcon={<><span className="d-block position-absolute top-0 end-0 me-3 z-1">
                    <svg width="10px" height="10px" viewBox="0 -4.5 20 20">
                        <g stroke="none" strokeWidth="1" fill="none">
                            <g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5">
                                <g transform="translate(56.000000, 160.000000)">
                                    <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </span></>}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </AccordionItem>
                <AccordionItem title={<>Item 4</>} itemTriggerClassName="btn btn-primary w-100 px-3 py-1" itemTriggerIcon={<><span className="d-block position-absolute top-0 end-0 me-3 z-1">
                    <svg width="10px" height="10px" viewBox="0 -4.5 20 20">
                        <g stroke="none" strokeWidth="1" fill="none">
                            <g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5">
                                <g transform="translate(56.000000, 160.000000)">
                                    <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </span></>}>
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </AccordionItem>
            </Accordion>

        </>
    );
}
```