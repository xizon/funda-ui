import React from 'react';

type GroupFnType = (arg1: any, arg2: any, arg3: number) => void;

type GroupProps = {
    level: number;
    columnTitle: any[];
    data?: any[any];
    selectEv?: React.MouseEventHandler<HTMLElement> | GroupFnType | null;
};

export default function Group(props: GroupProps) {

    const {
        level,
        columnTitle,
        data,
        selectEv
    } = props;

    return (
        <>
            {data.map((item: any, index: number) => {
                if ( item.id.toString().indexOf('$EMPTY_ID_') < 0 ) {
                    return <div key={index} data-index={index} data-value={item.id} data-query={item.queryId} className={item.current ? 'cascading-select-e2e__opt active' : 'cascading-select-e2e__opt'} onClick={(e) => selectEv!(e, item, index)}>{item.name}</div>
                } else {
                    return columnTitle[level] === '' ? null : <h3 key={index} data-index={index} data-value={item.id} data-query={item.queryId} onClick={(e) => selectEv!(e, item, index)} className={item.current ? 'cascading-select-e2e__opt-header active' : 'cascading-select-e2e__opt-header'} >{columnTitle[level]}</h3>
                }
                
            })}
        </>
    )
}


