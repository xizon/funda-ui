import React from 'react';

/* Table Summaries
-------------------------------------------------*/		
type TableSummariesProps = {
	data: any[];
    footClassName?: string;
};


const TableSummaries = (props: TableSummariesProps) => {

    const {
        data,
        footClassName
    } = props;


    return data ? (
        <>
           
            <tfoot className={footClassName ? footClassName : ''}>
                <tr>
                    {data!.map((item: any, i: number) => {
                        return <th key={i}>{item}</th>;
                    })
                    }
                </tr>
            </tfoot>
        </>
    ) : null;

}

export default TableSummaries;

