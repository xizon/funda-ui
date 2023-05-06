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
    
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ` ${expandedActiveClassNameForPanel ? expandedActiveClassNameForPanel : `show active ${expandedActiveClassNameForPanel}`}` : 'show active';

    
    return (
        <>

            <div role="tabpanel" id={targetId} className={ tabpanelClass ? `tab-pane fade ${tabpanelClass} ${activedClassName}` : `tab-pane fade ${activedClassName}`} {...attributes}></div>

        </>
    )
}

export default TabPanel;
