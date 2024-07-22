# Synthetic Table


## API

> It accepts all props.


### Table
```js
import { Table } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the table wrapper. | - |
| `tableClassName` | string | `table` | The class name of the table wrapper. | - |
| `data` | JSON Object | - | Array of objects, where each object represents one item - row in table. such as `[{name:'David',friend:'Jone',condition:'GOOD'},{name:'Chuckie',friend:'Jone',condition:'BAD'}]` <blockquote>Enable it to enable some special features</blockquote> | - |
| `dataSelected` | JSON Object | - | Selected data when checkboxSelection is enabled. It's an array of indexed numbers， such as `[1，3]` <blockquote>It is valid when `checkboxSelection` is "true"</blockquote> | - |
| `checkboxSelection` | boolean | - | Use of Checkboxes and clickable rows for selection <blockquote>It only works when `data` exists</blockquote> | - |
| `filterFields` | Array | - | Fields used for filtering. such as `['name', 'friend']` <blockquote>It only works when `data` exists</blockquote> | - |
| `bordered` | boolean  | false | Adds borders on all sides of the table and cells | - |
| `colGroup` | boolean  | false | Set the background color of the multiple columns with the `<colgroup>` and `<col>` tags | - |
| `responsive` | boolean  | true | For horizontally scrolling tables on the wrapper. | - |
| `cellAutoWidth` | boolean  | false | Width does not expand automatically, each cell uses a custom minimum width. <blockquote>If the content is exceeded, there will be a horizontal scrollbar on the table</blockquote> | - |
| `onChangeFilter` | function  | - | Call a function when the value changed. It returns one callback value which is the fetched data (**Array**). | - |
| `onChangeRowSelect` | function  | - | Call a function when the selection box for the current row is changed. It returns one callback value which is the fetched data (**Array**). | - |



### Table Body
```js
import { TableBody } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table body. | - |



### Table Cell
```js
import { TableCell } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
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
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table head. | - |



### Table Foot
```js
import { TableFoot } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table foot. | - |



### Table Row
```js
import { TableRow } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
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
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table colgroup. | - |
| `length` | number | - | Specifies how many elements a group has. | - |
| `captionSide` | `top` \| `bottom` | top | This property puts the content of a table's <caption> on the specified side. | - |



### Table Caption
```js
import { TableCaption } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | - | The class name of the table caption. | - |


### Filter Input
```js
import { TableFilter } from 'funda-ui/SyntheticTable';
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
import { ToggleSelection } from 'funda-ui/SyntheticTable';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.setSelectAll(false)`</li><li>`contentRef.current.indeterminate(false)`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
| `row` | number | - | For the current row, set `-1` if it is the head area. | ✅ |
| `className` | string | - | The class name of the table caption. | - |
| `checked` | boolean | false | Is it selected. | - |
| `indeterminate` | boolean | false | Set a checkbox to indeterminate state. | - |
| `value` | string | - | Set a default value for this control. If unchecked, it will pass an empty value | ✅ |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed.  It returns three callback values. <br /> <ol><li>The first is the Control Event (**Event**)</li><li>The second is the current value (**Boolean**) </li><li>The last is the fetched data (**Array**).</li></ol> | - |


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






## Filter Table

> To interact with data is required using the `data` property.

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
                onChangeFilter={(val: any[]) => {
                    console.log(val);
                }}
            >
                <TableCaption>
                    <TableFilter
                        placeholder="Enter keywords..."
                    />
                </TableCaption>

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




## Selecting

> To interact with data is required using the `data` property.

It is valid when `checkboxSelection` is "true". You can set more properties, such as: `onChangeRowSelect`, `dataSelected`.


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
} from 'funda-ui/SyntheticTable';

// component styles
import 'funda-ui/SyntheticTable/index.css';


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
                checkboxSelection
                responsive
                tableClassName="table app-my-table"
                data={tableData}
                // dataSelected={[1,3]}
                onChangeRowSelect={(fetchData: any[]) => {
                    console.log(fetchData);
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell scope="col">
                            {/** Checkbox */}
                            <div className="checkbox-indeterminate">
                                <ToggleSelection row={-1} contentRef={tableSelectAllRef} />
                            </div>
                        </TableCell>
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
                            <TableCell scope="col">
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

