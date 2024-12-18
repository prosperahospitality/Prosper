'use client'
import React, { useState, useEffect } from 'react'
import Landing from '@/_components/Home/Landing'
import TestCard from '@/_components/Testimonials/Testimonials'

const TestimonialsPage = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": "Prospera Success Story.",
      "description": "At Prospera Hospitality, we’ve transformed hospitality through innovation and exceptional service. With Prospera’s support, we’ve created unforgettable guest experiences, earning recognition as leaders in the industry."
    }
  ]

  const [packageReviews, setPackageReviews] = useState([]);

  useEffect(() => {
    const abc = async () => {

      const response1 = await fetch(`/api/reviewApi`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result1 = await response1.json();

      setPackageReviews(result1.result)
    };

    abc();
  }, []);

  return ( 
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing content={revenuedata} />
      <TestCard packageReviews={packageReviews} />
    </div>
  )
}

export default TestimonialsPage


