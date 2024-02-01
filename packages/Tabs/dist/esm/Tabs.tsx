import React, { useId, useEffect, useRef } from 'react';


//
import TabList from './TabList';
import TabPanel from './TabPanel';


type TabsProps = {
    wrapperClassName?: string;
    navClassName?: string;
    panelClassName?: string;
    expandedActiveClassNameForNav?: string;
    expandedActiveClassNameForPanel?: string;
    animTransitionDuration?: number;
    /** -- */
    style?: React.CSSProperties;
    onChange?: (nav: any, targetId: any, index: number, persistentIndex: number) => void;
    onLoad?: (func: Function) => void;
	children: React.ReactNode | React.ReactNode[];
    
};

const Tabs = (props: TabsProps) => {
    
    const {
        wrapperClassName,
        navClassName,
        panelClassName,
        expandedActiveClassNameForNav,
        expandedActiveClassNameForPanel,
        animTransitionDuration,
        style,
        onChange,
        onLoad,
        children // the contents of the TabList and TabPanel in a loop
    } = props;

    const uniqueID = useId().replace(/\:/g, "-");
    const rootRef = useRef<any>(null);
    const speed = animTransitionDuration ? animTransitionDuration : 150;


    
    const elDisplay = (type: string, node: HTMLElement) => {
        if (node === null) return;

        // !!!Special note:
        // If you want to hide the tab in advance, please use `{ height: 0; overflow: hidden; }`, do not use `{ display: none }`
        // Otherwise it will cause the scrollHeight of the element inside the child node to be 0
        if (type === 'hide') {
            node.style.setProperty('height', '0', 'important');
            node.style.setProperty('overflow', 'hidden', 'important');
        } else {
            node.style.removeProperty('height');
            node.style.removeProperty('overflow');
        }

    };


    function handleClickItem(e: any) {
        e.preventDefault();
        
        const el = e.currentTarget;
        const currentIndex = Array.prototype.slice.call(el.parentElement.children).indexOf(el);

        itemInit(el, false);

        //
        if (typeof (onChange) === 'function') {
            onChange(el, el.dataset.tab, currentIndex, Number(el.dataset.index));

        }
    }


    function itemInit(targetEl: any, itemsInit: boolean) {

        const reactDomWrapperEl: any = rootRef.current;
        const $li = targetEl.parentElement.children;
        let $allContent: HTMLElement[] = [];
        const tabID = targetEl.dataset.tab;
        const _classNameNav = expandedActiveClassNameForNav ? expandedActiveClassNameForNav : '';
        const _classNamePanel = expandedActiveClassNameForPanel ? expandedActiveClassNameForPanel : '';


        const runExClassName = (node: HTMLElement, str: string, type: string) => {
            if (str && node !== null) {
                const _c = str.replace(/\s+(\W)/g, ' ').split(' ');
                _c.forEach( (classname: any) => {
                    if ( type === 'remove' ) node.classList.remove(classname);
                    if ( type === 'add' ) node.classList.add(classname);
                    
                });
            }
        };

        //get all panels of this wrapper
        Array.prototype.forEach.call($li, (node) => {
            const panelId = node.dataset.tab;
            $allContent.push(reactDomWrapperEl.querySelector('#' + panelId) as never);
        });

    
        //
        Array.prototype.forEach.call($li, (node) => {
            node.classList.remove('active');
            node.firstChild.classList.remove('active');

            runExClassName(node, _classNameNav, 'remove');
            runExClassName(node.firstChild, _classNameNav, 'remove');
        });

        

        $allContent.forEach( (node) => {
            // 
            elDisplay('hide', node);


            setTimeout(() => {
                node.classList.remove('active');
                runExClassName(node, _classNamePanel, 'remove');
            }, speed); 
        });

        // currently active
        targetEl.classList.add('active');
        targetEl.firstChild.classList.add('active');

        runExClassName(targetEl, _classNameNav, 'add');
        runExClassName(targetEl.firstChild, _classNameNav, 'add');

        if (tabID !== undefined) {
            setTimeout(() => {
                const _panel = document.getElementById(tabID) as HTMLElement;
                if ( _panel !== null ) {

                    elDisplay('show', _panel);

                    _panel.classList.add('active');
                    runExClassName(_panel, _classNamePanel, 'add');
                }
            }, speed);  
        }

    }


    useEffect(() => {

        // Initialize tabs
        //--------------
        const reactDomWrapperEl: any = rootRef.current;
        const $li = [].slice.call(reactDomWrapperEl.querySelectorAll('ul > li'));
        $li.forEach((el: any, i: number) => {
            if (el.classList.contains('active')) {
                itemInit($li[i], true);
            }
        });

        onLoad?.(() => itemInit);

    }, []);




    return (
        <>

            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef} style={style}>
                <ul className={navClassName ? navClassName : "nav nav-tabs mb-3"} role="tablist">

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
                                        expandedActiveClassNameForNav={expandedActiveClassNameForNav}
                                        switchEv={handleClickItem}
                                        targetId={`tabs-show-${uniqueID}-${tabListIndex}`}
                                        {...childProps} />;
                                }


                            });
                        }
                    })()}


                </ul>

                <div className={panelClassName ? panelClassName : "tab-content"}>
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
                                        index={tabPanelIndex}
                                        expandedActiveClassNameForPanel={expandedActiveClassNameForPanel}
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
