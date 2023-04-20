import React from 'react';
declare type PaginationProps = {
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
    activeClass?: string;
    /** The classname on tag li of the previous button */
    previousClass?: string;
    /** The classname on tag li of the next button */
    nextClass?: string;
    /** The classname on tag li of the first button */
    firstClass?: string;
    /** The classname on tag li of the last button */
    lastClass?: string;
    /** The classname for disabled buttons */
    disabledClass?: string;
    /** The activation button is symmetrical on the left and right sides. */
    symmetry?: boolean;
    /** The method to call when a page is clicked. Exposes the current page number as an argument. */
    onChange?: (param: any) => void;
};
declare const Pagination: (props: PaginationProps) => JSX.Element;
export default Pagination;
