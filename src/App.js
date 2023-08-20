import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav.component.jsx'
import Home from './pages/home/home.component.jsx'
import Project from './pages/project/project.component.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/graphiLeaf' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='project' element={<Project/>}/>
      </Route>
    </Routes>
  );
}

export default App;
