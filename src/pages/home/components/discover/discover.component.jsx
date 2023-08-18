import './discover.style.scss'

import arrow from "../../../../assets/img/Arrow.svg"
import arrow2 from "../../../../assets/img/Arrow2.svg"
import { Link } from 'react-router-dom'
const Discover = () => { 

    return (
        <div className='discover-container'>
            <Link path='/' className='button big'>
                <h2 className='content'>
                    Profitez de votre première consultation <br/>
                    <span>Gratuite !</span>
                </h2>
                <div className='go'>
                    <img src={arrow} alt="arrow"/>
                    <img src={arrow2} alt="arrow"/>
                </div>
            </Link>
            <Link path='/' className='button small'>
                <h2 className='content'>
                Découvrez nos <br/>
                <span>Projets !</span>
                </h2>
                <div className='go'>
                    <img src={arrow} alt="arrow"/>
                    <img src={arrow2} alt="arrow"/>
                </div>
            </Link>
            <Link path='/' className='button small'>
                <h2 className='content'>
                    Découvrez nos <br/>
                    <span>Solutions !</span>
                </h2>
                <div className='go'>
                    <img src={arrow} alt="arrow"/>
                    <img src={arrow2} alt="arrow"/>
                </div>
            </Link>
        </div>
    )
}



export default Discover