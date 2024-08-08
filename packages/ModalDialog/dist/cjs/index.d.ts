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
export interface PreventOutsideScreenProps {
    xAxis: boolean;
    yAxis: boolean;
}
export interface ModalDialogRef {
    open: () => void;
    close: () => void;
}
declare type ModalDialogProps = {
    /** Extended class name */
    modalContentClassName?: string;
    modalHeaderClassName?: string;
    modalTitleClassName?: string;
    modalBodyClassName?: string;
    modalFooterClassName?: string;
    modalFooterExpandedContentClassName?: string;
    /** Allows you to disable scrolling on your page. */
    lockBodyScroll?: boolean;
    /** Pop-ups that can be dragged */
    draggable?: boolean;
    draggedPreventOutsideScreen?: PreventOutsideScreenProps;
    /** Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Whether the modal dialog is visible or not, you can use it with the `autoClose` property at the same time */
    show: boolean;
    /** Custom modal max-width whick need a unit string. */
    maxWidth?: number | string | Function;
    /** Custom modal max-height whick need a unit string. */
    minHeight?: number | string | Function;
    /** Adapt the video to the window */
    enableVideo?: boolean;
    /** Enable fullscreen modal */
    fullscreen?: boolean;
    /** Set a window title */
    heading?: React.ReactNode;
    /** Set footer content */
    footerExpandedContent?: React.ReactNode;
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
    maskOpacity?: string | number;
    /** Disable mask to close the window */
    closeOnlyBtn?: boolean;
    /** Disable the close button. */
    closeDisabled?: boolean;
    /** Incoming data, you can set the third parameter of `onSubmit` */
    data?: any;
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
declare const ModalDialog: React.ForwardRefExoticComponent<ModalDialogProps & React.RefAttributes<ModalDialogRef>>;
export default ModalDialog;
