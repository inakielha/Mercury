import { SiGooglemaps } from "react-icons/si"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import s from "./card.module.css"
import { pathImages } from "../../../../pathImages"

export default function Card({ direccion, telefono, email, nombre, movil, handleZoomMap, mapa }) {
    
    mapa = mapa?.split(" ")
    let lng = mapa[1]?.split("=")[1].replaceAll("'", "")
    let lat = mapa[0]?.split("=")[1].replaceAll("'", "")
    // if (mapa?.length) {
        
    // }
    // console.log(lat, lng)
    return (
        <div className={s.card} onClick={() => handleZoomMap(lat, lng)}>
            <div className={s.infoCont}>
                <h3>{nombre}</h3>
                <div className={s.info}><SiGooglemaps /><span>{direccion}</span></div>
                <div className={s.info}><BsTelephone /><span>{telefono}</span></div>
                <div className={s.info}><HiOutlineMail /><span>{email}</span></div>
            </div>
            <div className={s.camioneta}>
                {movil ?
                    <img src={pathImages + "/concecionarios/camioneta_generac.png"} alt="camioneta" />
                    : ""
                }
            </div>
        </div>
    )
}