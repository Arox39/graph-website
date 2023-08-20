import Btn from '../../../../components/shared/btn/btn.component'
import './header.styles.scss'
import headerImage from "../../../../assets/img/Phone.png"
const Header = () => {

    return (
        <header className='homeHeader'>
            <h1 className='title'> L'agence de <span className='underline'>communication</span> <br/>
            & <span className='blue'> de marketing digital.</span></h1>
            
            <h3 className='homeCitation'>"Cultivons ensemble votre image"</h3>
            <p className='description'>GraphiLeaf cultive l'image de marque de ses clients et aide les entreprises à raconter leur histoire unique grâce à une stratégie de communication efficace et des designs visuels de qualité.</p>
            <Btn title="Je prend contact" color="black" width="14.5vw" padding="0 0 0 1.4vw" height="2.7vw" />
            <img className='headerImage' src={headerImage} alt='phone illustration'/>

        </header>
    )
}

export default Header