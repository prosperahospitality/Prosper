import Landing from '@/_components/Home/Landing'
import React from 'react'
import NumberStats from '@/_components/Home/NumberStats'
import HomeCards from '@/_components/Home/HomeCards'
import Allpackages from '@/_components/Home/Allpackages'
import OurOffers from '@/_components/Home/OurOffers'
import Blogs from '@/_components/Home/Blogs'
import InstagramFeed from '@/_components/Home/InstagramFeed'
import ContactForm from '@/_components/Home/ContactForm'
import Testimonial from '@/_components/Testimonial'

const Home = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": " Growth Made Easy.",
      "description": "At Prospera Hospitality, we create simple, tailored strategies that address your hotel’s unique needs. Our data-driven insights empower you to optimize pricing and maximize occupancy for sustainable revenue growth."
    }
  ]

  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing content={revenuedata} />
      <HomeCards />
      <NumberStats />
      <Allpackages />
      <OurOffers />
      <Blogs />
      <InstagramFeed />
      <Testimonial />
      <ContactForm />
    </div>
  )
}

export default Home