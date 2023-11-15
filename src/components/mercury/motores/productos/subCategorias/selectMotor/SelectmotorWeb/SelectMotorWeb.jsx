import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./selectMotor.module.css"
import Card from "../card/card";
import { useState } from "react";

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
        autoplay: false,
        slidesToScroll: 1,
    };
    return (
        <>
        <div className={s.selectContainer}>
            {
                info[0].slides > "3" ?
                    <div className={s.sliderContainer}>
                            {info.map((line) => (
                                <div className={s.fondoText}><div style={category === line.id ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.id}</div></div>
                            ))}
                    </div>
                    :
                    <div className={s.noSlider}>
                        {
                            info.map((line) => (
                                <div className={s.fondoText}><div style={category === line.id ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.id}</div></div>
                            ))
                        }
                    </div>
            }
            {info.map((line, index) => (
                category === line.id && <Card imagen={line.imagen} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} />
                ))}
        </div>
                </>
    )
}