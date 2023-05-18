/// <reference types="react" />
declare type OptionChangeFnType = (arg1: any) => void;
interface OptionConfig {
    value?: string | undefined;
    label?: string | undefined;
}
declare type DropdownMenuProps = {
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
    /** Specify data of Dropdown Menu as a JSON string format.
     * Such as: `[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}]` */
    options?: OptionConfig[];
    /** This function is called whenever the data is updated.
     *  Exposes the JSON format data about the option as an argument.
     */
    onChange?: OptionChangeFnType | null;
};
declare const DropdownMenu: (props: DropdownMenuProps) => JSX.Element;
export default DropdownMenu;
