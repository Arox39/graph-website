
import './overlay.styles.scss'

import {useRef} from 'react'
// pour pouvoir interpreter du html dans une string
import ReactHtmlParser from 'react-html-parser'

import Reveal from '../../../../components/animation/Reveal.component'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

import arrow2Reverse from '../../../../assets/img/Arrow2-reverse.svg'
import arrow from '../../../../assets/img/Arrow.svg'

const Overlay = ({id, description, homeImage, presentationImage, thirdImage, fourthImage, color, text_color}) => {

    let currentOverlay = useRef(null)
    const handleBack = () => {
        currentOverlay.current.classList.add('hidden')
    }
    const handleNext = () => {
        // si on a un projet suivant alors on le montre
        let next = document.getElementById(`overlay${id + 1}`)
        if(next) 
        {
            next.classList.remove('hidden')
            currentOverlay.current.classList.add('hidden')
        }   
    }
    const handlePrev = () => {
        // si on a un projet precedent alors on le montre
        let prev = document.getElementById(`overlay${id - 1 }`)
        if(prev) 
        {
            currentOverlay.current.classList.add('hidden')
            prev.classList.remove('hidden')
        }
    }
    return (
            <div className='overlay hidden' id={`overlay${id}`} ref={currentOverlay}>

                <div className='back' onClick={handleBack}>
                    <img src={arrow} alt="arrow"/>
                    <img src={arrow2Reverse} alt="arrow"/>
                </div>

                <div className='overlay-container'>
                    <img className='first-bg'  src={homeImage} alt='home illustration'/>
                    <section className='second-bg'  style={{backgroundColor:color, color:text_color,}}>
                        <img className='image-part' src={presentationImage} alt='presentation illustration'/> 
                        <div className='text-part' >
                            <Reveal>
                                <p> 
                                    {ReactHtmlParser(description)}
                                    <br/>
                                    <br/>
                                    <span> GraphiLeaf, Cultivons ensemble votre image </span>
                                </p>
                            </Reveal>
                        </div>
                    </section>
                    <section className='third-bg'>
                        <img className='left-img' src={thirdImage} alt='third part'/>
                        <img className='right-img' src={fourthImage} alt='fourth part'/>
                    </section>
                </div>
                <div className='moveProject'>
                    <div className='prev' onClick={handlePrev}>
                        <img src={arrow} alt="arrow"/>
                        <img src={arrow2Reverse} alt="arrow"/>
                    </div>
                    <span className='next btn' onClick={handleNext}>
                        <ArrowEffect className="next" bgcolor={'black'} arrowColor={'white'}/>
                    </span>
                </div>
            </div>
        )
}
export default Overlay