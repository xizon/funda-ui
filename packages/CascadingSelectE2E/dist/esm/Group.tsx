import React from 'react';

import { combinedCls } from 'funda-utils/dist/cjs/cls';


export type GroupFnType = (arg1: any, arg2: any, arg3: number) => void;

export type GroupProps = {
    perColumnHeadersShow?: boolean;
    level: number;
    columnTitle: any[];
    data?: any[any];
    cleanNodeBtnClassName?: string;
    cleanNodeBtnContent?: React.ReactNode;
    selectEv?: React.MouseEventHandler<HTMLElement> | GroupFnType | null;
};

export default function Group(props: GroupProps) {

    const {
        perColumnHeadersShow,
        level,
        columnTitle,
        data,
        cleanNodeBtnClassName,
        cleanNodeBtnContent,
        selectEv
    } = props;

    return (
        <>
            {data.map((item: any, index: number) => {
                if ( item.id.toString().indexOf('$EMPTY_ID_') < 0 ) {
                    return <div 
                        key={index} 
                        data-opt="true"
                        data-index={index} 
                        data-id={item.id} 
                        data-value={JSON.stringify(item)} 
                        data-level={level}
                        data-query={item.queryId} 
                        className={combinedCls(
                            'cas-select-e2e__opt',
                            {
                                'active': item.current
                            }
                        )} 
                        dangerouslySetInnerHTML={{
                            __html: typeof item.label !== 'undefined' ? item.label : item.name // "item.label" usually uses hierarchical style
                        }}
                        onClick={(e) => selectEv?.(e, item, index)} 
                    ></div>
                } else {
                    return columnTitle[level] === '' || perColumnHeadersShow === false ? null : <h3 
                    key={index} 
                    className="cas-select-e2e__opt-header"
                    >
                        <span dangerouslySetInnerHTML={{
                        __html: columnTitle[level]
                    }}></span>
                        <div className="cas-select-e2e__opt-header__clean">
                            <a 
                                tabIndex={-1} 
                                href="#" 
                                className={cleanNodeBtnClassName || 'btn btn-link p-0 m-0 text-decoration-none'} 
                                data-opt="true"
                                data-opt-header="true"
                                data-index={index} 
                                data-id={item.id} 
                                data-value={JSON.stringify(item)} 
                                data-level={level}
                                data-query={item.queryId} 
                                onClick={(e) => selectEv?.(e, item, index)} 
                            >
                                {cleanNodeBtnContent || <svg width="12px" height="12px" viewBox="0 0 16 16"><path fill="inherit" d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fillRule="evenodd"></path></svg>}
                            </a>
                        </div>
                    </h3>
                }
                
            })}
        </>
    )
}


