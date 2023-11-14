import { Fragment, useEffect, useState } from 'react'
import Card from '../card/card.component'
import './card-container.style.scss'
import Overlay from '../overlay/overlay.component';


const CardContainer = ({cards}) => { 
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [sortCategorie, setSortCategorie] = useState('all')
    
    useEffect(() => {
        const handleEvent = (event) => {
            setSortCategorie(event.target.id)
            document.querySelectorAll('.sort-element').forEach(element => {
                element.classList.remove('active')
            })
            event.target.classList.add('active')

        }

        document.querySelectorAll('.sort-element').forEach(element => {
            element.addEventListener('click', handleEvent)
        });

        return () => {
            document.querySelectorAll('.sort-element').forEach(element => {
                element.removeEventListener('click', handleEvent)
            });
        }


    }, [])

    return (
        <div className='example-container'>
            <div className='sort-bar'>
                <div className='sort-element active' id='all'>Tout</div>
                <div className='sort-element' id='graphisme'>Graphisme</div>
            </div>
            <div className='card-container'>
                {
                    cards.map((card) => {
                        let homeImage = isMobile ? card.responsiveHomeImage : card.homeImage
                        return (
                            card.categorie === sortCategorie || sortCategorie === 'all' ) && (
                                <Fragment key={card.id}>
                                    <Card 
                                    key={card.id} 
                                    id={card.id}
                                    title={card.title} 
                                    image={card.img} 
                                    description={card.description} 
        
                                    />
                                    <Overlay 
                                    key={`overlay-${card.id}`}
                                    id = {card.id}
                                    description = {card.overlayDescription}
                                    homeImage = {homeImage}
                                    presentationImage = {card.presentationImage}
                                    thirdImage = {card.thirdImage}
                                    fourthImage = {card.fourthImage}
                                    text_color={card.text_color}
                                    color = {card.color}
                                    />        
                                </Fragment>
                            )
                    })
                }
                
            </div>
        </div>
    )
}

export default CardContainer