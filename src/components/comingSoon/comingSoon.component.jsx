import './comingSoon.style.scss'
import './comingSoon.responsive.scss'

import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import comingImage from '../../assets/img/Coming soon.svg'
import responsiveComingSoon from '../../assets/img/Coming_soon_tel.svg'
import ArrowEffect from '../shared/arrowEffect/arrowEffect.component'
import Footer from '../footer/footer.component'
const ComingSoon = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
            
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    let btn_text = isMobile ? 'Venez découvrir nos projets !' : 'Nos projets';
    return (
        <div className='comingSoon'>
            <img className="comingImage" src={comingImage} alt="coming soon" />
            <img className="responsiveComingSoon" src={responsiveComingSoon} alt="coming soon" />
            <Link to='../../contact' className='comingBtn btn'>
                    Nous contacter
                    <ArrowEffect  arrowColor='black' bgcolor='#faf9f2'/>
            </Link>
            <Link to="../../project" className='comingBtn btn'>
                    {btn_text}
                    <ArrowEffect arrowColor='black' bgcolor='#faf9f2'/>
            </Link>
            
            <Footer/>
        </div>
    )

}

export default ComingSoon