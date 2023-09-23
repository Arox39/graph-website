import './discover.style.scss'


import { Link } from 'react-router-dom'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

const Discover = () => { 

    return (
        <div className='discover-container'>
            <Link to='contact' className='btn big'>
                <h2 className='content'>
                    Profitez de votre première consultation <br/>
                    <span>Gratuite !</span>
                </h2>
                <ArrowEffect bgcolor='#000018'/>
            </Link>
            <Link to='project' className='btn small'>
                <h2 className='content'>
                Découvrez nos <br/>
                <span>Projets !</span>
                </h2>
                <ArrowEffect bgcolor='#000018'/>
            </Link>
            <a href='#solution' className='btn small'>
                <h2 className='content'>
                    Découvrez nos <br/>
                    <span>Solutions !</span>
                </h2>
                <ArrowEffect bgcolor='#000018'/>
            </a>
        </div>
    )
}



export default Discover