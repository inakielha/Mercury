import Slider from "react-slick";
import s from "./Carrusel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORY } from "../../../redux/actions/actions";

export default function Carrusel() {
  const [category, setCategory] = useState("Repuestos y Accesorios");
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    let category = e.target.innerText.toLowerCase()
    setCategory(category);
    dispatch(CATEGORY(category));
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className={s.section}>
      <div className={s.container}>
        {/* <Slider className={s.slider} {...settings}> */}
        <Slider {...settings}>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "motores" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Motores</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "sist. integral de propulsión" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Sist. Integral de Propulsión</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              style={
                category === "repuestos y accesorios" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
              className={s.borde}
            >
              <h3>Repuestos y Accesorios</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "concesionarios y servicios" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Concesionarios y Servicios</h3>
            </div>
          </div>
          <div
            onClick={(e) => handleCategory(e)}
            className={s.carruselContainer}
          >
            <div
              className={s.borde}
              style={
                category === "contacto" ? {
                  backgroundColor: "#DF0404",
                  color: "#fff",
                } : {}
              }
            >
              <h3>Contacto</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
