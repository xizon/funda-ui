# DragDrop List

> Support PC and mobile sorting, icon position, double-click editing and others.

## General

Block-level dragging. You can drag an entire row of content.


```js
import React, { useState } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {

    
    const demoListFlat = [
        {
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "otherAttr": "dev"
        },
        {
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "otherAttr": "web/ui"
        },
        {
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": ""
        },
        {
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": ""
        },
        {
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": ""
        },
        {
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": ""
        }
    ];


    const [data, setData] = useState<any[]>(demoListFlat);

    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data2:', newData, curId);
    };

    return (
    <>
        <DragDropList
            data={data}
            onUpdate={handleUpdate}
            dragMode="block"
        />

        <small>{JSON.stringify(data.map((v: any) => v.id).join(', '))}</small>
    </>
    );
}
```

## Editable ROW

Double-click to edit the field for the current row.


```js
import React, { useState } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {

    
    const demoListFlat = [
        {
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "otherAttr": "dev"
        },
        {
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "otherAttr": "web/ui"
        },
        {
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": ""
        },
        {
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": ""
        },
        {
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": ""
        },
        {
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": ""
        }
    ];


    const [data, setData] = useState<any[]>(demoListFlat);

    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data2:', newData, curId);
    };

    return (
        <DragDropList
            data={data}
            onUpdate={handleUpdate}
            dragMode="block"
            editable
        />
    );
}
```


## Drag handle on the right

Only one element is allowed to be dragged.

```js
import React, { useState } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {

    
    const demoListFlat = [
        {
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "otherAttr": "dev"
        },
        {
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "otherAttr": "web/ui"
        },
        {
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": ""
        },
        {
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": ""
        },
        {
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": ""
        },
        {
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": ""
        }
    ];


    const [data, setData] = useState<any[]>(demoListFlat);

    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data2_2:', newData, curId);
    };

    return (
        <DragDropList
            data={data}
            handlePos="right"
            onUpdate={handleUpdate}
            dragMode="handle"
            editable
        />
    );
}
```




## Hide Drag handle

Block-level dragging. The drag icon is not displayed.

```js
import React, { useState } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {

    
    const demoListFlat = [
        {
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "otherAttr": "dev"
        },
        {
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "otherAttr": "web/ui"
        },
        {
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": ""
        },
        {
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": ""
        },
        {
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": ""
        },
        {
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": ""
        }
    ];


    const [data, setData] = useState<any[]>(demoListFlat);

    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data3:', newData, curId);
    };

    return (
        <DragDropList
            data={data}
            handleHide
            onUpdate={handleUpdate}
            dragMode="block"
        />
    );
}
```




## Implement custom extension controls

Use the `appendControl` property to extend each item.


