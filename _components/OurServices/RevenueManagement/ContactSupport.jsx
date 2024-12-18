import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public'

const ContactSupport = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[90%] lg:w-[80%] flex'>
                <div className='py-4 flex flex-col gap-6'>
                    <div className='text-gray-600 text-4xl'>24 X 7</div>
                    <div className='text-gray-600 text-4xl'>Dedicated Manager</div>
                    <div className='text-gray-500 text-xl'>
                        <p>Our dedicated manager oversees your property 24/7, handling everything from initial inquiries to
                            booking confirmations and guest checkouts. With a focus on seamless service, we ensure every
                            aspect of guest management is expertly managed for an exceptional experience.</p>
                    </div>
                    <div className='hidden md:block'>
                        <Image
                            alt='image'
                            src={IMAGES.section4}
                            width={600}
                            height={600}
                            className='object-scale-down w-[100%] h-[100%] mx-auto'
                        />
                    </div>
                </div>
            </div>
            <div className='block lg:hidden'>
                <Image
                    alt='image'
                    src={IMAGES.mobilesection4}
                    width={600}
                    height={600}
                    className='object-scale-down w-[100%] h-[100%] mx-auto'
                />
            </div>
        </div>
    )
}

export default ContactSupport