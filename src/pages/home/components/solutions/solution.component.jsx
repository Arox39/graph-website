import { Link } from 'react-router-dom'

import grid from '../../../../assets/img/BG-PB.svg'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import './solution.style.scss'



const SolutionBubble = ({title, content, gridVisible}) => {


    return (
        <div className='bubble btn'>
        <Link to={'/graphiLeaf'} className='bubble-link'>
            <h1 className='bubble-title'>{title}</h1>
            <p className='bubble-content'>{content}</p>
            <ArrowEffect />
        </Link>
        <img className={`blue-grid ${gridVisible}`} src={grid} alt='grid of circle'/> 
        </div>
            )
        }
        
        
        const Solution = () => {
            return (
                <div className='solution-container'>
                    <div className='top-container'>
                    <h3 className='solution-title'>Nos solutions</h3>
                    <p className='solution-subtitle'>Pour vous</p>
                    <p className='solution-citation'>“Nous sommes fiers de cultiver l'image de marque de nos clients et de les aider à atteindre leur potentiel en ligne”</p>
                </div>
            <div className='bubble-container'>
                <SolutionBubble title="Graphisme" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque." gridVisible="hide"/>

                <SolutionBubble title="Vidéo" content="Créez des contenus vidéo créatifs et adaptés pour renforcer votre présence en ligne." gridVisible="hide"/>

                <SolutionBubble title="Social management" content="Gérez efficacement votre présence en ligne grâce à notre service de gestion de réseaux et de serveurs Discord." gridVisible=""/>
                
                <SolutionBubble title="Dev Web" content="Créez des sites web innovants et fonctionnels pour propulser votre présence en ligne." gridVisible="hide"/>

                
                <SolutionBubble title="Veille" content="Gagnez du temps et de la précision dans votre prise de décision grâce à notre service de veille opérationnelle." gridVisible="hide"/>
                
                <SolutionBubble title="SEO" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque." gridVisible="hide"/>
                <SolutionBubble title="Formations" content="Boostez votre carrière avec nos formations." gridVisible="hide"/>
                <SolutionBubble title="Ads" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque." gridVisible="hide"/>
                <SolutionBubble title="eBooks" content="Trouvez l'inspiration et les clés de la réussite sur la création d'agence et les stratégies marketing." gridVisible="hide"/>

               
            </div>
        </div>
    )
}

export default Solution