import React from 'react';
export declare type TooltipProps = {
    triggerClassName?: string;
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
    /** If true, Tooltip is controlled by parent via ref, not by mouse events */
    controlled?: boolean;
    /** Custom color for the popup arrow */
    popupArrowColor?: number[];
    /** Custom style for the popup content */
    popupContentStyle?: React.CSSProperties;
    /** If true, tooltip closes only if mouse does not enter wrapper within timeout after leaving trigger */
    delayedClose?: boolean;
    /** Timeout in ms for delayed close (ms) */
    delayedCloseTimeout?: number;
    /** Called when mouse enters the tooltip wrapper */
    onContentMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** Called when mouse leaves the tooltip wrapper */
    onContentMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** -- */
    id?: string;
    children: React.ReactNode;
};
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<any>>;
export default Tooltip;
