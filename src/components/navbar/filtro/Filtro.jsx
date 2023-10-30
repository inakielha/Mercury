import style from "./filtro.module.css"

export default function Filtro({mobileMenu, setMobileMenu}){
    return(
        <>
        {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>}
        </>
    )
}