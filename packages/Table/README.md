# Table (Synthetic)


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
| `cellAutoWidth` | boolean  | false | Width does not expand automatically, each cell uses a custom minimum width. <blockquote>If the content is exceeded, there will be a horizontal scrollbar on the table</blockquote> | - |
| `responsive` | boolean  | true | For horizontally scrolling tables on the wrapper. | - |
| `enhancedResponsive` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. <blockquote>Valid when the device width is less than or equal to 768px. `<TableRow />` and `<TableCell />` must have attribute `data-table-text`.</blockquote> | - |
| `enhancedResponsiveWithScrollBar` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. This property allows scroll bars to be created automatically in the table with floating header. <blockquote>Valid when the device width is less than or equal to 768px. `<TableCell />` must have attribute `data-table-col`.</blockquote> | - |
| `onChangeFilter` | function  | - | Call a function when the value changed. It returns one callback value which is the fetched data (**Array**). | - |
| `onChangeRowSelect` | function  | - | Call a function when the selection box for the current row is changed. It returns one callback value which is the fetched data (**Array**). <blockquote>It is valid when `rowSelectable` is "true"</blockquote> | - |
| `onRowDrag` | function  | - | As each row is dragged, it returns two functions. dragStart, dragEnd, they represent the callback events of drag start and drag end respectively. For example: `onRowDrag={(dragStart,dragEnd)=>{if(dragStart!==null)dragStart((el:HTMLTableRowElement,order:number[],data:any[])=>{console.log('dragStart: ',el,order,data);});if(dragEnd!==null)dragEnd((el:HTMLTableRowElement,order:number[],data:any[])=>{console.log('dragEnd: ',el,order,data);});}}`. <blockquote>It is valid when `rowDraggable` is "true"</blockquote> | - |
| `onColSort` | function  | - | Call a function when the column sorting succeeds. It returns one callback value which is the fetched data (**Array**). <blockquote>It is valid when `colSortable` is "true"</blockquote> | - |
| `onCellKeyPressed` | function  | - | It fires when use keyboard arrow keys. It returns three callback values. <br /> <ol><li>The first is the cell classname (**String**)</li><li>The second is the current cell (**HTMLTableCellElement**)</li><li>The last is the KeyboardEvent (**KeyboardEvent**)</li></ol> <blockquote>It is valid when `keyboardFocusable` is "true"</blockquote> | - |



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
| `captionSide` | `top` \| `bottom` | top | This property puts the content of a table's <caption> on the specified side. | - |



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
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.control()`</li><li>`contentRef.current.setSelectAll(false)`</li><li>`contentRef.current.indeterminate(false)`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote>| - |
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

### Sort Sprite
```js
import { SortSprite } from 'funda-ui/Table';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `className` | string | `sort-trigger` | The class name of the filter input control. | - |
| `fieldType` | `text` \| `number` \| `date` | `text` | The type of field that is sorted, which ensures the accuracy of sorting. | ✅ |


## Examples

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
                tableClassName="table"
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
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Title 1</TableCell>
                        <TableCell scope="col">Title 2</TableCell>
                        <TableCell scope="col">Title 3</TableCell>
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
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Title 1</TableCell>
                        <TableCell scope="col">Title 2</TableCell>
                        <TableCell scope="col">Title 3</TableCell>
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
                        <TableCell scope="col" style={{width: '25px'}}>
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
                        <TableCell scope="col" style={{width: '25px'}}></TableCell>
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





## Drag and Drop Sort Rows

> To interact with data is required using the `data` property of `<Table />` and `itemData` property of `<TableRow />`.

It is valid when `rowDraggable` exists. You can set more properties, such as: `onRowDrag`.


```js
import React from "react";
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
                    });
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
                            <TableCell scope="row"><DragHandleSprite /> {index}</TableCell>
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





## Sortable Table

> To interact with data is required using the `data` property of `<Table />` and `itemData` property of `<TableRow />`.

It is valid when `colSortable` exists. You can set more properties, such as: `onColSort`.


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
    {money: "$255.12", name: "Co Cheey", no: "-2324.343", date1: "2013-09-10T12:10:46+00:00", date2: "September 13, 2013"},
    {money: "$21.134", name: "Foristin", no: "-34789.34", date1: "2018-09-24T12:10:46+00:00", date2: "January 2, 2019"},
    {money: "$3454.134", name: "Alice", no: "+224.5", date1: "2011-09-21T12:10:46+00:00", date2: "December 1, 2018"},
    {money: "$224.0", name: "Wooli", no: "+33.6", date1: "2011-02-26T12:10:46+00:00", date2: "July 22, 2017"},
    {money: "$356.2", name: "Spiter Low", no: "278.23487", date1: "2019-01-01T12:10:46+00:00", date2: "July 28, 2017"},
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
                            <TableCell scope="col">#</TableCell>
                            <TableCell scope="col">Money <SortSprite fieldType="number" /></TableCell>
                            <TableCell scope="col">Name <SortSprite fieldType="text" /></TableCell>
                            <TableCell scope="col">No. <SortSprite fieldType="number" /></TableCell>
                            <TableCell scope="col">Date1 <SortSprite fieldType="date" /></TableCell>
                            <TableCell scope="col">Date2 <SortSprite fieldType="date" /></TableCell>
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



## Safe Asynchronous Example

When a `useState()` in a child component changes state, it will cause the entire parent component to re-render.

At this time, we need to use `useMemo()` to wrap this subcomponent to avoid problems caused when the child component triggers a method of `useState()` of the parent component.


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
                        <TableCell scope="col" style={{width: '25px'}}>
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
                    {data.map((item: any, index: number) => {
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
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Money</TableCell>
                        <TableCell scope="col" style={{ width: '200px' }}>Name</TableCell>
                        <TableCell scope="col">No.</TableCell>
                        <TableCell scope="col" style={{ width: '200px' }}>Date1</TableCell>
                        <TableCell scope="col">Date2</TableCell>
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

It is valid when `keyboardFocusable` is "true". You can set more properties, such as: `onCellKeyPressed`.



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
                onCellKeyPressed={(classname: string, elem: HTMLTableCellElement, event: KeyboardEvent) => {
                    console.log(classname, elem, event);
                }}

            >

                <TableHead>
                    <TableRow>
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Money</TableCell>
                        <TableCell scope="col">Name</TableCell>
                        <TableCell scope="col">No.</TableCell>
                        <TableCell scope="col">Date1</TableCell>
                        <TableCell scope="col">Date2</TableCell>
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
                        <TableCell scope="col">#</TableCell>
                        <TableCell scope="col">Money</TableCell>
                        <TableCell scope="col">Name</TableCell>
                        <TableCell scope="col">No.</TableCell>
                        <TableCell scope="col">Date1</TableCell>
                        <TableCell scope="col">Date2</TableCell>
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