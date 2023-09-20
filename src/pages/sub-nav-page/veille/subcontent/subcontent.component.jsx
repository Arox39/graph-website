import './subcontent.style.scss'
import greyGrid from '../../../../assets/img/BG-PG.svg'
import blueGrid from '../../../../assets/img/BG-PB.svg'
import blueArrow from '../../../../assets/img/ArrowBleu.svg'
const SubContent = () => {
    return (
        <div className='veille-content'>
            <section className='veille-description'>   
                <img className='grey-grid' src={greyGrid} alt='grey grid'/>
                <h1 className='description-title'>Veille stratégique 
                    <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                </h1>
                <p className='description-content'>Nous effectuons une veille stratégique pour vous aider à <strong>comprendre les tendances</strong> émergentes et les 
                <strong>opportunités de croissance</strong> dans votre secteur d'activité. Nous vous aidons également à élaborer des <strong>stratégies efficaces</strong> pour répondre 
                à ces tendances et opportunités.</p>
            </section>
            <section className='media'>
                    <h1 className='media-title'>Surveillance des médias et de la concurrence 
                        <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                    </h1>
                <div className="media-content">
                    <div className='media-element'>
                        <h1 className='element-title'>Media 
                            <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                        </h1>
                        <p className='element-description'>Nous surveillons les médias sociaux pour <strong>identifier les tendances 
                        émergentes</strong>  dans votre secteur d'activité. Nous pouvons également surveiller les mentions de votre 
                        entreprise et de vos concurrents pour vous aider à comprendre ce qui est dit à votre sujet.</p>
                    </div>
                    <div className='media-element'>
                        <h1 className='element-title'>Concurrence 
                            <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                        </h1>
                        <p className='element-description'>Nous <strong>surveillons la concurrence</strong> pour comprendre leurs stratégies et leurs activités. 
                        Nous effectuons une analyse comparative de votre entreprise par rapport à vos concurrents pour vous aider
                        à comprendre comment vous vous situez sur le marché.</p>
                        <img className='first-blue-grid' src={blueGrid} alt='blue-grid' />
                        <img className='second-blue-grid' src={blueGrid} alt='blue-grid' />
                    </div>
                </div>
            </section>
            <section className='analyse'>
                <img className='first-blue-grid' src={blueGrid} alt='blue-grid' />
                <img className='second-blue-grid' src={blueGrid} alt='blue-grid' />
                <h1 className='analyse-title'>Analyse et rapports 
                    <span><img className='blueArrow' src={blueArrow} alt='blue arrow'/></span>
                </h1>
                <p className='analyse-content'>Nous analysons les données pour identifier les tendances émergentes 
                et les opportunités de croissance dans votre secteur d'activité. Nous fournissons également des rapports
                réguliers pour vous informer des dernières tendances et des développements importants dans votre secteur
                d'activité. Ces rapports peuvent vous aider à prendre des décisions éclairées et à rester au courant des 
                évolutions de votre marché.</p>
            </section>
        </div>
    )
}

export default SubContent