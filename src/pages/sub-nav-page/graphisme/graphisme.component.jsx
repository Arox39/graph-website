import './graphisme.style.scss'
import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'

import headerImg from '../../../assets/img/desktop.png'

const Graphisme = () => {
    return (
        <div>
            <SubNavHeader 
            title="Notre <span className='underline'>créativité au services</span>
            <br>de <span className='blue'>votre image.</span>"
            citation='Le design graphique est un élément essentiel pour réussir et se <br/> démarquer sur le marché en ligne.'
            subtitle="Identité visuelle"
            subcontent="L'identité visuelle représentent votre entreprise, le logo, les couleurs, les typographies et les icônes. Chez GraphiLeaf, nous créons une <strong>identité visuelle unique</strong> pour votre entreprise qui vous permettra de vous démarquer de la concurrence et de renforcer la reconnaissance de votre marque."
            img={headerImg}
            />
        </div>
    )
}

export default Graphisme