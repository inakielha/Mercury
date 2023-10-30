import { useSelector } from "react-redux";
import Carrusel from "./carrusel/Carrusel";
import Header from "./header/Header";
import Postal from "./tienda/postal/Postal";
import Productos from "./tienda/productos/Productos";
import Promos from "./tienda/promos/Promos";
import Tienda from "./tienda/Tienda";
import Motores from "./motores/Motores";
import Propulsion from "./propulsion/Propulsion";
import Concesionarios from "./concesionarios/Concesionarios";

export default function Mercury({isMobile}){
    const categorySelected = useSelector((state)=> state.clientReducer.category)
    console.log(categorySelected)
    return(
       <>
       {isMobile && <Header/>}
       {isMobile && <Carrusel/>}
       { categorySelected === "repuestos y accesorios" && <Tienda isMobile = {isMobile}/> }
       { categorySelected === "motores" && <Motores isMobile={isMobile}/> }
       { categorySelected === "sist. integral de propulsión" && <Propulsion/> }
       { categorySelected === "concesionarios y servicios" && <Concesionarios/> }
       {/* { categorySelected === "Repuestos y Accesorios" && <Tienda/> } */}
       {/* { categorySelected === "Repuestos y Accesorios" && <Tienda/> } */}
       {/* { categorySelected === "Repuestos y Accesorios" && <Tienda/> } */}
       </>
    )
}