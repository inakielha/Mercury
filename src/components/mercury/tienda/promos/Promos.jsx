import Slider from "react-slick";
import s from "./Promo.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import producto from "../../../../assets/mercury/producto.svg";
import producto1 from "../../../../assets/mercury/promo/Enmascarar grupo 247.png";
import producto2 from "../../../../assets/mercury/promo/Enmascarar grupo 248.png";

export default function Promos({ isMobile }) {
  console.log(isMobile)
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: isMobile ? 3.2 : 3.02,
    centerMode: true,
    centerPadding: "0",
    // autoplay: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className={s.section}>
      <div className={s.container}>
        <Slider className={s.test} {...settings}>
          <div className={s.test}>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={producto} alt="promo" />
              </div>
              <div className={s.textBtn}>
                <div className={s.texto}>
                  <h4>Kit 40% Off</h4>
                  <span>100 hs: Kit de Servicio</span>
                </div>
                <button className={s.btn}>COMPRAR</button>
              </div>
            </div>
          </div>
          <div className={s.test}>
            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={producto1} alt="promo" />
              </div>
              <div className={s.textBtn}>
                <div className={s.texto}>
                  <h4>Kit 30% Off</h4>
                  <span>100 hs: Kit de Servicio</span>
                </div>
                <button className={s.btn}>COMPRAR</button>
              </div>
            </div>
          </div>
          <div className={s.test}>

            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={producto2} alt="promo" />
              </div>
              <div className={s.textBtn}>
                <div className={s.texto}>
                  <h4>Kit 20% Off</h4>
                  <span>100 hs: Kit de Servicio</span>
                </div>
                <button className={s.btn}>COMPRAR</button>
              </div>
            </div>
          </div>
          {/* <div className={s.test}>

            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={producto} alt="promo" />
              </div>
              <div className={s.textBtn}>
                <div className={s.texto}>
                  <h4>Kit 40% Off</h4>
                  <span>100 hs: Kit de Servicio</span>
                </div>
                <button className={s.btn}>COMPRAR</button>
              </div>
            </div>
          </div>
          <div className={s.test}>

            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={producto} alt="promo" />
              </div>
              <div className={s.textBtn}>
                <div className={s.texto}>
                  <h4>Kit 40% Off</h4>
                  <span>100 hs: Kit de Servicio</span>
                </div>
                <button className={s.btn}>COMPRAR</button>
              </div>
            </div>
          </div>
          <div className={s.test}>

            <div className={s.borde}>
              <div className={s.imgContainer}>
                <img src={producto} alt="promo" />
              </div>
              <div className={s.textBtn}>
                <div className={s.texto}>
                  <h4>Kit 40% Off</h4>
                  <span>100 hs: Kit de Servicio</span>
                </div>
                <button className={s.btn}>COMPRAR</button>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}
