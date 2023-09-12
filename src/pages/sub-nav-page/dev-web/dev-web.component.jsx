import './dev-web.style.scss'
import Footer from '../../../components/footer/footer.component'
import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import headerImg from '../../../assets/img/Illustration Dev.svg'
import blueArrow from '../../../assets/img/ArrowBleu.svg'
import blueGrid from '../../../assets/img/BG-PB.svg'

const DevWeb = () => {
    return (
        <div className='dev-web'>
            <SubNavHeader 
            title="Votre <span className='underline'>Site Web</span><br/> Votre
            <span className='blue'> Histoire.</span>"
            citation='Le développement web est la clé pour transformer vos idées <br/> en réalité numérique.'
            subtitle="Sites Web sur Mesure"
            subcontent="Les sites web qui répondent parfaitement à vos besoins. Nos développeurs web expérimentés conçoivent des sites web entièrement personnalisés, adaptés à votre image de marque et à vos objectifs. Nous travaillons en étroite collaboration avec vous pour donner vie à votre vision en ligne."
            img={headerImg}
            />
            <section className='e-com'>
                <h1 className='ecom-title'>E-Commerce Performant 
                <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                </h1>
                <p className='ecom-content'>Si vous êtes dans le commerce en ligne, nous pouvons créer une boutique en ligne puissante et performante pour votre entreprise. Nos solutions e-commerce vous permettent de gérer facilement vos produits, vos commandes et vos paiements en ligne. Maximisez vos ventes en ligne avec un site e-commerce conçu sur mesure.</p>
                <img src={blueGrid} className='blueGrid' alt='blueGrid'/>
            </section>
            <section className="web-content">
                <div className='content-element'>
                    <h1 className='element-title'>UX / UI</h1>
                    <p className='element-content'>Un site web doit offrir une expérience utilisateur exceptionnelle. Nous nous efforçons de créer des designs web modernes et intuitifs qui garantissent une navigation fluide pour vos visiteurs. Notre objectif est de rendre votre site web engageant et accessible sur tous les appareils.</p>
                </div>
                <div className='content-element'>
                    <h1 className='element-title'>Maintenance et Mises à Jour</h1>
                    <p className='element-content'>Nous ne nous contentons pas de créer votre site web, nous nous engageons également à le maintenir en parfait état. Nous effectuons régulièrement des mises à jour de sécurité, des améliorations de performance et des ajustements selon vos besoins. Vous pouvez compter sur nous pour que votre site fonctionne de manière optimale en permanence.</p>
                </div>
            </section>
        

            <Footer />
        </div>
    )
}

export default DevWeb