import './card.style.scss'

import { Link } from 'react-router-dom'

import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import Reveal from '../../../../components/animation/Reveal.component'

const Card = ({ id, title, image, description}) => {
    // declenchement de l'overlay
    const handleClick = () => {
        let overlayInView = document.getElementById(`overlay${id}`)
        overlayInView.classList.remove('hidden')
    }
    return (
        <Reveal overflow={"visible"} hauteur={70}>
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
        </Reveal>
    );
}
export default Card;