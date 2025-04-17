# Toast

The Toast component is a hook used to trigger notification push. It manages the display and hiding of notifications in a global state.


## General


### Step 1. Wrap your app with `ToastProvider`

First, wrap your application (or the part where you want to use toasts) with `ToastProvider`:

```js
import { ToastProvider } from 'funda-ui/Toast';

function App() {
    return (
        <ToastProvider>
            <YourApp />
        </ToastProvider>
    );
}
```

You can also use a global configuration (Or use `toast.updateConfig()` to update):


```js
import { ToastProvider } from 'funda-ui/Toast';

function App() {
    return (
        <ToastProvider config={{
            defaultWrapperClassName: '',
            defaultOnlyShowOne: false,
            defaultDirection: 'bottom-center',
            defaultCascading: false,
            defaultReverseDisplay: false
        }}>
            <YourApp />
        </ToastProvider>
    );
}
```

### Step 2. Use the useToast hook `useToast()`

```js
import React from "react";
import { useToast } from 'funda-ui/Toast';

// component styles
import 'funda-ui/Toast/index.css';

export default () => {

    const toast = useToast();

    const showSimpleToast = () => {
        toast.show({
            actionId: 'test-1',
            title: "Success",
            message: <div>Text here ({Math.random()})</div>,
        });
    };

    const showCustomToast1 = () => {
        toast.show({
            actionId: 'test-2',
            title: "Custom Toast 1",
            message: <div style={{color: "orange"}}>Text here ({Math.random()})</div>,
            theme: "dark",
            autoCloseTime: 1000
        });
    };


    const showCustomToast2 = () => {
        toast.show({
            actionId: 'test-3',
            title: "Custom Toast 2",
            message: <><div>Text here ({Math.random()})</div></>,
            theme: "dark",
            autoCloseTime: 5000,
            direction: 'top-center',
            schemeBody: 'align-items-center text-white border-0 p-2',
            closeBtnColor: '#333',
            onClose: (e, currentIndex, displayedElements) => {
                console.log(e, currentIndex, displayedElements);
            }
        });
    };

    const showCustomToast3 = () => {
        toast.show({
            actionId: 'test-4',
            note: "11 mins ago", 
            message: <><div style={{fontSize:"14px"}}>This is <span style={{color:"orange"}}>orange</span> text ({Math.random()})</div></>,
            autoCloseTime: 5000,
            cascading: true,
            direction: 'bottom-right',
            reverseDisplay: true
            
        });
    };

    const showCustomToast4 = () => {
        toast.show({
            actionId: 'test-5',
            note: "11 mins ago", 
            message: <><div>Text here ({Math.random()})</div></>,
            autoCloseTime: 5000,
            direction: 'vertical-center',
            schemeHeader: 'text-white bg-dark',
            schemeBody: 'align-items-center text-dark border-0 p-2',
            closeBtnColor: '#fff',
            reverseDisplay: true
        });
    };


    const showCustomToast5 = () => {
        toast.show({
            actionId: 'test-6',
            closeDisabled: true,
            message: <><div>Text here ({Math.random()})</div></>,
            autoCloseTime: 5000,
            direction: 'bottom-left',
            schemeHeader: 'p-0',
            schemeBody: 'align-items-center text-white bg-dark border-0'
        });
    };



    const showCustomToast6 = () => {
        toast.show({
            actionId: 'test-7',
            direction: 'top-center',
            title: "Custom Toast 1",
            message: <div style={{color: "orange"}}>Text here ({Math.random()})</div>,
            theme: "dark",
            autoCloseTime: 3000,
            onlyShowOne: true
        });
    };

    const updateToastConfig = () => {
        toast.updateConfig({
            defaultDirection: 'bottom-right',
            defaultOnlyShowOne: true
        });
        alert('Config successfully updated');
    };



    return (
        <>

            <button onClick={showSimpleToast}>Basic Toast</button>
            <button onClick={showCustomToast1}>Custom Toast 1</button>
            <button onClick={showCustomToast2}>Custom Toast 2</button>
            <button onClick={showCustomToast3}>Custom Toast 3</button>
            <button onClick={showCustomToast4}>Custom Toast 4</button>
            <button onClick={showCustomToast5}>Custom Toast 5</button>
            <button onClick={showCustomToast6}>Custom Toast 6 (Only one is shown)</button>
            <button onClick={updateToastConfig}>Update Global configuration</button>
          
        </>
    );
}
```



## Toast Management

The `useToast()` hook provides several methods to manage toasts:

