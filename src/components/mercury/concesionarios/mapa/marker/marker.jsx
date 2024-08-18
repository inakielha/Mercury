
import { useState } from 'react'
import { SiGooglemaps } from "react-icons/si"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import s from "./marker.module.css"
import { IoMdClose } from "react-icons/io";
import { pathImages } from '../../../../../pathImages'
import logoMercury from "../../../../../assets/mercury/mapa/Mercury.png"


const Marker = ({ className, mapa, markerId, onClick, email, telefono, direccion, nombre, lat, lng, onMarkerClick, setOrdenConcesionarios, mapRef, ...props }) => {
    const [info, setInfo] = useState(false)
    const [clickMap, setClickMap] = useState(false)

    const handleMouseEnter = () => {
        console.log("entre")
        setOrdenConcesionarios((prevMarkers) =>
            prevMarkers.map((marker) =>
                marker.nombre === nombre ? { ...marker, zIndex: 100 } : { ...marker, zIndex: 1 }
            )
        );
        setInfo(true)
    }

    const handleDirection = () => {
        const map = mapRef.current;
        // inside the map instance you can call any google maps method
        let latLng = new window.google.maps.LatLng(lat, lng); //Makes a latlng
        map.panTo(latLng); //Make map global
        map?.setZoom(15)
    }

    const handleEmailClick = () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
        window.open(gmailUrl, '_blank');
    };

    return (
        <>
            {
                lat && lng ? (
                    <div className={s.markerSection} >

                        <img
                            onClick={() => {
                                setClickMap(!clickMap)
                            }
                            }
                            lat={lat}
                            lng={lng}
                            className={className}
                            src={pathImages + "/logoMercury.png"}
                            // src={pathImages + logoMercury}
                            style={{ cursor: 'pointer', fontSize: 40, zIndex: 2 }}
                            alt={markerId}
                            width={35}
                            height={35}
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={() => setInfo(false)}
                            zIndex={5}
                            {...props}
                        />
                        {
                            (info || clickMap) &&
                            <div className={s.marcador} id='marcador' >
                                <div className={s.marcadorContainer} >
                                    <div className={s.titleCont}>
                                        <h3 >{nombre}</h3>
                                        <IoMdClose style={{ cursor: "pointer", paddingRight:"10px"}} onClick={() => {
                                            setClickMap(false)
                                            console.log("clickie")
                                        }} />
                                    </div>
                                    <div style={{ cursor: "pointer" }} onClick={() => handleDirection()}>
                                        <SiGooglemaps className={s.icon} /><span>{direccion}</span>
                                    </div>
                                    <div >
                                        <BsTelephone className={s.icon} /><span>{telefono}</span>
                                    </div>
                                    <div style={{ cursor: "pointer" }} onClick={() => handleEmailClick()}>
                                        <HiOutlineMail className={s.icon} /><span>{email}</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ) : ""
            }
        </>
    )
}

export default Marker;