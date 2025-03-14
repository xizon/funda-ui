import React from "react";


type PureLoaderProps = {
    prefix?: string;
    txt?: React.ReactNode;
    center?: boolean;
    customClassName?: string;
};



const PureLoader = (props: PureLoaderProps) => {

    const {
        prefix = 'custom-',
        txt,
        center,
        customClassName
    } = props;

   
    return (
        <>

            <div className={`${prefix}chatbox-loader-container ${customClassName || ''}`}>
                <div className="row g-0 align-items-center">
                    <div className={center ? 'text-center' : ''}><small>{txt || txt === '' ? txt : 'Loading...'}</small></div>
                    <div>
                        <div className="${prefix}chatbox-loader"></div>
                    </div>
                </div>
            </div>




        </>
    );

}



export default PureLoader;


