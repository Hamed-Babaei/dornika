"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TripleCarousel() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={56}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            540: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 60,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            925: {
              slidesPerView: 1.2,
              spaceBetween: 5,
            },
            1000: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 1.4,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 1.6,
              spaceBetween: 0,
            },
            1300: {
              slidesPerView: 1.8,
            },
            1400: {
              slidesPerView: 1.8,
            },
            1500: {
              slidesPerView: 3.8,
              spaceBetween: 20,
            },
            1700: {
              slidesPerView: 3.8,
              spaceBetween: 10,
            },
          }}
          className="testimonial-swiper"
        >
          {new Array(4).fill("").map((testimonial, index: number) => (
            <SwiperSlide key={index}>
              <div className="!w-[46.25rem] lg:w-full md:!w-[calc(100%-20px)] md:!mx-auto sm:!w-[calc(100%-20px)] h-[31.563rem]  rounded-3xl relative">
                <Image
                  src={"/images/products/HP8721-AZ.webp"}
                  width={200}
                  height={150}
                  alt="globe icon"
                  className="w-full h-[80%] rounded-2xl"
                />
                <div className="mx-16 lg:mx-12 md:!mx-4 absolute bottom-6">
                  <div className="flex flex-col bg-white rounded-2xl p-8 md:p-4 comment-card-shadow">
                    <p className="text-text-primary text-xl font-semibold">
                      Best! I got the house I wanted through Hounter
                    </p>
                    <p className="text-text-secondary text-sm mt-4">
                      Darnika made it so easy to find the perfect fabric for my
                      new dress. Great quality and fast delivery!
                    </p>
                    <div className="w-full flex items-center justify-between mt-6">
                      <div className="flex items-center gap-6 md:gap-2">
                        <Image
                          src={"/images/products/HP8721-AZ.webp"}
                          width={40}
                          height={40}
                          alt="globe icon"
                          className="w-[2.5rem] h-[2.5rem] rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                          <p>Dianne Russell</p>
                          <p className="text-text-secondary">
                            Manager Director
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={"/icons/star.svg"}
                          width={28}
                          height={28}
                          alt="globe icon"
                          className="w-[2rem] h-[2rem] rounded-full"
                        />
                        <p className="text-xl font-bold text-text-primary">
                          4.6
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
