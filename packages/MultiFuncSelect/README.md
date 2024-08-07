# Multifunction Select



## General

You need to use a `fetchCallback` property to format the data of the API callback, which will match the data structure of the component.


```js
import React from "react";
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';
import axios from 'axios';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';

class DataService {
    
    // `getList()` must be a Promise Object
    async getList(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        return {
            code: 0,
            message: 'OK',
            data: [
                {item_name: 'foo', item_code: 'bar', kb_code: 'fb,foobar'},
                {item_name: 'foo2', item_code: 'bar2', kb_code: 'fb2,foobar2'},
                {item_name: 'foo3', item_code: 'bar3', kb_code: 'fb3,foobar3'}
            ]
        };
    }


    async getListUseAxios(searchStr = '', limit = 0) {
        let _data = null;
        const res = await axios.get(`https://api`, {
            params: {
                s: searchStr,
                limit: limit
            },
            headers: {
                'Authorization': 'Bearer xxxx-xxxxxxxx-xxxxxxxx'
                'Content-Type': 'application/json'
            }
        }).catch(function (error) {
            console.log(error);
        });

        if (res && res.status == 200) _data = res.data;


        // result
        if (_data === null) {
            return {
                code: 0,
                message: 'OK',
                data: []
            };
        } else {
            return {
                code: 0,
                message: 'OK',
                data: _data
            };
        }

    }

    	
}

export default () => {
 
    return (
        <>



            <h3>Normal (Single selection and Multiple selection)</h3>
            {/* ================================================================== */}
            <MultiFuncSelect
                cleanTrigger={{valid: true, cleanValueLabel: 'Clean'}}
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={() => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                    /*
                    <input ... value=​"[Option 3]​[Option 2]​[Option 1]​">​ 
                    <input ... value=​"[value-3]​[value-2]​[value-1]​">​ 
                    {
                        labels: ['Option 3', '<del style=color:red>deprecate</del>Option 2', 'Option 1']labelsOfString: "[Option 3][<del style=color:red>deprecate</del>Option 2][Option 1]", 
                        values: ['value-3', 'value-2', 'value-1'], 
                        labelsOfString: '[Option 3][<del style=color:red>deprecate</del>Option 2][Option 1]', 
                        valuesOfString: '[value-3][value-2][value-1]'
                    }
                    */
                }}
            />


            <MultiFuncSelect
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={() => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"},
                    {"label": "Option 2","listItemLabel":"<del style=color:red>deprecate</del>Option 2 (No: 002)","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","listItemLabel":"Option 3 (No: 003)","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","listItemLabel":"Option 4 (No: 004)","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />



            <MultiFuncSelect
                value="[1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][17][18][19][20]"
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all options",
                    data: {
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => v.toString()),
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => v.toString()),
                        queryStrings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => ''),
                    }
                }}
                placeholder="Select"
                name="name"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { "label": `${i}`, "value": `${i}`, "queryString": "" }
                })}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />



            <h3>Single selection (automatically trigger request)</h3>
            {/* ================================================================== */}
            <MultiFuncSelect
                value="bar2"
                placeholder="Select"
                name="name"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 

                    console.log(formattedData);
                    /*
                    [
                        {"label": "foo","value": "bar","queryString": "fb,foobar"},
                        {"label": "foo2","value": "bar2","queryString": "fb2,foobar2"},
                        {"label": "foo3","value": "bar3","queryString": "fb3,foobar3"}
                    ]   
                    */

                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />


            <h3>Single selection (manual trigger request)</h3>
            <p>Using "fetchTrigger" and "fetchTriggerForDefaultData" parameters</p>
            {/* ================================================================== */}
            <MultiFuncSelect
                value="bar2"
                placeholder="Search Options"
                name="name"
                data="mydata"
                fetchUpdate={true}
                fetchTrigger={true}
                fetchTriggerForDefaultData={{
                    values: ['bar2'],
                    labels: ['foo2'],
                    queryStrings: ['fb2,foobar2']
                }}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['$QUERY_STRING',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />



            <h3>Multiple selection (automatically trigger request)</h3>
            {/* ================================================================== */}
            <MultiFuncSelect
                value="[bar2]"
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all options",
                    data: {
                        values: ['bar2'],
                        labels: ['foo2'],
                        queryStrings: ['fb2,foobar2']
                    }
                }}
                name="target_user_id"
                placeholder="Select"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />
           

            <h3>Multiple selection (manual trigger request)</h3>
            <p>Using "fetchTrigger" and "fetchTriggerForDefaultData" parameters</p>
            {/* ================================================================== */}  
            <MultiFuncSelect
                value="[bar2]"
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all options",
                    data: {
                        values: ['bar2'],
                        labels: ['foo2'],
                        queryStrings: ['fb2,foobar2']
                    }
                }}
                name="target_user_id"
                placeholder="Select"
                fetchUpdate={true}
                fetchTrigger={true}
                fetchTriggerForDefaultData={{
                    values: ['bar2'],
                    labels: ['foo2'],
                    queryStrings: ['fb2,foobar2']
                }}
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['$QUERY_STRING',0]}
                fetchCallback={(res) => {

                    const formattedData = res.map((item) => {
                        return {
                            label: item.item_name,
                            value: item.item_code,
                            queryString: item.kb_code
                        }
                    }); 
                    return formattedData;
                }}
                onFetch={(e, e2, value, res, data) => {
                    console.log('onFetch: ', e, e2, value, res, data);
                }}
            />

        </>
    );
}
```


## No spacing

```js
import React from "react";
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';

