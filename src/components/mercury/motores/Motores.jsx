import s from "./Motores.module.css";
// import img from "../../../assets/sun.jpg";
import img from "../../../assets/mercury/Imagen 318.jpg";
import ProductosMotores from "./productos/ProductosMotores";

export default function Motores({isMobile}) {
  return (
    <>
      <section className={s.section}>
        <div className={s.imgContainer}>
          <img src={img} alt="barco" />
        </div>
        <div className={s.texto}>
          <h4>CALIDAD, RENDIMIENTO, INNOVACIÓN, FIABILIDAD.</h4>
          <h3>MOTORES FUERA DE BORDA</h3>
          <span>
            Nadie fabrica una gama de motores fuera de borda más fiable, potente
            y eficiente que Mercury:{" "}
            <span style={{ color: "#DF0404" }}>
              Cuatro Tiempos, SeaPro, Verado Dos Tiempos y Racing
            </span>
            . Respaldados con décadas de innovación y liderazgo, los fueraborda
            Mercury están diseñados para resistir y ofrecen un legendario
            rendimiento impulsado por tecnología proactiva.
          </span>
        </div>
      </section>
      <ProductosMotores isMobile={isMobile}/>
    </>
  );
}
