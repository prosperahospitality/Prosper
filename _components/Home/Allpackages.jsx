'use client'
import IMAGES from '@/public';
import { MoveUpRight } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const Allpackages = () => {
    const [activeButton, setActiveButton] = useState(0);

    const router = useRouter();

    // Variants for sections and image transitions
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    const imageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: "easeInOut" },
        },
        exit: { opacity: 0, x: 30, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const buttonsData = [
        { id: 0, heading: 'Revenue Management', content: 'Through our data-driven approach, We analyze market trends and competitor pricing to optimize occupancy and maximize your revenue potential.', image: IMAGES.revenue },
        { id: 1, heading: 'Website Development', content: 'Our custom software and website solutions streamline operations and enhance guest experiences, driving efficiency and revenue growth.', image: IMAGES.revenue },
        { id: 2, heading: 'Digital Marketing', content: 'Our digital marketing services boost your hotel’s visibility through targeted SEO, social media, and online advertising.', image: IMAGES.digitalmarketing },
    ];

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const handleLink = (id) => {

        if(id === 0) {
            router.push(`/services/revenue-management`)
        }
        
        if(id === 1) {
            router.push(`/services/web-development`)
        } 
        
        if(id === 2) {
            router.push(`/services/digital-marketing`)
        }
        
    }

    return (
        <div className='flex flex-col gap-10'>
            <div className='w-[90%] lg:w-[80%] mx-auto'>
                <div className='w-full justify-start lg:justify-center items-center flex flex-col gap-10'>
                    <h2 className='text-3xl lg:text-4xl font-semibold text-[#800000] text-start lg:text-center w-full'>Prospera for Everything</h2>
                    <div className='w-full flex justify-start lg:justify-center items-center'>
                        <p className='text-start lg:text-center w-[85%]'>At Prospera, By optimizing your revenue management, enhancing your online presence, and effectively marketing your offerings, you can create a strong foundation for success.</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] lg:w-[80%] mx-auto flex gap-4 lg:gap-10 h-full flex-col lg:flex-row '>
                <div className="flex flex-col w-full lg:w-[30%] gap-5 h-full ">
                    {buttonsData.map(({ id, heading, content }) => (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={sectionVariants}
                            key={id}
                            onClick={() => handleClick(id)} // Set active button on click
                            className={`flex flex-col items-start p-5 rounded-xl gap-5 cursor-pointer
                            ${activeButton === id ? 'bg-white border border-[#800000] shadow-xl' : 'bg-gray-200 border-gray-500'}`}
                        >
                            <h2
                                className="font-semibold text-xl text-gray-600 w-full h-full"
                            >
                                {heading}
                            </h2>
                            {activeButton === id && (
                                <div className="flex flex-col items-start h-full gap-5">
                                    <div className='w-full flex lg:hidden overflow-hidden h-full'>
                                        {buttonsData.map(({ id, heading, image }) => (
                                            activeButton === id && (
                                                <motion.div
                                                    key={id}
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    variants={imageVariants}
                                                    className="bg-gray-200 flex flex-col items-start w-full h-full rounded-xl"
                                                >
                                                    <img src={image} alt={`${heading} Image`} className="mb-2 rounded w-full h-full " />
                                                </motion.div>
                                            )
                                        ))}
                                    </div>
                                    <p>{content}</p>
                                    <button className='flex gap-2 justify-center items-center px-4 py-2 border rounded-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-500 text-white font-semibold' onClick={(e) => handleLink(id)}>
                                        Explore More <span><MoveUpRight className='size-4' /></span>
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={sectionVariants}
                    className='hidden lg:flex w-[70%] overflow-hidden h-full'
                >
                    {buttonsData.map(({ id, heading, image }) => (
                        activeButton === id && (
                            <motion.div
                                key={id}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={imageVariants}
                                className="bg-gray-200 flex flex-col items-start w-full h-full rounded-xl"
                            >
                                <img src={image} alt={`${heading} Image`} className="mb-2 rounded w-full h-full " />
                            </motion.div>
                        )
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Allpackages;
