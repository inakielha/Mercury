import s from "./Informacion.module.css";
import infoJson from "./infoImportante.json";


export default function Informacion({ setMobileMenu, mobileMenu }) {

    const handleDownload = (pdf) => {
        // Crear un enlace temporal para la descarga
        const link = document.createElement('a');
        link.href = pdf;
        link.target = '_blank'; // Abrir el enlace en una nueva pestaña (opcional)
        link.click();
    };

    return (
        <div className={s.align}>
            <div className={s.section}>
                {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{ zIndex: "2", position: "absolute", width: "100%", height: "107%", backgroundColor: "#000000a3" }}></div>}
                <h3>Boletines informativos</h3>
                <ul>
                    {infoJson.map(({ text, url }) => (
                        <li onClick={() => handleDownload(url)}>{text} </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}