export default () => {


    return (
        <>

            <MultiFuncSelect
                ...
                wrapperClassName="position-relative"
                ...
            />

             <MultiFuncSelect
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```


## Multi-Level Cascading Select (Implemented using `useState()`)


```js
import React from "react";
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';

class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        const demoData = [
            {
                "parent_id": 0,
                "item_code": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "item_code": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }


    // `getListSecond()` must be a Promise Object
    async getListSecond(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 1,
                "item_code": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "item_code": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "item_code": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }

    // `getListThird()` must be a Promise Object
    async getListThird(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 5,
                "item_code": 6,
                "item_name": "Title 6",
                "item_type": "dev"
            },
            {
                "parent_id": 5,
                "item_code": 7,
                "item_name": "Title 7",
                "item_type": "dev"
            },
            {
                "parent_id": 3,
                "item_code": 8,
                "item_name": "Title 8",
                "item_type": "web/ui"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }
}


export default () => {

    const service = new DataService;

    const [secondValue, setSecondValue] = useState<string>('');
    const [thirdValue, setThirdValue] = useState<string>('');

    const [secondOptions, setSecondOptions] = useState<string>('');
    const [thirdOptions, setThirdOptions] = useState<string>('');

    function toSlug(str: string) {

        return str
            .toString()
            .replace(/[^\w\s\-！￥【】\u4e00-\u9eff]/gi, '')
            .replace(/\s/g, '-')
            .replace(/(\-){2,}/g, '-')
            .replace(/\-\s*$/, '')
            .toLowerCase();
    };
    
    

    return (
        <>

            <MultiFuncSelect
                placeholder="Select"
                name="name-1"
                label="Level 1"
                fetchFuncAsync={service}
                fetchFuncMethod="getListFirst"
                fetchFuncMethodParams={['', 0, 1]}
                fetchCallback={(res) => {
                    const formattedData = res.map((item: any) => {
                        return {
                            label: item.item_name,
                            value: toSlug(item.item_name),
                            queryString: '',
                            queryId: item.item_code
                        }
                    }); 
                    return formattedData;
                }}
                onChange={(e: any, e2: any, val: any) => {
                    const queryId = val.queryId;

                    // value of "name-2" and "name-3"
                    setSecondValue('');
                    setThirdValue('');
                    setThirdOptions('');


                    // options of "name-2"
                    service.getListSecond('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setSecondOptions(JSON.stringify(formattedData));

                    });
                  
                }}
            />


            <MultiFuncSelect
                value={secondValue}
                placeholder="Select"
                name="name-2"
                label="Level 2"
                options={secondOptions}
                onChange={(e: any, e2: any, val: any) => {
                    const queryId = val.queryId;
                
                    // value of "name-3"
                    setThirdValue('');

                    // options of "name-3"
                    service.getListThird('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setThirdOptions(JSON.stringify(formattedData));


                    });  
                }}
            />


            <MultiFuncSelect
                value={thirdValue}
                placeholder="Select"
                name="name-3"
                label="Level 3"
                options={thirdOptions}
            />



        </>
    );
}
```



## Multi-Level Cascading Select (Implemented using `data-options` of component)

It is usually used for complex cascading `<MultiFuncSelect />` components


```js
import React from "react";
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';

