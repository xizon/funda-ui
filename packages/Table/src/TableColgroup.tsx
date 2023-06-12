import React from 'react';


/* Table Colgroup
-------------------------------------------------*/
type TableColgroupProps = {
    data?: any[];
};

const TableColgroup = (props: TableColgroupProps) => {

    const {
        data
    } = props;

    return (
        <>
            <colgroup>
                <col></col>
                {data ? data.map((el: any, i: number) => {
                    return <col key={i}></col>;
                }) : null}
            </colgroup>
        </>
    )
}

export default TableColgroup;

