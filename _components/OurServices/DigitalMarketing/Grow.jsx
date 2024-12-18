'use client'
import { ArrowRight, ChartLine, ContactRound, MailOpen } from 'lucide-react'
import React, { useState } from 'react'
import ContactModal from '@/_components/ContactModal';

const Grow = () => {

    const [modalClicked, setModalClicked] = useState(false);

    const [serviceClicked, setServiceClicked] = useState(false);

    const handleModal = (service) => {
        setModalClicked(true)
        setServiceClicked(service)
    }

    return (
        <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col gap-16'>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-5 '>
                <div className='flex flex-col w-full gap-2'>
                    <span className='text-[#800000] text-lg font-semibold'>What We Do</span>
                    <h2 className='text-3xl  font-bold w-full lg:w-[70%]'>Grow Your Business With Prospera</h2>
                </div>
                <div className='w-full'><p className='text-gray-500 text-sm'>At Prospera Hospitality, we specialize in delivering cutting-edge digital marketing solutions tailored specifically for the hospitality industry. We understand the unique challenges of hotel marketing, and we’re here to help you maximize your online presence, attract more guests, and grow your revenue.</p></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 '>
                <div className='border py-8 px-5 shadow-lg h-80 bg-gray-100 rounded-xl'>
                    <div className='h-full w-full flex flex-col justify-between gap-5'>
                        <div className='w-full'>
                            <span className="bg-[#800000] p-4 rounded-xl inline-flex justify-center items-center">
                                <ChartLine className='text-white' />
                            </span>
                        </div>
                        <h2 className='text-xl font-bold text-[#800000]'>Search Engine Optimization</h2>
                        <p className='text-gray-500 text-sm'>Make your hotel easily discoverable online. Our SEO experts ensure your website ranks higher on search engines, increasing visibility and organic traffic.</p>
                        <button className='flex justify-start items-center text-sm font-semibold gap-2 text-center' onClick={(e) => handleModal("Search Engine Optimization")}>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>

                <div className='border py-8 px-5 shadow-lg h-80 bg-gray-100 rounded-xl'>
                    <div className='h-full w-full flex flex-col justify-between gap-5'>
                        <div className='w-full'>
                            <span className="bg-[#800000] p-4 rounded-xl inline-flex justify-center items-center">
                                <MailOpen className='text-white' />
                            </span>
                        </div>
                        <h2 className='text-xl font-bold text-[#800000]'>Email Marketing</h2>
                        <p className='text-gray-500 text-sm'>{"Stay connected with your guests and keep your brand top of mind with personalized, well-timed emails."}</p>
                        <button className='flex justify-start items-center text-sm font-semibold gap-2 text-center' onClick={(e) => handleModal("Email Marketing")}>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>

                <div className='border py-8 px-5 shadow-lg h-80 bg-gray-100 rounded-xl'>
                    <div className='h-full w-full flex flex-col justify-between gap-5'>
                        <div className='w-full'>
                            <span className="bg-[#800000] p-4 rounded-xl inline-flex justify-center items-center">
                                <ContactRound className='text-white' />
                            </span>
                        </div>
                        <h2 className='text-xl font-bold text-[#800000]'>Social Media Marketing</h2>
                        <p className='text-gray-500 text-sm'>Engage your audience where they spend their time. From stunning visuals to captivating campaigns, we help you shine on social media platforms.</p>
                        <button className='flex justify-start items-center text-sm font-semibold gap-2 text-center' onClick={(e) => handleModal("Social Media Marketing")}>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>



            </div>

            <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked}/>
        </div>
    )
}

export default Grow