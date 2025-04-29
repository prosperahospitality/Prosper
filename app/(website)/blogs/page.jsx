import React from 'react'
import Blogs from '@/_components/Blogs/Blogs'
import Landing from '@/_components/Home/Landing'

const blogs = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": "Blogs",
      "description": "At Prospera Hospitality, we’re transforming the guest experience through innovation and personalized service. By supporting our partners in delivering exceptional stays, we’ve helped set new industry standards and earned recognition as leaders in modern hospitality."
    }
  ]

  return (
    <>
      <Landing content={revenuedata} />
      <Blogs />
    </>
  )
}

export default blogs