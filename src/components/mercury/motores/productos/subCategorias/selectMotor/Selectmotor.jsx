import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./selectMotor.module.css"
import Card from "../card/card";
import { useState } from "react";
import { useRef } from "react";
export default function SelectMotor({ info, modeloSelected, setDetalle }) {
    // const [category, setCategory] = useState(info[0][modeloSelected - 1].id)
    const [category, setCategory] = useState("")
    const [modelo, setModelo] = useState("")
    const handleCategory = (e) => {
        let value = e.target.id
        setCategory(value)
        setModelo("")
    }

    console.log(info[0][0][0].slides)

    const handleModelo = (e) => {
        let value = e.target.id
        setModelo(value)
    }
    const settings = {
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 3.1,
        autoplay: false,
        slidesToScroll: 1,
    };



    return (
        <>
            {/* <div className={s.mobile}>
                <div className={s.selectContainer}>
                    {
                        info[0][0].slides > "3" ?
                            <div className={s.sliderContainer}>
                                <Slider className={s.slider}  {...settings}>
                                    {info[0].map((line) => (
                                        <div className={s.fondoText}><div style={category === line.id || !category ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.id}</div></div>
                                    ))}
                                </Slider>
                            </div>
                            :
                            <div className={s.noSlider}>
                                {
                                    info[0].map((line, index) => (
                                        <div className={s.fondoText}><div style={category === line.id || !category && index == 0 ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.id}</div></div>
                                    ))
                                }
                            </div>
                    }
                    {info[0].map((line, index) => (
                        (category === line.id || (!category && index === 0)) && <Card imagen={line.imagen} pdf={line.pdf} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} />
                    ))}
                </div>
            </div> */}
            <div className={s.mobile}>
                <div className={s.selectContainer}>
                    {
                        info[0][[modeloSelected - 1]][0].slides > 3 ?
                            <div className={s.sliderContainer}>
                                <Slider className={s.slider}  {...settings}>
                                    {info[0][modeloSelected - 1].map((line, index) => (
                                        <div className={s.fondoText} id={line.id}>
                                            <div style={category === line.id || (!category && index === 0) ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.id}</div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            :
                            <div className={s.noSlider}>
                                {
                                    info[0][modeloSelected - 1] &&
                                    info[0][modeloSelected - 1].map((line, index) => (
                                        <div className={s.fondoText}><div style={category === line.id || !category && index == 0 ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.id}</div></div>
                                    ))
                                }
                            </div>
                    }
                    {info[0][modeloSelected - 1].map((line, index) => (
                        (category === line.id || (!category && index === 0)) && <Card imagen={line.imagen} pdf={line.pdf} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} />
                    ))}
                </div>
            </div>


            {/* ---------------------------------------WEB---------------------------------------------------- */}
            <div className={s.web}>
                <div className={s.selectContainer}>
                    <div className={s.noSlider}>
                        {
                            info[1].map((line, index) => (
                                <div className={s.fondoText}><div style={index == modeloSelected - 1 ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={() => {
                                    setDetalle(index + 1)
                                    setModelo("")
                                }}>{line.name}</div></div>
                                // <div className={s.fondoText}><div style={category === line.name || !category && index == 0 ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={s.texto} id={line.id} onClick={(e) => handleCategory(e)}>{line.name}</div></div>
                            ))
                        }
                    </div>
                    {/* SAGRADOO-------------  */}
                    {/* 

                    {

                        category == "dos" ?

                            info[1][1].map((line, index) => (
                                (modelo === line.id || (!modelo && index === 0)) && <Card imagen={line.imagen} pdf={line.pdf} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} motores={category == "dos" ? info[1][1] : category == "tres" ? info[1][2] : info[1][0]} handleCategory={handleModelo} modelo={modelo} />
                            ))
                            : category == "tres" ?
                                info[1][2].map((line, index) => (
                                    (modelo === line.id || (!modelo && index === 0)) && <Card imagen={line.imagen} pdf={line.pdf} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} motores={category == "dos" ? info[1][1] : category == "tres" ? info[1][2] : info[1][0]} handleCategory={handleModelo} modelo={modelo} />
                                ))

                                : info[1][0].map((line, index) => (
                                    (modelo === line.id || (!modelo && index === 0)) && <Card imagen={line.imagen} pdf={line.pdf} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} motores={category == "dos" ? info[1][1] : category == "tres" ? info[1][2] : info[1][0]} handleCategory={handleModelo} modelo={modelo} />
                                ))
                    } */}
                    {/* ------------------------- */}

                    {

                        info[0][modeloSelected - 1].map((line, index) => (
                            (modelo === line.id || (!modelo && index === 0)) && <Card imagen={line.imagen} pdf={line.pdf} nombre={line.nombre} caracteristicas={line.caracteristicas} imagenDimension={line.imagenDimension} motores={info[0][modeloSelected - 1]} handleCategory={handleModelo} modelo={modelo} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}