import './solution.style.scss'
import Reveal from '../../../../components/animation/Reveal.component'

const Solution = () => {
    return (
        <div className='solution-container' id='solution'>
            <div className='top-container'>
                <Reveal>
                    <h3 className='solution-title'>Nos solutions</h3>
                </Reveal>
                <Reveal>
                    <p className='solution-subtitle'>Pour vous</p>
                </Reveal>
                <Reveal>
                    <p className='solution-citation'>“Nous sommes fiers de cultiver l'image de marque de nos clients et de les aider à atteindre leur potentiel en ligne”</p>
                </Reveal>
            </div>            
        </div>
    )
}

export default Solution