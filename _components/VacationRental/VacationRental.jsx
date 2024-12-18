import React from 'react'

const VacationRental = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
    <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

      <div className="mt-4 text-center relative">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#800000]">
          Vacation Rental
        </h1>
        <h2 className="text-xl sm:text-2xl mt-4 font-medium text-[#800000]">
        Property Management Services by Prospera Hospitality: Turn Your Property into Profit
        </h2>
        <div className="grid grid-cols-1 gap-0 mt-4">
          <p className="text-base sm:text-lg mt-4 font-normal text-gray-500 text-justify">
          Are you a property owner looking to increase your income? If your property isn’t generating enough revenue, Bigfoot Hospitality can help transform it into a profitable venture. We specialize in turning properties like villas, farmhouses, and barns into successful rental businesses.
          </p>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default VacationRental