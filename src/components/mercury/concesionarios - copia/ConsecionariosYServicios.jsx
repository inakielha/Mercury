import { useEffect, useRef, useState } from "react";
import s from "./ConsecionariosYServicios.module.css";

import jsonCordenadas from "./mapa/data/mercury_concesionarios.json";
import Mapa from "./mapa/Mapa";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./card/card";
import axios from "axios"
import MenuItem from '@mui/material/MenuItem';
import { opcionesSelect } from "./mapa/data/select_options";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { pathImages } from "../../../pathImages";

const ConsecionariosYServicios = () => {
  
  // let coordinates = Object.values(jsonCordenadas);
  let coordinatesExample = Object.values(jsonCordenadas);
  const screenWidth = useScreenWidth([430, 768, 1100]);
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);
  const [filterZone, setFilterZone] = useState({ provincia: "Seleccione la zona", value: "" });
  const [filterName, setFilterName] = useState("");
  const [items, setItems] = useState();
  const [page, setPage] = useState(0);
  const [coordinates, setCoordinates] = useState([]);
  const [ordenConcesionarios, setOrdenConcesionarios] = useState([]);
  const [colorBtn, setColorBtn] = useState("all");
  const [latDef, setLatDef] = useState(-40.055453999763984);
  const [lngDef, setlngDef] = useState(-66.523111284521);
  const [zoom, setZoom] = useState(5);
  const [select, setSelect] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mapRef = useRef(null)


  const handleSelect = (event) => {
    let value = event.currentTarget.dataset.value;
    const provincia = event.target.innerText
    if (value == "All") value = ""
    setFilterZone({ provincia, value })
    if (colorBtn === "all") {
      // Filtrar la lista de elementos en base a la entrada del usuario
      const filteredItems = coordinates.filter((item) =>
        (!value || item.localidad_filter.toLowerCase() === value.toLowerCase()) &&
        (!filterName || item.nombre.toLowerCase().includes(filterName))
      );
      setOrdenConcesionarios(filteredItems);
    } else if (colorBtn === "concesionarios") {
      const filteredItems = coordinates.filter((item) => {
        // if (
        //   item.localidad_filter.toLowerCase().includes(value.toLowerCase()) &&
        //   item.tipo == "D"
        // )
        //   return 1;
        item.tipo === "D" &&
          (!value || item.localidad_filter.toLowerCase() === value.toLowerCase()) &&
          (!filterName || item.nombre.toLowerCase().includes(filterName))
      });


      setOrdenConcesionarios(filteredItems);
    } else {
      const filteredItems = coordinates.filter((item) => {
        // if (
        //   item.localidad_filter.toLowerCase().includes(value.toLowerCase()) &&
        //   item.tipo == "S"
        // )
        //   return 1;
        item.tipo === "S" &&
          (!value || item.localidad_filter.toLowerCase() === value.toLowerCase()) &&
          (!filterName || item.nombre.toLowerCase().includes(filterName))
      });
      setOrdenConcesionarios(filteredItems);
    }

    // ZOOM CUANDO CLICKEA LA PROVINCIA 
    let lat = event.currentTarget.dataset.lat;
    let lng = event.currentTarget.dataset.lng;

    const map = mapRef.current;
    let latLng = new window.google.maps.LatLng(lat, lng); //Makes a latlng
    map.panTo(latLng); //Make map global
    if (provincia == "Todas las zonas") map?.setZoom(5)
    else map?.setZoom(6)
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // console.log(inputValue, "enttre")
    setFilterName(inputValue);

    if (colorBtn === "all") {
      // Filtrar la lista de elementos en base a la entrada del usuario
      const filteredItems = coordinates.filter((item) =>
        (!filterZone?.value || item.localidad_filter.toLowerCase() === filterZone?.value.toLowerCase()) &&
        (!inputValue || item.nombre.toLowerCase().includes(inputValue))
      );
      setOrdenConcesionarios(filteredItems);
    } else if (colorBtn === "concesionarios") {
      const filteredItems = coordinates.filter((item) => {
        item.tipo === "D" &&
          (!filterZone?.value || item.localidad_filter.toLowerCase() === filterZone?.value.toLowerCase()) &&
          (!inputValue || item.nombre.toLowerCase().includes(inputValue))
      });
      setOrdenConcesionarios(filteredItems);
    } else {
      const filteredItems = coordinates.filter((item) => {
        item.tipo === "S" &&
          (!filterZone?.value || item.localidad_filter.toLowerCase() === filterZone?.value.toLowerCase()) &&
          (!inputValue || item.nombre.toLowerCase().includes(inputValue))
      });
      setOrdenConcesionarios(filteredItems);
    }
  };

  const handleZoomMap = (lat, lng) => {
    const map = mapRef.current;
    // inside the map instance you can call any google maps method
    let latLng = new window.google.maps.LatLng(lat, lng); //Makes a latlng
    map.panTo(latLng); 
    map?.setZoom(15)
    setZoom(1)
  }

  const handleConcesionarios = (type) => {
    setColorBtn(type);
    // console.log(filterZone)
    if (type === "all") {
      setOrdenConcesionarios(coordinates);
    } else if (type === "concesionarios") {
      // console.log("concesio entre")
      // if (filterName) {
      // let concesionarios = coordinates.filter(
      //   (concesionaria) =>
      //     concesionaria.tipo === "D" &&
      //     concesionaria.localidad_filter.toLowerCase().includes(filterZone?.value) &&
      //     concesionaria.nombre.toLowerCase().includes(filterName)
      // );
      // console.log(filterZone)
      let concesionarios = coordinates.filter(
        (concesionaria) =>
          concesionaria.tipo === "D" &&
          (!filterZone?.value || concesionaria.localidad_filter.toLowerCase() === filterZone.value.toLowerCase()) &&
          (!filterName || concesionaria.nombre.toLowerCase().includes(filterName))
      );
      setOrdenConcesionarios(concesionarios);
      // } else {
      //   let concesionarios = coordinates.filter(
      //     (concesionaria) =>
      //       concesionaria.tipo === "D" &&
      //       concesionaria.localidad_filter.toLowerCase() == filterZone?.value.toLowerCase()
      //   );
      //   setOrdenConcesionarios(concesionarios);
      // }
    } else if (type === "servicios") {
      // if (filterName) {
      let servicio = coordinates.filter(
        (concesionaria) =>
          concesionaria.tipo === "S" &&
          (!filterZone?.value || concesionaria.localidad_filter.toLowerCase() === filterZone.value.toLowerCase()) &&
          (!filterName || concesionaria.nombre.toLowerCase().includes(filterName))
      );
      setOrdenConcesionarios(servicio);
      // } else {
      //   let servicio = coordinates.filter(
      //     (concesionaria) =>
      //       concesionaria.tipo === "S" &&
      //       concesionaria.localidad_filter.toLowerCase() == filterZone?.value.toLowerCase()
      //   );
      //   setOrdenConcesionarios(servicio);
      // }
    }
  };

  function chunkArray(arr, chunkSize) {
    return Array.from(
      { length: Math.ceil(arr.length / chunkSize) },
      (_, index) => arr.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }

  // console.log(ordenConcesionarios)
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setItems(chunkArray[page]);
    setPage((prev) => prev++);
  };

  const fetchData = async () => {
    try {
      // =========================
      // PRD
      const response = await axios.get('https://www.navalmotor.com/api/generac/concesionarios');
      setCoordinates(response.data)
      setOrdenConcesionarios(response.data);
      // ============================
      // QAS
      // setOrdenConcesionarios(coordinatesExample);
      // setCoordinates(coordinatesExample)
      // ===============================
      
      // console.log(response)
      // console.log("orden",ordenConcesionarios)
      setLoading(false);
    } catch (error) {
      console.log("error:",error)
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // const chunked = chunkArray(ordenConcesionarios, 3);
    fetchData()
    console.log("ejecute")
  }, []);

  return (
    <section className={s.concesionarios_container}>
      {screenWidth <= 768 ? (
        <img className={s.concesionario_img} src={pathImages + "/concesionarios_img.png"} />
      ) : (
        <img
          className={s.concesionario_img}
          src={pathImages + "/concesionarios_desktop_img.png"}
        />
      )}

      <div className={s.concesionarios_title}>
        <h2>Ventas y Servicios</h2>
        <p>+ de 70 servicios móviles en todo el País.</p>
      </div>

      <div className={s.concesionario_layout}>
        <div className={s.concersionarios_content}>
          <div className={s.search}>
            <div className={s.search_inputs}>
              {/* <BasicSelect/> */}
              <div
                className={s.input_container}
                // onClick={() => inputRef.current.focus()}
                onClick={() => setSelect(!select)}
              >

                <IconContext.Provider
                  value={{ className: s.icon, size: "0.7em" }}
                >
                  {!select && <BiSearch />}
                </IconContext.Provider>
                {/* <input
                  ref={inputRef}
                  type="text"
                  placeholder=" Seleccione la zona"
                  onChange={(e) => handleInputChange(e)}
                  value={filterZone.provincia}
                  id="zona"
                /> */}
                <div className={s.divInput}>
                  {filterZone.provincia}
                </div>
                {select &&
                  <div className={s.select} >
                    {opcionesSelect.length && opcionesSelect.map((options, index) => {
                      return (
                        <MenuItem key={index} className={s.fontsize} style={{ fontSize: "inherit" }} data-lng={options.lng} data-lat={options.lat} data-value={options.value} onClick={(e) => handleSelect(e)}>{options.provincia}</MenuItem>
                      )
                    })}
                  </div>
                }
              </div>
              <div
                className={s.input_container}
                onClick={() => inputRefTwo.current.focus()}
              >
                <IconContext.Provider
                  value={{ className: s.icon, size: "0.7em" }}
                >
                  <BiSearch />
                </IconContext.Provider>
                <input
                  ref={inputRefTwo}
                  type="text"
                  placeholder=" Ingrese el nombre"
                  id="nombre"
                  onChange={(e) => handleInputChange(e)}
                  value={filterName}
                />
              </div>
            </div>

            <div className={s.search_buttons}>
              <button
                onClick={() => handleConcesionarios("all")}
                style={
                  colorBtn === "all"
                    ? { color: "#FFFFFF", backgroundColor: "#DD6E1D" }
                    : {}
                }
              >
                Toda la red
              </button>
              <button
                onClick={() => handleConcesionarios("concesionarios")}
                style={
                  colorBtn === "concesionarios"
                    ? { color: "#FFFFFF", backgroundColor: "#DD6E1D" }
                    : {}
                }
              >
                Concesionarios
              </button>
              <button
                onClick={() => handleConcesionarios("servicios")}
                style={
                  colorBtn === "servicios"
                    ? { color: "#FFFFFF", backgroundColor: "#DD6E1D" }
                    : {}
                }
              >
                Servicios
              </button>
            </div>
          </div>

          <div className={s.concesionarios_list}>
            {/* Aca va los concesionarios loopeados en cards */}
            <InfiniteScroll
              dataLength={chunkArray.length}
              next={fetchMoreData}
              hasMore={true}
              height={"50vh"}
              className={s.infinite}
              style={{ width: "100%" }}
            >
              {ordenConcesionarios?.length ?
                ordenConcesionarios.map((concecionario, index) => {
                  return (
                    <Card
                      key={index}
                      email={concecionario.email}
                      telefono={concecionario.tel1}
                      direccion={concecionario.direccion}
                      nombre={concecionario.nombre}
                      movil={concecionario.movil}
                      mapa={concecionario.mapa}
                      handleZoomMap={handleZoomMap}
                    />
                  );
                }) : <p>No se encuentran resultados</p>}
            </InfiniteScroll>
          </div>
        </div>

        <Mapa concesionarios={ordenConcesionarios} setOrdenConcesionarios={setOrdenConcesionarios} latDef={latDef} lngDef={lngDef} zoom={zoom} mapRef={mapRef} />
      </div>
    </section>
  );
};

export default ConsecionariosYServicios;
