import React from 'react';
export declare enum EasingList {
    linear = "linear",
    easeIn = "ease-in",
    easeOut = "ease-out",
    easeInOut = "ease-in-out"
}
export declare type ShowMoreLessProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Types of easing animation */
    easing: string;
    /** Set a default height to hide the remaining content. Please include the length unit, such as `em`, `px` */
    defaultHeight?: string;
    /** /////  */
    /** Specify a class for the show trigger. */
    triggerShowClassName?: string;
    /** Specify a class for the hide trigger. */
    triggerHideClassName?: string;
    /** Set a piece of text or HTML code for the show trigger */
    triggerShowContent?: React.ReactNode;
    /** Set a piece of text or HTML code for the hide trigger */
    triggerHideContent?: React.ReactNode;
    /** Specifies the color effect of the mask */
    maskColor?: string;
    /** Set the opacity of the mask */
    maskOpacity?: number;
    /** Specifies the height of the mask */
    maskHeight?: string;
    /** -- */
    id?: string;
    tabIndex?: number;
    children: React.ReactNode;
};
declare const ShowMoreLess: (props: ShowMoreLessProps) => JSX.Element;
export default ShowMoreLess;
