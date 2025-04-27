import React from 'react';
interface RefresherProps {
    /** Pulling text */
    pullingText?: React.ReactNode;
    /**  Text when reaching the threshold */
    readyToRefreshText?: React.ReactNode;
    /** Refreshing text */
    refreshingText?: React.ReactNode;
    /** The pull distance (px) that triggers the refresh */
    threshold?: number;
    /** The height of the trigger area */
    triggerHeight?: number;
    /** The styles of the trigger area */
    triggerAreaStyle?: React.CSSProperties;
    /** Pull-down is only allowed when the scroll bar of this element is at the top. You can only fire certain actions when the scrollbar is at the top by listening to the scroll event of a given DOM element and determining if its scrollTop is 0. */
    scrollableElementClassName?: string;
    /** Refresh action is async */
    onRefresh: () => Promise<void>;
    children: React.ReactNode;
}
declare const Refresher: (prpps: RefresherProps) => JSX.Element;
export default Refresher;
