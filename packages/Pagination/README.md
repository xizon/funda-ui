# Pagination


## General

```js
import React from "react";
import Pagination from 'funda-ui/Pagination';


export default () => {

  function gotoPageNumber( number, total ) {
    //`number` comes from the public parameter thrown by the component `<Pagination />`
    console.log( `page number: ${number}`, total );
        
  }

  return (
    <>

      <h3>Basic</h3>
      {/* ================================================================== */} 

     <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={3}
        activePage={2}
        totalPages={5}
        previousLabel="prev"
        nextLabel="next"
        firstLabel="first"
        lastLabel="last"
        symmetry={false}
      />	
      

      <h3>Custom Icon</h3>
      {/* ================================================================== */} 

      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={3}
        activePage={2}
        totalPages={3}
        onlyPrevNext={true}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
      />	
        

      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={3}
        activePage={2}
        totalPages={3}
        onlyPrevNext={true}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
        previousClassName="previous float-start"
        nextClassName="next float-end"
      />	
        
        
      <h3>Centered Buttons</h3>
      {/* ================================================================== */} 

      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={3}
        activePage={1}
        totalPages={5}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
        firstLabel={<><i className="fa fa-angle-double-left" aria-hidden="true"></i></>}
        lastLabel={<><i className="fa fa-angle-double-right" aria-hidden="true"></i></>}
        align="center"
      />	
      


      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={3}
        activePage={5}
        totalPages={5}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
        firstLabel={<><i className="fa fa-angle-double-left" aria-hidden="true"></i></>}
        lastLabel={<><i className="fa fa-angle-double-right" aria-hidden="true"></i></>}
        align="center"
      />	
      

      <h3>Use Ellipsis</h3>
      {/* ================================================================== */} 

      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={10}
        activePage={1}
        totalPages={1999}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
        firstLabel={<><i className="fa fa-angle-double-left" aria-hidden="true"></i></>}
        lastLabel={<><i className="fa fa-angle-double-right" aria-hidden="true"></i></>}
        align="center"
        breakLabel="..."
      />	
      
      

      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={10}
        activePage={1996}
        totalPages={1999}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
        align="center"
        breakLabel="..."
      />	
      


      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={10}
        activePage={1996}
        totalPages={2006}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
        align="center"
        breakLabel="..."
      />	
                


      <Pagination
        apiUrl={`/{page}`}
        onChange={gotoPageNumber}
        pageRangeDisplayed={10}
        activePage={1997}
        totalPages={1999}
        previousLabel={<><i className="fa fa-angle-left" aria-hidden="true"></i></>}
        nextLabel={<><i className="fa fa-angle-right" aria-hidden="true"></i></>}
        align="center"
        breakLabel="..."
      />	
      
    </>
  );
}

```

## No spacing

```js
import React from "react";
import Pagination from 'funda-ui/Pagination';

export default () => {


    return (
        <>

            <Pagination
                ...
                wrapperClassName="position-relative"
                ...
            />

             <Pagination
                ...
                wrapperClassName=""
                ...
            />

        </>
    );
}
```




## Implement Data Pagination

