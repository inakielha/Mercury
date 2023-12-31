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
import Hamburger from "./NavbarMobile/hamburger/Hamburger";


export default function Navbar({setMobileMenu,mobileMenu}) {
  const [scroll, setScroll] = useState(false)
  const [category, setCategory] = useState("repuestos")
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
    value === "repuestos" ? navigate("/") : navigate("/" + value)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else setScroll(false)
    })
  }, [])

  return (
    <div style={{position:"relative"}}>
        {/* {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>} */}

      <nav className={scroll && mobileMenu !="show" ? style.navbar : style.navbarNoScroll} >
        {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={style.filtro}></div>}

        <div className={style.container} style={scroll && mobileMenu != "show" ? { display: "none" } : {}}>
          <IconContext.Provider value={{ className: style.icon, size: "2.5em" }}>
            <LuMenu onClick={() => setMobileMenu("show")} />
          </IconContext.Provider>
          {mobileMenu === "show" &&
            <Hamburger setMobileMenu={setMobileMenu} show={mobileMenu} />
          }
          <div className={style.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <div className={style.contenedorLupa}>
              <IconContext.Provider value={{ className: style.iconLupa, size: "1.5em" }}>
                <BiSearch />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className={style.navWeb}>
          <div className={style.mercuryLogo}><img src={logoMercury} alt="logoMercury" /></div>
          <div className={style.secciones}>
            <span style={category === "motores" ? { color: "#FF3A2D" } : {}} onClick={(e) => handleCategory(e)} id={"motores"}>Motores</span>
            <span style={category === "propulsion" ? { color: "#FF3A2D" } : {}} onClick={(e) => handleCategory(e)} id={"propulsion"}>Sist. Integral de Propulsión</span>
            <span style={category === "repuestos" ? { color: "#FF3A2D" } : {}} onClick={(e) => handleCategory(e)} id={"repuestos"}>Repuestos y  Accesorios</span>
            <span style={category === "concesionarios" ? { color: "#FF3A2D" } : {}} onClick={(e) => handleCategory(e)} id={"concesionarios"}>Concesionarios y Servicios</span>
            <span style={category === "contacto" ? { color: "#FF3A2D" } : {}} onClick={(e) => handleCategory(e)} id={"contacto"}>Contacto</span>
          </div>
        </div>
        <div className={style.navMobile} >
          <Header />
          <div className={style.sliderContainer}>
            <Slider className={style.slider}  {...settings}>
              <div className={style.fondoText}><div style={category === "motores" ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={style.texto} id={"motores"} onClick={(e) => handleCategory(e)}>Motores</div></div>
              <div className={style.fondoText}><div style={category === "propulsion" ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={style.texto} id={"propulsion"} onClick={(e) => handleCategory(e)}>Sist. Integral de Propulsión</div></div>
              <div className={style.fondoText}><div style={category === "repuestos" ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={style.texto} id={"repuestos"} onClick={(e) => handleCategory(e)}>Repuestos y
                Accesorios</div></div>
              <div className={style.fondoText}><div style={category === "concesionarios" ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={style.texto} id={"concesionarios"} onClick={(e) => handleCategory(e)}>Concesionarios y
                Servicios</div></div>
              <div className={style.fondoText}><div style={category === "contacto" ? { backgroundColor: "#FF3A2D", color: "#ffffff" } : {}} className={style.texto} id={"contacto"} onClick={(e) => handleCategory(e)}>Contacto</div></div>
            </Slider>
          </div>
        </div>
      </nav>
      <div className={scroll ? style.espacioScroll : style.espacio} ></div>
    </div>
  );
}
