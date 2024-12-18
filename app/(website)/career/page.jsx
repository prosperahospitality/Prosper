import React from 'react'
import Career from '@/_components/Career/Career'
import Landing from '@/_components/Home/Landing'
import Whyworkwithus from '@/_components/Career/Whyworkwithus'
import Perksandbenefits from '@/_components/Career/Perksandbenefits'
import OurValues from '@/_components/AboutUs/OurValues'
import Openings from '@/_components/Career/Openings'
import Howtoapply from '@/_components/Career/Howtoapply'

const career = () => {

  const websitedata = [
    {
      "key": "1",
      "title": "Careers",
      "description": "At Prospera Hospitality, we are passionate about creating exceptional experiences—not just for our clients but also for our team members. Join a company that values innovation, collaboration, and professional growth. Here, your unique skills and talents will be nurtured as you work alongside a dedicated team committed to excellence. Together, we craft solutions with precision, expertise, and a shared passion for success. Build your future with us and make a meaningful impact every step of the way.."
    }
  ]

  return (
    <div>
      <Landing content={websitedata} />
      <Career />
      <Whyworkwithus />
      <Perksandbenefits />
      <OurValues />
      <Howtoapply />
      <Openings />
    </div>
  )
}

export default career