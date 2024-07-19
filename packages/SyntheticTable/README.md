# Synthetic Table


## API

> It accepts all props.


### Table
```js
import { Table } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the table wrapper. | - |
| `tableClassName` | string | `table` | The class name of the table wrapper. | - |
| `data` | JSON Object | - | Array of objects, where each object represents one item - row in table. such as `[{name:'David',friend:'Jone',condition:'GOOD'},{name:'Chuckie',friend:'Jone',condition:'BAD'}]` <blockquote>Enable it to enable some special features</blockquote> | - |
| `filterFields` | Array | - | Fields used for filtering. such as `['name', 'friend']` <blockquote>It only works when `data` exists</blockquote> | - |
| `bordered` | boolean  | false | Adds borders on all sides of the table and cells | - |
| `colGroup` | boolean  | false | Set the background color of the multiple columns with the `<colgroup>` and `<col>` tags | - |
| `responsive` | boolean  | true | For horizontally scrolling tables on the wrapper. | - |
| `cellAutoWidth` | boolean  | false | Width does not expand automatically, each cell uses a custom minimum width. <blockquote>If the content is exceeded, there will be a horizontal scrollbar on the table</blockquote> | - |
| `filterRow` | boolean | false | Enable the filtering controls. | - |
| `filterControlClassName` | string | - | The class name of the filter input control. <blockquote>It is valid when `filterRow` is "true"</blockquote> | - |
| `filterControlPlaceholder` | string | - | The placeholder of the filter input control. <blockquote>It is valid when `filterRow` is "true"</blockquote> | - |
| `filterLabel` | ReactNode | null | Label for filter input control. | - |
| `onChangeFilter` | function  | - | Call a function when the value changed. It returns one callback value which is the fetched data (**Array**). | - |


### Table Body
```js
import { TableBody } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | The class name of the table body. | - |



### Table Cell
```js
import { TableCell } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | The class name of the table cell as `<td>` or `<th>`. | - |
| `active` | boolean | false | Whether to activate the current row. | - |
| `activeClassName` | string | `active` | The class name of actived. | - |
| `colSpan` | number | `1` | The value represents the number of columns to span. | - |
| `scope` | `col` \| `row` \| `colgroup` \| `rowgroup` | - | The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows. | - |


### Table Head
```js
import { TableHead } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | The class name of the table head. | - |



### Table Foot
```js
import { TableFoot } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | The class name of the table foot. | - |



### Table Row
```js
import { TableRow } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | The class name of the table row as `<tr>`. | - |
| `active` | boolean | false | Whether to activate the current row. | - |
| `activeClassName` | string | `active` | The class name of actived. | - |
| `itemData` | JSON Object | `active` | Data for each row. | - |



### Table Colgroup
```js
import { TableColgroup } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | The class name of the table colgroup. | - |
| `length` | number | - | Specifies how many elements a group has. | - |


### Table Caption
```js
import { TableCaption } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `className` | string | - | The class name of the table caption. | - |






## Examples

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/SyntheticTable';

// component styles
import 'funda-ui/SyntheticTable/index.css';


export default () => {

    return (
        <>
            <Table
                responsive
                tableClassName="table app-my-table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Title 1</TableCell>
                        <TableCell scope="col">Title 2</TableCell>
                        <TableCell scope="col">Title 3</TableCell>
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






## Filter Table

```js
import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'funda-ui/SyntheticTable';

// component styles
import 'funda-ui/SyntheticTable/index.css';

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
                responsive
                tableClassName="table app-my-table"
                data={tableData}
                filterFields={['name', 'friend']}
                filterRow
                filterControlPlaceholder="Enter keywords..."
                onChangeFilter={(val: any[]) => {
                    console.log(val);
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Name</TableCell>
                        <TableCell scope="col">Friend</TableCell>
                        <TableCell scope="col">Condition</TableCell>
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
} from 'funda-ui/SyntheticTable';

// component styles
import 'funda-ui/SyntheticTable/index.css';

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
                responsive
                tableClassName="table app-my-table"
            >
                <TableColgroup length={4} />
                <TableHead>
                    <TableRow>
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Name</TableCell>
                        <TableCell scope="col">Friend</TableCell>
                        <TableCell scope="col">Condition</TableCell>
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
