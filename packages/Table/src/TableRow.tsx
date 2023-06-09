import React from 'react';

import TableField from './TableField';
import TableFieldRow from './TableFieldRow';



/* Table Row
-------------------------------------------------*/
type TableRowProps = {
    data?: any[];
    headerLabel?: any[];
};

const TableRow = (props: TableRowProps) => {

    return (
        <>
            <tr>
                {props.data ? props.data.map((el: any, i: number) => {
                    let label = props.headerLabel![i];
                    if (label === undefined) label = '';

                    if ( i === 0 ) {
                        return <TableFieldRow key={"field" + i} columnHeader={label.replace(/<span[^>]*>[\s\S]+<\/span>/g, '')} cols={el.cols} content={el.content} index={i} />;
                    } else {
                        return <TableField key={"field" + i} columnHeader={label.replace(/<span[^>]*>[\s\S]+<\/span>/g, '')} cols={el.cols} content={el.content} index={i} />;
                    }
                    
                }) : null}
            </tr>

        </>
    )
}

export default TableRow;