```js
import React, { useState, useEffect } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {
    const [data, setData] = useState<any[]>([]);

    const demoListExt = [
        {
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "otherAttr": "dev",
            "appendControl": <>

                <div style={{
                    paddingLeft: '1rem',
                    marginRight: '1rem',
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>
                    <small style={{ color: 'red' }}>Sort:&nbsp;</small>
                    <input
                        type="text"
                        size={8}
                        style={{
                            padding: 0,
                            fontSize: '0.75rem',
                            marginRight: '.5rem',
                            background: '#ededed',
                            borderColor: 'rgba(255, 255, 255, .4)'
                        }}    
                        name="sort_no[]"
                        defaultValue="index-1"
                    />
                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert(1);
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>
                    </a>
                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();

                        // remove
                        setData((prevState: any[]) => {
                            const newData = prevState.filter((item: any) => item.id !== 1);
                            return newData;
                        });
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>
                    </a>

                </div>

            </>
        },
        {
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "otherAttr": "web/ui",
            "appendControl": <>

                <div style={{
                    paddingLeft: '1rem',
                    marginRight: '1rem',
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>
                    <small style={{ color: 'red' }}>Sort:&nbsp;</small>
                    <input
                        type="text"
                        size={8}
                        style={{
                            padding: 0,
                            fontSize: '0.75rem',
                            marginRight: '.5rem',
                            background: '#ededed',
                            borderColor: 'rgba(255, 255, 255, .4)'
                        }}    
                        name="sort_no[]"
                        defaultValue="index-2"
                    />
                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert(2);
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>
                    </a>
                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();

                        // remove
                        setData((prevState: any[]) => {
                            const newData = prevState.filter((item: any) => item.id !== 2);
                            return newData;
                        });
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>
                    </a>

                </div>

            </>
        },
        {
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": "",
            "appendControl": <>

                <div style={{
                    paddingLeft: '1rem',
                    marginRight: '1rem',
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>
                    <small style={{ color: 'red' }}>Sort:&nbsp;</small>
                    <input
                        type="text"
                        size={8}
                        style={{
                            padding: 0,
                            fontSize: '0.75rem',
                            marginRight: '.5rem',
                            background: '#ededed',
                            borderColor: 'rgba(255, 255, 255, .4)'
                        }}    
                        name="sort_no[]"
                        defaultValue="index-3"
                    />
                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert(3)
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>
                    </a>
                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();

                        // remove
                        setData((prevState: any[]) => {
                            const newData = prevState.filter((item: any) => item.id !== 3);
                            return newData;
                        });
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>
                    </a>

                </div>

            </>
        },
        {
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": "",
            "appendControl": <>


                <div style={{
                    paddingLeft: '1rem',
                    marginRight: '1rem',
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}>
                    <small style={{ color: 'red' }}>Sort:&nbsp;</small>
                    <input
                        type="text"
                        size={8}
                        style={{
                            padding: 0,
                            fontSize: '0.75rem',
                            marginRight: '.5rem',
                            background: '#ededed',
                            borderColor: 'rgba(255, 255, 255, .4)'
                        }}    
                        name="sort_no[]"
                        defaultValue="index-4"
                    />

                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert(4)
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg>
                    </a>
                    &nbsp;&nbsp;

                    <a href="#" onClick={(e: React.MouseEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // remove
                        setData((prevState: any[]) => {
                            const newData = prevState.filter((item: any) => item.id !== 4);
                            return newData;
                        });
                    }}>
                        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>
                    </a>



                </div>

            </>
        },
        {
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": "",
            "disabled": true
        },
        {
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": ""
        }
    ];


    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data4:', newData, curId);
    };

    useEffect(() => {
        setData(demoListExt);
    }, []);

    return (
        <DragDropList
            data={data}
            handleHide
            onUpdate={handleUpdate}
            dragMode="block"
        />
    ); 
}
```

# No dragging


```js
import React, { useState } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {

    
    const demoListFlat = [
        {
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "otherAttr": "dev"
        },
        {
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "otherAttr": "web/ui"
        },
        {
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": ""
        },
        {
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": ""
        },
        {
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": ""
        },
        {
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": ""
        }
    ];

    const [data, setData] = useState<any[]>(demoListFlat);

    return (
        <DragDropList
            data={data}
            draggable={false}
        />
    );
}
```



## Tree Hierarchy

Use `parentId` to do a one-to-one correspondence.

```js
import React, { useState } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {
    const demoList = [
        // level 1
        {
            "parentId": 0,
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "typeName": "web"
        },
        {
            "parentId": 0,
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "typeName": "dev"
        },
        // level 2
        {
            "parentId": 1,
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": "",
            "typeName": "web/ui",
            "itemDraggable": false
        },
        {
            "parentId": 1,
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": "",
            "typeName": "web/ui",
            "itemDraggable": false
        },
        {
            "parentId": 2,
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": "",
            "typeName": "dev",
            "itemDraggable": false
        },
        // level 3
        {
            "parentId": 4,
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": "",
            "typeName": "web/ui/photoshop",
            "itemDraggable": false
        }
    ];
    const [data, setData] = useState<any[]>(demoList);

    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data1:', newData, curId);
    };

    return (
        <DragDropList
            data={data}
            onUpdate={handleUpdate}
            dragMode="handle"
        />
    );

}
```




