import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef, useMemo, createContext, useContext } from 'react';

import useComId from 'funda-utils/dist/cjs/useComId';
import useClickOutside from 'funda-utils/dist/cjs/useClickOutside';
import {
    getAbsolutePositionOfStage
} from 'funda-utils/dist/cjs/getElementProperty';
import { getElCSS } from 'funda-utils/dist/cjs/inputsCalculation';

// Context for Popover state management
export interface PopoverContextValue {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    triggerRef: React.RefObject<HTMLElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    id: string;
    direction?: string;
    offset?: number;
    exceededSidePosOffset?: number;
    size?: string;
    popupArrowColor?: number[];
    popupContentStyle?: React.CSSProperties;
    wrapperClassName?: string;
    position: { x: string; y: string };
    setPosition: (pos: { x: string; y: string }) => void;
    popupArrowStyle?: React.CSSProperties;
}

export const PopoverContext = createContext<PopoverContextValue | null>(null);

export const usePopoverContext = () => {
    const context = useContext(PopoverContext);
    if (!context) {
        throw new Error('Popover components must be used within a Popover');
    }
    return context;
};

// Main Popover component (container)
export type PopoverProps = {
    /** The direction of the tip. Defaults to `top`. Possible values are: `top`, `top-right`, `top-left`, `bottom`, `bottom-right`, `bottom-left` */
    direction?: string;
    /** Position offset */
    offset?: number;
    /** Offset px that exceeds the far right or left side of the screen */
    exceededSidePosOffset?: number;
    /** The size of the content area. Defaults to `auto`. Possible values are: `auto`, `large`, `medium`, `small` */
    size?: string;
    /** Custom color for the popup arrow */
    popupArrowColor?: number[];
    /** Custom style for the popup content */
    popupContentStyle?: React.CSSProperties;
    /** The class name of the control wrapper. */
    wrapperClassName?: string;
    /** -- */
    id?: string;
    /** Controls whether the Popover is open (controlled mode) */
    open?: boolean;
    /** Callback fired when the open state changes (controlled mode) */
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
};

const Popover = forwardRef<any, PopoverProps>((props, ref) => {
    const {
        direction,
        offset,
        exceededSidePosOffset,
        size,
        popupArrowColor,
        popupContentStyle,
        wrapperClassName,
        id,
        open,
        onOpenChange,
        children
    } = props;

    const POS_OFFSET = Number(offset) || 4;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const triggerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [uncontrolledOpen, setUncontrolledOpen] = useState<boolean>(false);
    const isControlled = typeof open === 'boolean';
    const isOpen = isControlled ? !!open : uncontrolledOpen;
    const [position, setPosition] = useState<{ x: string; y: string }>({
        x: '0',
        y: '0'
    });

    const setIsOpen = (nextOpen: boolean) => {
        if (!isControlled) {
            setUncontrolledOpen(nextOpen);
        }
        if (typeof onOpenChange === 'function') {
            onOpenChange(nextOpen);
        }
    };

    const popupArrowStyle = useMemo(() => {
        if (
            typeof popupArrowColor !== 'undefined' &&
            Array.isArray(popupArrowColor) &&
            popupArrowColor.length === 4
        ) {
            return {
                '--cus-popover-arrow-bg-top': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
                '--cus-popover-arrow-bg-bottom': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
                '--cus-popover-arrow-bg-left': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
                '--cus-popover-arrow-bg-right': `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%28${popupArrowColor[0]},%20${popupArrowColor[1]},%20${popupArrowColor[2]},%20${popupArrowColor[3]}%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat`,
            } as React.CSSProperties;
        }
        return undefined;
    }, [popupArrowColor]);

    // Calculate position based on trigger element
    const calculatePosition = () => {
        const triggerEl = triggerRef.current;
        if (!triggerEl) return;

        const { x, y, width, height } = getAbsolutePositionOfStage(triggerEl);
        const pos = direction || 'top';

        if (pos.indexOf('top') >= 0) {
            setPosition({
                x: x + (width / 2) + 'px',
                y: y - height - POS_OFFSET + 'px'
            });
        } else if (pos.indexOf('bottom') >= 0) {
            setPosition({
                x: x + (width / 2) + 'px',
                y: y + height + POS_OFFSET + 'px'
            });
        }
    };

    // Expose show/hide methods to parent via ref
    useImperativeHandle(ref, () => ({
        show: () => {
            calculatePosition();
            setIsOpen(true);
        },
        hide: () => {
            setIsOpen(false);
        }
    }), [direction, POS_OFFSET]);

    // Click outside to close
    useClickOutside({
        enabled: isOpen && triggerRef.current !== null,
        isOutside: (event: any) => {
            // Prevent closing when clicking inside the popover wrapper
            if (contentRef.current && contentRef.current.contains(event.target)) {
                return false;
            }
            return (
                triggerRef.current !== event.target && 
                !triggerRef.current?.contains(event.target as HTMLElement)
            );
        },
        handle: () => {
            setIsOpen(false);
        }
    }, [isOpen]);

    const exceededOffsetInit = () => {
        // Determine whether it exceeds the far right or left side of the screen
        //------------------
        const _modalRef: any = contentRef.current;
        if (_modalRef === null) return;

        
        const _modalContent = _modalRef.querySelector('.cus-popover__content');
        if (!_modalContent) return;
        
        const _modalBox = _modalContent.getBoundingClientRect();
        if (typeof _modalContent.dataset.offset === 'undefined' && _modalBox.left > 0) {

            // Adjust the coordinates due to height
            //------------------
            const triggerEl: any = document.querySelector(`[data-overlay-id="${_modalRef.id}"]`);
            if (triggerEl !== null) {
                let pos = triggerEl.dataset.microtipPosition;
                if (typeof pos === 'undefined') pos = 'top';

                const _offsetY = _modalBox.height - getElCSS(_modalContent, 'font-size', true) - getElCSS(_modalContent, 'padding-top', true) - getElCSS(_modalContent, 'padding-bottom', true);

                if (pos.indexOf('top') >= 0) {
                    _modalRef.style.transform = `translateY(-${_offsetY}px)`;
                }
            }

            // 10 pixels is used to account for some bias in mobile devices
            if ((_modalBox.right + 10) > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
            }

            if ((_modalBox.left - 10) < 0) {
                const _modalOffsetPosition = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.dataset.offset = _modalOffsetPosition;
                _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
            }
        }
    };

    // Update position when opening
    useEffect(() => {
        if (isOpen) {
            calculatePosition();
        }
    }, [isOpen, direction, POS_OFFSET]);

    // Prevent element data from being unable to be obtained when ref is null
    useEffect(() => {
        exceededOffsetInit();
    });



    const contextValue: PopoverContextValue = {
        isOpen,
        setIsOpen,
        triggerRef,
        contentRef,
        id: idRes,
        direction,
        offset,
        exceededSidePosOffset,
        size,
        popupArrowColor,
        popupContentStyle,
        wrapperClassName,
        position,
        setPosition,
        popupArrowStyle
    };

    return (
        <PopoverContext.Provider value={contextValue}>
            {children}
        </PopoverContext.Provider>
    );
});

Popover.displayName = 'Popover';

export default Popover;
