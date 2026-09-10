import Slider from "react-slick";

export default function SliderWrapper({
  children,
  arrows = true,
  autoplay = true,
  speed = 500,
  autoplaySpeed = 7000,
  infinite = true,
  dots = false,
  slidesToShow = 1,
  responsive,
  className = "",
}) {
  const settings = {
    dots,
    arrows,
    infinite,
    autoplay,
    speed,
    autoplaySpeed,
    slidesToShow,
    slidesToScroll: 1,
    responsive: responsive || [
      { breakpoint: 992, settings: { slidesToShow: Math.min(slidesToShow, 2) } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={`jl-w-slider jl_full_feature_w ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
