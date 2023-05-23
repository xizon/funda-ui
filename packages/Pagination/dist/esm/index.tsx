import React from 'react';
import { paginationNavigators } from './pagination-navigators';


type PaginationProps = {
    /** The class name of the navigation wrapper */
    wrapperClassName?: string;
    /** The class name of the navigation */
    navClassName?: string;
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
    /** -- */
    style?: React.CSSProperties;
    /** The method to call when a page is clicked. Exposes the current page number as an argument. */
    onChange?: (param: any) => void;
    

};

const Pagination = (props: PaginationProps) => {
    const {
        wrapperClassName,
        navClassName,
        apiUrl,
        pageRangeDisplayed,
        activePage,
        totalPages,
        previousLabel,
        nextLabel,
        firstLabel,
        lastLabel,
        breakLabel,
        align,
        onlyPrevNext,
        activeClass,
        previousClass,
        nextClass,
        firstClass,
        lastClass,
        disabledClass,
        symmetry,
        style,
        onChange
    } = props;


    function handleClick(parameter: any) {

        switch (parameter) {
            case "prev":
                onChange?.(activePage - 1);
                break;
            case "next":
                onChange?.(activePage + 1);
                break;
            case "first":
                onChange?.(1);
                break;
            case "last":
                onChange?.(totalPages);
                break;
            default:
                onChange?.(1);
                break;
        }
    }

    const visibleNavigators = pageRangeDisplayed ? pageRangeDisplayed : 3;

    let alignClassName = '';
    switch (align) {
        case 'left':
            alignClassName = ' justify-content-start';
            break;
        case 'right':
            alignClassName = ' justify-content-end';
            break;
        case 'center':
            alignClassName = ' justify-content-center';
            break;
    }

    const _activeClassName = activeClass ? activeClass : 'active',
        _previousClassName = previousClass ? previousClass : 'prev',
        _nextClassName = nextClass ? nextClass : 'next',
        _firstClassName = firstClass ? firstClass : 'first',
        _lastClassName = lastClass ? lastClass : 'last',
        _disabledClassName = disabledClass ? disabledClass :'disabled',
        _onlyPrevNextButtons = typeof (onlyPrevNext) === 'undefined' ? false : onlyPrevNext,
        _symmetry = typeof (symmetry) === 'undefined' ? false : symmetry;


    //get navigation array
    //------------------------------------------
    const navArr = paginationNavigators(visibleNavigators, totalPages, activePage, true, _symmetry);


    // Use ellipsis to extend page numbers
    //------------------------------------------
    let _ellipsis = breakLabel ? breakLabel : '';
    let _ellipsisArr: any[any] = [];
    let _ellipsisEnabled = false;

    if (_ellipsis !== '') _ellipsisArr = [totalPages - 1, totalPages];
    if (activePage + 2 >= totalPages) {
        _ellipsisArr = [];
        _ellipsis = '';
    }

    const _ellipsisElements = _ellipsisArr.map((item: any, i: number) => {
        if (item > 0 && item <= totalPages && !_onlyPrevNextButtons) {
            //Delete values whose display range is more than the total
            if (navArr.indexOf(item) === -1) {
                _ellipsisEnabled = true;

                return (
                    <li key={i} className={activePage === item ? `page-item ${_activeClassName}` : `page-item`}>
                        <a className="page-link" href={apiUrl.replace('{page}', item)} onClick={(e) => {
                            e.preventDefault();
                            onChange?.(item);
                        }}>{item}</a>
                    </li>
                );
            }
        }
    });

    return (
        <>

            <nav className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"}  style={style}>
                <ul className={navClassName ? `${navClassName} ${alignClassName}` : `pagination ${alignClassName}`}>
                    {firstLabel ? (
                        <li className={activePage > 1 ? `page-item ${_firstClassName}` : `page-item ${_firstClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage > 1 ? 0 : -1} aria-disabled={activePage > 1 ? 'false' : 'true'}className="page-link" href={apiUrl.replace('{page}', '1')} onClick={(e) => { e.preventDefault(); handleClick('first'); }}>
                                {firstLabel || null}
                            </a>
                        </li>
                    ) : ''}

                    {previousLabel ? (
                        <li className={activePage > 1 ? `page-item ${_previousClassName}` : `page-item ${_previousClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage > 1 ? 0 : -1} aria-disabled={activePage > 1 ? 'false' : 'true'}className="page-link" href={apiUrl.replace('{page}', (activePage - 1) as any)} onClick={(e) => { e.preventDefault(); handleClick('prev'); }}>
                                {previousLabel || null}
                            </a>
                        </li>
                    ) : ''}


                    {
                        navArr.map((item: any, i: number) => {
                            if (item > 0 && item <= totalPages && !_onlyPrevNextButtons) {
                                return (
                                    <li key={i} className={activePage === item ? `page-item ${_activeClassName}` : `page-item`}>
                                        <a className="page-link" href={apiUrl.replace('{page}', item)} onClick={(e) => {
                                            e.preventDefault();
                                            onChange?.(item);
                                        }}>{item}</a>
                                    </li>
                                );
                            }

                        })
                    }


                    {_ellipsis !== '' && _ellipsisEnabled ? <><li className="page-item"><span className="page-link">{_ellipsis}</span></li></> : ''}
                    {_ellipsisElements}

                    {nextLabel ? (
                        <li className={activePage < totalPages ? `page-item ${_nextClassName}` : `page-item ${_nextClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage < totalPages ? 0 : -1} aria-disabled={activePage < totalPages ? 'false' : 'true'} className="page-link" href={apiUrl.replace('{page}', (activePage + 1) as any)} onClick={(e) => { e.preventDefault(); handleClick('next'); }}>
                                {nextLabel || null}
                            </a>
                        </li>
                    ) : ''}


                    {lastLabel ? (
                        <li className={activePage < totalPages ? `page-item ${_lastClassName}`  : `page-item ${_lastClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage < totalPages ? 0 : -1} aria-disabled={activePage < totalPages ? 'false' : 'true'} className="page-link" href={apiUrl.replace('{page}', totalPages as any)} onClick={(e) => { e.preventDefault(); handleClick('last'); }}>
                                {lastLabel || null}
                            </a>
                        </li>
                    ) : ''}

                </ul>

            </nav>


        </>
    )
};

export default Pagination;
