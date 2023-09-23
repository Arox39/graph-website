import './footer.style.scss'

import { Link } from 'react-router-dom'
import ArrowEffect from '../../components/shared/arrowEffect/arrowEffect.component'

import greyGrid from '../../assets/img/BG-PG.svg'


import instagram from '../../assets/img/Reseaux-Insta.svg'
import twitter from '../../assets/img/Reseaux-Twitter.svg'
import discord from '../../assets/img/Reseaux-Discord.svg'
import linkedin from '../../assets/img/Reseaux-Linkedin.svg'


const Footer =  () => {
    
    return (
        <footer className='footer-container'>
            <div className='footer-btn-container'>
                <Link to={'../../graphiLeaf/contact'} className='footer-btn'>
                    <h1 className='footer-title'>Vous avez des projets ?</h1>
                    <p className='footer-content'>Boostez votre présence en ligne dès maintenant !</p>
                    <ArrowEffect />
                </Link>
                <div className='greybg'></div>
                <img className='grey-grid' src={greyGrid} alt='grey grid' />
            </div>
            <div className='footer'>
                <Link to={'../../graphiLeaf/contact'} className='btn'>
                    Contact
                    <ArrowEffect bgcolor="#000018" />
                </Link>
                <div className='footer-social'>
                    <a href='https://www.instagram.com/graphiLeaf'><img src={instagram} alt='instagram-logo' /></a>
                    <a href='https://www.linkedin.com/company/graphileaf/'><img src={linkedin} alt='linkedin-logo' /></a>
                    <a href='https://twitter.com/graphiLeaf'><img src={twitter} alt='twitter-logo' /></a>
                    <a href='https://discord.gg/mBRWnNTaU2'><img src={discord} alt='discord-logo' /></a>
                </div>

                <p className='mention'>
                    <a href="#">GraphiLeaf©2023</a> | <a href='#'> Mention légales </a>| <a href='#'>Politique de confidentialité</a>
                </p>
                </div>
        </footer>
    )
}

export default Footer