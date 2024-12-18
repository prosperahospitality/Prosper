import React from 'react'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const RefundPolicy = () => {

    return (
        <div className='mt-16'>
            <div className=''>
                <div className="text-2xl text-[#800000] text-center font-extralight mt-4 md:text-2xl lg:text-4xl lg:font-bold">
                    {'Refund Policy'}
                </div>
                <div className='mt-10'>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"Refund Policy"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"As a part of our agreement, we have refund and cancellation policies with different hotels  However, we have a standard refund policy for hotels, which can be negotiated by the hoteliers. These policies can also change based on demand and forecast."}
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                <li>{`If cancelled 15 days before check-in date: 100 % Refund.​`}</li>
                                <li>
                                    {`If cancelled within 15 days and before 7 days to check-in date:50 % Refund.`}
                                </li>
                                <li>
                                    {`If cancelled within 7 days before check-in date then no refund will be provided.`}
                                </li>
                            </ul>


                            <div className="w-[90%] lg:w-[80%] flex gap-5 flex-start mb-6 mt-6">
                            <Link href="/tearms-and-conditions" className="flex px-4 py-2 gap-[5px] md:gap-2 border-gray-500 text-gray-500 shadow-lg border rounded font-semibold">
    Terms & Condition
    <span className="flex justify-center items-center">
        <MoveUpRight className="size-4" />
    </span>
</Link>

<Link href="/policies/privacy-policy" className="flex justify-center gap-[5px] md:gap-2 items-center px-4 py-2 border-white bg-gray-500 text-white shadow-lg border rounded font-semibold">
    Privacy Policy
    <span className="flex justify-center items-center">
        <MoveUpRight className="size-4" />
    </span>
</Link>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RefundPolicy