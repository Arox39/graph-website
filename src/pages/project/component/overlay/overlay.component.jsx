
import './overlay.styles.scss'
import ReactHtmlParser from 'react-html-parser'
import arrow from '../../../../assets/img/Arrow.svg'

import {useEffect, useRef} from 'react'
import arrow2Reverse from '../../../../assets/img/Arrow2-reverse.svg'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import Reveal from '../../../../components/animation/Reveal'

const Overlay = ({id, description, homeImage, presentationImage, thirdImage, fourthImage, color, text_color}) => {

    let currentOverlay = useRef(null)
    const handleBack = () => {
        currentOverlay.current.classList.add('hidden')
        currentOverlay.current.scrollTop = 0
    }
    const handleNext = () => {
        let next = document.getElementById(`overlay${id + 1}`)
        if(next) 
        {
            next.classList.remove('hidden')
            currentOverlay.current.classList.add('hidden')
            
        }   
    }
    const handlePrev = () => {
        let prev = document.getElementById(`overlay${id - 1 }`)
        if(prev) 
        {
            currentOverlay.current.classList.add('hidden')
            prev.classList.remove('hidden')

        }
    
    }
    return (
            <div className='overlay hidden' id={`overlay${id}`} ref={currentOverlay} >
                <div className='back' onClick={handleBack}>
                    <img src={arrow} alt="arrow"/>
                    <img src={arrow2Reverse} alt="arrow"/>
                </div>

                <div className='overlay-container'>
                    <img className='first-bg'  src={homeImage} alt='home illustration'/>
                    <section className='second-bg'  style={{backgroundColor:color, color:text_color,}}>
                        <img className='image-part' src={presentationImage} alt='presentation illustration'/> 
                        <div className='text-part' >
                        <p > 
                            <Reveal>
                                {ReactHtmlParser(description)}
                            </Reveal>
                            <br/>
                            <br/>
                            <Reveal>
                                <span> GraphiLeaf, Cultivons ensemble votre image </span>
                            </Reveal>
                        </p>
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