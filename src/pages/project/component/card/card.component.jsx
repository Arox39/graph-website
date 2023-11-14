import './card.style.scss'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

import { Link } from 'react-router-dom'



const Card = ({ id, title, image, description}) => {
    const handleClick = () => {
        let overlayInView = document.getElementById(`overlay${id}`)
        overlayInView.classList.remove('hidden')

    }
    return (
        <Link className='card' id={id} onClick={handleClick}>
            <img src={image} alt='illustration' className='bgimg' />
            <div className='title-container'>
                <h1 className='card-title'>
                    {title}
                    <span className='responsive-description'> -  {description}</span>
                </h1>
                
                <ArrowEffect className='arrow' arrowColor='black' /> 
            </div>
            <p className='description'>{description}</p>
        </Link>
    );
}

export default Card;