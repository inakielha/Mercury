import s from "./Concesionarios.module.css";
import img from "../../../assets/mercury/Imagen 318.jpg";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import MapaArgentina from "./mapa/mapa";
import Card from "./cardConcesionario/card";
import MapaDos from "./mapa/mapados";
import jsonCordenadas from "./mapa/coordenadas/mercury_concesionarios.json"
import InfiniteScroll from "react-infinite-scroll-component";
import portada from "../../../assets/mercury/concesionario/portada.jpg"
import { pathImages } from "../../../pathImages";
import MenuItem from '@mui/material/MenuItem';
import { opcionesSelect } from "./mapa/coordenadas/select_options";
import axios from "axios"



export default function Concesionarios({ mobileMenu, setMobileMenu }) {
  // let coordinates = Object.values(jsonCordenadas);
  let coordinatesExample = Object.values(jsonCordenadas);

  const [ordenConcesionarios, setOrdenConcesionarios] = useState([])
  const [colorBtn, setColorBtn] = useState("all")
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);
  const [items, setItems] = useState()
  const [page, setPage] = useState(0)
  const [filterZone, setFilterZone] = useState({ provincia: "Seleccione la zona", value: "" });
  const [filterName, setFilterName] = useState("");
  const mapRefMobile = useRef(null)
  const mapRef = useRef(null)
  const [select, setSelect] = useState("");
  const [coordinates, setCoordinates] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSelect = (event) => {
    let value = event.currentTarget.dataset.value;
    const provincia = event.target.innerText
    // console.log({provincia})
    // console.log({value})
    if (value == "All") value = ""
    setFilterZone({ provincia, value })
    if (colorBtn === "all") {
      // Filtrar la lista de elementos en base a la entrada del usuario
      if (provincia.includes("Bs. As") || provincia.includes("Interior")) {
        const filteredItems = coordinates.filter((item) =>
          (!value || item.localidad_filter.includes(value.toLowerCase())) &&
          (!filterName || item.nombre.toLowerCase().includes(filterName))
        );
        setOrdenConcesionarios(filteredItems);
      } else {

        const filteredItems = coordinates.filter((item) =>
          (!value || item.localidad_filter.toLowerCase().includes(value.toLowerCase())) &&
          (!filterName || item.nombre.toLowerCase().includes(filterName))
        );
        setOrdenConcesionarios(filteredItems);
      }
    } else if (colorBtn === "concesionarios") {
      if (provincia.includes("Bs. As") || provincia.includes("Interior")) {
        const filteredItems = coordinates.filter((item) => {
          return item.concesionario &&
            (!value || item.localidad_filter.includes(value.toLowerCase())) &&
            (!filterName || item.nombre.toLowerCase().includes(filterName))
        });
        setOrdenConcesionarios(filteredItems);
      } else {

        const filteredItems = coordinates.filter((item) => {
          return item.concesionario &&
            (!value || item.localidad_filter.toLowerCase().includes(value.toLowerCase())) &&
            (!filterName || item.nombre.toLowerCase().includes(filterName))
        });

        setOrdenConcesionarios(filteredItems);
      }
    } else {
      console.log("entre aca", provincia, !filterName, !value, value)
      if (provincia.includes("Bs. As") || provincia.includes("Interior")) {
        const filteredItems = coordinates?.filter((item) => {
          return item.servicio &&
            (!value || item.localidad_filter.includes(value.toLowerCase())) &&
            (!filterName || item.nombre.toLowerCase().includes(filterName))
        });
        setOrdenConcesionarios(filteredItems);
      } else {

        const filteredItems = coordinates?.filter((item) => {
          return item.servicio && (!value || item?.localidad_filter.toLowerCase().includes(value.toLowerCase())) && (!filterName || item?.nombre.toLowerCase().includes(filterName))
        });
        console.log(filteredItems)
        setOrdenConcesionarios(filteredItems);
      }
    }

    // ZOOM CUANDO CLIKEA LA PROVINCIA 
    let lat = event.currentTarget.dataset.lat;
    let lng = event.currentTarget.dataset.lng;

    const map = mapRef.current;
    const mapMobile = mapRefMobile.current;
    let latLng = new window.google.maps.LatLng(lat, lng); //Makes a latlng
    map.panTo(latLng); //Make map global
    mapMobile.panTo(latLng); //Make map global
    if (provincia == "Todas las zonas") {
      map?.setZoom(5)
      mapMobile?.setZoom(5)
    }
    else {
      map?.setZoom(6)
      mapMobile?.setZoom(6)
    }
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    let type = event.target.id
    if (type === "zona") {
      setFilterZone(inputValue);

      if (colorBtn === "all") {
        // Filtrar la lista de elementos en base a la entrada del usuario
        const filteredItems = coordinates.filter((item) =>
          item.ciudad.toLowerCase().includes(inputValue.toLowerCase())
        );
        setOrdenConcesionarios(filteredItems);

      } else if (colorBtn === "concesionarios") {
        const filteredItems = coordinates.filter((item) => {
          if (item.ciudad.toLowerCase().includes(inputValue.toLowerCase()) && item.concesionario == 1) return 1
        }
        );
        setOrdenConcesionarios(filteredItems);
      } else {
        const filteredItems = coordinates.filter((item) => {
          if (item.ciudad.toLowerCase().includes(inputValue.toLowerCase()) && item.servicio == 1) return 1
        }
        );
        setOrdenConcesionarios(filteredItems);
      }
    } else {
      setFilterName(inputValue);

      if (colorBtn === "all") {
        console.log("entre")
        // Filtrar la lista de elementos en base a la entrada del usuario
        const filteredItems = coordinates.filter((item) =>
          item.nombre.toLowerCase().includes(inputValue.toLowerCase()) && (!filterZone.value || item.localidad_filter.includes(filterZone.value.toLowerCase()))


        // (!value || item.localidad_filter.includes(value.toLowerCase())) &&
        //   (!filterName || item.nombre.toLowerCase().includes(filterName))


        );
        setOrdenConcesionarios(filteredItems);

      } else if (colorBtn === "concesionarios") {
        const filteredItems = coordinates.filter((item) => {
          if (item.nombre.toLowerCase().includes(inputValue.toLowerCase()) && item.concesionario == 1 && (!filterZone.value || item.localidad_filter.includes(filterZone.value.toLowerCase()))) return 1
        }
        );
        setOrdenConcesionarios(filteredItems);
      } else {
        // const filteredItems = coordinates.filter((item) => {
        //   if (item.nombre.toLowerCase().includes(inputValue.toLowerCase()) && item.servicio == 1 && (!filterZone.value || item.localidad_filter.includes(filterZone.value.toLowerCase()))) return 1
        // }
        const filteredItems = coordinates.filter((item) => 
          item.nombre.toLowerCase().includes(inputValue.toLowerCase()) && item.servicio == 1 && (!filterZone.value || item.localidad_filter.includes(filterZone.value.toLowerCase()))
        
      );
      setOrdenConcesionarios(filteredItems);
    }
  }
  
};


  const handleConcesionarios = (type) => {
    setColorBtn(type)
    let concesionarios;
    let servicio;
    let all = coordinates
    if (type === "all") {
      // if (filterZone?.provincia.includes("Bs. As") || filterZone?.provincia.includes("Interior")) {
      //   all = coordinates.filter(concesionaria => (concesionaria?.localidad_filter.includes(filterZone.value.toLowerCase()) || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))
      // } else {
      //   all = coordinates.filter(concesionaria => (concesionaria?.provincia.toLowerCase() == filterZone.value.toLowerCase() || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))
      // }

      all = coordinates.filter(concesionaria => (concesionaria?.localidad_filter.includes(filterZone.value.toLowerCase()) || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))

      setOrdenConcesionarios(all)
    }
    else if (type === "concesionarios") {
      // if (filterZone?.provincia.includes("Bs. As") || filterZone?.provincia.includes("Interior")) {
      //   concesionarios = coordinates.filter(concesionaria => concesionaria.concesionario && (concesionaria?.localidad_filter.includes(filterZone.value.toLowerCase()) || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))
      // } else {
      //   concesionarios = coordinates.filter(concesionaria => concesionaria.concesionario && (concesionaria?.provincia.toLowerCase() == filterZone.value.toLowerCase() || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))
      // }

      concesionarios = coordinates.filter(concesionaria => concesionaria.concesionario && (concesionaria?.localidad_filter.includes(filterZone.value.toLowerCase()) || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))
      setOrdenConcesionarios(concesionarios)
    }
    else if (type === "servicios") {
      // if (filterZone?.provincia.includes("Bs. As") || filterZone?.provincia.includes("Interior")) {
      //   servicio = coordinates.filter(concesionaria => concesionaria.servicio && (concesionaria?.localidad_filter.includes(filterZone.value.toLowerCase()) || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))
      // } else {
      //   servicio = coordinates.filter(concesionaria => concesionaria.servicio && (concesionaria?.provincia.toLowerCase() == filterZone.value.toLowerCase() || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))
      // }

      servicio = coordinates.filter(concesionaria => concesionaria.servicio && (concesionaria?.localidad_filter.includes(filterZone.value.toLowerCase()) || !filterZone.value) && (concesionaria.nombre.toLowerCase().includes(filterName) || !filterName))

      setOrdenConcesionarios(servicio)
    }
  }

  function chunkArray(arr, chunkSize) {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
      arr.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }

  const handleZoomMap = (lat, lng) => {
    const map = mapRef.current;
    const mapMobile = mapRefMobile.current;
    // inside the map instance you can call any google maps method
    let latLng = new window.google.maps.LatLng(lat, lng); //Makes a latlng
    map.panTo(latLng); //Make map global
    map?.setZoom(15)

    mapMobile.panTo(latLng); //Make map global
    mapMobile?.setZoom(15)
  }
  // console.log(ordenConcesionarios)
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setItems(chunkArray[page])
    setPage((prev) => prev++)
  };

  const fetchData = async () => {
    try {
      // PRD=====================
      const response = await axios.get('https://www.navalmotor.com/api/mercury/concesionarios');
      setCoordinates(response.data)
      setOrdenConcesionarios(response.data);
      console.log(response)
      // ========================
      // QAS=====================
      // setOrdenConcesionarios(coordinatesExample);
      // setCoordinates(coordinatesExample)
      // ========================
      

      // console.log("orden",ordenConcesionarios)
      setLoading(false);
    } catch (error) {
      console.log("error:", error)
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className={s.section}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{ zIndex: "2", position: "absolute", width: "100%", height: "100%", backgroundColor: "#000000a3" }}></div>}
      <div className={s.imgContainer}>
        <img src={pathImages + portada} alt="barco" />
      </div>
      <div className={s.texto}>
        <h3>LOS MEJORES PRODUCTOS TIENEN A LOS MEJORES VENDEDORES. </h3>
        <span>
          Cuando fabrica los mejores productos marítimos del mundo, solo quiere
          que lo representen los mejores vendedores. Por eso nos aseguramos de
          que los vendedores de Mercury sean los mejores equipados para las
          ventas y el servicio de nuestros productos. Y con miles de vendedores
          en todo el mundo, puede estar tranquilo de que siempre estaremos cerca
          para ayudarlo a navegar a lo grande.
        </span>
      </div>
      <div className={s.mobile}>
        <div className={s.tienda}>
          <h3>Bienvenidos a la tienda Mercury.</h3>
          <div className={s.search_inputs}>
            {/* <BasicSelect/> */}
            <div
              className={s.input_container}
              onClick={() => setSelect(!select)}
            >

              <IconContext.Provider
                value={{ className: s.icon, size: "0.7em" }}
              >
                {!select && <BiSearch />}
              </IconContext.Provider>
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
        </div>
        <div className={s.map}>
          <div className={s.botones}>
            <button onClick={() => handleConcesionarios("all")} style={colorBtn === "all" ? { color: "#FFFFFF", backgroundColor: "#0c4c6b" } : {}}>Toda la red</button>
            <button onClick={() => handleConcesionarios("concesionarios")} style={colorBtn === "concesionarios" ? { color: "#FFFFFF", backgroundColor: "#0c4c6b" } : {}}>Concesionarios</button>
            <button onClick={() => handleConcesionarios("servicios")} style={colorBtn === "servicios" ? { color: "#FFFFFF", backgroundColor: "#0c4c6b" } : {}}>Servicios</button>
          </div>
          <MapaDos concesionarios={ordenConcesionarios} setOrdenConcesionarios={setOrdenConcesionarios} mapRef={mapRefMobile} />
          <InfiniteScroll
            dataLength={chunkArray.length}
            next={fetchMoreData}
            hasMore={true}
            height={"50vh"}
            width={"100%"}
            className={s.infinite}
            style={{ width: "100%" }}
          >
            {ordenConcesionarios?.length && ordenConcesionarios.map((concecionario) => {
              return (
                <Card email={concecionario.email} telefono={concecionario.tel1} direccion={concecionario.direccion} nombre={concecionario.nombre} handleZoomMap={handleZoomMap} lat={concecionario.latitude} lng={concecionario.longitude} />
              )
            })}
          </InfiniteScroll>
        </div>
      </div>

      <div className={s.web}>
        <div className={s.tienda} >
          <h3>Bienvenidos a la tienda Mercury.</h3>
          <div className={s.tiendaContainer}>
            <div className={s.concesionarioInfo}>
              <div className={s.botones}>
                <button onClick={() => handleConcesionarios("all")} style={colorBtn === "all" ? { color: "#FFFFFF", backgroundColor: "#0c4c6b" } : {}}>Toda la red</button>
                <button onClick={() => handleConcesionarios("concesionarios")} style={colorBtn === "concesionarios" ? { color: "#FFFFFF", backgroundColor: "#0c4c6b" } : {}}>Concesionarios</button>
                <button onClick={() => handleConcesionarios("servicios")} style={colorBtn === "servicios" ? { color: "#FFFFFF", backgroundColor: "#0c4c6b" } : {}}>Servicios</button>
              </div>



              {/* --------------------------ACAAA-------------------------------- */}
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
                <div className={s.input_container} onClick={() => inputRefTwo.current.focus()} >
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

              <InfiniteScroll
                dataLength={chunkArray.length}
                next={fetchMoreData}
                hasMore={true}
                height={"50vh"}
                className={s.infinite}
              // style={{ width: "100%" }}
              >
                {ordenConcesionarios?.length ?  ordenConcesionarios.map((concecionario) => {
                  return (
                    <Card email={concecionario.email} telefono={concecionario.tel1} direccion={concecionario.direccion} nombre={concecionario.nombre} handleZoomMap={handleZoomMap} lat={concecionario.latitude} lng={concecionario.longitude} />
                  )
                }) : <span>No se encuentran resultados</span>}
              </InfiniteScroll>
            </div>
            <div className={s.map}>
              <MapaDos concesionarios={ordenConcesionarios} setOrdenConcesionarios={setOrdenConcesionarios} mapRef={mapRef} />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
