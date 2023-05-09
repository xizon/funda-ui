import React from 'react';
declare type BackToTopProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Types of easing animation */
    easing: string;
    /** Button Icon */
    btnIcon?: React.ReactNode;
};
declare const BackToTop: (props: BackToTopProps) => JSX.Element;
export default BackToTop;
