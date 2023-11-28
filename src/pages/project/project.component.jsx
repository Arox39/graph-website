import './project.style.scss'
import './project.responsive.scss'

import Footer from '../../components/footer/footer.component'
import desktop from '../../assets/animate_element/projet.webm'
import CardContainer from './component/card-container/card-container.component'
import Reveal from '../../components/animation/Reveal.component'
import cards from './data'
const Project = () => {
    return (
        <div className="project"> 
            <header className='projectHeader'>
                <Reveal>
                    <h1 className='title'>
                        L'expertise de <span className='underline'>l'agence</span> <br/>
                        en <span className='blue'>images.</span>
                    </h1>
                </Reveal>
                <Reveal>
                    <p className='citation'>“Explorez notre selection de projets et découvrez comment nous <br/>
                    avons aidé nos clients à atteindre leurs objectifs.”</p>
                </Reveal>
                <Reveal>
                    <p className='more'>Cliquez sur les projets pour en savoir plus !</p>
                </Reveal>
                <video className='illustration' autoPlay muted>
                    <source src={desktop} type='video/webm'/>
                    votre navigateur ne supporte pas la balise video.
                </video>
            </header>
            <CardContainer cards={cards}/>
            <Footer/>
        </div>
    )
}
export default Project