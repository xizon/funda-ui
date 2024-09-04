import React, { createContext } from 'react';


export type TableProviderProps = {
    value?: any;
    children?: React.ReactNode;
};


const TableContext = createContext<any>(undefined);

const TableProvider = (props: TableProviderProps) => {
    const {
        children,
        value
    } = props;

    return (
        <TableContext.Provider value={value}>
            {children}
        </TableContext.Provider>
    );

};

export { TableContext, TableProvider };