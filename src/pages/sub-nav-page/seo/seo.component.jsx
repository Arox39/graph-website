import './seo.style.scss'
import './seo.responsive.scss'

import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import Footer from '../../../components/footer/footer.component'
import headerImg from '../../../assets/img/Illustration SEO.svg'
import blueArrow from '../../../assets/img/ArrowBleu.svg'
import greyGrid from '../../../assets/img/BG-PG.svg'
import blueGrid from '../../../assets/img/BG-PB.svg'


const Seo = () => {
    return (
        <div className='seo'>
            <SubNavHeader 
            title=" Atteignez le <span className='underline'>top </span> 
            <br/> des <span className='blue'> Moteur de Recherche.</span>"
            citation="Le SEO est la clé pour atteindre les sommets  des résultats <br/> de recherche en ligne."
            subtitle="Optimisation de votre Site Web "
            subcontent="L'optimisation de votre site web est la première étape pour améliorer<strong> votre visibilité en ligne.</strong>  Chez GraphiLeaf, nous <strong>analysons</strong> et <strong>optimisons</strong> chaque aspect de votre site web, de la structure des pages au contenu, en passant par les balises méta. Notre objectif est de rendre votre site web convivial pour les moteurs de recherche et de le positionner en <strong>haut des résultats.</strong>"
            img={headerImg}
            />

            <section className='keywords'>
                <h1 className='keywords-title seo-title'>
                    Recherche de Mots-clés
                    <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                </h1>
                <p className='keywords-content'>
                    La recherche de mots-clés est essentielle pour comprendre ce que recherchent <strong>vos clients potentiels.</strong> Nous effectuons une recherche approfondie des mots-clés pertinents pour votre secteur d'activité et <strong>votre public cible.</strong> En utilisant ces mots-clés de manière stratégique dans votre contenu, nous augmentons vos chances d'apparaître en <strong>haut des résultats</strong> de recherche.
                </p>
                <img className='greyGrid' src={greyGrid} alt='grey grid'/>
            </section>
            <section className='quality'>
                <h1 className='quality-title seo-title'>
                    Création de Contenu de Qualité
                    <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                </h1>
                <p className='quality-content'>
                    <strong>La qualité</strong> du contenu est <strong>essentielle pour le référencement.</strong> Notre équipe de rédaction crée du contenu informatif, <strong>engageant et pertinent</strong> pour votre public. Nous produisons des articles de blog, des pages web et d'autres types de contenu qui répondent aux besoins de vos visiteurs tout en étant optimisés pour les moteurs de recherche.
                </p>
                <img className='blueGrid blueGrid-top' src={blueGrid} alt='blue grid'/>
                <img className='blueGrid blueGrid-bot' src={blueGrid} alt='blue grid'/>
            </section>


            <section className='suivie'>
                <h1 className='seo-title'>
                    Suivi et Analyse des Performances
                    <span><img className='blueArrow' src={blueArrow} alt='blueArrow' /></span>
                </h1>
                <div className='suivie-content'>
                    <div className='suivie-element'>
                        Nous ne nous contentons pas d'optimiser votre site web une fois et de partir. Nous surveillons constamment les performances de votre site, en utilisant des outils avancés pour suivre les classements, le trafic et les conversions. Cette approche nous permet d'ajuster notre stratégie en temps réel pour des résultats optimaux.
                    </div>
                    <div className='suivie-element'>
                        Que vous souhaitiez améliorer la visibilité de votre site web existant ou que vous commenciez à partir de zéro, notre expertise en SEO vous aidera à atteindre les sommets des résultats de recherche et à attirer plus de visiteurs qualifiés sur votre site. Découvrez comment nous pouvons mettre en œuvre une stratégie sur mesure pour votre entreprise.
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Seo