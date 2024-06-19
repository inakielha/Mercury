import img2 from "../../../../../../assets/mercury/motores/dosTempos/detalles/motor-mercury-1.png";
// import img2 from "../../../../../../assets/mercury/motores/dosTempos/detalles/motor-mercury-40-hp-2-tiempos-.png";

import s from "../verado/Verado.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SelectMotor from "../selectMotor/Selectmotor";
import { veradoInfo } from "../helper";
import { useState } from "react";
import { pathImages } from "../../../../../../pathImages";

export default function DosTempos({ info }) {
    const [detalle, setDetalle] = useState(false)

    return (
        // <div className={s.componentCont}>
        <>
            {!detalle &&
                <div className={s.mobile}>
                    <div className={s.borde}>
                        <div className={s.imgContainer}>
                            <img src={pathImages+img2} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>3.3-90 hp</h4>
                            <span>
                                Los motores probados Mercury TwoStroke ofrecen encendido fácil, gran desempeño y gran confiabilidad en todos los sentidos.
                            </span>
                            <button onClick={() => setDetalle(true)}>VER MÁS</button>
                        </div>
                    </div>
                </div>
            }
            {!detalle && 
            <div className={s.web}>
                <div className={s.borde}>
                    <div className={s.imgContainer}>
                        <img src={pathImages+img2} alt="promo" />
                    </div>
                    <div className={s.MotoresInfo}>
                        <h4>3.3-90 hp</h4>
                        <span>
                            Los motores probados Mercury TwoStroke ofrecen encendido fácil, gran desempeño y gran confiabilidad en todos los sentidos.
                        </span>
                        <button onClick={() => setDetalle(true)}>VER MÁS</button>
                    </div>
                </div>

            </div>
            }
            {detalle && <SelectMotor info={info} modeloSelected = {detalle} setDetalle = {setDetalle}/>}
        </>
    );
}