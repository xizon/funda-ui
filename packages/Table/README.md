# Table (Synthetic)


## General

### a) Basic

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {

    return (
        <>
            <Table
                tableClassName="table table-hover table-bordered table-striped align-middle"   
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Title 1</TableCell>
                        <TableCell scope="col" nowrap>Title 2</TableCell>
                        <TableCell scope="col" nowrap>Title 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow active>
                        <TableCell scope="row">1</TableCell>
                        <TableCell>David</TableCell>
                        <TableCell>Jone</TableCell>
                        <TableCell>Good</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">2</TableCell>
                        <TableCell>Chuckie</TableCell>
                        <TableCell>Jone</TableCell>
                        <TableCell>BAD</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">3</TableCell>
                        <TableCell colSpan={2}>
                            Hi There
                        </TableCell>
                        <TableCell>Cool</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
         
        </>
    );
}
```

### b) Cell Auto Width

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {

    return (
        <>
            
            <Table
                cellAutoWidth
                tableClassName="table table-hover table-bordered table-striped"
            >
                <TableHead className="table-light">
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Title 1</TableCell>
                        <TableCell scope="col" nowrap>Title 2</TableCell>
                        <TableCell scope="col" nowrap>Title 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow active>
                        <TableCell scope="row">1</TableCell>
                        <TableCell>David</TableCell>
                        <TableCell>Jone</TableCell>
                        <TableCell>Good</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">2</TableCell>
                        <TableCell>Chuckie</TableCell>
                        <TableCell>Jone</TableCell>
                        <TableCell>Pictures are worth a thousand words, right? So Tom x 1,000.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">3</TableCell>
                        <TableCell colSpan={2}>
                            Hi There
                        </TableCell>
                        <TableCell>Cool</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </>
    );
}
```



### c) Enhanced Responsive

Valid when the device width is less than or equal to 768px.



```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

const tableData = [
    {name: 'David', friend: 'Jone', condition: 'GOOD'},
    {name: 'Chuckie', friend: 'Jone', condition: 'BAD'},
    {name: 'Smith Jone', friend: 'Lomi', condition: 'Pictures are worth a thousand words, right? So Tom x 1,000.'},
    {name: 'Frank', friend: 'Alice', condition: 'PERFECT'},
];

const responseTitle = (s: any) => {
    return typeof s === 'string' ? s.replace(/(<([^>]+)>)/ig, '') : s;
};

export default () => {

    return (
        <>
            
            <Table
                enhancedResponsive
                tableClassName="table table-bordered"
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Title 1</TableCell>
                        <TableCell scope="col" nowrap>Title 2</TableCell>
                        <TableCell scope="col" nowrap>Title 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                            data-table-text={responseTitle(item.name)}
                        >
                            <TableCell scope="row" data-table-text="#">{index}</TableCell>
                            <TableCell data-table-text="Title 1">{item.name}</TableCell>
                            <TableCell data-table-text="Title 2">{item.friend}</TableCell>
                            <TableCell data-table-text="Title 3">{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>   
        </>
    );
}
```


### d) Enhanced Responsive with Scroll Bars

Valid when the device width is less than or equal to 768px.

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


const tableData = [
    {name: 'David', friend: 'Jone', condition: 'GOOD'},
    {name: 'Chuckie', friend: 'Jone', condition: 'BAD'},
    {name: 'Smith Jone', friend: 'Lomi', condition: 'Pictures are worth a thousand words, right? So Tom x 1,000.'},
    {name: 'Frank', friend: 'Alice', condition: 'PERFECT'},
];

export default () => {

    return (
        <>
            
            <Table
                responsive={false}
                enhancedResponsiveWithScrollBar
                tableClassName="table table-bordered"
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Title 1</TableCell>
                        <TableCell scope="col" nowrap>Title 2</TableCell>
                        <TableCell scope="col" nowrap>Title 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>
              
        </>
    );
}
```



### e) No spacing

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {


    return (
        <>

            <Table
                tableClassName="table-bordered"  // remove class "table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Title 1</TableCell>
                        <TableCell scope="col" nowrap>Title 2</TableCell>
                        <TableCell scope="col" nowrap>Title 3</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow active>
                        <TableCell scope="row">1</TableCell>
                        <TableCell>David</TableCell>
                        <TableCell>Jone</TableCell>
                        <TableCell>Good</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">2</TableCell>
                        <TableCell>Chuckie</TableCell>
                        <TableCell>Jone</TableCell>
                        <TableCell>Pictures are worth a thousand words, right? So Tom x 1,000.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">3</TableCell>
                        <TableCell colSpan={2}>
                            Hi There
                        </TableCell>
                        <TableCell>Cool</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </>
    );
}
```



### f) Prevent text in a table cell from wrapping


Use the following style:
```css
thead th {
    white-space: nowrap;
}
```
Or using `nowrap` in \<TableCell \/\> in \<TableHead \/\> can also prevent text from wrapping automatically.




## Header Group 


```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {
    const data = [
        {
            designation: "Salary 1",
            headOffice: [246, 38.80, 0.16, 245, 35.04, 0.14, 208, 32.22, 0.15],
        },
        {
            designation: "Salary 2",
            headOffice: [286, 41.80, 0.22, 235, 32.04, 0.11, 238, 35.22, 0.17],
        }
    ];
    return (
        <>
            
            <Table tableClassName="table table-bordered table-striped align-middle">
                <TableHead>
                    {/* First row: Large grouping */}
                    <TableRow>
                        <TableCell rowSpan={2} className="bg-dark text-light" nowrap>Designation</TableCell>
                        <TableCell colSpan={3} className="bg-dark text-light" align="center">Apr-20</TableCell>
                        <TableCell colSpan={3} className="bg-dark text-light" align="center">May-20</TableCell>
                        <TableCell colSpan={3} className="bg-dark text-light" align="center">Jun-20</TableCell>
                    </TableRow>
                    {/* Second row: Small groupings */}
                    <TableRow>
                        <TableCell className="bg-secondary text-light" nowrap>Str</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Slry</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Avg./month</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Str</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Slry</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Avg./month</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Str</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Slry</TableCell>
                        <TableCell className="bg-secondary text-light" nowrap>Avg./month</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{row.designation}</TableCell>
                            {row.headOffice.map((val, i) => (
                                <TableCell key={i}>{val}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>
    );
}
```


