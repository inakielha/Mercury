import logo from './logo.svg';
import './App.css';
import Mercury from './components/mercury/Mercury';
import Navbar from './components/navbar/Navbar';
import Motores from './components/mercury/motores/Motores';
import { Route, Routes } from 'react-router-dom';
import Propulsion from './components/mercury/propulsion/Propulsion';
import Concesionarios from './components/mercury/concesionarios/Concesionarios';
import { useState } from 'react';
import Filtro from './components/navbar/filtro/Filtro';
import Tienda from './components/mercury/tienda/Tienda';
import ConsecionariosYServicios from './components/mercury/concesionarios - copia/ConsecionariosYServicios';
import NavbarGenerac from './components/navbar generac/navbar';
import Footer from './components/mercury/footerUniversal/Footer';
import Informacion from './components/mercury/Informacion/Informacion';

function App() {
  const [mobileMenu, setMobileMenu] = useState("hide")
  const [currentPath, setCurrentPath] = useState("/");


  return (
    <>
      <Routes>
        {/* <Route path='/' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Tienda setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} /> */}
        {/* <Route path='/mercury/' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Motores  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/><Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} />
        <Route path='/mercury/motores' element={<><Navbar s0etMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Motores  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} />
        <Route path='/mercury/propulsion' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Propulsion setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /></>} />
        <Route path='/mercury/concesionarios' element={<><Navbar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Concesionarios  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} /> */}

        {/* <Route path='/mercury/' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Motores  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/><Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} />
        <Route path='/mercury/motores' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Motores  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} />
        <Route path='/mercury/propulsion' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Propulsion setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /></>} />
        <Route path='/mercury/concesionarios' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Concesionarios  setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/> <Footer setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/></>} /> */}

        <Route path='/mercury/' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Motores setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /><Footer /></>} />
        <Route path='/mercury/motores' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Motores setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /> <Footer /></>} />
        <Route path='/mercury/propulsion' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Propulsion setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /> <Footer /></>} />
        <Route path='/mercury/concesionarios' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Concesionarios setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /> <Footer /></>} />
        <Route path='/mercury/informacion' element={<><NavbarGenerac setCurrentPath={setCurrentPath} currentPath={currentPath} /><Informacion setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} /> <Footer /></>} />

      </Routes>

    </>
  );
}

export default App;
