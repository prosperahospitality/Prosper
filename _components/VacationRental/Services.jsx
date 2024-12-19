'use client'
import React, { useState } from 'react'
import { KeyRound, ShieldCheck, ChartNoAxesCombined, Phone, ChevronRight } from "lucide-react"
import ContactModal from '@/_components/ContactModal'


const Services = () => {

    const [modalClicked, setModalClicked] = useState(false);

    const [serviceClicked, setServiceClicked] = useState(false);

    const handleModal = (service) => {
        setModalClicked(true)
        setServiceClicked(service)
    }

    const services = [
        {
            id: 1,
            title: "Comprehensive Turnkey Services",
            desc: "For property owners new to hospitality management, we offer complete turnkey solutions. Simply entrust your property to us, and we'll handle everything to make it rental-ready.",
            icon: (<>
                <KeyRound className='size-10' />
            </>)
        },
        {
            id: 2,
            title: "Caretaker and Security Services",
            desc: "Providing onsite caretakers and security personnel if needed, ensuring your property is safe and well-maintained.",
            icon: (<>
                <ShieldCheck className='size-10' />
            </>)
        },
        {
            id: 3,
            title: "Sales and Hotel Marketing",
            desc: "Expert marketing strategies to promote your property and attract guests, maximizing occupancy and revenue.",
            icon: (<>
                <ChartNoAxesCombined className='size-10' />
            </>)
        },
        {
            id: 4,
            title: "Front Office Management",
            desc: "Handling guest check-ins, check-outs, and inquiries with professionalism and efficiency.",
            icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 22c-1.066-1.245-2.466-2-4-2s-2.934.755-4 2m4-9c-1.268 0-2.609.22-3.66.513c-.791.22-1.428 1.229-1.33 2.047c.036.303.297.44.572.44h8.836c.275 0 .536-.137.572-.44c.098-.819-.539-1.826-1.33-2.047A14.2 14.2 0 0 0 12 13m9-3a2 2 0 0 0-2 2v1a2 2 0 0 1-2 2M3 10a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2m5 1v6m.82-12h-1.64c-1.402 0-2.103 0-2.61-.424c-.507-.423-.677-1.15-1.017-2.606c-.535-2.288-.802-3.432-.241-4.2C7.873 2 8.976 2 11.18 2h1.64c2.204 0 3.307 0 3.868.77c.561.768.294 1.912-.24 4.2c-.34 1.455-.51 2.183-1.018 2.606c-.507.424-1.208.424-2.61.424M12 10v3" color="currentColor" /></svg>
            </>)
        },
        {
            id: 5,
            title: "Reservation Management",
            desc: "Efficiently managing reservations to optimize occupancy and ensure seamless booking processes.",
            icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 2048 2048"><path fill="currentColor" d="M896 512v128H512V512zM512 896V768h384v128zm0 256v-128h256v128zM384 512v128H256V512zm0 256v128H256V768zm-128 384v-128h128v128zM128 128v1792h640v128H0V0h1115l549 549v219h-128V640h-512V128zm1024 91v293h293zm640 805h256v1024H896V1024h256V896h128v128h384V896h128zm128 896v-512h-896v512zm0-640v-128h-896v128z" /></svg>
            </>)
        },
        {
            id: 6,
            title: "Housekeeping Services",
            desc: "Maintaining cleanliness and comfort for guests, ensuring your property is always in top condition.",
            icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 32"><path fill="currentColor" d="M26 20h-6v-2h6zm4 8h-6v-2h6zm-2-4h-6v-2h6z" /><path fill="currentColor" d="M17.003 20a4.9 4.9 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.7 5.7 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2m-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848M15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.6 16.6 0 0 1 10 24H8a17.3 17.3 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13 13 0 0 0 17.596 28Z" /></svg>
            </>)
        },
        {
            id: 7,
            title: "Communication Services",
            desc: "Our specialists manage all guest communications on your behalf, ensuring prompt responses and excellent guest satisfaction.",
            icon: (<>
                <Phone className='size-10' />
            </>)
        },
        {
            id: 8,
            title: "Villa Rental Services",
            desc: "Our villa rental services are designed to let you relax and focus on other aspects of your business while we handle the entire operation of your property.",
            icon: (<>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M3 19V9.375q0-.625.35-1.137t.925-.738L14.65 3.525q.5-.2.925.1T16 4.45V12h1q0-.825.588-1.412T19 10t1.413.588T21 12v7q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19m2 0h4v-5q0-.825.588-1.412T11 12h3V5.9L5 9.375zm6 0h3v-2q0-.425.288-.712T15 16t.713.288T16 17v2h3v-5h-8zm4-2.5" /></svg>
            </>)
        }
    ];


    return (
        <div className="w-full flex justify-center items-center mt-16">
            <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

                <div className="mt-4 text-center relative">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#800000]">
                        Our Servies Includes
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-11 mt-16">

                        {services && services.map((e, i) => (
                            <div key={e.id || i} className='border p-6 rounded-xl border-gray-300 bg-white hover:shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:scale-105 transition-transform duration-300'>
                                <div className=' flex flex-col justify-start gap-7 items-center'>
                                    <div className='flex justify-center items-center text-[#800000]'>
                                        {e.icon}
                                    </div>
                                    <div className='font-bold text-gray-600 text-lg'>
                                        <p>{e.title}</p>
                                    </div>
                                </div>
                                <div className='text-center text-gray-500 mt-3'>
                                    <p>{e.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='flex justify-start items-start text-start mt-16'>
                        <button type="button" className="text-white bg-[#800000] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex justify-center items-center" onClick={(e) => handleModal("Vacation Rental")}>Contact Us <ChevronRight className='text-white size-5' /></button>
                    </div>
                </div>

            </div>

            <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked} />

        </div>
    )
}

export default Services