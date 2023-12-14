import s from "./digital.module.css"
import f from "../flagship/flagship.module.css"
import reloj from "../../../../../../assets/mercury/relojes/Imagen 218.png"
import img1 from "../../../../../../assets/mercury/relojes/digital/Imagen 349.png"
import img2 from "../../../../../../assets/mercury/relojes/digital/Imagen 351.png"

export default function Digital() {
    return (
        <>
            <div className={s.section}>
                <div className={s.titleSection}>
                    <div className={s.imgCont}><img src={reloj} alt="" /></div>
                    <div className={s.titleText}>
                        <h3>Digital SC100/SC1000</h3>
                        <h5>INDICADORES Y VISUALIZACIONES</h5>
                    </div>
                </div>
                <div className={f.imgCont}><img src={img1} alt="" /></div>
                <div>
                    <h6>Completamente funcional y amigable con el usuario.</h6>
                    <span>Tenerlo todo frente a usted. En un indicador simple y fácil de leer. Cubre decenas de funciones de embarcación y motor, incluyendo velocidad, revoluciones, inclinación, profundidad, alarmas, presión de agua, flujo de combustible - todo.</span>
                </div>
                <div className={f.imgCont}><img src={img2} alt="" /></div>
                <div>
                    <h6>Su enlace con la tecnología digital SmartCraft®.</h6>
                    <span>Poniendole en contacto con una gama de sistemas completa diseñados para que el tiempo que pase en el agua sea el más placentero de la semana. Su portal a Troll Control, Smart Tow®, anclaje digital Skyhook®, Sirius® Weather (El Tiempo) y decenas de otros sistemas de control digital increíblemente inteligentes y útiles.

                        Sirius es una marca registrada de Sirius XM Radio, Inc.</span>
                </div>
            </div>
            <div className={s.sectionWeb}>
                <div className={s.imgCont}><img src={reloj} alt="" /></div>
                <div className={s.titleSection}>
                    <div className={s.titleText}>
                        <h3>Digital SC100/SC1000</h3>
                        <h5>INDICADORES Y VISUALIZACIONES</h5>
                    </div>
                    <div className={s.imgCont}><img src={img1} alt="" /></div>
                    <div className={s.imgCont}><img src={img2} alt="" /></div>
                </div>
            </div>
        </>
    )
}