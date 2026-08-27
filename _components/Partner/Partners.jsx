'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import IMAGES from '@/public';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '@/app/styles/roomsnew.css';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Undo2 } from 'lucide-react';
import 'swiper/css/pagination';

const Partners = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const onboardedProperties = [
      {
      name: "Blue Mormon Jungle Holiday Resort",
      images: [
        IMAGES.mormon1,
        IMAGES.mormon2,
        IMAGES.mormon3,
        IMAGES.mormon4,
        IMAGES.mormon5,
        IMAGES.mormon6,
        IMAGES.mormon7,
        IMAGES.mormon8,
        IMAGES.mormon9,
        IMAGES.mormon10,
        IMAGES.mormon11,
        IMAGES.mormon12,
      ],
      location: "Post Karkudi, Taluka Khed, near Palkhewadi, Bhimashankar, Maharashtra 410509",
      onboardedDate: "2025-03-14",
      description:
        "The Blue Mormon Jungle Holiday Resort is a nature getaway located 10 kilometers from Maharashtra's Bhimashankar Temple. It offers rustic cottages, local food, and firefly treks within the Sahyadri mountains."
    },
    {
      name: "Natraj Holiday Resort - Bhimashankar",
      images: [
        IMAGES.natraj1,
        IMAGES.natraj2,
        IMAGES.natraj3,
        IMAGES.natraj4,
        IMAGES.natraj5,
        IMAGES.natraj6,
        IMAGES.natraj7,
        IMAGES.natraj8,
      ],
      location: "SH 112, Bhimashankar Temple Road, Nigdale, Bhimashaankar, Maharashtra 410509",
      onboardedDate: "2025-01-09",
      description:
        "Natraj Holiday Resort is a casual, budget-friendly retreat located 15 minutes away from the sacred Bhimashankar Jyotirlinga Temple. Surrounded by green forests and mountains, it features simple AC and non-AC rooms, a pure vegetarian restaurant, and complimentary parking."
    },
    {
      name: "Neelam Hills Resort - Bhimashankar",
      images: [
        IMAGES.neelam1,
        IMAGES.neelam2,
        IMAGES.neelam3,
        IMAGES.neelam4,
        IMAGES.neelam5,
        IMAGES.neelam6,
        IMAGES.neelam7,
        IMAGES.neelam8,
        IMAGES.neelam9,
      ],
      location: "Talagarh, Tale Ghar, Maharashtra 410509",
      onboardedDate: "2025-02-06",
      description:
        "Neelam Hills Resort is a modest hilltop retreat in Taleghar, located about 15 km from the Bhimashankar Jyotirlinga temple. Surrounded by the scenic Western Ghats, it provides simple, functional rooms and open seating, serving as a peaceful base for pilgrims and nature lovers exploring the region."
    },
    {
      name: "GG Farm",
      images: [
        IMAGES.ggfarm1,
        IMAGES.ggfarm2,
        IMAGES.ggfarm3,
        IMAGES.ggfarm4,
        IMAGES.ggfarm5,
      ],
      location: "Karjat, Maharashtra",
      onboardedDate: "2025-04-20",
      description:
        "GG Farm in Karjat is a peaceful retreat surrounded by nature, offering a rustic farm stay experience with modern comforts, ideal for a relaxing weekend getaway."
    },
    {
      name: "Vinit Farm",
      images: [
        IMAGES.vinitfarm1,
        IMAGES.vinitfarm2,
        IMAGES.vinitfarm3,
        IMAGES.vinitfarm4,
        IMAGES.vinitfarm5,
        IMAGES.vinitfarm6,
        IMAGES.vinitfarm7,
        IMAGES.vinitfarm8,
      ],
      location: "Karjat, Maharashtra",
      onboardedDate: "2025-04-22",
      description:
        "Vinit Farm offers a serene countryside escape in Karjat, complete with lush greenery, farm-to-table meals, and cozy accommodations perfect for families and groups."
    },
    {
      name: "Malvankar's Homestay",
      images: [
        IMAGES.malvankars1,
        IMAGES.malvankars2,
        IMAGES.malvankars3,
        IMAGES.malvankars4,
        IMAGES.malvankars5,
        IMAGES.malvankars6,
        IMAGES.malvankars7,
        IMAGES.malvankars8,
      ],
      location: "Chivla Beach Road, Malvan, Maharashtra",
      onboardedDate: "2025-04-25",
      description:
        "Located just minutes from Chivla Beach, Malvankar's Homestay offers 6 spacious rooms, including 4 air-conditioned options. Guests can enjoy authentic Malvani cuisine, a peaceful atmosphere, and easy access to water sports and beachside fun."
    },
    {
      name: "Hotel Kinnara",
      images: [
        IMAGES.kinnara1,
        IMAGES.kinnara2,
        IMAGES.kinnara3,
        IMAGES.kinnara4,
        IMAGES.kinnara5,
        IMAGES.kinnara6,
        IMAGES.kinnara7,
        IMAGES.kinnara8,
        IMAGES.kinnara9,
        IMAGES.kinnara10,
        IMAGES.kinnara11,
        IMAGES.kinnara12,
        IMAGES.kinnara13,
        IMAGES.kinnara14,
      ],
      location: "Helipad Road, Near Apil Field, Namsai, Arunachal Pradesh",
      onboardedDate: "2025-04-25",
      description:
        "Nestled in the heart of Namsai, Hotel Kinnara offers 26 elegantly designed rooms and suites, each equipped with modern amenities such as free Wi-Fi, air conditioning, and private balconies. Guests can indulge in fine dining at the on-site restaurant, unwind in the sophisticated lounge and bar, or utilize the conference room for business meetings. The hotel's central location provides easy access to Namsai's attractions, making it an ideal choice for both leisure and business travelers."
    }

  ];

  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
  //   },
  // };



  return (
    <div className='w-full h-full flex justify-center items-center mt-32'>
      <div className='w-[95%] lg:w-[80%] h-full'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {onboardedProperties.map((property, index) => (
            <div key={index} className="border rounded-lg shadow-md overflow-hidden bg-white">
              <div className="relative w-full h-64 overflow-hidden rounded-md">
                {/* Main Image */}
                <Image
                  src={property.images[0]}
                  alt={property.name}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />

                {/* Overlay Thumbnails */}
                {property.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 z-40 flex gap-2 bg-white/80 backdrop-blur-sm p-1 rounded shadow-md">
                    {property.images.slice(1, 4).map((img, i) => (
                      <div key={i} className="relative">
                        <Image
                          src={img}
                          width={48}
                          height={48}
                          alt={`Gallery ${i + 1}`}
                          className="w-12 h-12 object-cover rounded"
                        />
                      </div>
                    ))}
                    {property.images.length > 4 && (
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-200 text-xs font-semibold rounded flex-col">
                        <p>+{property.images.length - 4}</p>
                        <p className='underline cursor-pointer text-blue-800' onClick={onOpen}>Show</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#800000] mb-2">{property.name}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Location:</strong> {property.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Onboarded:</strong>{" "}
                  {/* {new Date(property.onboardedDate).toLocaleDateString()} */}
                </p>
                <p className="text-sm text-gray-700 mt-2">{property.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              
                <ModalHeader className="flex flex-col gap-1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  
                    <Undo2 />

                  <span>{"Gallery"}</span>
                  
                </div>
              </ModalHeader>
              <ModalBody>
                 <Swiper
                  key="swipers"
                  pagination={{
                    type: 'fraction',
                  }}
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs, Pagination]}
                  className="mySwiper2"
                >

                  <SwiperSlide>
                    <Image
                      src={IMAGES.kinnara1}
                      alt={`Room Image`}
                      width={800}
                      height={800}
                      className="object-fill rounded-lg"
                    // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={IMAGES.kinnara2}
                      alt={`Room Image`}
                      width={800}
                      height={800}
                      className="object-fill rounded-lg"
                    // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={IMAGES.kinnara3}
                      alt={`Room Image`}
                      width={800}
                      height={800}
                      className="object-fill rounded-lg"
                    // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={IMAGES.kinnara4}
                      alt={`Room Image`}
                      width={800}
                      height={800}
                      className="object-fill rounded-lg"
                    // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={IMAGES.kinnara5}
                      alt={`Room Image`}
                      width={800}
                      height={800}
                      className="object-fill rounded-lg"
                    // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={IMAGES.kinnara6}
                      alt={`Room Image`}
                      width={800}
                      height={800}
                      className="object-fill rounded-lg"
                    // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={IMAGES.kinnara7}
                      alt={`Room Image`}
                      width={800}
                      height={800}
                      className="object-fill rounded-lg"
                    // priority={index === 0}
                    />
                  </SwiperSlide>

                </Swiper>


                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  observer={true}
                  observeParents={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                  breakpoints={{
                    // When window width is >= 768px
                    768: {
                      slidesPerView: 4, // Number of slides for medium screens (tablets)
                    },
                  }}
                >

                  <SwiperSlide className="rounded-xl">
                    <Image
                      src={IMAGES.kinnara1}
                      alt={`Thumbnail`}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl"
                      // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-xl">
                    <Image
                      src={IMAGES.kinnara2}
                      alt={`Thumbnail`}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl"
                      // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-xl">
                    <Image
                      src={IMAGES.kinnara3}
                      alt={`Thumbnail`}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl"
                      // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-xl">
                    <Image
                      src={IMAGES.kinnara4}
                      alt={`Thumbnail`}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl"
                      // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-xl">
                    <Image
                      src={IMAGES.kinnara5}
                      alt={`Thumbnail`}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl"
                      // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-xl">
                    <Image
                      src={IMAGES.kinnara6}
                      alt={`Thumbnail`}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl"
                      // priority={index === 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide className="rounded-xl">
                    <Image
                      src={IMAGES.kinnara7}
                      alt={`Thumbnail`}
                      width={200}
                      height={200}
                      className="object-cover rounded-xl"
                      // priority={index === 0}
                    />
                  </SwiperSlide>

                </Swiper>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Partners
