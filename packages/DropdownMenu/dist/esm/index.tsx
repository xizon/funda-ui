import React, { useEffect, useState, useRef, useId } from 'react';

import RootPortal from 'funda-root-portal';
import {
    useClickOutside,
    getAbsolutePositionOfStage
} from 'funda-utils';


import Option from './Option';



type OptionChangeFnType = (arg1: any, arg2: any) => void;

interface OptionConfig {
    [propName: string]: string | number;
}

type DropdownMenuProps = {
    wrapperClassName?: string;
    listClassName?: string;
    hyperlinkClassName?: string;
    showClassName?: string;
    exceededSidePosOffset?: number;
    hoverOn?: boolean;
    hoverOff?: boolean;
    hoverDelay?: number;
    iconLeft?: React.ReactNode | string;
    iconRight?: React.ReactNode | string;
    /** Set a name for the form field for this component  */
    name?: string;
    /** Whether to use button style, otherwise use "div" */
    triggerButton?: boolean;
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: string;
    /** When enabled, the corresponding option content will be displayed after selecting an option */
    triggerSwitchActive?: boolean;
    /** Specify data of Dropdown Menu as a JSON string format. */
    options?: OptionConfig[];
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    /** -- */
    id?: string;
    tabIndex?: number;
    onChange?: OptionChangeFnType | null;
};

