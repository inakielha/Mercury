import s from "./flagship.module.css"
import velocimetro from "../../../../../../assets/mercury/relojes/flagship/Imagen 406.png"
import imgTitles from "../../../../../../assets/mercury/relojes/flagship/Enmascarar grupo 333.png"
import imgTitle from "../../../../../../assets/mercury/relojes/flagship/Imagen 407.png"
import relojes from "../../../../../../assets/mercury/relojes/flagship/Imagen 341.png"


export default function Flagship() {
    return (
        <>
            <div className={s.section}>
                <div className={s.titleSection}>
                    <div className={s.imgCont}><img src={imgTitle} alt="" /></div>
                    <div className={s.titleText}>
                        <h3>FLAGSHIP</h3>
                        <h5>Indicadores con calidad</h5>
                    </div>
                </div>
                <p>A usted le gustan las agujas más que los números. Lo entendemos. Y se lo proveemos en la forma que debe ser. Sin compromisos, por dentro y por fuera. Relojes indicadores atractivos y duraderos. Resistentes a los golpes y a la corrosión.
                    No se empañan. Construidos para años de tiempo seguro, decidido, y disfrutable en el agua. Los caballos de carga del mundo de los indicadores.</p>
                <div>
                    <div><img src={imgTitles} alt="" /></div>
                    <div className={s.text}>
                        <span>Cuenta Hora</span>
                        <span>Medidor Combustible</span>
                        <span>Presión de Agua</span>
                        <span>Power Trim</span>
                        <span>Voltímetro</span>
                    </div>
                </div>
                <div className={s.imgCont}>
                    <img src={velocimetro} alt="" />
                </div>
            </div>



            <div className={s.sectionWeb}>
                <div className={s.imgCont}><img src={velocimetro} alt="" /></div>
                <div className={s.titleSection}>
                    <div className={s.titleText}>
                        <h3>FLAGSHIP</h3>
                        <h5>Indicadores con calidad</h5>
                        <p>A usted le gustan las agujas más que los números. Lo entendemos. Y se lo proveemos en la forma que debe ser. Sin compromisos, por dentro y por fuera. Relojes indicadores atractivos y duraderos. Resistentes a los golpes y a la corrosión.
                            No se empañan. Construidos para años de tiempo seguro, decidido, y disfrutable en el agua. Los caballos de carga del mundo de los indicadores.</p>
                    </div>
                </div>
                <div className={s.velocimetroSection}>
                    <div><img src={relojes} alt="" /></div>
                    <div className={s.text}>
                        <span>Cuenta Hora</span>
                        <span>Medidor Combustible</span>
                        <span>Presión de Agua</span>
                        <span>Power Trim</span>
                        <span>Voltímetro</span>
                    </div>
                </div>
            </div>
        </>
    )
}