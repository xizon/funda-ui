# Event Calendar Timeline

> There must be at least one div in the outermost layer. such as `<div><EventCalendarTimeline /></div>`

## General


```js
import React, { useState, useEffect } from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';



export default () => {

    // default data
    const defaultData = [
        {
            "listSection": {"id": 100, "title":"Smith One"},
            "eventSources": [
                {
                    "id": 4505,
                    "date": "2024-01-06",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4508,
                    "date": "2023-12-04",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>",
                    "dataTooltip": `<span>Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4510,
                    "date": "2024-02-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\"> </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4513,
                    "date": "2024-02-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4516,
                    "date": "2023-12-30",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4521,
                    "date": "2024-01-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4524,
                    "date": "2023-12-05",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4525,
                    "date": "2023-12-19",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4527,
                    "date": "2024-02-18",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4528,
                    "date": "2024-01-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4529,
                    "date": "2023-12-10",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4534,
                    "date": "2023-12-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4535,
                    "date": "2024-02-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4537,
                    "date": "2024-01-16",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4538,
                    "date": "2024-02-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4541,
                    "date": "2024-02-25",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4543,
                    "date": "2023-12-26",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4544,
                    "date": "2024-01-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4546,
                    "date": "2023-12-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 101, "title":"Jerry"},
            "eventSources": [
                {
                    "id": 4509,
                    "date": "2024-02-28",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4512,
                    "date": "2024-01-15",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4515,
                    "date": "2024-01-01",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4567,
                    "date": "2024-01-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 102, "title":"Dony Marketplace"},
            "eventSources": [
                {
                    "id": 4574,
                    "date": "2024-01-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4575,
                    "date": "2024-01-12",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4576,
                    "date": "2024-01-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4578,
                    "date": "2024-01-14",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 103, "title":"David"},
            "eventSources": [
                {
                    "id": 6667,
                    "date": "2023-12-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 104, "title":"Jone"},
            "eventSources": []
        },
        {
            "listSection": {"id": 105, "title":"Smith"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 106, "title":"Chuckie"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 107, "title":"Li Yun"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 108, "title":"Smash Dom"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 109, "title":"Cool"},
            "eventSources": []
        }
    ];

    const defaultCustomTodayDate = '2023-12-01';

    const [data, setData] = useState<any>(null);
    const [updateCalendarData, setUpdateCalendarData] = useState<boolean>(false);

    useEffect(() => {

        // update calendar data
        if (!updateCalendarData && defaultData.length > 0) {
            setData(defaultData);
            setUpdateCalendarData(true);
        }
    
    }, [defaultData, defaultCustomTodayDate]);


    return (
        <>
   
            <div style={{width: '100%'}}>
                <EventCalendarTimeline
                    customTodayDate={defaultCustomTodayDate}
                    eventsValue={data}
                    cellCloseBtnClassName="d-none" // if hidden delete button, set it to `d-none`
                    tableListSectionTitle="Name"
                    langWeek={['<small class="ps-1">MON</small>', '<small class="ps-1">TUE</small>', '<small class="ps-1">WED</small>', '<small class="ps-1">THU</small>', '<small class="ps-1">FRI</small>', '<small class="ps-1">SAT</small>', '<small class="ps-1">SUN</small>']}
                    onChangeDate={(e: any, currentData: any) => {
                        console.log(e.currentTarget.dataset.date, e.currentTarget.dataset.week); // 2023-11-22, 2
                        console.log(currentData); // {id: 0, date: '2023-11-22'}  or {id: 1, date: '2023-11-20', time: '', data: 'event 1'}
                    }}
                    onChangeMonth={(currentData: any) => {
                        console.log(currentData); // {day: '14', month: '03', year: '2024'}
                    }}
                    onChangeYear={(currentData: any) => {
                        console.log(currentData); // {day: '14', month: '03', year: '2030'}
                    }}
                    onChangeToday={(currentData: any) => {
                        console.log(currentData); // {day: '26', month: '03', year: '2024'}
                    }}
                    forwardAndBackFillDisabled
                    draggable
                    showWeek
                    autoScroll

                />
            </div>

                  
        </>
    );
}

```



## Fixed date selection and table headers from the entire component

Just use a custom style.


`styles.scss`:
```css
.app-event-tl-calendar-wrapper {
    position: sticky !important;
    top: 0;
    z-index: 3;
}
.app-event-tl-table-head {
    position: sticky !important;
    top: 2.75rem;
    z-index: 3;
}
```


`index.tsx`:
```js
import React from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';

export default () => {

    return (
        <>

            <div style={{height: '280px', overflowY: 'scroll'}}>
                <div style={{height: '600px'}}>
                    <EventCalendarTimeline
                        ...
                        calendarWrapperClassName="app-event-tl-calendar-wrapper"
                        tableHeadClassName="app-event-tl-table-head"
                        ...
                    />
            
                </div>
            </div>     
        </>
    );
}
```


## Set max height and width

Just put a **div** on the outermost layer of the `<EventCalendarTimeline />`.


```js
import React from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';

export default () => {

    // default data
    const defaultData = [
        {
            "listSection": {"id": 100, "title":"Smith One"},
            "eventSources": [
                {
                    "id": 4505,
                    "date": "2024-01-06",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4508,
                    "date": "2023-12-04",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>",
                    "dataTooltip": `<span>Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4510,
                    "date": "2024-02-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\"> </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4513,
                    "date": "2024-02-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4516,
                    "date": "2023-12-30",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4521,
                    "date": "2024-01-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4524,
                    "date": "2023-12-05",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4525,
                    "date": "2023-12-19",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4527,
                    "date": "2024-02-18",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4528,
                    "date": "2024-01-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4529,
                    "date": "2023-12-10",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4534,
                    "date": "2023-12-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4535,
                    "date": "2024-02-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4537,
                    "date": "2024-01-16",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4538,
                    "date": "2024-02-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4541,
                    "date": "2024-02-25",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4543,
                    "date": "2023-12-26",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4544,
                    "date": "2024-01-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4546,
                    "date": "2023-12-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 101, "title":"Jerry"},
            "eventSources": [
                {
                    "id": 4509,
                    "date": "2024-02-28",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4512,
                    "date": "2024-01-15",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4515,
                    "date": "2024-01-01",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4567,
                    "date": "2024-01-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 102, "title":"Dony Marketplace"},
            "eventSources": [
                {
                    "id": 4574,
                    "date": "2024-01-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4575,
                    "date": "2024-01-12",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4576,
                    "date": "2024-01-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4578,
                    "date": "2024-01-14",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 103, "title":"David"},
            "eventSources": [
                {
                    "id": 6667,
                    "date": "2023-12-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 104, "title":"Jone"},
            "eventSources": []
        },
        {
            "listSection": {"id": 105, "title":"Smith"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 106, "title":"Chuckie"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 107, "title":"Li Yun"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 108, "title":"Smash Dom"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 109, "title":"Cool"},
            "eventSources": []
        }
    ];

    const defaultCustomTodayDate = '2023-12-01';

    return (
        <>
            <div style={{height: '280px'}}> {/* This layer is the total height of yourself plus the header and date areas */}
                <div style={{height: '200px', width: '600px'}}>  {/* This layer is the height at which the list is scrollable */}
                    <EventCalendarTimeline
                        customTodayDate={defaultCustomTodayDate}
                        eventsValue={defaultData}
                        cellCloseBtnClassName="d-none" // if hidden delete button, set it to `d-none`
                        tableListSectionTitle="Name"
                        langWeek={['<small class="ps-1">MON</small>', '<small class="ps-1">TUE</small>', '<small class="ps-1">WED</small>', '<small class="ps-1">THU</small>', '<small class="ps-1">FRI</small>', '<small class="ps-1">SAT</small>', '<small class="ps-1">SUN</small>']}
                        forwardAndBackFillDisabled
                        draggable
                        showWeek
                        autoScroll

                    />
                </div>
            </div>

            
                  
        </>
    );
}
```



## Change language

```js
import React from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';

export default () => {

    return (
        <>
            <EventCalendarTimeline 
                langWeek={['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']}
                langMonths={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langMonthsFull={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                langToday="今天"
            />
                  
        </>
    );
}
```




## Has Modal Dialog & Event Planning

The capabilities like multi-day events, responsiveness are supported.

```js
import React, { useState, useEffect, useRef } from "react";
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';
import Input from 'funda-ui/Input';

// component styles
import 'funda-ui/EventCalendarTimeline/index.css';



/**
 * Serialize form values
 * @param  {Array} types   - An array of field strings.
 * @param {HTMLFormElement} form      - Element
 * @returns Array
 */
function serializeArray(form: HTMLFormElement, types: string[] = ['input', 'textarea', 'select', 'checkbox', 'progress', 'datalist']) {

    const objects: any[] = [];
    const fieldsTypes = types;
    
    fieldsTypes.map((item, index) => {
        const fields: any = form.getElementsByTagName(item);
        for (let i = 0; i < fields.length; i++) {

            const _name = fields[i].getAttribute("name");
            let _value = fields[i].value;

            // if field is Array
            if ( _name !== null && _name.match(/(\[.*?\])/gi) ) {
                const inputs = form.querySelectorAll("[name='"+_name+"']");
                const _arrFieldValue = [];
                for (let j = 0; j < inputs.length; j++) {
                    const _arrField: any = inputs[j];
                    _arrFieldValue.push(_arrField.value);
                }

                _value = _arrFieldValue;
            }

            
            //if checkbox or radio
            if ( fields[i].type === 'radio' || fields[i].type === 'checkbox' ) {
                if ( fields[i].checked === true ) {
                    objects[objects.length] = {
                        name: _name,
                        value: _value
                    };
                }
            } else {
                objects[objects.length] = {
                    name: _name,
                    value: _value
                };
            }
        

        }
    });

    // remove Duplicate objects from JSON Array
    const clean = objects.filter((item, index, self) => index === self.findIndex((t) => (t.name === item.name)));

    return clean;
}

/**
 * Object validation
 * @param {String} input
 * @return {boolean}
 */

function isEmpty(input: string | any[]) {
    if ( Array.isArray(input) ) {
        return input.some((str) => !str.replace(/\s/g, '').length === true )
    } else {
        return !input.replace(/\s/g, '').length === true;
    }
}

function validate(form: any, lang: any, callback: any) {

    const formData: any = {};
    const fieldsData: any = serializeArray(form);
    let fieldsCheck: boolean = true;
    let customFieldsCheck: boolean = true;

    // Step 1: everything is ok  
    //-------------
    // required fields
    const emptyFieldsCheck = fieldsData.every((item: any, index: number) => {

        if (item.name !== null && item.name !== '') {
            formData[item.name] = item.value;

            const _field = form.querySelector('[name="' + item.name + '"]');
            const fieldRequired = _field.getAttribute('required');
            if (fieldRequired !== null && fieldRequired !== 'false') {
                if (item.value === '' || isEmpty(item.value)) {

                    const _label = _field.dataset.requiredTitle;
                    window.alert(`${_label}${lang.empty}`);
                    return false;
                }
            }
        }

        return true;
    });

    //  merged result
    fieldsCheck = [emptyFieldsCheck, customFieldsCheck].every((item: boolean) => {
        return item;
    });


    // Step 2: everything is ok  
    //-------------
    if (fieldsCheck) {
        callback?.(formData);
    }
}


export default () => {


    // default data
    const defaultData = [
        {
            "listSection": {"id": 100, "title":"Smith One"},
            "eventSources": [
                {
                    "id": 4505,
                    "date": "2024-01-06",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4508,
                    "date": "2023-12-04",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>",
                    "dataTooltip": `<span>Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4510,
                    "date": "2024-02-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\"> </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4513,
                    "date": "2024-02-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4516,
                    "date": "2023-12-30",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4521,
                    "date": "2024-01-20",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4524,
                    "date": "2023-12-05",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4525,
                    "date": "2023-12-19",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4527,
                    "date": "2024-02-18",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4528,
                    "date": "2024-01-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4529,
                    "date": "2023-12-10",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4534,
                    "date": "2023-12-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4535,
                    "date": "2024-02-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4537,
                    "date": "2024-01-16",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4538,
                    "date": "2024-02-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4541,
                    "date": "2024-02-25",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4543,
                    "date": "2023-12-26",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "dataTooltip": `<span>Work Title 1</span>`,
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4544,
                    "date": "2024-01-13",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4546,
                    "date": "2023-12-23",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 101, "title":"Jerry"},
            "eventSources": [
                {
                    "id": 4509,
                    "date": "2024-02-28",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4512,
                    "date": "2024-01-15",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4515,
                    "date": "2024-01-01",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4567,
                    "date": "2024-01-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Night Shift </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 102, "title":"Dony Marketplace"},
            "eventSources": [
                {
                    "id": 4574,
                    "date": "2024-01-11",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                },
                {
                    "id": 4575,
                    "date": "2024-01-12",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4576,
                    "date": "2024-01-09",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-primary\">Work Title 1 </span>",
                    "eventStyles": {
                        "background": "rgb(203, 228, 240)"
                    }
                },
                {
                    "id": 4578,
                    "date": "2024-01-14",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 103, "title":"David"},
            "eventSources": [
                {
                    "id": 6667,
                    "date": "2023-12-03",
                    "time": "",
                    "data": "<span data-work=\"true\" class=\"text-warning\">Rest </span>",
                    "dataTooltip": `<span>Rest</span>`,
                    "eventStyles": {
                        "background": "rgb(255, 240, 227)"
                    }
                }
            ]
        },
        {
            "listSection": {"id": 104, "title":"Jone"},
            "eventSources": []
        },
        {
            "listSection": {"id": 105, "title":"Smith"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 106, "title":"Chuckie"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 107, "title":"Li Yun"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 108, "title":"Smash Dom"},
            "eventSources": []
        },   
        {
            "listSection": {"id": 109, "title":"Cool"},
            "eventSources": []
        }
    ];

    const defaultCustomTodayDate = '2023-12-01';


    //----
    const LABEL_WIDTH = '100px';
    const formRef = useRef<any>(null);
    const formDeleteRef = useRef<any>(null);

    const [data, setData] = useState<any>(null);
    const [updateCalendarData, setUpdateCalendarData] = useState<boolean>(false);
    const [modalFormData, setModalFormData] = useState<any>(null);

    const itemExist = (arr: any[], date: string) => {
        return arr.some((o) => {
            return o.date == date
        });
    };

    useEffect(() => {

        // update calendar data
        if (!updateCalendarData && defaultData.length > 0) {
            setData(defaultData);
            setUpdateCalendarData(true);
        }
    
    }, [defaultData, defaultCustomTodayDate]);


    return (
        <>
   
            <div style={{ height: '500px', width: '100%' }}>
                <EventCalendarTimeline
                    customTodayDate={defaultCustomTodayDate}
                    eventsValue={data}
                    cellCloseBtnClassName="d-none" // if hidden delete button, set it to `d-none`
                    tableListSectionTitle="Name"
                    langWeek={['<small class="ps-1">MON</small>', '<small class="ps-1">TUE</small>', '<small class="ps-1">WED</small>', '<small class="ps-1">THU</small>', '<small class="ps-1">FRI</small>', '<small class="ps-1">SAT</small>', '<small class="ps-1">SUN</small>']}
                    forwardAndBackFillDisabled
                    draggable
                    showWeek
                    autoScroll

                    modalMaxWidth="850px"
                    modalHeading={<>Settings</>}
                    modalCloseBtnClassName={'btn btn-secondary'}
                    modalSubmitBtnClassName={'btn btn-primary'}
                    modalSubmitDeleteBtnClassName={'btn btn-danger'}
                    modalSubmitBtnLabel={<>Confirm</>}
                    modalCloseBtnLabel={<>Cancel</>}
                    modalSubmitDeleteBtnLabel={<>Delete</>}
                    modalDeleteContent={<>
                    
                    
                        <div ref={formDeleteRef}>

                            <Input
                                tabIndex={-1}
                                wrapperClassName=""
                                type="hidden"
                                value={modalFormData ? modalFormData.id : ''}
                                name="post_id"
                            />
                            <Input
                                tabIndex={-1}
                                wrapperClassName=""
                                type="hidden"
                                value={modalFormData && modalFormData.rowData ? modalFormData.rowData.title : ''}
                                name="post_row"
                            />

                            Are you sure?（ID: {modalFormData ? modalFormData.id : ''}） - {modalFormData && modalFormData.rowData ? modalFormData.rowData.title : ''}
                        </div>
    
                    
                    </>}
                    modalContent={<>
    
                        <div ref={formRef}>

                        
                            <div className="row mb-3">
                                <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                Row
                                </div>
                                <div className="col">
                                    <Input
                                        
                                        type="text"
                                        value={modalFormData && modalFormData.rowData ? modalFormData.rowData.title : ''}
                                        name="post_row"
                                        readOnly
                                    />
                                </div>
                            </div>
                            {/* ///////////// */}
    
    
                            <div className="row mb-3">
                                <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                    Content
                                </div>
                                <div className="col">
                                    <Input
                                        
                                        type="text"
                                        value={modalFormData ? modalFormData.content : ''}
                                        name="post_title"
                                    />
                                </div>
                            </div>
                            {/* ///////////// */}
    
    
    
                            <div className="row mb-3">
                                <div className="text-end" style={{ width: LABEL_WIDTH }}>
                                    Post Date
                                </div>
                                <div className="col">
                                    <Input
                                        
                                        type="date"
                                        value={modalFormData ? modalFormData.date : ''}
                                        name="post_date"
                                    />
                                </div>
                            </div>
                            {/* ///////////// */}
    
    
                        </div>
    
    
                    </>}
                    onModalEditOpen={(currentData: any, openwin: any) => {
                        // open the modal
                        if (currentData.rowData !== '') openwin();
                        

                        console.log('onModalEditOpen: ', currentData);
                        setModalFormData({
                            rowData: currentData.rowData,
                            id: currentData.id,
                            content: currentData.data,
                            date: currentData.date
                        })
                    }}
                    onModalEditClose={(currentData: any) => {
                        setModalFormData(null);
                    }}
                    onModalDeleteOpen={(currentData: any) => {
                        console.log('onModalDeleteOpen: ', currentData);
                        setModalFormData({
                            rowData: currentData.rowData,
                            id: currentData.id,
                            content: currentData.data,
                            date: currentData.date
                        })
                    }}
                    onModalEditEvent={(currentData: any, closewin: any) => {
                        console.log('currentData: ', currentData);
    
                        validate(formRef.current, {
                            success: 'Successfully',
                            empty: 'Do not empty'
                        }, (formData) => {
                            console.log('submit: ', formData);
    
                            // update data
                            const newData = {
                                id: Math.random(),
                                date: formData.post_date,
                                time: '',
                                data: formData.post_title,
                                dataTooltip: formData.post_title,
                                eventStyles: {
                                    background: 'rgb(203, 240, 207)'
                                }
                            };
        
                            setData((prevState: any[]) => {
                                const _data = prevState;

                                // current row
                                const currentRowIndex = _data.findIndex((o) => o.listSection.title == formData.post_row);
                                if (currentRowIndex < 0) return _data;

                                // current item from row
                                _data.forEach((item) => {
                                    if (item.listSection.title == formData.post_row) {
                                        
                                        const _curRowData = JSON.parse(JSON.stringify(item.eventSources));

                                        //-----
                                        // delete old item
                                        const currentItemIndex = _curRowData.findIndex((o) => o.date == formData.post_date);

                                        if (itemExist(_curRowData, formData.post_date)) {
                                            const _oldRowData = _curRowData[currentItemIndex].rowData;
                                            const _oldEventId = _curRowData[currentItemIndex].id;
                                            const _oldEventStyles = _curRowData[currentItemIndex].eventStyles;
                                            const _oldEventTime = _curRowData[currentItemIndex].time;


                                            _curRowData.splice(currentItemIndex, 1);
                                            newData.rowData = _oldRowData;
                                            newData.id = _oldEventId;
                                            newData.eventStyles = _oldEventStyles;
                                            newData.time = _oldEventTime;
                                        }

                                        // add new item
                                        _curRowData.push(newData);

                                        // remove Duplicate objects from JSON Array
                                        const clean = _curRowData.filter((item, index, self) => index === self.findIndex((t) => (t.date === item.date)));

                                        // update current row data
                                        item.eventSources = clean;
                                        //-----
                                    }
                                });
                        
                                return _data;
                            });



                            // close the modal
                            closewin();
                        });
    
    
                    }}
                    onModalDeleteEvent={(currentData: any, closewin: any) => {
                        validate(formDeleteRef.current, {
                            success: 'Successfully',
                            empty: 'Do not empty'
                        }, (formData) => {
                            console.log('submit: ', formData);

                             setData((prevState: any[]) => {
                                const _data = prevState;

                                // current row
                                const currentRowIndex = _data.findIndex((o) => o.listSection.title == formData.post_row);
                                if (currentRowIndex < 0) return _data;

                                // current item from row
                                _data.forEach((item) => {
                                    if (item.listSection.title == formData.post_row) {
                                        
                                        const _curRowData = JSON.parse(JSON.stringify(item.eventSources));

                                        //-----
                                        // delete data
                                        const currentItemIndex = _curRowData.findIndex((o) => o.id == formData.post_id);
                                        if (currentItemIndex >= 0) {
                                            _curRowData.splice(currentItemIndex, 1);
                                        }

                                        // update current row data
                                        item.eventSources = _curRowData;
                                        //-----
                                    }
                                });
                        
                                return _data;
                            });

                            //
                            setModalFormData(null);

                            // close the modal
                            closewin();
                        });
    
                    }}
                    onChangeDate={(e: any, currentData: any) => {
                        console.log('-> onChangeDate: ', e.currentTarget.dataset.date, e.currentTarget.dataset.week); // 2023-11-22, 2
                        console.log('-> onChangeDate: ', currentData); // {"rowData":{"id":101,"title":"Jerry"},"id":0,"date":"2023-12-02"}  or  {"id":6667,"date":"2023-12-03","time":"","data":"<span data-work=\"true\" class=\"text-warning\">Rest </span>","dataTooltip":"<span>Rest</span>","eventStyles":{"background":"rgb(255, 240, 227)"},"rowData":{"id":103,"title":"David"}}
                    }}
                    onChangeMonth={(currentData: any) => {
                        console.log('-> onChangeMonth: ', currentData); // {day: 22, month: 10, year: 2024}
                    }}
                    onChangeYear={(currentData: any) => {
                        console.log('-> onChangeYear: ', currentData); // {day: 22, month: 10, year: 2030}
                    }}
                    onChangeToday={(currentData: any) => {
                        console.log('-> onChangeToday: ', currentData); // {day: 22, month: 10, year: 2024}
                    }}

                />
            </div>

                  
        </>
    );
}
```


## API

### Event Calendar Timeline
```js
import EventCalendarTimeline from 'funda-ui/EventCalendarTimeline';
```
| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `calendarWrapperClassName` | string | - | The class name of the calendar wrapper. | - |
| `tableWrapperClassName` | string | - | The class name of the table wrapper. | - |
| `tableClassName` | string | - | The class name of the table. | - |
| `tableHeadClassName` | string | - | The class name of the table head. | - |
| `tableBodyClassName` | string | - | The class name of the table body. | - |
| `tableListStartClassName` | string | - | The class name of the start content. | - |
| `tableListEndClassName` | string | - | The class name of the end content. | - |
| `tableListDividerClassName` | string | - | The class name of the content divider. | - |
| `customTodayDate` | string  | - | Specify a default today. such as `2023-11-16` | - |
| `eventsValue` | array  | `[]` | Specify the default value for all events. Its properties are described below in the documentation. such as `[{"listSection":{"id": 100, "title":"Smith One"},"eventSources":[{"id":1,"date":"2024-01-06","time":"","data":"<span data-work=\"true\" class=\"text-warning\">Rest </span>","dataTooltip":"<span>Rest</span>","eventStyles":{"background":"rgb(255, 240, 227)"}},{"id":2,"date":"2023-12-04","time":"","data":"<span data-work=\"true\" class=\"text-primary\">Night Shift <span class=\"badge rounded-pill bg-primary mx-1\">IM</span></span>","dataTooltip":"<span>Night Shift</span>","eventStyles":{"background":"rgb(203, 228, 240)"}}]},{"listSection":{"id": 101, "title":"Jerry"},"eventSources":[{"id":3,"date":"2024-02-28","time":"","data":"<span data-work=\"true\" class=\"text-primary\">Night Shift </span>","eventStyles":{"background":"rgb(203, 228, 240)"}}]},{"listSection":{"id": 103, "title":"David"},"eventSources":[]}]` | ✅ |
| `langWeek` | array  | `['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']` | Localization in the component of week sequence. <blockquote>Support html tags. <br />such as `['<small>MON</small>', '<small>TUE</small>', '<small>WED</small>', '<small>THU</small>', '<small>FRI</small>', '<small>SAT</small>', '<small>SUN</small>']`</blockquote> | - |
| `langWeekFull` | array  | `['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']` | Localization in the component of full week sequence. <blockquote>This attribute is not valid yet</blockquote> | - |
| `langMonths` | array  | `['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']` | Localization in the component of months sequence. | - |
| `langMonthsFull` | array  | `['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']` | Localization in the component of full months sequence. | - |
| `langToday` | string  | `Today`| Localization in the component of today button. | - |
| `iconRemove` | ReactNode  | `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg>` | The label of the button to delete current item, if it is not set, only the SVG icon will be included | - |
| `cellCloseBtnClassName` | string  | - | Specify a class for close button of cell | - |
| `cellCloseBtnLabel` | string \| ReactNode  | - | Set a piece of text or HTML code for the close button of cell | - |
| `forwardAndBackFillDisabled` | boolean  | false | Disable forward and backfill values in a calendar. | - |
| `showWeek` | boolean | false | Show week identifier. | - |
| `tableListSectionTitle` | string \| ReactNode  | - | Table header title. | - |
| `tableTooltipDisabled` | boolean  | false | Disable table tooltip | - |
| `tableTooltipDirection` | `top` \| `top-right` \| `top-left` \| `bottom` \| `bottom-right` \| `bottom-left` | bottom | Table tooltip direction of the tip. Defaults to `top`. | - |
| `tableTooltipOffset` | number  | 10 | Table tooltip position offset | - |
| `tableTooltipExceededSidePosOffset` | number | 15 | Table tooltip offset px that exceeds the far right or left side of the screen | - |
| `tableTooltipSize` | `auto` \| `large` \| `medium` \| `small`  | auto | Table tooltip size of the content area. Defaults to `auto`. | - |
| `tableCellMinWidth` | number  | 50 \| 100 | Define a minimum width in pixels for each cell in the content area. <blockquote>When `showWeek` is true, it defaults to **100**</blockquote> | - |
| `draggable` | boolean | false | Indicates whether the content area can be dragged. | - |
| `autoScroll` | boolean | false | Adds scrollbars only when necessary. | - |
| `onChangeDate` | function  | - | Call a function when a date area is clicked. It returns only two values. <br /> <ol><li>The one is an HTMLElement of this area (**HTMLElement**) </li><li>The second parameter is the current value (**JSON Object**) </li></ol> | - |
| `onChangeMonth` | function  | - | Called when the date moves to a new month. The function receives the selected month (0-11). Triggered when the previous, next or month selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeYear` | function  | - | Called when the date moves to a new year. The function receives the selected year. Triggered when the year selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onChangeToday` | function  | - | Called when the date moves to today. Triggered when the today selection button is clicked. It returns only one value which is the current value (**JSON Object**) | - |
| `onListRenderComplete` | function  | - | Call a function when the list has been rendered completely. It doesn't have any return value | - |
| `modalContent` | ReactNode  | - | **For `<ModalDialog />`** Customize the content in the pop-up window, usually form controls. See the case at the bottom of the document. | - |
| `modalDeleteContent` | ReactNode  | - | **For `<ModalDialog />`** Customize the content in the pop-up window (the part used for deletion), usually a form control, see the case at the bottom of the document. | - |
| `modalHeading` | ReactNode  | - | **For `<ModalDialog />`** Set a window title | - |
| `modalMaskOpacity` | string  | - | **For `<ModalDialog />`** The mask opacity. The value is in the range *0.0* to *1.0* | - |
| `modalMaxWidth` | number \| string  | false | **For `<ModalDialog />`** Custom modal max-width whick need a unit string. Such as: `200px` | - |
| `modalMinHeight` | number \| string  | false | **For `<ModalDialog />`** Custom modal max-height whick need a unit string. Such as: `auto` | - |
| `modalCloseBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for close button | - |
| `modalCloseBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the close button | - |
| `modalSubmitBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for submit button | - |
| `modalSubmitBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the submit button | - |
| `modalSubmitDeleteBtnClassName` | string  | - | **For `<ModalDialog />`** Specify a class for delete button | - |
| `modalSubmitDeleteBtnLabel` | string \| ReactNode  | - | **For `<ModalDialog />`** Set a piece of text or HTML code for the delete button | - |
| `onModalEditOpen` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is opened. It returns two callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the opening event (**Function**)</li></ol> | - |
| `onModalEditClose` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is closed. It returns only one value which is the current value (**JSON Object**). | - |
| `onModalDeleteOpen` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is opened. It returns only one value which is the current value (**JSON Object**). | - |
| `onModalDeleteClose` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is closed. It returns only one value which is the current value (**JSON Object**). | - |
| `onModalEditEvent` | function  | - | **For `<ModalDialog />`** Call a function when the EDIT modal is submitted. It returns two callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the closing event (**Function**)</li></ol> | - |
| `onModalDeleteEvent` | function  | - | **For `<ModalDialog />`** Call a function when the DELETE modal is submitted. It returns two callback values. <br /> <ol><li>The first is the current value (**JSON Object**)</li><li>The second is the closing event (**Function**)</li></ol> | - |
| `onCellMouseEnter` | function  | - | It fires when the mouse pointer enters a cell. It returns only one callback value which is the current cell event (**Event**). | - |
| `onCellMouseLeave` | function  | - | It fires when the mouse pointer leaves a cell. It returns only one callback value which is the current cell event (**Event**). | - |
| `onCellClick` | function  | - | It fires when the mouse pointer clicks a cell. It returns only one callback value which is the current cell event (**Event**). | - |


---

JSON Object Literals configuration properties of the `eventsValue`:


| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `listSection` | JSON Object | - | Each row of data. | ✅ |
| `eventSources` | array | `[]` | List items for each row. | ✅ |


JSON Object Literals configuration properties of the `listSection`:


| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. | ✅ |
| `title` | string \| number | - | Title of each line (identification). <blockquote>Support html tags</blockquote> | ✅ |



Array Object configuration properties of the `eventSources`:

| Property | Type | Default | Description | Required |
| --- | --- | --- | --- | --- |
| `id` | string \| number | - | Item ID. | ✅ |
| `date` | string | - | Date of item. such as `2023-11-02` | ✅ |
| `time` | string | - | Date of item. such as `25:33:00` | ✅ |
| `data` | string | - | Specify the value for event  <blockquote>Support html tags</blockquote> | ✅ |
| `dataTooltip` | string | - | Specify the value note for event. It will be displayed in the form of Tooltip.  <blockquote>Support html tags</blockquote> | - |
| `eventStyles` | React.CSSProperties | - | Use inline styles to event area. such as `{ backgroundColor: "red", fontSize: "12px" }` | - |

