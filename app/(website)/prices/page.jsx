import React from 'react'
import Landing from '@/_components/Home/Landing'
import Prices from '@/_components/Prices/Prices'
import Cards from '@/_components/Prices/Cards'
import Accordian from '@/_components/Prices/Accordian'
import Rm from '@/_components/Prices/Rm'
// import Offer from '@/_components/Prices/Offer'

const prices = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": " Transparent Pricing Options",
      "description": "Explore our flexible pricing options and discover how our expert services can optimize your bookings, streamline management, and ultimately boost your bottom line. Let’s take your hotel to new heights together!"
    }
  ]
  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing content={revenuedata} />
      <Prices />
      {/* <Offer /> */}
      <Cards />
      <Rm />
      <Accordian />
    </div>

  )
}

export default prices