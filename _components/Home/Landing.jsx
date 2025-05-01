import { MoveDown } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import IMAGES from '@/public';
import Image from 'next/image';
import "@/styles/landing.css"

const Landing = (props) => {
    return (
        <div className="relative w-full h-[45rem] md:h-full flex justify-center items-center">
            {/* Background Image */}
            <Image
                src={IMAGES.landingBg}
                alt="landing-bg"
                fill
                className="w-full h-full object-cover opacity-40"
            />

            {/* Content Section */}
            <div className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh] py-10 lg:p-0 flex justify-center items-center">
                <div className="relative w-[90%] lg:w-[80%] mx-auto flex justify-center items-center h-full">

                    {props.content && props.content.map((e, i) => (
                        <div key={i} className="flex flex-col gap-6 md:gap-8 lg:gap-10 justify-start lg:justify-center items-center">
                            {/* Title */}
                            <div className="w-full flex justify-start items-start lg:justify-center lg:items-center">
                                <h1 className="text-start lg:text-center justify-start items-start text-5xl md:text-6xl lg:text-8xl text-[#800000] font-bold w-[95%] md:w-[80%] lg:w-[90%] flex gap-4 flex-wrap lg:justify-center lg:items-center">
                                    {e.title.split(" ").map((word, wordIndex) => (
                                        <div key={wordIndex} className="inline-block">
                                            {word.split("").map((char, charIndex) => (
                                                <span
                                                    key={charIndex}
                                                    className="letter inline-flex"
                                                    style={{ '--i': wordIndex * 10 + charIndex }}
                                                >
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                </h1>
                            </div>

                            {/* Description */}
                            <div className="flex justify-start lg:justify-center items-center">
                                <p className="w-full lg:w-[70%] md:w-[80%] text-start lg:text-center text-md md:text-lg lg:text-lg text-gray-500 font-medium fade-in">
                                    {e.description}
                                </p>
                            </div>

                            {/* Button for smaller devices */}
                            <Link href="contact-us" className="w-full flex lg:hidden">
                                <Button radius="full" className="bg-[#800000] text-white font-semibold px-4">
                                    Let’s Get Started!
                                </Button>
                            </Link>
                        </div>
                    ))}

                    {/* Scroll Indicator (Visible on larger screens) */}
                    <div className="absolute bottom-0 right-0 flex-col justify-end hidden lg:flex z-20">
                        <div className="flex flex-col items-center justify-end gap-4 animate-bounce">
                            <span className="transform rotate-90 rounded">
                                Scroll
                            </span>
                            <span>
                                <MoveDown />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 h-20 w-full z-10 bg-gradient-to-t from-white via-white to-transparent"></div>
        </div>
    );
};

export default Landing;
