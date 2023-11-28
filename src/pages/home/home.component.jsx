import "./home.responsive.scss"

import Header from './components/header/header.component'
import Discover from './components/discover/discover.component'
import Solution from './components/solutions/solution.component'
import SolutionBubble from "./components/solutions/solution-bubble.component"
import Who from './components/who/who.component'
import Footer from '../../components/footer/footer.component'
const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Discover/>
            <Solution/>
            <SolutionBubble/>
            <Who/>
            <Footer />
        </div>
    )
}

export default Home