import React from 'react';


interface TabPanelProps extends React.ComponentPropsWithoutRef<"div"> {
	defaultActive?: string | boolean | undefined;
    expandedActiveClassNameForPanel?: string;
	tabpanelClass?: string;
	targetId?: string;
};

const TabPanel = (props: TabPanelProps) => {

    const { 
        defaultActive,
        expandedActiveClassNameForPanel,
        tabpanelClass,
        targetId,
        ...attributes
    } = props;
    
    const _expandClassName =  typeof(expandedActiveClassNameForPanel) !== 'undefined' ? expandedActiveClassNameForPanel : '';
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ` show active ${_expandClassName}` : ` ${_expandClassName}`;

    
    return (
        <>

            <div role="tabpanel" id={targetId} className={ tabpanelClass ? `tab-pane fade ${tabpanelClass} ${activedClassName}` : `tab-pane fade ${activedClassName}`} {...attributes}></div>

        </>
    )
}

export default TabPanel;
