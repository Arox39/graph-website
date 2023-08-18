import './btn.style.scss'
import { Link } from 'react-router-dom' 
import arrowW from '../../../assets/img/Arrow.svg'
import arrowW2 from '../../../assets/img/Arrow2.svg'
import arrowB from '../../../assets/img/ArrowB.svg'
import arrowB2 from '../../../assets/img/Arrow2B.svg'

const Btn = ({title, color, height, width, padding}) => {

    let primaryColor;
    let secondaryColor;
    let arrow 
    let arrow2
    if(color === 'black') 
    {
        primaryColor = '#000018'
        secondaryColor = '#FAF9F2'
        arrow = arrowB
        arrow2 = arrowB2
    } 
    else
    {
        primaryColor = '#018EBB'
        secondaryColor = '#005070'
        arrow = arrowW
        arrow2 = arrowW2
    }


    return (
        <Link to={'/graphiLeaf'} className="contactBtn" style={{backgroundColor:primaryColor,height:height,padding:padding, width:width}}>
                    {title}
                    <span style={{backgroundColor:secondaryColor}}>
                        <img src={arrow} alt="arrow"/>
                        <img src={arrow2} alt="arrow"/>
                    </span>
        </Link>
    )
}

export default Btn