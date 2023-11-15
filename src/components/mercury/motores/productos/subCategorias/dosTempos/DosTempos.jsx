import img2 from "../../../../../../assets/mercury/motores/racing/Imagen 277.png";

import s from "../verado/Verado.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SelectMotor from "../selectMotor/Selectmotor";
import { veradoInfo } from "../helper";
import { useState } from "react";

export default function DosTempos({ info }) {
    const [detalle, setDetalle] = useState(false)

    return (
        // <div className={s.componentCont}>
        <>
            {!detalle &&
                <div className={s.mobile}>
                    <div className={s.borde}>
                        <div className={s.imgContainer}>
                            <img src={img2} alt="promo" />
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
                        <img src={img2} alt="promo" />
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
            {detalle && <SelectMotor info={info} />}
        </>
    );
}