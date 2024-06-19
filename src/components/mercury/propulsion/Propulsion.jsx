import s from "./Propulsion.module.css";
import img from "../../../assets/mercury/150-FourStroke_BWhaler2_Choice_1274.jpg";
import img2 from "../../../assets/mercury/2022-07-MR-Bass-Boat-29 (1).jpg"
import img3 from "../../../assets/mercury/MM_V10_400hp_Ranger_FW095A1537.jpg"
import img4 from "../../../assets/mercury/MM-FreshwaterBoating_DontBlink_ET_DSC4468.jpg"
import cuatroTiempos from "../../../assets/mercury/motores/cuatroTempos/manual/sipm-4t.pdf"
import verado from "../../../assets/mercury/motores/verado/manual/sipm-verado.pdf"
import seaPro from "../../../assets/mercury/motores/seaPro/manual/sipm-seapro.pdf"
import racing from "../../../assets/mercury/motores/racing/manual/sipm-racing.pdf"
import { pathImages } from "../../../pathImages";

export default function Propulsion({mobileMenu,setMobileMenu}) {

  const handleDownload = (pdf, nombre) => {
    const fileName = `${nombre} Manual.pdf`
    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = pathImages+pdf;
    link.target = '_blank'; // Abrir el enlace en una nueva pestaña (opcional)
    link.download = fileName;
    link.click();
  };
  return (
    <div className={s.section}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{ zIndex: "2", position: "absolute", width: "100%", height: "107%", backgroundColor: "#000000a3" }}></div>}
      <div className={s.container}>
        <h3>SELECCIONE SU MANUAL</h3>
        <div className={s.grid}>
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={pathImages+img} alt="fto" />
            </div>
            <button onClick={()=> handleDownload(cuatroTiempos, "Cuatro Tiempos")}>4 TIEMPOS</button>
          </div>
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={pathImages+img2} alt="fto" />
            </div>
            <button onClick={()=> handleDownload(verado, "Verado")}>VERADO</button>
          </div>
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={pathImages+img3} alt="fto" />
            </div>
            <button onClick={()=> handleDownload(seaPro, "Sea Pro")}>SEA PRO</button>
          </div> 
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={pathImages+img4} alt="fto" />
            </div>
            <button onClick={()=> handleDownload(racing, "Racing")}>RACING</button>
          </div>
        </div>
      </div>
    </div>
  );
}
