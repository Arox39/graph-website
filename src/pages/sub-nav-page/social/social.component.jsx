import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import './social.style.scss'
import headerImg from '../../../assets/img/Desktop social.png'
const Social = () => {
    return (
        <div>
            <SubNavHeader 
            title="Une <span className='underline'>présence en ligne</span> forte pour
            <br/> une <span className='blue'>visibilité maximale.</span>"
            citation="Les réseaux sociaux sont aujourd'hui incontournables pour une <br/>entreprise qui veut être visible et toucher son public cible"
            subtitle="Gérez vos réseaux comme un pro "
            subcontent="Les réseaux sociaux sont une <strong>plateforme efficace</strong> pour atteindre <strong>votre public cible</strong> et créer une relation de confiance avec lui. Cependant, maintenir une présence active sur les réseaux sociaux peut être une tâche ardue et chronophage. C'est là que notre service de Social Media Management entre en jeu."
            img={headerImg}
            />
        </div>
    )
}

export default Social