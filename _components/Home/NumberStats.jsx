'use client'
import React, { useState, useEffect, useRef } from 'react';

const NumberStats = () => {
    const [occupancyRate, setOccupancyRate] = useState(0);
    const [repeatCustomerRate, setRepeatCustomerRate] = useState(0);
    const [customerSatisfaction, setCustomerSatisfaction] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const animateNumber = (start, end, duration, setter) => {
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressPercentage = Math.min(progress / duration, 1);
            const easedProgress = easeOut(progressPercentage);
            const currentValue = Math.floor(easedProgress * (end - start) + start);

            setter(currentValue);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        
                        
                        setTimeout(() => {
                            animateNumber(0, 60, 6000, setOccupancyRate);
                            animateNumber(0, 72, 6000, setRepeatCustomerRate);
                            animateNumber(0, 86, 6000, setCustomerSatisfaction);
                        }, 1000);
                    }
                });
            },
            {
                root: null, 
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1 
            }
        );
    
        if (statsRef.current) {
            observer.observe(statsRef.current);
        }
    
        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);
    
    

    return (
        <div ref={statsRef} className="w-full flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-4 lg:gap-4 p-4 w-[90%] lg:[80%]">
                
                {/* First stat */}
                <div className="flex justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center h-44 lg:h-48 rounded-md">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-4 sm:gap-8 justify-center items-start">
                            <div className="border-l-4 h-20 mt-4 border-[#800000]"></div>
                            <div>
                                <div className="text-gray-600 text-6xl lg:text-8xl mt-4">{occupancyRate}%</div>
                                <p className="text-gray-500 pt-2 text-sm sm:text-base">Increase in Occupancy Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second stat */}
                <div className="flex justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center h-44 lg:h-48 rounded-md">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-4 sm:gap-8 justify-center items-start">
                            <div className="border-l-4 h-20 mt-4 border-[#800000]"></div>
                            <div>
                                <div className="text-gray-600 text-6xl lg:text-8xl mt-4">{repeatCustomerRate}%</div>
                                <p className="text-gray-500 pt-2 text-sm sm:text-base">Increase in Repeat Customer Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third stat */}
                <div className="flex justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center h-44 lg:h-48 rounded-md">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-4 sm:gap-8 justify-center items-start">
                            <div className="border-l-4 h-20 mt-4 border-[#800000]"></div>
                            <div>
                                <div className="text-gray-600 text-6xl lg:text-8xl mt-4">{customerSatisfaction}%</div>
                                <p className="text-gray-500 pt-2 text-sm sm:text-base">Increase in Customer Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NumberStats;
