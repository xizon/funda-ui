/// <reference types="react" />
declare global {
    interface Window {
        setCloseToast?: any;
    }
}
declare type ToastProps = {
    /** Specify data of toasts as a JSON string format. */
    data: any[any];
    /** Use asynchronous triggering */
    async?: boolean;
    /** The direction of the toast. */
    direction?: string;
    /** Set an automatic closing time, multiple items will be accumulated in order.
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
    /** Starts from the top position of the Array when we use the automatic close. */
    autoCloseReverse?: boolean;
    /** You can not close pop-win when it is enabled */
    lock?: boolean;
    /** Whether to use cascading styles */
    cascading?: boolean;
    /** Self-defined class name for body*/
    schemeBody?: string;
    /** Self-defined class name for header */
    schemeHeader?: string;
    /** Set the color of the close button */
    closeBtnColor?: string;
    /** Disable the close button. */
    closeDisabled?: boolean;
    /** -- */
    id?: string;
    onClose?: (e: HTMLDivElement, currentIndex: number, data: HTMLDivElement[]) => void;
};
declare const Toast: (props: ToastProps) => JSX.Element;
export default Toast;
