import './ads.style.scss'
import './ads.responsive.scss'

import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import Footer from '../../../components/footer/footer.component'
import Reveal from '../../../components/animation/Reveal.component'

import headerImg from '../../../assets/animate_element/ads.webm'
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
                subcontent="<strong>Atteignez votre public idéal</strong> avec des publicités ciblées. Nos campagnes publicitaires en ligne sont conçues pour mettre en avant <strong>votre entreprise</strong> auprès des personnes les plus susceptibles de s'intéresser <strong>à vos produits </strong> ou <strong>services.</strong> Nous identifions votre public cible pour vous assurer de toucher les bonnes personnes au bon moment."
                img={headerImg}
            />
            <section className='campagne'>
                <Reveal>
                    <h1 className='simple-title'>
                        Campagnes Performantes
                        <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                    </h1>
                </Reveal>
                <Reveal>
                    <p className='simple-content'>
                    Des <strong>campagnes publicitaires performantes</strong> sont essentielles pour obtenir des résultats tangibles. Nous optimisons constamment vos campagnes pour <strong>maximiser votre retour sur investissement.</strong> Grâce à des stratégies adaptées à votre entreprise, nous vous aidons à obtenir <strong> des résultats concrets,</strong> que ce soit en termes de ventes, de prospects ou de notoriété.
                    </p>
                </Reveal>
                <img className="blueGrid" src={blueGrid} alt='blueGrid' />
            </section>
            <section className='ads-double'>
                <div className='double-element'>
                    <Reveal>
                        <h1 className='double-title'>
                            Diversité des Plateformes Publicitaires
                            <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                        </h1>
                    </Reveal>
                    <Reveal overflow={"visible"}>
                        <p className='double-content'>
                        Nous maîtrisons la publicité en ligne sur diverses plateformes, de Google Ads à Facebook Ads en passant par TikTok et Instagram. En utilisant les plateformes les plus appropriées pour votre entreprise, nous élargissons votre portée et maximisons votre visibilité sur le web.
                        </p>
                    </Reveal>
                </div>
                <div className='double-element'>
                    <Reveal>
                        <h1 className='double-title'>
                            Suivi et Rapports
                            <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                        </h1>
                    </Reveal>
                    <Reveal overflow={"visible"}>
                        <p className='double-content'>
                        La transparence est essentielle. Nous fournissons des rapports détaillés sur les performances de vos annonces pour que vous puissiez suivre les résultats de près. Comprenez ce qui fonctionne le mieux et prenez des décisions éclairées pour optimiser vos campagnes publicitaires.
                        </p>
                    </Reveal>
                </div>
            </section>
            <section className='strategie'>
                <Reveal>
                    <h1 className='simple-title'>
                        Personnalisation de Votre Stratégie
                        <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                    </h1>
                </Reveal>
                <Reveal overflow={"visible"}>
                    <p className='simple-content'>Chaque entreprise est unique, c'est pourquoi nous personnalisons votre stratégie publicitaire en fonction de vos besoins spécifiques. Nous comprenons vos objectifs, votre secteur d'activité et votre public cible pour créer des campagnes publicitaires adaptées à votre entreprise.
                    </p>
                </Reveal>
                <img className='greyGrid' src={greyGrid} alt='greyGrid'/>
                <img className='greyGrid' src={greyGrid} alt='greyGrid'/>
            </section>
            <Footer/>
        </div>
    )
}
export default Ads