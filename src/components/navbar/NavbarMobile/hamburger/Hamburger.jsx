import s from "./Hamburguer.module.css"

import Sidebar from "./sideBar/Sidebar";
import MenuMobile from "./menuMobile/MenuMobile";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Hamburger({ setMobileMenu, show }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobileMediaQuery = window.matchMedia('(max-width: 768px)'); // Puedes ajustar el valor de 768px según tus necesidades
    
        function handleResize() {
          setIsMobile(mobileMediaQuery.matches);
        }
    
        // Agregar un event listener para manejar cambios de tamaño
        mobileMediaQuery.addListener(handleResize);
    
        // Llamar a handleResize al cargar la página
        handleResize();
    
        // Limpieza del event listener en componentWillUnmount
        return () => {
          mobileMediaQuery.removeListener(handleResize);
        };
      }, []);

    return (
        <>
        {
            isMobile ? 
            <div className={s.mobile}><MenuMobile setMobileMenu={setMobileMenu} show={show} /></div>
            :
            <div className={s.web}><Sidebar open={show} close={setMobileMenu} /></div>
        }
        </>
    )
}