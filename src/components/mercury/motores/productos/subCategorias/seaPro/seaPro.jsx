import s from "../../ProductosMotores.module.css";
import img1 from "../../../../../../assets/mercury/motores/seaPro/Imagen 282.png";
import img2 from "../../../../../../assets/mercury/motores/seaPro/Imagen 283.png";
import img3 from "../../../../../../assets/mercury/motores/seaPro/Imagen 284.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import SelectMotor from "../selectMotor/Selectmotor";
import { seaProInfo } from "../helper";
import { pathImages } from "../../../../../../pathImages";

export default function Seapro({ info }) {
  const [detalle, setDetalle] = useState(false)

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
    // <div className={s.componentCont}>
    <>
      {!detalle &&
        <div className={s.mobile}>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={pathImages+img1} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>60-150 hp</h4>
              <span>
                Un motor que trabaja tan duro como lo haces tú.
              </span>
              <button onClick={() => setDetalle(1)}>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={pathImages+img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>200 hp</h4>
              <span>
                El motor fiable y constante que necesitas cuando estás en el agua.
              </span>
              <button onClick={() => setDetalle(2)}>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={pathImages+img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>500 hp</h4>
              <span>
                Es nuestro fuera de borda comercial más potente y competente hasta el momento.
              </span>
              <button onClick={() => setDetalle(3)}>VER MÁS</button>
            </div>
          </div>
        </div>}
      {!detalle &&
        <div className={s.web}>
          <div className={s.container}>
            <Slider className={s.test} {...settings}>
              <div className={s.test}>
                <div className={s.borde}>
                  <div className={s.imgContainer}>
                    <img src={pathImages+img1} alt="promo" />
                  </div>
                  <div className={s.MotoresInfo}>
                    <h4>60-150 hp</h4>
                    <span>
                      Un motor que trabaja tan duro como lo haces tú.
                    </span>
                    <button onClick={() => setDetalle(1)}>VER MÁS</button>
                  </div>
                </div>
              </div>

              <div className={s.test}>
                <div className={s.borde}>
                  <div className={s.imgContainer}>
                    <img src={pathImages+img2} alt="promo" />
                  </div>
                  <div className={s.MotoresInfo}>
                    <h4>200 hp</h4>
                    <span>
                      El motor fiable y constante que necesitas cuando estás en el agua.
                    </span>
                    <button onClick={() => setDetalle(2)}>VER MÁS</button>
                  </div>
                </div>
              </div>

              <div className={s.test}>
                <div className={s.borde}>
                  <div className={s.imgContainer}>
                    <img src={pathImages+img3} alt="promo" />
                  </div>
                  <div className={s.MotoresInfo}>
                    <h4>500 hp</h4>
                    <span>
                      Es nuestro fuera de borda comercial más potente y competente hasta el momento.
                    </span>
                    <button onClick={() => setDetalle(3)}>VER MÁS</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      }
      {detalle && <SelectMotor info={info} modeloSelected = {detalle} setDetalle = {setDetalle}/>}
    </>
  );
}
