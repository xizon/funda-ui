import React, { useState, useEffect, useId, memo } from 'react';

import MenuList from './MenuList';


declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type MultilevelDropdownMenuProps = {
    /** Mutually exclusive alternate expansion between the first levels */
    alternateCollapse?: boolean;
    /** set an arrow */
    arrow?: React.ReactNode;
    /** The class name of the navbar. */
    navbarClassName?: string;
    /** The class name of the child on <ul>. */
    childClassName?: string;
    /** Specify data of Cascading DropDown List as a JSON string format. */
    data?: any[any];
    /** Pass the current routing path into. It is used to determine whether to activate */
    routerPath?: string;
    /** -- */
    id?: string;
    onSelect?: (e: any, val: any) => void;
};


const MultilevelDropdownMenu = (props: MultilevelDropdownMenuProps) => {
    const {
        alternateCollapse,
        arrow,
        navbarClassName,
        childClassName,
        routerPath,
        data,
        id,
        onSelect
    } = props;

    const uniqueID = useId();
    const idRes = id || uniqueID;
    const [val, setVal] = useState<any>(null);

    useEffect(() => {
        setVal(data);
    }, [data]);

   
    return (
        <>

            <nav id={idRes} className={navbarClassName ? navbarClassName : "navbar"}>
                <MenuList 
                    alternateCollapse={alternateCollapse}
                    first={true}
                    arrow={arrow}
                    data={val} 
                    childClassName={childClassName || 'navbar-nav'} 
                    onSelect={onSelect} 
                    routerPath={routerPath}
                />
            </nav>

        </>
    )
};

export default memo(MultilevelDropdownMenu);