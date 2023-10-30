import Slider from "react-slick";
import s from "./aceites.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../../assets/mercury/aceites/Imagen 320.png"
import img2 from "../../../../../assets/mercury/aceites/Imagen 321.png"
import img3 from "../../../../../assets/mercury/aceites/Imagen 322.png"
import img4 from "../../../../../assets/mercury/aceites/Imagen 323.png"

export default function Aceites() {
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
      <div className={s.productos}>
        <div className={s.webProducts}>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>2 Tiempos</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>4 Tiempos</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Lubricantes</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>Lubricantes</span>
          </div>
          
        </div>
        <Slider {...settings} className={s.slider}>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>2 Tiempos</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>4 Tiempos</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img3} alt="promo" />
            </div>
            <span>Lubricantes</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img4} alt="promo" />
            </div>
            <span>Lubricantes</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img1} alt="promo" />
            </div>
            <span>2 Tiempos</span>
          </div>
          <div className={s.borde}>
            <div className={s.imgContainer}>
              <img src={img2} alt="promo" />
            </div>
            <span>4 Tiempos</span>
          </div>
        </Slider>
      </div>
  );
}
