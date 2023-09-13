import './ads.style.scss'

import headerImg from '../../../assets/img/Illustration Ads.svg'
import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'

import blueArrow from '../../../assets/img/ArrowBleu.svg'
import blueGrid from '../../../assets/img/BG-PB.svg'
import greyGrid from '../../../assets/img/BG-PG.svg'

const Ads = () => {
    return (
        <div className='ads'>
            <SubNavHeader 
                title="Boostez votre <span className='underline'>marque </span> avec
                <br/> des <span className='blue'> campagnes ciblées.</span>"
                citation="La publicité en ligne est un moyen puissant d'atteindre votre public cible, <br/>  d'accroître votre visibilité et d'obtenir des résultats concrets."
                subtitle="Publicité ciblées"
                subcontent="Atteignez votre public idéal avec des publicités ciblées. Nos campagnes publicitaires en ligne sont conçues pour mettre en avant votre entreprise auprès des personnes les plus susceptibles de s'intéresser à vos produits ou services. Nous identifions votre public cible pour vous assurer de toucher les bonnes personnes au bon moment."
                img={headerImg}
            />

            <section className='ads-container'>
            </section>
        </div>
    )
}

export default Ads