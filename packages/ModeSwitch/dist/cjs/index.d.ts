import React from 'react';
declare type ModeSwitchProps = {
    triggerClassName?: string;
    /** The name of the local storage */
    localStorageName?: string;
    /** Style name for dark mode */
    darkClassName?: string;
    /** Set the light icon */
    lightIcon?: React.ReactNode | string;
    /** Set the dark icon */
    darkIcon?: React.ReactNode | string;
    /** -- */
    tabIndex?: number;
    onChange?: (e: any, param: boolean) => void;
};
declare const ModeSwitch: (props: ModeSwitchProps) => JSX.Element;
export default ModeSwitch;