```js
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Pagination from 'funda-ui/Pagination';

/*
* Throttle
*
* @param  {Function} fn    - A function to be executed within the time limit.
* @param  {Number} limit   - Waiting time.
* @return {Function}       - Returns a new function.
*/  
function throttle( fn: any, limit = 300 ) {
	let waiting = false;                     
	return function (this: any) {                     
		if (!waiting) {                 
			fn.apply(this, arguments);  
			waiting = true;                  
			setTimeout(function () {          
				waiting = false;           
			}, limit);
		}
	}
}


const demoData = [
		
    {
      "img"     : "/assets/images/demo/test-1.jpg",
      "title"   : "Project Title",
      "time"    : "December 10, 2017",
      "author"  : "David",
      "cat"     : "Art, Design",
      "comments": 10,
      "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
      "link"    : "#"

    },
    {
      "img"     : "/assets/images/demo/test-2.jpg",
      "title"   : "Project Title Here",
      "time"    : "December 9, 2017",
      "author"  : "David",
      "cat"     : "Art, Design",
      "comments": 0,
      "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
      "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
      "link"    : "#"
    },
    {
      "img"     : "/assets/images/demo/test-3.jpg",
      "title"   : "Project Title Here",
      "time"    : "December 8, 2017",
      "author"  : "David",
      "cat"     : "Art, Design",
      "comments": 2,
      "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
      "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
      "link"    : "#"
    },
    {
        "img"     : "/assets/images/demo/test-3.jpg",
        "title"   : "Project Title Here  - PAGE 2",
        "time"    : "December 10, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 10,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
        "link"    : "#"

      },
      {
        "img"     : "/assets/images/demo/test-5.jpg",
        "title"   : "Project Title Here  - PAGE 2",
        "time"    : "December 9, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 0,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-2.jpg",
        "title"   : "Project Title Here  - PAGE 2",
        "time"    : "December 8, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 2,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
        "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-2.jpg",
        "title"   : "Project Title - PAGE 3",
        "time"    : "December 10, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 10,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
        "link"    : "#"

      },
      {
        "img"     : "/assets/images/demo/test-5.jpg",
        "title"   : "Project Title Here - PAGE 3",
        "time"    : "December 9, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 0,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-4.jpg",
        "title"   : "Project Title Here - PAGE 3",
        "time"    : "December 8, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 2,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
        "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-1.jpg",
        "title"   : "Project Title - PAGE 4",
        "time"    : "December 10, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 10,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
        "link"    : "#"

      },
      {
        "img"     : "/assets/images/demo/test-3.jpg",
        "title"   : "Project Title Here - PAGE 4",
        "time"    : "December 9, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 0,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-2.jpg",
        "title"   : "Project Title Here - PAGE 4",
        "time"    : "December 8, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 2,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
        "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
        "link"    : "#"
      }
]

const DataList = (props: any) => {

    const {
        data,
        onTableRenderFinished,
    } = props;

    useEffect(() => {
        // render finished
        onTableRenderFinished?.(); 
    }, [data]);



    return (
        <div className="item">
            {data &&
                data.map((item: any, i: number) => (
                    <h6 key={i} style={{display: 'block', padding: '40px 20px', background: '#ddd'}}>{item.title}</h6>
                ))}
        </div>
    )

};


export default () => {



    const PER = 3;
    const [scrollDistance, setDcrollDistance] = useState<number>(0);
    const windowScrollUpdate = throttle(handleScrollEvent, 5);
    const scrollEl = useRef<HTMLElement | null>();


    function handleScrollEvent() {
        if (scrollEl.current === null) return;
        const scrollTop = scrollEl.current!.scrollTop;
        console.log('scrollTop: ', scrollTop);
        setDcrollDistance(scrollTop);
      
    }


    // data list
    const [listData, setListData] = useState<any[]>([]);

    // pagination
    // To hold the actual data
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [recordsPerPage] = useState<number>(PER);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = listData.slice(indexOfFirstRecord, indexOfLastRecord);
    const allPages = Math.ceil(listData.length / recordsPerPage);
    

    useEffect(() => {

        setListData(demoData);

        /*
        axios
            .get("https://restcountries.com/v3.1/all")
            .then(function (res: any) {
                return res.data;
            })
            .then((data: any[]) => {
                setListData(data.map((v: any) => (
                    {"title": v.latlng.join('')}
                )
                ));
            });
        */
          
    }, []);



    useEffect(() => {

        return () => {

            const tableWrapper: any = document.querySelector('.items-container .content');
            if (tableWrapper !== null) {
                tableWrapper.removeEventListener('scroll', windowScrollUpdate);
                tableWrapper.removeEventListener('touchmove', windowScrollUpdate);
            }
        }


    }, []);

    return (
        <>
            <div className="items-container">
                <div className="content" style={{overflow: 'auto'}}>
                    <div style={{height: '250px'}}>
                        <DataList
                            data={currentRecords} 
                            onTableRenderFinished={() => {

                                const tableWrapper: any = document.querySelector('.items-container .content');
                                scrollEl.current = tableWrapper;
                                if (tableWrapper !== null) {
                                    // Add function to the element that should be used as the scrollable area.
                                    tableWrapper.removeEventListener('scroll', windowScrollUpdate);
                                    tableWrapper.removeEventListener('touchmove', windowScrollUpdate);
                                    tableWrapper.addEventListener('scroll', windowScrollUpdate);
                                    tableWrapper.addEventListener('touchmove', windowScrollUpdate);
                                    windowScrollUpdate();
                                }
                        
                            }}
                        />

                    </div>
                </div>
            </div>

            <Pagination
                apiUrl={`/{page}`}
                onChange={( number, total ) => {
                    console.log( total, `page number: ${number}` ); 
                    if (total >= number) setCurrentPage(number);
                }}
                pageRangeDisplayed={3}
                activePage={currentPage}
                totalPages={allPages}
                previousLabel="prev"
                nextLabel="next"
                firstLabel="first"
                lastLabel="last"
                symmetry={false}
                
            />	

        </>
    );

}
```





