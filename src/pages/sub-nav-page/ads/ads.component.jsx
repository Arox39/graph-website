import './ads.style.scss'

import headerImg from '../../../assets/img/Illustration Ads.svg'
import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import Footer from '../../../components/footer/footer.component'
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
            <section className='campagne'>
                    <h1 className='simple-title'>
                        Campagnes Performantes
                        <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                    </h1>
                    <p className='simple-content'>Des campagnes publicitaires performantes sont essentielles pour obtenir des résultats tangibles. Nous optimisons constamment vos campagnes pour maximiser votre retour sur investissement. Grâce à des stratégies adaptées à votre entreprise, nous vous aidons à obtenir des résultats concrets, que ce soit en termes de ventes, de prospects ou de notoriété.
                    </p>
                    <img className="blueGrid" src={blueGrid} alt='blueGrid' />
            </section>
            <section className='ads-double'>
            <div className='double-element'>
                <h1 className='double-title'>
                    Diversité des Plateformes Publicitaires
                    <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                </h1>
                <p className='double-content'>Nous maîtrisons la publicité en ligne sur diverses plateformes, de Google Ads à Facebook Ads en passant par TikTok et Instagram. En utilisant les plateformes les plus appropriées pour votre entreprise, nous élargissons votre portée et maximisons votre visibilité sur le web.
                </p>
            </div>
            <div className='double-element'>
                <h1 className='double-title'>
                    Suivi et Rapports
                    <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                </h1>
                <p className='double-content'>La transparence est essentielle. Nous fournissons des rapports détaillés sur les performances de vos annonces pour que vous puissiez suivre les résultats de près. Comprenez ce qui fonctionne le mieux et prenez des décisions éclairées pour optimiser vos campagnes publicitaires.
                </p>
            </div>
            </section>
            <section className='strategie'>
                <h1 className='simple-title'>
                    Suivi et Rapports
                    <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                </h1>
                <p className='simple-content'>La transparence est essentielle. Nous fournissons des rapports détaillés sur les performances de vos annonces pour que vous puissiez suivre les résultats de près. Comprenez ce qui fonctionne le mieux et prenez des décisions éclairées pour optimiser vos campagnes publicitaires.
                </p>
                <img className='greyGrid' src={greyGrid} alt='greyGrid'/>
                <img className='greyGrid' src={greyGrid} alt='greyGrid'/>
            </section>

            <Footer/>
        </div>
    )
}

export default Ads