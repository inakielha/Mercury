import { pathImages } from "../../../pathImages";
import s from "./Footer.module.css";


const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_content}>
        <h6>EXPOSICION, VENTAS, Y SHOWROOM</h6>
        <p>Av. del Libertador 701, Vicente López, Buenos Aires</p>
        <p>info@navalmotor.com</p>
        <div className={s.whatsapp}>
          {/* <img src={pathImages + "/wpp_icon.svg"} alt="" /> */}
          <p>+54 11 4796 1888</p>
        </div>
      </div>
      
      <h6 className={s.followUs}>FOLLOW US</h6>
      <div className={s.footer_social}>
        <img onClick={(e) => window.open("https://www.instagram.com/naval_motor", '_blank')} src={"https://navalmotor.com/mediaserver/web/generac/react/instagram_icon.svg"} alt="instagram" />
        <img onClick={(e) => window.open("https://www.youtube.com/channel/UCT1SJPaMSOsG1_3H0tflf0A", '_blank')} src={"https://navalmotor.com/mediaserver/web/generac/react/youtube_icon.svg"} alt="youtube" />
      </div>
    </footer>
  );
};

export default Footer;