class DataService {
    
    // `getListFirst()` must be a Promise Object
    async getListFirst(searchStr = '', limit = 0, otherParam = '') {

        console.log('searchStr: ', searchStr);
        console.log("limit: ", limit);
        console.log("otherParam: ", otherParam);

        const demoData = [
            {
                "parent_id": 0,
                "item_code": 1,
                "item_name": "Title 1",
                "item_type": "web"
            },
            {
                "parent_id": 0,
                "item_code": 2,
                "item_name": "Title 2",
                "item_type": "dev"
            }
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }


    // `getListSecond()` must be a Promise Object
    async getListSecond(searchStr = '', limit = 0, parentId = 0) {

        console.log("parentId: ", parentId);

        const demoData = [
            {
                "parent_id": 1,
                "item_code": 3,
                "item_name": "Title 3",
                "item_type": "web/ui"
            },
            {
                "parent_id": 1,
                "item_code": 4,
                "item_name": "Title 4",
                "item_type": "web/ui"
            },
            {
                "parent_id": 2,
                "item_code": 5,
                "item_name": "Title 5",
                "item_type": "dev"
            }
        ];   

        const res = demoData.filter( item => {
            return item.parent_id == parentId;
        } );

        return {
            code: 0,
            message: 'OK',
            data: res
        };
    }

}


export default () => {

    const service = new DataService;
    const [dynamicData, setDynamicData] = useState<string>('');

    function toSlug(str: string) {

        return str
            .toString()
            .replace(/[^\w\s\-！￥【】\u4e00-\u9eff]/gi, '')
            .replace(/\s/g, '-')
            .replace(/(\-){2,}/g, '-')
            .replace(/\-\s*$/, '')
            .toLowerCase();
    };
    
    return (
        <>

            <MultiFuncSelect
                placeholder="Select"
                name="name-1"
                label="Level 1"
                fetchFuncAsync={service}
                fetchFuncMethod="getListFirst"
                fetchFuncMethodParams={['', 0, 1]}
                fetchCallback={(res) => {
                    const formattedData = res.map((item: any) => {
                        return {
                            label: item.item_name,
                            value: toSlug(item.item_name),
                            queryString: '',
                            queryId: item.item_code
                        }
                    }); 
                    return formattedData;
                }}
                onChange={(e: any, e2: any, val: any) => {
                    const queryId = val.queryId;


                    // options of "name-2"
                    service.getListSecond('', 0, queryId).then((res: any) => {
                        const formattedData = res.data.map((item: any) => {
                            return {
                                label: item.item_name,
                                value: toSlug(item.item_name),
                                queryString: '',
                                queryId: item.item_code
                            }
                        }); 

                        setDynamicData(queryId);
                        document.querySelector(`#select-level-2`).dataset.options = JSON.stringify(formattedData);

                    });
                  
                }}
            />


            <MultiFuncSelect
                id="select-level-2"
                value={''}
                data={dynamicData}  // `data` attribute will trigger component update
                placeholder="Select"
                name="name-2"
                label="Level 2"
                options={''}
                
            />

        </>
    );

}
```







## Convert raw data into a tree structure

Set hierarchical categories ( with sub-categories ) to attribute `options`.


```js
import React, { useEffect, useState } from "react";
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';



class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parent_id": 0,
                "id": 1,
                "label": "Top level 1",
                "value": 'level-1',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 2,
                "label": "Top level 2",
                "value": 'level-2',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 3,
                "label": "Top level 3",
                "value": 'level-3',
                "queryString": "",
            },
            // level 2
            {
                "parent_id": 3,
                "id": 4,
                "label": "Sub level 3_1",
                "value": 'level-3_1',
                "queryString": ""
            },
            {
                "parent_id": 1,
                "id": 5,
                "label": "Sub level 3_2",
                "value": 'level-3_2',
                "queryString": "",
            },
            {
                "parent_id": 2,
                "id": 6,
                "label": "Sub level 3_3",
                "value": 'level-3_3',
                "queryString": ""
            },
            // level 3
            {
                "parent_id": 5,
                "id": 7,
                "label": "Sub level 3_2_1",
                "value": 'level-3_2_1',
                "queryString": ""
            },  
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}


