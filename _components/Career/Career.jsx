import React from 'react'

const Career = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 lg:mt-16">
      <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-12 lg:gap-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
          {/* Left Section */}
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="text-lg lg:text-xl text-gray-600">
              Grow with Us
            </div>
            <div className="text-2xl lg:text-4xl text-[#800000] font-semibold">
              The Prospera Culture
            </div>
            <div className="text-lg lg:text-2xl text-[#800000] font-semibold">
              We Create Exceptional Hospitality Experiences and Industry Leaders
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col gap-4 lg:gap-2 mt-4 lg:mt-12 text-sm lg:text-base">
            <p>
              Prospera Hospitality is renowned for its unwavering commitment to excellence, with our exceptional services and innovative solutions standing as a testament to our legacy of quality and trust. From creating memorable guest experiences to crafting tailored hospitality solutions, we consistently set new benchmarks in the industry.
            </p>
            <p>
              Your bold ambition is just the beginning. At Prospera Hospitality, our forward-thinking teams, cutting-edge strategies, and customer-centric culture will elevate your potential to new heights. We empower you to move beyond the ordinary, fostering a shift from a task-oriented mindset to one of transformation and innovation.
            </p>
            <p>
              At the core of Prospera Hospitality lies a culture that inspires individuals to think big, challenge the status quo, and embrace new possibilities. We don’t just seek employees; we seek visionaries—individuals who, like us, are driven by a passion for excellence and feel confident to explore fresh ideas and redefine industry standards.
            </p>
            <p>
              This is what makes Prospera Hospitality a trusted name in the industry, a preferred choice for our clients, and the perfect launchpad for your career in the world of hospitality.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Career
