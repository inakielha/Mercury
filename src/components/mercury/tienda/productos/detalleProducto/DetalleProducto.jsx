import s from "./detalle.module.css"

export default function DetalleProducto({ titulo, descripcion, detalles, caracteristicas, imagen }) {
    return (
        <div className={s.detalleProducto}>
            <div className={s.alinear}>

                <div className={s.portada}>
                    <div className={s.imgContainer}><img src={imagen} alt="" /></div>
                    <div className={s.txtContainer}>
                        <h3>{titulo}</h3>
                        <span>{descripcion}</span>
                    </div>
                </div>
                <div className={s.detallles}>
                    <span>{caracteristicas}</span>
                </div>
                <div className={s.table}>
                    {detalles.map((elemento) => (

                        <div className={s.rows}>
                            <span className={s.bold}>{elemento.bold}</span>
                            <span className={s.info}>{elemento.info}</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}