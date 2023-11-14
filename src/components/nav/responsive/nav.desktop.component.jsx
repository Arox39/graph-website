import { Fragment, useEffect, useState } from 'react'
import './nav.desktop.style.scss'
import { Outlet, Link } from 'react-router-dom'
import logo from '../../../assets/img/Logo - G.svg'
import arrowBleu from '../../../assets/img/ArrowBleu.svg'

import ArrowEffect from '../../shared/arrowEffect/arrowEffect.component'
import Reveal from '../../animation/Reveal'



const SubNavEl = ({title, destination, content}) => {
    return (
        <li className='sub-nav-element'>
            <Link to={destination}>
                <h1 className='sub-nav-title'>
                {title}
                <ArrowEffect arrowColor='blue' />
                </h1>
                <p className='content'>{content}</p>
            </Link>
        </li> 
    )
}


const NavDesktop = () => {

    const [scrollY, setScrollY] = useState(0)


    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const navClassName = scrollY > 0 ? 'scroll' : ''

    return (
        <Fragment>
           <nav className={`${navClassName} navbar`}>
               
                <Link to={'./'} className='logo-container'>
                <img src={logo} alt='logo graphileaf' className='logo'/>
                </Link>
                <ul className='nav-link-list'>
                    <Reveal overflow={"visible"} hauteur={15} >
                        <li className='nav-link declencheur'>
                        <div className="sub-nav-container">
                        <p>Nos solutions</p> 
                        <span><img src={arrowBleu} alt='arrow' className='arrow'/></span>
                        <ul className='sub-nav'>
                        <SubNavEl title="Graphisme" destination={'graphisme'} content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque."/>
                        
                        <SubNavEl title="Vidéo" destination={'video'} content="Créez des contenus vidéo créatifs et adaptés pour renforcer votre présence en ligne."/>
                        
                        <SubNavEl title="Social Management" destination={'social'} content="Gérez efficacement votre présence en ligne grâce à notre service de gestion de réseaux et de serveurs Discord."/>
                        
                        <SubNavEl title="Développement Web" destination={'devWeb'} content="Créez des sites web innovants et fonctionnels pour propulser votre présence en ligne."/>
                                        
                        <SubNavEl title="Veille" destination={'veille'} content="Gagnez du temps et de la précision dans votre prise de décision grâce à notre service de veille opérationnelle.."/>
                        
                        <SubNavEl title="SEO" destination={'seo'} content="Améliorez votre visibilité en ligne et atteignez les sommets des résultats de recherche."/>
                        
                        <SubNavEl title="Ads" destination={'ads'} content="Boostez votre présence avec des campagnes publicitaires ciblées et performantes."/>
                        
                        <SubNavEl title="Formation & eBooks" destination={'formation'} content=" Acquérez de nouvelles compétences et ressources avec nos formations en ligne et eBooks."/>
                        
                        </ul>
                        </div>
                        </li>
                    </Reveal>
                    <Reveal overflow={"visible"} hauteur={15} delay={0.2}>
                        <li className='nav-link'>
                            <Link to={'project'}>Nos projets</Link>
                        </li>   
                    </Reveal>
                    <Reveal overflow={"visible"} hauteur={15} delay={0.3}>
                        <li className='nav-link'>
                            <Link to={'agence'}>Notre agence</Link>
                        </li>   
                    </Reveal>
                    <Reveal overflow={"visible"} hauteur={15} delay={0.4}>
                        <li className='btn-container'>
                            <Link to={'contact'} className='btn'>
                                Nous contacter
                                <ArrowEffect bgcolor='#005570'/>
                            </Link>
                        </li>
                    </Reveal>
                </ul>
           </nav>
           <Outlet/>
        </Fragment>
    )
}

export default NavDesktop