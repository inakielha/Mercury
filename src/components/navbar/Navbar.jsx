import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import style from "./Navbar.module.css";
import logo from "../../assets/mercury/logo-naval.png"
import logoMercury from "../../assets/mercury/Logos Mercury negro.png"
import Header from "../mercury/header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pathImages } from "../../pathImages";
import Sidebar from "./NavbarMobile/hamburger/sideBar/Sidebar";
import { IoLogoWhatsapp } from "react-icons/io";



export default function Navbar({ setMobileMenu, mobileMenu }) {
  const [scroll, setScroll] = useState(false)
  const [category, setCategory] = useState("motores")
  // const [mobileMenu, setMobileMenu] = useState("hide")

  const navigate = useNavigate()
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3.2,
    autoplay: true,
    slidesToScroll: 1,
  };
  const handleCategory = (e) => {
    let value = e.target.id
    setCategory(value)
    value === "repuestos" ? window.location.href = "https://navalmotor.net/repuestos/mercury" : navigate("/mercury/" + value)
    // value === "repuestos" ? navigate("/navalmotor.net/repuestos/mercury") : navigate("/mercury/" + value)
    // value === "repuestos" ? navigate("/") : navigate("/" + value)
  }

  const openWhatsApp = () => {
    const url = "https://api.whatsapp.com/send?phone=5491126661777&";
    const windowFeatures = "width=400,height=600"; // Establece las dimensiones de la ventana

    window.open(url, '_blank', windowFeatures);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else setScroll(false)
    })
  }, [])

  return (
    <div style={{ position: "relative" }}>
      {/* {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>} */}

      <nav className={scroll && mobileMenu != "show" ? style.navbar : style.navbarNoScroll} >
        {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>}

        <div className={style.container} style={scroll && mobileMenu != "show" ? { display: "none" } : {}}>
          <IconContext.Provider value={{ className: style.icon, size: "2.5em" }}>
            <LuMenu onClick={() => setMobileMenu("show")} />
          </IconContext.Provider>
          {mobileMenu === "show" &&
            // <Hamburger setMobileMenu={setMobileMenu} show={mobileMenu} />
            <Sidebar open={mobileMenu} close={setMobileMenu} />
          }
          <div className={style.imgContainer} onClick={() => window.location.href = "https://www.navalmotor.com/"}>
            <img src={pathImages + logo} alt="logo" />
          </div>
          <div>
            {/* <div className={style.contenedorLupa}>
              <IconContext.Provider value={{ className: style.iconLupa, size: "1.5em" }}>
                <BiSearch />
              </IconContext.Provider>
            </div> */}
            <IoLogoWhatsapp color="#25D366" className={style.iconWsp} onClick={() => openWhatsApp()} />
          </div>
        </div>
        <div className={style.navWeb}>
          <div className={style.mercuryLogo}><img onClick={() => window.location.href = "https://www.navalmotor.com/"} src={pathImages + logoMercury} alt="logoMercury" /></div>
          <div className={style.secciones}>
            <span style={category === "motores" ? { color: "#0c4c6b" } : {}} onClick={(e) => handleCategory(e)} id={"motores"}>Motores</span>
            <span style={category === "propulsion" ? { color: "#0c4c6b" } : {}} onClick={(e) => handleCategory(e)} id={"propulsion"}>Sist. Integral de Propulsión</span>
            <span style={category === "repuestos" ? { color: "#0c4c6b" } : {}} onClick={(e) => handleCategory(e)} id={"repuestos"}>Repuestos y  Accesorios</span>
            <span style={category === "concesionarios" ? { color: "#0c4c6b" } : {}} onClick={(e) => handleCategory(e)} id={"concesionarios"}>Concesionarios y Servicios</span>
            <span style={category === "contacto" ? { color: "#0c4c6b" } : {}} onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')} id={"contacto"}>Contacto</span>
          </div>
        </div>
        <div className={style.navMobile} >
          <Header />
          <div className={style.sliderContainer}>
            <Slider className={style.slider}  {...settings}>
              <div className={style.fondoText}><div style={category === "motores" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"motores"} onClick={(e) => handleCategory(e)}>Motores</div></div>
              <div className={style.fondoText}><div style={category === "propulsion" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"propulsion"} onClick={(e) => handleCategory(e)}>Sist. Integral de Propulsión</div></div>
              <div className={style.fondoText}><div style={category === "repuestos" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"repuestos"} onClick={(e) => handleCategory(e)}>Repuestos y
                Accesorios</div></div>
              <div className={style.fondoText}><div style={category === "concesionarios" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"concesionarios"} onClick={(e) => handleCategory(e)}>Concesionarios y
                Servicios</div></div>
              <div className={style.fondoText}><div style={category === "contacto" ? { backgroundColor: "#0c4c6b", color: "#ffffff" } : {}} className={style.texto} id={"contacto"} onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')}>Contacto</div></div>
            </Slider>
          </div>
        </div>
      </nav>
      <div className={scroll ? style.espacioScroll : style.espacio} ></div>
    </div>
  );
}
