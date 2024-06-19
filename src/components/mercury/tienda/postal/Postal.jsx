import s from "./Postal.module.css";
import img from "../../../../assets/mercury/4300hp_SeaPro_850Impact_Saltwater_2017_Running_55.jpg";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { useRef, useState } from "react";

export default function Postal({ setForm, setRegister }) {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleIngresar = () => {
    setForm(true)
  }

  return (
    <>
      <section className={s.section}>
        <div className={s.imgContainer}>
          <img src={img} alt="barco" />
        </div>
        <div className={s.absolute}>
          <div className={s.search}>
            <div className={s.titles}>
              <h3>Bienvenidos a la tienda Mercury</h3>
              <h4>Obtenga descuentos en sus compras online</h4>
            </div>
            <div className={s.inputCont} onClick={handleClick}>
              <IconContext.Provider value={{ className: s.icon }}>
                <BiSearch />
              </IconContext.Provider>
              <input
                ref={inputRef}
                type="text"
                placeholder=" Ingrese el n° de Repuesto"
              />
            </div>
            <span>
              Si no lo conoce, encuéntrelo en nuestro catálogo de repuestos
            </span>
            <button>BUSCAR</button>
          </div>
          <div className={s.buttonCont}>
            <button onClick={() => handleIngresar()}>INGRESAR</button>
            <button onClick={() => setRegister(true)}>REGISTRAR</button>
          </div>
        </div>
      </section>
      <section className={s.sectionMobile}>
        <div className={s.imgContainer}>
          <img src={img} alt="barco" />
        </div>
        <div className={s.absolute}>
          <div className={s.search}>
            <div className={s.tituloCont}>
              <div className={s.titles}>
                <h3>Bienvenidos</h3>
              </div>
              <div className={s.buttonCont}>
                <button onClick={() => handleIngresar()}>INGRESAR</button>
                <button onClick={() => setRegister(true)}>REGISTRAR</button>
              </div>
            </div>
            <h4>Obtenga descuentos en sus compras online</h4>
            <div className={s.inputCont} onClick={handleClick}>
              <IconContext.Provider value={{ className: s.icon }}>
                <BiSearch />
              </IconContext.Provider>
              <input
                ref={inputRef}
                type="text"
                placeholder=" Ingrese el n° de Repuesto"
              />
            </div>
            <span>
              Si no lo conoce, encuéntrelo en nuestro catálogo de repuestos
            </span>
            <button>BUSCAR</button>
          </div>
        </div>
      </section>
    </>
  );
}
