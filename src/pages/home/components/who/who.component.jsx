import { Link } from 'react-router-dom'
import './who.style.scss'

import arrowBleu from '../../../../assets/img/ArrowBleu.svg'
import arrowBleu2 from '../../../../assets/img/Arrow2Bleu.svg'

import social from '../../../../assets/img/Graph.png' 

const Who = () => {
    return (
        <div className='who-container'>
            <h1 className='who-title'>Qui somme nous ?</h1>
            <h2 className='who-subtitle'>L'agence rapidement</h2>
            <p className='who-description'>GraphiLeaf est une agence de communication et de marketing digital qui propose une gamme complète de services pour aider les petites entreprises, les structures et les indépendants à maximiser leur présence en ligne.</p>
            <Link to={'/graphiLeaf'} className='who-link'>
                <p>En découvrir plus sur <strong>GraphiLeaf</strong> </p>
                <span>
                    <img src={arrowBleu} alt="arrow"/>
                    <img src={arrowBleu2} alt="arrow"/>
                </span>
            </Link>
            <img src={social} alt='Graph illustration' className='who-illustration'/>
        </div>

    )
}

export default Who
