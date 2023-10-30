import logo from './logo.svg';
import './App.css';
import Mercury from './components/mercury/Mercury';
import Navbar from './components/navbar/Navbar';
import Footer from './components/mercury/footer/Footer';
import Motores from './components/mercury/motores/Motores';
import { Route, Routes } from 'react-router-dom';
import Propulsion from './components/mercury/propulsion/Propulsion';
import Concesionarios from './components/mercury/concesionarios/Concesionarios';
import { useState } from 'react';
import Filtro from './components/navbar/filtro/Filtro';
import Tienda from './components/mercury/tienda/Tienda';

function App() {
  const [mobileMenu, setMobileMenu] = useState("hide")

  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Tienda setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} />
        <Route path='/motores' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Motores  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} />
        <Route path='/propulsion' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Propulsion setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /></>} />
        <Route path='/concesionarios' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Concesionarios  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} />
      </Routes>

    </>
  );
}

export default App;
