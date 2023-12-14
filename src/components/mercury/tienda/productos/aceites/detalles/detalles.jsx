import s from "./detalles.module.css"

export default function DetalleAceites({ titulo, subtitulo, caracteristicas, imagen }) {
    return (
        <div className={s.detalleProducto}>
            <div className={s.imagenContainer}><img src={imagen} alt={titulo} /></div>
            <div className={s.info}>
                <h3>{titulo}</h3>
                <h5>{subtitulo}</h5>
                <span>{caracteristicas}</span>
            </div>
        </div>
    )
}