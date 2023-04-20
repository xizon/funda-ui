import React from 'react';
import './index.scss';
declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}
declare type MultilevelDropdownMenuProps = {
    /** The class name of the navbar. */
    navbarClassName?: string;
    /** The class name of the child on <ul>. */
    childClassName?: string;
    /** Specify data of Cascading DropDown List as a JSON string format.
     * Such as: `[{"heading":false,"slug":"pageslug1","title":"Top level 1",icon: "fa fa-window-restore","link":"#","children":[{"heading":false,"slug":"pageslug2","title":"Sub level 1","link":"#","children":[{"heading":false,"slug":"pageslug3","title":"Sub Sub Level 1","link":"#"}]}]},{"heading":false,"slug":"pageslug4","title":"Top level 2",icon: false,"link":"https://example.com"}]` */
    data?: any[any];
    /** Pass the current routing path into. It is used to determine whether to activate */
    routerPath?: string;
    /** -- */
    id?: string;
    onChange?: (e: any, isRouter: boolean) => void;
};
declare const _default: React.MemoExoticComponent<(props: MultilevelDropdownMenuProps) => JSX.Element>;
export default _default;
