import './contact.styles.scss'

import { Link } from 'react-router-dom'
import blueArrow from '../../assets/img/ArrowBleu.svg'
import blueGrid from '../../assets/img/BG-PB.svg'
import blueBubble from '../../assets/img/bubble.svg'
import ArrowEffect from '../../components/shared/arrowEffect/arrowEffect.component'
import Footer from '../../components/footer/footer.component'
import Form from './component/form/form.component'
const Contact = () => {

    return (

        <div className='contact'>
            <h1 className='contact-title'>Vous souhaitez nous contacter ? </h1>
            <h2 className='contact-subtitle'>
                Veuillez remplir le formulaire ci-dessous 
                <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
            </h2>

            <Form />
           
            <div className='bubble-container'>
                <img className='bubble' src={blueBubble} alt='blue bubble' />
                <p className='bubble-content'>
                    Profitez de <br/> <span className='bubble-underline'>votre première</span><br/>
                    <span className='white'>Consultation <br/> gratuite !</span>
                </p>
            </div>

            <div className='grey-background'></div>

            <section className='btn-section'>
                <Link  to="../project" className='btn'>
                    Découvrez nos projets 
                    <ArrowEffect bgcolor="#FaF9F2" arrowColor={'black'} />
                </Link>
                <Link to="../../graphiLeaf#solution" className='btn'>
                    Découvrez nos solutions
                    <ArrowEffect bgcolor="#FaF9F2" arrowColor={'black'}/>
                </Link>
                <Link to="../agence" className='btn'>
                    Découvrez l'agence 
                    <ArrowEffect bgcolor="#FaF9F2" arrowColor={'black'}/>
                    </Link>
                <img className='blueGrid' src={blueGrid} alt='blue grid' />

            </section>


            <Footer/>
        </div>
    )
}

export default Contact