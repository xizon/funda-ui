/// <reference types="react" />
export declare type ToastProps = {
    /** The class name of the toast wrapper. */
    wrapperClassName?: string;
    /** Specify data of toasts as a JSON string format. */
    data: any[any];
    /** Automatically hide multiple items */
    autoHideMultiple?: boolean;
    /** The direction of the toast. */
    direction?: string;
    /** Set an automatic closing time, multiple items will be accumulated in order.
     * Amount of time measured in milliseconds. If false or without this attribute, Auto-Close will be disabled.
     */
    autoCloseTime?: boolean | number;
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
    /**  */
    async?: boolean;
    /** -- */
    id?: string;
    onClose?: (e: HTMLDivElement, currentIndex: number, data: HTMLDivElement[]) => void;
};
declare const Toast: (props: ToastProps) => JSX.Element;
export default Toast;
