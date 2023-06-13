import React, { useId, useState, useRef, useEffect } from 'react';
//Destroys body scroll locking
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from './plugins/BSL';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

declare global {
    interface Window {
        curVideo?: any;
        setCloseModalDialog?: any;
    }
}



type ModalDialogProps = {
    /** Whether the modal dialog is visible or not, you can use it with the `autoClose` property at the same time */
    show: boolean;
    /** Prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation. Enabled by default, after enabling the default JS event will be invalid, you need to use the `onOpen` attribute to add some new events to elements. Please refer to the example. */
    protectFixedViewport?: boolean;
    /** Custom modal max-width whick need a unit string. */
    maxWidth?: number | string;
    /** Adapt the video to the window */
    enableVideo?: boolean;
    /** Set a window title */
    heading?: React.ReactNode;
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
    /** Disable mask to close the window */
    closeOnlyBtn?: boolean;
    /** Disable the close button. */
    closeDisabled?: boolean;
    /** Incoming data, you can set the third parameter of `onSubmit` */
    data?: string;
    /** -- */
    id?: string;
    children: React.ReactNode;
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onLoad?: (openFunc: any, closeFunc: any) => void;
    onOpen?: (e: any, callback: any) => void;
    onClose?: (e: any) => void;
    onSubmit?: (e: any, callback: any, incomingData: string | null | undefined) => void;
};

