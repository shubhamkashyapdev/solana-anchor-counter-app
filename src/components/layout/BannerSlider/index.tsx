import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//@ts-ignore
const BannerSlider = ({ slides }) => {
  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => { }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => { }}
      >
        {slides.map((item: any) => (
          <SwiperSlide>
            <div className={` h-[350px] ${item.img} m-2 `}>
              <img
                className="w-full h-full object-cover overflow-hidden rounded-3xl"
                src={item.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

BannerSlider.defaultProps = {
  slides: [
    {
      img: "/assets/images/banners/banner1.png",
    },
    {
      img: "/assets/images/banners/banner1.png",
    },
    {
      img: "/assets/images/banners/banner1.png",
    },
  ],
};

export default BannerSlider;
