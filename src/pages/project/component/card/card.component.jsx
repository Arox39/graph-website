import './card.style.scss'

import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import { Link } from 'react-router-dom'

const Card = ({title, image, description, link}) => {
    return (
        <Link to={link} className='card'>
            <img src={image} alt='illustration' className='bgimg'/>
            <div className='title-container'>
                <h1 className='card-title'>{title}</h1>
                <ArrowEffect className='arrow' arrowColor='black' />
                </div>
            <p className='description'>{description}</p>
        </Link>
    )
}

export default Card