import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare global {
    interface Window {
        curVideo?: any;
        setCloseModalDialog?: any;
    }
}
declare type ModalDialogProps = {
    /** Custom modal max-width whick need a unit string. */
    maxWidth?: number | string;
    /** Adapt the video to the window */
    enableVideo?: boolean;
    /** Set a window title */
    heading?: React.ReactNode;
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
    /** set close button */
    closeBtnClassName?: string;
    closeBtnLabel?: string | React.ReactNode;
    /** set submit button */
    submitBtnClassName?: string;
    submitBtnLabel?: string | React.ReactNode;
    /** Automatically open the component, you can use it with the `autoClose` property at the same time */
    autoOpen?: boolean;
    /** Specify auto-close time. This function is not enabled when this value is false. If the value is 2000, it will automatically close after 2 seconds. */
    autoClose?: number | boolean;
    /** Disable mask */
    maskDisabled?: boolean;
    /** Disable mask to close the window */
    closeOnlyBtn?: boolean;
    /** -- */
    id?: string;
    children: React.ReactNode;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onLoad?: (openFunc: any, closeFunc: any) => void;
    onOpen?: (e: any, callback: any) => void;
    onClose?: (e: any) => void;
    onSubmit?: (e: any, callback: any) => void;
};
declare const ModalDialog: (props: ModalDialogProps) => JSX.Element;
export default ModalDialog;