export default () => {

    const [data, setData] = useState<any[]>([]);

    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr, parentId = '', keyId = 'id', keyParentId = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter(item => !item[keyParentId]).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter(item => item[keyParentId] === parentId).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        }
    }

    useEffect(() => {
        new DataService().getList('', 0, '').then((response: any) => {
      
            const _data: any[] = response.data.map((item: any, i: number) => {
                return {
                    id: item.id,
                    parent_id: item.parent_id,
                    label: `${item.label}`,
                    value: `${item.value}`,
                    queryString: `${item.queryString}`
                }
            });
         

            const treeData = convertTree(_data);
            /*
            [{
                label: "Top level 1",
                value: 'level-1',
                queryString: ""
                
            },
            {
                label: "Top level 2",
                value: 'level-2',
                queryString: ""
                
            },
            {
                label: "Top level 3",
                value: 'level-3',
                queryString: "",
                children: [{
                    label: "Sub level 3_1",
                    value: 'level-3_1',
                    queryString: ""
                },
                {
                    label: "Sub level 3_2",
                    value: 'level-3_2',
                    queryString: "",
                    children: [{
                        label: "Sub level 3_2_1",
                        value: 'level-3_2_1',
                        queryString: ""
                    }]
                },
                {
                    label: "Sub level 3_3",
                    value: 'level-3_3',
                    queryString: ""
                }]
            }]
            */
            setData(treeData);
            
            // do something, such as update `<Scrollbar />`
            // ...

        });
    }, []);


    return (
        <>

            <MultiFuncSelect
                hierarchical={true}
                value="level-3_2_1"
                placeholder="Select"
                name="name"
                options={JSON.stringify(data)}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />

            <MultiFuncSelect
                hierarchical={true}
                value="[level-1][level-3_1]"
                multiSelect={{
                    valid: true, 
                    selectAll: true, 
                    selectAllLabel: "Select all options",
                    data: {
                        values: ['level-1','level-3_1'],
                        labels: ['Top level 1','Sub level 3_1'],
                        queryStrings: ['','']
                    }
                }}
                placeholder="Select"
                name="name"
                options={JSON.stringify(data)}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />



        </>
    )
}
```

Automatic fetch request:

```js
import React from "react";
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';

class DataService {

    // `getList()` must be a Promise Object
    async getList(searchStr: string = '', limit: number = 0, otherParam: string = '') {

        const demoData = [
            // level 1
            {
                "parent_id": 0,
                "id": 1,
                "label": "Top level 1",
                "value": 'level-1',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 2,
                "label": "Top level 2",
                "value": 'level-2',
                "queryString": ""
            },
            {
                "parent_id": 0,
                "id": 3,
                "label": "Top level 3",
                "value": 'level-3',
                "queryString": "",
            },
            // level 2
            {
                "parent_id": 3,
                "id": 4,
                "label": "Sub level 3_1",
                "value": 'level-3_1',
                "queryString": ""
            },
            {
                "parent_id": 1,
                "id": 5,
                "label": "Sub level 3_2",
                "value": 'level-3_2',
                "queryString": "",
            },
            {
                "parent_id": 2,
                "id": 6,
                "label": "Sub level 3_3",
                "value": 'level-3_3',
                "queryString": ""
            },
            // level 3
            {
                "parent_id": 5,
                "id": 7,
                "label": "Sub level 3_2_1",
                "value": 'level-3_2_1',
                "queryString": ""
            },  
        ];   

        return {
            code: 0,
            message: 'OK',
            data: demoData
        };
    }

}

