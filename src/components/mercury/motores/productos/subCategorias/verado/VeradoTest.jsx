import s from "./Verado.module.css";
import img1 from "../../../../../../assets/mercury/motores/verado/Imagen 285.png";
import img2 from "../../../../../../assets/mercury/motores/verado/Imagen 286.png";
import img3 from "../../../../../../assets/mercury/motores/verado/detalle/Enmascarar grupo 336.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SelectMotor from "../selectMotor/Selectmotor";
import { veradoInfo } from "../helper";
import { useState } from "react";
import { pathImages } from "../../../../../../pathImages";

export default function VeradoTest({ info }) {
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
                            <h4>250 - 300 HP</h4>
                            <span>
                                Ofrece una experiencia fueraborda de primer nivel.
                            </span>
                            <button onClick={() => setDetalle(1)}>VER MÁS</button>
                        </div>
                    </div>

                    <div className={s.borde}>
                        <div className={s.imgContainer}>
                            <img src={pathImages+img3} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>350-400 hp</h4>
                            <span>
                                Potenciando la excelencia acuática con motores fuera de borda, brindando una experiencia inigualable.
                            </span>
                            <button onClick={() => setDetalle(2)}>VER MÁS</button>
                        </div>
                    </div>

                    <div className={s.borde}>
                        <div className={s.imgContainer}>
                            <img src={pathImages+img2} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>600 HP</h4>
                            <span>
                                El rendimiento de los fuera de bordas para ofrecer la mejor experiencia de navegación de lujo.
                            </span>
                            <button onClick={() => setDetalle(3)}>VER MÁS</button>
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
                            <h4>250 - 300 HP</h4>
                            <span>
                                Ofrece una experiencia fueraborda de primer nivel.
                            </span>
                            <button onClick={() => setDetalle(1)}>VER MÁS</button>
                        </div>
                    </div>

                    <div className={s.borde}>
                        <div className={s.imgContainer}>
                            <img src={pathImages+img3} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>350-400 hp</h4>
                            <span>
                                Potenciando la excelencia acuática con motores fuera de borda, brindando una experiencia inigualable.
                            </span>
                            <button onClick={() => setDetalle(2)}>VER MÁS</button>
                        </div>
                    </div>

                    <div className={s.borde}>
                        <div className={s.imgContainer}>
                            <img src={pathImages+img2} alt="promo" />
                        </div>
                        <div className={s.MotoresInfo}>
                            <h4>600 hp</h4>
                            <span>
                                El rendimiento de los fuera de bordas para ofrecer la mejor experiencia de navegación de lujo.
                            </span>
                            <button onClick={() => setDetalle(3)}>VER MÁS</button>
                        </div>
                    </div>

                </div>
            }
            {detalle && <SelectMotor info={info} modeloSelected = {detalle} setDetalle = {setDetalle}/>}
        </>
    );
}
