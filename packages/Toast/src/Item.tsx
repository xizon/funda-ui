import React, { useRef, forwardRef } from 'react';

import { clsWrite, combinedCls } from 'funda-utils/dist/cjs/cls';


export interface ItemProps extends React.ComponentPropsWithoutRef<any> {
    depth: number;
    index: number;
    isNew: boolean;
    uniqueID: string;

    //
    onlyOne?: boolean;
    title?: string | React.ReactNode | boolean;
    note?: string | React.ReactNode | boolean;
    theme?: string | undefined;
    message?: string | React.ReactNode;
    schemeBody?: string;
    schemeHeader?: string;
    closeBtnColor?: string;
    closeDisabled?: boolean;
    autoCloseTime?: boolean | number;
    lock?: boolean;
    cascading?: boolean;
    evStart?: (e: any) => void;
    evPause?: (e: any) => void;
    evClose?: (e: any, index: number, currentItem: HTMLDivElement) => void;
    
};

const Item = forwardRef((props: ItemProps, externalRef: any) => {

    const {
        depth,
        index,
        isNew,
        uniqueID,

        //
        onlyOne,
        title,
        note,
        theme,
        message,
        lock,
        cascading,
        schemeBody,
        schemeHeader,
        closeBtnColor,
        closeDisabled,
        autoCloseTime,
        evStart,
        evPause,
        evClose
    } = props;

    
    const containerRef = useRef<HTMLDivElement>(null);
    const hideTitle: boolean = (title === '' || title === false) && (note === '' || note === false);

    return (
        <>

            <div
                ref={containerRef}
                id={`toast-${uniqueID}`}
                data-toast-id={uniqueID}
                data-new={isNew}
                data-index={index}
                className={combinedCls(
                    'toast-container',
                    {
                        'only-one': onlyOne
                    }
                )} 
                style={cascading ? {
                    transform: `perspective(100px) translateZ(-${2 * index}px) translateY(${35 * index}px)`,
                    zIndex: depth
                } : {
                    zIndex: depth
                }}
                onMouseEnter={evPause}
                onMouseLeave={evStart}
            >

                {/* Bootstrap toast */}
                <div 
                    className={combinedCls(
                        `toast fade show ${theme ? `bg-${theme}` : ''}`,
                        clsWrite(schemeBody, '')
                    )} 
                    role="alert"
                >
                    {hideTitle ? null : <>
                        <div 
                            className={combinedCls(
                                'toast-header',
                                clsWrite(schemeHeader, '')
                            )}
                        >
                            <strong className="me-auto">{title === '' || title === false ? '' : <>{title}</>}</strong>
                            <small className="text-muted">{note === '' || note === false ? '' : <>{note}</>}</small>
                            {!lock ? <>{!closeDisabled ? <button 
                                data-close="1" 
                                data-index={index} 
                                tabIndex={-1} 
                                type="button" 
                                className="btn-close"
                                onClick={(e: React.MouseEvent) => {
                                    evClose?.(e, index, containerRef.current as HTMLDivElement);
                                }}
                            >
                                <svg width="12px" height="12px" viewBox="0 0 16 16"><path fill={`${closeBtnColor ? closeBtnColor : '#000000'}`} d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fillRule="evenodd"></path></svg>
                            </button> : null}</> : null}

                        </div>
                    </>}

                    <div className="toast-body">
                        {message}

                        {hideTitle ? <>
                            {!closeDisabled ? <button 
                                data-close="1" 
                                data-index={index} 
                                tabIndex={-1} 
                                type="button" 
                                className="btn-close position-absolute top-0 end-0 me-2 mt-2"
                                onClick={(e: React.MouseEvent) => {
                                    evClose?.(e, index, containerRef.current as HTMLDivElement);
                                }}
                            >
                                <svg width="12px" height="12px" viewBox="0 0 16 16"><path fill={`${closeBtnColor ? closeBtnColor : '#000000'}`} d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fillRule="evenodd"></path></svg>
                            </button> : null}
                        </> : null}


                        {/* PROGRESS */}
                        <div 
                            ref={externalRef} 
                            data-progress-index={index} 
                            className={combinedCls(
                                'progress active toast-progress',
                                {
                                    'd-none': autoCloseTime === false
                                }
                            )}
                            role="progressbar"
                        >
                            <div className="progress-bar"></div>
                        </div>
                        {/* /PROGRESS */}


                    </div>
                </div>

            </div>

        </>
    )
});


export default Item;
