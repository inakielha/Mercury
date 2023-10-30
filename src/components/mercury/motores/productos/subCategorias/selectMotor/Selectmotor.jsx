import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./selectMotor.module.css"
import Card from "../card/card";
import { useState } from "react";
import motor1 from "../../../../../../assets/mercury/motores/cuatroTempos/detalles/Imagen 312.png"
import motor2 from "../../../../../../assets/mercury/motores/cuatroTempos/detalles/Imagen 311.png"
export default function SelectMotor({ info }) {
    const [category, setCategory] = useState(info[0].id)
    const handleCategory = (e) => {
        let value = e.target.id
        setCategory(value)
    }
    const settings = {
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: info[0].slides,
        autoplay: true,
        slidesToScroll: 1,
    };
    return (
        <div className={s.selectContainer}>
            <div className={s.sliderContainer}>
                <Slider className={s.slider}  {...settings}>
                    {info.map((line) => (
                        <div className={s.fondoText}><div style={category === line.id ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.id}</div></div>
                    ))}
                        <div className={s.fondoText}><div style={category === "3.5 M 4Sss" ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={s.texto} id={"3.5 M 4S"} onClick={(e) => handleCategory(e)}>Contacto</div></div> 
                </Slider>
            </div>
            {info.map((line, index) => (
                category === line.id && <Card imagen={line.imagen} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} />
            ))}
        </div>
    )
}