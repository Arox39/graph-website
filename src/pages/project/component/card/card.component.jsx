import './card.style.scss'
import { useState } from 'react'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

import { Link } from 'react-router-dom'
import Overlay from '../overlay/overlay.component'

import arrow from '../../../../assets/img/Arrow.svg'
import arrow2 from '../../../../assets/img/Arrow2-reverse.svg'


const Card = ({ title, image, description, homeImage, presentationImage, thirdImage, fourthImage, color, overlayDescription, text_color}) => {
    const [clicked, setClicked] = useState(false);
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        if(counter === 0){
            setClicked(true);
            setCounter(1)
        }
    }
    const handleBack = () => {
        setClicked(false);
        setCounter(0)
    }
    
    

    return (
        <Link className='card' onClick={handleClick}>
            <img src={image} alt='illustration' className='bgimg' />
            <div className='title-container'>
                <h1 className='card-title'>
                    {title}
                    <span className='responsive-description'> -  {description}</span>
                </h1>
                
                <ArrowEffect className='arrow' arrowColor='black' /> 
            </div>
            <p className='description'>{description}</p>
            {clicked && (
                <div>
                    <Overlay 
                    description={overlayDescription}
                    homeImage = {homeImage}
                    presentationImage = {presentationImage}
                    thirdImage = {thirdImage}
                    fourthImage = {fourthImage}
                    color={color}
                    text_color={text_color}
                    />
                    <div className='back' onClick={handleBack}>
                        <img src={arrow} alt="arrow"/>
                        <img src={arrow2} alt="arrow"/>
                    </div>
                </div>
            )}
        </Link>
    );
}

export default Card;