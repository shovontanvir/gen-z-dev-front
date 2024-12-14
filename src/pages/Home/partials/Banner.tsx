import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Autoplay } from "swiper/modules";

import BannerItem from "./BannerItem";
import { HomeImages } from "../../../utils/images";

const Banner = () => {
  const { Banner1, Banner2, Banner3 } = HomeImages;
  const banners = [Banner1, Banner2, Banner3];
  return (
    <>
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper h-[40vh] md:h-[70vh] bg-black"
        autoplay={{
          delay: 2500,
        }}
        loop={true}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <BannerItem image={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Banner;
