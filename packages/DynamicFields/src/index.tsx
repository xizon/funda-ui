import React, { useId, useState, useEffect, useRef } from 'react';

declare module 'react' {
    interface ReactI18NextChildren<T> {
        children?: any;
    }
}

type DynamicFieldsValueProps = {
    init: React.ReactNode[];
    tmpl: React.ReactNode;
};


type DynamicFieldsProps = {
    wrapperClassName?: string;
    value?: string;
    label?: React.ReactNode | string;
    data: DynamicFieldsValueProps | null;
    maxFields?: any;
    confirmText?: string;
    doNotRemoveDom?: boolean;
    iconAddBefore?: React.ReactNode | string;
    iconAddAfter?: React.ReactNode | string;
    iconAdd?: React.ReactNode | string;
    iconAddPosition?: `start` | `end`;
    iconRemove?: React.ReactNode | string;
    innerAppendClassName?: string;
    innerAppendCellClassName?: string;
    innerAppendLastCellClassName?: string;
    innerAppendHideClassName?: string;
    innerAppendBodyClassName?: string;
    innerAppendHeadData?: React.ReactNode[] | string[];
    innerAppendHeadRowClassName?: string;
    innerAppendHeadCellClassName?: string;
    innerAppendEmptyContent?: React.ReactNode;
    /** -- */
    id?: string;
    onAdd?: (items: HTMLDivElement[]) => void;
    onRemove?: (items: HTMLDivElement[], key: number | string, index: number | string) => void;

};

