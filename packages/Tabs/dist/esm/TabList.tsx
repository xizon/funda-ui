import React from 'react';

interface TabListProps extends React.ComponentPropsWithoutRef<any> {
	defaultActive?: string | boolean | undefined;
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
        targetId,
        index,
        switchEv,
        children,
        ...attributes
    } = props;
    
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' active' : '';

    
    return (
        <>

            <li className={`nav-item ${activedClassName}`} role="presentation" onClick={switchEv} data-tab={targetId}>
                <button className={`nav-link ${activedClassName}`} type="button" role="tab" {...attributes}>{children}</button>
            </li>

        </>
    )
}


export default TabList;
