import { Link } from 'react-router-dom'
import './who.style.scss'

import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'

import social from '../../../../assets/img/Illustration Qui Somme Nous.svg' 
const Who = () => {
    return (
        <div className='who-container'>
            <h1 className='who-title'>Qui somme nous ?</h1>
            <h2 className='who-subtitle'>L'agence rapidement</h2>
            <p className='who-description'>GraphiLeaf est une agence de communication et de marketing digital qui propose une gamme complète de services pour aider les petites entreprises, les structures et les indépendants à maximiser leur présence en ligne.</p>
            <Link to={'/graphiLeaf'} className='who-link'>
                <p>En découvrir plus sur <strong>GraphiLeaf</strong> </p>
                <ArrowEffect arrowColor='blue'/>
                
            </Link>
            <img src={social} alt='Graph illustration' className='who-illustration'/>
        </div>

    )
}

export default Who
