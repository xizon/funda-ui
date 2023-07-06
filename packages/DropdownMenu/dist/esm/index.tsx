import React, { useEffect, useState } from 'react';

import Option from './Option';

type OptionChangeFnType = (arg1: any) => void;

interface OptionConfig {
    value?: string | undefined;
    label?: string | undefined;
}

type DropdownMenuProps = {
    wrapperClassName?: string;
    listClassName?: string;
    hyperlinkClassName?: string;
    showClassName?: string;
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

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<any>(null);


    const defaultLabel = triggerContent === undefined ? '' : triggerContent;
    const selectedLabel = triggerSwitchActive ? (selected ? selected.label : defaultLabel) : defaultLabel;
    const selectOptionsListPresentation = options?.map((selectOption, index) => {
        return <Option key={index} option={selectOption} onSelect={handleSelect} hyperlinkClassName={hyperlinkClassName ? hyperlinkClassName : 'dropdown-item-default'} />;
    });


    function handleClick(event: any) {
        setIsOpen(!isOpen);
    }


    function handleClose(event: any) {
        if (event.target.closest(`.${wrapperClassName || wrapperClassName === '' ? wrapperClassName : 'dropdown__wrapper'}`) === null) {
            setIsOpen(false);
        }
    }


    function handleSelect(option) {
        setIsOpen(false);
        setSelected(option);

        if (typeof (onChange) === 'function') {
            onChange(option);
        }

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

            <div className={`dropdown__wrapper ${wrapperClassName || wrapperClassName === '' ? wrapperClassName : `dropdown-default dropdown-default--${alignOptionsLayer ? alignOptionsLayer : 'center'}`} ${isOpen ? 'active' : ''}`}>

                {triggerButton ? <button tabIndex={tabIndex || -1} className={triggerClassName ? `${triggerClassName}` : `d-inline w-auto`} type="button" onClick={handleClick} dangerouslySetInnerHTML={{ __html: selectedLabel }}></button> : <div className={triggerClassName ? `${triggerClassName}` : `d-inline w-auto`} onClick={handleClick} dangerouslySetInnerHTML={{ __html: selectedLabel }}></div>}

                <input name={name || ''} type="hidden" value={selected?.value} />
                <ul className={isOpen ? `${listClassName ? listClassName : 'dropdown-menu-default'} ${showClassName ? showClassName : 'show'}` : `${listClassName ? listClassName : 'dropdown-menu-default'}`}>
                    {selectOptionsListPresentation}
                </ul>
            </div>

        </>
    )
}




export default DropdownMenu;