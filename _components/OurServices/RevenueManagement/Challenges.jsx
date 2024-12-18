import { Star } from 'lucide-react'
import React from 'react'

const Challenges = () => {

    const challengedata = [
        {
            key: "1",
            "title": "Limited Online Visibility",
            "star": <Star className='fill-[#800000] size-5 lg:w-[1.50rem] lg:h-[1.50rem]' />,
            "description": "We list your property on multiple Online Travel Agencies, significantly enhancing your online presence and attracting more guests."
        },
        {
            key: "2",
            "title": "Delayed Payments",
            "star": <Star className='fill-[#800000] size-5 lg:w-[1.50rem] lg:h-[1.50rem]' />,
            "description": "Our partnerships with OTAs enable us to fast-track payments, ensuring you receive funds promptly."
        },
        {
            key: "3",
            "title": "Revenue Optimization",
            "star": <Star className='fill-[#800000] size-5 lg:w-[1.50rem] lg:h-[1.50rem]' />,
            "description": "Our expertise in online distribution helps strategically price your property, maximizing revenue across various platforms."
        },
        {
            key: "4",
            "title": "Time-Consuming Tasks",
            "star": <Star className='fill-[#800000] size-5 lg:w-[1.50rem] lg:h-[1.50rem]' />,
            "description": "We handle all online management tasks, allowing you to focus on welcoming guests and providing exceptional service."
        }
    ]

    return (
        <div className='w-full'>
            <div className='w-[90%] lg:w-[80%] m-auto'>
                <div className='text-3xl lg:text-5xl font-semibold text-start w-full lg:w-[45%]'>
                    <h1 className='text-gray-600'>Challenges That
                        We Solve</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                    {challengedata && challengedata.map((e, i) => (
                        <div key={i} className=' w-full rounded-2xl shadow-[rgba(0,0,0,0.24)_0px_3px_8px]'>
                            <div className='w-[90%] m-auto flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <div className='text-[#800000] text-xl font-bold flex justify-end flex-col'>
                                        <h2>{e.title}</h2>
                                    </div>
                                    <div className='bg-gray-100 text-[#800000] w-9 h-10 md:w-11 md:h-12 rounded-b-full flex justify-center items-center'>
                                        {e.star}
                                    </div>
                                </div>
                                <div className='text-gray-600 font-normal pb-7'>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Challenges
