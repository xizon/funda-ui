import React from 'react';

import Checkbox from 'rpb-checkbox';

import { getChildren } from './utils/dom';
import { formatCheckboxControlVal, setCheckboxCheckedData } from './table-utils';

/* Table Headers
-------------------------------------------------*/
type TableHeadersProps = {
    data: any[];
    headClassName?: string;
    checkboxNamePrefix?: string;
    sortable?: boolean;
    getCheckedPrint?: any[];
    updateCheckedPrint?: any;
    getCheckedData?: any[];
    updategetCheckedData?: any;
    getCheckedRootData?: any[];
    updategetCheckedRootData?: any;
    onCheck?: (val: any) => void;
    evSort?: (option: any) => void;
};

const TableHeaders = (props: TableHeadersProps) => {

    const {
        data,
        headClassName,
        checkboxNamePrefix,
        sortable,
        getCheckedPrint,
        updateCheckedPrint,
        getCheckedData,
        updategetCheckedData,
        getCheckedRootData,
        updategetCheckedRootData,
        onCheck,
        evSort
    } = props;
    


    return data ? (
        <>
            <thead className={headClassName ? headClassName : ''}>
                <tr>
                    {data.map((item: any, i: number) => {
                        return <th key={i} scope="col" data-sort-type={item.type} data-table-text={item.content.replace(/(<([^>]+)>)/ig, '')} data-table-col={i} style={item.style ? item.style : (item.width ? ((typeof window !== 'undefined' && window.innerWidth > 768) ? {width: item.width} : {}) : {})} className={item.className || ''}>
                            {i === 0 ? <span className="checkbox-trigger">
                                <Checkbox
                                    wrapperClassName=""
                                    name={`checkbox-${checkboxNamePrefix}-all`}
                                    tabIndex={-1}
                                    value={`row-all`}
                                    checked={getCheckedRootData!.filter((cur: any) => cur.key === 'row-all')[0]?.checked}
                                    onChange={(e: any, val: any) => {

                                        const _checkedData: any = getCheckedData;
                                        let _res: any = getCheckedPrint;


                                        // STEP 1:
                                        // Current checkbox
                                        //-----------
                                        if (val === true) {
                                            updategetCheckedRootData([{
                                                key: `row-all`,
                                                checked: true
                                            }]);
                                        } else {
                                            updategetCheckedRootData([{
                                                key: `row-all`,
                                                checked: false
                                            }]);
                                        }


                                        // STEP 2:
                                        // All child checkboxes
                                        //-----------
                                        const _checkboxes = getChildren(e.target.closest('table').querySelector('tbody'), '[type="checkbox"]');
                                        [].slice.call(_checkboxes).forEach((node: any) => {
                                            if (val === true) {
                                                setCheckboxCheckedData(_checkedData, node.dataset.key, true);
                                                _res.push(formatCheckboxControlVal(node));
                                            } else {
                                                setCheckboxCheckedData(_checkedData, node.dataset.key, false);
                                                _res = [];

                                            }
                                        });


                                        // STEP 3:
                                        // Array deduplication
                                        //-----------
                                        _res = _res.filter((item: any, index: number, self: any[]) => index === self.findIndex((t) => (t.key === item.key)))


                                        // STEP 4:
                                        // Update checked data
                                        //-----------
                                        updategetCheckedData(_checkedData);

                                        // STEP 5:
                                        // Update checked print
                                        //-----------
                                        updateCheckedPrint(_res);


                                        // STEP 6:
                                        // callback
                                        //-----------
                                        onCheck?.(_res);


                                    }}
                                />
                            </span> : null}
                            <span dangerouslySetInnerHTML={{ __html: `${item.content}` }}></span>
                            {sortable ? <span className="sort-trigger" onClick={evSort}><svg width="1em" height="1em" viewBox="0 0 18 18">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <path d="M9.5,3 L13,8 L6,8 L9.5,3 L9.5,3 Z M6,11 L13,11 L9.5,16 L6,11 L6,11 Z" id="path" fill="#000000">
                                    </path>
                                </g>
                            </svg></span> : null}

                        </th>;
                    })
                    }
                </tr>
            </thead>
        </>
    ) : null;

}

export default TableHeaders;

