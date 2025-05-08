import whatsapp from "../../../assets/mercury/whatsapp.svg"
import { pathImages } from "../../../pathImages";
import s from "./Footer.module.css"
import { BsInstagram, BsYoutube } from "react-icons/bs"

export default function Footer({ color, setMobileMenu, mobileMenu }) {

  return (
    <footer id={s.contacto}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} style={{ zIndex: "2", position: "absolute", width: "100%", height: "100%", backgroundColor: "#000000a3" }}></div>}
      <div className={s.footerContainer}>
        <div className={s.info}>
          <p className={s.text} style={color ? { color: color } : { color: "#0c4c6b" }}>EXPOSICIÓN, VENTAS Y SHOWROOM</p>
          <p>Av. del Libertador 701, Vicente López, Buenos Aires</p>
          <p>info@navalmotor.com</p>
          <div className={s.numero}>
            {/* <div className={s.wspContainer}>
              <img src={pathImages + whatsapp} alt="contact" />
            </div> */}
            <span>+54 11 4796 1888</span>
          </div>
        </div>
        <div className={s.redes}>
          <p className={s.follow}>FOLLOW US</p>
          <div className={s.redesContainer}>
            <div>
              <a
                target="_blank"
                href="https://www.instagram.com/navalmotor_arg/"
              >
                <BsInstagram className={s.icon} color={"#707070"} />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCT1SJPaMSOsG1_3H0tflf0A"
                target="_blank"
              >
                <BsYoutube className={s.icon} color={"#707070"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
