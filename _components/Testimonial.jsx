"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IMAGES from "@/public/index";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { UserRound } from "lucide-react" 

export default function InstagramReels({ }) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);



    const testimonials = [
        {
            name: 'Greenwood Residency, Shimla, Himachal Pradesh',
            title: 'Rohit Mehra',
            rating: 4,
            image: IMAGES.profile,
            text: 'Prospera Hospitality has transformed our online presence! Our hotel bookings have surged after they listed us on top booking platforms, and the custom website they designed is both elegant and functional. Great team to work with!',
        },
        {
            name: 'Ocean Pearl Resort, Nagoan, Alibaug',
            title: 'Pooja Nair',
            rating: 5,
            image: IMAGES.profile,
            text: `From day one, Prospera Hospitality impressed us with their professionalism and expertise. The website they built for us is user-friendly and visually appealing. Our visibility has improved, and we've seen a notable increase in direct bookings.`,
        },
        {
            name: 'Royal Heritage Inn, Jaipur, Rajasthan',
            title: 'Vikram Singh',
            rating: 4,
            image: IMAGES.profile,
            text: `We were struggling to get online bookings, but thanks to Prospera Hospitality's listing services and custom website, our hotel now receives consistent reservations. Their team made the process seamless!`,
        },
        {
            name: 'Tranquil Lake View, Munnar, Kerala',
            title: 'Sneha Iyer',
            rating: 5,
            image: IMAGES.profile,
            text: 'Choosing Prospera Hospitality was the best decision for our hotel business. Our visibility on booking platforms has skyrocketed, and the website they developed has a modern, clean look that our guests love.',
        },
        {
            name: 'Blossom Boutique Stay, Pune, Maharashtra',
            title: 'Rahul Patil',
            rating: 5,
            image: IMAGES.profile,
            text: `Prospera Hospitality delivered beyond our expectations. They made our hotel stand out on booking platforms and developed a stunning custom website. We've seen more bookings and happier guests!`,
        },
        {
            name: 'Sunrise Hill Retreat, Manali, Himachal Pradesh',
            title: 'Kavita Joshi',
            rating: 5,
            image: IMAGES.profile,
            text: `The team at Prospera Hospitality is truly exceptional. They listed our hotel across major booking websites, and the custom website they created has helped us build our direct customer base. Highly recommended!`,
        },
        {
            name: 'Lotus Grand Hotel, Varanasi, Uttar Pradesh',
            title: 'Suresh Gupta',
            rating: 5,
            image: IMAGES.profile,
            text: `Prospera Hospitality knows the hospitality industry inside out. Their custom website for our hotel is sleek and easy to navigate. Combined with their online booking strategy, our business has grown tremendously!`,
        },
        {
            name: 'Palm Grove Hotel, Hyderabad, Telangana',
            title: 'Deepa Reddy',
            rating: 5,
            image: IMAGES.profile,
            text: `Our experience with Prospera Hospitality has been phenomenal. The website they developed is a true reflection of our hotel’s personality, and their expertise in listing services has improved our occupancy rate.`,
        },

    ];



    return (
        <div className="w-[90%] lg:w-[80%] h-full relative mx-auto py-16">
            <Image src={IMAGES.testbg} alt='prospera-hospitality' fill className='flex w-full h-full object-cover' />
            <Swiper
                className="mySwiper flex justify-center items-center"
                navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                }}
                loop={true}
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
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                <div className="w-full h-full flex justify-center items-center ">

                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className='w-full h-full flex justify-center items-center'>
                            <div className=" w-full h-96 flex justify-center items-center">
                                <div className="h-96 w-96 p-5">
                                    <div className="relative h-full w-full flex justify-center items-center">

                                        <div className="absolute bottom-0 right-0 w-[95%] h-[95%] bg-white rounded-br-[50%] shadow-xl border ">
                                            <div className="w-full h-full flex justify-between items-center flex-col">
                                                <div className="flex justify-end items-center w-full py-5">
                                                    <div className="w-[65%] flex flex-col">
                                                        <h2 className="text-xl font-semibold text-[#800000]">{testimonial.title}</h2>
                                                        <span className='text-sm text-gray-400'>{testimonial.name}</span>
                                                        <div className='flex gap-1'>
                                                            {[...Array(5)].map((_, i) => (
                                                                <span key={i}>
                                                                    <FaStar className={`size-3 ${i < testimonial.rating ? 'text-[#800000]' : 'text-gray-400'}`} />
                                                                </span>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="w-full h-full flex justify-center items-center p-5">
                                                    <p className="flex justify-center items-center text-sm text-gray-500">{testimonial.text}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="absolute top-0 left-0 w-[35%] h-[35%] bg-black overflow-hidden rounded-br-[50%]">
                                            {/* <Image src={testimonial.image} fill className='w-full h-full object-cover' /> */}
                                            <UserRound className="text-slate-100 w-full h-full"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
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
        </div>
    );
}