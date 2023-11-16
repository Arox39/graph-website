import './project.style.scss'
import './project.responsive.scss'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer/footer.component'
import desktop from '../../assets/img/Illustration Projet.svg'
import CardContainer from './component/card-container/card-container.component'
import Allard from '../../assets/img/projets/Allard/Allard_Page-Projet.png'
import Casarella from '../../assets/img/projets/Casarella/Casarella_Page-Projet.png'
import Eliott from '../../assets/img/projets/Eliott/Eliott_Page-Projet.png'

// overlay 
// allard
import Allard_homeImage_responsive from '../../assets/img/projets/Allard/Allard_Accueil_Tel.png'
import Allard_homeImage from '../../assets/img/projets/Allard/Allard_Accueil.png'
import Allard_second from '../../assets/img/projets/Allard/Allard_1.png'
import Allard_third from '../../assets/img/projets/Allard/Allard_2.png'
import Allard_fourth from '../../assets/img/projets/Allard/Allard_3.png'

// casarella
import Casarella_homeImage_responsive from '../../assets/img/projets/Casarella/Casarella_Accueil_Tel.png'

import Casarella_homeImage from '../../assets/img/projets/Casarella/Casarella_Accueil.png'
import Casarella_second from '../../assets/img/projets/Casarella/Casarella_1.png'
import Casarella_third from '../../assets/img/projets/Casarella/Casarella_2.png'
import Casarella_fourth from '../../assets/img/projets/Casarella/Casarella_3.png'

// eliott
import Eliott_homeImage_responsive from '../../assets/img/projets/Eliott/Eliott_Accueil-Tel.png'
import Eliott_homeImage from '../../assets/img/projets/Eliott/Eliott_Accueil.png'
import Eliott_second from '../../assets/img/projets/Eliott/Eliott_1.png'
import Eliott_third from '../../assets/img/projets/Eliott/Eliott_2.png'
import Eliott_fourth from '../../assets/img/projets/Eliott/Eliott_3.png'
import Reveal from '../../components/animation/Reveal'

const cards = [
    {
        id:1,
        title: 'Allard Créations',
        img: Allard,
        description: ' Identité visuelle - Print',
        categorie: 'graphisme',

        homeImage:Allard_homeImage,
        responsiveHomeImage:Allard_homeImage_responsive,
        presentationImage:Allard_second,
        thirdImage:Allard_third,
        fourthImage:Allard_fourth,
        color: '#37210c',
        text_color: '#faf9f2',
        overlayDescription: "Allard Créations à fait appel à GraphiLeaf pour donner vie à son identité visuelle. De la création du logotype à la conception de la carte de visite et du flyer, chaque détail a été méticuleusement pensé pour représenter l'excellence de cette entreprise dédiée à la menuiserie et à l'agencement contemporain.<br/><br/> Chez Allard Créations, chaque espace est précieux. L'esthétisme et la fonctionnalité s'entrelacent pour donner vie à des créations durables, façonnées principalement à partir de bois massif provenant des forêts du nord-est de la France. La proximité des partenaires locaux, situés à moins de 20 km de l’atelier, est la garantie d'une qualité exceptionnelle."
    },
    {
        id:2,
        title: "Casarella Maria",
        img: Casarella,
        description: ' Identité visuelle - Print',
        categorie: 'graphisme',

        homeImage:Casarella_homeImage,
        responsiveHomeImage:Casarella_homeImage_responsive,
        presentationImage:Casarella_second,
        thirdImage:Casarella_third,
        fourthImage:Casarella_fourth,
        color: 'white',
        text_color:'#091727',
        overlayDescription: "Casarella Maria, ce sont deux logements atypiques nichés en Corse, soigneusement rénovés et gérés par Marie et sa famille. Vous serez agréablement surpris par leur accueil chaleureux.<br/><br/> Imaginez-vous, en train de contempler une vue panoramique à couper le souffle, où la mer et les montagnes se rejoignent. Ces havres de paix sont stratégiquement situés entre Saint-Florent et Bastia, vous offrant une escapade parfaite pour vous ressourcer.<br/><br/>Et n'oublions pas ces couchers de soleil qui colorent le ciel de teintes tout à fait exceptionnelles, une expérience visuelle qui restera gravée dans votre mémoire !"

    },
    {
        id:3,
        title: 'Eliott Brenner',
        img: Eliott,
        description: 'Identité visuelle',
        categorie: 'graphisme',

        homeImage:Eliott_homeImage,
        responsiveHomeImage:Eliott_homeImage_responsive,
        presentationImage:Eliott_second,
        thirdImage:Eliott_third,
        fourthImage:Eliott_fourth,
        color: 'white',
        text_color:'#091727',
        overlayDescription: "Eliott Brenner, un réalisateur et monteur vidéo passionné dédié à l'art de la communication à travers l'objectif. Avec une expertise éprouvée dans le domaine, Eliott excelle dans la création de contenus vidéo qui captivent, persuadent et inspirent. <br/><br/>Son portfolio diversifié englobe des films d'entreprise qui racontent l'histoire unique de chaque organisation, des vidéos institutionnelles qui transmettent des messages cruciaux avec impact, et des publicités qui laissent une empreinte mémorable."
    },


]



const Project = () => {
   

    return (
        <div className="project"> 
            <header className='projectHeader'>
                <Reveal>
                    <h1 className='title'>
                    L'expertise de <span className='underline'>l'agence</span> <br/>
                    en <span className='blue'>images.</span>
                    </h1>
                </Reveal>
                <Reveal>
                    <p className='citation'>“Explorez notre selection de projets et découvrez comment nous <br/>
                    avons aidé nos clients à atteindre leurs objectifs.”</p>
                </Reveal>
                <Reveal>
                    <p className='more'>Cliquez sur les projets pour en savoir plus !</p>
                </Reveal>
                <img className='illustration' src={desktop} alt='illustration'/>
            </header>
            <CardContainer cards={cards}/>
            <Footer/>
        </div>
    )
}

export default Project
