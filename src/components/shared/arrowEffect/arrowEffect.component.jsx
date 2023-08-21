import './arrowEffect.style.scss'
import arrowW from '../../../assets/img/Arrow.svg'
import arrowW2 from '../../../assets/img/Arrow2.svg'
import arrowB from '../../../assets/img/ArrowB.svg'
import arrowB2 from '../../../assets/img/Arrow2B.svg'

const ArrowEffect = ({bgcolor, arrowColor}) => {

    let arrow = arrowW
    let arrow2 = arrowW2
    if (arrowColor === 'black')
    {
        arrow = arrowB
        arrow2 = arrowB2
    }
    return (
            <span className='arrow-effect' style={{backgroundColor:bgcolor}}>
                <img src={arrow} alt="arrow"/>
                <img src={arrow2} alt="arrow"/>
            </span>
    )
}

export default ArrowEffect