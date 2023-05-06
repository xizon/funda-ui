import React, { useId, useEffect, useRef } from 'react';


//
import TabList from './TabList';
import TabPanel from './TabPanel';


type TabsProps = {
    wrapperClassName?: string;
    tabsClassName?: string;
    /** -- */
    style?: React.CSSProperties;
    onChange?: (nav: any, targetId: any, index: number) => void;
	children: React.ReactNode | React.ReactNode[];
};

const Tabs = (props: TabsProps) => {
    
    const {
        wrapperClassName,
        tabsClassName,
        style,
        onChange,
        children // the contents of the TabList and TabPanel in a loop
    } = props;

    const uniqueID = useId().replace(/\:/g, "-");
    const rootRef = useRef<any>(null);


    function handleClickItem(e: any) {
        e.preventDefault();
        const el = e.currentTarget;
        const currentIndex = Array.prototype.slice.call(el.parentElement.children).indexOf(el);

        itemInit(el, false);

        //
        if (typeof (onChange) === 'function') {
            onChange(el, el.dataset.tab, currentIndex);

        }
    }


    function itemInit(targetEl: any, itemsInit: boolean) {

        const reactDomWrapperEl: any = rootRef.current;
        const $li = reactDomWrapperEl.querySelectorAll('ul.nav-tabs > li'),
            $allContent = reactDomWrapperEl.querySelectorAll('.tab-pane');
        const tabID = targetEl.dataset.tab;


        //


        Array.prototype.forEach.call($li, (node) => {
            node.classList.remove('active');
            node.firstChild.classList.remove('active');
        });

        Array.prototype.forEach.call($allContent, (node) => {
            node.classList.remove('show');
            setTimeout(() => {
                node.classList.remove('active');
            }, 150); 
        });

        // currently active
        targetEl.classList.add('active');
        targetEl.firstChild.classList.add('active');
        if (tabID !== undefined) {
            document.getElementById(tabID)!.classList.add('active');
            setTimeout(() => {
                document.getElementById(tabID)!.classList.add('active', 'show');
            }, 150);  
        }

    }


    useEffect(() => {

        // Initialize tabs
        //--------------
        const reactDomWrapperEl: any = rootRef.current;
        const $li = reactDomWrapperEl.querySelectorAll('ul.nav-tabs > li');
        itemInit($li[0], true);

    }, []);




    return (
        <>

            <div className={wrapperClassName ? wrapperClassName : "mb-3 position-relative"} ref={rootRef} style={style}>
                <ul className={tabsClassName ? tabsClassName : "nav nav-tabs mb-3"} role="tablist">

                    {(() => {
                        if (children != null) {
                            let tabListIndex = 0;

                            // If <TabList /> uses map to return, it will be wrapped into an array
                            /*
                            Such as:

                                {[1,2,3].map((item: any, i: number) =>{
                                    return <TabList key={`tab-list-${i}`} defaultActive={i === 0 ? true : false}>{item}</TabList>
                                })}
                            */

                            const elements: React.ReactNode | React.ReactNode[] = Array.isArray((children as any[])[0]) ? (children as any[])[0] : children;
                         
                            return (elements as any[]).map((item, i) => {
                                const childProps = { ...item.props };
                                delete childProps.key;

                                if (item.key.indexOf('tab-list') >= 0) {
                                    tabListIndex++;
                                    return <TabList
                                        key={item.key}
                                        index={tabListIndex}
                                        switchEv={handleClickItem}
                                        targetId={`tabs-show-${uniqueID}-${tabListIndex}`}
                                        {...childProps} />;
                                }


                            });
                        }
                    })()}


                </ul>

                <div className="tab-content">
                    {(() => {
                        if (children != null) {
                            let tabPanelIndex = 0;

                            // If <TabPanel /> uses map to return, it will be wrapped into an array
                            /*
                            Such as:

                                {[1,2,3].map((item: any, i: number) =>{
                                    return <TabPanel key={`tab-panel-${i}`}  tabpanelClass="fs-6" defaultActive={i === 0 ? true : false}>{item}</TabPanel>
                                })}    
                            */
                            const elements: React.ReactNode | React.ReactNode[] = Array.isArray((children as any[])[1]) ? (children as any[])[1] : children;

                            return (elements as any[]).map((item, i) => {
                                const childProps = { ...item.props };
                                delete childProps.key;

                                if (item.key.indexOf('tab-panel') >= 0) {
                                    tabPanelIndex++;
                                    return <TabPanel
                                        key={item.key}
                                        targetId={`tabs-show-${uniqueID}-${tabPanelIndex}`}
                                        {...childProps} />;
                                }



                            });
                        }
                    })()}
                </div>


            </div>


        </>
    )

}




export default Tabs;
