import React from 'react'

const Process = () => {
    return (
        <div className='relative flex w-full justify-center item-center'>
            <div className='w-[90%] lg:w-[80%] mx-auto z-30'>
                <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-5 py-'>
                    <div className='flex flex-col w-full gap-2'>
                        <span className='text-[#800000] text-lg font-semibold'>What We Offer</span>
                        <h2 className='text-3xl  font-bold w-full lg:w-[70%]'>Elevate Your Brand with Our Expertise</h2>
                        <p className='text-gray-500 text-sm'>At Prospera, we specialize in driving growth through tailored digital marketing strategies. Our team leverages the power of platforms like Google Ads, Meta, Amazon, and LinkedIn to connect your brand with the right audience. With data-driven insights and innovative approaches, we transform your marketing efforts into measurable results, ensuring your business thrives in today’s competitive landscape.</p>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-5'>
                        <div className='p-5 h-52 bg-white border shadow-xl rounded-xl flex flex-col justify-between gap-2'>
                            <div className='border h-full w-full rounded-xl flex justify-center items-center'>
                                <img src="/img/google.webp" className='h-[6rem] w-[6rem]' alt='google' />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <h2 className='text-xl font-semibold text-[#800000] text-center'>Google Ads</h2>
                                <p className="text-xs md:text-sm text-gray-500 text-center">Reach Customers Actively Searching</p>
                            </div>
                        </div>
                        <div className='p-5 h-52 bg-white border shadow-xl rounded-xl flex flex-col justify-between gap-2'>
                            <div className='border h-full w-full rounded-xl flex justify-center items-center'>
                                <img src="/img/meta.png" className='h-[6rem] w-[6rem]' alt='meta' />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <h2 className='text-xl font-semibold text-[#800000] text-center'>Meta Ads</h2>
                                <p className="text-xs md:text-sm text-gray-500 text-center">Engage Audiences Where They Connect</p>
                            </div>
                        </div>
                        <div className='p-5 h-52 bg-white border shadow-xl rounded-xl flex flex-col justify-between gap-2'>
                            <div className='border h-full w-full rounded-xl flex justify-center items-center'>
                                <img src="/img/amazon.jpg" className='h-[6rem] w-[8rem]' alt='amazon' />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <h2 className='text-xl font-semibold text-[#800000] text-center'>Amazon Ads</h2>
                                <p className="text-xs md:text-sm text-gray-500 text-center">Drive Conversions on the World’s Largest Marketplace</p>
                            </div>
                        </div>
                        <div className='p-5 h-52 bg-white border shadow-xl rounded-xl flex flex-col justify-between gap-2'>
                            <div className='border h-full w-full rounded-xl flex justify-center items-center'>
                                <img src="/img/linked.png" className='h-[4rem] w-[4rem]' alt='linked' />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <h2 className='text-xl font-semibold text-[#800000] text-center'>LinkedIn Ads</h2>
                                <p className="text-xs md:text-sm text-gray-500 text-center">Connect with Professionals and Decision-Makers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[20%] lg:top-0 lg:bottom-0 lg:my-auto right-0 w-[70%] lg:w-[50%] h-48 lg:h-52 bg-[#800000] rounded-l-2xl'></div>
        </div>
    )
}

export default Process