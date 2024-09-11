import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { paginationNavigators } from './pagination-navigators';

import { clsWrite } from 'funda-utils/dist/cjs/cls';

export type PaginationProps = {
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


const Pagination = forwardRef((props: PaginationProps, externalRef: any) => {
    const {
        wrapperClassName,
        navClassName,
        navItemClassName,
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
        activeClassName,
        previousClassName,
        nextClassName,
        firstClassName,
        lastClassName,
        disabledClassName,
        symmetry,
        style,
        onChange
    } = props;


    const rootRef = useRef<any>(null);
    const visibleNavigators = pageRangeDisplayed ? pageRangeDisplayed : 3;




    // exposes the following methods
    useImperativeHandle(
        externalRef,
        () => ({
            next: (cb: any) => {
                handleClick('next', (p: number) => {
                    cb?.(p);
                });
            },
            prev: (cb: any) => {
                handleClick('prev', (p: number) => {
                    cb?.(p);
                });
            },
            first: (cb: any) => {
                handleClick('first', (p: number) => {
                    cb?.(p);
                });
            },
            last: (cb: any) => {
                handleClick('last', (p: number) => {
                    cb?.(p);
                });
            }
        }),
        [externalRef, totalPages, activePage],
    );



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

    const _activeClassName = activeClassName || 'active',
        _previousClassName = previousClassName || 'prev',
        _nextClassName = nextClassName || 'next',
        _firstClassName = firstClassName || 'first',
        _lastClassName = lastClassName || 'last',
        _disabledClassName = disabledClassName || 'disabled',
        _itemClassName = navItemClassName || 'page-item',
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
                    <li key={i} className={activePage === item ? `${_itemClassName} ${_activeClassName}` : `${_itemClassName}`}>
                        <a className="page-link" data-page={item} href={apiUrl?.replace('{page}', item)} onClick={(e) => {
                            e.preventDefault();
                            onChange?.(Number(item), Number(totalPages));
                        }}>{item}</a>
                    </li>
                );
            }
        }
    });




    function handleClick(parameter: any, cb?: any) {

        switch (parameter) {
            case "prev":
                onChange?.(activePage - 1, Number(totalPages));
                cb?.(activePage - 1);
                break;
            case "next":
                onChange?.(activePage + 1, Number(totalPages));
                cb?.(activePage + 1);
                break;
            case "first":
                onChange?.(1, Number(totalPages));
                cb?.(1);
                break;
            case "last":
                onChange?.(totalPages, Number(totalPages));
                cb?.(totalPages);
                break;
            default:
                onChange?.(1, Number(totalPages));
                cb?.(1);
                break;
        }
    }


    return (
        <>

            <nav
                ref={rootRef}
                className={clsWrite(wrapperClassName, 'mb-3 position-relative')}
                style={style}
            >
                <ul className={clsWrite(navClassName, `pagination ${alignClassName}`, `${navClassName} ${alignClassName}`)}>
                    {firstLabel ? (
                        <li className={activePage > 1 ? `${_itemClassName} ${_firstClassName}` : `${_itemClassName} ${_firstClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage > 1 ? 0 : -1} aria-disabled={activePage > 1 ? 'false' : 'true'} className="page-link" data-page={1} href={apiUrl?.replace('{page}', '1')} onClick={(e) => { e.preventDefault(); handleClick('first'); }}>
                                {firstLabel || null}
                            </a>
                        </li>
                    ) : ''}

                    {previousLabel ? (
                        <li className={activePage > 1 ? `${_itemClassName} ${_previousClassName}` : `${_itemClassName} ${_previousClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage > 1 ? 0 : -1} aria-disabled={activePage > 1 ? 'false' : 'true'} className="page-link" data-page={activePage - 1} href={apiUrl?.replace('{page}', (activePage - 1) as any)} onClick={(e) => { e.preventDefault(); handleClick('prev'); }}>
                                {previousLabel || null}
                            </a>
                        </li>
                    ) : ''}


                    {
                        navArr.map((item: any, i: number) => {
                            if (item > 0 && item <= totalPages && !_onlyPrevNextButtons) {
                                return (
                                    <li key={i} className={activePage === item ? `${_itemClassName} ${_activeClassName}` : `${_itemClassName}`}>
                                        <a className="page-link" data-page={item} href={apiUrl?.replace('{page}', item)} onClick={(e) => {
                                            e.preventDefault();
                                            onChange?.(Number(item), Number(totalPages));
                                        }}>{item}</a>
                                    </li>
                                );
                            }

                        })
                    }


                    {_ellipsis !== '' && _ellipsisEnabled ? <><li className={_itemClassName}><span className="page-link">{_ellipsis}</span></li></> : ''}
                    {_ellipsisElements}

                    {nextLabel ? (
                        <li className={activePage < totalPages ? `${_itemClassName} ${_nextClassName}` : `${_itemClassName} ${_nextClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage < totalPages ? 0 : -1} aria-disabled={activePage < totalPages ? 'false' : 'true'} className="page-link" data-page={activePage + 1} href={apiUrl?.replace('{page}', (activePage + 1) as any)} onClick={(e) => { e.preventDefault(); handleClick('next'); }}>
                                {nextLabel || null}
                            </a>
                        </li>
                    ) : ''}


                    {lastLabel ? (
                        <li className={activePage < totalPages ? `${_itemClassName} ${_lastClassName}` : `${_itemClassName} ${_lastClassName} ${_disabledClassName}`}>
                            <a tabIndex={activePage < totalPages ? 0 : -1} aria-disabled={activePage < totalPages ? 'false' : 'true'} className="page-link" data-page={totalPages} href={apiUrl?.replace('{page}', totalPages as any)} onClick={(e) => { e.preventDefault(); handleClick('last'); }}>
                                {lastLabel || null}
                            </a>
                        </li>
                    ) : ''}

                </ul>

            </nav>


        </>
    )
});

export default Pagination;
