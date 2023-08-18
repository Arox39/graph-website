import './home.style.scss'

import Header from './components/header/header.component'
import Discover from './components/discover/discover.component'
import Solution from './components/solutions/solution.component'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Discover/>
            <Solution/>
        </div>
    )
}

export default Home