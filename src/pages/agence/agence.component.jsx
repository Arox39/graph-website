import './agence.style.scss'

import illustration from '../../assets/img/Nuage.png'
import bluegrid from '../../assets/img/BG-PB.svg'
import Footer from '../../components/footer/footer.component'
const Agence = () => {
    return (
        <div>
            <header className='header'>
            
                <h1 className='title'>Votre agence de <span className='underline'>communication</span> <br/>
                & <span className='blue'>de marketing digital.</span></h1>

                <div className='presentation'>GraphiLeaf est une agence de communication et de marketing digital qui propose une gamme complète de services pour aider les petites entreprises, les structures et les indépendants à maximiser leur présence en ligne.</div>
                <img className='agence-illustration' src={illustration} alt='illustration'/>
            </header>
            <div className='team'>
                <h1 className='title'>Une équipe <span className='underline'>complète</span> <br/>
                & <span className='blue'>compétente.</span></h1>
                <p className='team-content'>
                Spécialisés dans la <span className='blue'>communication</span> et le <span className='blue'>marketing digital</span>, nous avons développé une expertise dans plusieurs domaines clés pour aider les petites entreprises, les structures et les indépendants à maximiser leur présence et leur développement en ligne. <br/> <br/> Notre équipe <span className='blue'>créative et dynamique</span> se compose d'experts à chaque domaine. Des compétences diverses et une approche unique et personnalisée, afin d'élaborer des stratégies sur mesure pour répondre à <span className='blue'>vos besoins.</span></p>
                <img className='blue-grid' src={bluegrid} alt='a blue grid'/>
            </div>

            <Footer />
        </div>
    )
}


export default Agence