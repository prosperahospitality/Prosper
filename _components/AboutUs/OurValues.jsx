import React from 'react';
import { Handshake, Lightbulb } from "lucide-react";

const OurValues = ({ scrollToContact }) => {
    return (
        <div className="w-full flex justify-center items-center mt-8 lg:mt-16">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%]">
                <div className="flex flex-col justify-center items-center w-full gap-6 md:gap-8">
                    <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#800000]">
                        Our Core Values
                    </div>
                    <div className="font-normal text-sm md:text-md text-gray-600 text-center max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
                        At Prospera Hospitality, we believe in delivering more than just a service—we aim to build partnerships that help hotels thrive in the digital era. Here’s why hotels trust us to transform their online presence and achieve long-term success:
                    </div>
                </div>

                <div className="flex flex-col mt-4 w-full">
                    {/* Desktop and Tablet */}
                    <div className="hidden md:flex md:flex-wrap md:justify-between gap-5">
                        <SlideCards scrollToContact={scrollToContact} />
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden flex overflow-x-auto relative w-full hide-scrollbar-x snap-x snap-mandatory scroll-smooth">
                        <div className="flex w-full transition-transform duration-500 ease-in-out gap-x-5">
                            <SlideCards scrollToContact={scrollToContact} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SlideCards = ({ scrollToContact }) => {
    const cards = [
        {
            heading: "Innovation",
            desc: "We embrace the latest technologies to deliver cutting-edge solutions. From modern web designs to advanced analytics, we ensure your hotel stays ahead in a competitive market.",
            color: "to-red-500",
            textColor: "text-red-500",
            icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-red-950" />,
        },
        {
            heading: "Collaboration",
            desc: "We believe in working together to achieve shared success. By understanding your goals and aligning with your vision, we create solutions tailored to your needs.",
            color: "to-blue-500",
            textColor: "text-blue-500",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 32" fill='#800000'>
                    <path fill="currentColor" d="M6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5m18-10v1h2v-1a7 7 0 0 0-7-7h-3v2h3a5 5 0 0 1 5 5m-13 0H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m19 21h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4m6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2" />
                </svg>
            ),
        },
        {
            heading: "Excellence",
            desc: "Our commitment to quality ensures that every project is delivered to perfection. We strive for exceptional results in every detail, from design to execution.",
            color: "to-green-500",
            textColor: "text-green-500",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 48 48" fill='#800000'>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                        <path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z" />
                        <path d="m17 24l5 5l10-10" />
                    </g>
                </svg>
            ),
        },
        {
            heading: "Integrity",
            desc: "Trust is at the heart of our business. We ensure transparent and honest communication at every step, building relationships based on mutual respect and reliability.",
            color: "to-yellow-500",
            textColor: "text-yellow-500",
            icon: <Handshake className="w-8 h-8 md:w-10 md:h-10 text-red-950" />,
        },
    ];

    return (
        <>
            {cards.map((slide, index) => (
                <div
                    key={index}
                    className="flex-none w-[85%] sm:w-[60%] md:w-[calc(50%-15px)] lg:w-[calc(25%-15px)] h-72 flex items-center justify-center flex-col
          gap-5 snap-start mt-10 lg:mt-14 mb-6 lg:mb-14"
                >
                    <div className="relative border w-full h-full rounded-2xl flex justify-start items-center bg-red-100 flex-col pt-8 px-5 shadow-md">
                        <div className="absolute top-5 left-0 translate-x-[-20px] size-14 bg-white flex justify-center items-center rounded-full p-3 font-extrabold text-3xl text-themeColor">
                            {slide.icon}
                        </div>
                        <div className="flex flex-col justify-center items-center h-[69%] gap-6">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold lg:font-bold text-themeColor text-center h-[30%]">
                                {slide.heading}
                            </h2>
                            <p className="text-center text-sm md:text-base text-gray-700 h-[70%]">{slide.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default OurValues;
