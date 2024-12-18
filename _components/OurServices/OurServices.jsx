'use client'
import React, { useState } from 'react'
import { Button } from "@nextui-org/button";
import Image from 'next/image';
import { ArrowRight } from "lucide-react"
import { useRouter } from 'next/navigation';
import ContactModal from '@/_components/ContactModal';

const OurServices = () => {

  const router = useRouter()

  const [modalClicked, setModalClicked] = useState(false);

  const [serviceClicked, setServiceClicked] = useState(false);

  const handleModal = (service) => {
    setModalClicked(true)
    setServiceClicked(service)
  }

  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

        <div className='hidden md:flex md:flex-col gap-12'>

          <div className="grid grid-cols-3">
            <div className='flex flex-col col-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Brand Building</p>
              <p>
                Brand Building
                In todays world everyone is behind making their own brand and known brand is nothing but an asset for them and the whole valuation stand on the brand name. With lot of companies entering the Hospitality space promising huge gross turn over under their brand but at the same time a hotel loses this own identity and struggle to make this name in the market due to lack expertise and revenue generating methods.
              </p>
              <p>
                Prospera Hospitality help hotels to make their own brand by staying at the backend and bringing hotel brand in the front by delivering exceptional services which a hotel needs to build their own brand. So why tie up with hotel chains or any company who promises you to generate revenue for you through their brand.
                Build your own brand through Prospera Hospitality.
              </p>
            </div>
            <div className='col-span-1'>
              <div className='relative w-full h-56 justify-items-start'>
                <Image
                  src={'/img/digitalbrand.avif'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='absolute -top-16 object-cover h-66 w-66'
                />
              </div>
            </div>
          </div>



          <div className="grid grid-cols-3">
            <div className='col-span-1'>
              <div className='relative w-full h-full justify-items-end'>
                <Image
                  src={'/img/rev.avif'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[17rem] w-[18rem]'
                />
              </div>
            </div>
            <div className='flex flex-col col-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Revenue Management for Hotels</p>
              <p>
                Leave your revenue management task on us and focus on providing the best hospitality services to your guests.
              </p>
              <p>
                A robust revenue management strategy is indispensable to a hotel’s success. Our revenue management team, encompassing professionals with years of experience in revenue management, helps your hotel balance demand and inventory by forecasting the right price for the potential guests. Our data-driven approach helps you achieve the best commission efficiency while allowing your staff to manage the business, effectively and effortlessly.
              </p>
              <div className='w-full flex justify-center items-center'>
                <Button className='rounded-full bg-gray-200 text-[#800000] text-center' onClick={(e) => router.push(`/services/revenue-management`)}>Know more<ArrowRight /></Button>
              </div>
            </div>
          </div>



          <div className="grid grid-cols-3">
            <div className='flex flex-col col-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Social Media Marketing</p>
              <p>
                Gain a 360-degree visibility on social media
              </p>
              <p>
                As millennials are fast moving to the social media channels, hotels can’t afford to miss this opportunity to market their brand on these channels. We also find that a large chunk of the hotels has little or no idea about social media. You will be surprised to know most of your bookings could come from these social media channels. Helmed by social media professionals with years of experience in managing online brand presence at the best hotel marketing company in Mumbai, Prospera Hospitality can help you create and manage organic and paid social media campaigns across channels.
              </p>
              <div className='w-full flex justify-center items-center mt-4'>
                <Button className='rounded-full bg-gray-200 text-[#800000] text-center' onClick={(e) => router.push(`/services/digital-marketing`)}>Know more<ArrowRight /></Button>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/dm.jpg'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-64 w-64'
                />
              </div>
            </div>
          </div>




          <div className="grid grid-cols-3">
            <div className='col-span-1'>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/support.jpg'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[15rem] w-[20rem]'
                />
              </div>
            </div>
            <div className='flex flex-col col-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Reservation Management</p>
              <p>
                Focus on your serving your guests while we manage your front office.
              </p>
              <p>
                Prospera Hospitality provides virtual office services to clients who wish to outsource their front office administration to make their work easier. Under these services, we provide highly skilled staff with decent communication skills to handle reservation of hotel rooms and tables. The team also follows up with business leads via multiple communication channels such as calls, emails and social media.
              </p>
            </div>
          </div>



          <div className="grid grid-cols-3">
            <div className='flex flex-col col-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Hotel Website Development and Maintenance</p>
              <p>
                We can build websites that work on any device without compromising on the user experience.
              </p>
              <p>
                Your website is the face of your brand. Invest on it to reap more revenue.
              </p>

              <p>
                No doubt, the market is flooded with a plethora of website development agencies. But not all of them understand what constitutes an efficient website that works without hurting the experience of your potential guests. With years of experience of working in the hotel technology domain, our professionals at one of the best hotel marketing agencies in Mumbai, India can build websites that meet your expectations.
              </p>

              <p>
                Unlike most other website that stays isolated, away from the visibility of potential customers, we turn yours into a marketing tool that helps promote your brand like any other.
              </p>

              <p>
                We have an army of SEO specialists who regularly optimize your website to incorporate the latest SEO trends. This helps your brand maintain its consistency in visibility across channels.
              </p>

              <div className='w-full flex justify-center items-center mt-4'>
                <Button className='rounded-full bg-gray-200 text-[#800000] text-center' onClick={(e) => router.push(`/services/web-development`)}>Know more<ArrowRight /></Button>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/website.png'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[20rem] w-[24rem]'
                />
              </div>
            </div>
          </div>



          <div className="grid grid-cols-3">
            <div className='col-span-1'>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/photography.avif'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[18rem] w-[18rem]'
                />
              </div>
            </div>
            <div className='flex flex-col col-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Photography and Video Making</p>
              <p>
                Make your hotel look more vivid on your website with our media services.
              </p>
              <p>
                As per research, hotels have a 90% chance of getting a booking if the website has a pleasing visual content of the hotel. We have a team of professional photographers and videographers, who are skilled at architecture photography and videography. We shoot the property according to the image guidelines defined by OTAs and add a lot of creative value to ensure the images stand out from the competition. We do so by using high-end equipment that helps us achieve the desired result without compromising on quality.
              </p>
            </div>
          </div>


          <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center w-[50%] gap-2'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Hospitality Consultancy</p>
              <p className='text-gray-700'>If you’re interested in enhancing your hotels visibility into a best possible way, look no further. Check out our services and feel free to get in touch with any questions you may have about what we offer.</p>
              <div className='mt-1'>
                <Button className='bg-gray-300 text-[#800000] hover:drop-shadow-2xl' onClick={(e) => handleModal("All Services")}>Contact us</Button>
              </div>
            </div>

          </div>

        </div>





        <div className='flex flex-col md:hidden'>

          <div className="grid grid-rows-3 mb-10">
            <div className='row-span-1'>
              <div className='relative w-full h-56 justify-items-start'>
                <Image
                  src={'/img/digitalbrand.avif'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='absolute -top-16 object-cover h-66 w-66'
                />
              </div>
            </div>
            <div className='flex flex-col row-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Brand Building</p>
              <p>
                Brand Building
                In todays world everyone is behind making their own brand and known brand is nothing but an asset for them and the whole valuation stand on the brand name. With lot of companies entering the Hospitality space promising huge gross turn over under their brand but at the same time a hotel loses this own identity and struggle to make this name in the market due to lack expertise and revenue generating methods.
              </p>
              <p>
                Prospera Hospitality help hotels to make their own brand by staying at the backend and bringing hotel brand in the front by delivering exceptional services which a hotel needs to build their own brand. So why tie up with hotel chains or any company who promises you to generate revenue for you through their brand.
                Build your own brand through Prospera Hospitality.
              </p>
            </div>

          </div>


          <div className="grid grid-rows-3">
            <div className='row-span-1'>
              <div className='relative w-full h-full justify-items-end'>
                <Image
                  src={'/img/rev.avif'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[17rem] w-[18rem]'
                />
              </div>
            </div>
            <div className='flex flex-col row-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Revenue Management for Hotels</p>
              <p>
                Leave your revenue management task on us and focus on providing the best hospitality services to your guests.
              </p>
              <p>
                A robust revenue management strategy is indispensable to a hotel’s success. Our revenue management team, encompassing professionals with years of experience in revenue management, helps your hotel balance demand and inventory by forecasting the right price for the potential guests. Our data-driven approach helps you achieve the best commission efficiency while allowing your staff to manage the business, effectively and effortlessly.
              </p>
              <div className='w-full flex justify-center items-center'>
                <Button className='rounded-full bg-gray-200 text-[#800000] text-center' onClick={(e) => router.push(`/services/revenue-management`)}>Know more<ArrowRight /></Button>
              </div>
            </div>
          </div>


          <div className="grid grid-rows-3">
            <div className='row-span-1'>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/dm.jpg'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-64 w-64'
                />
              </div>
            </div>
            <div className='flex flex-col row-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Social Media Marketing</p>
              <p>
                Gain a 360-degree visibility on social media
              </p>
              <p>
                As millennials are fast moving to the social media channels, hotels can’t afford to miss this opportunity to market their brand on these channels. We also find that a large chunk of the hotels has little or no idea about social media. You will be surprised to know most of your bookings could come from these social media channels. Helmed by social media professionals with years of experience in managing online brand presence at the best hotel marketing company in Mumbai, Prospera Hospitality can help you create and manage organic and paid social media campaigns across channels.
              </p>
              <div className='w-full flex justify-center items-center mt-4'>
                <Button className='rounded-full bg-gray-200 text-[#800000] text-center' onClick={(e) => router.push(`/services/digital-marketing`)}>Know more<ArrowRight /></Button>
              </div>
            </div>

          </div>



          <div className="flex flex-col gap-2 my-10">
            <div className=''>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/support.jpg'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[15rem] w-[20rem]'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Reservation Management</p>
              <p>
                Focus on your serving your guests while we manage your front office.
              </p>
              <p>
                Prospera Hospitality provides virtual office services to clients who wish to outsource their front office administration to make their work easier. Under these services, we provide highly skilled staff with decent communication skills to handle reservation of hotel rooms and tables. The team also follows up with business leads via multiple communication channels such as calls, emails and social media.
              </p>
            </div>
          </div>




          <div className="grid grid-rows-3">
          <div className='row-span-1'>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/website.png'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[20rem] w-[24rem]'
                />
              </div>
            </div>
            <div className='flex flex-col row-span-2 gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Hotel Website Development and Maintenance</p>
              <p>
                We can build websites that work on any device without compromising on the user experience.
              </p>
              <p>
                Your website is the face of your brand. Invest on it to reap more revenue.
              </p>

              <p>
                No doubt, the market is flooded with a plethora of website development agencies. But not all of them understand what constitutes an efficient website that works without hurting the experience of your potential guests. With years of experience of working in the hotel technology domain, our professionals at one of the best hotel marketing agencies in Mumbai, India can build websites that meet your expectations.
              </p>

              <p>
                Unlike most other website that stays isolated, away from the visibility of potential customers, we turn yours into a marketing tool that helps promote your brand like any other.
              </p>

              <p>
                We have an army of SEO specialists who regularly optimize your website to incorporate the latest SEO trends. This helps your brand maintain its consistency in visibility across channels.
              </p>

              <div className='w-full flex justify-center items-center mt-4'>
                <Button className='rounded-full bg-gray-200 text-[#800000] text-center' onClick={(e) => router.push(`/services/web-development`)}>Know more<ArrowRight /></Button>
              </div>
            </div>

          </div>





          <div className="flex flex-col gap-2 my-10">
            <div className=''>
              <div className='relative w-full h-full justify-items-center'>
                <Image
                  src={'/img/photography.avif'}
                  alt='image'
                  height={1000}
                  width={1000}
                  className='object-fill h-[18rem] w-[18rem]'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 text-gray-700'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Photography and Video Making</p>
              <p>
                Make your hotel look more vivid on your website with our media services.
              </p>
              <p>
                As per research, hotels have a 90% chance of getting a booking if the website has a pleasing visual content of the hotel. We have a team of professional photographers and videographers, who are skilled at architecture photography and videography. We shoot the property according to the image guidelines defined by OTAs and add a lot of creative value to ensure the images stand out from the competition. We do so by using high-end equipment that helps us achieve the desired result without compromising on quality.
              </p>
            </div>
          </div>


          <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center w-full gap-2'>
              <p className='text-center font-semibold text-2xl text-[#800000]'>Hospitality Consultancy</p>
              <p className='text-gray-700'>If you’re interested in enhancing your hotels visibility into a best possible way, look no further. Check out our services and feel free to get in touch with any questions you may have about what we offer.</p>
              <div className='mt-1'>
                <Button className='bg-gray-300 text-[#800000] hover:drop-shadow-2xl' onClick={(e) => handleModal("All Services")}>Contact us</Button>
              </div>
            </div>

          </div>

        </div>



      </div>

      <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked} />
    </div>
  )
}

export default OurServices