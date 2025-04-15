# Stepper

Indicator effects in workflows.


## General


```js
import React, { useRef, useState } from "react";
import { Stepper, StepperPanel } from 'funda-ui/Stepper';

// component styles
import 'funda-ui/Stepper/index.css';

export default () => {

    const stepperRef = useRef<any>(null);
    const [processesCompleted, setProcessesCompleted] = useState<boolean>(false); // All the processes have been completed

    return (
        <>
          
            <Stepper 
                ref={stepperRef} 
                onChange={(currentStepIndex: number, isLastStepComplete: boolean) => {
                    console.log('Current step index:', currentStepIndex, isLastStepComplete);
                }}
                indicatorClickAllowed
            >
                <StepperPanel header="Header I">
                    <div className="shadow-sm p-3 mb-3 bg-body-tertiary rounded">Content I</div>
                    <div>
                        <button className="btn btn-sm btn-outline-primary" onClick={() => stepperRef.current.next()}>
                            Next
                        </button>
                    </div>
                </StepperPanel>
                <StepperPanel header="Header II">
                    <div className="shadow-sm p-3 mb-3 bg-body-tertiary rounded">Content II</div>
                    <div>
                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => stepperRef.current.next()}>
                            Next
                        </button>
                        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => stepperRef.current.prev()}>
                            Back
                        </button>
                    </div>
                </StepperPanel>
                <StepperPanel header="Header III">
                    <div className="shadow-sm p-3 mb-3 bg-body-tertiary rounded">Content IIII</div>
                    {!processesCompleted ? <div>
                        <button 
                            className="btn btn-sm btn-outline-primary me-2" 
                            onClick={() => {
                                stepperRef.current.setLastStepComplete(true); 
                                setProcessesCompleted(true);
                            }
                        }>
                            Complete
                        </button>
                        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => stepperRef.current.prev()}>
                            Back
                        </button>
                    </div> : null}
                </StepperPanel>
            </Stepper>


            <p>
                <button className="btn btn-sm btn-warning" onClick={() => {
                    stepperRef.current.goto(2)
                    stepperRef.current.setLastStepComplete(false); 
                    setProcessesCompleted(false);
                }}>
                    ⏱️ Go to 3rd step
                </button>
            </p>


          
        </>
    );
}
```



## Vertical

Change the layout to vertical with the `layout` property.


```js
import React, { useRef, useState } from "react";
import { Stepper, StepperPanel } from 'funda-ui/Stepper';

// component styles
import 'funda-ui/Stepper/index.css';

export default () => {

    const stepperRef = useRef<any>(null);
    const [processesCompleted, setProcessesCompleted] = useState<boolean>(false); // All the processes have been completed

    return (
        <>
          
            <Stepper 
                ref={stepperRef} 
                onChange={(currentStepIndex: number, isLastStepComplete: boolean) => {
                    console.log('Current step index:', currentStepIndex, isLastStepComplete);
                }}
                layout="vertical"
                indicatorClickAllowed
                disableCompleteIcon={false}
            >
                <StepperPanel header="Header I">
                    <div className="shadow-sm p-3 mb-3 bg-body-tertiary rounded">Content I</div>
                    <div>
                        <button className="btn btn-sm btn-outline-primary" onClick={() => stepperRef.current.next()}>
                            Next
                        </button>
                    </div>
                </StepperPanel>
                <StepperPanel header="Header II">
                    <div className="shadow-sm p-3 mb-3 bg-body-tertiary rounded">Content II</div>
                    <div>
                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => stepperRef.current.next()}>
                            Next
                        </button>
                        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => stepperRef.current.prev()}>
                            Back
                        </button>
                    </div>
                </StepperPanel>
                <StepperPanel header="Header III">
                    <div className="shadow-sm p-3 mb-3 bg-body-tertiary rounded">Content IIII</div>
                    {!processesCompleted ? <div>
                        <button 
                            className="btn btn-sm btn-outline-primary me-2" 
                            onClick={() => {
                                stepperRef.current.setLastStepComplete(true); 
                                setProcessesCompleted(true);
                            }
                        }>
                            Complete
                        </button>
                        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => stepperRef.current.prev()}>
                            Back
                        </button>
                    </div> : null}
                </StepperPanel>
            </Stepper>

          
        </>
    );
}
```


## API

### Stepper
```js
import { Stepper } from 'funda-ui/Stepper';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It exposes the following methods of the component:  <br /> <ol><li>`ref.current.goto(2)`</li><li>`ref.current.next()`</li><li>`ref.current.prev()`</li><li>`ref.current.setLastStepComplete(true)`</li></ol> | - |
| `wrapperClassName` | string | - | Additional CSS class name for the stepper container | - |
| `indicatorClickAllowed` | boolean | false | Whether steps can be clicked to navigate | - |
| `style` | React.CSSProperties | - | Inline styles for the stepper container | - |
| `initialStep` | number | 0 | Initial active step index | - |
| `layout` | `horizontal` \| `vertical` | horizontal | Layout layout of the stepper | - |
| `completeIcon` | ReactNode | `<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none"><path d="M15.3742 5.98559L10.3742 14.9856C9.72664 16.1511 7.97832 15.1798 8.62585 14.0143L13.6258 5.01431C14.2734 3.84876 16.0217 4.82005 15.3742 5.98559Z" fill="#fff"/><path d="M5.1247 9.71907L10.1247 13.7191C11.1659 14.552 9.91646 16.1137 8.87531 15.2808L3.87531 11.2808C2.83415 10.4479 4.08354 8.88615 5.1247 9.71907Z" fill="#fff"/></svg>` | Specify an icon when the progress is complete. | - |
| `disableCompleteIcon` | boolean | true | Disable complete icon | - |
| `onChange` | (index: number, isLastStepComplete: boolean) => void | - | Callback function when step changes. It returns two callback values. <br /> <ol><li>The index that is currently active (**Number**)</li><li>Determine whether the last step is complete (**Boolean**)</li></ol> | - |
| `children` | ReactElement[] | - | Array of StepperPanel components | ✅ |


### Stepper Ref Methods
| Method | Parameters | Return | Description |
| --- | --- | --- | --- |
| `goto` | (index: number) | void | Navigate to a specific step by index |
| `next` | - | void | Navigate to the next step |
| `prev` | - | void | Navigate to the previous step |
| `setLastStepComplete` | - | void | Sets whether the last step is complete |


### Stepper Panel
```js
import { StepperPanel } from 'funda-ui/Stepper';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `header` | ReactNode | - | Content to display in the step header | ✅ |
| `children` | ReactNode | - | Content to display in the step panel | - |
| `style` | React.CSSProperties | - | Inline styles for the panel | - |