export default () => {

    /**
     * Convert Tree
     * @param {Array} arr                    - Input array to convert
     * @param  {?String | ?Number} parentId  - Parent id
     * @param  {?String} keyId               - Key value of id.
     * @param  {?String} keyParentId         - Key value of parent id.
     * @returns Array
     */
    function convertTree(arr, parentId = '', keyId = 'id', keyParentId = 'parent_id') {
        
        if( !parentId ) {
            
            // If there is no parent id (when recursing for the first time), all parents will be queried
            return arr.filter(item => !item[keyParentId]).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        } else {
            return arr.filter(item => item[keyParentId] === parentId).map(item => {
                // Query all child nodes by parent node ID
                item.children = convertTree(arr, item[keyId], keyId, keyParentId);
                return item;
            })
        }
    }

    return (
        <>

            
            <MultiFuncSelect
                hierarchical={true}
                doubleIndent={true}
                indentation="-"
                value="[level-1][level-3_1]"
                multiSelect={{
                    valid: true, 
                    selectAll: true, 
                    selectAllLabel: "Select all options",
                    data: {
                        values: ['level-1','level-3_1'],
                        labels: ['Top level 1','Sub level 3_1'],
                        queryStrings: ['','']
                    }
                }}
                placeholder="Select"
                name="name"
                fetchFuncAsync={new DataService}
                fetchFuncMethod="getList"
                fetchFuncMethodParams={['', 0, '']}
                fetchCallback={(res) => {
                    const formattedData = res.map((item: any) => {
                        return {
                            id: item.id,
                            parent_id: item.parent_id,
                            label: item.label,
                            value: item.value,
                            queryString: item.queryString
                        }
                    });

                    const treeData = convertTree(formattedData);
               
                    treeData.unshift({
                        id: 0,
                        parent_id: 0,
                        label: 'Root',
                        value: '0',
                        queryString: ''
                    });


                    return treeData;
                }}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />




        </>
    );
}
```



## Only show the status of selected items for multiple selection

Set `multiSelectSelectedItemOnlyStatus` parameter.

```js
import React from "react";
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';

export default () => {
 
    return (
        <>

            <MultiFuncSelect
                value="[1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][17][18][19][20]"
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all options",
                    data: {
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => v.toString()),
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => v.toString()),
                        queryStrings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => ''),
                    }
                }}
                multiSelectSelectedItemOnlyStatus={{
                    itemsLabel: '{num} Selected',
                    allItemsLabel: 'All Content',
                    noneLabel: 'No items selected',
                }}
                placeholder="Select"
                name="name"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { "label": `${i}`, "value": `${i}`, "queryString": "" }
                })}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />

        </>
    );
}
```





## Use the exposed method to assign and empty

Lets you callback the handle exposed as attribute `contentRef`.


```js
 import React, { useState, useRef } from 'react';

import MultiFuncSelect from 'funda-ui/MultiFuncSelect';

// component styles
import 'funda-ui/MultiFuncSelect/index.css';


