import s from "./Concesionarios.module.css";
import img from "../../../assets/mercury/Imagen 318.jpg";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import MapaArgentina from "./mapa/mapa";
import Card from "./cardConcesionario/card";
import MapaDos from "./mapa/mapados";

export default function Concesionarios({mobileMenu, setMobileMenu}) {
  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);

  const handleClick = (input) => {
    input.current.focus();
  };

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
            />
          </div>
        </div>
        <div className={s.map}>
          <div className={s.botones}>
            <button>Toda la red</button>
            <button>Concesionarios</button>
            <button>Servicios</button>
          </div>
          {/* <MapaArgentina /> */}
          <MapaDos />
          <Card email={"iwanpatagonia@gmail.com"} telefono={"294-4901004"} direccion={"Isla Victoria 725"} nombre={"Iwan Patagonia"} />
          <Card email={"jtrdesign@hotmail.com"} telefono={"116044 5484"} direccion={"Rio Sarmiento 342"} nombre={"JTR DESIGN"} />
          <Card email={"info@questyachts.com"} telefono={"4897 6935"} direccion={"Santa Rosa 33"} nombre={"QUEST YACHTS"} />
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
                />
              </div>
              <Card email={"iwanpatagonia@gmail.com"} telefono={"294-4901004"} direccion={"Isla Victoria 725"} nombre={"Iwan Patagonia"} />
              <Card email={"jtrdesign@hotmail.com"} telefono={"116044 5484"} direccion={"Rio Sarmiento 342"} nombre={"JTR DESIGN"} />
              <Card email={"info@questyachts.com"} telefono={"4897 6935"} direccion={"Santa Rosa 33"} nombre={"QUEST YACHTS"} />
            </div>
            <div className={s.map}>
              <div className={s.botones}>
                <button>Toda la red</button>
                <button>Concesionarios</button>
                <button>Servicios</button>
              </div>
              {/* <MapaArgentina /> */}
              <MapaDos />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
