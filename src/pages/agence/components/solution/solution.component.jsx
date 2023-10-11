import { Link } from 'react-router-dom'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import './solution.style.scss'
import greygrid from '../../../../assets/img/BG-PG.svg'
const Solution = () => {
    return(
        <div className='agence-solution-container'>
            <h2 className='solution-title'>Des solutions sur mesure pour chaque besoins :</h2>

            <ul className='solution-list'>
                <li className='solution-element'>
                    <Link to={'../graphisme'} className='btn'>
                        Graphisme <span>(Identité visuelle, support publicitaire, social media design...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'> 
                    <Link to={'../video'} className='btn'>
                        Vidéo <span> (TikTok, YouTube, Reels...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'> 
                    <Link to={'../social'} className='btn'>
                        Social management  <span>(Gestion des réseaux sociaux, création de contenus, analyse des concurrents...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'> 
                    <Link to={'../devWeb'} className='btn'>
                        Développement Web  <span>(Création de site web et application sur mesure)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'>
                    <Link to={'../veille'}  className='btn'>
                        Veille opérationnelle  <span>(Surveillance et analyse de l'image de marque, ajustement des stratégies)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'>
                    <Link to={'../ads'}  className='btn'>
                        Ads  <span>(Des campagnes publicitaires ciblées et performantes)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'>
                    <Link to={'../seo'}  className='btn'>
                        SEO <span>(Un référencement naturel pour atteindre de le top des résultats de recherche)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                
            </ul>
            <img className='grey-grid' src={greygrid} alt='grey grid'/>
            <Link to={'../contact'} className='solution-btn btn'>
                Échangeons sur votre projet 
                <ArrowEffect bgcolor='#005570' />
            </Link>

        </div>
    )
}

export default Solution