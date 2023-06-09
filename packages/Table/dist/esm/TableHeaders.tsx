import React from 'react';

/* Table Headers
-------------------------------------------------*/			
type TableHeadersProps = {
	data: any[];
    headClassName?: string;
};

const TableHeaders = (props: TableHeadersProps) => {

    return props.data ? (
        <>
            <thead className={props.headClassName ? props.headClassName : ''}>
                <tr>
                    {props.data.map((item: any, i: number) => {
                        return <th key={"header" + i} scope="col" data-table={item.replace(/<span[^>]*>[\s\S]+<\/span>/g, '')} data-table-row={i}>{item}</th>;
                    })
                    }
                </tr>
            </thead>
        </>
    ) : null;

}

export default TableHeaders;

