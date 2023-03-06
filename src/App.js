import './App.css';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Register from './components/Register';

function App() { 
  return (
    <div className="App">
      <div className='nav'>
        <NavLink to="/"><h5>Kalvium❤️</h5></NavLink>
        <div className='right'>
          <NavLink to="/Contact" style={{ display: 'inline-block' }}><h5>Contact</h5></NavLink>
          <NavLink to="/Register" style={{ display: 'inline-block' }}><h5>Register</h5></NavLink>
        </div>
      </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </div>
      
    </div>
  );
}

export default App;
