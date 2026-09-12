import Slider from "react-slick";

export default function SliderWrapper({
  children,
  arrows = true,
  autoplay = true,
  speed = 500,
  autoplaySpeed = 7000,
  infinite = true,
  dots = false,
  fade = false,
  swipe = true,
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
    fade,
    swipe,
    autoplaySpeed,
    pauseOnHover: true,
    adaptiveHeight: true,
    slidesToShow,
    slidesToScroll: 1,
    prevArrow: (
      <div className="jl-slider-prev jl_es_pre">
        <i className="jli-left-chevron" />
      </div>
    ),
    nextArrow: (
      <div className="jl-slider-next jl_es_next">
        <i className="jli-right-chevron" />
      </div>
    ),
    dotsClass: "jl_s_pagination",
    responsive: responsive || [
      { breakpoint: 1199, settings: { slidesToShow: Math.min(slidesToShow, 2) } },
      { breakpoint: 991, settings: { slidesToShow: Math.min(slidesToShow, 2) } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 479, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={`jl-w-slider jl_full_feature_w ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
