'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Handshake, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const TenPrinciples = () => {

    const cards = [
        {
          title: "Transparency",
          description:
            "We believe in open communication. From pricing to deliverables, we provide clear and honest information—ensuring you know exactly what to expect.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0"/><path d="M8.026 15.607a7 7 0 0 1 7.821-7.556m3.15 1.202a7 7 0 1 1-9.744 9.744M6.5 2.5l9 9m-13-5l9 9"/></g></svg>
        </>)
        },
        {
          title: "Customer Service",
          description:
            "Our dedicated support team is here for you. Whether you need assistance during development or after delivery, we’re just a call, click, or message away.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="currentColor" d="M21 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8 8 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 0 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0zM7.76 15.785l1.06-1.696A5.97 5.97 0 0 0 12 15a5.97 5.97 0 0 0 3.18-.911l1.06 1.696A7.96 7.96 0 0 1 12 17a7.96 7.96 0 0 1-4.24-1.215"/></svg>
            </>)
        },
        {
          title: "Respect for Your Privacy",
          description:
            "Your personal and business information is safe with us. We adhere to strict data protection practices and ensure confidentiality at all times.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 20 20"><path fill="currentColor" d="M10 9.6c-.6 0-1 .4-1 1c0 .4.3.7.6.8l-.3 1.4h1.3l-.3-1.4c.4-.1.6-.4.6-.8c.1-.6-.3-1-.9-1m.1-4.3c-.7 0-1.4.5-1.4 1.2V8h2.7V6.5c-.1-.7-.6-1.2-1.3-1.2M10 2L3 5v3c.1 4.4 2.9 8.3 7 9.9c4.1-1.6 6.9-5.5 7-9.9V5zm4 11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h.3V6.5C7.4 5.1 8.6 4 10 4s2.6 1.1 2.7 2.5V8h.3c.6 0 1 .4 1 1z"/></svg>
            </>)
        },
        {
          title: "Fair Pricing",
          description:
            "At Prospera Hospitality, we provide competitive pricing with no hidden fees. Our transparent cost structure ensures you get the best value for your investment.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="currentColor" d="M7.001 12h3.75c1.172 0 2.272-.4 3.061-1.077a3.43 3.43 0 0 0 1.01-1.423H7a1 1 0 0 1 0-2h7.822a3.43 3.43 0 0 0-1.01-1.423C13.022 5.401 11.923 5 10.751 5H7a1 1 0 1 1 0-2h3.75l.18.002L11 3h7a1 1 0 1 1 0 2h-2.425a5.24 5.24 0 0 1 1.322 2.5H18a1 1 0 1 1 0 2h-1.103c-.236 1.127-.865 2.154-1.783 2.941C13.934 13.452 12.363 14 10.75 14H9.712l6.138 5.24a1 1 0 0 1-1.299 1.52l-8.197-6.997l-.01-.009a.996.996 0 0 1-.207-1.26A1 1 0 0 1 7.001 12"/></svg>
            </>)
        },
        {
          title: "Sustainability",
          description:
            "We care about the future. We implement eco-friendly practices in our processes and collaborate with partners who share our commitment to sustainability.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 32"><path fill="currentColor" d="M21.57 27.75A12.9 12.9 0 0 1 16 29C8.832 29 3 23.168 3 16c0-3.075 1.057-5.979 3-8.308V10h2V4H2v2h2.842A14.86 14.86 0 0 0 1 16c0 8.271 6.729 15 15 15a14.9 14.9 0 0 0 6.43-1.444z"/><path fill="currentColor" d="M21 9c-3.16 0-5.751 2.457-5.978 5.56A5.97 5.97 0 0 0 11 13H7v4c0 3.309 2.692 6 6 6h2v4h2v-8h2c3.308 0 6-2.691 6-6V9zm-8 12c-2.206 0-4-1.794-4-4v-2h2c2.206 0 4 1.794 4 4v.586l-2.293-2.293l-1.414 1.414L13.586 21zm10-8c0 2.206-1.794 4-4 4h-.586l2.293-2.293l-1.414-1.414L17 15.586V15c0-2.206 1.794-4 4-4h2z"/><path fill="currentColor" d="M31 16c0-8.271-6.729-15-15-15a14.9 14.9 0 0 0-6.43 1.444l.86 1.806A12.9 12.9 0 0 1 16 3c7.168 0 13 5.832 13 13c0 3.075-1.057 5.979-3 8.308V22h-2v6h6v-2h-2.842A14.86 14.86 0 0 0 31 16"/></svg>
            </>)
        },
        {
          title: "Innovation",
          description:
            "We embrace cutting-edge technologies and forward-thinking strategies to deliver solutions that keep your business ahead in the competitive hospitality industry.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 2C6.582 2 3 5.545 3 9.919c0 1.493.417 2.89 1.143 4.081M17 5h-2c-.943 0-1.414 0-1.707.293S13 6.057 13 7v2c0 .943 0 1.414.293 1.707S14.057 11 15 11h2c.943 0 1.414 0 1.707-.293S19 9.943 19 9V7c0-.943 0-1.414-.293-1.707S17.943 5 17 5m-2.5 6v2m3-2v2m-3-10v2m3-2v2M13 6.5h-2m2 3h-2m10-3h-2m2 3h-2M6.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059H9.012c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M14 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C12.082 22 11.72 22 11 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L8 19" color="currentColor"/></svg>
            </>)
        },
        {
          title: "Collaboration",
          description:
            "We work closely with you to understand your needs and goals. Together, we build solutions tailored to achieve shared success.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 32"><path fill="currentColor" d="M6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5m18-10v1h2v-1a7 7 0 0 0-7-7h-3v2h3a5 5 0 0 1 5 5m-13 0H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m19 21h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4m6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2"/></svg>
            </>)
        },
        {
          title: "Integrity",
          description:
            "Trust is the foundation of our business. We ensure transparency and honesty in all our dealings, building long-term relationships based on mutual respect.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <Handshake className='size-16'/>
            </>)
        },
        {
          title: "Excellence",
          description:
            "We strive for perfection in every project. From ideation to execution, we ensure the highest standards of quality in everything we do.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M11.953 5.482a4.956 4.956 0 1 1-9.912 0a4.956 4.956 0 0 1 9.912 0"/><path d="m7.2 2.791l.683 1.374a.21.21 0 0 0 .174.127l1.517.23a.23.23 0 0 1 .127.397L8.58 5.983a.22.22 0 0 0 0 .206l.215 1.508a.23.23 0 0 1-.342.246l-1.35-.714a.27.27 0 0 0-.222 0l-1.35.714a.23.23 0 0 1-.34-.246l.254-1.508a.22.22 0 0 0-.04-.206L4.286 4.91a.23.23 0 0 1 .128-.39L5.93 4.3a.21.21 0 0 0 .174-.127l.683-1.374a.23.23 0 0 1 .413-.008M2.704 7.913L.5 11.731l2.381-.638l.639 2.381l1.912-3.312m5.864-2.249l2.204 3.818l-2.382-.638l-.638 2.381l-1.912-3.312"/></g></svg>
            </>)
        },
        {
          title: "Continuous Improvement",
          description:
            "We are always evolving. By staying updated on industry trends and technologies, we consistently refine our services to exceed your expectations.",
          color: "to-gray-800",
          textColor: "text-gray-800",
          icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 512 512"><path fill="currentColor" d="M463 20.3L315.6 75.65L368.5 109C274 228 137.3 301.3 21.8 329.2l32.72 59.6C184.3 346.5 321.7 270.2 410.2 135.4l40.3 25.4zm7.7 116.7l-4.8 54.8l-51.3-32.4c-1.8 2.7-3.7 5.3-5.6 8V487h78V137zM320.1 265c-12.7 11-25.8 21.4-39.1 31.2V487h78V265zm-123.7 84c-14.4 7.6-28.8 14.6-43.4 21.2V487h78V349zM25 393v94h78v-94h-5.68c-14.82 5.5-29.63 10.6-44.35 15.3l-7.06 2.2l-9.6-17.5z"/></svg>
            </>)
        },
      ];
      

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

                <div className="bg-gray-100 py-10 w-full">
                    <div className="w-[95%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-5 h-full pl-8">
                        <div className="w-full lg:w-[50%] flex flex-col items-center h-full">
                            {/* Custom Navigation Buttons */}
                            <div className="flex flex-col gap-10 h-full">
                                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-600">
                                    10 Principles
                                </h2>
                                <p className="text-base lg:text-lg text-gray-600 w-full lg:w-[70%] mb-0 lg:mb-12 xl:mb-16">
                                    To live life to the fullest and to be productive and efficient at
                                    our workplace, as Prospera Hospitality team members, we practice certain
                                    values that guide us in every action and at every step.

                                </p>
                                <div className="hidden md:flex gap-5 ">
                                    <button
                                        className={`swiper-prev p-2 rounded-full bg-gray-300 text-gray-500 ${isBeginning ? "opacity-50 " : ""
                                            }`}
                                        disabled={isBeginning}
                                    >
                                        <ChevronLeft className="w-6 h-6 " />
                                    </button>
                                    <button
                                        className={`swiper-next p-2 rounded-full bg-gray-300 text-gray-500 ${isEnd ? "opacity-50 " : ""
                                            }`}
                                        disabled={isEnd}
                                    >
                                        <ChevronRight className="w-6 h-6 " />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-[50%] h-auto relative">
                            <Swiper
                                spaceBetween={20}
                                slidesPerGroup={1}
                                navigation={{
                                    nextEl: ".swiper-next",
                                    prevEl: ".swiper-prev",
                                }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                style={{
                                    "--swiper-navigation-size": "20px",
                                }}
                                modules={[Navigation, Autoplay]}
                                breakpoints={{
                                    0: { slidesPerView: 1.5 },
                                    768: { slidesPerView: 1.5 },
                                    1024: { slidesPerView: 1.5 },
                                }}
                                className="mySwiper"
                                onSlideChange={(swiper) => {
                                    setActiveIndex(swiper.activeIndex);
                                    setIsBeginning(swiper.isBeginning);
                                    setIsEnd(swiper.isEnd);
                                }}
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide key={index}>
                                        <motion.div
                                            className={`w-full h-72 md:h-80 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-white via-white`}
                                            initial={{ scale: 0.9, opacity: 0.5 }}
                                            animate={
                                                index === activeIndex
                                                    ? { scale: 1, opacity: 1 }
                                                    : { scale: 0.9, opacity: 0.5 }
                                            }
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="p-4 flex flex-col justify-center items-center w-full h-full gap-5 lg:gap-5">
                                                <div className='flex justify-center items-center text-center content-center w-full'>
                                                    {card.icon}
                                                </div>
                                                <h3
                                                    className={`text-lg md:text-xl font-semibold ${card.textColor} lg:text-2xl text-center w-full`}
                                                >
                                                    {card.title}
                                                </h3>
                                                <p className="text-sm text-center text-gray-600">{card.description}</p>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default TenPrinciples