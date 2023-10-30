import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import s from "./mapa.module.css"
import mapa from "../../../../assets/mercury/mapa/icons8-dirección-centro-50.png"
export default function MapaArgentina() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD_wU2aDT6Er1JeevHfB9CDO4Gr84tRYL0",
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -40.055453999763984, lng: -66.523111284521 }), []);

  return (
    <>
    <GoogleMap zoom={5} center={center} mapContainerClassName={s.mapContainer}>
      <Marker  position={{lat: -40.055453999763984, lng: -66.523111284521}} />
      <Marker  position={{ lat: -42.055453999763984, lng: -66.523111284521 }} icon={mapa} />
      <Marker  position={{ lat: -35.055453999763984, lng: -66.523111284521 }} icon={mapa} />
    </GoogleMap>

    </>
  );
}