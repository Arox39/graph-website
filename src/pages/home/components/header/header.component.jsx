
import './header.styles.scss'

import { Link } from 'react-router-dom'

import Reveal from '../../../../components/animation/Reveal.component'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

import headerImage from "../../../../assets/animate_element/phone.webm"

const Header = () => {
    return (
        <header className='homeHeader'>
            <Reveal>
                <h1 className='title'>
                    L'agence de <span className='underline'>communication</span> <br/>
                    & <span className='blue'> de marketing digital.</span>
                </h1>
            </Reveal>
            <Reveal>
                <h3 className='homeCitation'>"Cultivons ensemble votre image"</h3>
            </Reveal>
            <Reveal>
                <p className='description'>GraphiLeaf cultive l'image de marque de ses clients et aide les entreprises à raconter leur histoire unique grâce à une stratégie de communication efficace et des designs visuels de qualité.</p>
            </Reveal>
            <Reveal overflow={"visible"} hauteur={20}>
                <Link to={'contact'} className='btn'>
                    Je prends contact
                    <ArrowEffect bgcolor='#f4f9f2' arrowColor='black'/>
                </Link>
            </Reveal>
            <video className='headerImage' autoPlay muted>
                <source src={headerImage} type='video/webm'/>
                votre navigateur ne supporte pas la balise video.
            </video>
        </header>
    )
}

export default Header