import React from 'react';
export declare enum EasingList {
    linear = "linear",
    easeIn = "ease-in",
    easeOut = "ease-out",
    easeInOut = "ease-in-out"
}
export declare type BackToTopProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Types of easing animation */
    easing: string;
    /** Button Icon */
    btnIcon?: React.ReactNode;
};
declare const BackToTop: (props: BackToTopProps) => JSX.Element;
export default BackToTop;
