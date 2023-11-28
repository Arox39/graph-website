import './footer.responsive.scss'
import './footer.style.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState, Fragment} from 'react'
import ArrowEffect from '../../components/shared/arrowEffect/arrowEffect.component'

import greyGrid from '../../assets/img/BG-PG.svg'


import instagram from '../../assets/img/Reseaux-Insta.svg'
import twitter from '../../assets/img/Reseaux-Twitter.svg'
import discord from '../../assets/img/Reseaux-Discord.svg'
import linkedin from '../../assets/img/Reseaux-Linkedin.svg'

import CGU from '../../assets/pdf/CGU.pdf'
import mentionLegals from '../../assets/pdf/Mentions_legales.pdf'
import politiqueDeConfidentialite from '../../assets/pdf/Politique_de_confidentialite.pdf'
import Reveal from '../animation/Reveal.component'

const FooterBtn = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        // le lancer deja une fois au cas ou on est deja mobile est que ce n'est pas une resize de la page
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Fragment>
        {isMobile ? (
            <Link to={'../../contact'} className='btn'>
                    Boostez votre présence en  ligne dès maintenant !
                    <ArrowEffect bgcolor="#000018" />
                </Link>
        ): (
            <div className='footer-btn-container'>
               
                    <Link to={'../../contact'} className='footer-btn'>
                        <h1 className='footer-title'>Vous avez des projets ?</h1>
                        <p className='footer-content'>Boostez votre présence en ligne dès maintenant !</p>
                        <ArrowEffect />
                    </Link>
                    <div className='grey-bg'></div>
                    <img className='grey-grid' src={greyGrid} alt='grey grid' />
                
            </div>
            )}
        </Fragment>
    )

}



const Footer =  () => {
    
    return (
        <footer className='footer-container'>
            <Reveal overflow={"visible"}>
                <FooterBtn/>
            </Reveal>
            <div className='footer'>
                <Reveal overflow={"visible"}  hauteur={15}>
                    <Link to={'../../contact'} className='btn'>
                    Contact
                    <ArrowEffect bgcolor="#000018" />
                    </Link>
                </Reveal>
                <div className='footer-social'>
                    <Reveal overflow={"visible"} hauteur={15}>
                        <a href='https://www.instagram.com/graphiLeaf' target='_blank'  rel="noreferrer"><img src={instagram} alt='instagram-logo' /></a>
                    </Reveal>
                    <Reveal overflow={"visible"} hauteur={15} delay={0.2}>
                        <a href='https://www.linkedin.com/company/graphileaf/' target='_blank'  rel="noreferrer"><img src={linkedin} alt='linkedin-logo' /></a>
                    </Reveal>
                    <Reveal overflow={"visible"} hauteur={15} delay={0.3}>
                        <a href='https://twitter.com/graphiLeaf' target='_blank'  rel="noreferrer"><img src={twitter} alt='twitter-logo' /></a>
                    </Reveal>
                    <Reveal overflow={"visible"} hauteur={15} delay={0.375}>
                        <a href='https://discord.gg/mBRWnNTaU2' target='_blank'  rel="noreferrer"><img src={discord} alt='discord-logo' /></a>
                    </Reveal>
                </div>
                <p className='mention'>
                <span>GraphiLeaf©2023</span> | <a href={mentionLegals} target='_blank'  rel="noreferrer"> Mention légales </a>| <a href={politiqueDeConfidentialite} target='_blank'  rel="noreferrer">Politique de confidentialité</a> | <a href={CGU} target='_blank'  rel="noreferrer"> CGU</a> 
                </p>
            </div>
        </footer>
    )
}

export default Footer