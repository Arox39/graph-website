import './card.style.scss'

import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

const Card = ({title, image, description}) => {
    return (
        <div className='card'>
            <img src={image} alt='illustration' className='bgimg'/>
            <div className='title-container'>
                <h1 className='card-title'>{title}</h1>
                <ArrowEffect className='arrow' arrowColor='black' />
                </div>
            <p className='description'>{description}</p>
        </div>
    )
}

export default Card