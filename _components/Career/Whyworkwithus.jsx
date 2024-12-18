'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay styles
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getImageProps } from "next/image";
import IMAGES from "@/public/index";
import { useRouter } from "next/navigation";

const Whyworkwithus = () => {

    const cardData = [
        {
            alt: "Dynamic Work Environment",
            name: "Dynamic Work Environment",
            description: "We thrive on innovation and embrace challenges as opportunities to learn and grow.",
            desktop: { src: IMAGES.dynamicworkenviron, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.dynamicworkenviron, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Empowerment and Growth",
            name: "Empowerment and Growth",
            description: "Your ideas and contributions are valued, and we provide the resources and mentorship to help you achieve your full potential.",
            desktop: { src: IMAGES.empowerment, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.empowerment, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Inclusive Culture",
            name: "Inclusive Culture",
            description: "Diversity is at the core of what we do. We celebrate individuality and work together to build something extraordinary.",
            desktop: { src: IMAGES.inclusive, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.inclusive, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Impact-Driven Vision",
            name: "Impact-Driven Vision",
            description: "Be part of projects that create a real impact on people, businesses, and communities.",
            desktop: { src: IMAGES.vision, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.vision, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Collaboration and Teamwork",
            name: "Collaboration and Teamwork",
            description: "We believe in the power of collaboration. Our teams work together seamlessly to achieve common goals and deliver exceptional results.",
            desktop: { src: IMAGES.teamwork, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.teamwork, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Learning and Development",
            name: "Learning and Development",
            description: "We are committed to fostering continuous learning. We provide access to resources and opportunities that empower you to grow professionally.",
            desktop: { src: IMAGES.learning, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.learning, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Innovation and Creativity",
            name: "Innovation and Creativity",
            description: "At Prospera Hospitality, we encourage you to think outside the box and bring new ideas to life. Innovation is at the heart of everything we do.",
            desktop: { src: IMAGES.innovation, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.innovation, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Work-Life Balance",
            name: "Work-Life Balance",
            description: "We understand the importance of balancing personal and professional life. We offer flexibility and support to ensure our employees thrive both at work and outside of it.",
            desktop: { src: IMAGES.worklife, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.worklife, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Sustainability and Responsibility",
            name: "Sustainability and Responsibility",
            description: "We are dedicated to sustainability. Our initiatives aim to create a positive impact on the environment and the communities we serve.",
            desktop: { src: IMAGES.sustainablity, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.sustainablity, width: 750, height: 1334, quality: 100 },
        },
        {
            alt: "Global Opportunities",
            name: "Global Opportunities",
            description: "Join us and be part of an international network. With a presence in multiple locations, we offer opportunities for global career growth.",
            desktop: { src: IMAGES.global, width: 1600, height: 601, quality: 100 },
            mobile: { src: IMAGES.global, width: 750, height: 1334, quality: 100 },
        },
    ];
    
    

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const router = useRouter()

    const handleFestiveTour = (festival) => {
        router.push(`/filterpage/${festival}`)
    }

    return (
        <div className="w-full flex justify-center items-center mt-16">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

                <div className="flex flex-col gap-4 justify-center items-center w-full bg-slate-100 p-8">
                    <h2 className="text-2xl lg:text-3xl text-[#800000] font-bold decoration-[#800000]">
                    Why Work with Us?
                    </h2>
                    <p className="text-base lg:text-lg lg:w-[80%] text-center">
                    At Prospera Hospitality, we believe that our success is driven by the people who work with us. We offer an environment where your passion and creativity can thrive, and we are committed to fostering growth, inclusion, and impact. Here’s why you should consider joining our team:
                    </p>

                    <div className="hidden md:flex gap-5 justify-end w-full ">
                        <button
                            className={`swiper-prev p-2 rounded-full bg-gray-300 text-gray-500 ${isBeginning ? "opacity-50" : ""
                                }`}
                            disabled={isBeginning}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            className={`swiper-next p-2 rounded-full bg-gray-300 text-gray-500 ${isEnd ? "opacity-50" : ""
                                }`}
                            disabled={isEnd}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-5 h-full">
                        <div className="w-full h-auto relative">
                            <Swiper
                                spaceBetween={20}
                                navigation={{
                                    nextEl: ".swiper-next",
                                    prevEl: ".swiper-prev",
                                }}
                                // autoplay={{
                                //     delay: 4000,
                                //     disableOnInteraction: false,
                                // }}
                                modules={[Navigation]}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                    },
                                    640: {
                                        slidesPerView: 1.5,
                                        slidesPerGroup: 1,
                                    },
                                    1024: {
                                        slidesPerView: 2.5,
                                        slidesPerGroup: 2,
                                    },
                                }}
                                className="mySwiper w-full"
                                onSlideChange={(swiper) => {
                                    setIsBeginning(swiper.isBeginning);
                                    setIsEnd(swiper.isEnd);
                                }}
                            >
                                {cardData.map((card, index) => {

                                    const {
                                        props: { srcSet: desktop },
                                    } = getImageProps({
                                        alt: card.alt,
                                        width: card.desktop.width,
                                        height: card.desktop.height,
                                        quality: card.desktop.quality,
                                        src: card.desktop.src,
                                    });

                                    const {
                                        props: { srcSet: mobile, ...rest },
                                    } = getImageProps({
                                        alt: card.alt,
                                        width: card.mobile.width,
                                        height: card.mobile.height,
                                        quality: card.mobile.quality,
                                        src: card.mobile.src,
                                    });

                                    return (
                                        <SwiperSlide key={index}>
                                        <div className="flex flex-col gap-2 bg-white rounded-3xl h-[27rem]">
                                          {/* Image Section */}
                                          <div className="flex-grow relative w-full h-full overflow-hidden bg-white border rounded-t-3xl" onClick={() => handleFestiveTour(card.name)}>
                                            
                                              <img
                                                {...rest}
                                                className="h-full w-full object-fill aspect-square lg:aspect-[16/6]"
                                                alt={card.alt}
                                              />
                                           
                                          </div>
                                      
                                          {/* Text Section */}
                                          <div className="flex flex-col flex-none p-6 gap-2">
                                            <p className="text-lg font-semibold text-[#800000]">{card.name}</p>
                                            <p className="text-md line-clamp-2">{card.description}</p>
                                          </div>
                                        </div>
                                      </SwiperSlide>
                                      
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Whyworkwithus