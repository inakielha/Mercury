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

export default function Concesionarios({ mobileMenu, setMobileMenu }) {
  let coordinates = Object.values(jsonCordenadas);
  const [ordenConcesionarios, setOrdenConcesionarios] = useState(coordinates)
  const [colorBtn, setColorBtn] = useState("all")
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);
  const [items, setItems] = useState()
  const [page, setPage] = useState(0)
  const [filterZone, setFilterZone] = useState("");
  const [filterName, setFilterName] = useState("");

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
        // Filtrar la lista de elementos en base a la entrada del usuario
        const filteredItems = coordinates.filter((item) =>
          item.nombre.toLowerCase().includes(inputValue.toLowerCase())
        );
        setOrdenConcesionarios(filteredItems);

      } else if (colorBtn === "concesionarios") {
        const filteredItems = coordinates.filter((item) => {
          if (item.nombre.toLowerCase().includes(inputValue.toLowerCase()) && item.concesionario == 1) return 1
        }
        );
        setOrdenConcesionarios(filteredItems);
      } else {
        const filteredItems = coordinates.filter((item) => {
          if (item.nombre.toLowerCase().includes(inputValue.toLowerCase()) && item.servicio == 1) return 1
        }
        );
        setOrdenConcesionarios(filteredItems);
      }
    }

  };


  const handleConcesionarios = (type) => {
    setColorBtn(type)
    if (type === "all") {
      setOrdenConcesionarios(coordinates)
    }
    else if (type === "concesionarios") {
      let concesionarios = coordinates.filter(concesionaria => concesionaria.concesionario === "1" && concesionaria.ciudad.toLowerCase().includes(filterZone) && concesionaria.nombre.toLowerCase().includes(filterName))
      setOrdenConcesionarios(concesionarios)
    }
    else if (type === "servicios") {
      let servicio = coordinates.filter(concesionaria => concesionaria.servicio === "1" && concesionaria.ciudad.toLowerCase().includes(filterZone) && concesionaria.nombre.toLowerCase().includes(filterName))
      setOrdenConcesionarios(servicio)
    }
  }

  function chunkArray(arr, chunkSize) {
    return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
      arr.slice(index * chunkSize, (index + 1) * chunkSize)
    );
  }


  console.log(ordenConcesionarios)
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setItems(chunkArray[page])
    setPage((prev) => prev++)
  };

  useEffect(() => {
    const chunked = chunkArray(ordenConcesionarios, 3);
  }, [ordenConcesionarios])

  return (
    <section className={s.section}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{ zIndex: "2", position: "absolute", width: "100%", height: "100%", backgroundColor: "#000000a3" }}></div>}
      <div className={s.imgContainer}>
        <img src={img} alt="barco" />
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

          <div className={s.inputCont} onClick={() => inputRef.current.focus()}>
            <IconContext.Provider value={{ className: s.icon, size: "0.7em" }}>
              <BiSearch />
            </IconContext.Provider>
            <input
              ref={inputRef}
              type="text"
              placeholder=" Ingrese la zona"
              onChange={(e) => handleInputChange(e)}
              value={filterZone}
              id="zona"
            />
          </div>

          <div className={s.inputCont} onClick={() => inputRefTwo.current.focus()}>
            <IconContext.Provider value={{ className: s.icon, size: "0.7em" }}>
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
        <div className={s.map}>
          <div className={s.botones}>
            <button>Toda la red</button>
            <button>Concesionarios</button>
            <button>Servicios</button>
          </div>
          <MapaDos />
          <InfiniteScroll
            dataLength={chunkArray.length}
            next={fetchMoreData}
            hasMore={true}
            height={"50vh"}
          >
            {ordenConcesionarios?.length && ordenConcesionarios.map((concecionario) => {
              return (
                <Card email={concecionario.email} telefono={concecionario.tel1} direccion={concecionario.direccion} nombre={concecionario.nombre} />
              )
            })}
          </InfiniteScroll>
        </div>
      </div>

      <div className={s.web}>
        <div className={s.tienda}>
          <h3>Bienvenidos a la tienda Mercury.</h3>
          <div className={s.tiendaContainer}>
            <div className={s.concesionarioInfo}>
              <div className={s.inputCont} onClick={() => inputRef.current.focus()}>
                <IconContext.Provider value={{ className: s.icon, size: "0.7em" }}>
                  <BiSearch />
                </IconContext.Provider>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder=" Ingrese la zona"
                  onChange={(e) => handleInputChange(e)}
                  value={filterZone}
                  id="zona"
                />
              </div>

              <div className={s.inputCont} onClick={() => inputRefTwo.current.focus()}>
                <IconContext.Provider value={{ className: s.icon, size: "0.7em" }}>
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
              <InfiniteScroll
                dataLength={chunkArray.length}
                next={fetchMoreData}
                hasMore={true}
                // loader={<h4>Loading...</h4>}
                height={"50vh"}
              >
                {ordenConcesionarios?.length && ordenConcesionarios.map((concecionario) => {
                  return (
                    <Card email={concecionario.email} telefono={concecionario.tel1} direccion={concecionario.direccion} nombre={concecionario.nombre} />
                  )
                })}
              </InfiniteScroll>
            </div>
            <div className={s.map}>
              <div className={s.botones}>
                <button onClick={() => handleConcesionarios("all")} style={colorBtn === "all" ? { color: "#FFFFFF", backgroundColor: "#DF0404" } : {}}>Toda la red</button>
                <button onClick={() => handleConcesionarios("concesionarios")} style={colorBtn === "concesionarios" ? { color: "#FFFFFF", backgroundColor: "#DF0404" } : {}}>Concesionarios</button>
                <button onClick={() => handleConcesionarios("servicios")} style={colorBtn === "servicios" ? { color: "#FFFFFF", backgroundColor: "#DF0404" } : {}}>Servicios</button>
              </div>
              {/* <MapaArgentina /> */}
              <MapaDos concesionarios={ordenConcesionarios} />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