```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {
    const data = [
        { firstName: "tanner", lastName: "linsley", age: 24, visits: 100, status: "In Relationship", progress: 50 },
        { firstName: "tandy", lastName: "miller", age: 40, visits: 40, status: "Single", progress: 80 },
        { firstName: "joe", lastName: "dirte", age: 45, visits: 20, status: "Complicated", progress: 10 },
    ];
    return (
        <>
            
            <Table tableClassName="table table-bordered table-striped align-middle">
                <TableHead>
                    {/* First row: Large grouping */}
                    <TableRow>
                        <TableCell colSpan={3} align="center" className="bg-dark text-light">Hello</TableCell>
                        <TableCell colSpan={3} align="center" className="bg-dark text-light">Info</TableCell>
                    </TableRow>
                    {/* Second row: Medium grouping */}
                    <TableRow>
                        <TableCell rowSpan={2} align="center" className="bg-secondary text-light align-middle">
                            FirstName
                        </TableCell>
                        <TableCell rowSpan={2} align="center" className="bg-secondary text-light align-middle">
                            Last Name
                        </TableCell>
                        <TableCell rowSpan={2} align="center" className="bg-secondary text-light align-middle">
                            Age
                        </TableCell>
                        <TableCell colSpan={3} align="center" className="bg-info text-dark">More Info</TableCell>
                    </TableRow>
                    {/* Third row: Bottommost level */}
                    <TableRow>
                        <TableCell align="center" className="bg-light text-dark">Visits</TableCell>
                        <TableCell align="center" className="bg-light text-dark">Status</TableCell>
                        <TableCell align="center" className="bg-light text-dark">Profile Progress</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.visits}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.progress}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>
    );
}
```



## Holy Grail Layout (3 columns)

`styles.scss`:
```css
/* ---------- Grid ----------- */
.demo-columns {
    // display: grid;
    // grid-template-columns: 250px auto 250px;
    // grid-gap: .5rem;

    display: flex;
    flex-wrap: nowrap;
    gap: .5rem;

    .main {
        flex-grow: 1; /*  Adaptive width */
        overflow: auto; /* Required, enable the scrollbar for content's scrollbar */
        order: 2;
        background: #8fe1ff;
    }

    .sidebar-first {
        width: 250px;
        background: #eee;
        order: 1;
        flex-shrink: 0; /* Prevent the left and right columns from being compressed */
    }

    .sidebar-second {
        width: 250px;
        order: 3;
        background: #eee;
        flex-shrink: 0; /* Prevent the left and right columns from being compressed */
    }
  
}

  
  
/* ---------- Table Scrollable ----------- */
@mixin app-table-scrollbar($size: 10px) {
    --syntable-scrollable-container-scrollbar-color: rgba(0, 0, 0, 0.2);
    --syntable-scrollable-container-scrollbar-track: rgba(0, 0, 0, 0);
    --syntable-scrollable-container-scrollbar-w: 10px;
    --syntable-scrollable-container-scrollbar-h: 10px;
    
    &::-webkit-scrollbar {
        width: var(--syntable-scrollable-container-scrollbar-w);
        height: var(--syntable-scrollable-container-scrollbar-h);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--syntable-scrollable-container-scrollbar-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--syntable-scrollable-container-scrollbar-track);
    }
}

.app-table-scrollable-container {
    
    .syntable__wrapper {
        @include app-table-scrollbar();

        position: relative;
        overflow: auto;
        width: 100%;
        height: 200px;

        thead tr > th {
            position: sticky;
            z-index: 2;
            /* Stick the top and the left side */
            top: 0;
            left: 0;

            &:first-child {
                z-index: 3;
            }
        }

        tbody > tr > th {
            position: sticky;
            /* Stick the left side */
            left: 0;
            z-index: 1;
        }

    }
}
```


`index.tsx`:
```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

function generateRandomData(rows: number, columns: number) {
    const tableData = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(Math.floor(Math.random() * 100)); // Generates a random number between 0 and 99
        }
        tableData.push(row);
    }

    return tableData;
}
const tableData = generateRandomData(20, 50);

export default () => {

    return (
        <>
            
            <div className="demo-columns">
                <div className="main">
                    <div className="app-table-scrollable-container">
                        <Table
                            responsive={false} // to use a custom horizontal scrollbar
                            cellAutoWidth // optional
                            tableClassName="table table-bordered table-striped mb-0 "
                            wrapperClassName=""
                        >

                            <TableHead>
                                <TableRow>
                                    {Array.from({ length: tableData[0].length }).fill(0).map((x: any, j: number) => {
                                        return <TableCell
                                            key={`head-col-${j}`}
                                            scope="col" nowrap
                                            className="bg-dark text-light"
                                        >
                                            {j === 0 ? <>#</> : <>Title{j}</>}
                                        </TableCell>
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((item: any, index: number) => {
                                    return <TableRow
                                        key={`row-${index}`}
                                        data-key={`row-${index}`}
                                        itemData={item}
                                    >
                                        {Array.from({ length: tableData[0].length }).fill(0).map((x: any, j: number) => {
                                            return <TableCell
                                                key={`col-${j}`}
                                                scope={j === 0 ? 'row' : null}
                                                className={j === 0 ? 'bg-dark text-light' : null}
                                            >
                                                {j === 0 ? 'No.' + index : tableData[index][j]}
                                            </TableCell>
                                        })}
                                    </TableRow>

                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="sidebar-first">Sidebar first: Fixed width</div>
                <div className="sidebar-second">Sidebar second: Fixed width</div>
            </div>

        </>
    );
}
```



## Sticky Table Headers (with custom scrollbar)

`styles.scss`:
```css

/* ---------- Table Scrollable ----------- */
@mixin app-table-scrollbar($size: 10px) {
    --syntable-scrollable-container-scrollbar-color: rgba(0, 0, 0, 0.2);
    --syntable-scrollable-container-scrollbar-track: rgba(0, 0, 0, 0);
    --syntable-scrollable-container-scrollbar-w: 10px;
    --syntable-scrollable-container-scrollbar-h: 10px;
    
    &::-webkit-scrollbar {
        width: var(--syntable-scrollable-container-scrollbar-w);
        height: var(--syntable-scrollable-container-scrollbar-h);
    }

    &::-webkit-scrollbar-thumb {
        background: var(--syntable-scrollable-container-scrollbar-color);
    }

    &::-webkit-scrollbar-track {
        background: var(--syntable-scrollable-container-scrollbar-track);
    }
}

.app-table-scrollable-container {
    
    .syntable__wrapper {
        @include app-table-scrollbar();

        position: relative;
        overflow: auto;
        width: 100%;
        height: 200px;


        thead tr > th {
            position: sticky;
            z-index: 2;
            /* Stick the top and the left side */
            top: 0;
            left: 0;

            &:first-child {
                z-index: 3;
            }
        }

        tbody > tr > th {
            position: sticky;
            /* Stick the left side */
            left: 0;
            z-index: 1;
        }

    }
}
```


