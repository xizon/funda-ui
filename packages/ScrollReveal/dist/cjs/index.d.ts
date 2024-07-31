import React from 'react';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
interface viewOffsetConfig {
    x?: string | undefined;
    y?: string | undefined;
}
declare type ScrollRevealProps = {
    root?: any;
    viewOffset?: viewOffsetConfig;
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
