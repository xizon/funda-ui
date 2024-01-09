import React, { useEffect, useState, useRef } from 'react';

import Option from './Option';

type OptionChangeFnType = (arg1: any) => void;

interface OptionConfig {
    value?: string | undefined;
    label?: string | React.ReactNode | undefined;
}

type DropdownMenuProps = {
    wrapperClassName?: string;
    listClassName?: string;
    hyperlinkClassName?: string;
    showClassName?: string;
    hoverOn?: boolean;
    hoverOff?: boolean;
    hoverDelay?: number;
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
    /** Center align the options layer in a drop-down field. By default it is left aligned "start". */
    alignOptionsLayer?: string;
    /** Specify data of Dropdown Menu as a JSON string format. */
    options?: OptionConfig[];
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    /** -- */
    tabIndex?: number;
    onChange?: OptionChangeFnType | null;
};

const DropdownMenu = (props: DropdownMenuProps) => {

    const {
        wrapperClassName,
        listClassName,
        hyperlinkClassName,
        showClassName,
        hoverOn,
        hoverOff,
        hoverDelay,
        name,
        triggerButton,
        triggerClassName,
        triggerContent,
        triggerSwitchActive,
        alignOptionsLayer,
        options,
        tabIndex,
        onChange
    } = props;

    const POS_OFFSET = 10;
    const modalRef = useRef<any>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<any>(null);
    const _hoverDelay = !isNaN(hoverDelay as never) && typeof hoverDelay !== 'undefined' ? hoverDelay : 150;

   
    const defaultLabel = triggerContent === undefined ? '' : triggerContent;
    const selectedLabel = triggerSwitchActive ? (selected ? selected.label : defaultLabel) : defaultLabel;
    const selectOptionsListPresentation = options?.map((selectOption: any, index: number) => {
        return <Option key={index} option={selectOption} onSelect={handleSelect} hyperlinkClassName={hyperlinkClassName ? hyperlinkClassName : 'dropdown-item-default'} />;
    });


    function handleClick(event: React.MouseEvent) {
        if (hoverOn) return;
        setIsOpen(!isOpen);
    }


    function handleHoverOn(event: React.MouseEvent) {
        if (!hoverOn || typeof hoverOn === 'undefined') return;
        setTimeout(() => {
            setIsOpen(true);
            popwinListInit();
        }, _hoverDelay);
        
    }

    function handleHoverOff(event: React.MouseEvent) {
        if (!hoverOff || typeof hoverOff === 'undefined') return;
        setTimeout(() => {
            setIsOpen(false);
        }, _hoverDelay);
        
    }



    function handleClose(event: any) {
        if (event.target.closest(`.${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'dropdown__wrapper'}`) === null) {
            setIsOpen(false);
        }
    }


    function handleSelect(option: any) {
        setIsOpen(false);
        setSelected(option);

        if (typeof (onChange) === 'function') {
            onChange(option);
        }

    }




    function popwinListInit() {
        if (modalRef.current === null) return;

        setTimeout(() => {
            // Determine whether it exceeds the far right or left side of the screen
            const _modalContent = modalRef.current;
            const _modalBox = _modalContent.getBoundingClientRect();

            if (_modalBox.right > window.innerWidth) {
                const _modalOffsetPosition = _modalBox.right - window.innerWidth + POS_OFFSET;
                _modalContent.style.marginLeft = `-${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


            if (_modalBox.left < 0) {
                const _modalOffsetPosition = Math.abs(_modalBox.left) + POS_OFFSET;
                _modalContent.style.marginLeft = `${_modalOffsetPosition}px`;
                // console.log('_modalPosition: ', _modalOffsetPosition)
            }


        }, 0);
        

    }



    useEffect(() => {

        document.removeEventListener('pointerdown', handleClose);
        document.addEventListener('pointerdown', handleClose);

        return () => {
            document.removeEventListener('pointerdown', handleClose);
        }

    }, [options]);
    

    return (
        <>

            <div className={`dropdown__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : `dropdown-default dropdown-default--${alignOptionsLayer ? alignOptionsLayer : 'center'}`} ${isOpen ? 'active' : ''}`} onMouseLeave={handleHoverOff} >

                {triggerButton ? <button tabIndex={tabIndex || -1} className={triggerClassName ? `${triggerClassName}` : `d-inline w-auto`} type="button" onMouseEnter={handleHoverOn} onClick={handleClick} dangerouslySetInnerHTML={{ __html: selectedLabel }}></button> : <div className={triggerClassName ? `${triggerClassName}` : `d-inline w-auto`} onMouseEnter={handleHoverOn} onClick={handleClick} dangerouslySetInnerHTML={{ __html: selectedLabel }}></div>}

                <input name={name || ''} type="hidden" value={selected?.value} />
                <ul ref={modalRef} className={isOpen ? `${listClassName ? listClassName : 'dropdown-menu-default'} ${showClassName ? showClassName : 'show'}` : `${listClassName ? listClassName : 'dropdown-menu-default'}`}>
                    {selectOptionsListPresentation}
                </ul>
            </div>

        </>
    )
}




export default DropdownMenu;