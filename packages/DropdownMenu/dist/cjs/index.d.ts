import React from 'react';
declare type OptionChangeFnType = (arg1: any, arg2: any) => void;
export interface OptionConfig {
    [propName: string]: string | number;
}
declare type DropdownMenuProps = {
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
declare const DropdownMenu: (props: DropdownMenuProps) => JSX.Element;
export default DropdownMenu;
