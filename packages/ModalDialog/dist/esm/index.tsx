import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

import RootPortal from 'funda-root-portal';

import useComId from 'funda-utils/dist/cjs/useComId';
import useDraggable from 'funda-utils/dist/cjs/useDraggable';

// Destroys body scroll locking
import {
    clearAllBodyScrollLocks, 
    disableBodyScroll, 
    enableBodyScroll,
} from 'funda-utils/dist/cjs/bodyScrollLock';



declare global {
    interface Window {
        curVideo?: any;
        setCloseModalDialog?: any;
    }
}

export interface PreventOutsideScreenProps {
    xAxis: boolean;
    yAxis: boolean;
}


export interface ModalDialogRef {
    open: () => void;
    close: () => void;
}



export type ModalDialogProps = {
    /** Extended class name */
    modalContentClassName?: string;
    modalHeaderClassName?: string;
    modalTitleClassName?: string;
    modalBodyClassName?: string;
    modalFooterClassName?: string;
    modalFooterExpandedContentClassName?: string;
    /** Allows you to disable scrolling on your page. */
    lockBodyScroll?: boolean;
    /** Pop-ups that can be dragged */
    draggable?: boolean;
    draggedPreventOutsideScreen?: PreventOutsideScreenProps;
    /** Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Whether the modal dialog is visible or not, you can use it with the `autoClose` property at the same time */
    show: boolean;
    /** Custom modal max-width whick need a unit string. */
    maxWidth?: number | string | Function;
    /** Custom modal max-height whick need a unit string. */
    minHeight?: number | string | Function;
    /** Adapt the video to the window */
    enableVideo?: boolean;
    /** Enable fullscreen modal */
    fullscreen?: boolean;
    /** Set a window title */
    heading?: React.ReactNode;
    /** Set footer content */
    footerExpandedContent?: React.ReactNode;
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
    /** set close button */
    closeBtnClassName?: string;
    closeBtnLabel?: string | React.ReactNode;
    /** set submit button */
    submitBtnClassName?: string;
    submitBtnLabel?: string | React.ReactNode;
    /** Specify auto-close time. This function is not enabled when this value is false. If the value is 2000, it will automatically close after 2 seconds. */
    autoClose?: number | boolean;
    /** Disable mask */
    maskDisabled?: boolean;
    /** Mask opacity */
    maskOpacity?: string | number;
    /** Disable mask to close the window */
    closeOnlyBtn?: boolean;
    /** Disable the close button. */
    closeDisabled?: boolean;
    /** Incoming data, you can set the third parameter of `onSubmit` */
    data?: any;
    /** -- */
    id?: string;
    children: React.ReactNode;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onLoad?: (openFunc: () => void, closeFunc: () => void) => void;
    onOpen?: (e: React.MouseEvent<HTMLElement> | null, callback: () => void) => void;
    onClose?: (e: React.MouseEvent<HTMLElement> | null) => void;
    onSubmit?: (e: React.MouseEvent<HTMLButtonElement>, callback: () => void, incomingData: string | null | undefined) => void;
    /**
     * Called when Enter key is pressed while modal is open
     */
    onPressEnter?: (callback: () => void) => void;
};

