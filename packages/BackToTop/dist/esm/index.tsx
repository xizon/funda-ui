import React, { useEffect, useState, useRef } from 'react';

import { throttle } from './utils/performance';
import {
    easeLinear,
    easeInQuad,
    easeOutQuad,
    easeInOutQuad
} from './utils/easing';


// Adapt the easing parameters of TweenMax
enum EasingList {
    linear = 'linear',
    easeIn = 'ease-in',
    easeOut = 'ease-out',
    easeInOut = 'ease-in-out'
}


type BackToTopProps = {
    /** Speed of scrolling up. Amount of time measured in milliseconds. */
    speed?: number;
    /** Types of easing animation */
    easing: string;
    /** Button Icon */
    btnIcon?: React.ReactNode;
};


const BackToTop = (props: BackToTopProps) => {


    const {
        btnIcon,
    } = props;

    const easeType: string = EasingList[props.easing as never];
    const speed: number = props.speed ? props.speed : 500;


    const btnRef = useRef<any>(null);
    const [isAtRange, setIsAtRange] = useState<boolean>(false);
    const windowScrollUpdate = throttle(handleScrollEvent, 5);


    function handleScrollEvent() {
        const scrollTop = window.pageYOffset;

        if (scrollTop < window.innerHeight / 2) {
            setIsAtRange(false);
        } else {
            setIsAtRange(true);
        }
    }


    function moveToTop() {

        const duration = speed;

        const scrollToTarget = function (target: HTMLElement) {

            const top = target.getBoundingClientRect().top;
            const startPos = window.pageYOffset;
            const diff = top;


            const start = new Date().getTime();
            const from = 0;
            const to = 100;
            let requestId: any;

            const loop = function () {

                //easing
                const time = new Date().getTime() - start;
                let val;

                switch (easeType) {
                    case "linear":
                        val = easeLinear(time, from, to - from, duration);
                        break;
                    case "ease-in":
                        val = easeInQuad(time, from, to - from, duration);
                        break;
                    case "ease-out":
                        val = easeOutQuad(time, from, to - from, duration);
                        break;
                    case "ease-in-out":
                        val = easeInOutQuad(time, from, to - from, duration);
                        break;

                    default:
                        val = easeLinear(time, from, to - from, duration);
                }

                // Elapsed time in miliseconds
                const percent = val / 100;

                window.scrollTo(0, startPos + diff * percent);

                if (time < duration) {
                    // Continue moving
                    requestId = window.requestAnimationFrame(loop);
                } else {
                    window.cancelAnimationFrame(requestId);
                }
            };
            requestId = window.requestAnimationFrame(loop);
        };

        scrollToTarget(document.body);

    }


    function handleClick(e: any) {
        e.preventDefault();
        moveToTop();
    }


    useEffect(() => {


        //Hide other pages button of back-to-top
        btnRef.current?.classList.remove('active');

        // Remove scroll events from window
        // Add a scroll event listener to window
        window.removeEventListener('scroll', windowScrollUpdate);
        window.removeEventListener('touchmove', windowScrollUpdate);



        // Add function to the element that should be used as the scrollable area.
        window.removeEventListener('scroll', windowScrollUpdate);
        window.removeEventListener('touchmove', windowScrollUpdate);
        window.addEventListener('scroll', windowScrollUpdate);
        window.addEventListener('touchmove', windowScrollUpdate);
        windowScrollUpdate();


        //
        btnRef.current?.removeEventListener('click', handleClick);
        btnRef.current?.addEventListener('click', handleClick);


        return () => {
            btnRef.current?.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', windowScrollUpdate);
            window.removeEventListener('touchmove', windowScrollUpdate);

            //Hide other pages button of back-to-top
            btnRef.current?.classList.remove('active');

        }


    }, []);

    return (
        <>
            <div className="back-to-top" ref={btnRef}>
                <button type="button" className={isAtRange ? 'active' : ''}>
                    {btnIcon || <>
                        <svg width="40px" fill="#000000" viewBox="0 0 96.522 96.522">
                            <g>
                                <path d="M74.692,65.181l-9.044-7.321c1.319-5.557,1.988-11.532,1.988-17.761c0-19.963-14.052-38.367-18.719-39.988
		c-0.426-0.147-0.887-0.147-1.313,0c-4.667,1.621-18.719,20.025-18.719,39.988c0,6.229,0.669,12.205,1.99,17.761l-9.045,7.321
		c-0.541,0.438-0.815,1.127-0.724,1.817l3.69,27.787c0.104,0.787,0.663,1.438,1.425,1.658c0.765,0.22,1.582-0.029,2.092-0.638
		l14.413-17.225c3.543,2.163,7.527,2.163,11.07,0l14.411,17.225c0.387,0.461,0.951,0.717,1.534,0.717
		c0.186,0,0.373-0.026,0.558-0.079c0.762-0.221,1.32-0.871,1.425-1.658l3.69-27.787C75.507,66.309,75.233,65.619,74.692,65.181z
		 M48.262,39.619c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S52.68,39.619,48.262,39.619z"/>
                            </g>
                        </svg>
                    </>}
                </button>
            </div>

        </>
    )
}



export default BackToTop;