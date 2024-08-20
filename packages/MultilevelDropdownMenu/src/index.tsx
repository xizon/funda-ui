import React, { useRef, useState, useEffect, memo } from 'react';

import {
    useComId
} from 'funda-utils';



import ItemList from './ItemList';


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

    const rootRef = useRef<any>(null);
    const uniqueID = useComId();
    const idRes = id || uniqueID;
    const [val, setVal] = useState<any>(null);

    useEffect(() => {
        setVal(data);
    }, [data]);

   
    return (
        <>

            <nav 
                id={idRes} 
                className={navbarClassName ? navbarClassName : "navbar"}
                ref={rootRef}
            >
                <ItemList 
                    root={rootRef.current}
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