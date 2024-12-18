import React from 'react'
import ContactUs from '@/_components/ContactUs/ContactUs'
import Landing from '@/_components/Home/Landing'

const contactus = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": " Contact Us.",
      "description": "At Prospera Hospitality, we're here to help your hotel succeed. Whether you have questions or need personalized strategies for optimizing pricing, maximizing occupancy, or boosting revenue, our team is ready to assist. Reach out to us today and let’s collaborate to achieve your goals!"
    }
  ]

  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing content={revenuedata} />
      <ContactUs />
    </div>
  )
}

export default contactus