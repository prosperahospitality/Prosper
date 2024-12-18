"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Instagram, Video, MoveUpRight } from "lucide-react";
import IMAGES from "@/public/index";
import Image from "next/image";

export default function InstagramReels({ instaFeed }) {
  // console.log("instaFeed:::::::>", instaFeed)
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);


  // const mediaData = instaFeed?.data?.map((item) => {

  //   const isVideo = item.media_url.includes(".mp4");

  //   return {
  //     url: item.media_url,
  //     type: isVideo ? "video" : "image",
  //     alt: `${item.username} Media`,
  //     link: item.permalink,
  //   };
  // });

  // console.log(mediaData);

  const mediaData = [
    {
      url: IMAGES.insta1,
      type: "image",
      alt: "insta1",
      link: "https://www.instagram.com/prosperahospitality/",
    },
    {
      url: IMAGES.insta2,
      type: "image",
      alt: "insta2",
      link: "https://www.instagram.com/prosperahospitality/",
    },
    {
      url: IMAGES.insta3,
      type: "image",
      alt: "insta3",
      link: "https://www.instagram.com/prosperahospitality/",
    },
    {
      url: IMAGES.insta4,
      type: "image",
      alt: "insta4",
      link: "https://www.instagram.com/prosperahospitality/",
    },
    {
      url: IMAGES.insta5,
      type: "image",
      alt: "insta5",
      link: "https://www.instagram.com/prosperahospitality/",
    },
    {
      url: IMAGES.insta6,
      type: "image",
      alt: "insta6",
      link: "https://www.instagram.com/prosperahospitality/",
    },
    {
      url: IMAGES.insta7,
      type: "image",
      alt: "insta7",
      link: "https://www.instagram.com/prosperahospitality/",
    },
    {
      url: IMAGES.insta8,
      type: "image",
      alt: "insta8",
      link: "https://www.instagram.com/prosperahospitality/",
    },
  ];


  const handleExploreMore = () => {
    window.open('https://www.instagram.com/prosperahospitality/', "_blank");
  }

  return (

    <>
      <div className="w-full flex flex-col gap-8 justify-center items-center">
        <div className='flex justify-between w-[87%] lg:w-[80%]'>
          <div className='text-start text-3xl text-gray-600'>
            <div className=''>Let’s connect on</div>
            <div className='mt-2'>Socials</div>
          </div>
          <div className='hidden lg:flex justify-center items-center text-end text-md'>
            <button className='flex gap-2 justify-center items-center px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold'
             onClick={() => handleExploreMore()}
            >
              Explore More <span><MoveUpRight className='size-4' /></span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[87%] lg:w-[80%] mx-auto relative">
        <Swiper
          className="mySwiper"
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-size": "20px",
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {mediaData?.map((media, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full border rounded-xl overflow-hidden cursor-pointer"
              onClick={() => {
                window.open(media.link, "_blank");
              }}
            >
              <div className="relative aspect-[9/16] w-full h-full flex justify-center items-center rounded-2xl group z-50">
                {media.type === "video" ? (
                  <video
                    src={media.url}
                    className="w-full h-full object-cover rounded-2xl"
                    muted />
                ) : (
                  <Image
                    src={media.url}
                    alt={media.alt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-2xl" />
                )}
                <div className="hidden group-hover:flex absolute top-0 left-0 justify-center items-center w-full h-full bg-black bg-opacity-50 z-50">
                  {media.type === "video" ? (
                    <Video className="w-6 h-6 text-white" />
                  ) : (
                    <Instagram className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden lg:flex top-0 bottom-0 justify-between gap-5 w-full">
          <div className="absolute flex justify-center items-center -translate-x-5 z-40 left-0 top-0 bottom-0 my-auto">
            <button
              className={`swiper-prev p-2 rounded-full bg-gray-300 text-gray-500 ${isBeginning ? "opacity-50" : ""}`}
              disabled={isBeginning}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute flex justify-center items-center translate-x-5 z-40 right-0 top-0 bottom-0 my-auto">
            <button
              className={`swiper-next p-2 rounded-full bg-gray-300 text-gray-500 ${isEnd ? "opacity-50" : ""}`}
              disabled={isEnd}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>


        <div className='lg:hidden flex justify-left items-left text-left text-md mt-14'>
          <button className='flex gap-2 justify-left items-left px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold'
            onClick={() => handleExploreMore()}
          >
            Explore More <span><MoveUpRight className='size-4' /></span>
          </button>
        </div>
      </div>
    </>
  );
}