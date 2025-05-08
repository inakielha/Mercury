import { useState } from 'react'
import { SiGooglemaps } from "react-icons/si"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import s from "./marker.module.css"
import { IoMdClose } from "react-icons/io";
import { pathImages } from '../../../../../pathImages'


const Marker = ({ className, mapa, markerId, onClick, email, telefono, direccion, nombre, lat, lng, onMarkerClick, zoom, setOrdenConcesionarios, mapRef, ...props }) => {
    
    const [info, setInfo] = useState(false)
    const [clickMap, setClickMap] = useState(false)

    const handleMouseEnter = () => {
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
                            src={pathImages + "/logo generac.png"}
                            style={{ cursor: 'pointer', fontSize: 40, zIndex: 2 }}
                            alt={markerId}
                            width={35}
                            height={35}
                            onMouseEnter={() => handleMouseEnter()}
                            onMouseLeave={() => setInfo(false)}
                            zIndex={2}
                            {...props}
                        />
                        {
                            (info || clickMap) &&
                            // (info || clickMap) && zoom != 5 &&
                            <div className={s.marcador} zIndex={20} style={{ zIndex: "500" }}>
                                <div className={s.marcadorContainer} style={{ zIndex: "500" }}>
                                    <div className={s.titleCont}>
                                        <h3 style={{ zIndex: "500" }}>{nombre}</h3>
                                        <IoMdClose style={{ cursor: "pointer" }} onClick={() => {
                                            setClickMap(false)
                                            console.log("clickie")
                                        }} />
                                    </div>
                                    <div style={{ zIndex: "500", cursor:"pointer" }} onClick={() => handleDirection()}>
                                        <SiGooglemaps className={s.icon} /><span>{direccion}</span>
                                    </div>
                                    <div style={{ zIndex: "500" }}>
                                        <BsTelephone className={s.icon} /><span>{telefono}</span>
                                    </div>
                                    <div style={{ zIndex: "500", cursor:"pointer" }} onClick={() => handleEmailClick()}>
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