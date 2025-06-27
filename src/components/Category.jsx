import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoIosPhonePortrait } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Category = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <article className="py-10 flex justify-center items-center bg-[#FAFAFA]">
      <main className="w-[80%] flex flex-col">
        <header className="flex justify-between">
          <h1 className="regular text-2xl">Browse By Category</h1>
          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="rounded-full border border-transparent p-2 cursor-pointer hover:border-black"
            >
              <SlArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="rounded-full border border-transparent p-2 cursor-pointer hover:border-black"
            >
              <SlArrowRight />
            </button>
          </div>
        </header>

        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="mt-6 "
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-2">
              <IoIosPhonePortrait className="text-5xl" />
              <span>Phones</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </article>
  );
};

export default Category;
