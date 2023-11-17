import { Fragment, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router'
import backArrow from '../../../assets/img/ArrowBleu.svg'
import './nav.mobile.style.scss'
import logo from '../../../assets/img/Logo_G_only.svg'
import arrowBleu from '../../../assets/img/ArrowBleu.svg'
import { Link } from 'react-router-dom'
import Reveal from '../../animation/Reveal'
import ArrowEffect from '../../shared/arrowEffect/arrowEffect.component'
const NavMobile = () => {
    const location = useLocation()
    useEffect(() => {
        document.querySelector('.nav-list').classList.add('hide')
        document.querySelector('.menu').classList.remove('cross')
        document.querySelector('.solutions').classList.remove('show')
      }, [location.pathname]);
    

    useEffect(() => {
        let menu = document.querySelector('.menu')
        let declencheur = document.querySelector('.declencheur')
        const menuHandleClick = () => {
            menu.classList.toggle('cross')
            document.querySelector('.nav-list').classList.toggle('hide')
            document.querySelector('.solutions').classList.remove('show')
        }
        const declencheurHandleClick = () => {
            document.querySelector('.solutions').classList.toggle('show')
        }
        declencheur.addEventListener('click',declencheurHandleClick)
        menu.addEventListener('click', menuHandleClick)

        return () => {
            menu.removeEventListener('click', menuHandleClick);
            declencheur.removeEventListener('click',declencheurHandleClick)
        };
    }, [])

    return (
        <Fragment> 
        <Reveal hauteur={-30} overflow={"visible"}>
            <nav className='mobile-nav'>
                <Link to={'../../'}><img className='logo' src={logo} alt='graphileaf'/></Link>
                
                <div className="menu">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className='nav-list hide'>  
                    <li className='nav-link declencheur'>
                        <h1>Nos solutions <span className='arrow'><img src={arrowBleu} alt='arrow' className='arrow'/></span></h1>

                        <ul className='solutions'>
                                <h1 className='solutionTitle'>Nos solutions</h1>
                                <img className='retour' src={backArrow} alt='back Arrow'/>
                                <Link to={'graphisme'} className='solution-element'>
                                    <h1 >Graphisme</h1>
                                    <p>Différenciez vous de vos concurrents et renforcez la crédibilité de votre marque.</p>
                                </Link>
                                <Link  to={'video'} className='solution-element'>
                                    <h1 >Vidéo</h1>
                                    <p>Créez des contenus vidéo créatifs et adaptés pour renforcer votre présence en ligne.</p>
                                </Link>
                                <Link to={'social'} className='solution-element'>
                                    <h1 >Social Management</h1>
                                    <p>Gérez efficacement votre présence en ligne avec la gestion de vos réseaux, de serveurs Discord..</p>
                                </Link>
                                <Link to={'devWeb'} className='solution-element'>
                                    <h1 >Développement Web</h1>
                                    <p>Créez des sites web innovants et fonctionnels pour propulser votre présence en ligne.</p>
                                </Link>
                                <Link to={'veille'} className='solution-element'>
                                    <h1 >Veille</h1>
                                    <p>Gagnez du temps et de la précision dans votre prise de décision avec une bonne veille opérationnelle..</p>
                                </Link>
                                <Link to={'seo'} className='solution-element'>
                                    <h1 >SEO</h1>
                                    <p>Améliorez votre visibilité en ligne et atteignez les sommets des résultats de recherche.</p>
                                </Link>
                                <Link to={'ads'} className='solution-element'>
                                    <h1 >Ads</h1>
                                    <p>Boostez votre présence avec des campagnes publicitaires ciblées et performantes.</p>
                                </Link>
                                <Link to={'formation'} className='solution-element'>
                                    <h1 >Formation & eBooks</h1>
                                    <p> Acquérez de nouvelles compétences et ressources avec nos formations en ligne et eBooks.</p>
                                </Link>

                        </ul>
                    </li>
                    <li className='nav-link'>
                        <Link to={'project'}>Nos projets</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to={'agence'}>Notre agence</Link>
                    </li>
                    <Link to={'../../contact'} className='nav-link btn'>
                    Nous contacter
                    <ArrowEffect bgcolor="#000018" />
                    </Link>
                    
                    
                    
                </ul>
            </nav>
        </Reveal>
        <Outlet/>
        </Fragment>
    )
}

export default NavMobile