## Collapsible Tree Hierarchy

Click the small arrows to show and hide child nodes

```js
import React, { useState } from "react";
import DragDropList from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {
    const demoList = [
        // level 1
        {
            "parentId": 0,
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "typeName": "web"
        },
        {
            "parentId": 0,
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "typeName": "dev"
        },
        // level 2
        {
            "parentId": 1,
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": "",
            "typeName": "web/ui",
            "itemDraggable": false
        },
        {
            "parentId": 1,
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": "",
            "typeName": "web/ui",
            "itemDraggable": false
        },
        {
            "parentId": 2,
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": "",
            "typeName": "dev",
            "itemDraggable": false
        },
        // level 3
        {
            "parentId": 4,
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": "",
            "typeName": "web/ui/photoshop",
            "itemDraggable": false
        }
    ];
    const [data, setData] = useState<any[]>(demoList);

    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data1_2:', newData, curId);
    };

    return (
        <DragDropList
            data={data}
            onUpdate={handleUpdate}
            dragMode="handle"
            alternateCollapse
        />
    );

}
```




## Customize option rendering

`renderOption` callback allows you to customize the UI style for the output of each option.

```js
import React, { useState } from "react";
import DragDropList, { ListItem } from 'funda-ui/DragDropList';

// component styles
import 'funda-ui/DragDropList/index.css';

export default () => {

    
    const demoListFlat = [
        {
            "id": 1,
            "label": "Title 1",
            "listItemLabel": "Title 1",
            "value": "1",
            "queryString": "",
            "otherAttr": "dev"
        },
        {
            "id": 2,
            "label": "Title 2",
            "listItemLabel": "Title 2",
            "value": "2",
            "queryString": "",
            "otherAttr": "web/ui"
        },
        {
            "id": 3,
            "label": "Title 3",
            "listItemLabel": "Title 3",
            "value": "3",
            "queryString": ""
        },
        {
            "id": 4,
            "label": "Title 4",
            "listItemLabel": "Title 4",
            "value": "4",
            "queryString": ""
        },
        {
            "id": 5,
            "label": "Title 5",
            "listItemLabel": "Title 5",
            "value": "5",
            "queryString": ""
        },
        {
            "id": 6,
            "label": "Title 6",
            "listItemLabel": "Title 6",
            "value": "6",
            "queryString": ""
        }
    ];


    const [data, setData] = useState<any[]>(demoListFlat);

    const handleUpdate = (newData: any, curId: number) => {
        setData(newData);
        console.log('Updated data2:', newData, curId);
    };

    return (
        <DragDropList
            data={data}
            onUpdate={handleUpdate}
            dragMode="handle"
            renderOption={(item: ListItem, dragHandleClassName: string, index: number) => {
                return <div style={item.disabled ? {pointerEvents: 'none', opacity: .3} : undefined}>
                    <em>{index}. </em>
                    <strong style={{position: 'relative'}}>
                        {item.label} 
                        {/* Use dragHandle to reference a custom element */}
                        <span 
                            style={{marginLeft: '10px', cursor: 'move', display: 'inline-block'}} 
                            className={dragHandleClassName}
                            draggable={true}
                        >
                            <svg width="15px" height="15px" viewBox="0 0 16 16" fill="none">
                                <path d="M8 0L2 6V7H14V6L8 0Z" fill="#f60"/>
                                <path d="M8 16L2 10V9H14V10L8 16Z" fill="#f60"/>
                            </svg>
                        </span>
                    </strong>
                    <div><small style={{color: 'gray'}}>value: {item.value}</small></div>
                </div>;
            }}
        />
    );
}
```



## ❤️ API

