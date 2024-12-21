import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import Layout from "../../../components/Layout";
import { testimonials } from "../../../utils/testimonials";

const Testimonials = () => {
  return (
    <Layout className="custom-container !pt-0" id="testimonials">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-brand font-medium">
        Hear from genZdevs Alumns
      </h1>
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        pagination={true}
        className="mySwiper w-full bg-brand bg-opacity-10 p-5 mt-10 "
        autoplay={{
          delay: 2500,
        }}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-wrap justify-between items-center py-10">
              <div className="basis-full md:basis-1/4 text-center p-5">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-40 aspect-square rounded-full mx-auto ring-2 ring-offset-2 ring-brand"
                />
              </div>
              <div className="basis-full md:basis-3/4 md:pr-10 px-10 md:pl-0 text-center md:text-start">
                <p className="tracking-wider  md:text-lg">{testimonial.text}</p>
                <h1 className="font-kalam font-medium text-3xl tracking-wide mt-5 text-brand">
                  {testimonial.name}
                </h1>
                <p className="italic font-kalam text-sm">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Layout>
  );
};

export default Testimonials;
