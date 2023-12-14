import s from "../controles.module.css"


export default function Producto({img,titulo, subtitulo, setProduct, index}){
    return(
        <div className={s.borde} onClick= {()=> setProduct(index)}>
          <div className={s.imgContainer}>
            <img src={img} alt="promo" />
          </div>
          <div className={s.textContainer}>
            <span>{titulo}</span>
            <span className={s.subtitulo}>{subtitulo}</span>
          </div>
        </div>
    )
}