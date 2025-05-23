/**
 * Determine whether it is the mobile terminal of the specified breakpoint
 * * 
 * @usage:
 * 

const App = () => {

    const isMobile = useIsMobile();

    return (
        <div>
            {isMobile ? (
                <p>This content is hidden on mobile devices.</p>
            ) : (
                <p>This content is visible on larger screens.</p>
            )}
        </div>
    );
}


 */
import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint: number = 600): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        // Set the mounted state to true after the component has mounted
        setIsMounted(true);

        const handleResize = () => {
            if (typeof window !== 'undefined') {

                const detectDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
                    // 1. First check if window and navigator are available (SSR compatibility)
                    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
                        return 'desktop'; // Default to desktop
                    }
                
                    // 2. Get user agent string
                    const ua = navigator.userAgent.toLowerCase();
                    
                    // 3. Get platform info
                    const platform = navigator.platform ? navigator.platform.toLowerCase() : '';
                    
                    // 4. Check screen characteristics using window.matchMedia
                    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
                                   
                    const isPortrait = window.matchMedia('(orientation: portrait)').matches;
                    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
                    
                    // 5. Get screen dimensions
                    const screenWidth = window.screen.width;
                    const screenHeight = window.screen.height;
                    const minScreenSize = Math.min(screenWidth, screenHeight);
                    const maxScreenSize = Math.max(screenWidth, screenHeight);
                
                    // Define device characteristics
                    const isTablet = (
                        // Traditional UA detection
                        /ipad/.test(ua) || 
                        (/android/.test(ua) && !/mobile/.test(ua)) ||
                        /tablet/.test(ua) ||
                        /playbook/.test(ua) ||
                        /nexus (7|9|10)/.test(ua) ||
                        /sm-t/.test(ua) ||
                        /huawei(.*)mediapad/.test(ua) ||
                        
                        // Special detection for iPad Pro and newer iPads
                        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
                        
                        // Screen size characteristics (tablets typically fall within this range)
                        (minScreenSize >= breakpoint && maxScreenSize <= 1366 && isTouch) ||
                        
                        // Specific device detection
                        /kindle|silk|kftt|kfot|kfjwa|kfjwi|kfsowi|kfthwa|kfthwi|kfapwa|kfapwi/i.test(ua)
                    );
                
                    const isMobile = (
                        !isTablet && ( // Prevent tablets from being detected as phones
                            // Traditional mobile device detection
                            /iphone|ipod|android.*mobile|windows phone|mobi/.test(ua) ||
                            
                            // Screen size characteristics (phones typically smaller than 600px)
                            (minScreenSize < breakpoint && isTouch) ||
                            
                            // Additional mobile device detection
                            /blackberry|\bbb\d+|meego|webos|palm|phone|pocket|mobile|mini|iemobile/i.test(ua)
                        )
                    );
                
                    // 6. Comprehensive decision logic
                    if (isMobile) {
                        // Additional check for small tablets
                        if (maxScreenSize >= 1024 && isTouch) {
                            return 'tablet';
                        }
                        return 'mobile';
                    }
                    
                    if (isTablet) {
                        // Additional check for touch-enabled laptops
                        if (maxScreenSize > 1366 && /windows/.test(ua)) {
                            return 'desktop';
                        }
                        return 'tablet';
                    }
                
                    // 7. Check for touch-enabled laptops
                    if (isTouch && /windows/.test(ua) && maxScreenSize > 1366) {
                        return 'desktop';
                    }
                
                    return 'desktop';
                };

                setIsMobile(detectDeviceType() === 'mobile');
            }
        };

        // Add event listener for resize
        window.addEventListener('resize', handleResize);
        // Call the handler once to set the initial state
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    // Only return the isMobile state if the component is mounted
    return isMounted ? isMobile : false;
};

export default useIsMobile;