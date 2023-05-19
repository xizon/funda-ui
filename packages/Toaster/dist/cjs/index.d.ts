/// <reference types="react" />
declare type ToastProps = {
    /** The direction of the toaster. */
    direction?: string;
    /** Set an automatic closing time, multiple items will be accumulated in order.
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
    /** Starts from the top position of the Array when we use the automatic close. */
    autoCloseReverse?: boolean;
    /** You can not close pop-win when it is enabled */
    lock?: boolean;
    /** Specify data of toasts as a JSON string format.
     * Such as: `[{"title":"Title 1","message":"description..."},{"title":"Title 2","message":"description..."}]` */
    data?: any[any];
    /** Self-defined class name for body*/
    schemeBody?: string;
    /** Self-defined class name for header */
    schemeHeader?: string;
    /** Set the color of the close button */
    closeBtnColor?: string;
    /** -- */
    id?: string;
};
declare const Toast: (props: ToastProps) => JSX.Element;
export default Toast;
