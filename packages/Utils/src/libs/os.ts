

/*
 * Determine whether it is a special platform
 *
 * @private
 */
function getOs() {
    if (typeof window === 'undefined') return {};

    let os;

    if ( typeof window !== "undefined" ) {
    
        const getOs = () => {
            const _navigator: any = window.navigator;
            const platform = () => {
                // 2022 way of detecting. Note : this userAgentData feature is available only in secure contexts (HTTPS)
                if (typeof _navigator.userAgentData !== 'undefined' && _navigator.userAgentData != null) {
                    return _navigator.userAgentData.platform;
                }
                // Deprecated but still works for most of the browser
                if (typeof _navigator.platform !== 'undefined') {
                    if (typeof _navigator.userAgent !== 'undefined' && /android/.test(_navigator.userAgent.toLowerCase())) {
                        // android device’s _navigator.platform is often set as 'linux', so const’s use userAgent for them
                        return 'android';
                    }
                    return _navigator.platform;
                }
                return 'unknown';
            }
        
            const _platform = platform().toLowerCase();
        
            const isOSX = /mac/.test(_platform); // Mac desktop
            const isIOS = ['iphone', 'ipad', 'ipod'].indexOf(_platform) === -1 ? false : true; // Mac iOs
            const isApple = isOSX || isIOS; // Apple device (desktop or iOS)
            const isWindows = /win/.test(_platform); // Windows
            const isAndroid = /android/.test(_platform); // Android
            const isLinux = /linux/.test(_platform); // Linux
        
            return {
                isOSX,
                isIOS,
                isApple,
                isWindows,
                isAndroid,
                isLinux
            }
        
        };
    
        os = getOs();
    
    } else {
        os = {};
    }
    return os;

}


export default getOs;