### DragDrop List
```js
import DragDropList from 'funda-ui/DragDropList';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `wrapperClassName` | string | `mb-3` | The class name of the control wrapper. | - |
| `prefix` | string | `custom` | Add the appropriate prefix to the component style, the default style is similar `custom-draggable-list`. This is done in order to customize the style when embedding other components | - |
| `dragMode` | `handle` \| `block` | `handle` | Whether it is triggered using a handle or a whole area. | - |
| `editable` | boolean  | false | Double-click the editable field. | - |
| `itemStyle` | CSSProperties  | - | Custom styles for each item. | - |
| `draggable` | boolean | true | Indicates whether the content area can be dragged. | - |
| `handleHide` | boolean | false | Hide the drag handle. | - |
| `handlePos` | `left` \| `right`| `left` | The drag handle position. | - |
| `handleIcon` | string  | `☰` | Specify an icon of drag handle. | - |
| `hierarchical` | boolean  | true | Whether the parent ID and ID of each item are displayed as hierarchical relationships. | - |
| `indentation` | string  | - | Set hierarchical indentation placeholders. | - |
| `doubleIndent` | boolean  | false | Set double indent effect. | - |
| `alternateCollapse` | boolean | false | Mutually exclusive alternate expansion between the first levels. | - |
| `arrow` | ReactNode  | `<svg viewBox="0 0 22 22" width="8px"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5" /></svg>` | Set an arrow of control | - |
| `data` | JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"id":1,"label":"Title 1","listItemLabel":"Title 1","value":1,"queryString":"","disabled":true},{"id":2,"label":"Title 2","listItemLabel":"Title 2","value":2,"queryString":"","otherAttr":"web/ui"}]`| - |
| `onUpdate` | function  | - |  Call a function when  data is updated. It returns two callback values. <br /> <ol><li>The first is the updated data (**Array**)</li><li>The second is the current item id (**Number**)</li></ol>| - |
| `renderOption` | function  | - | A function to render content of the option, replaces the default content of the option. It passes two parameters. <br /> <ol><li>The first is the option data (**JSON Object**)</li><li>The second is the classname of drag handle (**String**)</li><li>The third is the index of the current option (**Number**)</li></ol>| - |

---

Array Object configuration properties of the `data` (**Array**):


| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. | ✅ |
| `parentId` | string \| number | - | Parent ID of item. <blockquote>`parentId` and `id` can be used to build a tree structure and achieve hierarchical relationships. </blockquote> | - |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags. But must have at least a string other than the HTML Tag, because the HTML Tag in this field will be sanitized when assigning the value. such as `<small>abc</small>efg`</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `queryString` | string | - | Quick query string, such as Chinese pinyin or English initials | ✅ |
| `disabled` | boolean | false | When present, it specifies that an option should be disabled. | - |
| `itemDraggable` | boolean | true | Indicates whether the current item can be dragged. When set to `false`, the item will not be draggable. | - |
| `appendControl` | ReactNode  | - | An extension of the same level, It can usually be used for complex content, such as \<input \> | - |


> Among them, `id`, `parentId`, `label`, `listItemLabel`, `value`, `queryString`, `disabled` and `appendControl` are attributes used by the system, and other attributes can be added freely.



```json
[
    {
        "parentId": 0,
        "id": 1,
        "label": "banana",
        "listItemLabel": "banana (No. 0)",
        "value": "b",
        "queryString": "banana,xiangjiao,xj",
        "disabled": false
    },
    {
        "parentId": 0,
        "id": 2,
        "label": "apple",
        "listItemLabel": "apple (No. 1)",
        "value": "a",
        "queryString": "apple,pingguo,pg",
        "disabled": false
    },
    {
        "parentId": 1,
        "id": 3,
        "label": "lemon",
        "listItemLabel": "lemon (No. 3)",
        "value": "a",
        "queryString": "lemon,lingmeng,lm",
        "disabled": false,
        "itemDraggable": false
    },
    ...
]
```