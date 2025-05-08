import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import s from "./Navbar.module.css";
import Sidebar from "./sideBar/Sidebar";
import { pathImages } from "../../pathImages";
// import logoMercury from "../../../assets/mercury/Logos Mercury negro.png"
import logoMercury from "../../assets/mercury/Logos Mercury negro.png"
import logoMercuryMobile from "../../assets/mercury/Logos Mercury blanco.png"


const NavbarGenerac = ({ currentPath, setCurrentPath }) => {
  // const [currentPath, setCurrentPath] = useState("/");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenu, setMobileMenu] = useState("hide")
  const [webMenu, setWebMenu] = useState("hide")
  const navigate = useNavigate("")
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const documentHeight = document.documentElement.scrollHeight;
      // console.log({documentHeight})
      if (window.scrollY > 183 && documentHeight > 900) setScroll(true);
      else setScroll(false)
    });
  }, []);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    // Funcion para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSetCurrentPath = (path) => {
    setCurrentPath(path);
  };

  const openWhatsApp = () => {
    const url = "https://api.whatsapp.com/send?phone=5491126661777&";
    const windowFeatures = "width=400,height=600"; // Establece las dimensiones de la ventana

    window.open(url, '_blank', windowFeatures);
  };

  return (
    <nav className={s.navbar}>
      {mobileMenu === "show" && <div onClick={() => setMobileMenu("hide")} className={s.filtro}></div>}

      {/* <MenuMobile setMobileMenu={setMobileMenu} show={mobileMenu} /> */}
      <Sidebar open={webMenu} close={setWebMenu} />
      <div className={`${s.up_navbar}`} >
        {/* <MenuOutlined className={s.menuMobile} onClick={() => setMobileMenu("show")} /> */}
        <MenuOutlined className={s.menuMobile} onClick={() => setWebMenu("show")} />
        <MenuOutlined className={s.menuWeb} onClick={() => setWebMenu("show")} />
        <div className={s.logo_title} onClick={() => window.open("https://www.navalmotor.com/")}>
          <img src={"https://navalmotor.com/mediaserver/web/generac/react/logo.svg"} alt="logo" />
        </div>

        <div className={s.search_wpp}>
          {!isMobile && (
            <>
              <img className={s.wpp_image} src={"https://navalmotor.com/mediaserver/web/generac/react/wpp_icon.svg"} alt="wpp" onClick={openWhatsApp} />
            </>
          )}
        </div>
      </div>

      <div className={s.down_navbar} style={scroll ? { position: 'fixed', boxShadow: '0px 1px 5px #0c4c6b', borderBottom: '1px solid #0c4c6b' } : {}}>
        <div className={s.down_navbar_subCont} style={!isMobile && scroll ? { width: "80%" } : {}}>

          <div className={s.image_container}>
            {/* <div className={s.image_container} onClick={() => navigate("/generac")}> */}
            {isMobile ? (
              // <img src={pathImages + "Logos Mercury negro.png"} alt="logo"/>
              <img src={pathImages + logoMercuryMobile} alt="logo" />
              // <img src={""} alt="logo"/>

            ) : (
              // <img src={pathImages + "Logos Mercury negro.png"} alt="logo"/>
              <img src={pathImages + logoMercury} alt="logo" />
              // <img src={""} alt="logo"/>
            )}
          </div>

          <div className={s.services_container}>
            {routes.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${s.service} ${currentPath === item.path ? s.btn_active : ""
                    }`}
                >
                  {
                    item.redirect ?
                      <div className={`${currentPath === item.path ? s.active_links : s.links}`} onClick={() => window.open("https://www.navalmotor.net/repuestos/mercury", '_blank')}> Repuestos Y Accesorios</div>
                      :
                      <Link
                        onClick={() => handleSetCurrentPath(item.path)}
                        className={`${currentPath === item.path ? s.active_links : s.links
                          }`}
                        to={item.path}
                      >
                        {
                          isMobile
                            ?
                            // the first letter is uppercase
                            item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()
                            :
                            item.name
                        }
                      </Link>
                  }
                </div>
              );
            })}
            <div className={s.service}>
              <div style={{ cursor: "pointer" }} className={s.links} onClick={(e) => window.open("https://www.navalmotor.com/contacto", '_blank')}>Contacto</div>
            </div>
            {/* <div className={s.serviceWeb}>
            </div> */}
          </div>
        </div>
      </div>
      <img
        className={s.wpp_float_button}
        src={"https://navalmotor.com/mediaserver/web/generac/react/wpp_icon.svg"}
        alt="wpp"
        onClick={openWhatsApp}
      />
    </nav>
  );
};

export default NavbarGenerac;
