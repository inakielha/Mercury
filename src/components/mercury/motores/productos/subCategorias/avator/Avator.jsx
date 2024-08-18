
import s from "../verado/Verado.module.css";
import img1 from "../../../../../../assets/mercury/motores/avator/detalles/Avator7.5e.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SelectMotor from "../selectMotor/Selectmotor";
import { veradoInfo } from "../helper";
import { useState } from "react";
import { pathImages } from "../../../../../../pathImages";

export default function Avator({ info }) {
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
            {!detalle &&
                <div className={s.mobile}>
                    <div className={s.borde}>
                        <div className={s.imgContainer}>
                            <img src={pathImages+img1} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>7.5E</h4>
                            <span>
                            El fuera de borda eléctrico proporciona una potencia limpia y silenciosa en un conjunto portátil.
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
                        <img src={pathImages+img1} alt="promo" />
                    </div>
                    <div className={s.MotoresInfo}>
                        <h4>7.5E</h4>
                        <span>
                        El fuera de borda eléctrico proporciona una potencia limpia y silenciosa en un conjunto portátil.
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
