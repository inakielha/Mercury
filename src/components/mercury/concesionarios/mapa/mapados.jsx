// import GoogleMap from 'google-maps-react-markers'
// import Marker from './marker/marker'
// import { useRef, useState } from 'react'
// import jsonCordenadas from "./coordenadas/mercury_concesionarios.json"
// const MapaDos = ({concesionarios}) => {
//     const mapRef = useRef(null)
//     const [mapReady, setMapReady] = useState(false)

//     const onGoogleApiLoaded = ({ map, maps }) => {
//         mapRef.current = map
//         setMapReady(true)
//     }

//     const onMarkerClick = (e, { markerId, lat, lng }) => {
//         console.log('This is ->', markerId)

//         // inside the map instance you can call any google maps method
//         mapRef.current.setCenter({ lat, lng })
//         // ref. https://developers.google.com/maps/documentation/javascript/reference?hl=it
//     }


//     return (
//         <>
//             {/* {mapReady && <div>Map is ready. See for logs in developer console.</div>} */}
//             <GoogleMap
//                 apiKey="AIzaSyD_wU2aDT6Er1JeevHfB9CDO4Gr84tRYL0"
//                 defaultCenter={{ lat: -40.055453999763984, lng: -66.523111284521 }}
//                 defaultZoom={5}
//                 // options={mapOptions}
//                 mapMinHeight="60vh"
//                 onGoogleApiLoaded={onGoogleApiLoaded}
//                 onChange={(map) => console.log('Map moved', map)}
//             >
//                 {concesionarios?.length && concesionarios.map(({ latitude, longitude, nombre, email, tel1,direccion }, index) =>
//                 (
//                     <Marker
//                         key={index}
//                         lat={latitude}
//                         lng={longitude}
//                         markerId={nombre}
//                         nombre={nombre}
//                         email= {email}
//                         telefono = {tel1}
//                         direccion = {direccion}
//                         onClick={onMarkerClick} // you need to manage this prop on your Marker component!
//                     // draggable={true}
//                     // onDragStart={(e, { latLng }) => {}}
//                     // onDrag={(e, { latLng }) => {}}
//                     // onDragEnd={(e, { latLng }) => {}}
//                     />
//                 ))}
//             </GoogleMap>
//         </>
//     )
// }

// export default MapaDos




import GoogleMap from 'google-maps-react-markers'
import { useEffect, useRef, useState } from 'react'
import Marker from './marker/marker';
import useScreenWidth from '../../../../hooks/useScreenWidth';




const MapaDos = ({ concesionarios, mapRef, setOrdenConcesionarios }) => {
    const screenWidth = useScreenWidth([430, 900, 1100]);
    const [info, setInfo] = useState(false)
    const [markers, setMarkers] = useState([]);

    const onGoogleApiLoaded = ({ map }) => {
        mapRef.current = map
    }

    const onMarkerClick = (markerId, lat, lng) => {

        const map = mapRef.current;
        // inside the map instance you can call any google maps method
        let latLng = new window.google.maps.LatLng(lat, lng); //Makes a latlng
        map.panTo(latLng); //Make map global
        map?.setZoom(12)

    }

    let mapOptions = {
        zoom: 5
    }


    return (
        <div style={{ ...(screenWidth < 900 ? { position: "relative", height: '50vh', width: '100%' } : { width: '100%', height: '600px' }) }}>

            {/* {mapReady && <div>Map is ready. See for logs in developer console.</div>} */}
            <GoogleMap
                apiKey="AIzaSyD_wU2aDT6Er1JeevHfB9CDO4Gr84tRYL0"
                // defaultCenter={{ lat: -40.055453999763984, lng: -66.523111284521 }}
                defaultCenter={{ lat: -40.055453999763984, lng: -66.523111284521 }}
                defaultZoom={5}
                options={mapOptions}
                mapMinHeight="50vh"
                onGoogleApiLoaded={onGoogleApiLoaded}
            >
                {concesionarios?.length && concesionarios.map(({ mapa, nombre, email, tel1, direccion, latitude, longitude, zIndex }, index) => {

                    return (
                        <Marker
                            zIndex={zIndex != null ? zIndex : 1}
                            key={index}
                            mapa={mapa}
                            lat={latitude}
                            lng={longitude}
                            markerId={nombre}
                            nombre={nombre}
                            email={email}
                            telefono={tel1}
                            direccion={direccion}
                            onMarkerClick={onMarkerClick}
                            setOrdenConcesionarios={setOrdenConcesionarios}
                            mapRef={mapRef}
                        />
                    )
                })}

            </GoogleMap>
        </div>
    )
}

export default MapaDos