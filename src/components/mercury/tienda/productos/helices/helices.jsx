import Slider from "react-slick";
import s from "./helices.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../../assets/mercury/helices/Imagen 294.png"
import img2 from "../../../../../assets/mercury/helices/Imagen 295.png"
import img3 from "../../../../../assets/mercury/helices/Imagen 296.png"
import img4 from "../../../../../assets/mercury/helices/Imagen 297.png"
import img5 from "../../../../../assets/mercury/helices/Imagen 298.png"

import { useState } from "react";
import { helicesComp, helicesSport, helicesElite } from "../info";
import Producto from "../controles/producto/Producto";
import DetalleProducto from "../detalleProducto/DetalleProducto";

export default function Helices() {
    const [category, setCategory] = useState("Serie Sport")
    const [product, setProduct] = useState("None")
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
  function handleCategory (e){
    setCategory(e.target.innerText)
    setProduct("None")
  } 
  console.log(product)
  return (
     
      <div className={s.productos}>
        <div className={s.btnContainer}>
            <button onClick={(e)=>handleCategory(e)} style={category === "Serie Sport" ? {color:"#FFFFFF",backgroundColor:"#DF0404"}: {}}>Serie Sport</button>
            <button onClick={(e)=>handleCategory(e)} style={category === "Serie Elite" ? {color:"#FFFFFF",backgroundColor:"#DF0404"}: {}}>Serie Elite</button>
            <button onClick={(e)=>handleCategory(e)} style={category === "Serie Comp" ? {color:"#FFFFFF",backgroundColor:"#DF0404"}: {}}>Serie Comp</button>
        </div>
        <div className={s.webProducts}>
          {/* <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img5} alt="promo" />
            </div>
            <span>Black Max</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>Laser II</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>Mirage Plus</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Trophy Sport</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>Vengeance</span>
          </div> */}
           {
          category === "Serie Sport" ?
          helicesSport.map(({img, titulo, subtitulo},index)=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct = {setProduct} index= {index} />
          ))
          :
          category === "Serie Elite" ? 
          helicesElite.map(({img, titulo, subtitulo},index)=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct = {setProduct} index= {index}  />
          ))
          :
          category === "Serie Comp" &&
          helicesComp.map(({img, titulo, subtitulo},index)=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct = {setProduct} index= {index}  />
          ))
        }
          
        </div>
        <Slider {...settings} className={s.slider}>
          {/* <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img5} alt="promo" />
            </div>
            <span>Black Max</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>Laser II</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>Mirage Plus</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Trophy Sport</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>Vengeance</span>
          </div> */}




          {
          category === "Serie Sport" ?
          helicesSport.map(({img, titulo, subtitulo},index)=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct = {setProduct} index= {index} />
          ))
          :
          category === "Serie Elite" ? 
          helicesElite.map(({img, titulo, subtitulo},index)=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct = {setProduct} index= {index}  />
          ))
          :
          category === "Serie Comp" &&
          helicesComp.map(({img, titulo, subtitulo},index)=>(
            <Producto subtitulo={subtitulo} titulo={titulo} img={img} setProduct = {setProduct} index= {index}  />
          ))
        }
        </Slider>


        {
          (category === "Serie Sport" && product !== "None" )?
        <DetalleProducto caracteristicas={helicesSport[product].caracteristicas} detalles={helicesSport[product].detalles} descripcion={helicesSport[product].descripcion} titulo={helicesSport[product].titulo} imagen = {helicesSport[product].img}/>
         
          :
          (category === "Serie Elite" && product !== "None" ) ? 
        <DetalleProducto caracteristicas={helicesElite[product].caracteristicas} detalles={helicesElite[product].detalles} descripcion={helicesElite[product].descripcion} titulo={helicesElite[product].titulo} imagen = {helicesElite[product].img}/>

          :
          (category === "Serie Comp" &&  product !== "None" ) &&
        <DetalleProducto caracteristicas={helicesComp[product].caracteristicas} detalles={helicesComp[product].detalles} descripcion={helicesComp[product].descripcion} titulo={helicesComp[product].titulo} imagen = {helicesComp[product].img}/>

        }
      </div>
  );
}
