import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import grid from '../../../../assets/img/BG-PB.svg'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import './solution.style.scss'
import Reveal from '../../../../components/animation/Reveal'
const SolutionBubbleItem = ({title, link, content, gridVisible}) => {


return (
    <div className='bubble btn'>
    <Link to={link} className='bubble-link'>
        <h1 className='bubble-title'>{title}</h1>
        <p className='bubble-content'>{content}</p>
        <ArrowEffect />
    </Link>
    <img className={`blue-grid ${gridVisible}`} src={grid} alt='grid of circle'/> 
    </div>
        )
}
        
        


const SolutionBubble = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);

        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='bubble-container'>
            <Reveal hauteur={75} overflow={"visible"}>
                <SolutionBubbleItem title="Graphisme" link="graphisme" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque." gridVisible="hide"/>
            </Reveal>
            <Reveal hauteur={75} overflow={"visible"} delay={!isMobile ? 0.2 : 0}>
                <SolutionBubbleItem title="Vidéo" link="video" content="Créez des contenus vidéo créatifs et adaptés pour renforcer votre présence en ligne." gridVisible="hide"/>
            </Reveal>
            <Reveal hauteur={75} overflow={"visible"} delay={!isMobile ? 0.3 : 0}>
                <SolutionBubbleItem title="Social management" link="social" content="Gérez efficacement votre présence en ligne grâce à notre service de gestion de réseaux et de serveurs Discord." gridVisible=""/>            
            </Reveal>

            <Reveal hauteur={75} overflow={"visible"}>
                <SolutionBubbleItem title="Dev Web" link="devWeb" content="Créez des sites web innovants et fonctionnels pour propulser votre présence en ligne." gridVisible="hide"/>            
            </Reveal>
            <Reveal hauteur={75} overflow={"visible"} delay={!isMobile ? 0.2 : 0}>
                <SolutionBubbleItem title="Veille" link="veille" content="Gagnez du temps et de la précision dans votre prise de décision grâce à notre service de veille opérationnelle." gridVisible="hide"/>
            </Reveal>
            <Reveal hauteur={75} overflow={"visible"} delay={!isMobile ? 0.3 : 0}>
                <SolutionBubbleItem title="SEO" link="seo" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque." gridVisible="hide"/>
            </Reveal>
            <Reveal hauteur={75} overflow={"visible"}>
                <SolutionBubbleItem title="Formations" link="formation" content="Boostez votre carrière avec nos formations." gridVisible="hide"/>
            </Reveal>
            <Reveal hauteur={75} overflow={"visible"} delay={!isMobile ? 0.2 : 0}>
                <SolutionBubbleItem title="Ads" link="ads" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque." gridVisible="hide"/>
            </Reveal>
            <Reveal hauteur={75} overflow={"visible"} delay={!isMobile ? 0.3 : 0}>
                <SolutionBubbleItem title="eBooks" link="formation" content="Trouvez l'inspiration et les clés de la réussite sur la création d'agence et les stratégies marketing." gridVisible="hide"/>
            </Reveal>
        </div>
    )
}

export default SolutionBubble