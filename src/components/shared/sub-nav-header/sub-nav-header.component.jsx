import './sub-nav-header.styles.scss'
import './sub-nav-header.reponsive.scss'
import ReactHtmlParser from 'react-html-parser';
import blueArrow from '../../../assets/img/ArrowBleu.svg'

const SubNavHeader = ({title, citation, subtitle, subcontent, img}) => {
    return (
        <header className='sub-nav-header'>
            <h1 className='title'>{ReactHtmlParser(title)}</h1>
            <p className='citation'>“{ReactHtmlParser(citation)}”</p>
            
            <img src={img} className='header-img' alt='illustration' />

            <div className='sub-content'>
                <div className='title-container'>
                    <h1>{subtitle}</h1>
                    <img src={blueArrow} className='blueArrow' alt='blue arrow' />
                </div>
                <p className='sub-description'>
                {ReactHtmlParser(subcontent)}
                </p>
            </div>
        </header>
    )
}

export default SubNavHeader