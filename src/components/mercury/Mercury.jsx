import { useSelector } from "react-redux";
import Tienda from "./tienda/Tienda";
import Motores from "./motores/Motores";
import Propulsion from "./propulsion/Propulsion";
import Concesionarios from "./concesionarios/Concesionarios";

export default function Mercury({ setMobileMenu, mobileMenu }) {
    const categorySelected = useSelector((state) => state.clientReducer.category)
    return (
        <>
            {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{zIndex:"2",position:"absolute",width:"100%",height:"100%",backgroundColor:"#000000a3"}}></div>}

            {categorySelected === "repuestos y accesorios" && <Tienda  />}
            {categorySelected === "motores" && <Motores  />}
            {categorySelected === "sist. integral de propulsión" && <Propulsion />}
            {categorySelected === "concesionarios y servicios" && <Concesionarios />}
        </>
    )
}