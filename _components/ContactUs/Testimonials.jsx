'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Rudraksh Hotel And guest house, Ayodhya, Uttar Pradesh',
            title: 'Swastik Sharma',
            rating: 4,
            text: 'The level of service provided by Prospera hospitality pvt ltd  was outstanding. They understood our needs perfectly and delivered beyond what we imagined, Their expertise and passion for hospitality were evident in every interaction, We are extremely pleased with their service and will definitely continue our association with them!',
            src: '/img/test3.webp'
        },
        {
            name: 'Hotel Vrushali Inn, Rabale, Maharashtra',
            title: 'Pooja Nair',
            rating: 5,
            text: `The Prospera team is really good at their work. My hotel got a significant increase in bookings because of them! Their proactive approach and expert guidance in digital marketing have not only boosted our visibility online but also significantly improved our guest engagement. I appreciate their commitment to understanding our unique needs and delivering tailored solutions that truly work.`,
            src: '/img/test1.jpg'
        },
        {
            name: 'Athitya Hotel and Resort, Sikar, Rajasthan',
            title: 'Ramesh Kamble',
            rating: 5,
            text: `Highly recommended to hoteliers! We are extremely happy with the bookings Tanya & her team have provided, significantly increasing my hotel revenue for the 2025 fiscal year. Their expertise in digital marketing, strategic partnerships, and online visibility has truly made a difference. We look forward to continuing this partnership and achieving even greater success in the coming years!`,
            src: '/img/test2.webp'
        },
    ];

    return (
        <div className="p-0 bg-white w-full h-full">
            <div className="w-full mx-auto relative overflow-hidden flex justify-center items-center">
                <div className="bg-[url('/img/testimonbg.png')] bg-cover bg-center rounded-2xl flex flex-col justify-center items-center p-5 m-5 lg:gap-14 h-[30rem] lg:h-[25rem] w-[78rem]">
                    <p className="text-2xl font-semibold">TESTIMONIALS</p>
                    <div className="w-full">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            loop={true}
                            speed={5000}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: ".swiper-next",
                                prevEl: ".swiper-prev",
                            }}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex w-full justify-center items-center text-center"
                                >
                                    <div className="p-4 w-[30%] lg:w-full rounded-lg mx-auto">
                                        <p className="mb-2 text-gray-800 text-center">{`"` + testimonial.text + `"`}</p>
                                        <div className="text-sm text-gray-600 text-center mt-8">
                                            <div className='w-full flex justify-center items-center'>
                                                <img src={testimonial.src} alt={index} className='size-12 rounded-full' />
                                            </div>
                                            <div className='flex flex-col justify-center items-center mt-2'>
                                                <div className='font-semibold text-lg'>{testimonial.title}</div>
                                                <div>
                                                    {testimonial.name}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Testimonials;
