import s from "../../ProductosMotores.module.css";
import img1 from "../../../../../../assets/mercury/motor.svg";
import img2 from "../../../../../../assets/mercury/motores/cuatroTempos/Imagen 280.png";
import img3 from "../../../../../../assets/mercury/motores/cuatroTempos/Imagen 281.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import motor1 from "../../../../../../assets/mercury/motores/cuatroTempos/detalles/Imagen 312.png"
import Card from "../card/card";
import SelectMotor from "../selectMotor/Selectmotor";
import { cuatroTemposInfo } from "../helper";
export default function CuatroTempos({ info }) {
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
    <>
      {detalle === false &&
        <div className={s.mobile}>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>3.5-60 hp</h4>
              <span>
                El fueraborda más popular en el agua. Sin comparación.
              </span>
              <button onClick={() => setDetalle(true)}>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>75-150 hp</h4>
              <span>
                Innova constantemente y establece las pautas para lograr un rendimiento silencioso y un bajo consumo de combustible.
              </span>
              <button onClick={() => setDetalle(true)}>VER MÁS</button>
            </div>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <div className={s.MotoresInfo}>
              <h4>200-300 hp</h4>
              <span>
                Fiabilidad, flexibilidad, potencia y eficiencia. Todo a tu alcance.
              </span>
              <button onClick={() => setDetalle(true)}>VER MÁS</button>
            </div>
          </div>
        </div>
      }
      {/* WEB------------------------------------------------ */}
      {detalle === false &&
        <div className={s.web}>
          <div className={s.container}>
            <Slider className={s.test}  {...settings}>
              <div className={s.test}>
                <div className={s.borde}>
                  <div className={s.imgContainer}>
                    <img src={img1} alt="promo" />
                  </div>
                  <div className={s.MotoresInfo}>
                    <h4>3.5-60 hp</h4>
                    <span>
                      El fueraborda más popular en el agua. Sin comparación.
                    </span>
                    <button onClick={() => setDetalle(true)}>VER MÁS</button>
                  </div>
                </div>
              </div>

              <div className={s.test}>
                <div className={s.borde}>
                  <div className={s.imgContainer}>
                    <img src={img2} alt="promo" />
                  </div>
                  <div className={s.MotoresInfo}>
                    <h4>75-150 hp</h4>
                    <span>
                      Innova constantemente y establece las pautas para lograr un rendimiento silencioso y un bajo consumo de combustible.
                    </span>
                    <button onClick={() => setDetalle(true)}>VER MÁS</button>
                  </div>
                </div>
              </div>
              <div className={s.test}>
                <div className={s.borde}>
                  <div className={s.imgContainer}>
                    <img src={img3} alt="promo" />
                  </div>
                  <div className={s.MotoresInfo}>
                    <h4>200-300 hp</h4>
                    <span>
                      Fiabilidad, flexibilidad, potencia y eficiencia. Todo a tu alcance.
                    </span>
                    <button onClick={() => setDetalle(true)}>VER MÁS</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      }
      {detalle && <SelectMotor info={info} />}
    </>
  );
}
