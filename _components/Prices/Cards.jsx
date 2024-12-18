"use client"
import IMAGES from '@/public'
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import ContactModal from '@/_components/ContactModal';

const CardData = [
    {
        img: IMAGES.addOne,
        title: "Social Media Management",
        para: "Boost your online presence and engage your guests with tailored social media strategies."
    },
    {
        img: IMAGES.addTwo,
        title: "SEO Optimization",
        para: "Enhance your visibility on search engines and attract more direct bookings with expert SEO services."
    },
    {
        img: IMAGES.addThree,
        title: "Email Marketing Campaigns",
        para: "Connect with past and potential guests through targeted email campaigns that drive bookings."
    }
];

const Cards = () => {

      const [modalClicked, setModalClicked] = useState(false);
    
      const [serviceClicked, setServiceClicked] = useState('Standard');
    
      const handleModal = (service) => {
        setModalClicked(true)
        setServiceClicked(service)
      }

    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <div className='w-[90%] lg:w-[80%] mx-auto'>
                <div className='w-full justify-start lg:justify-center items-center flex flex-col gap-10'>

                    <h2 className='text-3xl lg:text-4xl font-semibold text-[#800000] text-start lg:text-center w-full'>Prospera for Everything</h2>
                    <div className='w-full flex justify-start lg:justify-center items-center'>
                        <p className='text-start lg:text-center w-[85%]'>At Prospera, By optimizing your revenue management, enhancing your online presence, and effectively marketing your offerings, you can create a strong foundation for success.</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center  gap-4'>
                {CardData.map((item, index) => (
                    <div key={index} className="border p-3 rounded-lg shadow-md flex flex-col gap-4 w-full h-96">
                        <div className='relative flex w-full h-[50%]'>
                            <Image src={item.img} alt={item.title} fill className="w-full h-full object-cover border rounded-xl" />
                        </div>
                        <div className='w-full h-[50%] flex flex-col gap-2 justify-between ' >

                            <div className='flex flex-col gap-2'>
                                <div>
                                    <span className='justify-center items-center py-1 px-2 inline-flex rounded-xl text-xs bg-purple-300 font-medium'>Add-On</span>
                                </div>
                                <h3 className="text-xl font-medium">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.para}</p>
                            </div>
                            <button className='flex justify-center items-center gap-2 w-[50%] p-3 border text-[#800000] border-[#800000] hover:bg-[#800000] text-sm font-semibold hover:text-white rounded-xl' onClick={(e) => handleModal(item.title)}>Contact Now
                                <span><MoveUpRight className='size-4' /></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked} />

        </div>
    )
}

export default Cards;