export default () => {

    const conRef = useRef<any>(null);
    const con2Ref = useRef<any>(null);

    return (


        <>

            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    if (conRef.current) conRef.current.clear();
                }}
            >Set Empty Value</button>

            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    if (conRef.current) conRef.current.set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') });
                }}
            >Set Custom Value</button>


            <MultiFuncSelect
                contentRef={conRef}
                value="value-2"
                placeholder="Select"
                name="name"
                winWidth={() => window.innerWidth/2 + 'px'}
                options={`
                [
                    {"label": "Option 1","value": "value-1","queryString": "option1"},
                    {"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},
                    {"label": "Option 3","value": "value-3","queryString": "option3"},
                    {"label": "Option 4","value": "value-4","queryString": "option4", "disabled":true}
                ]  
                `}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />


            <hr />


            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    if (con2Ref.current) con2Ref.current.clear();
                }}
            >Set Empty Value (multiple)</button>

            <button
                type="button" 
                onClick={(e: React.MouseEvent) => {
                    if (con2Ref.current) con2Ref.current.set([{"label": "15","listItemLabel":"15","value": "15","queryString": ""},{"label": "25","listItemLabel":"25","value": "25","queryString": ""},{"label": "33","listItemLabel":"33","value": "33","queryString": ""}], () => { console.log('callback') });
                }}
            >Set Custom Value (multiple)</button>


            <MultiFuncSelect
                contentRef={con2Ref}
                value="[1][2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][17][18][19][20]"
                multiSelect={{
                    valid: true,
                    selectAll: true,
                    selectAllLabel: "Select all options",
                    data: {
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => v.toString()),
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => v.toString()),
                        queryStrings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(v => ''),
                    }
                }}
                placeholder="Select"
                name="name"
                options={Array.from({ length: 100 }).fill(0).map((v, i) => {
                    return { "label": `${i}`, "value": `${i}`, "queryString": "" }
                })}
                onChange={(e, e2, val) => {
                    console.log(e, e2, val);
                }}
            />



        </>
    )
}
```




## Globally disable real-time search functionality (only valid for non-dynamic requests)

> [!WARNING]
> Globally disabling live search will be invalid when `fetchTrigger` exists and **true**


Prevent the keyboard from popping up when input focus is entered on mobile devices. Just add the window global variable to any page, such as:


```js
window['funda-ui__MultiFuncSelect-disable-livesearch'] = 1;
```




## API

### Multifunction Select
```js
import MultiFuncSelect from 'funda-ui/MultiFuncSelect';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It is the return element of this component.  | - |
| `contentRef` | React.ForwardedRef | - | It exposes the following methods:  <br /> <ol><li>`contentRef.current.clear(() => { console.log('callback') })`</li><li>`contentRef.current.set([{"label": "Option 1","listItemLabel":"Option 1 (No: 001)","value": "value-1","queryString": "option1"}], () => { console.log('callback') })`</li></ol> <blockquote>DO NOT USE it in the `onChange` of this component, otherwise it will cause infinite rendering</blockquote> | - |
| `popupRef` | React.ForwardedRef | - | It exposes the following methods when the component's popup opens or closes:  <br /> <ol><li>`popupRef.current.close()`</li></ol> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the control wrapper. | - |
| `controlClassName` | string | `form-control` | The class name of the control. | - |
| `controlExClassName` | string | - | The extended class name of `controlClassName`. | - |
| `exceededSidePosOffset` | number | 15 | Offset px that exceeds the far right or left side of the screen | - |
| `options` | JSON Object Literals \| JSON Object | - | Set the default value using JSON string format for menu of options, like this: `[{"label": "Option 1","value": "value-1","queryString": "option1"},{"label": "<del style=color:red>deprecate</del>Option 2","value": "value-2","queryString": "option2"},{"label": "Option 3","value": "value-3","queryString": "option3"},{"label": "Option 4","value": "value-4","queryString": "option4","disabled":true}]` <br /> <blockquote>Note: Use API data if database query exists. That is, the attribute `fetchXXXX`</blockquote> <hr /> <blockquote>When the attribute `hierarchical` is true, you need to use a hierarchical structure to pass data, such as: `[{label:"Top level 1",value:'level-1',queryString:""},{label:"Top level 2",value:'level-2',queryString:""},{label:"Top level 3",value:'level-3',queryString:"",children:[{label:"Sub level 3_1",value:'level-3_1',queryString:""},{label:"Sub level 3_2",value:'level-3_2',queryString:"",children:[{label:"Sub level 3_2_1",value:'level-3_2_1',queryString:""}]},{label:"Sub level 3_3",value:'level-3_3',queryString:""}]}]`</blockquote>| - |
| `cleanTrigger` | JSON Object | `{"valid": false, "cleanValueLabel": "Clean"}` | Enable cleanTrigger. <blockquote>**Parameters Description:** <br />`valid` -->  *(Boolean)* *(required)* Display this button that clears the existing value. It is valid when a single selection. <br />`cleanValueLabel` -->  *(String)* Sets the clean button label. (Support html tags) </blockquote> | - |
| `lockBodyScroll` | boolean  | true | Enables body scroll locking (for iOS Mobile and Tablet, Android, desktop Safari/Chrome/Firefox) without breaking scrolling of a target element. | - |
| `hierarchical` | boolean  | false | Set hierarchical categories ( with sub-categories ) to attribute `options`. | - |
| `indentation` | string  | - | Set hierarchical indentation placeholders, valid when the `hierarchical` is true. | - |
| `doubleIndent` | boolean  | false | Set double indent effect, valid when the `hierarchical` is true. | - |
| `multiSelect` | JSON Object | `{"valid": false, "selectAll": true, "selectAllLabel": "Select all options"}` | Enable multi-select. <blockquote>**Parameters Description:** <br />`valid` -->  *(Boolean)* *(required)* Set component in which multiple options can be selected at once to be valid.  <br />`selectAll` --> *(Boolean)* *(required)* Enables select all button. <br />`selectAllLabel` -->  *(String)* Sets the select all button label. (Support html tags) <br />`data` -->  *(JSON Object \| null)* *(required)* Sets a default data for control's values. (such as `{values: ['value-1','value-3'], labels: ['Option 1','Option 3'], queryStrings: ['','']}`)</blockquote> | - |
| `multiSelectSelectedItemOnlyStatus` | JSON Object | `{"itemsLabel":"{num} Selected","allItemsLabel":"All Content","noneLabel":"No items selected"}` | Let the selected options only display the status without detailed options. It is not recommended for search to trigger request. <hr /> The `{num}` is a placeholder which will be automatically replaced by a number. <blockquote>Valid when `multiSelect` parameter exists</blockquote> | - |
| `depth` | number  | 1055 | Set the depth value of the control to control the display of the pop-up layer appear above. Please set it when multiple controls are used at the same time. | - |
| `winWidth` | number \| function  | `auto` | Set the container width of options. Such as: `500px` or `() => window.innerWidth/2 + 'px'`  | - |
| `extractValueByBrackets` | boolean  | true | Whether to use square brackets to save result and initialize default value. | - |
| `value` | string | - | Set a default value for this control. If it is a multi-select (the `multiSelect` property exists), the default value will be used like `[value-1][value-2]`. <blockquote>If `extractValueByBrackets` is false and the `multiSelect` property exists, the default value will be separated by comma, such as <br />`value-1,value-2`</blockquote> | - |
| `label` | string \| ReactNode | - | It is used to specify a label for an element of a form.<blockquote>Support html tags</blockquote> | - |
| `name` | string | - | Name is not deprecated when used with form fields. | - |
| `placeholder` | string | - |  Specifies a short hint that describes. | - |
| `autoComplete` | string  | `off` | The autocomplete attribute provides a hint to the user agent specifying how to, or indeed whether to, prefill a form control. | - |
| `autoCapitalize` | string  | `off` | The autocapitalize property of the HTMLElement interface represents the element's capitalization behavior for user input. | - |
| `spellCheck` | boolean  | false | The spellcheck global attribute is an enumerated attribute that defines whether the element may be checked for spelling errors. | - |
| `readOnly` | boolean | false | When present, it specifies that this component field is read-only. | - |
| `disabled` | boolean | false | Whether it is disabled | - |
| `required` | boolean | false | When present, it specifies that a field must be filled out before submitting the form. | - |
| `controlArrow` | ReactNode  | `<svg width="10px" height="10px" viewBox="0 -4.5 20 20"><g stroke="none" strokeWidth="1" fill="none"><g transform="translate(-180.000000, -6684.000000)" className="arrow-fill-g" fill="#a5a5a5"><g transform="translate(56.000000, 160.000000)"><path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39"></path></g></g></g></svg>` | Set an arrow of control | - |
| `data`  <blockquote>You could use [key](https://react.dev/learn/rendering-lists#why-does-react-need-keys) instead of it</blockquote>  | any  | - | Incoming data, you can set the third parameter of `onFetch`. <blockquote>Changes in the `data` value will cause the component to re-render. It will be used when the value or content does not change when switching routes and needs to re-render the component or get the request.</blockquote> <hr /> <blockquote>!!!Note: Using `data` and `value` at the same time may cause two different parameter transfers, which will affect the final rendering. Please choose the appropriate usage based on your business. Generally speaking, if the `multiSelect` exists, it is not recommended to use the `data`.</blockquote>| - |
| `fetchTrigger` | boolean  | false | Use buttons to trigger data queries. | - |
| `fetchTriggerForDefaultData` | JSON Object \| null  | null | Sets a default data for control's values. (such as `{values: ['value-1','value-3'], labels: ['Option 1','Option 3'], queryStrings: ['','']}`) <br />Only takes effect when `fetchTrigger` is *true* and `value` is not empty. | - |
| `fetchNoneInfo` | string  | - | The text of the data not fetched. | - |
| `fetchUpdate` | boolean  | false | When the property is *true*, every time the input changes or the search button is clicked, a data request will be triggered. | - |
| `fetchFuncAsync` | Constructor | - | A method as a string from the constructor.  | - |
| `fetchFuncMethod` | string  | - | When the property is *true*, every time the select changes, a data request will be triggered. <br /><blockquote>The methord must be a Promise Object.</blockquote> | - |
| `fetchFuncMethodParams` | array  | - | The parameter passed by the method, it is an array. <br />Note: the first element is a query string, the second element is the number of queried data (usually a number), and then you can increase the third, or fourth, and more parameters. <br />Such as `['',0]`, `['',99,'string 1','string 2']`, `['',99,'string 1','$QUERY_STRING']` <br /><blockquote>There should be at least one parameter which is the query string. <br />`$QUERY_STRING` identifies the ID of the automatic query, and its value depends on the user input string.</blockquote> | - |
| `fetchCallback` | function  | - | Return value from `fetchCallback` property to format the data of the API callback, which will match the data structure of the component. <br />At the same time it returns the original data, you will use this function and use the `return` keyword to return a new value. | - |
| `onFetch` | function  | - | Call a function when  data is successfully fetched. It returns five callback values. <br /> <ol><li>The first is the current control</li><li>The second is the control of the value save</li><li> The third is the current value (**String**)</li><li>The fourth is the fetched data (**Array**)</li><li>The last is a string passed by the `data` attribute</li></ol> | - |
| `onLoad` | function  | - | Call a function when the component has been rendered completely. It returns three callback values. <br /> <ol><li>The first is the current control</li><li>The second is the control of the value save</li><li> The third is the current value (**String**)</li></ol> | - |
| `onChange` | function  | - | Call a function when the value of an HTML element is changed. It returns three callback values. <br /> <ol><li>The first is the current control (**HTML Element**)</li><li>The second is the control of the value save (**HTML Element**)</li><li>The last is the data [Exposes the JSON (Returns an Array Collection when `multiSelect` is enabled) format data] about the option as an argument. (**JSON Object**)</li></ol> | - |
| `onBlur` | function  | - | Call a function when a user leaves a form field. It returns only one callback value which is the Control Event (**Event**) | - |
| `onFocus` | function  | - | Call a function when an form field gets focus. It returns only one callback value which is the Control Event (**Event**)| - |


It accepts all props which this control support. Such as `style`, `data-*`, `tabIndex`, `id`, and so on.


---

JSON Object Literals configuration properties of the `options` and callback from `fetchCallback`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. <blockquote>Valid when the `hierarchical` is true</blockquote> | - |
| `parent_id` | string \| number | - | Parent ID of item. <blockquote>Valid when the `hierarchical` is true</blockquote> | - |
| `label` | string | - | Specify the label text for each option. <blockquote>Support html tags. But must have at least a string other than the HTML Tag, because the HTML Tag in this field will be sanitized when assigning the value. such as `<small>abc</small>efg`</blockquote> | ✅ |
| `listItemLabel` | string | - | Specify the label text for pop-up list items. <blockquote>Support html tags</blockquote> | - |
| `value` | string | - | Specify the value for each option | ✅ |
| `queryString` | string | - | Quick query string, such as Chinese pinyin or English initials | ✅ |
| `disabled` | boolean | - | When present, it specifies that an option should be disabled. | - |




### Create Callback 

A successful response returns the details of the callback such as Sample Request Body:

Among them, `id`, `parent_id`, `label`, `listItemLabel`, `value`, `queryString` and `disabled` are attributes used by the system, and other attributes can be added freely.


