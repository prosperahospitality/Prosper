import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

        <div className="mt-4 text-center relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#800000]">
            Expanding Your Hotel&apos;s Visibility, Wherever Guests Are Looking
          </h1>
          <h2 className="text-xl sm:text-2xl mt-4 font-medium text-[#800000]">
            Your Vision, Our Expertise
          </h2>
          <div className="grid grid-cols-2 gap-11 mt-4">
            <p className="text-base sm:text-lg mt-4 font-normal text-gray-500 text-justify">
              At Prospera Hospitality, we are dedicated to revolutionizing the way hotels connect with their guests online. Our mission is to empower hotels by increasing their online visibility, driving more bookings, and creating seamless digital experiences. With a passion for hospitality and technology, we aim to bridge the gap between exceptional hotel services and the digital world.
            </p>
            <p className="text-base sm:text-lg mt-4 font-normal text-gray-500 text-justify">
              Prospera Hospitality is your trusted partner for exceptional hotel bookings and website development services. We specialize in offering seamless hotel reservations for travelers while helping hotel owners elevate their online presence with customized website solutions.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
