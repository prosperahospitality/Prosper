import React from "react";
import { Award, ChartPie, Headset, Lightbulb } from 'lucide-react'

const HomeCards = () => {
    const cardData = [
        {
            icon: <Lightbulb className='size-14 text-[#800000]' strokeWidth={1.5} />,
            heading: "Tailored Solutions",
            description: "We take the time to understand your hotel’s unique needs, creating customized strategies that align with your specific goals.",
        },
        {
            icon: <ChartPie className='size-14 text-[#800000] font-medium' strokeWidth={1.5} />,
            heading: "Data-Driven Approach",
            description: "Our methodologies are grounded in thorough data analysis, enabling informed decisions that drive measurable results.",
        },
        {
            icon: <Headset className='size-14 text-[#800000] font-medium' strokeWidth={1.5} />,
            heading: "Continuous Support",
            description: "Our team is always available to provide ongoing support, insights, and adjustments to your revenue strategy.",
        },
        {
            icon: <Award className='size-14 text-[#800000] font-medium' strokeWidth={1.5} />,
            heading: "Proven Results",
            description: "We have successfully helped numerous hotels increase their revenue and optimize their operations, turning challenges into opportunities.",
        },
    ];

    return (
        <div className='flex flex-col gap-10'>
            <div className='w-[90%] lg:w-[80%] mx-auto'>
                <div className='w-full justify-start lg:justify-center items-center flex flex-col gap-10'>
                    <h2 className='text-3xl lg:text-4xl font-semibold text-[#800000] text-start lg:text-center w-full'>Let Prospera do the heavy lifting for you</h2>
                    <div className='w-full flex justify-start lg:justify-center items-center'>
                        <p className='text-start lg:text-center w-[85%]'>At Prospera Hospitality, we create simple, tailored strategies that address your hotel’s unique needs. Our data-driven insights empower you to optimize pricing and maximize occupancy for sustainable revenue growth.</p>
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory p-5 gap-4 w-[90%] lg:w-[80%] mx-auto hide-scrollbar-x">
                {cardData.map((card, index) => (
                    <div 
                        key={index} 
                        className="relative flex-none w-[calc(90%-16px)] md:w-[calc(45%-16px)] lg:w-[calc(100%/4-16px)] 
                                  flex flex-col snap-start cursor-default 
                                   overflow-hidden bg-gray-100 border shadow-lg py-10 px-2 gap-5 rounded"
                    >
                        <span>{card.icon}</span>
                        <h2 className="text-xl font-bold mt-4 text-[#800000]">{card.heading}</h2>
                        <p className="text-gray-600 mt-2">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCards;
