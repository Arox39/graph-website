import './sub-nav-header.styles.scss'
import './sub-nav-header.reponsive.scss'
import ReactHtmlParser from 'react-html-parser';
import blueArrow from '../../../assets/img/ArrowBleu.svg'
import Reveal from '../../animation/Reveal';

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