## Implement Data Pagination With Infinite Scroll

Lets you callback the handle exposed as attribute `ref`.


`styles.scss`:
```css
/* ---------- Content  ----------- */
.items-container {
    &.rerender {
        .data-generation:first-child {
            display: none;
        }
    }
}
```

`index.tsx`:
```js
import React, { memo, useState, useEffect, useRef } from "react";
import axios from 'axios';
import Pagination from 'funda-ui/Pagination';


const demoData = [
		
    {
      "img"     : "/assets/images/demo/test-1.jpg",
      "title"   : "Project Title",
      "time"    : "December 10, 2017",
      "author"  : "David",
      "cat"     : "Art, Design",
      "comments": 10,
      "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
      "link"    : "#"

    },
    {
      "img"     : "/assets/images/demo/test-2.jpg",
      "title"   : "Project Title Here",
      "time"    : "December 9, 2017",
      "author"  : "David",
      "cat"     : "Art, Design",
      "comments": 0,
      "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
      "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
      "link"    : "#"
    },
    {
      "img"     : "/assets/images/demo/test-3.jpg",
      "title"   : "Project Title Here",
      "time"    : "December 8, 2017",
      "author"  : "David",
      "cat"     : "Art, Design",
      "comments": 2,
      "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
      "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
      "link"    : "#"
    },
    {
        "img"     : "/assets/images/demo/test-3.jpg",
        "title"   : "Project Title Here  - PAGE 2",
        "time"    : "December 10, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 10,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
        "link"    : "#"

      },
      {
        "img"     : "/assets/images/demo/test-5.jpg",
        "title"   : "Project Title Here  - PAGE 2",
        "time"    : "December 9, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 0,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-2.jpg",
        "title"   : "Project Title Here  - PAGE 2",
        "time"    : "December 8, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 2,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
        "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-2.jpg",
        "title"   : "Project Title - PAGE 3",
        "time"    : "December 10, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 10,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
        "link"    : "#"

      },
      {
        "img"     : "/assets/images/demo/test-5.jpg",
        "title"   : "Project Title Here - PAGE 3",
        "time"    : "December 9, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 0,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-4.jpg",
        "title"   : "Project Title Here - PAGE 3",
        "time"    : "December 8, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 2,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
        "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-1.jpg",
        "title"   : "Project Title - PAGE 4",
        "time"    : "December 10, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 10,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a><a href=\"#\">Web Design</a>",
        "link"    : "#"

      },
      {
        "img"     : "/assets/images/demo/test-3.jpg",
        "title"   : "Project Title Here - PAGE 4",
        "time"    : "December 9, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 0,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        "tags"    : "<a href=\"#\">Tag</a><a href=\"#\">Video</a>",
        "link"    : "#"
      },
      {
        "img"     : "/assets/images/demo/test-2.jpg",
        "title"   : "Project Title Here - PAGE 4",
        "time"    : "December 8, 2017",
        "author"  : "David",
        "cat"     : "Art, Design",
        "comments": 2,
        "detail"  : "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. porta ac consectetur ac.",
        "tags"    : "<a href=\"#\">Design</a><a href=\"#\">UI</a>",
        "link"    : "#"
      }
]

// Skipping re-rendering when props are unchanged
const DataList = memo(function DataList(props: any) {

    const {
        data,
        headHide,
        curComHide,
        onTableRenderFinished,
    } = props;

    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // render finished
        onTableRenderFinished?.(rootRef); 
    }, [data]);


    return (
        <>
        <div ref={rootRef} className={`data-generation ${curComHide ? 'd-none' : ''}`}>
            <h3 className={`${headHide ? 'd-none' : ''}`}>Posts List</h3>
            <div className="item">
                {data &&
                    data.map((item: any, i: number) => (
                        <h6 key={i} style={{ display: 'block', padding: '40px 20px', background: '#ddd' }}>{item.title}</h6>
                    ))}
            </div>
        </div>

        </>
    )

});


export default (props: any) => {

    const {
        callback,
        reRender  // number | null  (using Math.random() to re-render)
    } = props;

    const recordsPerPage = 3;
    const observerTarget = useRef<HTMLDivElement>(null);
    const pageHandleRef = useRef<any>();
    

    // data list
    const [prevListData, setPrevListData] = useState<any[]>([]);
    const [listItemsTotal, setListItemsTotal] = useState<number>(0);
    const [currentRecords, setCurrentRecords] = useState<any[]>([]);
    const [allRecords, setAllRecords] = useState<any[]>([]);

    // pagination
    // To hold the actual data
    const [currentPage, setCurrentPage] = useState<number>(1);
    const allPages = Math.ceil(listItemsTotal / recordsPerPage);

    function calcSplitArea(start: number) {
        const _indexOfLastRecord: number = start * recordsPerPage;
        const _indexOfFirstRecord: number = _indexOfLastRecord - recordsPerPage;
        return [_indexOfFirstRecord, _indexOfLastRecord];
    }


    function splitContent(arr: any[], start: number) {
        const [indexOfLastRecord, indexOfFirstRecord] = calcSplitArea(start);
        return arr.slice(indexOfLastRecord, indexOfFirstRecord);
    }
 

    function pushNewData(curPage?: number | undefined, data: any[] | null = null) {

        const _cpage = typeof curPage !== 'undefined' ? curPage : currentPage;
        const _loadedItems = Math.round((listItemsTotal/allPages)*1) + Math.round((listItemsTotal/allPages)*currentPage);
        

        // for your business
        if (data === null) {
            
            setPrevListData((prevState: any[]) => {
                return [...prevState, currentRecords];
            });

            setCurrentRecords(splitContent(allRecords, _cpage));
        } else {
            setPrevListData((prevState: any[]) => {
                return [...prevState, [...data]]; 
            });
            setCurrentRecords(data);
        }



        callback?.(listItemsTotal, recordsPerPage, _cpage, allPages, _loadedItems > listItemsTotal ? listItemsTotal : _loadedItems);
    }


    function renderMain(alldata: any, init: boolean) {
        const _itemsTotal: number = alldata.length;

        console.log('init: ', alldata);
        setListItemsTotal(_itemsTotal);
        setAllRecords(alldata);
        setCurrentRecords(splitContent(alldata, 1));

        // current list
        if (init) {
            pushNewData(1, splitContent(alldata, 1));
        }
        
        const _allPages = Math.ceil(_itemsTotal / recordsPerPage);
        const _loadedItems = Math.round((_itemsTotal/_allPages)*1) + Math.round((_itemsTotal/_allPages)*currentPage);
        callback?.(_itemsTotal, recordsPerPage, currentPage, _allPages, _loadedItems > _itemsTotal ? _itemsTotal : _loadedItems);

    }



    useEffect(() => {
        

        // force render
        if (reRender !== null) {
            const _allData = localStorage.getItem('ITEMS_DATA');
            if (_allData !== null) {
                setPrevListData([]);
                setCurrentPage(0);
                const _oldData = JSON.parse(_allData);
                renderMain(_oldData, false);
            }

        }

        renderMain(demoData, true);


        /*
        axios
            .get("https://restcountries.com/v3.1/all")
            .then(function (res: any) {
                return res.data;
            })
            .then((data: any[]) => {
                // do something
                // renderMain(data, true);
            });
        */
          
    }, [reRender]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (pageHandleRef.current) pageHandleRef.current.next();
            },
            { 
                threshold: 0.9  // A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
            }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [observerTarget]);



    return (
        <>
            <div className={`items-container ${reRender !== null && currentPage > 0 ? 'rerender' : ''}`}>
                <div className="content" style={{overflow: 'auto'}}>
                    <div style={{height: '250px'}}>

                        <div className="list" style={{ minHeight: '150px' }}>
                            {prevListData.map((data: any, i: number) => {

                                return <React.Fragment key={i}>
                                    <DataList
                                        data={data}
                                        headHide={i > 0 ? true : false}
                                        curComHide={i === 1 ? true : false}
                                        onTableRenderFinished={(rootRef: any) => {
                                            if (i === 0) {
                                                // do something
                                            }

                                        }}
                                    />
                                </React.Fragment>
                            })}

                        </div>

                        {/* ONLY TRIGGER OF NEXT BUTTON */}
                        <div ref={observerTarget}>
                            <Pagination
                                ref={pageHandleRef}
                                key={allPages}
                                apiUrl={`/{page}`}
                                onChange={( number, total ) => {
                                    console.log( total, `page number: ${number}` ); 
                                    if (total+1 >= number) {
                                        setCurrentPage(number);
                                        pushNewData(number);
                                    }
                                }}
                                pageRangeDisplayed={3}
                                activePage={currentPage}
                                totalPages={allPages}
                                previousLabel="prev"
                                nextLabel="next"
                                firstLabel="first"
                                lastLabel="last"
                                symmetry={false}
                                nextClassName="btn btn-link btn-sm text-decoration-none border-0"
                                previousClassName="d-none"
                                firstClassName="d-none"
                                lastClassName="d-none"
                                onlyPrevNext
                            />	
                        </div>
                        

                    </div>
                </div>
            </div>


        </>
    );

}

```



