# Table


## API

### Table
```js
import Table from 'react-pure-bootstrap/Table';
```
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the table wrapper. |
| `tableClassName` | string | `table` | The class name of the table wrapper. |
| `bodyClassName` | string | - | The class name of `<tbody>`. |
| `headClassName` | string | - | The class name of `<thead>`. |
| `footClassName` | string | - | The class name of `<tfoot>`. |
| `data` | JSON Object Literals | - | Specify data of Table as a JSON string format. Such as: <br />**usage 1:**<br />`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]}` <br />**usage 2:**<br />`{"headers": ["No.","Name"],"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]};` <br />**usage 3:**<br />`{"fields":[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }],[{"cols": 4, "content": <><strong style={{background:"yellow"}}>A table cell that spans <span style={{color:"red"}}>4</span> columns</strong></> }]]}` |
| `bordered` | boolean  | false | Adds borders on all sides of the table and cells |
| `colGroup` | boolean  | false | Set the background color of the multiple columns with the `<colgroup>` and `<col>` tags |
| `responsive` | boolean  | false | Create normal responsive tables up to a particular breakpoint. |
| `enhancedResponsive` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. |
| `enhancedResponsiveWithScrollBar` | boolean  | false | Create enhanced responsive tables up to a particular breakpoint. This property allows scroll bars to be created automatically in the table. <br />**Only one of the `responsive` and `responsiveWithScrollBar` properties is allowed, and both are invalid if set to true.** |



JSON configuration properties of the `data`:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `fields` | array | - | Table rows and columns. The key `cols` identifies the column (change the value if the column is merged). The key `content` to place the content of each cell. Eg. `[[{"cols": 1, "content": "01" },{"cols": 1, "content": "David Lin" }],[{"cols": 1, "content": "02" },{"cols": 1, "content": "Tom McFarlin" }]]` |
| `headers` | array | - | Defines a header cell in an HTML table. Eg. `["No.","Name"]` |



## Examples

```js
import React from "react";
import Table from 'react-pure-bootstrap/Table';

// component styles
import 'react-pure-bootstrap/Table/index.css';


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
	"headers": ["No.","Name",""],
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
	],
	"summaries": ["Text 1","Text 2","Text 3"],
};

const tableData3 = {
	"headers": ["No.","Name","Email"],
	"fields": [
		[
		   {"cols": 1, "content": "01" },
		   {"cols": 1, "content": "David Lin" },
		   {"cols": 1, "content": "aaa@gmail.com"}
		],
		[
		   {"cols": 1, "content": "02" },
		   {"cols": 1, "content": "Tom McFarlin" },
		   {"cols": 1, "content": "bbb@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "03" },
		   {"cols": 1, "content": "Chris Ames" },
		   {"cols": 1, "content": "ccc@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "04" },
		   {"cols": 1, "content": "Dr. Wolverine Longer Text Test" },
		   {"cols": 1, "content": "ddd@gmail.com"}
		],	
		[
		   {"cols": 1, "content": "05" },
		   {"cols": 1, "content": "Foristin" },
		   {"cols": 1, "content": "eee@gmail.com"}
		]
	]
};


const tableData4 = {
	"headers": ["No.","Name","Email","Phone"],
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
            />
            
            <Table 
                bodyClassName="table-group-divider" 
                data={tableData2} 
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


            <h3>Normal Responsive</h3>
            {/* ================================================================== */}
            <Table 
                responsive={true} 
                data={tableData3} 
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
                enhancedResponsiveWithScrollBar={true} 
                data={tableData3} 
            />

          
        </>
    );
}
```