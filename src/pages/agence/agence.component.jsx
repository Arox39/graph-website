import './agence.style.scss'
import './agence.responsive.scss'

import Footer from '../../components/footer/footer.component'
import Solution from './components/solution/solution.component'
import Reveal from '../../components/animation/Reveal.component'

import bluegrid from '../../assets/img/BG-PB.svg'
import nuage from '../../assets/animate_element/nuage.webm'
const Agence = () => {
    return (
        <div className='agence'>
            <header className='header'>
                <Reveal>
                    <h1 className='title'>Votre agence de <span className='underline'>
                        communication</span> <br/>
                        & <span className='blue'>de marketing digital.</span>
                    </h1>
                </Reveal>
                <Reveal overflow={"visible"}>
                    <div className='presentation'>
                        GraphiLeaf est une agence de communication et de marketing digital qui propose une 
                        gamme complète de services pour aider les petites entreprises, les structures et les indépendants à maximiser leur 
                        présence en ligne.
                    </div>
                </Reveal>

            </header>

            <video className='agence-illustration' autoPlay muted>
                <source src={nuage} type='video/webm'/>
                votre navigateur ne supporte pas la balise video.
            </video>
            <div className='team'>
                <Reveal>
                    <h1 className='title'>Une équipe <span className='underline'>complète</span> <br/>
                    & <span className='blue'>compétente.</span></h1>
                </Reveal> 
                <Reveal>
                    <p className='team-content'>
                    Spécialisés dans la <span className='blue'>communication</span> et le <span className='blue'>marketing digital</span>, nous avons développé une expertise dans plusieurs domaines clés pour aider les petites entreprises, les structures et les indépendants à maximiser leur présence et leur développement en ligne. <br/> <br/> Notre équipe <span className='blue'>créative et dynamique</span> se compose d'experts à chaque domaine. Des compétences diverses et une approche unique et personnalisée, afin d'élaborer des stratégies sur mesure pour répondre à <span className='blue'>vos besoins.</span></p>
                </Reveal>

                <img className='blue-grid' src={bluegrid} alt='a blue grid'/>
            </div>

            <Solution/>

            <div className='why'>
                <Reveal>
                    <h1 className='title'>Pourquoi <span className='blue'>GraphiLeaf</span> ?</h1>
                </Reveal>
                <div className='why-content'>
                    <Reveal overflow={"visible"}>
                        <p className='left'>
                            Nous sommes <strong>passionnés par chaque projet</strong> que nous entreprenons. Nous nous engageons à fournir des résultats de qualité supérieure, en accord avec <strong>vos besoins et vos objectifs</strong>. Nous croyons fermement que chaque entreprise a <strong>son histoire</strong> et mérite une stratégie de communication unique pour la partager avec le monde. C'est pourquoi nous travaillons en étroite collaboration avec nos clients pour comprendre leur vision et élaborer des <strong>solutions personnalisées</strong>.
                        </p>
                    </Reveal>
                    <Reveal overflow={"visible"}>
                        <div className='right'>
                            <strong>GraphiLeaf ?</strong> C'est simple, 
                                <ul>
                                <li>
                                    <strong>Graphi</strong> 
                                    <span> = La conception graphique et la création d’images numériques</span>
                                </li>
                                
                                <li>
                                    <strong>Leaf</strong>
                                    <span> = a croissance, le renouveau et la nature. Reflète la mission d’aider les entreprises à se développer 
                                    et atteindre leurs objectifs marketing tout en respectant l’environnement</span> 
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Agence