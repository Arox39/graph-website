import './graphisme.style.scss'
import './graphisme.responsive.scss'
import blueArrow from '../../../assets/img/ArrowBleu.svg'
import greyGrid from '../../../assets/img/BG-PG.svg'
import blueGrid from '../../../assets/img/BG-PB.svg'

import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import headerImg from '../../../assets/img/Illustration Graphisme.svg'
import Footer from '../../../components/footer/footer.component'


const Graphisme = () => {
    return (
        <div className='graphisme'>
            <SubNavHeader 
            title="Notre <span className='underline'>créativité au services</span>
            <br>de <span className='blue'>votre image.</span>"
            citation='Le design graphique est un élément essentiel pour réussir et se <br/> démarquer sur le marché en ligne.'
            subtitle="Identité visuelle"
            subcontent="L'identité visuelle représentent votre entreprise, le logo, les couleurs, les typographies et les icônes. Chez GraphiLeaf, nous créons une <strong>identité visuelle unique</strong> pour votre entreprise qui vous permettra de vous démarquer de la concurrence et de renforcer la reconnaissance de votre marque."
            img={headerImg}
            />


            <section className='sub-part'>
                <div className='title-container'>
                    <h1>Supports de communication</h1>
                    <img src={blueArrow} className='blueArrow' alt='blueArrow'/>
                </div>
                <p className='content'>
                    Nous réalisons tous les supports de communication nécessaires pour votre entreprise, tels que les cartes de visite, les flyers, les brochures et les affiches. Nous concevons des supports de qualité professionnelle qui <strong>renforcent l'image de votre entreprise</strong> et vous permettent de <strong>communiquer efficacement</strong> avec votre public.
                </p>
                <img className='grey-grid' src={greyGrid} alt='grey grid'/>
            </section>
            
            <section className='description-container'>
                <div className='left'>
                    <div className='title-container'>
                        <h1>Design Web</h1>
                        <img src={blueArrow} className='blueArrow' alt='blueArrow'/>
                    </div>
                    <p className='description'>
                    Nous proposons des services de design web afin d'améliorer l'apparence de votre site web. Nous créons des designs modernes, épurés et <strong>adaptés à votre identité</strong> visuelle pour une expérience utilisateur optimale. Nous pouvons également concevoir des pages de destination (landing pages), des maquettes de site web ainsi que des bannières publicitaires.
                    </p>

                </div>
                <div className='right'>
                    <div className='title-container'>
                        <h1>Retouche d'images</h1>
                        <img src={blueArrow} className='blueArrow' alt='blueArrow'/>
                    </div>
                    <p className='description'>
                        Nous proposons également des services de retouche d'images pour améliorer la qualité de vos visuels existants ou pour les adapter à <strong>vos besoins.</strong> Que ce soit pour des photos de produits, des portraits professionnels ou des images de votre entreprise, nous pouvons améliorer leur qualité pour une présentation professionnelle.
                    </p>
                </div>
                <img className='blueGrid' src={blueGrid} alt='blue grid'/>
            </section>
            <Footer />
        </div>
    )
}

export default Graphisme