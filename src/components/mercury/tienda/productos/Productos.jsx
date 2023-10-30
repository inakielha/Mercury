import Slider from "react-slick";
import s from "./Productos.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/mercury/prd1.svg"
import img2 from "../../../../assets/mercury/prd2.svg"
import img3 from "../../../../assets/mercury/prd3.svg"
import img4 from "../../../../assets/mercury/prd4.svg"
import Aceites from "./aceites/aceites";
import { useState } from "react";
import Relojes from "./relojes/relojes";
import Controles from "./controles/controles";
import Helices from "./helices/helices";

export default function Productos() {
  const [category, setCategory] = useState("Aceites y Lubricantes")
  function handleCategory(e) {
    setCategory(e.target.textContent)
  }
  return (
    <div className={s.section}>
      {/* <div className={s.contenedor}> */}
      <div className={s.categorias}>
        <span style={category === "Aceites y Lubricantes" ? {color:"#DF0404"} : {}} onClick={(e) => handleCategory(e)}>Aceites y Lubricantes</span>
        <span style={category === "Relojes" ? {color:"#DF0404"} : {}} onClick={(e) => handleCategory(e)}>Relojes</span>
        <span style={category === "Controles" ? {color:"#DF0404"} : {}} onClick={(e) => handleCategory(e)}>Controles</span>
        <span style={category === "Hélices" ? {color:"#DF0404"} : {}} onClick={(e) => handleCategory(e)}>Hélices</span>
      </div>

      {category == "Aceites y Lubricantes" && <Aceites />}
      {category == "Relojes" && <Relojes />}
      {category == "Controles" && <Controles />}
      {category == "Hélices" && <Helices />}
    </div>
  );
}
