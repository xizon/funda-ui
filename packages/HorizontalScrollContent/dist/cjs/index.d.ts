import React from 'react';
export declare type HorizontalScrollContentProps = {
    slideOffset?: number;
    data?: React.ReactNode[];
    arrowIcons?: React.ReactNode[];
    contentWrapperClassName?: string;
    itemClassName?: string;
    btnClassName?: string;
    onMove?: (dir: number, wrapperWidth: number, realContentWidth: number, moveOffset: number) => void;
    /** -- */
    id?: string;
};
declare const HorizontalScrollContent: (props: HorizontalScrollContentProps) => JSX.Element;
export default HorizontalScrollContent;
