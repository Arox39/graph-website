import './sub-nav-header.styles.scss'
import './sub-nav-header.reponsive.scss'

// nous permet de mettre des balise html comme <stong></stong> dans les chaines de caractères et qu'elles soit comprise
import ReactHtmlParser from 'react-html-parser';

import Reveal from '../../animation/Reveal.component';

import blueArrow from '../../../assets/img/ArrowBleu.svg'
const SubNavHeader = ({title, citation, subtitle, subcontent, img}) => {
    return (
        <header className='sub-nav-header'>
            <Reveal>
                <h1 className='title'>{ReactHtmlParser(title)}</h1>
            </Reveal>
            <Reveal>
                <p className='citation'>“{ReactHtmlParser(citation)}”</p>
            </Reveal>
            
            <video className='header-img' autoPlay muted>
                <source src={img} type='video/webm'/>
                votre navigateur ne supporte pas la balise video.
            </video>

    
            <div className='sub-content'>
                <Reveal>
                    <div className='title-container'>
                        <h1>{subtitle}</h1>
                        <img src={blueArrow} className='blueArrow' alt='blue arrow' />
                    </div>
                </Reveal>
                <Reveal overflow={"visible"}>
                    <p className='sub-description'>
                    {ReactHtmlParser(subcontent)}
                    </p>
                </Reveal>
            </div>
        </header>
    )
}

export default SubNavHeader