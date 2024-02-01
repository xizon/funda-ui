import React from 'react';


interface TabPanelProps extends React.ComponentPropsWithoutRef<"div"> {
	defaultActive?: string | boolean | undefined;
    expandedActiveClassNameForPanel?: string;
	tabpanelClass?: string;
	targetId?: string;
    index?: number;
};

const TabPanel = (props: TabPanelProps) => {

    const { 
        defaultActive,
        expandedActiveClassNameForPanel,
        tabpanelClass,
        targetId,
        index,
        ...attributes
    } = props;
    

    const _expandClassName =  typeof(expandedActiveClassNameForPanel) !== 'undefined' ? expandedActiveClassNameForPanel : '';
    const activedClassName = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? ` active ${_expandClassName}` : ` ${_expandClassName}`;


    // !!!Special note:
    // If you want to hide the tab in advance, please use `{ height: 0; overflow: hidden; }`, do not use `{ display: none }`
    // Otherwise it will cause the scrollHeight of the element inside the child node to be 0
    const activedStyles = typeof(defaultActive) !== 'undefined' && defaultActive !== false ? {} : {height: '0', overflow: 'hidden'}
    

    return (
        <>

            <div 
                data-index={index} 
                data-tabpanel-index={index} 
                role="tabpanel" id={targetId} 
                className={ tabpanelClass ? `tab-pane d-block ${tabpanelClass} ${activedClassName}` : `tab-pane d-block ${activedClassName}`}
                style={activedStyles}
                {...attributes}
            ></div>

        </>
    )
}

export default TabPanel;
