import { useEffect, useState } from 'react'
import Card from '../card/card.component'
import './card-container.style.scss'


const CardContainer = ({cards}) => { 

    const [sortCategorie, setSortCategorie] = useState('all')
    console.log();
    
    useEffect(() => {
        const handleEvent = (event) => {
            setSortCategorie(event.target.id)
            console.log(sortCategorie);
            document.querySelector('#all').classList.remove('active')
            document.querySelector('#graphisme').classList.remove('active')
            document.querySelector('#video').classList.remove('active')
            document.querySelector('#social').classList.remove('active')
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
                <div className='sort-element' id='video'>Vidéo</div>
                <div className='sort-element' id='social'>Social Media</div>
            </div>
            <div className='card-container'>
                {
                    cards.map((card) => {
                        return (
                            card.categorie === sortCategorie || sortCategorie === 'all' ) && (
                                <Card 
                                key={card.id} 
                                title={card.title} 
                                image={card.img} 
                                description={card.description} 
                            />                            
                            )
                    })
                }
                
            </div>
        </div>
    )
}

export default CardContainer