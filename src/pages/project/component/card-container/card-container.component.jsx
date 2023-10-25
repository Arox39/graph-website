import { useEffect, useState } from 'react'
import Card from '../card/card.component'
import './card-container.style.scss'


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
            console.log(sortCategorie);
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
                                <Card 
                                key={card.id} 
                                title={card.title} 
                                image={card.img} 
                                description={card.description} 
                                homeImage={homeImage}
                                presentationImage={card.presentationImage}
                                thirdImage={card.thirdImage}
                                fourthImage={card.fourthImage}
                                color={card.color}
                                text_color={card.text_color}
                                overlayDescription={card.overlayDescription}
                                
                            />                            
                            )
                    })
                }
                
            </div>
        </div>
    )
}

export default CardContainer