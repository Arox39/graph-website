import './overlay.styles.scss'
// import homeImage from '../../../../assets/img/projets/Allard/Allard_Accueil.png'
const Overlay = ({homeImage, presentationImage, thirdImage, fourthImage, color}) => {
    console.log(homeImage);
    return (
            <div className='overlay'>
                <div className='overlay-container'>
                <img className='first-bg' src={homeImage} alt='home illustration'/>
                <section className='second-bg'  style={{backgroundColor:color,}}>
                    <img className='image-part' src={presentationImage} alt='presentation illustration'/> 
                    <div className='text-part'>
                    <p> 
                        Allard Créations à fait appel à GraphiLeaf pour donner vie à son identité visuelle. De la création du logotype à la conception de la carte de visite et du flyer, chaque détail a été méticuleusement pensé pour représenter l'excellence de cette entreprise dédiée à la menuiserie et à l'agencement contemporain.
                        <br/>
                        <br/>
                        Chez Allard Créations, chaque espace est précieux. L'esthétisme et la fonctionnalité s'entrelacent pour donner vie à des créations durables, façonnées principalement à partir de bois massif provenant des forêts du nord-est de la France. La proximité des partenaires locaux, situés à moins de 20 km de l’atelier, est la garantie d'une qualité exceptionnelle.
                        <br/>
                        <br/>
                        <span> GraphiLeaf, Cultivons ensemble votre image </span>
                    </p>
                    </div>
                </section>
                <section className='third-bg'>
                    <img className='left-img' src={thirdImage} alt='third part'/>
                    <img className='right-img' src={fourthImage} alt='fourth part'/>
                </section>
                </div>
            </div>
    )
}

export default Overlay