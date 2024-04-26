# Table


## API

### Table
```js
import Table from 'funda-ui/Table';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `tableCheckRef` | React.RefObject | - | It exposes the following methods of the component:  <br /> <ol><li>`tableCheckRef.current.check([{index:1,value:true},{index:3,value:true}], (res) => { console.log(res) })`</li></ol> |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the table wrapper. |
| `tableClassName` | string | `table` | The class name of the table wrapper. |
| `bodyClassName` | string | - | The class name of `<tbody>`. |
| `headClassName` | string | - | The class name of `<thead>`. |
| `footClassName` | string | - | The class name of `<tfoot>`. |
| `rowActiveClassName` | string | - | The class name of row actived. |
| `checkable` | boolean | false | Set TreeNode display Checkbox or not. |
| `useRadio` | boolean | false | Use radio instead of Checkbox. <blockquote>It is valid when `checkable` is "true"</blockquote> |
| `draggable` | boolean | false | Indicates whether the per row can be dragged. |
| `sortable` | boolean | false | Sort by headers. |
| `data` | JSON Object Literals | - | Specify data of Table as a JSON string format. Such as: <br />**usage 1:**<br />`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]}` <br />**usage 2:**<br />`{"headers":[{"type":"number","content":"No."},{"type":false,"content":"Name"}],"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]};` <br />**usage 3:**<br />`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }],[{"cols": 4, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>4</span> columns</strong></> }]]}` |
| `bordered` | boolean  | false | Adds borders on all sides of the table and cells |
| `colGroup` | boolean  | false | Set the background color of the multiple columns with the `<colgroup>` and `<col>` tags |
| `responsive` | boolean  | true | For horizontally scrolling tables on the wrapper. |
| `cellAutoWidth` | boolean  | false | Width does not expand automatically, each cell uses a custom minimum width. <blockquote>If the content is exceeded, there will be a horizontal scrollbar on the table</blockquote> |
| `enhancedResponsive` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. <blockquote>Valid when the device width is less than or equal to 768px</blockquote> |
| `enhancedResponsiveWithScrollBar` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. This property allows scroll bars to be created automatically in the table with floating header. <blockquote>Valid when the device width is less than or equal to 768px</blockquote> |
| `onClick` | function  | - | Call a function when the value of an HTML element is changed. It returns two callback values. <br /> <ol><li>The first is the HTML Element Event (**Event**)</li><li>The second is the row data (**Array**)</li></ol> |
| `onCheck` | function  | - | Call a function when changing the checkbox. It returns three callback values. <br /> <ol><li>The first is the row data (**Array**)</li><li>The second is the checkbox or radio control (**HTML Element**)</li><li>The second is the current value (**Boolean**)</li></ol> <blockquote>It is valid when `checkable` is "true"</blockquote> |
| `onDrag` | function  | - | As each row is dragged, it returns two functions. dragStart, dragEnd, they represent the callback events of drag start and drag end respectively. For example: `onDrag={(dragStart,dragEnd)=>{if(dragStart!==null)dragStart((el,data,printData)=>{console.log('dragStart: ',data,printData);});if(dragEnd!==null)dragEnd((el,data,printData)=>{console.log('dragEnd: ',data,printData);});}}`. <blockquote>It is valid when `draggable` is "true"</blockquote> |
| `onRenderFinished` | function  | - | Determine whether the table has been rendered. It returns only one callback value (**Boolean**). <blockquote>It is very practical for large batches of data to be displayed in business.</blockquote>|
| `onCellMouseEnter` | function  | - | It fires when the mouse pointer enters a cell. It returns only one callback value which is the current cell. |
| `onCellMouseLeave` | function  | - | It fires when the mouse pointer leaves a cell. It returns only one callback value which is the current cell. |
| `onCellClick` | function  | - | It fires when the mouse pointer clicks a cell. It returns only one callback value which is the current cell. |
| `onRowMouseEnter` | function  | - | It fires when the mouse pointer enters a row. It returns only one callback value which is the current row. |
| `onRowMouseLeave` | function  | - | It fires when the mouse pointer leaves a row. It returns only one callback value which is the current row. |
| `onRowClick` | function  | - | It fires when the mouse pointer clicks a row. It returns only one callback value which is the current row. |
| `onHeadCellMouseEnter` | function  | - | It fires when the mouse pointer enters a cell of header. It returns only one callback value which is the current cell. |
| `onHeadCellMouseLeave` | function  | - | It fires when the mouse pointer leaves a cell of header. It returns only one callback value which is the current cell. |
| `onHeadCellClick` | function  | - | It fires when the mouse pointer clicks a cell of header. It returns only one callback value which is the current cell. |



JSON configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `fields` | array | - | Table rows and columns. Eg. `[[{"cols": 1, "width": "50px", "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "width": "50px","content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]` <blockquote><ol><li>The key `cols` identifies the column (change the value if the column is merged). </li><li>The key `content` to place the content of each cell. </li><li>The key `width` to set the width of each cell. It will fail when the breakpoint is less than or equal to 768px.</li><li>The key `className` to set the classes of each cell.</li><li>The key `style` to set the style which type is *React.CSSProperties*, and it will cover `width`.</li><li>The key `data` to set a `data-use` attribute allows us to store extra information on standard.</li></ol><blockquote>|
| `headers` | array | - | Defines a header cell in an HTML table. Eg. `[{"type": false, "style": {width: '50px', background: 'black', color: 'white'}, "content": "Index" },{"type": "number", "content": "Money" },{"type": "text", "content": "Name" },{"type": "number", "content": "No." },{"type": "date", "content": "Date1" },{"type": "date", "content": "Date2" }]` <blockquote><ol><li>The key `type` is used to specify the type of sorting for each column (Type of sorted values: `false`, `'number'`, `'text'` or `'date'`). If set to `false` or `0`, sorting is disabled. <hr> *It is valid when `sortable` is true* </li><li>The key `content` is the value of each field.</li><li>The key `width` to set the width of each field. It will fail when the breakpoint is less than or equal to 768px.</li><li>The key `className` to set the classes of each field.</li><li>The key `style` to set the style which type is *React.CSSProperties*, and it will cover `width`.</li><li>The key `data` to set a `data-use` attribute allows us to store extra information on standard.</li></ol><blockquote>|
| `summaries` | array | - | Insert a summarized table in report footer. Eg. `["Text 1","Text 2"]`|
| `fieldsChecked` | array | - | Insert a summarized table in report footer. Eg. `[false,true]` <blockquote>It is valid when `checkable` or `useRadio` is "true", It is just passed in as a default value. </blockquote>|


## Examples

```js
import React from "react";
import Table from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


const tableData1 = {
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		]
	]
};

const tableData2 = {
	"headers": [
		{"style": {width: '50px', background: 'black', color: 'white'}, "content": "No." },
	    {"content": "Name" },
		{"content": "" }
	],
	"fields": [
		[
		   {"cols": 1, "width": "50px", "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
		   {"cols": 1, "width": "50px", "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
		   {"cols": 1, "width": "50px", "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		]
	],
	"summaries": ["Text 1","Text 2","Text 3"],
};

const tableData2_check = {
	"headers": [
        {"style": { padding: '.5rem .1rem', width: '18px' }, "content": '' },
		{"style": {width: '50px', background: 'black', color: 'white'}, "content": "No." },
	    {"content": "Name" },
		{"content": "" }
	],
	"fields": [
		[
           { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
		   {"cols": 1, "width": "50px", "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
           { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
		   {"cols": 1, "width": "50px", "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
           { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
		   {"cols": 1, "width": "50px", "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		]
	],
    "fieldsChecked": [false, true, false],
	"summaries": ["Text 1","Text 2","Text 3"],
};


const tableData3 = {
	"headers": [
		{"type": false, "content": "No." },
	    {"type": "number", "content": "Money" },
		{"type": "text", "content": "Name" },
		{"type": "number", "content": "No." },
		{"type": "date", "content": "Date1" },
		{"type": "date", "content": "Date2" }
	],
	"fields": [
		[
			{"cols": 1, "content": "1" },
			{"cols": 1, "content": "$55.134" },
			{"cols": 1, "content": "David Lin" },
			{"cols": 1, "content": "3453434"},
			{"cols": 1, "content": "2012-09-25T12:10:46+00:00"},
			{"cols": 1, "content": "May 22, 2003"}
			
		],
		[
			{"cols": 1, "content": "2" },
			{"cols": 1, "content": "$255.12" },
			{"cols": 1, "content": "Co Cheey" },
			{"cols": 1, "content": "-2324.343"},
			{"cols": 1, "content": "2013-09-10T12:10:46+00:00"},
			{"cols": 1, "content": "September 13, 2013"}
		],	
		[
			{"cols": 1, "content": "3" },
			{"cols": 1, "content": "$21.134" },
			{"cols": 1, "content": "Foristin" },
			{"cols": 1, "content": "-34789.34"},
			{"cols": 1, "content": "2018-09-24T12:10:46+00:00"},
			{"cols": 1, "content": "January 2, 2019"}
		],	
		[
			{"cols": 1, "content": "4" },
			{"cols": 1, "content": "$3454.134" },
			{"cols": 1, "content": "Alice" },
			{"cols": 1, "content": "+224.5"},
			{"cols": 1, "content": "2011-09-21T12:10:46+00:00"},
			{"cols": 1, "content": "December 1, 2018"}
		],	
		[
			{"cols": 1, "content": "5" },
			{"cols": 1, "content": "$224.0" },
			{"cols": 1, "content": "Wooli" },
			{"cols": 1, "content": "+33.6"},
			{"cols": 1, "content": "2011-02-26T12:10:46+00:00"},
			{"cols": 1, "content": "July 22, 2017"}
		],	
		[
			{"cols": 1, "content": "6" },
			{"cols": 1, "content": "$356.2" },
			{"cols": 1, "content": "Spiter Low" },
			{"cols": 1, "content": "278.23487"},
			{"cols": 1, "content": "2019-01-01T12:10:46+00:00"},
			{"cols": 1, "content": "July 28, 2017"}
		]
		
	]
};


const tableData4 = {
	"headers": [
		{"content": "No." },
	    {"content": "Name" },
		{"content": "Email" },
        {"content": "Phone" }
	],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "aaa@gmail.com"},
		   {"cols": 1, "content": "767 929 1212"}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "bbb@gmail.com"},
		   {"cols": 1, "content": "188 928 9999"}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "ccc@gmail.com"},
		   {"cols": 1, "content": "188 928 2324"}
		],	
		[
		   {"cols": 1, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>1</span> columns</strong></> },
		   {"cols": 3, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>3</span> columns</strong></> }
		],	
		[
		   {"cols": 4, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>4</span> columns</strong></> }
		]	
	]
};


const tableData5 = {
	"fields": [
		[
		    {"cols": 1, "content": "Jan" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],
		[
		    {"cols": 1, "content": "Feb" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Mar" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Apr" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "May" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		],	
		[
		    {"cols": 1, "content": "Jun" },
		    {"cols": 1, "content": "14" },
		    {"cols": 1, "content": "13"},
			{"cols": 1, "content": "11"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "09"},
			{"cols": 1, "content": "23"},
			{"cols": 1, "content": "22"}
		]
	]
};


export default () => {

    return (
        <>

            <h3>Normal Styles</h3>
            {/* ================================================================== */}
            <Table 
                bordered={true} 
                data={tableData1} 
            />

            <Table 
                tableClassName="table table-dark table-striped-columns" 
                bordered={true} 
                data={tableData1} 
            />

            <Table 
                tableClassName="table table-striped table-hover" 
                bordered={true} 
                data={tableData1} 
                onHeadCellClick={(e: React.MouseEvent) => {
                    console.log(e.currentTarget);
                }}
                onClick={(e: any, val: any) => {
                    const _rows = [].slice.call(e.currentTarget.closest('tbody').querySelectorAll('.row-obj'));
                    const _rowEl = e.currentTarget;

                    console.log(_rows, _rowEl, val);
                }}
                onCellMouseEnter={(e: any) => {
                    console.log(e.currentTarget);
                }}
                onCellMouseLeave={(e: any) => {
                    console.log(e.currentTarget);
                }}
            />
            
            <Table 
                bodyClassName="table-group-divider" 
                rowActiveClassName="active bg-primary-subtle"
                data={tableData2_check}
                checkable={true}
                onCheck={(val: any[], el: any, checked: boolean) => {
                    console.log(val, el, checked);
                }} 
            />

            <Table
                bodyClassName="table-group-divider"
                data={tableData2}
                draggable={true}
                onDrag={(dragStart, dragEnd) => {
                    if ( dragStart !== null ) dragStart((el, data, printData)=> {
                        console.log('dragStart: ', data, printData);
                    });

                    if ( dragEnd !== null ) dragEnd((el, data, printData)=> {
                        console.log('dragEnd: ', data, printData);
                    });
                }}
            />

            <Table
                bodyClassName="table-group-divider"
                data={tableData3}
                sortable={true}
            />


            <Table 
                headClassName="table-dark" 
                data={tableData2} 
            />
            
            <Table 
                data={tableData3} 
            />

            <Table 
                data={tableData4} 
            />

            <Table 
                colGroup={true} 
                data={tableData5} 
            />

            <h3>Cell Auto Width</h3>
            {/* ================================================================== */}

            <Table 
                headClassName="table-light"
                tableClassName="table table-hover table-bordered table-striped"
                enhancedResponsive={true}
                data={tableData1} 
                cellAutoWidth
            />




            <h3>Enhanced Responsive</h3>
            {/* ================================================================== */}
            <Table 
                enhancedResponsive={true} 
                data={tableData3} 
            />

            <h3>Enhanced Responsive with Scroll Bars</h3>
            {/* ================================================================== */}
            <Table 
                bordered={true} 
                responsive={false}
                enhancedResponsiveWithScrollBar={true} 
                data={tableData3} 
            />

          
        </>
    );
}
```


## Auto width for table

Add a width to `tableClassName` attribute.

```css
.custom-table-inner {
    width: 1%;
}
    
```

```js
import React from "react";

// bootstrap components
import Table from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


export default () => {

    
    return (
        <>

            <Table 
                tableClassName="table custom-table-inner" 
                ...
            />


        </>
    );
}
```



## Safe Asynchronous Example

When a `useState()` in a child component changes state, it will cause the entire parent component to re-render, resulting in invalidation such as **checkbox**.

At this time, we need to use `useMemo()` to wrap this subcomponent to avoid problems caused when the child component triggers a method of `useState()` of the parent component.

> [!WARNING]
> As a general rule, when using `checkable`, `onClick()`, `onCheck()` attributes, you need to use useMemo to wrap the table component.



```js

import { useEffect, useState, useMemo } from "react";

// bootstrap components
import Table from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';



//convert HTML text to plain text
function htmlToPlain(input: string) {
    return input.replace(/(<([^>]+)>)/ig, '');
}


// DO NOT move `useMemo` to component
function MemoTable(props: any) {
    const {setMethord, setSelectedItems, data} = props;
    return useMemo(() => {
        return <Table
                    checkable={true}
                    onHeadCellClick={(e: React.MouseEvent) => {
                        const _data = (e.currentTarget as any).dataset.use; // Match attribute "data" of `data.headers`
                        console.log(_data);
                    }}
                    onCellClick={(e: React.MouseEvent) => {
                        const _data = (e.currentTarget as any).dataset.use; // Match attribute "data" of `data.fields`
                        console.log(_data);
                    }}
                    onClick={(e: any, val: any) => {
                        const { id, name } = JSON.parse(val.content.at(-1));

                        console.log('click: ', e.currentTarget, val, id, name);

                        // Active current row
                        const rowActiveClassName = 'active bg-primary-subtle';
                        const _rows = [].slice.call(e.currentTarget.closest('tbody').querySelectorAll('.row-obj'));
                        const _rowEl = e.currentTarget;
                        const activeClass = rowActiveClassName.split(' ');

                        _rows.forEach((row: HTMLElement) => {
                            row.classList.remove(...activeClass);
                        });
                        if (_rowEl !== null) {
                            _rowEl.classList.add(...activeClass);
                        }

                    }}
                    onCheck={(val: any, el: any, checked: boolean) => {

        
                        //
                        const isCheckboxAllControl = el.dataset.index == -1;
                        if (isCheckboxAllControl) {

                            // check all
                            if (checked) {
                                const newMap = new Map();
                                const result = data.reduce(function(map: any, obj: any) {
                                    map[obj.id] = obj;
                                    newMap.set(obj.id, obj);
                                    return map;
                                }, {});
                                setSelectedItems(newMap);
                            } else {
                                setSelectedItems(new Map());
                            }
                            
                        } else {

                            if (typeof el.dataset.use !== 'undefined' && el.dataset.use !== '') {
                                const _itemData = JSON.parse(el.dataset.use);

                                setSelectedItems((prevState: any) => {
                                    const _selectedItems = prevState;

                                    if (!_selectedItems.has(_itemData.id)) {
                                        _selectedItems.set(_itemData.id, _itemData);
                                    } else {
                                        _selectedItems.delete(_itemData.id);
                                    }

                                    return _selectedItems;
                                });
                            }
                        }

        


                        //
                        const text = val.map((v: any) => {
                            return `${v.content[1]}: ${htmlToPlain(v.content[2])}，`
                        });
        
                        setMethord(text.join('').replace(/，\s*$/, ''));


                    }}
                    headClassName="table-light"
                    tableClassName="table table-hover table-bordered table-striped"
                    enhancedResponsive={true}

                    // Special note: the `data` parameter passed in must be written on the `fields` attribute.
                    data={{
                        "headers": [
                            {"style": { padding: '.5rem .1rem', width: '18px' }, "content": '' },
                            {"content": 'Id', "data": JSON.stringify({param1: 1, param2: 1}) },
                            {"content": 'Name', "data": JSON.stringify({param1: 2, param2: 2}) },
                            {"style": { display: 'none' }, "content": "" }
                        ],
                        "fields": data.map((item: any, i: number) => {
                            return [
                                { "cols": 1, "data": JSON.stringify({...item, customIndex: i}), "style": { padding: '.5rem .1rem' }, "content": '' },
                                { "cols": 1, "style": { fontWeight: 'normal' }, "content": item.id, "data": JSON.stringify(item) },
                                { "cols": 1, "content": item.name, "data": JSON.stringify(item) },
                                { "cols": 1, style: { display: 'none' }, "content": `{"id":"${item.id}","name":"${item.name}"}` }
                            ];
                        })
                    }}
                />
    }, [data]);
}



const Main = (props: any) => {

    const {
        otherdeps
    } = props;

    const [tableData, setTableData] = useState<any[]>([]);
    const [methord, setMethord] = useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState<any>(new Map());
    const [res, setRes] = useState<string>('');


    function handleView(e: React.MouseEvent) {
        e.preventDefault();

        const res: any[] = [];
        const selectedList: any[] = selectedItems.values();

        for (const obj of selectedList) {
            res.push(obj);
        }
        setRes(`selectedList: ${JSON.stringify(res)} methord: ${methord}`);
        // selectedList: [{"id":"01","name":"David Lin","customIndex":0},{"id":"02","name":"Tom McFarlin","customIndex":1}] methord: 01: David Lin，02: Tom McFarlin

    }


    useEffect(() => {
        
        // set a default request
        setTableData([
            {id: "01", name: "David Lin"},
            {id: "02", name: "Tom McFarlin"},
            {id: "03", name: "Chris Ames"}
        ]);

    }, [otherdeps]); // The Main component will be re-rendered due to `otherdeps`


    return (
        <>

            <a href="#" tabIndex={-1} onClick={handleView}>View Checked Data</a>
            <p><small>{res}</small></p>

            <MemoTable 
                data={tableData} 
                setMethord={setMethord} 
                setSelectedItems={setSelectedItems} 
            />

        </>
    );


}

export default Main;
```




## Trigger checkbox using exposed methods

Lets you callback the handle exposed as attribute `tableCheckRef`.


```js
import React, { useState, useRef, useMemo } from "react";

// bootstrap components
import Table from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';


const data = {
	"headers": [
        {"style": { padding: '.5rem .1rem', width: '18px' }, "content": '' },
		{"style": {width: '50px', background: 'black', color: 'white'}, "content": "No." },
	    {"content": "Name" },
		{"content": "" }
	],
	"fields": [
		[
           { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
		   {"cols": 1, "width": "50px", "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
		],
		[
           { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
		   {"cols": 1, "width": "50px", "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
		],	
		[
           { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
		   {"cols": 1, "width": "50px", "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "With hair like that?! Enough said…"}
		],
        [
            { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
            {"cols": 1, "width": "50px", "content": "04" },
            {"cols": 1, "content": "David Lin" },
            {"cols": 1, "content": "Because that’s all Steve Job’ needed for a salary."}
         ],
         [
            { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
            {"cols": 1, "width": "50px", "content": "05" },
            {"cols": 1, "content": "Tom McFarlin" },
            {"cols": 1, "content": "Pictures are worth a thousand words, right? So Tom x 1,000."}
         ],	
         [
            {"cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
            {"cols": 1, "width": "50px", "content": "06" },
            {"cols": 1, "content": "Chris Ames" },
            {"cols": 1, "content": "With hair like that?! Enough said…"}
         ],
         [
            { "cols": 1, "style": { padding: '.5rem .1rem' }, "content": '' },
            {"cols": 1, "width": "50px", "content": "07" },
            {"cols": 1, "content": "Chris Ames" },
            {"cols": 1, "content": "With hair like that?! Enough said…"}
         ]
	],
    "fieldsChecked": [false, false, false, false, false, false, false]
};


// DO NOT move `useMemo` to component
function MemoTable(props: any) {
    const {tableCheckRef, data, updateTable} = props;
    return useMemo(() => {
        return <Table
            tableCheckRef={tableCheckRef}
            bodyClassName="table-group-divider"
            rowActiveClassName="active bg-primary-subtle"
            data={data}
            checkable={true}
            onCheck={(val: any[], el: any, checked: boolean) => {
                console.log(val, el, checked);
            }}
        />
    }, [data, updateTable]);
}


export default () => {

    const tableCheckRef = useRef<any>(null);
    const [updateTable, setUpdateTable] = useState<boolean>(true);
    const [checkVal, setCheckVal] = useState<boolean>(true);

    function handleSelectTarget(e: any) {
        e.preventDefault();

        // If you want to get the target index value using html tag, you can use
        /*
        const targetTr = document.querySelectorAll('.my-table tbody > tr');
        const specIds: any[] = [];
        [].slice.call(targetTr).forEach((node: any, i: number) => {
            const checkboxDiv = node.querySelector('th');
            if (checkboxDiv !== null && checkboxDiv.classList.contains('is-target')) {
                specIds.push({
                    index: i,
                    value: val
                });
            }
        });
        */


            
        // trigger target checkbox
        if (tableCheckRef.current !== null) {
            tableCheckRef.current.check([
                {
                    index: 1,
                    value: checkVal
                },
                {
                    index: 3,
                    value: checkVal
                },
                {
                    index: 5,
                    value: checkVal
                }
            ], (res: any[]) => {
                console.log(res);
                /*
                [
                    {
                        "index": 1,
                        "key": "row-1",
                        "name": "checkbox--r0--row-1",
                        "content": [
                            "",
                            "02",
                            "Tom McFarlin",
                            "Pictures are worth a thousand words, right? So Tom x 1,000."
                        ]
                    },
                    {
                        "index": 3,
                        "key": "row-3",
                        "name": "checkbox--r0--row-3",
                        "content": [
                            "",
                            "04",
                            "David Lin",
                            "Because that’s all Steve Job’ needed for a salary."
                        ]
                    },
                    {
                        "index": 5,
                        "key": "row-5",
                        "name": "checkbox--r0--row-5",
                        "content": [
                            "",
                            "06",
                            "Chris Ames",
                            "With hair like that?! Enough said…"
                        ]
                    }
                ]
                */
            });
            
            setCheckVal(!checkVal);
            setUpdateTable(!updateTable);
        }
      
    }

    return (
        <>

            <a href="#" onClick={handleSelectTarget}>Select items 1, 3, and 5</a>

            <div className="my-table">
                <MemoTable tableCheckRef={tableCheckRef} data={data} updateTable={updateTable} />
            </div>


        </>
    );
}
```





## Table Cell Editable


```js
import { useEffect, useState, useRef, useMemo } from "react";

// bootstrap components
import Table from 'funda-ui/Table';

// component styles
import 'funda-ui/Table/index.css';



const EditableCell = (props: any) => {

    const {
        uid,
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
                        data-uid={`${uid}`}
                        data-col={colIndex}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const newValue = e.target.value;
                            setCurVal(newValue);
                            onChange?.(e.target.dataset.uid, e.target.dataset.col, newValue);
                            
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


// DO NOT move `useMemo` to component
function MemoTable(props: any) {
    const {data} = props;
    return useMemo(() => {
        return <Table
                    headClassName="table-light"
                    tableClassName="table table-hover table-bordered table-striped"
                    enhancedResponsive={true}
                    cellAutoWidth

                    // Special note: the `data` parameter passed in must be written on the `fields` attribute.
                    data={{
                        "headers": [
                            {"content": 'Id', "style": { minWidth: '150px', fontSize: '0.875em', position: 'sticky', top: '0', zIndex: 3, background: '#fff' }, "data": JSON.stringify({param1: 1, param2: 1}) },
                            {"content": 'Name', "style": { minWidth: '250px', fontSize: '0.875em', position: 'sticky', top: '0', zIndex: 3, background: '#fff' }, "data": JSON.stringify({param1: 2, param2: 2}) }
                        ],
                        "fields": data.map((item: any, i: number) => {
                            return [
                                { "cols": 1, "style": { fontWeight: 'normal' }, "content": item.id, "data": JSON.stringify(item) },
                                { "cols": 1, "content": <>
                                    <EditableCell
                                        uid={item.id}
                                        colIndex={i}
                                        defaultValue={item.name}
                                        onChange={(uid: string, col: number, value: string) => {
                                            console.log(uid, col, value);
                                        }}
                                    />
                                </>, "data": JSON.stringify(item) }
                            ];
                        })
                    }}
                />
    }, [data]);
}



const Main = (props: any) => {

    const {
        otherdeps
    } = props;

    const [tableData, setTableData] = useState<any[]>([]);

    useEffect(() => {
        
        // set a default request
        setTableData([
            {id: "01", name: "David Lin"},
            {id: "02", name: "Tom McFarlin"},
            {id: "03", name: "Chris Ames"}
        ]);

    }, [otherdeps]); // The Main component will be re-rendered due to `otherdeps`


    return (
        <>

            <MemoTable 
                data={tableData} 
            />

        </>
    );


}

export default Main;
```
