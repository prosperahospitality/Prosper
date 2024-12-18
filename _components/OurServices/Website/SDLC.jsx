import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public'

const SDLC = () => {
    return (
        <div className='w-full flex justify-center items-center overflow-hidden'>
            <div className='flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-8'>
                {/* Section Header */}
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                    <div className='text-xl font-semibold'>
                        SDLC Phases
                    </div>
                    <div className='text-5xl font-bold text-center'>
                        Software Development Life Cycle
                    </div>
                    <div className='text-lg font-semibold pt-2 text-center'>
                        Follow these essential phases to successfully complete a software project.
                    </div>
                </div>

                {/* SDLC Steps Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8'>
                    {/* Phase 1 - Planning */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] justify-center items-center'>
                            <Image
                                alt="planning"
                                src={IMAGES.icon1}
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='text-2xl font-semibold'>
                                Planning
                            </div>
                            <div className='text-wrap'>
                                Define project scope, objectives, and feasibility.
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='hidden lg:flex justify-center items-center'>
                        <div className='flex relative w-[100px] h-[100px]'>
                            <Image
                                alt="arrow"
                                src={IMAGES.curvearrow}
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                    </div>

                    {/* Phase 2 - Analysis */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] justify-center items-center'>
                            <Image
                                alt="analysis"
                                src={IMAGES.icon2} // Replace with appropriate image
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='text-2xl font-semibold'>
                                Analysis
                            </div>
                            <div className='text-wrap'>
                                Gather and analyze requirements from stakeholders.
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='hidden lg:flex justify-center items-center'>
                        <div className='flex relative w-[100px] h-[100px]'>
                            <Image
                                alt="arrow"
                                src={IMAGES.curvearrow}
                                fill
                                quality={100}
                                className='object-scale-down transform scale-y-[-1]'
                            />
                        </div>
                    </div>

                    {/* Phase 3 - Design */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] justify-center items-center'>
                            <Image
                                alt="design"
                                src={IMAGES.icon3} // Replace with appropriate image
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='text-2xl font-semibold'>
                                Design
                            </div>
                            <div className='text-wrap'>
                                Design the system architecture and UI/UX.
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='hidden lg:flex justify-center items-center'>
                        <div className='flex relative w-[100px] h-[100px]'>
                            <Image
                                alt="arrow"
                                src={IMAGES.curvearrow}
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                    </div>

                    {/* Phase 4 - Development */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] justify-center items-center'>
                            <Image
                                alt="development"
                                src={IMAGES.icon4}
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='text-2xl font-semibold'>
                                Development
                            </div>
                            <div className='text-wrap'>
                                Code and implement the design into a working system.
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='hidden lg:flex justify-center items-center'>
                        {/* <div className='flex relative w-[100px] h-[100px]'>
                            <Image
                                alt="arrow"
                                src={IMAGES.curvearrow}
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div> */}
                    </div>

                    {/* Phase 5 - Testing */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] justify-center items-center'>
                            <Image
                                alt="testing"
                                src={IMAGES.icon1} // Replace with appropriate image
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='text-2xl font-semibold'>
                                Testing
                            </div>
                            <div className='text-wrap'>
                                Test the system to find and fix defects.
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='hidden lg:flex justify-center items-center'>
                        <div className='flex relative w-[100px] h-[100px]'>
                            <Image
                                alt="arrow"
                                src={IMAGES.curvearrow}
                                fill
                                quality={100}
                                className='object-scale-down transform scale-y-[-1]'
                            />
                        </div>
                    </div>

                    {/* Phase 6 - Deployment */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] justify-center items-center'>
                            <Image
                                alt="deployment"
                                src={IMAGES.icon2}
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='text-2xl font-semibold'>
                                Deployment
                            </div>
                            <div className='text-wrap'>
                                Deploy the system into a live environment.
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className='hidden lg:flex justify-center items-center'>
                        <div className='flex relative w-[100px] h-[100px]'>
                            <Image
                                alt="arrow"
                                src={IMAGES.curvearrow}
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                    </div>

                    {/* Phase 7 - Maintenance */}
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] justify-center items-center'>
                            <Image
                                alt="maintenance"
                                src={IMAGES.icon3} // Replace with appropriate image
                                fill
                                quality={100}
                                className='object-scale-down'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center text-center gap-4'>
                            <div className='text-2xl font-semibold'>
                                Maintenance
                            </div>
                            <div className='text-wrap'>
                                Provide ongoing support and updates.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SDLC
