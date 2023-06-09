import React from 'react';


/* Table Colgroup
-------------------------------------------------*/
type TableColgroupProps = {
    data?: any[];
};

const TableColgroup = (props: TableColgroupProps) => {

    return (
        <>
            <colgroup>
                <col></col>
                {props.data ? props.data.map((el: any, i: number) => {
                    return <col key={"colgroup-placeholder" + i}></col>;
                }) : null}
            </colgroup>
        </>
    )
}

export default TableColgroup;