`index.tsx`:
```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

function generateRandomData(rows: number, columns: number) {
    const tableData = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(Math.floor(Math.random() * 100)); // Generates a random number between 0 and 99
        }
        tableData.push(row);
    }

    return tableData;
}
const tableData = generateRandomData(20, 50);

export default () => {

    return (
        <>
            <div className="app-table-scrollable-container">
                <Table
                    responsive={false} // to use a custom horizontal scrollbar
                    cellAutoWidth // optional
                    tableClassName="table table-bordered table-striped mb-0 "
                    wrapperClassName=""
                >
                    
                    <TableHead>
                        <TableRow>
                            {Array.from({ length: tableData[0].length }).fill(0).map((x: any, j: number) => {
                                return <TableCell
                                    key={`head-col-${j}`}
                                    scope="col" nowrap
                                    className="bg-dark text-light"
                                >
                                   {j === 0 ? <>#</> : <>Title{j}</>}
                                </TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((item: any, index: number) => {
                            return <TableRow
                                key={`row-${index}`}
                                data-key={`row-${index}`}
                                itemData={item}
                            >
                                {Array.from({length: tableData[0].length}).fill(0).map((x: any, j: number) => {
                                    return <TableCell
                                            key={`col-${j}`}
                                            scope={j === 0 ? 'row' : null}
                                            className={j === 0 ? 'bg-dark text-light' : null}
                                        >
                                        {j=== 0 ? 'No.' + index : tableData[index][j]}
                                    </TableCell>
                                })}
                            </TableRow>

                        })}
                    </TableBody>
                </Table>
            </div> 

        </>
    );
}
```


## Table Column Group

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableColgroup,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

const tableData = [
    {name: 'David', friend: 'Jone', condition: 'GOOD'},
    {name: 'Chuckie', friend: 'Jone', condition: 'BAD'},
    {name: 'Smith Jone', friend: 'Lomi', condition: 'GOOD'},
    {name: 'Frank', friend: 'Alice', condition: 'PERFECT'},
];

export default () => {

    return (
        <>
        
            <Table
                colGroup
                tableClassName="table"
            >
                <TableColgroup length={4} />
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>Friend</TableCell>
                        <TableCell scope="col" nowrap>Condition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>


        </>
    );
}
```






## Filter Table

> To interact with data is required using the `data` property of `<Table />` and `itemData` property of `<TableRow />`.

It is valid when `filterFields` exists. You can set more properties, such as: `onChangeFilter`.


```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableCaption,

    // filter
    TableFilter,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

const tableData = [
    {name: 'David', friend: 'Jone', condition: 'GOOD'},
    {name: 'Chuckie', friend: 'Jone', condition: 'BAD'},
    {name: 'Smith Jone', friend: 'Lomi', condition: 'GOOD'},
    {name: 'Frank', friend: 'Alice', condition: 'PERFECT'},
];

