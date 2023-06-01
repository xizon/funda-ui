import React from 'react';
declare type RangeSliderProps = {
    wrapperClassName?: string;
    controlClassName?: string;
    value?: any;
    label?: React.ReactNode | string;
    minName?: string;
    maxName?: string;
    trackColor?: string;
    inactiveTrackColor?: string;
    grabColor?: string;
    onlyOne?: boolean;
    step: number;
    min: number;
    max: number;
    disabled?: any;
    required?: any;
    /** -- */
    id?: string;
    tabIndex?: number;
    onChange?: (e: any, param: any) => void;
};
declare const RangeSlider: (props: RangeSliderProps) => JSX.Element;
export default RangeSlider;
