import Slider from "react-slick";
import s from "./helices.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../../assets/mercury/helices/Imagen 294.png"
import img2 from "../../../../../assets/mercury/helices/Imagen 295.png"
import img3 from "../../../../../assets/mercury/helices/Imagen 296.png"
import img4 from "../../../../../assets/mercury/helices/Imagen 297.png"
import img5 from "../../../../../assets/mercury/helices/Imagen 298.png"

import { useState } from "react";

export default function Helices() {
    const [category, setCategory] = useState("Serie Sport")
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
  function handleCategory (e){
    setCategory(e.target.innerText)
  } 
  return (
     
      <div className={s.productos}>
        <div className={s.btnContainer}>
            <button onClick={(e)=>handleCategory(e)} style={category === "Serie Sport" ? {color:"#FFFFFF",backgroundColor:"#DF0404"}: {}}>Serie Sport</button>
            <button onClick={(e)=>handleCategory(e)} style={category === "Serie Elite" ? {color:"#FFFFFF",backgroundColor:"#DF0404"}: {}}>Serie Elite</button>
            <button onClick={(e)=>handleCategory(e)} style={category === "Serie Comp" ? {color:"#FFFFFF",backgroundColor:"#DF0404"}: {}}>Serie Comp</button>
        </div>
        <div className={s.webProducts}>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img5} alt="promo" />
            </div>
            <span>Black Max</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>Laser II</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>Mirage Plus</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Trophy Sport</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>Vengeance</span>
          </div>
          
        </div>
        <Slider {...settings} className={s.slider}>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img5} alt="promo" />
            </div>
            <span>Black Max</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>Laser II</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>Mirage Plus</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Trophy Sport</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>Vengeance</span>
          </div>
        </Slider>
      </div>
  );
}
