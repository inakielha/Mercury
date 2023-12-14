import imagen from "../../../../../../assets/mercury/relojes/mercmonitor/Imagen 347.png"
import imagenReloj from "../../../../../../assets/mercury/relojes/Imagen 217.png"
import s from "../flagship/flagship.module.css"

export default function Mercmonitor() {
    return (
        <>
            <div className={s.section}>
                <div className={s.titleSection}>
                    <div className={s.imgCont}><img src={imagenReloj} alt="" /></div>
                    <div className={s.titleText}>
                        <h3>MercMonitor</h3>
                        <h5>INDICADORES Y VISUALIZACIONES</h5>
                    </div>
                </div>
                <p>Una pantalla LCD completamente personalizable. Programe los datos según sus necesidades y preferencias a la hora de usar su barco. Seleccione el color que combine con su barco (o con su estado de ánimo). Se pueden organizar en grupos de tres con hasta cinco configuraciones. Lo último en flexibilidad y funcionalidad.</p>
                <div className={s.imgCont}>
                    <img src={imagen} alt="" />
                </div>
            </div>
            <div className={s.sectionWeb}>
                <div className={s.imgCont}><img src={imagenReloj} alt="" /></div>
                <div className={s.titleSection}>
                    <div className={s.titleText}>
                        <h3>MercMonitor</h3>
                        <h5>INDICADORES Y VISUALIZACIONES</h5>
                        <p>Una pantalla LCD completamente personalizable. Programe los datos según sus necesidades y preferencias a la hora de usar su barco. Seleccione el color que combine con su barco (o con su estado de ánimo). Se pueden organizar en grupos de tres con hasta cinco configuraciones. Lo último en flexibilidad y funcionalidad.</p>
                    </div>
                </div>
                <div className={s.velocimetroSection}>
                    <div><img src={imagen} alt="" /></div>
                </div>
            </div>
        </>
    )
}