import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import headerImg from '../../../assets/img/Illustration Veille.svg'
import SubContent from './subcontent/subcontent.component'
import Footer from '../../../components/footer/footer.component'
const Veille = () => {
    return (
        <div>
            <SubNavHeader 
            title="Un service pour <span className='underline'>rester à l'âffut</span>
            <br/> des <span className='blue'>tendances & opportunités.</span>"
            citation="Gardez une longueur d'avance avec notre service de <br/> veille opérationnelle."
            subtitle="Anticipez les tendances "
            subcontent="Notre service de veille vous permet de rester informé des <strong>dernières tendances</strong> et des développements importants dans votre secteur d'activité. Nous surveillons en permanence les actualités pertinentes, et nous vous fournissons des <strong>rapports réguliers</strong> pour vous aider à prendre des décisions éclairées."
            img={headerImg}
            />
            <SubContent />
            <Footer/>
    </div>
    )
}

export default Veille