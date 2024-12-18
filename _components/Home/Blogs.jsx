'use client'
import React from 'react'
import IMAGES from '@/public'
import Image from 'next/image'
import { ChevronRight, MoveUpRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from 'swiper/modules';
import "@/styles/swiper.css"
import { useRouter } from 'next/navigation'

const Blogs = () => {

    const router = useRouter();

    const cardData = [
        {
            id: '66c4779d11f67143ae90ebb8',
            image: IMAGES.blog1,
            date: "25 October 2024",
            desc: "The Nitty Girtty’s of Hospitality",
        },
        {
            id: '66c4798a11f67143ae90ecc3',
            image: IMAGES.blog2,
            date: "23 October 2024",
            desc: "The Art of Well Being",
        }
    ];

    const handleExploreMore = () => {
        router.push('/blogs')
    }

    const handleKnowMore = (id) => {
        router.push(`/blogs/${id}`)
    }

    return (
        <div className="w-full flex flex-col gap-8 justify-center items-center">
            <div className='flex justify-between w-[85%] lg:w-[80%]'>
                <div className='text-start text-3xl text-gray-600'>
                    <div className=''>Insights to Fuel Your</div>
                    <div className='mt-2'>Growth</div>
                </div>
                <div className='hidden lg:flex justify-center items-center text-end text-md'>
                    <button className='flex gap-2 justify-center items-center px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold'
                    onClick={handleExploreMore}
                    >
                        Explore More <span><MoveUpRight className='size-4' /></span>
                    </button>
                </div>
            </div>

            <div className="hidden lg:flex gap-4 p-4 w-[90%] lg:w-[80%] lg:justify-center lg:items-center">
                {cardData.map((item, index) => (
                    <div key={index} className='flex lg:flex-col w-full justify-center items-center'>
                        <div className='w-full lg:w-[90%] relative'>
                            <Image
                                src={item.image}
                                alt={`Image ${index + 1}`}
                                width={600}
                                height={600}
                                quality={100}
                                className='object-cover h-96 w-full rounded-2xl z-0'
                            />
                            <div className='absolute bottom-0 left-0 right-0 h-[33%] flex flex-col justify-between text-gray-500 rounded-b-2xl'>
                                <div className='bg-gray-100 p-3 h-full flex flex-col justify-between rounded-b-2xl'>
                                    <div className='text-[12px] text-gray-500 mt-1'>{item.date}</div>
                                    <div className='flex-1 flex items-center justify-between'>
                                        <div className='text-xl font-semibold text-start'>{item.desc}</div>
                                        <div className='text-[12px] mt-2 flex justify-center items-center gap-1 font-semibold text-gray-600 cursor-pointer' onClick={() => handleKnowMore(item.id)}>know more <ChevronRight size={13} className='mt-1' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:hidden w-[95%] p-4">
                <Swiper
                    spaceBetween={20}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                >
                    {cardData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative'>
                                <Image
                                    src={item.image}
                                    alt={`Image ${index + 1}`}
                                    width={600}
                                    height={600}
                                    quality={100}
                                    className='object-cover h-96 w-full rounded-2xl z-0'
                                />
                                <div className='absolute bottom-0 left-0 right-0 h-[33%] flex flex-col justify-between text-gray-500 rounded-b-2xl'>
                                    <div className='bg-gray-100 p-3 h-full flex flex-col justify-between rounded-b-2xl'>
                                        <div className='text-[12px] text-gray-500 mt-1'>{item.date}</div>
                                        <div className='flex-1 flex items-center justify-between'>
                                            <div className='text-xl font-semibold text-start'>{item.desc}</div>
                                            <div className='text-[12px] mt-2 flex justify-center items-center gap-1 font-semibold text-gray-600 cursor-pointer' onClick={() => handleKnowMore(item.id)}>know more <ChevronRight size={13} className='mt-1' /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='flex justify-left items-left text-left text-md mt-14'>
                    <button className='flex gap-2 justify-left items-left px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold'
                    onClick={() => handleExploreMore}
                    >
                        Explore More <span><MoveUpRight className='size-4' /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Blogs
