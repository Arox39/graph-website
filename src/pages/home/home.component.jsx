import "./home.responsive.scss"
import Header from './components/header/header.component'
import Discover from './components/discover/discover.component'
import Solution from './components/solutions/solution.component'
import Who from './components/who/who.component'
import Footer from '../../components/footer/footer.component'
const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Discover/>
            <Solution/>
            <Who/>
            <Footer />
        </div>
    )
}

export default Home