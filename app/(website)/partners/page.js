import React from 'react'
import Landing from '@/_components/Home/Landing'
import Partners from '@/_components/Partner/Partners'

const page = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": "Our Partners",
      "description": "At Prospera Hospitality, we empower our partners to deliver exceptional guest experiences through innovative solutions and dedicated support. Together, we’re setting new benchmarks in hospitality and building lasting success across every property we manage."
    }
  ]

  return (
    <div>
      <Landing content={revenuedata} />
      <Partners />
    </div>
  )
}

export default page