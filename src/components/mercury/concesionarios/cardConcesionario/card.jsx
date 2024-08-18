import { SiGooglemaps } from "react-icons/si"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import s from "./card.module.css"

export default function Card({ direccion, telefono, email, nombre, handleZoomMap, lat ,lng }) {
    return (
        <div className={s.card} onClick={()=>handleZoomMap(lat,lng)}>
            <h3>{nombre}</h3>
            <div className={s.info}><SiGooglemaps /><span>{direccion}</span></div>
            <div className={s.info}><BsTelephone /><span>{telefono}</span></div>
            <div className={s.info}><HiOutlineMail /><span>{email}</span></div>
        </div>
    )
}
