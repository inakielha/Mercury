import s from "./ProductosMotores.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

import CuatroTempos from "./subCategorias/cuatroTempos/CuatroTempos";
import MercuryUniversity from "./subCategorias/mercuryUniversity/mercuryUniversity";
import Seapro from "./subCategorias/seaPro/seaPro";
import Verado from "./subCategorias/verado/Verado";
import { cuatroTemposInfo, dosTemposInfo, racinInfo, seaProInfo, veradoInfo } from "./subCategorias/helper";
import Racing from "./subCategorias/racing/Racing";
import DosTempos from "./subCategorias/dosTempos/DosTempos";
import VeradoTest from "./subCategorias/verado/VeradoTest";

export default function ProductosMotores() {
  const [category, setCategory] = useState("cuatro tiempos");
  const handleCategory = (e) => {
    let category = e.target.innerText.toLowerCase();
    setCategory(category);
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    // autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className={s.section}>
      <div className={s.textCont}>
        <div className={s.categorias}>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "cuatro tiempos"
                ? {
                  color: "#DF0404",
                }
                : {}
            }
          >
            Cuatro Tiempos
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "sea pro"
                ? {
                  color: "#DF0404",
                }
                : {}
            }
          >
            Sea Pro
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "verado"
                ? {
                  color: "#DF0404",
                }
                : {}
            }
          >
            Verado
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "dos tiempos"
                ? {
                  color: "#DF0404",
                }
                : {}
            }
          >
            Dos Tiempos
          </span>
          <span
            onClick={(e) => handleCategory(e)}
            style={
              category === "racing"
                ? {
                  color: "#DF0404",
                }
                : {}
            }
          >
            Racing
          </span>
        </div>
      </div>
      <div className={s.motoresContainer}>
        
        {category === "cuatro tiempos" && <CuatroTempos info = {cuatroTemposInfo} />}
        {category === "sea pro" && <Seapro info = {seaProInfo} />}
        {/* {category === "verado" && <Verado info = {veradoInfo} />} */}
        {category === "verado" && <VeradoTest info = {veradoInfo} />}
        {category === "dos tiempos" && <DosTempos info = {dosTemposInfo} />}
        {category === "racing" && <Racing info = {racinInfo} />}
      </div>


      <MercuryUniversity />
    </div>
  );
}