const DynamicFields = (props: DynamicFieldsProps) => {
    const {
        wrapperClassName,
        label,
        data,
        maxFields,
        iconAddBefore,
        iconAddAfter,
        iconAdd,
        iconAddPosition,
        iconRemove,
        doNotRemoveDom,
        id,
        confirmText,
        innerAppendClassName,
        innerAppendCellClassName,
        innerAppendLastCellClassName,
        innerAppendHideClassName,
        innerAppendBodyClassName,
        innerAppendHeadData,
        innerAppendHeadRowClassName,
        innerAppendHeadCellClassName,
        innerAppendEmptyContent,
        onAdd,
        onRemove
    } = props;

    const ITEM_LAST_CLASSNAME = innerAppendLastCellClassName || 'last';
    const ITEM_HIDE_CLASSNAME = innerAppendHideClassName || 'd-none';
    const PER_ROW_DOM_STRING = '.dynamic-fields__append .dynamic-fields__data__wrapper';
    const PER_INNER_BODY_DOM_STRING = '.dynamic-fields__append .dynamic-fields__inner__body';
    const DO_NOT_REMOVE_DOM = typeof doNotRemoveDom === 'undefined' ? false : true;
    const uniqueID = useId().replace(/\:/g, "-");
    const idRes = id || uniqueID;
    const rootRef = useRef<any>(null);
    const fieldsRef = useRef<any>(null);
    const addBtnRef = useRef<any>(null);
    const emptyRef = useRef<any>(null);
    const [val, setVal] = useState<React.ReactNode[]>([]);
    const [tmpl, setTmpl] = useState<React.ReactNode>([]);

    function updateLastItemCls(el: HTMLDivElement, type: string) {
        if (typeof el === 'undefined') return;

        if (type === 'add') {
            const perInnerBody = [].slice.call(rootRef.current.querySelectorAll(PER_INNER_BODY_DOM_STRING));
            perInnerBody.forEach((el: HTMLDivElement, i: number) => {
                el.classList.remove(ITEM_LAST_CLASSNAME);
                (el.firstChild as HTMLDivElement)?.classList.remove(ITEM_LAST_CLASSNAME);
            });
            
            el.classList.add(ITEM_LAST_CLASSNAME);
            el.parentElement?.classList.add(ITEM_LAST_CLASSNAME);
        } else {
            el.classList.remove(ITEM_LAST_CLASSNAME);
            el.parentElement?.classList.remove(ITEM_LAST_CLASSNAME);
        }

    }


    function updateHeadCls(type: string) {
        const el: HTMLDivElement = rootRef.current.querySelector('.dynamic-fields__inner__head');
        if (el === null) return;

        if (type === 'add') {
            el.classList.add(ITEM_HIDE_CLASSNAME);
        } else {
            el.classList.remove(ITEM_HIDE_CLASSNAME);
        }

    }

    function emptyContentEnabled(type: string) {
        if (innerAppendEmptyContent === '' || typeof innerAppendEmptyContent === 'undefined') return false;

        if (type === 'add') {
            emptyRef.current.classList.add(ITEM_HIDE_CLASSNAME);
        } else {
            emptyRef.current.classList.remove(ITEM_HIDE_CLASSNAME);
        }
        return true;
    }


    function checkMaxStatus() {
        //button status
        if (rootRef.current.querySelectorAll(PER_ROW_DOM_STRING).length + 1 >= parseFloat(maxFields)) {
            addBtnRef.current.style.setProperty('display', 'none', 'important');
        }
    }


    function handleClickAdd(event: any) {
        event.preventDefault();

        //button status
        checkMaxStatus();

        //
        setVal((prevState: any[]) => [...prevState, ...generateGroup(tmpl)]);


        //
        setTimeout(() => {
            const perRow = [].slice.call(rootRef.current.querySelectorAll(PER_ROW_DOM_STRING));
            
        
            // update index
            perRow.forEach((el: HTMLDivElement, i: number) => {
                el.dataset.index = i.toString();
            });


            // update last element
            if (perRow.length > 1) {
                updateLastItemCls(perRow[0], 'remove');
                updateLastItemCls(perRow[perRow.length-1], 'add');
            }

            // update inner elements
            if (perRow.length > 0) {
                if (!emptyContentEnabled('add')) updateHeadCls('remove');
            }

            //
            onAdd?.(perRow);
        }, 0);
    }


    function handleClickRemove(e: React.MouseEvent) {
        e.preventDefault();

        const curKey = (e.currentTarget.closest('.dynamic-fields__data__wrapper') as HTMLDivElement).dataset.key;
        

        if (confirm(confirmText || '')) {

            //button status
            if (rootRef.current.querySelectorAll(PER_ROW_DOM_STRING).length <= parseFloat(maxFields)) {
                addBtnRef.current.style.setProperty('display', 'inline', 'important');
            }

            
            const curItem = rootRef.current.querySelector(`.dynamic-fields__append [data-key="${curKey}"]`);
            const curIndex = curItem.dataset.index;


             // Do not delete the parent node `innerAppendBodyClassName`, otherwise an error may be reported when 
             // using routing: DOMException: Failed to execute 'removeChild' on 'Node'
            if (curItem !== null && !DO_NOT_REMOVE_DOM) {
                curItem.remove();
            }

       
            //
            setTimeout(() => { 
                const perRow = [].slice.call(rootRef.current.querySelectorAll(PER_ROW_DOM_STRING));

                // update index
                perRow.forEach((el: HTMLDivElement, i: number) => {
                    el.dataset.index = i.toString();
                });

                // update last element
                if (perRow.length === 1) {
                    updateLastItemCls(perRow[0], 'add');
                } else {
                    updateLastItemCls(perRow[perRow.length-1], 'add');
                }

                // update inner elements
                if (perRow.length === 0) {
                    if (!emptyContentEnabled('remove')) updateHeadCls('add');
                }
                

                //
                onRemove?.(perRow, curKey as never, curIndex as number);
            }, 0);
        }

    }

    function generateGroup(inputData: React.ReactNode[] | React.ReactNode) {
        const isNew = !Array.isArray(inputData);
        const _data = Array.isArray(inputData) ? inputData : [inputData];

     
        return (
            _data.map((item: any, i: number) => {
                const removeBtyn = <><a href="#" tabIndex={-1} className="dynamic-fields__removebtn align-middle" onClick={handleClickRemove}>
                    {iconRemove ? <>{iconRemove}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" fill="#000" /></svg></>}
                </a></>;

                return <React.Fragment key={'tmpl-' + i}>
                    {isNew ? <>
                        {item}
                    </> : <><div key={'tmpl-' + i} className={`dynamic-fields__inner__body ${innerAppendBodyClassName || ''} ${i === _data.length-1 ? ITEM_LAST_CLASSNAME : ''}`} data-body-index={i}>
                        <div className={`dynamic-fields__data__wrapper position-relative ${innerAppendCellClassName || ''} ${i === _data.length-1 ? ITEM_LAST_CLASSNAME : ''}`} data-key={i} data-index={i}>
                            {item}
                            {removeBtyn}
                        </div>
                        </div>
                    </>}
                    
                </React.Fragment>

            })

        )

    }

    function addButton() {
        return <div className="dynamic-fields__btns dynamic-fields__btns--end">
            {iconAddBefore ? iconAddBefore : null}
            <a ref={addBtnRef} href="#" tabIndex={-1} className="dynamic-fields__addbtn align-middle" onClick={handleClickAdd}>
                {iconAdd ? <>{iconAdd}</> : <><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#000" /></svg></>}
            </a>
            {iconAddAfter ? iconAddAfter : null}
        </div>;
    }


    useEffect(() => {

        setVal(data ? data.init : []);
        setTmpl(data ? data.tmpl : null);

    }, [data]);


    return (
        <>


            <div className={wrapperClassName || wrapperClassName === '' ? wrapperClassName : "mb-3 position-relative"} ref={rootRef}>
                {label ? <><label className="form-label" dangerouslySetInnerHTML={{__html: `${label}`}}></label></> : null}

                <div ref={fieldsRef} className="dynamic-fields-container" data-max-fields={maxFields || 10} id={idRes}>

                    {/* //////////// add button /////////// */}
                    {iconAddPosition === 'start' ? <>{addButton()}</> : null}
                    {/* //////////// /add button /////////// */}


                    <div className={`dynamic-fields__append ${innerAppendClassName || ''}`}>

                        {/* //////////// head /////////// */}
                        {innerAppendHeadData && Array.isArray(innerAppendHeadData) && val.length > 0 ? <>
                            <div className={`dynamic-fields__inner__head ${innerAppendHeadRowClassName || ''}`}>
                                {innerAppendHeadData.map((item: any, i:number) => {
                                    return <div key={'inner-header-row' + i} className={`${innerAppendHeadCellClassName || ''} ${i === innerAppendHeadData.length-1 ? ITEM_LAST_CLASSNAME : ''}`}>{item}</div>;
                                })}
                            </div>
                        </> : null}
                        {/* //////////// /head /////////// */}

                        {/* //////////// item /////////// */}
                        {generateGroup(val)}
                        {/* //////////// /item /////////// */}


                    </div>

                    {/* //////////// empty item /////////// */}
                    <div ref={emptyRef} className={`${ITEM_HIDE_CLASSNAME}`}>
                        {innerAppendEmptyContent || null}
                    </div>
                    {/* //////////// /empty item /////////// */}


                    {/* //////////// add button /////////// */}
                    {typeof iconAddPosition === 'undefined' || iconAddPosition === 'end' ? <>{addButton()}</> : null}
                    {/* //////////// /add button /////////// */}

                </div>

            </div>



        </>
    )
};

export default DynamicFields;
