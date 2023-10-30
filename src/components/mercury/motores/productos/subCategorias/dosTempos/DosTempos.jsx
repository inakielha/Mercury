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

export default function DosTempos({ info }) {
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
                            <img src={img1} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>3.3-90 hp</h4>
                            <span>
                                Los motores probados Mercury TwoStroke ofrecen encendido fácil, gran desempeño y gran confiabilidad en todos los sentidos.
                            </span>
                            <button onClick={() => setDetalle(true)}>VER MÁS</button>
                        </div>
                    </div>
                </div>}
            <div className={s.web}>
                <div className={s.container}>
                    <Slider className={s.test} {...settings}>
                        <div className={s.test}>
                            <div className={s.borde}>
                                <div className={s.imgContainer}>
                                    <img src={img3} alt="promo" />
                                </div>
                                <div className={s.MotoresInfo}>
                                    <h4>3.3-90 hp</h4>
                                    <span>
                                        Los motores probados Mercury TwoStroke ofrecen encendido fácil, gran desempeño y gran confiabilidad en todos los sentidos.
                                    </span>
                                    <button>VER MÁS</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            {detalle && <SelectMotor info={info} />}
        </>
    );
}
