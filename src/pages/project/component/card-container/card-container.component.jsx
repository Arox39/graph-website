import './card-container.style.scss'

import { Fragment, useEffect, useState } from 'react'

import Card from '../card/card.component'
import Overlay from '../overlay/overlay.component';
import Reveal from '../../../../components/animation/Reveal.component';

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
            // le nom de la categorie est correspond a l'id du boutons de la sort-bar
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
                <Reveal overflow={"visible"} hauteur={20} delay={0.1}>
                    <div className='sort-element active' id='all'>Tout</div>
                </Reveal>
                <Reveal overflow={"visible"} hauteur={20} delay={0.2}>
                    <div className='sort-element' id='graphisme'>Graphisme</div>
                </Reveal>
                <Reveal overflow={"visible"} hauteur={20} delay={0.3}>
                    <div className='sort-element' id='print'>Print</div>
                </Reveal>
            </div>
            <div className='card-container'>
                {
                    cards.map((card) => {
                        let homeImage = isMobile ? card.responsiveHomeImage : card.homeImage

                        // separer les categorie
                        const cardCategories = card.categorie.split(' ');
                        return (
                            cardCategories.includes(sortCategorie) || sortCategorie === 'all' ) && (
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