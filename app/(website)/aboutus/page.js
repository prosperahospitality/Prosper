import React from 'react'
import Landing from '@/_components/Home/Landing'
import AboutUs from '@/_components/AboutUs/AboutUs'
import Whychooseus from '@/_components/AboutUs/Whychooseus'
import TenPrinciples from '@/_components/AboutUs/TenPrinciples'
import OurValues from '@/_components/AboutUs/OurValues'
import Process from '@/_components/AboutUs/Process'

const aboutus = () => {

  const websitedata = [
    {
      "key": "1",
      "title": "About Us",
      "description": "At Prospera Hospitality, we are passionate about delivering high-quality services tailored to your needs. With a focus on innovation and customer satisfaction, our dedicated team ensures every solution is crafted with precision and expertise. Trust us to help you achieve your goals with professionalism and care."
    }
  ]

  return (
    <div>
      <Landing content={websitedata} />
      <AboutUs />
      <OurValues />
      <Whychooseus />
      <Process />
      <TenPrinciples />
    </div>

  )
}

export default aboutus