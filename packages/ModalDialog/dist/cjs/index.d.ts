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
    /** Whether the modal dialog is visible or not, you can use it with the `autoClose` property at the same time */
    show: boolean;
    /** Prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation. Enabled by default, after enabling the default JS event will be invalid, you need to use the `onOpen` attribute to add some new events to elements. Please refer to the example. */
    protectFixedViewport?: boolean;
    /** Custom modal max-width whick need a unit string. */
    maxWidth?: number | string;
    /** Custom modal max-height whick need a unit string. */
    minHeight?: number | string;
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
    /** Specify auto-close time. This function is not enabled when this value is false. If the value is 2000, it will automatically close after 2 seconds. */
    autoClose?: number | boolean;
    /** Disable mask */
    maskDisabled?: boolean;
    /** Mask opacity */
    maskOpacity?: string;
    /** Disable mask to close the window */
    closeOnlyBtn?: boolean;
    /** Disable the close button. */
    closeDisabled?: boolean;
    /** Incoming data, you can set the third parameter of `onSubmit` */
    data?: string;
    /** -- */
    id?: string;
    children: React.ReactNode;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onLoad?: (openFunc: any, closeFunc: any) => void;
    onOpen?: (e: any, callback: any) => void;
    onClose?: (e: any) => void;
    onSubmit?: (e: any, callback: any, incomingData: string | null | undefined) => void;
};
declare const ModalDialog: (props: ModalDialogProps) => JSX.Element;
export default ModalDialog;