const ModalDialog = (props: ModalDialogProps) => {
    const {
        show,
        protectFixedViewport,
        maxWidth,
        enableVideo,
        heading,
        triggerClassName,
        triggerContent,
        closeBtnClassName,
        closeBtnLabel,
        submitBtnClassName,
        submitBtnLabel,
        autoClose,
        maskDisabled,
        closeOnlyBtn,
        closeDisabled,
        data,
        onLoad,
        onOpen,
        onClose,
        onSubmit,
        id,
        children
    } = props;


    const uniqueID = useId().replace(/\:/g, "-");
    const modalRef = useRef<any>(null);
    const triggerRef = useRef<any>(null);
    const idRes = id || uniqueID;
    const PROTECT_FIXED_VIEWPORT =  typeof protectFixedViewport === 'undefined' ? true : protectFixedViewport;

    const [winShow, setWinShow] = useState<boolean>(false);
    const [incomingData, setIncomingData] = useState<string | null | undefined>(null);


    function handleCloseWin(e: any) {
        if (typeof e !== 'undefined' && e !== null) e.preventDefault();

        closeAction();

        //
        onClose?.(e);
    }


    function handleOpenWin(e: any) {
        if (typeof e !== 'undefined' && e !== null) e.preventDefault();

        openAction();

        //
        const callback = (e: any) => {
            return () => {
                handleCloseWin(e);
            }
        };
        onOpen?.(e, callback(e));
    }

    function closeAction() {
        // pause video without controls
        //------------------------------------------
        if (window.curVideo !== null && typeof window.curVideo !== 'undefined') window.curVideo.pause();


        // close Modal Dialog
        //------------------------------------------
        const $mask: HTMLElement | null = document.querySelector(`#mask-${idRes} > .modal-backdrop`);
        setWinShow(false);
        if ($mask !== null) $mask.classList.remove('show');

        setTimeout(() => {
            modalRef.current.style.display = 'none';
            if ($mask !== null) $mask.style.display = 'none';
        }, 300);



        // Unlocks the page
        //------------------------------------------
        enableBodyScroll(document.querySelector('body'));


        // Cancels a timeout previously established by calling setTimeout().
        //------------------------------------------
        clearTimeout(window.setCloseModalDialog);


    }


    function openAction() {


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
            setWinShow(true);
            if ($mask !== null) $mask.classList.add('show');
        }, 0);



        // Locks the page
        //------------------------------------------
        //
        // Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        disableBodyScroll(document.querySelector('body'));



        //auto close
        //------------------------------------------
        if (autoClose && !isNaN(autoClose as number)) {
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
        //------------------------------------------
        setIncomingData(data);

 
        // Move HTML templates to tag end body </body>
        // render() don't use "Fragment", in order to avoid error "Failed to execute 'insertBefore' on 'Node'"
        // prevent "transform", "filter", "perspective" attribute destruction fixed viewport orientation
        //------------------------------------------
        if ( PROTECT_FIXED_VIEWPORT ) {
            if ( document.body !== null ) {
                
                document.body.appendChild(modalRef.current);

                [].slice.call(modalRef.current.querySelectorAll('[data-close]')).forEach((node: HTMLElement) => {
                    if ( typeof node.dataset.ev === 'undefined' ) {
                        node.dataset.ev = 'true';
                        node.addEventListener('pointerdown', (e: any) => {
                            handleCloseWin(e);
                        });
                    }

                });
                [].slice.call(modalRef.current.querySelectorAll('[data-confirm]')).forEach((node: HTMLElement) => {
                    if ( typeof node.dataset.ev === 'undefined' ) {
                        node.dataset.ev = 'true';
                        node.addEventListener('pointerdown', (e: any) => {
                            const callback = (e: any) => {
                                return () => {
                                    handleCloseWin(e);
                                }
                            };

                            const _incomingData = node.dataset.incomingData;
                            onSubmit?.(e, callback(e), _incomingData);
                        });
                    }

                });  
            }
            

        }


        // add mask
        //------------------------------------------
        if (document.getElementById(`mask-${idRes}`) === null && !maskDisabled && document.body !== null) {
            const maskDiv = document.createElement('div');
            maskDiv.id = `mask-${idRes}`;
            maskDiv.innerHTML = `<div class="${winShow ? 'modal-backdrop fade show' : 'modal-backdrop fade'}" style="display:none"></div>`;
            document.body.appendChild(maskDiv);

            if (!closeOnlyBtn) {
                const $mask: HTMLElement | null = document.querySelector(`#mask-${idRes} > .modal-backdrop`);
                if ($mask !== null) $mask.addEventListener('pointerdown', (e: any) => {
                    handleCloseWin(e);
                });
            }

        }


        // show
        //------------------------------------------
        if (show) {
            openAction();


            //
            const callback = (e: any) => {
                return () => {
                    handleCloseWin(e);
                }
            };
            onOpen?.(null, callback(null));

        }


        // Pass the function to be called
        //------------------------------------------
        onLoad?.(() => handleOpenWin, () => handleCloseWin);


        // Remove the global list of events, especially as scroll and interval.
        //--------------
        return () => {
            clearAllBodyScrollLocks();

            // Cancels a timeout previously established by calling setTimeout().
            clearTimeout(window.setCloseModalDialog);
            
            // Remove all masks and modals
            Array.prototype.forEach.call(document.querySelectorAll('.modal-backdrop, .modal'), (node) => {
                if ( PROTECT_FIXED_VIEWPORT ) {
                    if (node.classList.contains('modal') && node.classList.contains('protect-fixed-viewport')) {
                        node.remove();
                    }
                }

                if (!node.classList.contains('modal')) {
                    node.parentElement.remove();
                }

            });

        }


    }, [show, data]);

    return (
        <div>
            {triggerContent ? <>
                <div className={triggerClassName ? triggerClassName : 'd-inline w-auto'} ref={triggerRef} onClick={handleOpenWin}>{triggerContent}</div>
            </> : null}

            {/* Modal */}
            <div ref={modalRef} className={enableVideo ? `modal ${PROTECT_FIXED_VIEWPORT ? 'protect-fixed-viewport' : ''} fade is-video ${winShow ? 'show' : ''}` : `modal ${PROTECT_FIXED_VIEWPORT ? 'protect-fixed-viewport' : ''} fade ${winShow ? 'show' : ''}`} tabIndex={-1} aria-hidden="true" style={{ pointerEvents: 'none' }}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={maxWidth ? { maxWidth: `${maxWidth}` } : {}}>
                    <div className={enableVideo ? 'modal-content bg-transparent shadow-none border-0' : 'modal-content'} style={{overflow: 'inherit'}}>
                        {(!heading || heading === '') && closeDisabled ? null : <>

                            <div className={enableVideo ? 'modal-header border-0 px-0' : 'modal-header'}>
                                <h5 className="modal-title">{heading || ''}</h5>
                                {!closeDisabled ? <button type="button" className={enableVideo ? 'btn-close btn-close-white' : 'btn-close'} data-close="1" onClick={handleCloseWin}></button> : null}

                            </div>
                        </>}

                        <div className={enableVideo ? 'modal-body m-0 p-0' : 'modal-body'}>
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

                        {closeBtnLabel || submitBtnLabel ? <>
                            <div className="modal-footer">

                                {!closeDisabled ? <>{closeBtnLabel ? <button data-close="1" onClick={handleCloseWin} type="button" className={closeBtnClassName ? closeBtnClassName : 'btn btn-secondary'}>{closeBtnLabel}</button> : null}</> : null}

                                {submitBtnLabel ? <button data-confirm="1" data-incoming-data={`${incomingData}`} onClick={(e: any) => {
                                    const callback = (e: any) => {
                                        return () => {
                                            handleCloseWin(e);
                                        }
                                    };
                                    onSubmit?.(e, callback(e), incomingData);
                                }} type="button" className={submitBtnClassName ? submitBtnClassName : 'btn btn-primary'}>{submitBtnLabel}</button> : null}
                            </div>
                        </> : null}

                    </div>
                </div>
            </div>


        </div>
    )
};

export default ModalDialog;
