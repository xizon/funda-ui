import React from 'react';
export declare type MasonryLayoutProps = {
    columns?: number;
    gap?: number;
    breakPoints?: Record<number, number>;
    balanceColumnHeights?: boolean;
    /** -- */
    id?: string;
    tabIndex?: number;
    children: React.ReactNode;
    onResize?: (wrapperWidth: number) => void;
};
declare const MasonryLayout: (props: MasonryLayoutProps) => JSX.Element;
export default MasonryLayout;
