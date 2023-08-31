import React from 'react';
declare type ScrollbarProps = {
    onlyVerticle?: boolean;
    onlyHorizontal?: boolean;
    arrowIcons?: React.ReactNode[];
    disableArrow?: boolean;
    horizontallyWithWheel?: boolean;
    /** Incoming data, changes in the `data` value will cause the component to re-render. */
    data?: any;
    onMove?: (data: any) => void;
    /** -- */
    id?: string;
    children: React.ReactNode;
};
declare const Scrollbar: (props: ScrollbarProps) => JSX.Element;
export default Scrollbar;
