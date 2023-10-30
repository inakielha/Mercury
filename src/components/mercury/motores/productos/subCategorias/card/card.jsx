import s from "./card.module.css"

export default function Card({ nombre, caracteristicas, imagen, imagenDimension }) {
    return (
        <div className={s.card}>
            <div className={s.imgContainer}><img width={imagenDimension} src={imagen} alt={nombre} /></div>
            <div className={s.info}>
                <h4>{nombre}</h4>
                <div className={s.caracteristicasConatiner}>
                    {caracteristicas.split("\n").map((line, index) => (
                        <span>{line}</span>
                    ))}
                </div>
                <button>FICHA TECNICA</button>
            </div>
        </div>
    )
}