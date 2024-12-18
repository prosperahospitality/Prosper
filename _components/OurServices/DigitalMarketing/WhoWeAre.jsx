'use client'
import IMAGES from "@/public";
import ContactModal from '@/_components/ContactModal';
import React, { useState, useEffect } from "react";

const OurProcessData = [
    {
        id: 1,
        title: "Top Marketing Agency",
        detail1: `As a leading marketing agency specializing in the hospitality industry, Prospera Hospitality is committed to helping hotels achieve exceptional results through innovative and data-driven strategies. We craft tailored digital marketing solutions designed to enhance brand visibility, attract more bookings, and foster lasting guest relationships.`,
        detail2: "With a proven track record of success and a deep understanding of the unique challenges in hotel marketing, we combine creativity and precision to deliver measurable growth. Partner with us and experience the difference a top-tier marketing agency can make for your hotel’s online presence and long-term success.",
        imgSrc: IMAGES.digitalmarketing,
    },
    {
        id: 2,
        title: "Your Business Goal",
        detail1: "At Prospera Hospitality, we focus on aligning our digital marketing expertise with your business goals to drive sustainable growth for your hotel. Whether your aim is to increase direct bookings, enhance brand visibility, boost occupancy rates, or build long-term guest loyalty, we design strategies tailored to your unique needs.",
        detail2: "By understanding your vision and leveraging innovative marketing solutions, we help your hotel stand out in the competitive hospitality landscape. Our results-driven approach ensures measurable success, taking your business to the next level while exceeding your expectations.",
        imgSrc: IMAGES.digitalmarketing,
    },
];

function OurProcessComponent() {

    const [ modalClicked, setModalClicked ] = useState(false);

    const [ serviceClicked, setServiceClicked ] = useState(false);

    const handleModal = (service) => {
        setModalClicked(true)
        setServiceClicked(service)
    }

    return (
        <>
            {/* #Mobile View */}
            <div className="w-[90%] lg:hidden grid grid-cols-1 mt-28 mx-auto gap-10">
                {OurProcessData.map((item) => (
                    <div key={item.id} className="mb-12 flex flex-col gap-5">
                        <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
                        <div className="text-left  flex flex-col gap-5">
                            <h1 className="text-[#800000] text-2xl font-extralight">{item.title}</h1>
                            <p className=" text-sm text-black/60">{item.detail1}</p>
                            <p className=" text-sm text-black/60">{item.detail2}</p>
                            <div>
                                <button className="text-sm py-2 px-4 rounded bg-[#800000] text-white" onClick={(e) => handleModal("Digital Marketing")}>Get In Touch</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* #Pc View */}
            <div className="w-[80%] hidden lg:grid grid-cols-1 mt-10 mx-auto gap-16">
                {OurProcessData.map((item, index) => (
                    <div key={item.id}>
                        {index % 2 === 0 ? (
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
                                </div>
                                <div className="flex flex-col justify-center text-left gap-5">
                                    <h1 className="text-[#800000] text-4xl font-semibold">{item.title}</h1>
                                    <p className=" text-sm text-black/60">{item.detail1}</p>
                                    <p className=" text-sm text-black/60">{item.detail2}</p>
                                    <div>
                                        <button className="text-sm py-2 px-4 rounded bg-[#800000] text-white" onClick={(e) => handleModal("Digital Marketing")}>Get In Touch</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-10">
                                <div className="flex flex-col justify-center text-left gap-5">
                                    <h1 className="text-[#800000] text-4xl font-semibold">{item.title}</h1>
                                    <p className=" text-sm text-black/60">{item.detail1}</p>
                                    <p className="text-sm text-black/60">{item.detail2}</p>
                                    <div>
                                        <button className="text-sm py-2 px-4 rounded bg-[#800000] text-white" onClick={(e) => handleModal("Digital Marketing")}>Get In Touch</button>
                                    </div>
                                </div>
                                <div>
                                    <img src={item.imgSrc} alt={item.title} className="w-full h-auto" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked}/>
        </>
    );
}

export default OurProcessComponent;
