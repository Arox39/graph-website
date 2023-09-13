import './comingSoon.style.scss'

import { Link } from 'react-router-dom'

import comingImage from '../../assets/img/Coming soon.svg'
import ArrowEffect from '../shared/arrowEffect/arrowEffect.component'
import Footer from '../footer/footer.component'
const ComingSoon = () => {

    return (
        <div className='comingSoon'>
            <img className="comingImage" src={comingImage} alt="coming soon" />
            <Link className='comingBtn btn'>
                    Nous Contacter
                    <ArrowEffect  arrowColor='black' bgcolor='#faf9f2'/>
            </Link>
            <Link className='comingBtn btn'>
                    Nos Projets
                    <ArrowEffect arrowColor='black' bgcolor='#faf9f2'/>
            </Link>
            
            <Footer/>
        </div>
    )

}

export default ComingSoon