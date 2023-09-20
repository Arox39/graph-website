import './overlay.styles.scss'
// import homeImage from '../../../../assets/img/projets/Allard/Allard_Accueil.png'
const Overlay = ({homeImage, presentationImage, thirdImage, fourthImage}) => {
    console.log(homeImage);
    return (
            <div className='overlay'>
                <img className='first-bg' src={homeImage} alt='home illustration'/>
                <section className='second-bg'>
                    <img className='image-part' src={presentationImage} alt='presentation illustration'/> 
                    <div className='text-part'>
                    <p> kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da nvnsldzmna;n skan ;lkds cnddsn;j dakcs  kdsa lnfaflkvans ds;da n </p></div>
                </section>
                <section className='third-bg'>
                    <img className='left-img' src={thirdImage} alt='third part'/>
                    <img className='right-img' src={fourthImage} alt='fourth part'/>
                </section>
            </div>
    )
}

export default Overlay