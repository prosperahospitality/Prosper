'use client'
import { ArrowRight, ChartNoAxesCombined, Laptop, Settings, TabletSmartphone } from 'lucide-react'
import React, { useState } from 'react'
import ContactModal from '@/_components/ContactModal';

const HowWeWork = () => {


    const [modalClicked, setModalClicked] = useState(false);

    const [serviceClicked, setServiceClicked] = useState(false);

    const handleModal = (service) => {
        setModalClicked(true)
        setServiceClicked(service)
    }
    return (
        <div className='w-[90%] lg:w-[80%] mx-auto py-10 px-5 bg-[#800000] rounded-xl'>
            <div className='w-full h-full lg:h-52  flex justify-center items-center flex-col lg:flex-row'>
                <div className='w-full lg:w-[20%] h-full flex justify-center lg:justify-start items-center'>
                    <h2 className='text-white font-bold text-2xl w-full text-center'>How We Work</h2>
                </div>
                <div className='w-full lg:w-[80%] grid grid-cols-2 lg:grid-cols-4 h-full gap-5 py-10'>
                    <div className='w-full h-40 flex justify-evenly items-center flex-col hover:bg-white rounded-xl border bg-gray-100'>
                        <span className='p-5 bg-[#800000] rounded-xl '>
                            <Settings className='text-white' />
                        </span>
                        <h2 className='text-xl font-semibold text-[#800000]'>Prototype</h2>
                        <button className='flex justify-start items-center text-xs font-semibold gap-2 text-center text-gray-500' onClick={(e) => handleModal("Digital Marketing")}>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                    <div className='w-full h-40 flex justify-evenly items-center flex-col hover:bg-white rounded-xl border bg-gray-100'>
                        <span className='p-5 bg-[#800000] rounded-xl '>
                            <Laptop className='text-white' />
                        </span>
                        <h2 className='text-xl font-semibold text-[#800000]'>Design</h2>
                        <button className='flex justify-start items-center text-xs font-semibold gap-2 text-center text-gray-500' onClick={(e) => handleModal("Digital Marketing")}>Explore More
                            <ArrowRight className='size-4' />
                        </button>

                    </div>
                    <div className='w-full h-40 flex justify-evenly items-center flex-col hover:bg-white rounded-xl border bg-gray-100'>
                        <span className='p-5 bg-[#800000] rounded-xl '>
                            <TabletSmartphone className='text-white' />
                        </span>
                        <h2 className='text-xl font-semibold text-[#800000]'>Development</h2>
                        <button className='flex justify-start items-center text-xs font-semibold gap-2 text-center text-gray-500' onClick={(e) => handleModal("Digital Marketing")}>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                    <div className='w-full h-40 flex justify-evenly items-center flex-col hover:bg-white rounded-xl border bg-gray-100 '>
                        <span className='p-5 bg-[#800000] rounded-xl '>
                            <ChartNoAxesCombined className='text-white' />
                        </span>
                        <h2 className='text-xl font-semibold text-[#800000]'>Marketing</h2>
                        <button className='flex justify-start items-center text-xs font-semibold gap-2 text-center text-gray-500' onClick={(e) => handleModal("Digital Marketing")}>Explore More
                            <ArrowRight className='size-4' />
                        </button>
                    </div>
                </div>
            </div>

            <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked} />
        </div>
    )
}

export default HowWeWork