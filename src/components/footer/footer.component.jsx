import './footer.style.scss'

import { Link } from 'react-router-dom'
import ArrowEffect from '../../components/shared/arrowEffect/arrowEffect.component'

import logo from  '../../assets/img/Logo - G - W.svg'
import greyGrid from '../../assets/img/BG-PG.svg'


import instagram from '../../assets/img/instagram.svg'
import twitter from '../../assets/img/twitter-3.svg'
import discord from '../../assets/img/discord-6.svg'
import linkedin from '../../assets/img/tiktok.svg'


const Footer =  () => {

    return (
        <footer className='footer-container'>
            <div to={'/graphiLeaf'} className='footer-btn-container'>
                <Link to={'/graphiLeaf'} className='footer-btn'>
                    <h1 className='footer-title'>Vous avez des projets ?</h1>
                    <p className='footer-content'>Boostez votre présence en ligne dès maintenant !</p>
                    <ArrowEffect />
                </Link>
                <div className='greybg'></div>
                <img className='grey-grid' src={greyGrid} alt='grey grid' />
            </div>
            <div className='footer'>
                <div className='footer-social'>
                    <h1 className='footer-title'>Nous retrouver</h1>
                    <div className='social-container'>
                        <a href='https://www.instagram.com/graphiLeaf'><img src={instagram} alt='instagram-logo' /></a>
                        <a href='https://twitter.com/graphiLeaf'><img src={twitter} alt='twitter-logo' /></a>
                        <a href='https://discord.gg/mBRWnNTaU2'><img src={discord} alt='discord-logo' /></a>
                        <a href='https://www.tiktok.com/@graphiLeaf'><img src={linkedin} alt='linkedin-logo' /></a>
                    </div>
                </div>
                <div className='footer-contact'>
                    <Link to={'contact'} className='footer-btn btn'>
                        Nous contacter
                        <ArrowEffect bgcolor="#000018" />
                    </Link>
                </div>
                <img className='footer-logo' src={logo} alt='GraphiLeaf Logo' />
                <a href='#' className='mention'>Mention légales - Politique de confidentialité </a>
                </div>
        </footer>
    )
}

export default Footer