"use client";
import React from "react";
import { motion } from "framer-motion";

const OurClients = () => {

    const clients = [
        {
            src: "/img/clients/client1.png",
            className: "object-fill h-20 w-28"
        },
        {
            src: "/img/clients/client2.png",
            className: "object-fill h-[56px] w-16"
        },
        {
            src: "/img/clients/client3.png",
            className: "object-fill h-16 w-28"
        },
        {
            src: "/img/clients/client4.png",
            className: "object-fill h-20 w-28"
        },
        {
            src: "/img/clients/client5.png",
            className: "object-fill h-[55px] w-[90px]"
        },
        {
            src: "/img/clients/client6.png",
            className: "object-fill h-[55px] w-28"
        },
        {
            src: "/img/clients/client7.png",
            className: "object-fill h-[55px] w-28"
        },
        {
            src: "/img/clients/client8.jpeg",
            className: "object-fill h-[52px] w-[85px]"
        },
        {
            src: "/img/clients/client9.png",
            className: "object-fill h-[61px] w-[61px]"
        },
        {
            src: "/img/clients/client10.png",
            className: "object-fill h-[65px] w-28"
        },
        {
            src: "/img/clients/client11.png",
            className: "object-fill h-[65px] w-28"
        },
        {
            src: "/img/clients/client12.png",
            className: "object-fill h-[65px] w-28"
        },
        {
            src: "/img/clients/client13.png",
            className: "object-fill h-[55px] w-[110px]"
        },
        {
            src: "/img/clients/client14.png",
            className: "object-fill h-[55px] w-[180px]"
        },
        {
            src: "/img/clients/client15.png",
            className: "object-fill h-20 w-28"
        },
        {
            src: "/img/clients/client16.png",
            className: "object-fill h-[75px] w-[90px]"
        },
        {
            src: "/img/clients/client17.png",
            className: "object-fill h-[65px] w-[80px]"
        },
        {
            src: "/img/clients/client18.png",
            className: "object-fill h-20 w-28"
        },
        {
            src: "/img/clients/client19.png",
            className: "object-fill h-[65px] w-[110px]"
        },
        {
            src: "/img/clients/client20.jpg",
            className: "object-fill h-[65px] w-[100px]"
        },
        {
            src: "/img/clients/client21.png",
            className: "object-fill h-20 w-[100px]"
        },
        {
            src: "/img/clients/client22.png",
            className: "object-fill h-[85px] w-28"
        },
        {
            src: "/img/clients/client23.png",
            className: "object-fill h-[85px] w-[85px]"
        },
    ]
  // Marquee animation for left-to-right (or right-to-left) movement
  const marqueeVariants = {
    animate: {
      // Animate from 0% to -50% (with duplicated content, this ensures a seamless loop)
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 90, // Adjust this value for faster or slower scroll
        },
      },
    },
  };

  // Marquee animation for the reverse direction
  const marqueeVariants1 = {
    animate: {
      // Animate from -50% to 0% for the opposite scrolling effect
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 90,
        },
      },
    },
  };

  // Create a list of client items for both marquees (they can be the same)
  const items = clients.map((item, index) => (
    <div
      key={index}
      className="flex-shrink-0 w-[140px] h-[72px] flex justify-center items-center border border-gray-300 mx-2 rounded-2xl"
    >
      <img src={item.src} alt={index} className={item.className}/>
    </div>
  ));

  return (
    <div className="p-0 bg-red-100 w-full h-full">
      {/* Set relative and overflow-hidden on the container to clip overflowing content */}
      <div className="w-full mx-auto relative overflow-hidden">
        <div className="bg-white rounded-2xl flex flex-col justify-center items-center p-5 m-5 gap-5">
          <p className="text-2xl font-semibold">Our Clients</p>
          <p>
            More than 5,000+ clients using Prospera Hospitality to improve their
            hotel business
          </p>
          {/* First marquee */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: "max-content" }} // Ensure the div sizes to its content
              variants={marqueeVariants}
              animate="animate"
            >
              {items}
              {items}
            </motion.div>
          </div>
          {/* Second marquee (reverse direction) */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: "max-content" }}
              variants={marqueeVariants1}
              animate="animate"
            >
              {items}
              {items}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
