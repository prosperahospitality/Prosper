import React from 'react'
import { Factory, Lightbulb, Headset } from "lucide-react"

const Whychooseus = () => {
    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col justify-center items-center w-full gap-6">
                        <div className="font-bold text-4xl text-[#800000]">
                            Why Choose Us
                        </div>
                        <div className="font-normal text-md text-gray-600 text-center">
                            At Prospera Hospitality, we believe in delivering more than just a service—we aim to build partnerships that help hotels thrive in the digital era. Here’s why hotels trust us to transform their online presence and achieve long-term success:
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-10 px-6 md:px-12">
                        {/* Industry Expertise */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex justify-center items-center  w-[70px] h-[70px] rounded-full bg-red-100 text-red-600 text-2xl font-semibold transition-transform duration-300 hover:scale-110 hover:bg-red-600 hover:text-white hover:border-none">
                                <Factory />
                            </div>
                            <p className="font-semibold text-xl text-gray-800">Industry Expertise</p>
                            <p className="text-center text-gray-600">
                                With years of experience in hospitality and technology, we understand the challenges hotels face in the digital age.
                            </p>
                        </div>

                        {/* Tailored Solutions */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex justify-center items-center  w-[70px] h-[70px] rounded-full bg-green-100 text-green-600 text-2xl font-semibold transition-transform duration-300 hover:scale-110 hover:bg-green-600 hover:text-white hover:border-none">
                            <Lightbulb />
                            </div>
                            <p className="font-semibold text-xl text-gray-800">Tailored Solutions</p>
                            <p className="text-center text-gray-600">
                                Every hotel is unique, and so are our strategies. We craft customized solutions that perfectly match your goals and identity.
                            </p>
                        </div>

                        {/* Continuous Support */}
                        <div className="flex flex-col items-center gap-4 ">
                            <div className="flex justify-center items-center  w-[70px] h-[70px] rounded-full bg-blue-100 text-blue-600 text-2xl font-semibold transition-transform duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white hover:border-none">
                            <Headset />
                            </div>
                            <p className="font-semibold text-xl text-gray-800">Continuous Support</p>
                            <p className="text-center text-gray-600">
                                Our relationship doesn’t end at launch. We provide ongoing support to ensure your success in an ever-changing market.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Whychooseus