
import './overlay.styles.scss'
import ReactHtmlParser from 'react-html-parser'

const Overlay = ({description, homeImage, presentationImage, thirdImage, fourthImage, color, text_color}) => {
    return (
            <div className='overlay'>
                <div className='overlay-container'>
                <img className='first-bg' src={homeImage} alt='home illustration'/>
                <section className='second-bg'  style={{backgroundColor:color, color:text_color,}}>
                    <img className='image-part' src={presentationImage} alt='presentation illustration'/> 
                    <div className='text-part' >
                    <p > 
                        {ReactHtmlParser(description)}
                        <br/>
                        <br/>
                        <span> GraphiLeaf, Cultivons ensemble votre image </span>
                    </p>
                    </div>
                </section>
                <section className='third-bg'>
                    <img className='left-img' src={thirdImage} alt='third part'/>
                    <img className='right-img' src={fourthImage} alt='fourth part'/>
                </section>
                </div>
            </div>
    )
}

export default Overlay