const ModalDialog = forwardRef((props: ModalDialogProps, externalRef: React.ForwardedRef<ModalDialogRef>) => {
    const {
        modalContentClassName,
        modalHeaderClassName,
        modalTitleClassName,
        modalBodyClassName,
        modalFooterClassName,
        modalFooterExpandedContentClassName,
        lockBodyScroll,
        draggable,
        draggedPreventOutsideScreen,
        depth,
        show,
        maxWidth,
        minHeight,
        fullscreen,
        enableVideo,
        heading,
        footerExpandedContent,
        triggerClassName,
        triggerContent,
        closeBtnClassName,
        closeBtnLabel,
        submitBtnClassName,
        submitBtnLabel,
        autoClose,
        maskDisabled,
        maskOpacity,
        closeOnlyBtn,
        closeDisabled,
        data,
        onLoad,
        onOpen,
        onClose,
        onSubmit,
        id,
        children,
        onPressEnter
    } = props;


    
    const DEPTH = depth || 1055;  // the default value same as bootstrap
    const M_WIDTH = fullscreen ? undefined : (typeof maxWidth === 'function' ? maxWidth() : maxWidth ? maxWidth : undefined);
    const M_HEIGHT = typeof minHeight === 'function' ? minHeight() : minHeight ? minHeight : undefined;
    const LOCK_BODY_SCROLL = typeof lockBodyScroll === 'undefined' ? false : lockBodyScroll;

    const uniqueID = useComId();
    const modalRef = useRef<any>(null);
    const triggerRef = useRef<any>(null);
    const idRes = id || uniqueID;

    const [modalShow, setModalShow] = useState<boolean>(false);
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);

    // drag and drop
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const {
        dragContentHandle, 
        dragHandle,
        resetPosition
    }: any = useDraggable({
        enabled: draggable, 
        preventOutsideScreen: draggedPreventOutsideScreen,
        onStart: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            setIsDragging(true);
        },
        onDrag: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
           
        },
        onStop: (coordinates: Record<string, number>, handleEl: HTMLElement | null, contentEl: HTMLElement | null) => {
            setIsDragging(false);
        }
    });

    // exposes the following methods
    useImperativeHandle(
        externalRef,
        () => ({
            open: () => {
                handleOpenWin(null);
            },
            close: () => {
                handleCloseWin(null);
            },
        }),
        [externalRef],
    );


    //
    function handleCloseWin(e: React.MouseEvent<HTMLElement> | null) {
        if (typeof e !== 'undefined' && e !== null) {
            e.preventDefault();

            // Prevent click events of parent nested Modal
            e.stopPropagation();
        }

        closeAction();

        // reset modal coordinates
        setTimeout(() => {
            resetPosition?.();
        }, 300);

        //
        onClose?.(e);
    }


    function handleOpenWin(e: React.MouseEvent<HTMLElement> | null) {
        if (typeof e !== 'undefined' && e !== null) {
            e.preventDefault();

            // Prevent click events of parent nested Modal
            e.stopPropagation();
        }

        openAction();

        //
        const callback = () => {
            handleCloseWin(e);
        };
        onOpen?.(e, callback);
    }

    function closeAction() {
        
        // pause video without controls
        //------------------------------------------
        if (window.curVideo !== null && typeof window.curVideo !== 'undefined') window.curVideo.pause();


        // close Modal Dialog
        //------------------------------------------
        const $mask: HTMLElement | null = document.querySelector(`#mask-${idRes} > .modal-backdrop`);
        setModalShow(false);
        if ($mask !== null) $mask.classList.remove('show');

        setTimeout(() => {
            if (modalRef.current !== null) modalRef.current.style.display = 'none';
            if ($mask !== null) $mask.style.display = 'none';
        }, 300);



        // Unlocks the page
        //------------------------------------------
        if (LOCK_BODY_SCROLL) enableBodyScroll(document.querySelector('body'));


        // Cancels a timeout previously established by calling setTimeout().
        //------------------------------------------
        clearTimeout(window.setCloseModalDialog);


    }


    function openAction() {

        if (modalRef.current === null) return;


        // Video PopUp Interaction
        //------------------------------------------
        const hasVideo = modalRef.current.classList.contains('is-video') ? true : false;

        if (hasVideo) {

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const $videoWrapper = modalRef.current.querySelector('.modal-dialog__video');
            const isIframe = $videoWrapper.getElementsByTagName('iframe').length > 0 ? true : false;
            let $video: any = isIframe ? $videoWrapper.getElementsByTagName('iframe')[0] : $videoWrapper.getElementsByTagName('video')[0];

            //
            const setVideo = function (currentWidth: number, currentHeight: number, obj: any) {

                const newMaxW = windowWidth - 80,
                    newMaxH = windowHeight - 80;

                let newW = currentWidth,
                    newH = currentHeight;


                if (currentHeight > newMaxH) {
                    newH = newMaxH;

                    //Scaled/Proportional Content 
                    newW = currentWidth * (newH / currentHeight);

                }

                if (newW > newMaxW) {
                    newW = newMaxW;

                    //Scaled/Proportional Content 
                    newH = currentHeight * (newW / currentWidth);
                }

                obj.height = newH + 'px';
                obj.width = newW + 'px';

                //
                modalRef.current.querySelector('.modal-dialog').style.width = newW + 'px';

            };


            if (isIframe) {
                let _w = parseFloat(modalRef.current.querySelector('.modal-dialog').style.maxWidth);
                if (isNaN(_w)) _w = 500;
                const _h = _w * 0.5625;

                setVideo(_w, _h, $video);
            } else {

                const _sources = $video.getElementsByTagName('source');
                const _src = _sources.length > 0 ? _sources[0].src : $video.src;

                getVideoDimensions(_src).then(function (res: any): void {
                    setVideo(res.width, res.height, $video);
                });
            }

            //Set current video when the tag is <video>
            window.curVideo = $video.tagName === 'VIDEO' ? $video : null;

        }


        // fire Modal Dialog
        //------------------------------------------
        const $mask: HTMLElement | null = document.querySelector(`#mask-${idRes} > .modal-backdrop`);
        modalRef.current.style.display = 'block';
        if ($mask !== null) $mask.style.display = 'block';
        setTimeout(() => {
            setModalShow(true);
            if ($mask !== null) $mask.classList.add('show');
        }, 0);



        // Locks the page
        //------------------------------------------
        //
        // Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        if (LOCK_BODY_SCROLL) disableBodyScroll(document.querySelector('body'));



        //auto close
        //------------------------------------------
        if (autoClose && !isNaN(autoClose as number)) {

            //
            window.setCloseModalDialog = setTimeout(function () {
                closeAction();
                //
                onClose?.(null);
            }, autoClose as number);
        }

    }




    //Returns the dimensions of a video asynchrounsly.
    function getVideoDimensions(url: string) {
        return new Promise(function (resolve) {
            // create the video element
            let video = document.createElement('video');

            // place a listener on it
            video.addEventListener("loadedmetadata", function () {
                // retrieve dimensions
                let height = this.videoHeight;
                let width = this.videoWidth;
                // send back result
                resolve({
                    height: height,
                    width: width
                });
            }, false);

            // start download meta-datas
            video.src = url;
        });
    }


    useEffect(() => {

  
        // update incoming data
        //--------------
        setIncomingData(data);


        // show (ONLY, DO NOT USE `if ... else ...`)
        //--------------
        if (show) {
            handleOpenWin(null);
        }


        // Pass the function to be called
        //--------------
        onLoad?.(() => handleOpenWin, () => handleCloseWin);


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
    
            if (LOCK_BODY_SCROLL) clearAllBodyScrollLocks();

            // Cancels a timeout previously established by calling setTimeout().
            clearTimeout(window.setCloseModalDialog);
            
        }


    }, [show, data, modalRef.current]);   // When show`` defaults to true, `modalRef.current` will be null

    // 监听回车键
    useEffect(() => {
        if (!modalShow || !onPressEnter) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === 'NumpadEnter') {
                const callback = () => {
                    handleCloseWin(null);
                };
                onPressEnter?.(callback);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalShow, onPressEnter]);

    return (
        <>
            {triggerContent ? <>
                <div className={triggerClassName ? triggerClassName : 'd-inline w-auto'} ref={triggerRef} onClick={handleOpenWin}>{triggerContent}</div>
            </> : null}

     
            {/* Modal */}
            <RootPortal show={true} containerClassName="ModalDialog">

                <div 
                    ref={modalRef} 
                    className={enableVideo ? `modal fade is-video ${modalShow ? 'show' : ''}` : `modal fade ${modalShow ? 'show' : ''}`} 
                    tabIndex={-1} 
                    aria-hidden="true" 
                    style={{ 
                        pointerEvents: 'none',
                        zIndex: DEPTH
                    }} 
                    data-mask={`mask-${idRes}`}
                >
                    <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${fullscreen ? 'modal-fullscreen' : ''}`} style={M_WIDTH ? { maxWidth: `${M_WIDTH}` } : {}}>
                        <div 
                            ref={dragContentHandle} 
                            className={`${enableVideo ? 'modal-content bg-transparent shadow-none border-0' : 'modal-content'} ${modalContentClassName || ''} ${isDragging ? 'dragging' : ''}`} 
                            style={{ 
                                overflow: 'inherit', 
                                minHeight: M_HEIGHT ? M_HEIGHT : 'auto' 
                            }}
                        >
                            {(!heading || heading === '') && closeDisabled ? null : <>

                                <div 
                                    ref={dragHandle} 
                                    className={`${enableVideo ? 'modal-header border-0 px-0' : 'modal-header'} ${modalHeaderClassName || ''}`}
                                    style={{ 
                                        cursor: draggable ? 'move' : 'default'
                                    }}
                                >
                                    <h5 className={`modal-title ${modalTitleClassName || ''}`}>{heading || ''}</h5>
                                    {!closeDisabled ? <button type="button" className={enableVideo ? 'btn-close btn-close-white' : 'btn-close'} data-close="1" onClick={(e) => handleCloseWin(e)}></button> : null}

                                </div>
                            </>}

                            <div className={`${enableVideo ? 'modal-body m-0 p-0' : 'modal-body'} ${modalBodyClassName || ''}`}>
                                {/*<!-- ////////  content  begin //////// -->*/}
                                {enableVideo ? <>
                                    <div className="modal-dialog__video">
                                        <div className="ratio ratio-16x9">
                                            {children}
                                        </div>
                                    </div>
                                </> : children}
                                {/*<!-- ////////  content  end //////// -->*/}
                            </div>



                            {/* FOOTER CONTENT */}
                            {footerExpandedContent ? <>
                                <div className={`modal-footer modal-expanded-footer ${modalFooterExpandedContentClassName || ''}`}>
                                    {footerExpandedContent}
                                </div>
                            </> : null}
                            {/* /FOOTER CONTENT */}


                            {/* SUBMIT & CANCEL */}
                            {closeBtnLabel || submitBtnLabel ? <>
                                <div className={`modal-footer ${modalFooterClassName || ''}`}>

                                    {!closeDisabled ? <>{closeBtnLabel ? <button data-close="1" onClick={(e) => handleCloseWin(e)} type="button" className={closeBtnClassName ? closeBtnClassName : 'btn btn-secondary'}>{closeBtnLabel}</button> : null}</> : null}

                                    {submitBtnLabel ? <button data-confirm="1" data-incoming-data={`${incomingData}`} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        const callback = () => {
                                            handleCloseWin(e);
                                        };
                                        onSubmit?.(e, callback, incomingData);
                                    }} type="button" className={submitBtnClassName ? submitBtnClassName : 'btn btn-primary'}>{submitBtnLabel}</button> : null}
                                </div>
                            </> : null}
                            {/* /SUBMIT & CANCEL */}

                        </div>
                    </div>
                </div>

                {/* MASK */}
                {!maskDisabled ? <div id={`mask-${idRes}`}>
                    <div
                        id={`mask-${idRes}`}
                        className={modalShow ? 'modal-backdrop fade show' : 'modal-backdrop fade'}
                        style={maskOpacity ? {
                            display: modalShow ? 'block' : 'none',
                            opacity: maskOpacity,
                            zIndex: DEPTH - 5
                        } : {
                            display: modalShow ? 'block' : 'none',
                            zIndex: DEPTH - 5
                        }}
                        onClick={(e: any) => {
                            if ((typeof closeDisabled === 'undefined' || closeDisabled === false) && (typeof closeOnlyBtn === 'undefined' || closeOnlyBtn === false)) {
                                handleCloseWin(null);
                            }
                        }}
                    ></div>
                </div> : null}
                {/* /MASK */}

                
            </RootPortal>



        </>
    )
});

export default ModalDialog;
