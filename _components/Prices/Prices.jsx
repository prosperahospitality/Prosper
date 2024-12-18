"use client";
import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { Check } from 'lucide-react';
import ContactModal from '@/_components/ContactModal';

const Prices = () => {

  const [modalClicked, setModalClicked] = useState(false);

  const [serviceClicked, setServiceClicked] = useState('Standard');

  const handleModal = (service) => {
    setModalClicked(true)
    setServiceClicked(service)
  }

  const [planClick, setPlanClick] = useState("Standard")

  const handlePriceClick = (plan) => {
    setPlanClick(plan)
  }

  const handleChoosePlan = (plan) => {
    setPlanClick(plan)
    handleModal(plan)
  }

  const plans = [
    {
      name: 'Basic',
      plan: (
        <>
          <div className='text-gray-600'>
            <p className='text-sm mt-4 font-medium'>Everything you need for your Hotel Business.</p>
          </div>
          <div className='text-[#800000] flex flex-col gap-3 mt-7'>
            <p className='text-sm line-through text-gray-500 font-semibold'> &#8377; <span>6,999/-</span> </p>
            <p className='text-4xl font-bold'> &#8377; 4,999/-</p>
          </div>
          <div className='mt-8'>
            <Button color="default" fullWidth radius='none' className='bg-[#800000] text-white font-semibold py-3' onClick={(e) => handleChoosePlan("Basic")}>
              Choose Your Plan
            </Button>
          </div>
        </>
      ),
      services: [
        'Online Listing',
        'Booking Management',
        'Direct Check-Ins',
        '24/7 Customer Support',
      ],
    },
    {
      name: 'Standard',
      plan: (
        <>
          <div className='text-gray-600'>
            <p className='text-sm mt-4 font-medium'>Everything you need for your Hotel Business.</p>
          </div>
          <div className='text-[#800000] flex flex-col gap-3 mt-7'>
            <p className='text-sm line-through text-gray-500 font-semibold'> &#8377; <span>25,000/-</span> </p>
            <p className='text-4xl font-bold'> &#8377; 19,999/-</p>
          </div>
          <div className='mt-8'>
            <Button color="default" fullWidth radius='none' className='bg-[#800000] text-white font-semibold py-3' onClick={(e) => handleChoosePlan("Standard")}>
              Choose Your Plan
            </Button>
          </div>
        </>
      ),
      services: [
        'All Basic Package Features',
        'Enhanced Online Visibility',
        'Monthly Performance Report',
        'Custom Website Development',
        '24/7 Customer Support'
      ],
    },
    {
      name: 'Premium',
      plan: (
        <>
          <div className='text-gray-600'>
            <p className='text-sm mt-4 font-medium'>Everything you need for your Hotel Business.</p>
          </div>
          <div className='text-[#800000] flex flex-col gap-3 mt-7'>
            <p className='text-sm line-through text-gray-500 font-semibold'> &#8377; <span>45,000/-</span> </p>
            <p className='text-4xl font-bold'> &#8377; 29,999/-</p>
          </div>
          <div className='mt-8'>
            <Button color="default" fullWidth radius='none' className='bg-[#800000] text-white font-semibold py-3' onClick={(e) => handleChoosePlan("Premium")}>
              Choose Your Plan
            </Button>
          </div>
        </>
      ),
      services: [
        'All Standard Package Features',
        'Comprehensive Revenue Management',
        'Digital Marketing Support',
        'Monthly Strategy Report',
        '24/7 Dedicated Customer Support'
      ],
    },
  ];


  return (
    <section className="w-[90%] lg:w-[80%] m-auto py-10">
      <div className='flex flex-col gap-5 text-center'>
        <h1 className="text-4xl font-bold text-[#800000]">
          Choose your right plan.
        </h1>
        <p className='text-gray-600 text-lg'>Flexible solutions designed for your hotel’s success.</p>
      </div>

      <div className="my-10 flex lg:grid lg:grid-cols-3 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-5 lg:gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex-shrink-0  border rounded-lg shadow-lg overflow-hidden snap-start ${plan.name === planClick ? 'border-[#800000] relative' : 'border-gray-100'}`}
            onClick={(e) => handlePriceClick(plan.name)}
          >
            {/* "Most Popular" banner for the Standard plan */}
            {plan.name === 'Standard' && (
              <div className='absolute top-0 left-0 w-full bg-[#800000] text-white text-center py-1 font-bold'>
                Most Popular
              </div>
            )}
            <div className="p-6 mt-8">
              <h2 className="text-2xl font-semibold text-[#800000] mb-2">{plan.name}</h2>
              <div className='mb-6'>
                {plan.plan}
              </div>
              <hr className='my-6' />
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                {plan.services.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-[#0c8e00] size-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <ContactModal modalClicked={modalClicked} onCloseClicked={(val) => setModalClicked(!val)} serviceClicked={serviceClicked} />

    </section>
  );
};

export default Prices;
