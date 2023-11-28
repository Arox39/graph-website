import './who.style.scss'

import { Link } from 'react-router-dom'

import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import Reveal from '../../../../components/animation/Reveal.component'

import social from '../../../../assets/animate_element/presentation.webm' 
const Who = () => {
    return (
        
        <div className='who-container'>
            <Reveal>
                <h1 className='who-title'>Qui somme nous ?</h1>
            </Reveal>
            <Reveal>
                <h2 className='who-subtitle'>L'agence rapidement</h2>
            </Reveal>
            <Reveal>
                <p className='who-description'>GraphiLeaf est une agence de communication et de marketing digital qui propose une gamme complète de services pour aider les petites entreprises, les structures et les indépendants à maximiser leur présence en ligne.</p>
            </Reveal>
            <Reveal>
                <Link to={'../agence'} className='who-link'>
                    <p>En découvrir plus sur <strong>GraphiLeaf</strong> </p>
                    <ArrowEffect arrowColor='blue'/>
                </Link>
            </Reveal>
            <video className='who-illustration' autoPlay loop muted>
                <source src={social} type='video/webm'/>
                votre navigateur ne supporte pas la balise video.
            </video>
        </div>

    )
}
export default Who