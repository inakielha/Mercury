import Slider from "react-slick";
import s from "./controles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../../assets/mercury/controles/Imagen 289.png"
import img2 from "../../../../../assets/mercury/controles/Imagen 290.png"
import img3 from "../../../../../assets/mercury/controles/Imagen 291.png"
import img4 from "../../../../../assets/mercury/controles/Imagen 292.png"
import img5 from "../../../../../assets/mercury/controles/Imagen 293.png"
import { useState } from "react";
import { relojesSingle, relojesDoble, Joystick } from "../info";
import Producto from "./producto/Producto";

export default function Controles() {
  const [category, setCategory] = useState("Single")
  const setProduct = ()=>{

  }
  function handleCategory(e) {
    setCategory(e.target.innerText)
  }
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    // autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (

    <div className={s.productos}>
      <div className={s.btnContainer}>
        <button onClick={(e) => handleCategory(e)} style={category === "Single" ? { color: "#FFFFFF", backgroundColor: "#DF0404" } : {}}>Single</button>
        <button onClick={(e) => handleCategory(e)} style={category === "Doble" ? { color: "#FFFFFF", backgroundColor: "#DF0404" } : {}}>Doble</button>
        <button onClick={(e) => handleCategory(e)} style={category === "Joystick" ? { color: "#FFFFFF", backgroundColor: "#DF0404" } : {}}>Joystick</button>
      </div>
      <div className={s.webProducts}>
        {/* <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={img5} alt="promo" />
          </div>
          <span>Lateral Mecánico</span>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={img4} alt="promo" />
          </div>
          <span>Lateral de Embutir Mecánico</span>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={img3} alt="promo" />
          </div>
          <span>Mesada Mecánico</span>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={img1} alt="promo" />
          </div>
          <span>Embutir DTS</span>
        </div>
        <div className={s.borde}>
          <div className={s.imgContainer}>
            <img src={img2} alt="promo" />
          </div>
          <span>Mesada DTS</span>
        </div> */}
        {
          category === "Single" ?
          relojesSingle.map(({img, titulo, subtitulo})=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct={setProduct}/>
          ))
          :
          category === "Doble" ? 
          relojesDoble.map(({img, titulo, subtitulo})=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct={setProduct}/>
          ))
          :
          category === "Joystick" &&
          Joystick.map(({img, titulo, subtitulo})=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct={setProduct}/>
          ))
        }
      </div>
      <Slider {...settings} className={s.slider}>
        {
          category === "Single" ?
          relojesSingle.map(({img, titulo, subtitulo})=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct={setProduct}/>
          ))
          :
          category === "Doble" ? 
          relojesDoble.map(({img, titulo, subtitulo})=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct={setProduct}/>
          ))
          :
          category === "Joystick" &&
          Joystick.map(({img, titulo, subtitulo})=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct={setProduct}/>
          ))
        }
      </Slider>
    </div>
  );
}
