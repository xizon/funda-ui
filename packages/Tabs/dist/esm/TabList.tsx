import React from 'react';

interface TabListProps extends React.ComponentPropsWithoutRef<any> {
	defaultActive?: string | boolean | undefined;
    expandedActiveClassNameForNav?: string;
	targetId?: string;
	index?: number;
	/** Handling events for collapsing item */
	switchEv?: React.MouseEventHandler<HTMLElement>;
	/** -- */
	children: React.ReactNode;
};


const TabList = (props: TabListProps) => {

    const { 
        defaultActive,
        expandedActiveClassNameForNav,
        targetId,
        index,
        switchEv,
        children
    } = props;
    

    const _expandClassName =  typeof(expandedActiveClassNameForNav) !== 'undefined' ? expandedActiveClassNameForNav : '';
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ` active ${_expandClassName}` : ` ${_expandClassName}`;

    return (
        <>

            <li className={`nav-item ${activedClassName}`} role="presentation" onClick={switchEv} data-tab={targetId}>
                {children}
            </li>

        </>
    )
}


export default TabList;
