
import GoogleMap from 'google-maps-react-markers'
import { useEffect, useRef, useState } from 'react'
import Marker from './marker/marker';
import useScreenWidth from '../../../../hooks/useScreenWidth';

const Mapa = ({ concesionarios, latDef, lngDef, zoom, mapRef, setOrdenConcesionarios }) => {
    
    const screenWidth = useScreenWidth([430, 900, 1100]);
    const [mapReady, setMapReady] = useState(false)
    const [info, setInfo] = useState(false)
    const [markers, setMarkers] = useState([]);

    const onGoogleApiLoaded = ({ map }) => {
        mapRef.current = map
        setMapReady(true)
    }

    const onMarkerClick = (markerId, lat, lng) => {

        const map = mapRef.current;
        // inside the map instance you can call any google maps method
        let latLng = new window.google.maps.LatLng(lat, lng); //Makes a latlng
        map.panTo(latLng); //Make map global
        map?.setZoom(12)
    }

    let concesionariosNew = concesionarios?.map(item => {
        let mapa = item?.mapa?.split(" ")
        let lat = ""
        let lng = ""
        if (mapa?.length) {
            lat = mapa[0]?.split("=")[1].replaceAll("'", "")
            lng = mapa[1]?.split("=")[1].replaceAll("'", "")
        } 
        if (lat && lng){
            return {
                ...item, // Copia todas las propiedades existentes del objeto
                lat: lat , // Añade la nueva propiedad
                lng: lng 
            };
        }
    });
    // console.log({ zoom })
    let mapOptions = {
        zoom: zoom
    }


    return (
        <div style={{ ...(screenWidth < 900 ? { position: 'absolute', height: '100px', width: '100%', top: '200px', zIndex: "2", } : { width: '100%', height: '600px' }) }}>

            {/* {mapReady && <div>Map is ready. See for logs in developer console.</div>} */}
            <GoogleMap
                apiKey="AIzaSyD_wU2aDT6Er1JeevHfB9CDO4Gr84tRYL0"
                // defaultCenter={{ lat: -40.055453999763984, lng: -66.523111284521 }}
                defaultCenter={{ lat: latDef, lng: lngDef }}
                defaultZoom={zoom}
                options={mapOptions}
                mapMinHeight="50vh"
                onGoogleApiLoaded={onGoogleApiLoaded}

            >
                {concesionariosNew?.length && concesionariosNew?.map(({ mapa, nombre, email, tel1, direccion, lat, lng, zIndex }, index) => {

                    return (
                        <Marker
                            zIndex={zIndex != null ? zIndex : 1}
                            key={index}
                            mapa={mapa}
                            lat={lat}
                            lng={lng}
                            markerId={nombre}
                            nombre={nombre}
                            email={email}
                            telefono={tel1}
                            direccion={direccion}
                            zoom={zoom}
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

export default Mapa