## API

### Pagination
```js
import Pagination from 'funda-ui/Pagination';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `ref` | React.ForwardedRef | - | It exposes the following methods of the component (The function supports callback to return a value which is the currently activated page number, like this: `ref.current.next((page) => {console.log(page)})`):  <br /> <ol><li>`ref.current.next()`</li><li>`ref.current.prev()`</li><li>`ref.current.first()`</li><li>`ref.current.last()`</li></ol> | - |
| `wrapperClassName` | string | `mb-3 position-relative` | The class name of the navigation wrapper. | - |
| `navClassName` | string | `pagination` | The class name of the navigation. | - |
| `apiUrl` | string  | - | An API URL Path. Use `{page}` characters to place a placeholder. such as `/mypage/{page}` | ✅ |
| `pageRangeDisplayed` | number  | 3 | The range of pages displayed | ✅ |
| `activePage` | number  | - | The currently selected page number.  | ✅ |
| `totalPages` | number  | - | The total number of pages | ✅ |
| `previousLabel` | ReactNode  | - | Label for the previous button | - |
| `nextLabel` | ReactNode  | - | Label for the next button | - |
| `firstLabel` | ReactNode  | - | Label for the first button | - |
| `lastLabel` | ReactNode  | - | Label for the last button | - |
| `breakLabel` | ReactNode  | - | Label for ellipsis | - |
| `align` | null \| '' \| `left` \| `right` \| `center`  | - | Set the alignment of the control  | - |
| `onlyPrevNext` | boolean  | false | Only display the previous and next buttons | - |
| `activeClassName` | string  | active | The classname for the active page | - |
| `previousClassName` | string  | prev | The classname on tag li of the previous button | - |
| `nextClassName` | string  | next | The classname on tag li of the next button | - |
| `firstClassName` | string  | first | The classname on tag li of the first button | - |
| `lastClassName` | string  | last | The classname on tag li of the last button | - |
| `disabledClassName` | string  | disabled | The classname for disabled buttons | - |
| `symmetry` | boolean  | false | The activation button is symmetrical on the left and right sides | - |
| `onChange` | function  | - | The method to call when a page is clicked. It returns two callback values. <br /> <ol><li>The first is the current page number (**Number**)</li><li>The second is the total pages (**Number**)</li></ol> | - |
