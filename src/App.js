import './App.scss';

import React, { useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';

import Nav from './components/nav/nav.component.jsx';
// import de toute les pages
import Home from './pages/home/home.component.jsx';
import Project from './pages/project/project.component.jsx';
import Agence from './pages/agence/agence.component';
import Contact from './pages/contact/contact.component';
// page du sous menu
import Graphisme from './pages/sub-nav-page/graphisme/graphisme.component';
import Video from './pages/sub-nav-page/video/video.component';
import Social from './pages/sub-nav-page/social/social.component';
import Formation from './pages/sub-nav-page/formation-ebooks/formation-ebooks.component';
import Veille from './pages/sub-nav-page/veille/veille.component';
import Seo from './pages/sub-nav-page/seo/seo.component';
import Ads from './pages/sub-nav-page/ads/ads.component';
import DevWeb from './pages/sub-nav-page/dev-web/dev-web.component';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // on retourne en haut de page a chaque changement de pages
    // sauf quand on veut aller vers la partie solution 
    if (location.hash !== '#solution') 
    {
      window.scrollTo(0, 0);
    } 
    else 
    {
      // on se deplace vers la section solution
      const solutionElement = document.getElementById('solution');
      solutionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);
  return (

    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='project' element={<Project/>}/>
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
};
export default App;