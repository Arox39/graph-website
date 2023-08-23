import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav.component.jsx'
import Home from './pages/home/home.component.jsx'
import Project from './pages/project/project.component.jsx'
import Agence from './pages/agence/agence.component';

const App = () => {
  return (
    <Routes>
      <Route path='/graphiLeaf' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='agence' element={<Agence/>}/>
      </Route>
    </Routes>
  );
}

export default App;
