'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import IMAGES from '@/public/index'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

const OurOffers = () => {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const cardData = [
        {
          image: IMAGES.image1,
          desc: (
            <>
              <div className="flex flex-col gap-1 mb-4 lg:mb-8">
                <div className="text-sm md:text-md font-semibold text-[#800000]">
                  WE HELP
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Hoteliers to Boost
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Profitability
                </div>
              </div>
      
              <div className="flex flex-col gap-1 mb-4 lg:mb-8">
                <div className="text-sm md:text-md font-semibold text-[#800000]">
                  THROUGH
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Data-driven Revenue
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Management
                </div>
              </div>
            </>
          ),
        },
        {
          image: IMAGES.image2,
          desc: (
            <>
              <div className="flex flex-col gap-1 mb-4 lg:mb-8">
                <div className="text-sm md:text-md font-semibold text-[#800000]">
                  WE HELP
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Hoteliers to
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Maximize Bookings
                </div>
              </div>
      
              <div className="flex flex-col gap-1 mb-4 lg:mb-8">
                <div className="text-sm md:text-md font-semibold text-[#800000]">
                  THROUGH
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Stunning websites
                </div>
              </div>
            </>
          ),
        },
        {
          image: IMAGES.image3,
          desc: (
            <>
              <div className="flex flex-col gap-1 mb-4 lg:mb-8">
                <div className="text-sm md:text-md font-semibold text-[#800000]">
                  WE HELP
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Hoteliers to
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Drive Revenue
                </div>
              </div>
      
              <div className="flex flex-col gap-1 mb-4 lg:mb-8">
                <div className="text-sm md:text-md font-semibold text-[#800000]">
                  THROUGH
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Targeted Digital
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
                  Marketing Campaigns
                </div>
              </div>
            </>
          ),
        },
    ];

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex gap-4 lg:gap-8 p-4 w-[95%] lg:w-[80%] lg:justify-center lg:items-center">
                <Swiper
                    spaceBetween={20}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                >
                    {cardData?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col lg:flex-row gap-6 w-full justify-center items-center'>
                                <div className='w-full lg:w-[50%]'>
                                    <Image
                                        src={item.image}
                                        alt={`Image ${index + 1}`}
                                        width={600}
                                        height={600}
                                        quality={100}
                                        className='object-scale-down h-full w-full'
                                    />
                                </div>
                                <div className='w-full lg:w-[50%] text-left lg:text-left'>
                                    {item.desc}

                                    <div className="flex gap-4 justify-left lg:justify-start mt-8">
                                        <button
                                            className={`swiper-prev p-2 rounded-full bg-gray-200 text-gray-500 ${isBeginning ? "opacity-50" : ""
                                                }`}
                                            disabled={isBeginning}
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            className={`swiper-next p-2 rounded-full bg-gray-200 text-gray-500 ${isEnd ? "opacity-50" : ""
                                                }`}
                                            disabled={isEnd}
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default OurOffers;
