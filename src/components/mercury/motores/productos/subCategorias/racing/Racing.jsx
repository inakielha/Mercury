
import s from "../verado/Verado.module.css";
import img1 from "../../../../../../assets/mercury/motores/racing/Imagen 277.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SelectMotor from "../selectMotor/Selectmotor";
import { veradoInfo } from "../helper";
import { useState } from "react";

export default function Racing({ info }) {
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
                            <img src={img1} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>3.3-90 hp</h4>
                            <span>
                            Sabemos lo que te mueve. Libertad. Aceleradores completamente abiertos en espacios abiertos. Este es el fueraborda que estabas esperando.
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
                        <img src={img1} alt="promo" />
                    </div>
                    <div className={s.MotoresInfo}>
                        <h4>3.3-90 hp</h4>
                        <span>
                        Sabemos lo que te mueve. Libertad. Aceleradores completamente abiertos en espacios abiertos. Este es el fueraborda que estabas esperando.
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
