import s from "./header.module.css";
import { HiOutlineArrowSmallLeft, HiOutlineArrowLeft, HiChevronLeft } from "react-icons/hi";
import { IconContext } from "react-icons";
// import logo from "../../../assets/mercury.svg"
// import logo from "../../../assets/logo-naval.png"
import mercury from "../../../assets/mercury/Logos Mercury blanco.png"
import { pathImages } from "../../../pathImages";



export default function Header() {
  return (
    <div className={s.section}>
      <div className={s.contenedor}>
        <div className={s.back}>
          <IconContext.Provider value={{ className: s.icon, size: "1em" }}>
            <HiChevronLeft />
          </IconContext.Provider>

          <span>Home</span>
        </div>
        <div className={s.imgContainer}><img src={pathImages+mercury} alt="logo" /></div>
        <span>ss</span>
      </div>
    </div>
  );
}
