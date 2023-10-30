import s from "./Propulsion.module.css";
import img from "../../../assets/mercury/150-FourStroke_BWhaler2_Choice_1274.jpg";
import img2 from "../../../assets/mercury/2022-07-MR-Bass-Boat-29 (1).jpg"
import img3 from "../../../assets/mercury/MM_V10_400hp_Ranger_FW095A1537.jpg"
import img4 from "../../../assets/mercury/MM-FreshwaterBoating_DontBlink_ET_DSC4468.jpg"

export default function Propulsion() {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h3>SELECCIONE SU MANUAL</h3>
        <div className={s.grid}>
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={img} alt="fto" />
            </div>
            <button>4 TIEMPOS</button>
          </div>
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={img2} alt="fto" />
            </div>
            <button>VERADO</button>
          </div>
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={img3} alt="fto" />
            </div>
            <button>SEA PRO</button>
          </div>
          <div className={s.card}>
            <div className={s.imgContainer}>
              <img src={img4} alt="fto" />
            </div>
            <button>RACING</button>
          </div>
        </div>
      </div>
    </div>
  );
}
