'use client'
import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import Image from 'next/image'
import IMAGES from "@/public/index";
import ContactModal from '@/_components/ContactModal';

const Rm = () => {

    const [modalClicked, setModalClicked] = useState(false);

    const [serviceClicked, setServiceClicked] = useState(false);

    const handleModal = (service) => {
        setModalClicked(true)
        setServiceClicked(service)
    }

    return (
        <div className='w-full'>
            <div className='w-[90%] lg:w-[80%] m-auto bg-gray-100 rounded-2xl h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:pl-4'>
                    <div className='p-3 md:py-6 lg:py-0 lg:p-3 flex justify-center item-center flex-col md:gap-5 gap-10 lg:gap-10'>
                        <h2 className='text-3xl lg:text-5xl font-semibold text-start text-gray-600'>Understand the secret
                            of Growing a Business!</h2>
                        <p className='text-gray-600 font-normal'>Get tips on how to grow your hotel business from the
                            pros of ths industry, understand the value of strategic
                            pricing and the skill of managing the property online
                            on multiple platforms </p>
                        <div className="flex justify-start gap-4 text-gray-500">
                            <Button variant="shadow" color="default" className="bg-[#800000] text-white" radius="none" size="md" onClick={(e) => handleModal("Prices")}>
                                Schedule a Call
                            </Button>
                        </div>
                    </div>

                    <div className='flex relative overflow-hidden h-[15rem] lg:h-[25rem] md:h-full' >
                        <div className='w-[65%] md:w-[71%] md:h-[17rem] lg:w-[55%] h-[14rem] lg:h-[20rem] overflow-hidden rounded-full absolute -bottom-10 -right-10'>
                            <Image
                                alt="Mountains"
                                src={IMAGES.testone}
                                fill
                                style={{
                                    objectFit: 'cover',
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        </div>
                        <div className='w-[68%] md:h-[19rem] md:w-[71%] h-[15rem] lg:h-[24rem] overflow-hidden rounded-full absolute -bottom-[50%] right-[3.4rem] md:right-[4.4rem] lg:right-[8.4rem]'>
                            <Image
                                alt="Mountains"
                                src={IMAGES.test}
                                fill
                                style={{
                                    objectFit: 'cover',
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked}/>
                
        </div>
    )
}

export default Rm
