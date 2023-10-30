import logo from './logo.svg';
import './App.css';
import Mercury from './components/mercury/Mercury';
import Navbar from './components/navbar/Navbar';
import Footer from './components/mercury/footer/Footer';
import Motores from './components/mercury/motores/Motores';
import { Route, Routes } from 'react-router-dom';
import Propulsion from './components/mercury/propulsion/Propulsion';
import Concesionarios from './components/mercury/concesionarios/Concesionarios';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar /><Mercury /> <Footer /></>} />
        <Route path='/motores' element={<><Navbar /><Motores /> <Footer /></>} />
        <Route path='/propulsion' element={<><Navbar /><Propulsion /> <Footer /></>} />
        <Route path='/concesionarios' element={<><Navbar /><Concesionarios /> <Footer /></>} />
      </Routes>

    </>
  );
}

export default App;
