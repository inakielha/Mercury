

import TextField from '@mui/material/TextField';
import s from "./registrarse.module.css"
import logoMercury from "../../../../assets/mercury/Logos Mercury negro.png"
import { HiChevronLeft } from "react-icons/hi";


export default function Registrarse({setForm, setRegister}) {
    const iniciaSesion = ()=>{
        setForm(true)
        setRegister(false)
    }
    return (
        <div className={s.section}>
            <div className={s.form}>

                <div className={s.imgCont}><img src={logoMercury} alt="" /></div>
                <div className={s.back}>
                    <HiChevronLeft className={s.icon} color='#df0404' onClick={()=>setRegister(false)}/>
                    <span>Registrese</span>
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
                <TextField
                    className={s.inputMaterial}
                    id="Nombre y apellido"
                    label="Nombre y apellido"
                />
                <TextField
                    className={s.inputMaterial}
                    id="Empresa"
                    label="Empresa"
                />
                <TextField
                    className={s.inputMaterial}
                    id="Telefono"
                    label="Telefono"
                />
                <button>REGISTRESE</button>
                <div className={s.registrar}>
                    <span>¿Ya tienes cuenta?</span>
                    <span style ={{color:"#df0404"}} onClick={()=>iniciaSesion()}>Inicia Sesión</span>
                </div>
            </div>
            <div className={s.terminos}>
                <p>Al registrase acepta nuestros <span>términos y condiciones.</span></p>
            </div>

        </div>
    )
}