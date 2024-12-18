'use client'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

const Process = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        // Safely access window during client-side rendering
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth >= 1024);
        };
    
        // Set the initial value
        handleResize();
    
        // Listen for window resize events
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.5,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    // Example data for the steps
    const stepsData = [
        {
            title: "Consultation",
            description:
                "We start by listening to you. Every hotel has a unique story, brand, and target audience. Through in-depth discussions, we dive into your vision, goals, and pain points to understand your business inside out",
        },
        {
            title: "Strategy Development",
            description:
                "Once we understand your goals, we create a tailored strategy that highlights your strengths and differentiates you from the competition. ",
        },
        {
            title: "Implementation",
            description:
                "Now comes the action phase. We design and develop high-converting websites, optimize your property listings on key platforms, and create seamless booking systems.",
        },
        {
            title: "Continuous Optimization",
            description:
                "Our work doesn’t end with implementation. We monitor performance closely using analytics tools and customer feedback.",
        },
    ];

    return (
        <div className="w-full flex justify-center items-center mt-16">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

                <div className="w-[95%] mx-auto my-10 flex flex-col gap-10">
                    <h2 className="lg:text-4xl decoration-[#800000] text-center font-bold text-4xl text-[#800000]">
                        Our Process
                    </h2>
                    <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-5">
                        <motion.div
                            className={`absolute left-7 lg:left-0 lg:top-7 bg-red-500 ${isLargeScreen ? "w-full lg:h-1" : "w-1 lg:h-full"
                                }`}
                            initial={{ width: 0, height: 0 }}
                            whileInView={{
                                width: isLargeScreen ? "100%" : "2px",
                                height: isLargeScreen ? "2px" : "100%",
                                transition: { duration: 2, ease: "easeInOut" },
                            }}
                            viewport={{ once: false }}
                        ></motion.div>

                        {stepsData.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative h-full flex flex-col justify-between"
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                custom={index}
                            >
                                <div className="size-5 bg-[#800000] absolute left-5 top-0 bottom-0 my-auto lg:my-0 lg:top-5 lg:left-0 lg:right-0 lg:mx-auto rounded-full"></div>
                                <div className="mx-10 lg:my-10 lg:mx-2 p-5 flex flex-col gap-5">
                                    <h3 className="text-xl  text-[#800000] font-bold text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-center text-gray-500">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process