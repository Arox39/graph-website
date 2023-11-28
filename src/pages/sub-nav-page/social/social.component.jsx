import './social.style.scss'
import './social.responsive.scss'

import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import Footer from '../../../components/footer/footer.component'
import Reveal from '../../../components/animation/Reveal.component'

import headerImg from '../../../assets/animate_element/social.webm'
import blueArrow from '../../../assets/img/ArrowBleu.svg'
import blueGrid from '../../../assets/img/BG-PB.svg'
import greyGrid from '../../../assets/img/BG-PG.svg'

const GridElement = ({title, blueGridVisible, greyGridVisible, content}) => {

    return (
        <div className='grid-element'>
            <Reveal>
                <h1 className='element-title'>
                    {title}
                    <span><img className='blueArrow' src={blueArrow} alt='blueArrow'/></span>
                </h1>
            </Reveal>
            <Reveal>
                <p className='content'>{content}</p>
            </Reveal>
            {blueGridVisible && (
                <img className='blueGrid' src={blueGrid} alt='blue grid' />
            )}
            {greyGridVisible && (
                <img className='greyGrid' src={greyGrid} alt='grey grid' />
            )}
        </div>
    )
}

const Social = () => {
    return (
        <div className='social'>
            <SubNavHeader 
            title="Une <span className='underline'>présence en ligne</span> forte pour
            <br/> une <span className='blue'>visibilité maximale.</span>"
            citation="Les réseaux sociaux sont aujourd'hui incontournables pour une <br/>entreprise qui veut être visible et toucher son public cible"
            subtitle="Gérez vos réseaux comme un pro "
            subcontent="Les réseaux sociaux sont une <strong>plateforme efficace</strong> pour atteindre <strong>votre public cible</strong> et créer une relation de confiance avec lui. Cependant, maintenir une présence active sur les réseaux sociaux peut être une tâche ardue et chronophage. C'est là que notre service de Social Media Management entre en jeu."
            img={headerImg}
            />

            <section className="social-grid">
                <GridElement title="Audit de réseaux sociaux" greyGridVisible={true} content="Nous effectuons un audit complet de vos réseaux sociaux existants pour comprendre ce qui fonctionne et ce qui peut être amélioré. Cela nous permet de créer une stratégie de gestion des réseaux sociaux sur mesure pour répondre à vos besoins spécifiques." />

                <GridElement title="Suivi et analyse" content="Nous surveillons et analysons les performances de vos réseaux sociaux pour comprendre ce qui fonctionne et ce qui ne fonctionne pas. Nous ajustons constamment notre stratégie pour maximiser l'engagement et la croissance de vos réseaux sociaux.." />

                <GridElement title="Planification de contenu" content="Nous planifions et créons un contenu original et créatif qui met en valeur votre entreprise et vos produits. Nous nous assurons que chaque publication est en ligne avec votre image de marque et vos objectifs commerciaux." />

                <GridElement title="Gestion de communauté" blueGridVisible={true} content="Nous gérons votre communauté sur les réseaux sociaux en répondant à tous les commentaires et messages entrants. Nous nous engageons avec votre public pour créer une relation de confiance et de loyauté avec votre marque." />

                <GridElement title="Gestion discord" content="Avec des millions d'utilisateurs actifs chaque jour, Discord est l'endroit idéal pour établir une communauté en ligne. Nous vous aiderons à gérer votre serveur Discord en créant une stratégie de communication efficace, en créant du contenu engageant et en modérant." />

                <GridElement title="Campagne publicitaire" content="Nous créons et gérons des campagnes publicitaires ciblées sur les réseaux sociaux pour maximiser votre retour sur investissement et atteindre un public plus large." />
            </section>
            <Footer />
        </div>
    )
}
export default Social