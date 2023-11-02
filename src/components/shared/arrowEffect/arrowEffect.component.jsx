import './arrowEffect.style.scss'
import './arrowEffect.repsonsive.scss'
import arrowW from '../../../assets/img/Arrow.svg'
import arrowW2 from '../../../assets/img/Arrow2.svg'
import arrowB from '../../../assets/img/ArrowB.svg'
import arrowB2 from '../../../assets/img/Arrow2B.svg'
import arrowBleu from '../../../assets/img/ArrowBleu.svg'
import arrowBleu2 from '../../../assets/img/Arrow2Bleu.svg'

const ArrowEffect = ({bgcolor, arrowColor}) => {
    let arrow = arrowW
    let arrow2 = arrowW2
    if (arrowColor === 'black')
    {
        arrow = arrowB
        arrow2 = arrowB2
    }
    else if(arrowColor === 'blue')
    {
        arrow = arrowBleu
        arrow2 = arrowBleu2
    }
    return (
            <span className='arrow-effect' style={{backgroundColor:bgcolor}}>
                <img src={arrow} alt="arrow"/>
                <img src={arrow2} alt="arrow"/>
            </span>
    )
}

export default ArrowEffect