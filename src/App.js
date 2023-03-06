import './App.css';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() { 
  return (
    <div className="App">
      <div className='nav'>
        <NavLink to="/"><h5>Kalvium❤️</h5></NavLink>
        <div className='right'>
          <NavLink to="/Contact" style={{ display: 'inline-block' }}><h5>Contact</h5></NavLink>
          <NavLink to="/About" style={{ display: 'inline-block' }}><h5>About</h5></NavLink>
        </div>
      </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      
    </div>
  );
}

export default App;
