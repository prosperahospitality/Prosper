import React from 'react'
import VacationRental from '@/_components/VacationRental/VacationRental'
import Landing from '@/_components/Home/Landing'
import Services from '@/_components/VacationRental/Services'

const vacationrental = () => {

  const websitedata = [
    {
      "key": "1",
      "title": "Vacation Rental",
      "description": "At Prospera Hospitality, We offer end-to-end vacation rental management services, including property listing, marketing, guest handling, maintenance, and maximizing your property's income potential."
    }
  ]

  return (
    <div>
      <Landing content={websitedata} />
      <VacationRental />
      <Services />
    </div>
  )
}

export default vacationrental