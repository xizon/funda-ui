import React from 'react';

interface ItemProps extends React.ComponentPropsWithoutRef<any> {
    index: number;
    title?: string | React.ReactNode;
    note?: string | React.ReactNode;
    message?: string | React.ReactNode;
    depth: number;
    schemeBody?: string;
    schemeHeader?: string;
    closeBtnColor?: string;
    lock?: boolean;
    /** Handling events for close it */
    closeEv?: (index: number) => void | undefined;
};

const Item = (props: ItemProps) => {

    const {
        index,
        title,
        note,
        message,
        depth,
        lock,
        schemeBody,
        schemeHeader,
        closeBtnColor,
        closeEv
    } = props;

    return (
        <>

            <div
                className={`toast-container`}
                data-index={index}
                style={{
                    transform: `perspective(100px) translateZ(-${2 * index}px) translateY(${35 * index}px)`,
                    zIndex: depth
                }}>

                {/* Bootstrap toast */}
                <div className={`toast fade show ${schemeBody ? schemeBody : ''}`} role="alert">
                    {(title === '' || title === false) && (note === '' || note === false) ? null : <>
                        <div className={`toast-header ${schemeHeader ? schemeHeader : ''}`}>
                            <strong className="me-auto">{title === '' || title === false ? '' : <>{title}</>}</strong>
                            <small className="text-muted">{note === '' || note === false ? '' : <>{note}</>}</small>
                            {!lock ? <><button data-close="1" data-index={index} tabIndex={-1} type="button" className="btn-close" style={{ background: 'none' }}><svg width="12px" height="12px" viewBox="0 0 16 16"><path fill={`${closeBtnColor ? closeBtnColor : '#000000'}`} d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fillRule="evenodd"></path></svg></button></> : null}
                            
                        </div>
                    </>}

                    <div className="toast-body">
                        {message}
                    </div>
                </div>

            </div>

        </>
    )
}


export default Item;
