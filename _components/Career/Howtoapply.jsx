'use client'
import React from 'react'
import { motion } from "framer-motion";

const Howtoapply = () => {

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    return (
        <div className="w-full flex justify-center items-center mt-16">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

                <div className="flex flex-col gap-14 justify-center items-center w-full">
                    <div className="text-2xl lg:text-4xl text-center text-[#800000] font-bold">
                        How to apply?
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={sectionVariants}
                        className="grid grid-cols-1 lg:grid-cols-4 w-full lg:border-x border-y-0
        "
                    >
                        <div className="border-y lg:border-y-0 lg:border-x relative px-5 py-10">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-row text-3xl text-center font-semibold text-gray-600">
                                    <div className='flex flex-col justify-center items-center text-center self-center w-[80%]'>
                                        <div>
                                            Browse Our  
                                        </div>
                                        <div>Open Roles</div>
                                    </div>
                                    <div className="text-7xl text-[#800000] w-[10%]">1</div>
                                </div>
                                <p className="px-5 text-gray-500">
                                Review the job openings listed above and find a role that matches your skills and interests.
                                </p>
                            </div>
                            <div
                                className={`absolute w-8 h-8 transform rotate-45 bg-[#800000] 
                lg:top-[40%] left-[40%] md:left-[45%] lg:left-auto lg:right-0 translate-x-1/2  lg:translate-x-[55%] 
                bottom-0  translate-y-1/2 z-10 `}
                            ></div>
                            <div
                                className={`absolute w-8 h-8 transform rotate-45 bg-white 
                lg:top-[40%] left-[40%] md:left-[45%] lg:left-auto lg:right-0 translate-x-1/2  lg:translate-x-[30%] 
                bottom-0  translate-y-[30%] lg:translate-y-1/2 z-10 `}
                            ></div>
                        </div>
                        <div className="border-y lg:border-y-0 lg:border-x relative px-5 py-10">
                            <div className="flex flex-col gap-8">
                            <div className="flex flex-row text-3xl text-center font-semibold text-gray-600">
                                    <div className='flex flex-col justify-center items-center text-center self-center w-[80%]'>
                                        <div>
                                            {`Click "Apply Now"`}  
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="text-7xl text-[#800000] w-[10%]">2</div>
                                </div>
                                <p className="px-5 text-gray-500">
                                Navigate to the application form for the role you’re interested in.
                                </p>
                            </div>
                            <div
                                className={`absolute w-8 h-8 transform rotate-45 bg-[#800000] 
                lg:top-[40%] left-[40%] md:left-[45%] lg:left-auto lg:right-0 translate-x-1/2  lg:translate-x-[55%] 
                bottom-0  translate-y-1/2 z-10`}
                            ></div>
                            <div
                                className={`absolute w-8 h-8 transform rotate-45 bg-white 
                lg:top-[40%] left-[40%] md:left-[45%] lg:left-auto lg:right-0 translate-x-1/2  lg:translate-x-[30%] 
                bottom-0  translate-y-[30%] lg:translate-y-1/2 z-10`}
                            ></div>
                        </div>
                        <div className="border-y lg:border-y-0 lg:border-x relative px-5 py-10">
                            <div className="flex flex-col gap-8">
                            <div className="flex flex-row text-3xl text-center font-semibold text-gray-600">
                                    <div className='flex flex-col justify-center items-center text-center self-center w-[80%]'>
                                        <div>
                                            {`Complete the `}  
                                        </div>
                                        <div>Form</div>
                                    </div>
                                    <div className="text-7xl text-[#800000] w-[10%]">3</div>
                                </div>
                                <p className="px-5 text-gray-500">
                                Provide your details, upload your resume, and share a brief cover letter about why you’d be a great fit for the position.
                                </p>
                            </div>
                            <div
                                className={`absolute w-8 h-8 transform rotate-45 bg-[#800000] 
                lg:top-[40%] left-[40%] md:left-[45%] lg:left-auto lg:right-0 translate-x-1/2  lg:translate-x-[55%] 
                bottom-0  translate-y-1/2 z-10`}
                            ></div>
                            <div
                                className={`absolute w-8 h-8 transform rotate-45 bg-white 
                lg:top-[40%] left-[40%] md:left-[45%] lg:left-auto lg:right-0 translate-x-1/2  lg:translate-x-[30%] 
                bottom-0  translate-y-[30%] lg:translate-y-1/2 z-10`}
                            ></div>
                        </div>
                        <div className="border-y lg:border-y-0 lg:border-x relative px-5 py-10">
                            <div className="flex flex-col gap-8">
                            <div className="flex flex-row text-3xl text-center font-semibold text-gray-600">
                                    <div className='flex flex-col justify-center items-center text-center self-center w-[80%]'>
                                        <div>
                                            {`Submit Your `}  
                                        </div>
                                        <div>Application</div>
                                    </div>
                                    <div className="text-7xl text-[#800000] w-[10%]">4</div>
                                </div>
                                <p className="px-5 text-gray-500">
                                Once you submit the form, our recruitment team will carefully review your application and get in touch if your profile aligns with the role.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Howtoapply