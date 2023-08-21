
import './header.styles.scss'
import headerImage from "../../../../assets/img/Phone.png"
import { Link } from 'react-router-dom'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
const Header = () => {

    return (
        <header className='homeHeader'>
            <h1 className='title'> L'agence de <span className='underline'>communication</span> <br/>
            & <span className='blue'> de marketing digital.</span></h1>
            
            <h3 className='homeCitation'>"Cultivons ensemble votre image"</h3>
            <p className='description'>GraphiLeaf cultive l'image de marque de ses clients et aide les entreprises à raconter leur histoire unique grâce à une stratégie de communication efficace et des designs visuels de qualité.</p>
            <Link to={'/graphiLeaf'} className='btn'>
                Je prend contact
                <ArrowEffect bgcolor='blue'/>
            </Link>
            <img className='headerImage' src={headerImage} alt='phone illustration'/>

        </header>
    )
}

export default Header