```js
const toast = useToast();

// Show a toast and get its information
const newToast = toast.show({
    title: "Title",
    message: "Message"
});

// Close a specific toast using its ID
toast.close(newToast.id);

// Close a toast by its index (0 is the oldest)
toast.closeByIndex(0);

// Get all current toasts
const allToasts = toast.getToasts();

// Close all toasts
toast.closeAll();

// Update global configuration
toast.updateConfig({
    defaultDirection: 'bottom-right',
    defaultOnlyShowOne: true
});
```



## API


### Toast Provider (Globally)

Configure the interface globally, but overrides are allowed to be overridden by the instance configuration.

```js
import { ToastProvider } from 'funda-ui/Toast';
```

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `defaultWrapperClassName` | string | - | The class name of the toast wrapper. | - |
| `defaultOnlyShowOne` | boolean  | false | Only ever going to show one toast at a time. | - |
| `defaultCascading` | boolean  | false | Whether to use cascading styles. | - |
| `defaultReverseDisplay` | boolean  | false | Allow data to be reversed. | - |
| `defaultDirection` | `bottom-left` \| `bottom-center` \| `bottom-right` \| `top-left` \| `top-center` \| `top-right` \| `vertical-center`  | bottom-center | The direction of the toast | - |



### Hook
```js
import { useToast } from 'funda-ui/Toast';
```

The `useToast` hook returns an object with the following methods:

| Method | Parameters | Return Type | Description |
| --- | --- | --- | --- |
| `show` | `ToastOptions` | `ToastItem` | Shows a new toast and returns the toast object including its ID |
| `close` | `id: string` | `void` | Closes a specific toast by its ID |
| `closeByIndex` | `index: number` | `void` | Closes a toast by its index (0 is the oldest) |
| `closeAll` | - | `void` | Closes all currently displayed toasts |
| `getToasts` | - | `ToastItem[]` | Returns an array of all currently active toasts |
| `updateConfig` | - | `void` | Update the global default configuration |


### Toast Options

The `ToastOptions` object accepts the following properties:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `actionId` | string \| number \| null \| undefined | - | The identifier of `useToast().show()`, which can be used to determine whether different `useToast().show()` | - |
| `title` | string \| ReactNode \| boolean | - | Specifies an alternate and title for the toast | - |
| `note` | string \| ReactNode \| boolean | - | A light-colored comment next to the title, which can be information such as time. | - |
| `message` | string \| ReactNode  | - | Specifies the content, or HTML elements to the toast | - |
| `theme` | `primary` \| `secondary` \| `success` \| `info` \| `warning` \| `danger` \| `light` \| `dark` \| undefined  | undefined  | Specifies a theme to `.toast`. All these colors are available as a Sass map of Bootstrap. | - |
| `wrapperClassName` | string | - | The class name of the toast wrapper. | - |
| `onlyShowOne` | boolean | false | Only ever going to show one toast at a time. | - |
| `lock` | boolean  | false | You can not close pop-win when it is enabled. | - |
| `cascading` | boolean  | false | Whether to use cascading styles. | - |
| `schemeBody` | string  | - | Self-defined class name for body, such as: `align-items-center text-white bg-primary border-0` | - |
| `schemeHeader` | string  | - | Self-defined class name for header, such as: `text-white bg-dark` | - |
| `closeBtnColor` | string  | - | Set the color of the close button. | - |
| `closeDisabled` | boolean  | false | Disable the close button. | - |
| `reverseDisplay` | boolean  | false | Allow data to be reversed. | - |
| `direction` | `bottom-left` \| `bottom-center` \| `bottom-right` \| `top-left` \| `top-center` \| `top-right` \| `vertical-center`  | bottom-center | The direction of the toast | - |
| `autoCloseTime` | boolean \| number  | false | Set an automatic closing time, multiple items will be accumulated in order. Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled. | - |
| `onClose` | function  | - | Call a function when the modal is opened. It returns three callback values.  <br /> <ol><li>The first is the current element (**HTMLDivElement**)</li><li>The second is the current index of removed item (**Number**)</li><li> The third is the all displayed elements (**HTMLDivElement[]**)</li></ol>| - |


### ToastItem

The object returned by `show()` and `getToasts()` includes:

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the toast |
| `...ToastOptions` | `ToastOptions` | All properties from ToastOptions |



## Legacy Component API

While we recommend using the `useToast` hook, the component API is still supported for backwards compatibility. See the legacy documentation for details on using the `<Toast />` component directly.

