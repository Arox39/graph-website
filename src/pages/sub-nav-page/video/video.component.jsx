import './video.style.scss'
import SubNavHeader from '../../../components/shared/sub-nav-header/sub-nav-header.component'
import headerImg from '../../../assets/img/deskstop vidéo.png'
const Video = () => {
    return (
        <div>
            <SubNavHeader 
            title="La vidéo <span className='underline'>marketing</span>
            <br/> la clé de<span className='blue'>votre succés.</span>"
            citation='La vidéo offre un impact inégalé pour attirer et engager votre <br/> public cible.'
            subtitle="La vidéo, votre alliée"
            subcontent="<strong>La vidéo</strong> est aujourd'hui la <span>star incontestée</strong> des réseaux sociaux, notamment grâce à TikTok, mais aussi sur Instagram, Facebook, YouTube et bien d'autres. Nous sommes là pour <strong>vous aider</strong> à tirer parti de cette audience massive en créant des vidéos qui attirent et engagent <strong>votre public cible</strong>. Qu'il s'agisse de tutoriels, de publicités, de vidéos de marque ou de contenu éducatif, nous sommes là pour vous aider à <span>vous démarquer</strong>."
            img={headerImg}
            />
        </div>
    )
}

export default Video