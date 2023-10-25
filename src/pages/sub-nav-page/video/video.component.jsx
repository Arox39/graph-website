import './video.style.scss'
import './video.responsive.scss'
import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import headerImg from '../../../assets/img/Illustration Vidéo.svg'
import blueArrow from '../../../assets/img/ArrowBleu.svg'
import blueGrid from '../../../assets/img/BG-PB.svg'
import greyGrid from '../../../assets/img/BG-PG.svg'
import Footer from '../../../components/footer/footer.component'

const Video = () => {
    return (
        <div className='video'>
            <SubNavHeader 
            title="La vidéo <span className='underline'>marketing</span>
            <br/> la clé de<span className='blue'> votre succés.</span>"
            citation='La vidéo offre un impact inégalé pour attirer et engager votre <br/> public cible.'
            subtitle="La vidéo, votre alliée"
            subcontent="<strong>La vidéo</strong> est aujourd'hui la <span>star incontestée</strong> des réseaux sociaux, notamment grâce à TikTok, mais aussi sur Instagram, Facebook, YouTube et bien d'autres. Nous sommes là pour <strong>vous aider</strong> à tirer parti de cette audience massive en créant des vidéos qui attirent et engagent <strong>votre public cible</strong>. Qu'il s'agisse de tutoriels, de publicités, de vidéos de marque ou de contenu éducatif, nous sommes là pour vous aider à <span>vous démarquer</strong>."
            img={headerImg}
            />
            <section className='sub-part'>
                <div className='social-network'>
                    <h1 className='sub-title'>
                        TikTok
                        <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                    </h1>
                    <p className='content'>
                        TikTok est devenu l'un des réseaux sociaux les plus <strong> populaires au monde,</strong> avec plusieurs milliards d'utilisateurs actifs mensuels. Grâce à <strong>notre expertise</strong> en création de contenu vidéo, nous pouvons vous aider à exploiter cette plateforme pour atteindre un public jeune et engagé. Que vous cherchiez à lancer une campagne publicitaire ou simplement à créer du contenu de marque,<strong> nous vous aiderons à réussir sur TikTok.</strong>
                    </p>
                </div>
                <div className='social-network'>
                    <h1 className='sub-title'>
                        Instagram
                        <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                    </h1>
                    <p className='content'>
                        Instagram Reels est une fonctionnalité qui permet aux utilisateurs de créer et de partager des vidéos <strong>courtes et engageantes</strong> sur Instagram. Nous pouvons vous aidons à atteindre votre public cible et créer du <strong>contenu de marque qui attire l'attention.</strong> Que vous cherchiez à lancer une campagne publicitaire ou simplement à créer du contenu pour votre page Instagram,<strong>nous vous aiderons à réussir avec Instagram Reels.</strong>
                    </p>
                </div>
                <div className='social-network'>
                    <h1 className='sub-title'>
                        Youtube
                        <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                    </h1>
                    <p className='content'>
                        YouTube est l’un des plus <strong>grand moteur de recherche</strong> au monde, avec plusieurs milliards d'utilisateurs actifs mensuels. Nous vous aidons à tirer parti de cette plateforme pour atteindre un public plus large et augmenter <strong> votre visibilité en ligne.</strong> Que vous cherchiez à lancer une chaîne YouTube ou à créer des vidéos de marque, <strong>nous vous aiderons ons à réussir sur YouTube.</strong>
                    </p>
                </div>

                <img src={greyGrid} className='greyGrid' alt='grey grid' />
            </section>


            <section className='description-container'>
                <h2>La vidéo marketing, c’est utiliser la vidéo pour atteindre vos objectifs commerciaux.
                <span><img className='blueArrow responsive-arrow' src={blueArrow} alt='blue arrow'/></span></h2>
                <p>Qu'il s'agisse d'augmenter les ventes, de générer des leads ou d'accroître la notoriété de votre marque, notre équipe de professionnels est là pour vous aider à élaborer une stratégie de vidéo marketing efficace et adaptée à vos besoins spécifiques.</p>
                <img className='blueGrid' src={blueGrid} alt='blue grid'/>
            </section>


            <Footer />
        </div>
    )
}

export default Video