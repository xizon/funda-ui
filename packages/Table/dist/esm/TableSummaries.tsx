import React from 'react';

/* Table Summaries
-------------------------------------------------*/		
type TableSummariesProps = {
	data: any[];
    footClassName?: string;
};


const TableSummaries = (props: TableSummariesProps) => {

    return props.data ? (
        <>
           
            <tfoot className={props.footClassName ? props.footClassName : ''}>
                <tr>
                    {props.data!.map((item: any, i: number) => {
                        return <th key={"summary" + i}>{item}</th>;
                    })
                    }
                </tr>
            </tfoot>
        </>
    ) : null;

}

export default TableSummaries;

