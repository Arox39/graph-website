import './card.style.scss'
import { useState } from 'react'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

import { Link } from 'react-router-dom'
import Overlay from '../overlay/overlay.component'



const Card = ({ title, image, description, homeImage, presentationImage, thirdImage, fourthImage, color}) => {
    console.log(homeImage);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    return (
        <Link className='card' onClick={handleClick}>
            <img src={image} alt='illustration' className='bgimg' />
            <div className='title-container'>
                <h1 className='card-title'>{title}</h1>
                <ArrowEffect className='arrow' arrowColor='black' /> 
            </div>
            <p className='description'>{description}</p>
            {clicked && (
                <Overlay 
                    homeImage = {homeImage}
                    presentationImage = {presentationImage}
                    thirdImage = {thirdImage}
                    fourthImage = {fourthImage}
                    color={color}
                />
            )}
        </Link>
    );
}

export default Card;