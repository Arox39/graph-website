import './project.style.scss'
import Footer from '../../components/footer/footer.component'
import desktop from '../../assets/img/Illustration Projet.svg'
import CardContainer from './component/card-container/card-container.component'
import { useEffect } from 'react'

import Allard from '../../assets/img/projets/Allard/preview.png'
import Casarella from '../../assets/img/projets/Casarella/Casarella_Projet.png'
import Eliott from '../../assets/img/projets/Eliott/Eliott_Projet.png'
import image5 from '../../assets/img/projets/SleepAndWork.png'

// overlay 
// allard
import Allard_homeImage from '../../assets/img/projets/Allard/Allard_Accueil.png'
import Allard_thirdImage from '../../assets/img/projets/Allard/Allard_Carré-bas-droite.png'
import Allard_presentationImage from '../../assets/img/projets/Allard/Allard_Carte.png'
import Allard_fourthImage from '../../assets/img/projets/Allard/Allard_Flyer.png'

// casarella
import Casarella_homeImage from '../../assets/img/projets/Casarella/Casarella_Accueil.png'
import Casarella_second from '../../assets/img/projets/Casarella/Iphone.png'
import Casarella_third from '../../assets/img/projets/Casarella/Photo.png'
import Casarella_fourth from '../../assets/img/projets/Casarella/Plein-de-carte (2).png'

// eliott
import Eliott_homeImage from '../../assets/img/projets/Eliott/Eliott_Accueil.png'
import Eliott_second from '../../assets/img/projets/Eliott/Branding.png'
import Eliott_third from '../../assets/img/projets/Eliott/Logo.png'
import Eliott_fourth from '../../assets/img/projets/Eliott/Carré bas.png'

const cards = [
    {
        id:1,
        title: 'Allard',
        img: Allard,
        description: ' Identité visuelle - Print',
        categorie: 'graphisme',

        homeImage:Allard_homeImage,
        presentationImage:Allard_presentationImage,
        thirdImage:Allard_thirdImage,
        fourthImage:Allard_fourthImage,
        color: '#37210c',
        text_color: '#faf9f2',
        overlayDescription: "Allard Créations à fait appel à GraphiLeaf pour donner vie à son identité visuelle. De la création du logotype à la conception de la carte de visite et du flyer, chaque détail a été méticuleusement pensé pour représenter l'excellence de cette entreprise dédiée à la menuiserie et à l'agencement contemporain.<br/><br/> Chez Allard Créations, chaque espace est précieux. L'esthétisme et la fonctionnalité s'entrelacent pour donner vie à des créations durables, façonnées principalement à partir de bois massif provenant des forêts du nord-est de la France. La proximité des partenaires locaux, situés à moins de 20 km de l’atelier, est la garantie d'une qualité exceptionnelle."
    },
    {
        id:2,
        title: "Casarella",
        img: Casarella,
        description: ' Identité visuelle - Print',
        categorie: 'graphisme',

        homeImage:Casarella_homeImage,
        presentationImage:Casarella_second,
        thirdImage:Casarella_third,
        fourthImage:Casarella_fourth,
        color: 'white',
        text_color:'#091727',
        overlayDescription: "Casarella Maria, ce sont deux logements atypiques nichés en Corse, soigneusement rénovés et gérés par Marie et sa famille. Vous serez agréablement surpris par leur accueil chaleureux.<br/><br/> Imaginez-vous, en train de contempler une vue panoramique à couper le souffle, où la mer et les montagnes se rejoignent. Ces havres de paix sont stratégiquement situés entre Saint-Florent et Bastia, vous offrant une escapade parfaite pour vous ressourcer.<br/><br/>Et n'oublions pas ces couchers de soleil qui colorent le ciel de teintes tout à fait exceptionnelles, une expérience visuelle qui restera gravée dans votre mémoire !"

    },
    {
        id:4,
        title: 'Eliott Brenner',
        img: Eliott,
        description: 'Identité visuelle',
        categorie: 'Graphisme',

        homeImage:Eliott_homeImage,
        presentationImage:Eliott_second,
        thirdImage:Eliott_third,
        fourthImage:Eliott_fourth,
        color: 'white',
        text_color:'#091727',
        overlayDescription: "Eliott Brenner, un réalisateur et monteur vidéo passionné dédié à l'art de la communication à travers l'objectif. Avec une expertise éprouvée dans le domaine, Eliott excelle dans la création de contenus vidéo qui captivent, persuadent et inspirent. <br/><br/>Son portfolio diversifié englobe des films d'entreprise qui racontent l'histoire unique de chaque organisation, des vidéos institutionnelles qui transmettent des messages cruciaux avec impact, et des publicités qui laissent une empreinte mémorable."
    },


]



const Project = () => {

    const preloadImage = (imageSource) => {
        const img = new Image();
        img.src = imageSource;
    };

    useEffect(() => {
        // Préchargement de l'image homeImage
        preloadImage(Allard_homeImage);
    }, [Allard_homeImage]);
    return (
        <div className="project"> 
            <header className='projectHeader'>
                <h1 className='title'>
                    L'expertise de <span className='underline'>l'agence</span> <br/>
                    en <span className='blue'>images.</span>
                </h1>
                <p className='citation'>“Explorez notre selection de projets et découvrez comment nous <br/>
                avons aidé nos clients à atteindre leurs objectifs.”</p>
                <p className='more'>Cliquez sur les projets pour en savoir plus !</p>
                <img src={desktop} alt='illustration'/>
            </header>
            <CardContainer cards={cards}/>
            <Footer/>
        </div>
    )
}

export default Project
