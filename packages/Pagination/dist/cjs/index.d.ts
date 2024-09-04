import React from 'react';
export declare type PaginationProps = {
    /** The class name of the navigation wrapper */
    wrapperClassName?: string;
    /** The class name of the navigation */
    navClassName?: string;
    /** The class name of each item */
    navItemClassName?: string;
    /** An API URL Path. Use `{page}` characters to place a placeholder. such as `/mypage/{page}` */
    apiUrl: string;
    /** The range of pages displayed */
    pageRangeDisplayed: number;
    /**  The currently selected page number. */
    activePage: number;
    /** The total number of pages. */
    totalPages: number;
    /** Label for the previous button. */
    previousLabel?: React.ReactNode;
    /** Label for the next button. */
    nextLabel?: React.ReactNode;
    /** Label for the first button. */
    firstLabel?: React.ReactNode;
    /** Label for the last button. */
    lastLabel?: React.ReactNode;
    /** Label for ellipsis */
    breakLabel?: React.ReactNode;
    /** Set the alignment of the control */
    align?: string | null;
    /** Only display the previous and next buttons. */
    onlyPrevNext?: boolean;
    /** The classname for the active page */
    activeClassName?: string;
    /** The classname on tag li of the previous button */
    previousClassName?: string;
    /** The classname on tag li of the next button */
    nextClassName?: string;
    /** The classname on tag li of the first button */
    firstClassName?: string;
    /** The classname on tag li of the last button */
    lastClassName?: string;
    /** The classname for disabled buttons */
    disabledClassName?: string;
    /** The activation button is symmetrical on the left and right sides. */
    symmetry?: boolean;
    /** -- */
    style?: React.CSSProperties;
    /** The method to call when a page is clicked. Exposes the current page number as an argument. */
    onChange?: (page: number, total: number) => void;
};
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<unknown>>;
export default Pagination;
