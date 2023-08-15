import { Fragment } from 'react'
import './nav.style.scss'
import { Outlet, Link } from 'react-router-dom'
import logo from '../../assets/img/graphileaf.svg'
import arrowBleu from '../../assets/img/ArrowBleu.svg'
import arrowBleu2 from '../../assets/img/Arrow2Bleu.svg'
import arrow from '../../assets/img/Arrow.svg'
import arrow2 from '../../assets/img/Arrow2.svg'



const SubNavEl = ({title, content}) => {
    return (
        <li className='sub-nav-element'>
            <h1 className='title'>
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
    return (
        <Fragment>
           <nav className='navbar'>
                <Link to={'/'}>
                    <img src={logo} alt='logo graphileaf' className='logo'/>
                </Link>
                <ul className='nav-link-list'>
                    <li className='nav-link declencheur'>
                        <Link to={'/'} className="sub-nav-container">
                            <p>Nos solutions</p> 
                            <span><img src={arrowBleu} alt='arrow' className='arrow'/></span>
                            <ul className='sub-nav'>
                                <SubNavEl title="Graphisme" content="Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque."/>

                                <SubNavEl title="Vidéo" content="Créez des contenus vidéo créatifs et adaptés pour renforcer votre présence en ligne."/>

                                <SubNavEl title="Social Management" content="Gérez efficacement votre présence en ligne grâce à notre service de gestion de réseaux et de serveurs Discord."/>

                                <SubNavEl title="Veille" content="Gagnez du temps et de la précision dans votre prise de décision grâce à notre service de veille opérationnelle.."/>

                                <SubNavEl title="Formation" content="Boostez votre carrière avec nos formations."/>

                                <SubNavEl title="eBooks" content="Trouvez les clés de la réussite sur la création d'agence et de stratégies marketing."/>
                                
                            </ul>
                        </Link>
                    </li>
                    <li className='nav-link'>
                        <Link to={'/'}>Nos projets</Link>
                    </li>   
                    <li className='nav-link'>
                        <Link to={'/'}>Notre agence</Link>
                    </li>   
                    <li>
                        <Link to={'/'} className="contactBtn">
                            Nous contacter
                            <span>
                                <img src={arrow} alt="arrow" className='arrow'/>
                                <img src={arrow2} alt="arrow" className='arrow2'/>
                            </span>
                        </Link>
                    </li>
                </ul>
           </nav>
           <Outlet/>
        </Fragment>
    )
}

export default Nav