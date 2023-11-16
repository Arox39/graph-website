import { Link } from 'react-router-dom'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import './solution.style.scss'
import greygrid from '../../../../assets/img/BG-PG.svg'
import Reveal from '../../../../components/animation/Reveal'
const Solution = () => {
    return(
        <div className='agence-solution-container'>
            <Reveal>
                <h2 className='solution-title'>Des solutions sur mesure pour chaque besoins :</h2>
            </Reveal>
            <Reveal overflow={"visible"}>
            <ul className='solution-list'>
                <li className='solution-element'>
                    <Link to={'../graphisme'} className='btn'>
                    Graphisme <span className='specification'>(Identité visuelle, support publicitaire, social media design...)</span>
                    <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'> 
                    <Link to={'../video'} className='btn'>
                        Vidéo <span className='specification'> (TikTok, YouTube, Reels...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element responsive-element'> 
                    <Link to={'../social'} className='btn'>
                        Social <br/> management  <span className='specification'>(Gestion des réseaux sociaux, création de contenus, analyse des concurrents...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element responsive-element'> 
                    <Link to={'../devWeb'} className='btn'>
                        Web <br /> Développement  <span className='specification'>(Création de site web et application sur mesure)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element responsive-element'>
                    <Link to={'../veille'}  className='btn'>
                        Veille <br />opérationnelle  <span className='specification'>(Surveillance et analyse de l'image de marque, ajustement des stratégies)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'>
                    <Link to={'../ads'}  className='btn'>
                        Ads  <span className='specification'>(Des campagnes publicitaires ciblées et performantes)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'>
                    <Link to={'../seo'}  className='btn'>
                        SEO <span className='specification'>(Un référencement naturel pour atteindre de le top des résultats de recherche)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                
            </ul>
            </Reveal>
            <img className='grey-grid' src={greygrid} alt='grey grid'/>
            <Reveal overflow={"visible"}>
                <Link to={'../contact'} className='solution-btn btn'>
                    Échangeons sur votre projet 
                    <ArrowEffect bgcolor='#005570' />
                </Link>
            </Reveal>

        </div>
    )
}

export default Solution