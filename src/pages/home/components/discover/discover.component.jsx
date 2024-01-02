import './discover.style.scss'

import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import Reveal from '../../../../components/animation/Reveal.component'

const Discover = () => { 
    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        const solutionElement = document.getElementById('solution');
        solutionElement.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Fragment>
            {isMobile ? (
                <div className='mobile-discover-container'>
                    <Reveal overflow={"visible"} hauteur={30}>
                        <Link  to="../project" className='btn'>
                            Découvrez nos projets 
                            <ArrowEffect bgcolor="#005070" arrowColor={'white'} />
                        </Link>
                    </Reveal>
                    <Reveal overflow={"visible"} hauteur={30}>
                        <Link to="../agence" className='btn'>
                            Nous contactez
                            <ArrowEffect bgcolor="#005070" arrowColor={'white'}/>
                        </Link>
                    </Reveal>
                </div>
            ):(
                <Reveal overflow={"visible"}>
                    <div className='discover-container'>
                        <Link to='contact' className='btn big'>
                            <h2 className='content'>
                                Profitez de votre première consultation <br/>
                                <span>Gratuite !</span>
                            </h2>
                            <ArrowEffect bgcolor='#000018'/>
                        </Link>
                        <Link to='project' className='btn small'>
                            <h2 className='content'>
                                Découvrez nos <br/>
                                <span>Projets !</span>
                            </h2>
                            <ArrowEffect bgcolor='#000018'/>
                        </Link>
                        <Link to={"../../#solution"} className='btn small' onClick={handleClick}>
                            <h2 className='content'>
                                Découvrez nos <br/>
                                <span>Solutions !</span>
                            </h2>
                            <ArrowEffect bgcolor='#000018'/>
                        </Link>
                    </div>
                </Reveal>
                )
            }
        </Fragment>
    )
}
export default Discover