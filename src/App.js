import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav.component.jsx'
import Home from './pages/home/home.component.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
