import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav.component.jsx'
import Home from './pages/home/home.component.jsx'
import Project from './pages/project/project.component.jsx'
import Agence from './pages/agence/agence.component';
import ProjectPage from './components/shared/project-page/project-page.component'
// subnav import 
import Graphisme from './pages/sub-nav-page/graphisme/graphisme.component'
import Video from './pages/sub-nav-page/video/video.component'
import Social from './pages/sub-nav-page/social/social.component'
import Formation from './pages/sub-nav-page/formation-ebooks/formation-ebooks.component'
import Veille from './pages/sub-nav-page/veille/veille.component'
import Seo from './pages/sub-nav-page/seo/seo.component'
import Ads from './pages/sub-nav-page/ads/ads.component'
import DevWeb from './pages/sub-nav-page/dev-web/dev-web.component'
import Contact from './pages/contact/contact.component';
const App = () => {
  return (
    <Routes>
      <Route path='/graphiLeaf' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='project/project-page' element={<ProjectPage/>}/>
        <Route path='agence' element={<Agence/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='graphisme' element={<Graphisme />}/>
        <Route path='video' element={<Video/>}/>
        <Route path='social' element={<Social/>}/>
        <Route path='formation' element={<Formation/>}/>
        <Route path='veille' element={<Veille/>}/>
        <Route path='seo' element={<Seo/>}/>
        <Route path='ads' element={<Ads/>}/>
        <Route path='devWeb' element={<DevWeb/>}/>

      </Route>
    </Routes>
  );
}

export default App;
