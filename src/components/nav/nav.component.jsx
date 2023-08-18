import { Fragment, useEffect, useState } from 'react'
import './nav.style.scss'
import { Outlet, Link } from 'react-router-dom'
import logo from '../../assets/img/Logo - G.svg'
import arrowBleu from '../../assets/img/ArrowBleu.svg'
import arrowBleu2 from '../../assets/img/Arrow2Bleu.svg'

import Btn from '../shared/btn/btn.component'



const SubNavEl = ({title, content}) => {
    return (
        <li className='sub-nav-element'>
            <h1>
            {title}
            <span>
                <img src={arrowBleu} alt="arrow" className='arrowBleu'/>
                <img src={arrowBleu2} alt="arrow" className='arrowBleu2'/>
            </span>
            </h1>
            <p className='content'>{content}</p>
        </li> 
    )
}


const Nav = () => {

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

    const navClassName = scrollY !== 0 ? 'scroll' : ''

    return (
        <Fragment>
           <nav className={`${navClassName} navbar`}>
                <Link to={'/graphiLeaf'}>
                    <img src={logo} alt='logo graphileaf' className='logo'/>
                </Link>
                <ul className='nav-link-list'>
                    <li className='nav-link declencheur'>
                        <Link to={'/graphiLeaf'} className="sub-nav-container">
                            <p>Nos solutions</p> 
                            <span><img src={arrowBleu} alt='arrow' className='arrow'/></span>
                            <ul className='sub-nav'>
                                <SubNavEl title="Graphisme" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque."/>

                                <SubNavEl title="Vidéo" content="Créez des contenus vidéo créatifs et adaptés pour renforcer votre présence en ligne."/>

                                <SubNavEl title="Social Management" content="Gérez efficacement votre présence en ligne grâce à notre service de gestion de réseaux et de serveurs Discord."/>

                                <SubNavEl title="Formation" content="Boostez votre carrière avec nos formations."/>
                                
                                <SubNavEl title="Veille" content="Gagnez du temps et de la précision dans votre prise de décision grâce à notre service de veille opérationnelle.."/>
                               
                                <SubNavEl title="SEO" content="Trouvez les clés de la réussite sur la création d'agence et de stratégies marketing."/>
                                
                                <SubNavEl title="Ads" content="Trouvez les clés de la réussite sur la création d'agence et de stratégies marketing."/>
                                
                                <SubNavEl title="eBooks" content="Trouvez les clés de la réussite sur la création d'agence et de stratégies marketing."/>
                                
                            </ul>
                        </Link>
                    </li>
                    <li className='nav-link'>
                        <Link to={'/graphiLeaf'}>Nos projets</Link>
                    </li>   
                    <li className='nav-link'>
                        <Link to={'/graphiLeaf'}>Notre agence</Link>
                    </li>   
                    <li className='btn'>
                        <Btn  title="Nous contacter" color="blue"/>
                    </li>
                </ul>
           </nav>
           <Outlet/>
        </Fragment>
    )
}

export default Nav