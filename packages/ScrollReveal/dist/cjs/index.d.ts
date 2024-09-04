import React from 'react';
export interface ViewOffsetConfig {
    x?: string | undefined;
    y?: string | undefined;
}
export declare type ScrollRevealProps = {
    root?: any;
    viewOffset?: ViewOffsetConfig;
    defaultClassName?: string | string[];
    showClassName?: string | string[];
    infinite?: boolean;
    delay?: number;
    threshold?: number | number[];
    onChange?: (e: any, data: any) => void;
    onIntersect?: (e: any, status: boolean) => void;
    /** -- */
    id?: string;
    children: React.ReactNode;
};
declare const ScrollReveal: (props: ScrollRevealProps) => JSX.Element;
export default ScrollReveal;
