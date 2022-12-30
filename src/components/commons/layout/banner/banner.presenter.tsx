import { SliderItem, Wrapper } from "./banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/banner/notice2.jpg" />
        </div>
        <div>
          <SliderItem src="/banner/carousel2.jpg" />
        </div>
        <div>
          <SliderItem src="/banner/carousel3.jpg" />
        </div>
        <div>
          <SliderItem src="/banner/carousel4.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
