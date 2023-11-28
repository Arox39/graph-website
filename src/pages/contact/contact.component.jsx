import './contact.styles.scss'
import './contact.responsive.scss'

import { Link } from 'react-router-dom'

import ArrowEffect from '../../components/shared/arrowEffect/arrowEffect.component'
import Footer from '../../components/footer/footer.component'
import Form from './component/form/form.component'
import Reveal from '../../components/animation/Reveal.component'

import blueArrow from '../../assets/img/ArrowBleu.svg'
import blueGrid from '../../assets/img/BG-PB.svg'
import blueBubble from '../../assets/img/bubble.svg'
const Contact = () => {
    return (
        <div className='contact'>
            <Reveal>
                <h1 className='contact-title'>Vous souhaitez nous contacter ? </h1>
            </Reveal>
            <Reveal>
                <h2 className='contact-subtitle'>
                    Veuillez remplir le formulaire ci-dessous 
                    <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                </h2>
            </Reveal>

            <Form />

            <div className='bubble-illu-container'>
                <img className='bubble' src={blueBubble} alt='blue bubble' />
                <Reveal overflow={"visible"} hauteur={20}>
                    <p className='bubble-content'>
                        Profitez de <br/> <span className='bubble-underline'>votre première</span><br/>
                        <span className='white'> Consultation <br/> gratuite !</span>
                    </p>
                </Reveal>
            </div>
            <div className='grey-background'/>

            <section className='btn-section'>
                <Reveal overflow={"visible"}>
                    <Link  to="../project" className='btn'>
                        Découvrez nos projets 
                        <ArrowEffect bgcolor="#FaF9F2" arrowColor={'black'} />
                    </Link>
                </Reveal>
                <Reveal overflow={"visible"}>
                    <Link to="../../#solution" className='btn' >
                        Découvrez nos solutions
                        <ArrowEffect bgcolor="#FaF9F2" arrowColor={'black'}/>
                    </Link>
                </Reveal>
                <Reveal overflow={"visible"}>
                    <Link to="../agence" className='btn'>
                        Découvrez l'agence 
                        <ArrowEffect bgcolor="#FaF9F2" arrowColor={'black'}/>
                    </Link>
                </Reveal>
                <img className='blueGrid' src={blueGrid} alt='blue grid' />
            </section>

            <Footer/>
        </div>
    )
}
export default Contact