import React from 'react';


interface TabPanelProps extends React.ComponentPropsWithoutRef<"div"> {
	defaultActive?: string | boolean | undefined;
	tabpanelClass?: string;
	targetId?: string;
};

const TabPanel = (props: TabPanelProps) => {

    const { 
        defaultActive,
        tabpanelClass,
        targetId,
        ...attributes
    } = props;
    
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ' show active' : '';

    
    return (
        <>

            <div role="tabpanel" id={targetId} className={ tabpanelClass ? `tab-pane fade ${tabpanelClass} ${activedClassName}` : `tab-pane fade ${activedClassName}`} {...attributes}></div>

        </>
    )
}

export default TabPanel;
