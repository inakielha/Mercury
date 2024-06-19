import TextField from '@mui/material/TextField';
import s from "./form.module.css"
import logoMercury from "../../../../assets/mercury/Logos Mercury negro.png"
import { HiChevronLeft } from "react-icons/hi";


export default function Form({setForm, setRegister}) {
    const iniciaSesion = ()=>{
        setRegister(true)
        setForm(false)
    }
    return (
        <div className={s.section}>
            <div className={s.form}>

                <div className={s.imgCont}><img src={logoMercury} alt="" /></div>
                <div className={s.back}>
                    <HiChevronLeft className={s.icon} color='#0c4c6b' onClick={()=>setForm(false)}/>
                    <span>inicia sesión</span>
                    <div></div>
                </div>
                <TextField
                    className={s.inputMaterial}
                    id="Correo Electronico"
                    label="Correo Electronico"
                />

                <TextField
                    className={s.inputMaterial}
                    id="Contraseña"
                    label="Contraseña"
                    type='password'
                />
                <button>INICIA SESIÓN</button>
                <div className={s.registrar}>
                    <span>¿No tienes cuenta?</span>
                    <span style={{color:"#0c4c6b"}}  onClick={()=>iniciaSesion()}>Registrese</span>
                </div>
            </div>
            <div className={s.terminos}>
                <p>Al registrase acepta nuestros <span>términos y condiciones.</span></p>
            </div>

        </div>
    )
}