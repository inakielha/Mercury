import { useState } from "react"
import s from "./card.module.css"
import { pathImages } from "../../../../../../pathImages";

export default function Card({ nombre, caracteristicas, imagen, imagenDimension, motores, handleCategory, modelo, pdf }) {

    const handleDownload = () => {
        window.open(pathImages+pdf, '_blank');
        // const fileName = `${nombre} Ficha Tecnica.pdf`
        // // Crear un enlace temporal para la descarga
        // const link = document.createElement('a');
        // link.href = pdf;
        // link.target = '_blank'; // Abrir el enlace en una nueva pestaña (opcional)
        // link.download = fileName;
        // link.click();
      };

    return (
        <>
            <div className={s.card}>
                <div className={s.imgContainer}><img width={imagenDimension} src={pathImages+imagen} alt={nombre} /></div>
                <div className={s.info}>
                    <h4>{nombre}</h4>
                    <div className={s.caracteristicasConatiner}>
                        {caracteristicas.split("\n").map((line, index) => (
                            <span>{line}</span>
                        ))}
                    </div>
                    <button onClick={()=> handleDownload()}>FICHA TECNICA</button>
                </div>
            </div>
            <div className={s.cardMobile}>
                <div className={s.modelos}>
                    {motores?.map((motor) =>
                        <span style={motor.id === modelo? { color: "#0c4c6b" } : {}} onClick={(e) => { handleCategory(e) }} id={motor.id}>{motor.id}</span>
                    )}
                </div>
                <div className={s.imgContainer}><img width={imagenDimension} src={pathImages+imagen} alt={nombre} /></div>
                <div className={s.info}>
                    <h4>{nombre}</h4>
                    <div className={s.caracteristicasConatiner}>
                        {caracteristicas.split("\n").map((line, index) => (
                            <span>{line}</span>
                        ))}
                    </div>
                    <button onClick={()=> handleDownload()}>FICHA TECNICA</button>
                    {/* <PDFPreview pdfUrl={pdf}/> */}
                </div>
            </div>
        </>
    )
}