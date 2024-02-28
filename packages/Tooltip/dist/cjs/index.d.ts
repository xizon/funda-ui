import React from 'react';
declare type TooltipProps = {
    wrapperClassName?: string;
    /** The direction of the tip. Defaults to `top`. Possible values are: `top`, `top-right`, `top-left`, `bottom`, `bottom-right`, `bottom-left` */
    direction?: string;
    /** Position offset */
    offset?: number;
    /** Offset px that exceeds the far right or left side of the screen */
    exceededSidePosOffset?: number;
    /** The size of the content area. Defaults to `auto`. Possible values are: `auto`, `large`, `medium`, `small` */
    size?: string;
    /** The number of milliseconds to determine hover intent, defaults to 200 */
    hoverDelay?: number;
    /** The number of milliseconds to determine hover-end intent, defaults to the hoverDelay value */
    mouseOutDelay?: number;
    /** Set a piece of text or HTML code */
    content?: React.ReactNode;
    /** -- */
    id?: string;
    children: React.ReactNode;
};
declare const Tooltip: (props: TooltipProps) => JSX.Element;
export default Tooltip;
