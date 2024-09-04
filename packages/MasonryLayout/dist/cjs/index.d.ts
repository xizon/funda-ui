import React from 'react';
export declare type MasonryLayoutProps = {
    columns?: number;
    gap?: number;
    breakPoints?: Record<number, number>;
    /** -- */
    id?: string;
    tabIndex?: number;
    children: React.ReactNode;
};
declare const MasonryLayout: (props: MasonryLayoutProps) => JSX.Element;
export default MasonryLayout;
