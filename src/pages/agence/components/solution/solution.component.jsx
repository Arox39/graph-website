import { Link } from 'react-router-dom'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import './solution.style.scss'
import greygrid from '../../../../assets/img/BG-PG.svg'
const Solution = () => {
    return(
        <div className='solution-container'>
            <h2 className='solution-title'>Des solutions sur mesure pour chaque besoins :</h2>

            <ul className='solution-list'>
                <li className='solution-element'>
                    <Link to={''} className='btn'>
                        Graphisme <span>(identité visuelle, support publicitaire, social media design...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'> 
                    <Link to={''} className='btn'>
                        Vidéo <span> (TikTok, YouTube, Reels...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'> 
                    <Link to={''} className='btn'>
                        Social management  <span>(gestion des réseaux sociaux, création de contenus, analyse des concurrents...)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                <li className='solution-element'>
                    <Link to={''}  className='btn'>
                        Veille opérationnelle  <span>(surveillance et analyse de l'image de marque, ajustement des stratégies)</span>
                        <ArrowEffect arrowColor='blue'/>
                    </Link>
                </li>
                
            </ul>
            <img className='grey-grid' src={greygrid} alt='grey grid'/>
            <Link to={''} className='solution-btn btn'>
                Échangeons sur votre projet 
                <ArrowEffect bgcolor='#005570' />
            </Link>

        </div>
    )
}

export default Solution