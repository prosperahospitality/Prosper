'use client'
import React, { useState } from 'react';
import { Button } from "@nextui-org/button";
import Image from 'next/image';
import IMAGES from '@/public';
import ContactModal from '@/_components/ContactModal';

const Website = () => {


  const [modalClicked, setModalClicked] = useState(false);

  const [serviceClicked, setServiceClicked] = useState(false);

  const handleModal = (service) => {
    setModalClicked(true)
    setServiceClicked(service)
  }

  return (
    <div className='w-full h-full overflow-hidden'>
      {/* Top Rotated Background */}
      <div className='h-56 bg-[#800000] transform rotate-[10deg] translate-y-[185px] -translate-x-[56px] lg:transform lg:rotate-[7deg] lg:translate-y-32 lg:-translate-x-16 w-[110%]'></div>

      {/* Main Content */}
      <div className='w-full flex justify-center items-center bg-[#800000] pt-8 lg:p-0'>
        <div className='lg:w-[80%] w-[90%] flex justify-center items-center'>
          <div className='flex flex-col lg:flex-row gap-10 w-full justify-center items-center'>

            {/* Image 1 with Paragraph */}
            <div className='flex flex-col items-center w-full lg:w-[23%] z-10'>
              <div className='relative w-full h-[250px]'>
                <Image
                  alt="web1"
                  src={IMAGES.web1}
                  fill
                  quality={100}
                  className='object-cover shadow-xl'
                />
              </div>
              <div className="mt-4 text-left text-white">
                <p className='text-lg font-medium' style={{ fontFamily: 'Times New Roman, serif' }}>Custom Website Design</p>
                <p className='text-sm mt-4'>
                  Your website is the face of your brand. Our team of skilled designers works with you to create a custom, visually stunning website that reflects your brand&apos;s identity and speaks to your target audience.
                </p>
                <div className='w-full justify-center items-center flex mt-4'>
                  <Button className='bg-gray-200 text-[#800000] font-bold' onClick={(e) => handleModal("Website Development")}>Get in touch</Button>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className='flex flex-col items-start w-full lg:w-[23%] lg:mt-24 mt-10 z-10'>
              <div className='relative w-full h-[250px]'>
                <Image
                  alt="web2"
                  src={IMAGES.web2}
                  fill
                  quality={100}
                  className='object-cover shadow-xl'
                />
              </div>
              <div className="mt-4 text-left text-white">
                <p className='text-lg font-medium' style={{ fontFamily: 'Times New Roman, serif' }}>Mobile Optimization</p>
                <p className='text-sm mt-4'>
                  With the majority of users accessing websites via mobile devices, we prioritize mobile optimization to ensure your site looks great and functions smoothly on smartphones and tablets.
                </p>
                <div className='w-full justify-center items-center flex mt-4'>
                  <Button className='bg-gray-200 text-[#800000] font-bold' onClick={(e) => handleModal("Website Development")}>Get in touch</Button>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className='flex flex-col items-center w-full lg:w-[23%] z-10 mt-10 lg:mt-0'>
              <div className='relative w-full h-[250px]'>
                <Image
                  alt="web3"
                  src={IMAGES.web3}
                  fill
                  quality={100}
                  className='object-cover shadow-xl'
                />
              </div>
              <div className="mt-4 text-left text-white">
                <p className='text-lg font-medium' style={{ fontFamily: 'Times New Roman, serif' }}>Content Management Systems</p>
                <p className='text-sm mt-4'>
                  We build websites using robust CMS platforms, allowing you to easily manage content, update pages, and add new features without needing technical knowledge.
                </p>
                <div className='w-full justify-center items-center flex mt-4'>
                  <Button className='bg-gray-200 text-[#800000] font-bold' onClick={(e) => handleModal("Website Development")}>Get in touch</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Rotated Background */}
      <div className='h-56 bg-[#800000] transform -rotate-[7deg] -translate-x-8 -translate-y-32 w-[110%]'></div>

      <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked} />
    </div>
  );
}

export default Website;
