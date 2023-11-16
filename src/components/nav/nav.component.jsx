import NavDesktop from './responsive/nav.desktop.component'
import NavMobile from './responsive/nav.mobile.component'
import { Fragment, useState, useEffect } from 'react'



const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return ( 
        <Fragment> 
            {isMobile ? <NavMobile/> : <NavDesktop/>}  
        </Fragment>
    )
}

export default Nav