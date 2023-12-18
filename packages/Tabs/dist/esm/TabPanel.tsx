import React from 'react';


interface TabPanelProps extends React.ComponentPropsWithoutRef<"div"> {
    fadeDisabled?: boolean;
	defaultActive?: string | boolean | undefined;
    expandedActiveClassNameForPanel?: string;
	tabpanelClass?: string;
	targetId?: string;
    index?: number;
};

const TabPanel = (props: TabPanelProps) => {

    const { 
        fadeDisabled,
        defaultActive,
        expandedActiveClassNameForPanel,
        tabpanelClass,
        targetId,
        index,
        ...attributes
    } = props;
    

    const _expandClassName =  typeof(expandedActiveClassNameForPanel) !== 'undefined' ? expandedActiveClassNameForPanel : '';
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ` show active ${_expandClassName}` : ` ${_expandClassName}`;

    return (
        <>

            <div data-index={index} data-tabpanel-index={index} role="tabpanel" id={targetId} className={ tabpanelClass ? `tab-pane ${fadeDisabled ? '' : 'fade'} ${tabpanelClass} ${activedClassName}` : `tab-pane ${fadeDisabled ? '' : 'fade'} ${activedClassName}`} {...attributes}></div>

        </>
    )
}

export default TabPanel;
