import './veille.style.scss'
import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import headerImg from '../../../assets/img/Desktop veille.png'

const Veille = () => {
    return (
        <div>
            <SubNavHeader 
            title="Un service pour <span className='underline'>rester à l'âffut</span>
            <br/> des <span className='blue'>tendances & opportunités.</span>"
            citation="Gardez une longueur d'avance avec notre service de <br/> veille opérationnelle."
            subtitle="Anticipez les tendances "
            subcontent="Notre service de veille vous permet de rester informé des dernières tendances et des développements importants dans votre secteur d'activité. Nous surveillons en permanence les actualités pertinentes, et nous vous fournissons des rapports réguliers pour vous aider à prendre des décisions éclairées."
            img={headerImg}
            />
    </div>
    )
}

export default Veille