export default () => {

    return (
        <>
           

            <Table
                tableClassName="table"
                data={tableData}
                filterFields={['name', 'friend']}
                onChangeFilter={(fetchData: any[]) => {
                    console.log(fetchData);
                }}
            >
                <TableCaption>
                    <TableFilter
                        placeholder="Enter keywords..."
                    />
                </TableCaption>

                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>Friend</TableCell>
                        <TableCell scope="col" nowrap>Condition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>



        </>
    );
}
```




## Row selection (multiple rows)

> To interact with data is required using the `data` property of `<Table />` and `itemData` property of `<TableRow />`.

It is valid when `rowSelectable` is "true". You can set more properties, such as: `onChangeRowSelect`, `dataSelected`.

### a) Normal

```js
import React, { useRef, useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    // utils
    ToggleSelection,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {

    const [tableData, setTableData] = useState<any[]>([]);
    const tableSelectAllRef = useRef<any>(null);

    useEffect(() => {
        
        // test async
        setTableData([
            { name: 'David', friend: 'Jone', condition: 'GOOD' },
            { name: 'Chuckie', friend: 'Jone', condition: 'BAD' },
            { name: 'Smith Jone', friend: 'Lomi', condition: 'GOOD' },
            { name: 'Frank', friend: 'Alice', condition: 'PERFECT' },
        ]);

    }, []);


    

    return (
        <>
        
            <Table
                rowSelectable
                tableClassName="table"
                data={tableData}
                // dataSelected={[1,3]}
                onChangeRowSelect={(fetchData: any[]) => {
                    console.log(fetchData);
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap style={{width: '25px'}}>
                            {/** Checkbox */}
                            <div className="checkbox-indeterminate">
                                <ToggleSelection row={-1} contentRef={tableSelectAllRef} />
                            </div>
                        </TableCell>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>Friend</TableCell>
                        <TableCell scope="col" nowrap>Condition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow 
                            key={`row-${index}`} 
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">
                                {/** Checkbox */}
                                <div className="checkbox-indeterminate">
                                    <ToggleSelection 
                                        row={index} 
                                        onChange={(e: React.MouseEvent, val: boolean, fetchData: any[]) => {
                                            //  Initialize indeterminate status of all checkboxes 
                                            if (tableSelectAllRef.current) {
                                                if (fetchData.length > 0 || fetchData.length < tableData.length) tableSelectAllRef.current.indeterminate(true);
                                                if (fetchData.length === 0 || fetchData.length === tableData.length) tableSelectAllRef.current.indeterminate(false);
                                                if (fetchData.length === 0) tableSelectAllRef.current.setSelectAll(false);
                                                if (fetchData.length === tableData.length) tableSelectAllRef.current.setSelectAll(true);
                                            }
                                        }}
                                    />
                                </div>
                            </TableCell>
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>   


        </>
    );
}
```

### b) Use radio instead of Checkbox


```js
import React, { useRef, useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    // utils
    ToggleSelection,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {

    const [tableData, setTableData] = useState<any[]>([]);
    const tableSelectAllRef = useRef<any>(null);

    useEffect(() => {
        
        // test async
        setTableData([
            { name: 'David', friend: 'Jone', condition: 'GOOD' },
            { name: 'Chuckie', friend: 'Jone', condition: 'BAD' },
            { name: 'Smith Jone', friend: 'Lomi', condition: 'GOOD' },
            { name: 'Frank', friend: 'Alice', condition: 'PERFECT' },
        ]);

    }, []);


    

    return (
        <>
        
            <Table
                rowSelectable
                tableClassName="table"
                data={tableData}
                dataSelected={[2]}
                onChangeRowSelect={(fetchData: any[]) => {
                    console.log(fetchData);
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap style={{width: '25px'}}></TableCell>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>Friend</TableCell>
                        <TableCell scope="col" nowrap>Condition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow 
                            key={`row-${index}`} 
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">
                                {/** Checkbox */}
                                <div className="checkbox-indeterminate">
                                    <ToggleSelection 
                                        useRadio
                                        row={index} 
                                    />
                                </div>
                            </TableCell>
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>   


        </>
    );
}
```



### c) Set the checkbox of the specified rows

Set the value of the checkbox externally separately.

```js
import React, { useRef, useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    // utils
    ToggleSelection,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {

    const [tableData, setTableData] = useState<any[]>([]);
    const tableSelectAllRef = useRef<any>(null);
    const tablePrRowSelectAllRef = useRef<any[]>([]);

    useEffect(() => {
        
        // test async
        setTableData([
            { name: 'David', friend: 'Jone', condition: 'GOOD' },
            { name: 'Chuckie', friend: 'Jone', condition: 'BAD' },
            { name: 'Smith Jone', friend: 'Lomi', condition: 'GOOD' },
            { name: 'Frank', friend: 'Alice', condition: 'PERFECT' },
        ]);

    }, []);


    

    return (
        <>

          <a 
                href="#"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                        
                    if (tablePrRowSelectAllRef.current) {
                        tablePrRowSelectAllRef.current.forEach((node: any, index: number) => {
                            if (node.control()?.dataset.row == '1' || node.control()?.dataset.row == '3') {
                                node.set(true);
                            }
                        });
                    }
                    if (tableSelectAllRef.current) {
                        tableSelectAllRef.current.indeterminate(false);
                        tableSelectAllRef.current.setSelectAll(false);
                    }
                }}
            >Setting rows 1 and 3</a>


        
            <Table
                rowSelectable
                tableClassName="table"
                data={tableData}
                // dataSelected={[1,3]}
                onChangeRowSelect={(fetchData: any[]) => {
                    console.log(fetchData);
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col"  style={{width: '25px'}}>
                            {/** Checkbox */}
                            <div className="checkbox-indeterminate">
                                <ToggleSelection row={-1} contentRef={tableSelectAllRef} />
                            </div>
                        </TableCell>
                        <TableCell scope="col" >#</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>Friend</TableCell>
                        <TableCell scope="col" nowrap>Condition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow 
                            key={`row-${index}`} 
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">
                                {/** Checkbox */}
                                <div className="checkbox-indeterminate">
                                    <ToggleSelection 
                                        row={index} 
                                        contentRef={(node: any) => {
                                            if (node) {
                                                tablePrRowSelectAllRef.current.push(node);
                                            }
                                        
                                        }}
                                        onChange={(e: React.MouseEvent, val: boolean, fetchData: any[]) => {
                                            //  Initialize indeterminate status of all checkboxes 
                                            if (tableSelectAllRef.current) {
                                                if (fetchData.length > 0 || fetchData.length < tableData.length) tableSelectAllRef.current.indeterminate(true);
                                                if (fetchData.length === 0 || fetchData.length === tableData.length) tableSelectAllRef.current.indeterminate(false);
                                                if (fetchData.length === 0) tableSelectAllRef.current.setSelectAll(false);
                                                if (fetchData.length === tableData.length) tableSelectAllRef.current.setSelectAll(true);
                                            }
                                        }}
                                    />
                                </div>
                            </TableCell>
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>   
       

        </>
    );
}
```


## Drag and Drop Sort Rows

> To interact with data is required using the `data` property of `<Table />` and `itemData` property of `<TableRow />`.

It is valid when `rowDraggable` exists. You can set more properties, such as: `onRowDrag`.


```js
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    // drag and drop
    DragHandleSprite,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

const tableData = [
    {name: 'David', friend: 'Jone', condition: 'GOOD'},
    {name: 'Chuckie', friend: 'Jone', condition: 'BAD'},
    {name: 'Smith Jone', friend: 'Lomi', condition: 'GOOD'},
    {name: 'Frank', friend: 'Alice', condition: 'PERFECT'},
];

export default () => {

    const [sortedData, setSortedData] = useState<any[]>([]);

    return (
        <>
           
        <Table
                tableClassName="table table-bordered"
                data={tableData}
                rowDraggable
                onRowDrag={(dragStart, dragEnd) => {
                    if ( dragStart !== null ) dragStart((el: HTMLTableRowElement, order: number[], data: any[])=> {
                        console.log('dragStart: ', el, order, data);
                    });

                    if ( dragEnd !== null ) dragEnd((el: HTMLTableRowElement, order: number[], data: any[])=> {
                        console.log('dragEnd: ', el, order, data);
                        setSortedData(data);  // DO NOT UPDATE `tableData`
                    });
                }}
            
            >
         
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>Friend</TableCell>
                        <TableCell scope="col" nowrap>Condition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row"><DragHandleSprite /> {index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>

            <small>{JSON.stringify(sortedData)}</small>
        </>
    );
}
```





## Sortable Table

> To interact with data is required using the `data` property of `<Table />` and `itemData` property of `<TableRow />`.

It is valid when `colSortable` exists. You can set more properties, such as: `onColSort`.

`sortBy` allows you to sort with multiple column combinations. such as:
```js
sortBy: (handleProcess: Function, filterType: string, inverse: boolean) => (a: Element, b: Element) => {

    // Custom comparison logic
    let v1 = a.textContent, v2 = b.textContent;
    if (filterType === 'number') {
        v1 = parseFloat(v1);
        v2 = parseFloat(v2);
    }

    let result = 0;
    if (filterType === 'text') {
        result = v1.localeCompare(v2);
    } else {
        result = v1 - v2;
    }

    // Apply display animation and status updates
    handleProcess();

    return inverse ? -result : result;
}
```

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    // sort
    SortSprite,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';

const tableData = [
    {money: "$55.134", name: "David Lin", no: "3453434", date1: "2012-09-25T12:10:46+00:00", date2: "May 22, 2003"},
    {money: "$-24.0", name: "Foristin", no: "+6.6", date1: "2011-02-26T12:10:46+00:00", date2: "July 22, 2016"},
    {money: "$255.12", name: "Co Cheey", no: "-2324.343", date1: "2013-09-10T12:10:46+00:00", date2: "September 13, 2013"},
    {money: "$21.134", name: "Foristin", no: "-34789.34", date1: "2018-09-24T12:10:46+00:00", date2: "January 2, 2019"},
    {money: "$3454.134", name: "Alice", no: "+224.5", date1: "2011-09-21T12:10:46+00:00", date2: "December 1, 2018"},
    {money: "$224.0", name: "Wooli", no: "+33.6", date1: "2011-02-26T12:10:46+00:00", date2: "July 22, 2017"},
    {money: "$11.134", name: "Foristin", no: "-1789.34", date1: "2018-09-24T12:10:46+00:00", date2: "January 2, 2024"},
    {money: "$356.2", name: "Spiter Low", no: "278.23487", date1: "2019-01-01T12:10:46+00:00", date2: "July 28, 2017"},
    {money: "$154.134", name: "Foristin", no: "+524.5", date1: "2011-09-21T12:10:46+00:00", date2: "December 1, 2011"},
    {money: "$256.2", name: "Foristin", no: "178.23487", date1: "2019-01-01T12:10:46+00:00", date2: "July 28, 2014"},
];

export default () => {

    return (
        <>
           
                <Table
                    tableClassName="table table-bordered"
                    data={tableData}
                    colSortable
                    onColSort={(fetchData: any[]) => {
                        console.log(fetchData);
                    }}

                >

                    <TableHead>
                        <TableRow>
                            <TableCell scope="col" nowrap>#</TableCell>
                            <TableCell scope="col" nowrap>Money <SortSprite fieldType="number" /></TableCell>
                            <TableCell scope="col" nowrap>Name 
                                <SortSprite 
                                    fieldType="text" 
                                    isReverse 
                                    sortBy={(handleProcess: Function, filterType: string, inverse: boolean) => {
                                        // Sort by "Name" in regular order first, and then by "No." in the Name group
                                        return (a: Element, b: Element) => {
                                            const trA: any = a.closest('tr');
                                            const trB: any = b.closest('tr');

                                            const getText = (tr: Element, col: number) => {
                                                return tr.querySelector(`[data-table-col="${col}"]`)?.textContent?.trim().toLowerCase() || "";
                                            };

                                            const nameA = getText(trA, 2);
                                            const nameB = getText(trB, 2);
                                            const noA = parseFloat(getText(trA, 3).replace(/[^0-9.+-]/g, ""));
                                            const noB = parseFloat(getText(trB, 3).replace(/[^0-9.+-]/g, ""));

                                            const nameCompare = nameA.localeCompare(nameB, "zh-CN", { sensitivity: "base" });
                                            if (nameCompare !== 0) return nameCompare;

                                            // Apply display animation and status updates
                                            handleProcess();

                                            return inverse ? noB - noA : noA - noB;
                                        }
                                    }}
                                />
                            </TableCell>
                            <TableCell scope="col" nowrap>No. <SortSprite fieldType="number" /></TableCell>
                            <TableCell scope="col" nowrap>Date1 <SortSprite fieldType="date" /></TableCell>
                            <TableCell scope="col" nowrap>Date2 <SortSprite fieldType="date" /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((item: any, index: number) => {
                            return <TableRow
                                key={`row-${index}`}
                                data-key={`row-${index}`}
                                itemData={item}
                            >
                                <TableCell scope="row">{index}</TableCell>
                                <TableCell>{item.money}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.no}</TableCell>
                                <TableCell>{item.date1}</TableCell>
                                <TableCell>{item.date2}</TableCell>
                            </TableRow>

                        })}
                    </TableBody>
                </Table>


        </>
    );
}
```


## FAQ

State changes in the page, causing other `<Table />` components to re-render and value to reset.

### Solution:

> The `data` property of the controlled component must be **stable references** so that the initial values ​​are not reset due to re-rendering caused by changes in the state (using `useState()`) of the page.


### Example:


**👍 Good**

Use `useMemo()` to return the entire component


```js
import React, { useRef, useState, useEffect, useMemo } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    // utils
    ToggleSelection,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';



// DO NOT move `useMemo` to component
function MemoTable(props: any) {
    const {data} = props;
    const tableSelectAllRef = useRef<any>(null);

    return useMemo(() => {
        return <Table
                rowSelectable
                tableClassName="table"
                data={data}
                // dataSelected={[1,3]}
                onChangeRowSelect={(fetchData: any[]) => {
                    console.log(fetchData);
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap style={{width: '25px'}}>
                            {/** Checkbox */}
                            <div className="checkbox-indeterminate">
                                <ToggleSelection row={-1} contentRef={tableSelectAllRef} />
                            </div>
                        </TableCell>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>Friend</TableCell>
                        <TableCell scope="col" nowrap>Condition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: any, index: number) => {
                        return <TableRow 
                            key={`row-${index}`} 
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">
                                {/** Checkbox */}
                                <div className="checkbox-indeterminate">
                                    <ToggleSelection 
                                        row={index} 
                                        onChange={(e: React.MouseEvent, val: boolean, fetchData: any[]) => {
                                            //  Initialize indeterminate status of all checkboxes 
                                            if (tableSelectAllRef.current) {
                                                if (fetchData.length > 0 || fetchData.length < data.length) tableSelectAllRef.current.indeterminate(true);
                                                if (fetchData.length === 0 || fetchData.length === data.length) tableSelectAllRef.current.indeterminate(false);
                                                if (fetchData.length === 0) tableSelectAllRef.current.setSelectAll(false);
                                                if (fetchData.length === data.length) tableSelectAllRef.current.setSelectAll(true);
                                            }
                                        }}
                                    />
                                </div>
                            </TableCell>
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.friend}</TableCell>
                            <TableCell>{item.condition}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>;

    }, [data]);
}



export default () => {

    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        
        // test async
        setTableData([
            { name: 'David', friend: 'Jone', condition: 'GOOD' },
            { name: 'Chuckie', friend: 'Jone', condition: 'BAD' },
            { name: 'Smith Jone', friend: 'Lomi', condition: 'GOOD' },
            { name: 'Frank', friend: 'Alice', condition: 'PERFECT' },
        ]);

    }, []);


    return (
        <>
        
            <MemoTable 
                data={tableData} 
            />

        </>
    );
}
```




## Table Cell Editable


```js
import { useEffect, useState, useRef } from "react";

// bootstrap components
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    // utils
    ToggleSelection,
} from 'funda-ui/Table';
import Date from 'funda-ui/Date';

// component styles
import 'funda-ui/Table/index.css';
import 'funda-ui/Date/index.css';



const EditableCellInput = (props: any) => {

    const {
        rowIndex,
        colIndex,
        defaultValue,
        onChange
    } = props;


    const inputWrapperRef = useRef<HTMLDivElement>(null);
    const [controlShow, setControlShow] = useState<boolean>(false);
    const [changeContent, setChangeContent] = useState<boolean>(false);
    const [curVal, setCurVal] = useState<string>(defaultValue);

    function handleClick(e: React.MouseEvent) {
        e.preventDefault();
        setControlShow(true);
        setChangeContent(true);

        setTimeout(() => {
            if (inputWrapperRef.current) (inputWrapperRef.current.querySelector('.form-control') as any).focus();
        }, 0);
    }

    return (
        <>
            <div onClick={handleClick} style={{cursor: 'pointer', minWidth: '20px', minHeight: '20px'}}>{changeContent ? <><i className="fa-solid fa-circle-notch fa-spin"></i></> : curVal === '' ? '-' : curVal}</div>


            {controlShow ? <>
                <div ref={inputWrapperRef} className={`position-absolute z-1 top-0 start-0`} style={{ width: '150px' }}>
                    <input
                        value={curVal === '-' ? '' : curVal}
                        placeholder="Enter"
                        className="form-control"
                        data-row={`${rowIndex}`}
                        data-col={colIndex}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const newValue = e.target.value;
                            setCurVal(newValue);
                            onChange?.(e.target.dataset.row, e.target.dataset.col, newValue);
                            
                        }}
                        onBlur={() => {
                            setControlShow(false);
                            setChangeContent(false);
                        }}
                    />


                    <a className="position-absolute z-1 top-0 end-0 mt-1 me-1 d-none" href="#" tabIndex={-1} onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        setControlShow(false);
                        setChangeContent(false);
                    }}>
                        <svg width="20px" height="20px" viewBox="0 0 1024 1024" fill="#f00"><path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" fill="" /><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill="" /><path d="M328 340.8l32-31.2 348 348-32 32z" fill="" /></svg>

                    </a>


                </div>

            </>: null}
        </>
    );

}


const EditableCellTime = (props: any) => {

    const {
        itemData,
        rowIndex,
        colIndex,
        defaultValue,
        onChange,
        onConfirm
    } = props;

    const popupRef = useRef<any>();
    const inputRef = useRef<any>();
    

    const inputWrapperRef = useRef<HTMLDivElement>(null);
    const [defaultVurVal, setDefaultVurVal] = useState<string>(defaultValue);

    const curVal = useRef<string>(defaultValue);

    return (
        <>

     
            <div 
                ref={inputWrapperRef} 
                className={`position-absolute z-1 top-0 start-0`} 
                style={{ width: '200px' }}
                
            >
                <Date
                    delimiter="-"
                    showToolsWhenHover
                    wrapperClassName="position-relative app-data-editable"
                    popupRef={popupRef}
                    contentRef={inputRef}
                    value={defaultVurVal === '-' ? '' : defaultVurVal}
                    placeholder="Edit"
                    data-uid={`${rowIndex}`}
                    data-col={colIndex}
                    data-use={JSON.stringify(itemData)}
                    type="datetime-local"
                    localization="zh_CN"
                    style={{border: 'none', background: 'transparent', textAlign: 'center', fontSize: '0.75rem'}}
                    onChangeSeconds={(dateRes: any) => {
                        // close popup
                        if (popupRef.current) popupRef.current.close();
                    }}
                    onChange={(input: HTMLInputElement, dateRes: any, isValidDate: boolean) => {
                        const _res = dateRes !== null && typeof dateRes !== 'string' ? dateRes.res : dateRes;
                        curVal.current = _res;
                        onChange?.(input.dataset.row, input.dataset.col, _res);
                    }}
                    onBlur={(el: any) => {
                        if (typeof el.dataset.use !== 'undefined' && el.dataset.use !== '') {
                            const _itemData = JSON.parse(el.dataset.use);
                            onConfirm?.(_itemData, curVal.current);
                        }
                    }}
                />


            </div>

            
        </>
    );

}



const Main = (props: any) => {

    const {
        otherdeps
    } = props;

    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        
        // test async
        setTableData([
            {money: "$55.134", name: "David Lin", no: "3453434", date1: "2012-09-25T12:10:46+00:00", date2: "May 22, 2003"},
            {money: "$255.12", name: "Co Cheey", no: "-2324.343", date1: "2013-09-10T12:10:46+00:00", date2: "September 13, 2013"},
            {money: "$21.134", name: "Foristin", no: "-34789.34", date1: "2018-09-24T12:10:46+00:00", date2: "January 2, 2019"},
            {money: "$3454.134", name: "Alice", no: "+224.5", date1: "2011-09-21T12:10:46+00:00", date2: "December 1, 2018"},
            {money: "$224.0", name: "Wooli", no: "+33.6", date1: "2011-02-26T12:10:46+00:00", date2: "July 22, 2017"},
            {money: "$356.2", name: "Spiter Low", no: "278.23487", date1: "2019-01-01T12:10:46+00:00", date2: "July 28, 2017"},
        ]);

    }, [otherdeps]); // The Main component will be re-rendered due to `otherdeps`


    return (
        <>

            <Table
                tableClassName="table table-bordered"
                data={tableData}

            >

                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Money</TableCell>
                        <TableCell scope="col" nowrap style={{ width: '200px' }}>Name</TableCell>
                        <TableCell scope="col" nowrap>No.</TableCell>
                        <TableCell scope="col" nowrap style={{ width: '200px' }}>Date1</TableCell>
                        <TableCell scope="col" nowrap>Date2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.money}</TableCell>
                            <TableCell>
                                <EditableCellInput
                                    rowIndex={index}
                                    colIndex={2}
                                    defaultValue={item.name}
                                    onChange={(uid: string, col: number, value: string) => {
                                        console.log(uid, col, value);
                                    }}
                                />
                            </TableCell>
                            <TableCell>{item.no}</TableCell>
                            <TableCell>
                                <EditableCellTime
                                        rowIndex={index}
                                        colIndex={4}
                                        itemData={item}
                                        defaultValue={item.date1.replace('T', ' ')}
                                        onConfirm={(data: any, newtime: string) => {
                                            console.log(data, newtime);
                                        }}
                                    />
                            </TableCell>
                            <TableCell>{item.date2}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>

        </>
    );


}

export default Main;
```





## Navigate a cell `<TableCell />` through arrow keys

Use the arrow keys of your keyboard to locate the cells.

> To interact with data is required using the `data` property of `<Table />` and `itemData` property of `<TableRow />`.

It is valid when `keyboardFocusable` is "true". You can set more properties, such as: `onCellKeyPressed` and `onCellPressEnter`.



```js
import React, { useRef, useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {

    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        
        // test async
        setTableData([
            {money: "$55.134", name: "David Lin", no: "3453434", date1: "2012-09-25T12:10:46+00:00", date2: "May 22, 2003"},
            {money: "$255.12", name: "Co Cheey", no: "-2324.343", date1: "2013-09-10T12:10:46+00:00", date2: "September 13, 2013"},
            {money: "$21.134", name: "Foristin", no: "-34789.34", date1: "2018-09-24T12:10:46+00:00", date2: "January 2, 2019"},
            {money: "$3454.134", name: "Alice", no: "+224.5", date1: "2011-09-21T12:10:46+00:00", date2: "December 1, 2018"},
            {money: "$224.0", name: "Wooli", no: "+33.6", date1: "2011-02-26T12:10:46+00:00", date2: "July 22, 2017"},
            {money: "$356.2", name: "Spiter Low", no: "278.23487", date1: "2019-01-01T12:10:46+00:00", date2: "July 28, 2017"},
        ]);

    }, []);


    

    return (
        <>
            <Table
                tableClassName="table table-bordered"
                data={tableData}
                keyboardFocusable
                onCellKeyPressed={(
                    classname: string, 
                    elem: HTMLTableCellElement, 
                    event: React.KeyboardEvent<Element>,
                    isLeftEdge: boolean,
                    isRightEdge: boolean,
                    isTopEdge: boolean,
                    isBottomEdge: boolean 
                ) => {
                    console.log(classname, elem, event);


                    // You can have a scrollable div locate visible elements in real time as you move in the direction of the keyboard
                    /*
                    const key = event.code;
                    const updateScrollPos = () => {
                        if (scrollDivRef.current === null) return;
                        // Scroll to ".cell-focus"
                        setTimeout(() => {
                            const cell = scrollDivRef.current.querySelector('.cell-focus');
                            if (cell) {
                                (cell as HTMLElement).scrollIntoView({ block: 'nearest', behavior: 'auto' });
                            }
                        }, 0);
                    };
                    switch (key) {
                        case 'ArrowUp':
                        case 'Numpad8':
                            updateScrollPos();
                            break;
                        case 'ArrowDown':
                        case 'Numpad2':
                            updateScrollPos();
                            break;
                    }
                    */



                    //
                    if (isLeftEdge) {
                        console.log('isLeftEdge: ', isLeftEdge);
                    }
                    if (isRightEdge) {
                        console.log('isRightEdge: ', isRightEdge);
                    }
                    if (isTopEdge) {
                        console.log('isTopEdge: ', isTopEdge);
                    }
                    if (isBottomEdge) {
                        console.log('isBottomEdge: ', isBottomEdge);
                    }
                }}
                onCellPressEnter={(classname: string, elem: HTMLTableCellElement, event: React.KeyboardEvent<Element>) => {
                    console.log(classname, elem, event);
                }}

            >

                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Money</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>No.</TableCell>
                        <TableCell scope="col" nowrap>Date1</TableCell>
                        <TableCell scope="col" nowrap>Date2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.money}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.no}</TableCell>
                            <TableCell>{item.date1}</TableCell>
                            <TableCell>{item.date2}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>


        </>
    );
}
```



## Determine whether the table has been rendered

```js
import React, { useRef, useState, useEffect, Suspense } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


const MyTable = () => {
    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {

        // test async
        setTableData([
            {money: "$55.134", name: "David Lin", no: "3453434", date1: "2012-09-25T12:10:46+00:00", date2: "May 22, 2003"},
            {money: "$255.12", name: "Co Cheey", no: "-2324.343", date1: "2013-09-10T12:10:46+00:00", date2: "September 13, 2013"},
            {money: "$21.134", name: "Foristin", no: "-34789.34", date1: "2018-09-24T12:10:46+00:00", date2: "January 2, 2019"},
            {money: "$3454.134", name: "Alice", no: "+224.5", date1: "2011-09-21T12:10:46+00:00", date2: "December 1, 2018"},
            {money: "$224.0", name: "Wooli", no: "+33.6", date1: "2011-02-26T12:10:46+00:00", date2: "July 22, 2017"},
            {money: "$356.2", name: "Spiter Low", no: "278.23487", date1: "2019-01-01T12:10:46+00:00", date2: "July 28, 2017"},
        ]);

    }, []);


    return (
        <>

            <Table
                tableClassName="table table-bordered"
                data={tableData}

            >

                <TableHead>
                    <TableRow>
                        <TableCell scope="col" nowrap>#</TableCell>
                        <TableCell scope="col" nowrap>Money</TableCell>
                        <TableCell scope="col" nowrap>Name</TableCell>
                        <TableCell scope="col" nowrap>No.</TableCell>
                        <TableCell scope="col" nowrap>Date1</TableCell>
                        <TableCell scope="col" nowrap>Date2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((item: any, index: number) => {
                        return <TableRow
                            key={`row-${index}`}
                            data-key={`row-${index}`}
                            itemData={item}
                        >
                            <TableCell scope="row">{index}</TableCell>
                            <TableCell>{item.money}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.no}</TableCell>
                            <TableCell>{item.date1}</TableCell>
                            <TableCell>{item.date2}</TableCell>
                        </TableRow>

                    })}
                </TableBody>
            </Table>


        </>
    );


}


export default () => {

    return (
        <>
            <Suspense fallback={<>Loading...</>}>
                <MyTable />
            </Suspense>

        </>
    );
}
```



## API

> ❤️ You could specify all remaining properties defined and all synthetic events from React on all components listed below. such as `tabIndex`, `style`, `id`, `data-xxx`, `onClick`, `onMouseEnter`, `onMouseLeave`, and so on.

* [`<Table />`](#table)
* [`<TableBody />`](#table-body)
* [`<TableHead />`](#table-head)
* [`<TableFoot />`](#table-foot)
* [`<TableRow />`](#table-row)
* [`<TableColgroup />`](#table-colgroup)
* [`<TableCaption />`](#table-caption)
* [`<TableFilter />`](#filter-input)
* [`<ToggleSelection />`](#toggle-selection)
* [`<DragHandleSprite />`](#drag-handle-sprite)
* [`<SortSprite />`](#sort-sprite)



### Table
```js
import { Table } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods of the component:  <br /> <ol><li>`ref.current.setFocusableCell(row: number, col: number);`: Sets the focus of a cell, typically when `keyboardFocusable` is enabled</li><li>`ref.current.clearAllCellFocus();`: Remove the focus status of all cells</li><li>`ref.current.forceFocusCell(row: number, col: number);`: Force focus on a cell. **After forcing focus, you can use the keyboard to listen directly**</li><li>`ref.current.getCellElement(row: number, col: number);`: Returns the current cell HTML element</li><li>`ref.current.triggerCellKeyPressed(event: React.KeyboardEvent<Element>);`: Expose handleKeyPressed for external usage, This allows calling handleKeyPressed programmatically from outside, such as with a custom onCellKeyPressed method.</li></ol> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the table wrapper. | - |
| `tableClassName` | string | `table` | The class name of the table wrapper. | - |
| `data` | Array | - | Array of objects, where each object represents one item - row in table. such as `[{name:'David',friend:'Jone',condition:'GOOD'},{name:'Chuckie',friend:'Jone',condition:'BAD'}]` <blockquote>Enable it to enable some special features</blockquote> | - |
| `dataSelected` | Array | - | Array of numbers, Selected data when rowSelectable is enabled. It's an array of indexed numbers， such as `[1，3]` <blockquote>It is valid when `rowSelectable` is "true"</blockquote> | - |
| `rowDraggable` | boolean | false | Indicates whether the per row can be dragged. <blockquote>The `data` prop must exist to fire data interaction.</blockquote> | - |
| `rowSelectable` | boolean | false | Use of Checkboxes and clickable rows for selection. <blockquote>The `data` prop must exist to fire data interaction.</blockquote>| - |
| `colSortable` | boolean | false | Support sort a column (or columns) when the table is built. The components are used in each column of the head. <blockquote>The `data` prop must exist to fire data interaction.</blockquote> <blockquote>`<TableCell />` must have attribute `data-table-col`.</blockquote> | - |
| `keyboardFocusable` | boolean | false | Use the arrow keys on your keyboard to focus on each cell. <blockquote>The `data` prop must exist to fire data interaction.</blockquote> | - |
| `filterFields` | Array | - | Fields used for filtering. such as `['name', 'friend']` <blockquote>The `data` prop must exist to fire data interaction.</blockquote> | - |
| `bordered` | boolean  | false | Adds borders on all sides of the table and cells | - |
| `colGroup` | boolean  | false | Set the background color of the multiple columns with the `<colgroup>` and `<col>` tags | - |
| `cellAutoWidth` | boolean  | false | Width does not expand automatically, each cell uses a custom minimum width. <blockquote>If the content is exceeded, there will be a horizontal scrollbar on the table. And if this attribute exists, the \<TableCell \/\> in the \<TableHead \/\>` does not need to use `nowrap` to avoid automatic text wrapping.</blockquote> | - |
| `responsive` | boolean  | true | For horizontally scrolling tables on the wrapper. | - |
| `enhancedResponsive` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. <blockquote>Valid when the device width is less than or equal to 768px. `<TableRow />` and `<TableCell />` must have attribute `data-table-text`.</blockquote> | - |
| `enhancedResponsiveWithScrollBar` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. This property allows scroll bars to be created automatically in the table with floating header. <blockquote>Valid when the device width is less than or equal to 768px. `<TableCell />` must have attribute `data-table-col`.</blockquote> | - |
| `onChangeFilter` | function  | - | Call a function when the value changed. It returns one callback value which is the fetched data (**Array**). | - |
| `onChangeRowSelect` | function  | - | Call a function when the selection box for the current row is changed. It returns one callback value which is the fetched data (**Array**). <blockquote>It is valid when `rowSelectable` is "true"</blockquote> | - |
| `onRowDrag` | function  | - | As each row is dragged, it returns two functions. dragStart, dragEnd, they represent the callback events of drag start and drag end respectively. For example: `onRowDrag={(dragStart,dragEnd)=>{if(dragStart!==null)dragStart((el:HTMLTableRowElement,order:number[],data:any[])=>{console.log('dragStart: ',el,order,data);});if(dragEnd!==null)dragEnd((el:HTMLTableRowElement,order:number[],data:any[])=>{console.log('dragEnd: ',el,order,data);});}}`. <blockquote>It is valid when `rowDraggable` is "true"</blockquote> | - |
| `onColSort` | function  | - | Call a function when the column sorting succeeds. It returns one callback value which is the fetched data (**Array**). <blockquote>It is valid when `colSortable` is "true"</blockquote> | - |
| `onCellKeyPressed` | function  | - | It fires when use keyboard arrow keys. It returns seven callback values. <br /> <ol><li>The first is the cell classname (**String**)</li><li>The second is the current cell (**HTMLTableCellElement**)</li><li>The third is the KeyboardEvent (**React.KeyboardEvent**)</li><li>The fourth is whether the cell is at the leftmost edge (**Boolean**, `isLeftEdge`)</li><li>The fifth is whether the cell is at the rightmost edge (**Boolean**, `isRightEdge`)</li><li>The sixth is whether the cell is at the topmost edge (**Boolean**, `isTopEdge`)</li><li>The seventh is whether the cell is at the bottommost edge (**Boolean**, `isBottomEdge`)</li></ol> <blockquote>It is valid when `keyboardFocusable` is "true"</blockquote> | - |
| `onCellPressEnter` | function  | - | The callback function that is triggered when Enter key is pressed. It returns three callback values. <br /> <ol><li>The first is the cell classname (**String**)</li><li>The second is the current cell (**HTMLTableCellElement**)</li><li>The last is the KeyboardEvent (**React.KeyboardEvent**)</li></ol> | - |


👉🏼 JSON configuration properties of the `data` => It can be any array of objects in JSON format.



### Table Body
```js
import { TableBody } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table body. | - |



### Table Cell
```js
import { TableCell } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table cell as `<td>` or `<th>`. | - |
| `active` | boolean | false | Whether to activate the current row. | - |
| `activeClassName` | string | `active` | The class name of actived. | - |
| `colSpan` | number | `1` | The value represents the number of columns to span. | - |
| `nowrap` | boolean | false | Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line. | - |
| `scope` | `col` \| `row` \| `colgroup` \| `rowgroup` | - | The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows. | - |


### Table Head
```js
import { TableHead } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table head. | - |



### Table Foot
```js
import { TableFoot } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table foot. | - |



### Table Row
```js
import { TableRow } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table row as `<tr>`. | - |
| `active` | boolean | false | Whether to activate the current row. | - |
| `activeClassName` | string | `active` | The class name of actived. | - |
| `itemData` | JSON Object | - | Data for each row. such as `{name:'David',friend:'Jone',condition:'GOOD'}` | - |



### Table Colgroup
```js
import { TableColgroup } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table colgroup. | - |
| `length` | number | - | Specifies how many elements a group has. | - |
| `captionSide` | `top` \| `bottom` | top | This property puts the content of a table's `<caption>` on the specified side. | - |



### Table Caption
```js
import { TableCaption } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table caption. | - |


### Filter Input
```js
import { TableFilter } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the filter input control. | - |
| `placeholder` | string | - | The placeholder of the filter input control. | - |
| `label` | ReactNode | null | Label for filter input control. | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The last is the fetched data (**Array**).</li></ol> | - |



### Toggle Selection

It will be presented in the form of a checkbox.

```js
import { ToggleSelection } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.setSelectAll(false)`</li><li>`contentRef.current.indeterminate(false)`</li><li>`contentRef.current.set(false)`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `row` | number | - | For the current row, set `-1` if it is the head area. | ✅ |
| `className` | string | - | The class name of the table caption. | - |
| `checked` | boolean | false | Is it selected. | - |
| `useRadio` | boolean | false | Use radio instead of Checkbox. | - |
| `indeterminate` | boolean | false | Set a checkbox to indeterminate state. | - |
| `value` | string | - | Set a default value for this control. If unchecked, it will pass an empty value | ✅ |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed.  It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the current value (**Boolean**) </li><li>The last is the fetched data (**Array**).</li></ol> | - |



### Drag Handle Sprite
```js
import { DragHandleSprite } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | `drag-trigger` | The class name of the filter input control. | - |
| `icon` | ReactNode  | `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><g><path d="M18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg>` | Specify an icon | - |

### Sort Sprite
```js
import { SortSprite } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | `sort-trigger` | The class name of the filter input control. | - |
| `fieldType` | `text` \| `number` \| `date` | `text` | The type of field that is sorted, which ensures the accuracy of sorting. | ✅ |
| `isReverse` | boolean | false | Whether the order is reversed | - |
| `icon` | ReactNode  | `<svg width="1em" height="1em" viewBox="0 0 18 18"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M9.5,3 L13,8 L6,8 L9.5,3 L9.5,3 Z M6,11 L13,11 L9.5,16 L6,11 L6,11 Z" id="path" fill="#000000"></path></g></svg>` | Specify an icon | - |
| `sortBy` | (handleProcess: Function, filterType: string, inverse: boolean) => (a: Element, b: Element) => number  | - | Custom sort function generator. <br />This function receives three arguments: <ol><li>`handleProcess`: a callback to trigger sort animation and internal state updates (call this inside your comparator if you want animation/effects).</li><li>`filterType`: the column type, e.g., **text** \| **number** \| **date**.</li><li>`inverse`: a boolean indicating whether the current sort order is reversed.</li></ol> It should return a comparator function compatible with [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#comparefn), i.e., <code>(a, b) =&gt; number</code>. <br />If not provided, a default sort logic is used.| - |






