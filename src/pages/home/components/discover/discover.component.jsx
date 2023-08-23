import './discover.style.scss'

import arrow from "../../../../assets/img/Arrow.svg"
import arrow2 from "../../../../assets/img/Arrow2.svg"
import { Link } from 'react-router-dom'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

const Discover = () => { 

    return (
        <div className='discover-container'>
            <Link path='/' className='btn big'>
                <h2 className='content'>
                    Profitez de votre première consultation <br/>
                    <span>Gratuite !</span>
                </h2>
                <ArrowEffect bgcolor='#000018'/>
            </Link>
            <Link path='/' className='btn small'>
                <h2 className='content'>
                Découvrez nos <br/>
                <span>Projets !</span>
                </h2>
                <ArrowEffect bgcolor='#000018'/>
            </Link>
            <Link path='/' className='btn small'>
                <h2 className='content'>
                    Découvrez nos <br/>
                    <span>Solutions !</span>
                </h2>
                <ArrowEffect bgcolor='#000018'/>
            </Link>
        </div>
    )
}



export default Discover