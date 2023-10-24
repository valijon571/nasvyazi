import { RectangleStyle } from "./RectangleStyle";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";

const Rectangle = () => {
  let settings = {
    dots: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    spaceBetween: 30,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <RectangleStyle>
        <div className="carusel">
          <Slider {...settings}>
            <div>
              <img
                src="../img/rectangle4.png"
                // alt="Los Angeles"
                // class="d-block"
                // style="width:100%"
              />
            </div>
            <div>
              <img
                src="https://nasvyazi.uz/api//storage/images/October2023/HdyZMPZZ47v2j57cxkNR.jpg"
                // alt="Los Angeles"
                // class="d-block"
                // style="width:100%"
              />
            </div>
            <div>
              <img
                src="https://nasvyazi.uz/api//storage/images/October2023/fSND1dM97XfdGUs7adoU.jpg"
                // alt="Los Angeles"
                // class="d-block"
                // style="width:100%"
              />
            </div>
          </Slider>
        </div>
      </RectangleStyle>
    </>
  );
};
export default Rectangle;