const DropdownMenu = (props: DropdownMenuProps) => {

    const {
        wrapperClassName,
        listClassName,
        hyperlinkClassName,
        showClassName,
        exceededSidePosOffset,
        hoverOn,
        hoverOff,
        hoverDelay,
        iconLeft,
        iconRight,
        name,
        triggerButton,
        triggerClassName,
        triggerContent,
        triggerSwitchActive,
        options,
        tabIndex,
        id,
        onChange
    } = props;

    const POS_OFFSET = 0;
    const EXCEEDED_SIDE_POS_OFFSET = Number(exceededSidePosOffset) || 15;
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const triggerRef = useRef<any>(null);
    const iconRef = useRef<any>(null);
    const listRef = useRef<any>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<any>(null);
    const _hoverDelay = !isNaN(hoverDelay as never) && typeof hoverDelay !== 'undefined' ? hoverDelay : 150;

   
    const defaultLabel = triggerContent === undefined ? '' : triggerContent;
    const selectedLabel = triggerSwitchActive ? (selected ? selected.label : defaultLabel) : defaultLabel;
    const selectOptionsListPresentation = options?.map((selectOption: any, index: number) => {
        return <Option 
            key={index} 
            option={selectOption} 
            hyperlinkClassName={hyperlinkClassName ? hyperlinkClassName : 'dd-menu-default__item'} 
            selectEv={(value: any, option: any) => handleSelect(value, option)}
        />;
    });


    // click outside
    useClickOutside({
        enabled: isOpen && rootRef.current && modalRef.current,
        isOutside: (event: any) => {

            // close dropdown when other dropdown is opened
            return (
                (rootRef.current !== event.target && !rootRef.current.contains(event.target as HTMLElement)) &&
                modalRef.current !== event.target && !modalRef.current.contains(event.target as HTMLElement)
            )
              
        },
        handle: (event: any) => {
            setIsOpen(false);
            popwinPosHide();
        }
    }, [isOpen, rootRef, modalRef]);


    
    function handleClick(event: React.MouseEvent) {
        if (hoverOn) return;
        
        setIsOpen(!isOpen);
        popwinPosInit();

    }


    function handleHoverOn(event: React.MouseEvent) {
        if (!hoverOn || typeof hoverOn === 'undefined') return;

        setTimeout(() => {
            setIsOpen(true);
            popwinPosInit();
        }, _hoverDelay);
        
    }

    function handleHoverOff(event: React.MouseEvent) {
        if (!hoverOff || typeof hoverOff === 'undefined') return;
        setTimeout(() => {
            setIsOpen(false);
            popwinPosHide();
        }, _hoverDelay);
        
    }



    function handleSelect(value: any, option: any) {

        setIsOpen(false);
        popwinPosHide();
        setSelected(option);

        // change display text of trigger
        setTimeout(() => {
            if (triggerRef.current !== null) {
                triggerRef.current.querySelector('.dd-menu__trigger').innerHTML = option.label;
            }
        }, 0);

        if (typeof (onChange) === 'function') {
            onChange(value, option);
        }

    }




    function popwinPosInit() {
        if (modalRef.current === null || triggerRef.current === null) return;

        setTimeout(() => {


            // update modal position
            const _modalRef: any = document.querySelector(`#dd-menu-list__wrapper-${idRes}`);
            const _triggerRef: any = triggerRef.current;
            
            
            // console.log(getAbsolutePositionOfStage(_triggerRef));

            const {x, y, width, height} = getAbsolutePositionOfStage(_triggerRef);
            const _triggerBox = _triggerRef.getBoundingClientRect();
            let targetPos = '';


            // STEP 1:
            //-----------
            // display wrapper
            _modalRef.classList.add('active');
            



            // STEP 2:
            //-----------
            // Detect position
            if (window.innerHeight - _triggerBox.top > 100) {
                targetPos = 'bottom';
            } else {
                targetPos = 'top';
            }
    
    
            // STEP 3:
            //-----------
            // Adjust position
            if (targetPos === 'top') {
                _modalRef.style.left = x + 'px';
                //_modalRef.style.top = y - POS_OFFSET - (listRef.current.clientHeight) - 2 + 'px';
                _modalRef.style.top = 'auto';
                _modalRef.style.bottom = (window.innerHeight - _triggerBox.top) + POS_OFFSET + 2 + 'px';
                _modalRef.style.setProperty('position', 'fixed', 'important');
                _modalRef.classList.add('pos-top');
            }
    
            if (targetPos === 'bottom') {
                _modalRef.style.left = x + 'px';
                _modalRef.style.bottom = 'auto';
                _modalRef.style.top = y + height + POS_OFFSET + 'px';
                _modalRef.style.setProperty('position', 'absolute', 'important');
                _modalRef.classList.remove('pos-top');
            }
    
            
            // STEP 4:
            //-----------            
            // Determine whether it exceeds the far right or left side of the screen
            const _modalContent = modalRef.current;
            const _modalListContent = modalRef.current.querySelector('.dd-menu-list__inner');
            const _modalBox = _modalListContent.getBoundingClientRect();
            const _iconRef: any = iconRef.current;

    
            // 10 pixels is used to account for some bias in mobile devices
            if ((_modalBox.right + 10) > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                _iconRef.style.marginLeft = `${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if ((_modalBox.left - 10) < 0) {
                const _modalOffsetPosition = Math.abs(_modalBox.left) + EXCEEDED_SIDE_POS_OFFSET;
                _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
                _iconRef.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


        }, 0);
        

    }



    function popwinPosHide() {

        const _modalRef: any = document.querySelector(`#dd-menu-list__wrapper-${idRes}`);
        if (_modalRef !== null) {
            // remove classnames and styles
            _modalRef.classList.remove('active');

        }

    }



    return (
        <>

            <div 
                ref={rootRef}
                className={`dd-menu__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : `dd-menu-default`} ${isOpen ? 'active' : ''}`} 
                onMouseLeave={handleHoverOff} 
            >

                
                {triggerButton ? <button 
                    ref={triggerRef}
                    tabIndex={tabIndex || -1} 
                    className={triggerClassName ? `${triggerClassName}` : `d-block-inline w-auto`} 
                    type="button" 
                    data-overlay-id={`dd-menu-list__wrapper-${idRes}`}
                    onMouseEnter={handleHoverOn} 
                    onClick={handleClick} 
                >
                    {iconLeft ? <><span className="dd-menu__icon">{iconLeft}</span></>: null}
                    <span className="dd-menu__trigger" dangerouslySetInnerHTML={{ __html: selectedLabel }}></span>
                    {iconRight ? <><span className="dd-menu__icon">{iconRight}</span></>: null}

                </button> : <div 
                    ref={triggerRef}
                    className={triggerClassName ? `${triggerClassName}` : `d-block-inline w-auto`} 
                    data-overlay-id={`dd-menu-list__wrapper-${idRes}`}
                    onMouseEnter={handleHoverOn} 
                    onClick={handleClick} 
                >
                    {iconLeft ? <><span className="dd-menu__icon">{iconLeft}</span></>: null}
                    <span className="dd-menu__trigger" dangerouslySetInnerHTML={{ __html: selectedLabel }}></span>
                    {iconRight ? <><span className="dd-menu__icon">{iconRight}</span></>: null}
                </div>
                }

                

                {/* INPUT */}
                <input name={name || ''} type="hidden" value={selected?.value} /> {/* // do not use `defaultValue` */}
                {/* /INPUT */}
                
                {/* MENU LIST */}
                <RootPortal show={true} containerClassName="DropdownMenu">
                    <div
                        ref={modalRef}
                        className="dd-menu-list__wrapper"
                        id={`dd-menu-list__wrapper-${idRes}`}
                        style={{ display: 'none'}}
                    >
                        <span ref={iconRef} className={`dd-menu-list__icon ${isOpen ? 'active' : ''}`}></span>

                        <ul
                            ref={listRef}
                            className={`dd-menu-list__inner ${listClassName ? listClassName : 'dd-menu-default__inner'} ${isOpen ? (showClassName ? showClassName : 'show') : ''}`}
                        >
                            {selectOptionsListPresentation}
                        </ul>
                    </div>
                </RootPortal>
                
                {/* /MENU LIST */}


            </div>

        </>
    )
}




export default DropdownMenu;