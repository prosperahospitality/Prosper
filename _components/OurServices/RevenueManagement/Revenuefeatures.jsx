"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import IMAGES from "@/public/index";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactModal from '@/_components/ContactModal';

const Revenuefeatures = () => {

    const [modalClicked, setModalClicked] = useState(false);

    const [serviceClicked, setServiceClicked] = useState(false);

    const handleModal = (service) => {
        setModalClicked(true)
        setServiceClicked(service)
    }

    const revenuedata = [
        {
            "key": "1",
            "image": IMAGES.ota,
            "heading": "OTA Management",
            "description": "We simplify the onboarding process across all major OTAs, ensuring your property is listed effectively. This includes detailed setup to highlight your unique offerings and attract guests."
        },
        {
            "key": "2",
            "image": "/img/fastpay.jpeg",
            "heading": "Payment Fast-Tracking",
            "description": "We simplify the onboarding process across all major OTAs, ensuring your property is listed effectively. This includes detailed setup to highlight your unique offerings and attract guests."
        },
    ]

    const revenuedataone = [
        {
            "key": "1",
            "image": "/img/analytics.avif",
            "heading": "Data Analytics and Reporting",
            "description": "Utilizing advanced analytics tools, we track KPIs and market trends to inform your revenue strategies."
        },
        {
            "key": "2",
            "image": "/img/segmentation.webp",
            "heading": "Segmentation and Targeting",
            "description": "Tailoring pricing and offers to different guest segments (business travelers, families, groups, etc.) for maximum revenue from each market."
        }
    ]

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    return (
        <div className='w-full bg-gray-100 py-14'>
            <div className='w-[90%] lg:w-[80%] m-auto '>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={sectionVariants}
                    className='grid grid-cols-1 md:grid-cols-2 gap-6'
                >
                    <div className=' flex flex-col gap-8'>

                        <div className='text-3xl lg:text-5xl font-semibold text-start w-full'>
                            <h1 className='text-gray-600'>Revenue Management Features</h1>
                        </div>

                        {revenuedata && revenuedata.map((e, i) => (
                            <div key={i} className='p-3 flex flex-col gap-7 bg-white rounded-lg'>
                                <div className='w-full h-[18rem] lg:h-[25rem] relative rounded-lg overflow-hidden'>
                                    <Image
                                        alt="Mountains"
                                        src={e.image}
                                        className='object-fill'
                                        width={1000}
                                        height={1000}
                                        style={{
                                            objectFit: 'fill',
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    />
                                </div>
                                <div className=' w-full h-auto flex flex-col gap-2 justify-start'>
                                    <h2 className='text-[#800000] text-xl font-bold'>{e.heading}</h2>
                                    <p className='text-gray-600 font-normal'>{e.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className=' flex flex-col gap-5'>
                        {revenuedataone && revenuedataone.map((e, i) => (
                            <div key={i} className='p-3 flex flex-col gap-7 bg-white rounded-lg'>
                                <div className='w-full h-[18rem] lg:h-[25rem] relative rounded-lg overflow-hidden'>
                                    <Image
                                        alt="Mountains"
                                        src={e.image}
                                        className='object-fill'
                                        width={1000}
                                        height={1000}
                                        style={{
                                            objectFit: 'fill',
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    />
                                </div>
                                <div className=' w-full h-auto flex flex-col gap-2 justify-start'>
                                    <h2 className='text-[#800000] text-xl font-bold'>{e.heading}</h2>
                                    <p className='text-gray-600 font-normal'>{e.description}</p>
                                </div>
                            </div>
                        ))}

                        <div className='flex flex-col justify-start gap-6'>
                            <p className='text-gray-600 font-normal'>Elevate your hotel’s revenue with tailored management solutions.
                                We optimize OTAs, implement dynamic pricing, and enhance
                                profitability.</p>
                            <div className='lg:flex justify-center items-center text-end text-md '>
                                <button className='w-full flex gap-2 justify-center items-center px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold'
                                 onClick={(e) => handleModal("Revenue Management")}
                                >
                                    Let’s grow your business together <span><MoveUpRight className='size-4' /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked}/>

        </div>
    )
}

export default Revenuefeatures
