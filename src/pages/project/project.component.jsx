import './project.style.scss'
import Footer from '../../components/footer/footer.component'
import desktop from '../../assets/img/Illustration Projet.svg'
import CardContainer from './component/card-container/card-container.component'

import cardeImage1 from '../../assets/img/projets/Allard/Allard_Accueil.png'
import image2 from "../../assets/img/projets/Raphystole.png"
import image3 from '../../assets/img/projets/AFP.png'
import image4 from '../../assets/img/projets/Eliott.png'
import image5 from '../../assets/img/projets/SleepAndWork.png'

// overlay 
import homeImage from '../../assets/img/projets/Allard/Allard_Accueil.png'
import thirdImage from '../../assets/img/projets/Allard/Allard_Carré-bas-droite.png'
import presentationImage from '../../assets/img/projets/Allard/Allard_Carte.png'
import fourthImage from '../../assets/img/projets/Allard/Allard_Flyer.png'



const cards = [
    {
        id:1,
        title: 'Allard',
        img: cardeImage1,
        description: 'Identité visuelle',
        categorie: 'graphisme',

        homeImage:homeImage,
        presentationImage:presentationImage,
        thirdImage:thirdImage,
        fourthImage:fourthImage,
    },
    {
        id:2,
        title: "raphy'Stole",
        img: image2,
        description: 'Description du projet de graphisme 2.',
        categorie: 'graphisme',

    },
    {
        id:3,
        title: 'AFP',
        img: image3,
        description: 'Identité Twitch',
        categorie: 'graphisme',
    },
    {
        id:4,
        title: 'Eliott Brenner',
        img: image4,
        description: 'Description du projet vidéo 1.',
        categorie: 'video',
    },
    {
        id:5,
        title: 'Sleep And Work',
        img: image5,
        description: 'Description du projet de social media 1.',
        categorie: 'social',
    },

]



const Project = () => {

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
