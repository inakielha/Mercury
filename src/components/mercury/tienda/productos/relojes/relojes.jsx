import Slider from "react-slick";
import s from "./relojes.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../../assets/mercury/relojes/flagship/Imagen 407.png"
import img2 from "../../../../../assets/mercury/relojes/Imagen 217.png"
// import img2 from "../../../../../assets/mercury/relojes/Imagen 220.png"
import img3 from "../../../../../assets/mercury/relojes/Imagen 218.png"
import img4 from "../../../../../assets/mercury/relojes/Imagen 219.png"
import img5 from "../../../../../assets/mercury/relojes/vesselView Mobile/Imagen 411.png"
import Flagship from "./flagship/flagship";
import Mercmonitor from "./mercmonitor/MercMonitor";
import Digital from "./digital/Digital";
import VesselView from "./VesselView/vesselView";
import VesselViewMobile from "./vesselView Mobile/VesselViewMobile";

import { useState } from "react";

export default function Relojes() {
  const [category, setCategory] = useState("")

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    // autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };


  const handleClick = (text)=>{
   setCategory(text)
  }

  return (
      <div className={s.productos}>
        <div className={s.webProducts}>
          <div className={s.borde} onClick={()=> handleClick("Flagship")}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>Flagship</span>
          </div>
          <div className={s.borde} onClick={()=> handleClick("MercMonitor")}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>MercMonitor</span>
          </div>
          <div className={s.borde} onClick={()=> handleClick("Digital")}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Digital SC100/SC1000</span>
          </div>
          <div className={s.borde} onClick={()=> handleClick("VesselView")}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>VesselView ®</span>
          </div>
          <div className={s.borde} onClick={()=> handleClick("VesselView Mobile")}>
            <div className={s.imgContainer}>
              <img src={img5} alt="promo" />
            </div>
            <span>VesselView Mobile ®</span>
          </div>
          
        </div>
        <Slider {...settings} className={s.slider}>
          <div className={s.borde}  onClick={()=> handleClick("Flagship")}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>Flagship</span>
          </div>
          <div className={s.borde}  onClick={()=> handleClick("MercMonitor")}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>MercMonitor</span>
          </div>
          <div className={s.borde}  onClick={()=> handleClick("Digital")}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Digital SC100/SC1000</span>
          </div>
          <div className={s.borde}  onClick={()=> handleClick("VesselView")}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>VesselView ®</span>
          </div>
          <div className={s.borde}  onClick={()=> handleClick("VesselView Mobile")}>
            <div className={s.imgContainer}>
              <img src={img5} alt="promo" />
            </div>
            <span>VesselView Mobile ®</span>
          </div>
        </Slider>
        
        {category === "VesselView Mobile" ?
          <VesselViewMobile/> :
          category === "VesselView" ?
          <VesselView/> : 
          category === "Digital" ? 
          <Digital/> :
          category === "Flagship" ?
          <Flagship/> :
          category === "MercMonitor" ?
          <Mercmonitor/> :
          <></>
      }
      </div>
  );
}
