"use client";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button, Divider } from "@nextui-org/react";
import { siteConfig } from "@/config/siteconfig";
import { Link } from "@nextui-org/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import IMAGES from "@/public/index";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function Footer() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const iconComponents = {
    Facebook: <Facebook className="size-5" />,
    Instagram: <Instagram className="size-5" />,
    Linkedin: <Linkedin className="size-5" />,
    Youtube: <Youtube className="size-5" />,
  };

  const socialLinks = [
    { href: "https://facebook.com", icon: "Facebook" },
    { href: "https://linkedin.com", icon: "Linkedin" },
    { href: "https://youtube.com", icon: "Youtube" },
    { href: "https://instagram.com", icon: "Instagram" },
  ];

  const pathname = usePathname();

  const itemClasses = {
    base: "w-full",
    title: "text-base xl:text-2xl text-white/60",
    trigger: "px-2 py-0 data-[hover=true]:bg-primary-100 rounded-lg h-14 2xl:h-20 flex items-center",
    indicator: "text-small xl:text-large text-white/60",
    content: "text-small xl:text-medium px-2",
  };

  const handleSubmit = async () => {

    console.log("Data", email, fullName, phoneNumber)

    const response1 = await fetch('/api/enquiries/serviceenquiry', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        operation: "serviceContact2",
        formValues: {
          name: fullName,
          email: email,
          number: phoneNumber,
        },
      }),
    });

    const data1 = await response1.json();

    const response = await axios.post("/api/send-email", {
      operation: "footercontact",
      name: fullName,
      email: email,
      number: phoneNumber
    })
    if (response.data.status === 200) {
      alert("Email sent and enquiry saved successfully")
      setFullName("");
      setEmail("");
      setPhoneNumber("");
    }

    // else if (response.data.status === 402) {
    //   Swal.fire({
    //     title: "Number must be exactly 10 digits and contain only numeric values",
    //     // text: "Team connect with you soon",
    //     icon: "success"
    //   });
    // }
    //     const whatsappMessage = `Hi, I am interested in your service*.

    // *My details are -* 

    //   *Name:* ${fullName},
    //   *Phone:* ${phoneNumber}, 
    //   *Email:* ${email}`;

    //     const whatsappURL = `https://wa.me/7738527031?text=${encodeURIComponent(
    //       whatsappMessage
    //     )}`;
    //     window.open(whatsappURL, "_blank");

    //     setFullName("");
    //     setEmail("");
    //     setPhoneNumber(0);
  };


  return (
    <>


      {/* <div className="w-[80%] mx-auto mb-16 mt-16">
       
        <div className="lg:hidden w-full mx-auto mt-4">
          <div className="mt-6 w-full mx-auto">
            <Accordion itemClasses={itemClasses} showDivider={true}>
              <AccordionItem
                key="1"
                aria-label="Turnaround"
                title="Why Choose Prospera ?"
                indicator={<Plus />}
              >
                Choose Prospera Hospitality for a seamless blend of strategic
                prowess, innovative web design and development, targeted digital
                marketing, and meticulous revenue management. With an adept team
                guiding every step, we craft comprehensive strategies tailored
                to your business goals. From thorough market research to
                captivating website creation, dynamic digital campaigns, and
                revenue optimization tactics, we deliver results driven
                solutions. Our holistic approach ensures your brand stands out
                amidst competition, maximizing revenue and guest satisfaction.
                Entrust Prospera Hospitality to elevate your business,
                leveraging expertise, and cutting edge techniques for
                unparalleled success in the dynamic hospitality industry.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Communicate"
                title="What is Brand Management and Why is it Important ?"
                indicator={<Plus />}
              >
                Brand management involves shaping a brand&apos;s image, perception,
                and reputation, crucial for differentiation, trust building, and
                revenue growth. Prospera Hospitality specializes in brand
                management, offering tailored solutions to enhance brand equity
                and visibility. Through strategic planning and innovative
                branding initiatives, Prospera helps businesses craft compelling
                narratives, engage with audiences effectively, and build
                enduring brand relationships. Partner with Prospera to fortify
                your brand&apos;s position and drive sustainable growth in today&apos;s
                competitive landscape
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Process"
                title="How Can Digital Marketing Enhance Brand Visibility ?"
                indicator={<Plus />}
              >
                Digital marketing utilizes online channels like social media,
                search engines, email, and content marketing to boost brand
                visibility and drive traffic. We at Prospera Hospitality
                specializes in crafting tailored strategies across these
                channels just for your product . From targeted social media
                campaigns to SEO and email marketing, Prospera ensures your
                brand stands out, driving sustained growth in the digital
                landscape.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Design"
                title="How Does Revenue Management Impact Brand Growth ?"
                indicator={<Plus />}
              >
                Revenue management optimizes pricing, distribution, and
                inventory to maximize profitability and brand value. Prospera
                Hospitality specializes in tailored strategies that align with
                market demand, driving sustainable growth and maintaining brand
                consistency. With meticulous analysis and strategic
                implementation, Prospera helps businesses unlock revenue
                potential, enhance customer satisfaction, and stay competitive.
                Partner with Prospera to optimize revenue and elevate your
                brand&apos;s performance
              </AccordionItem>
            </Accordion>
          </div>
        </div>


       
        <div className="hidden lg:block w-full">
          <div className="flex justify-between items-center bg-gray-100 rounded-xl">
            <div className="w-[70%] pl-8">
              <div className="text-7xl font-semibold text-[#800000]">40% 0ff</div>
              <div className="text-xl mt-3 font-medium  text-gray-600 gap-2"><span className="pr-2">This Diwali get</span><Button isIconOnly className="rounded-full bg-white h-8 w-5"><ArrowUpRight className="h-5" /></Button></div>
              <div className="flex flex-row justify-between">
                <div className="text-xl font-medium text-gray-600">on all services of Prospera Hospitality</div>
                <div className="text-sm content-end text-gray-400">Offer valid for limited period only* </div>
              </div>
            </div>
            <div className="w-[30%]">
              <Image
                alt='image'
                src={IMAGES.mandalaimg}
                width={600}
                height={600}
                className='object-scale-down w-[80%] h-[80%] mx-auto'
              />
            </div>

          </div>
        </div>
     

      
        <div className="block lg:hidden h-full w-full">
          <div className="relative  bg-gray-100 rounded-xl py-4 overflow-hidden w-full h-[40vh] flex justify-center items-end">

            <div className="absolute -top-24 -right-28 w-[100%]">
              <Image
                alt='image'
                src={IMAGES.mandalaimg}
                width={600}
                height={600}
                className='object-scale-down w-full h-full'
              />
            </div>

            <div className="w-full px-4">
              <div className="text-5xl font-semibold text-[#800000]">40% 0ff</div>
              <div className="text-md mt-3 font-medium  text-gray-600 flex items-center justify-start gap-2">
                <span className="pr-2">This Diwali get</span>
                  <Button isIconOnly variant="faded" className="rounded-full ">
                  <ArrowUpRight className="h-5" />
                  </Button>
                
              </div>
              <div className="text-md font-medium text-gray-600">on all services of Prospera Hospitality</div>
            </div>

          </div>
        </div>
    

       
        <div className="hidden lg:grid grid-cols-2 pt-4 gap-2">
          <div className="pr-12 mb-5">
            <h3 className="text-gray-500 font-semibold text-base">
              Why Choose Prospera ?
            </h3>
            <h6 className="text-gray-500 text-sm">
              Choose Prospera Hospitality for a seamless blend of strategic
              prowess, innovative web design and development, targeted digital
              marketing, and meticulous revenue management. With an adept team
              guiding every step, we craft comprehensive strategies tailored to
              your business goals. From thorough market research to captivating
              website creation, dynamic digital campaigns, and revenue
              optimization tactics, we deliver results driven solutions. Our
              holistic approach ensures your brand stands out amidst
              competition, maximizing revenue and guest satisfaction. Entrust
              Prospera Hospitality to elevate your business, leveraging
              expertise, and cutting edge techniques for unparalleled success in
              the dynamic hospitality industry.
            </h6>
          </div>
          <div className="pl-10">
            <h3 className="text-gray-500 font-semibold text-base">
              What is Brand Management and Why is it Important?
            </h3>
            <h6 className="text-gray-500 text-sm">
              Brand management involves shaping a brand&apos;s image, perception, and
              reputation, crucial for differentiation, trust building, and
              revenue growth. Prospera Hospitality specializes in brand
              management, offering tailored solutions to enhance brand equity
              and visibility. Through strategic planning and innovative branding
              initiatives, Prospera helps businesses craft compelling
              narratives, engage with audiences effectively, and build enduring
              brand relationships. Partner with Prospera to fortify your brand&apos;s
              position and drive sustainable growth in today&apos;s competitive
              landscape
            </h6>
          </div>
          <div className="pr-12 mb-5">
            <h3 className="text-gray-500 font-semibold text-base">
              How Can Digital Marketing Enhance Brand Visibility?
            </h3>
            <h6 className="text-gray-500 text-sm">
              Digital marketing utilizes online channels like social media,
              search engines, email, and content marketing to boost brand
              visibility and drive traffic. We at Prospera Hospitality
              specializes in crafting tailored strategies across these channels
              just for your product . From targeted social media campaigns to
              SEO and email marketing, Prospera ensures your brand stands out,
              driving sustained growth in the digital landscape.
            </h6>
          </div>
          <div className="pl-10">
            <h3 className="text-gray-500 font-semibold text-base">
              How Does Revenue Management Impact Brand Growth?
            </h3>
            <h6 className="text-gray-500 text-sm">
              Revenue management optimizes pricing, distribution, and inventory
              to maximize profitability and brand value. Prospera Hospitality
              specializes in tailored strategies that align with market demand,
              driving sustainable growth and maintaining brand consistency. With
              meticulous analysis and strategic implementation, Prospera helps
              businesses unlock revenue potential, enhance customer
              satisfaction, and stay competitive. Partner with Prospera to
              optimize revenue and elevate your brand&apos;s performance
            </h6>
          </div>
        </div>
      </div> */}

      <div className="w-full bg-white mb-7 mt-14">
        <div className="w-[90%] lg:w-[80%] mx-auto flex items-center justify-between py-2">
          <div className="md:flex items-center md:justify-between gap-4">
            <Link href="/" className="flex justify-center items-center gap-5">
              <img
                src={IMAGES.mainLogo}
                alt="prospera-logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[#800000] font-semibold leading-tight">
                  Prospera
                </span>
                <span className="font-semibold text-gray-400 leading-tight">
                  Hospitality
                </span>
              </div>
            </Link>

          </div>
          <div className="flex lg:mt-0 justify-between items-center gap-4 text-gray-500 ">

            <Link href="/contact-us" className="flex">
              <Button variant="shadow" color="default" className="bg-[#800000] text-white" radius="full" size="md">
                Let&apos;s Get Started
              </Button>
            </Link>

          </div>
        </div>
      </div>

      <footer className="w-full h-fit relative bg-gray-100 text-gray-500">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          {/* <Divider className="w-full" /> */}

          <div className="flex w-full mx-auto flex-col lg:flex-row py-5 text-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[0.25rem]">
              <div className="p-3 px-0 flex flex-col gap-3">
                <h4 className="font-semibold">Our Office</h4>
                <p className="text-gray-400 text-sm">
                  Office No.1006
                  Juhi Niharika Mirage, 274, Kopra Rd, Sector 10, Kharghar, Navi Mumbai, Maharashtra 410210.
                </p>
                <a href="https://maps.app.goo.gl/LQZzRHKRaVXkZrc59" target="_blank" rel="noopener noreferrer" className="font-semibold text-themeColor">
                  Locate Us
                </a>

              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold">Call us</h4>
                <p className="text-gray-400">
                  Request a quote or just chat about your next vacation
                </p>
                <p className="text-themeColor font-semibold">7021719016</p>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold">Write to us</h4>
                <p className="text-gray-400">
                  Be it an inquiry, feedback, or a simple suggestion.
                </p>
                <Link href="mailto:admin@prosperaahospitality.com" className="mt-1 text-themeColor font-semibold">
                  admin@prosperaahospitality.com
                </Link>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <p className="font-semibold">Connect with us:</p>
                <div className="flex space-x-4 mt-4 md:mt-0 text-themeColor ">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="bg-white text-[#800000] hover:text-white hover:bg-[#800000] p-2 rounded-full"
                    >
                      {iconComponents[link.icon]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full mx-auto flex-col lg:flex-row py-5 text-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[0.25rem]">
              <div className="p-3 px-0 flex flex-col gap-3">
                <h4 className="font-semibold">Sales</h4>
                <Link href="mailto:admin@prosperaahospitality.com" className="text-gray-400 text-sm">
                  admin@prosperaahospitality.com
                </Link>
                <p className="text-themeColor font-semibold">Phone no. - +91 70217 19016</p>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold">Support</h4>
                <Link href="mailto:admin@prosperaahospitality.com" className="text-gray-400 text-sm">
                  admin@prosperaahospitality.com
                </Link>
                <p className="text-themeColor font-semibold">Phone no. - +91 70217 19016</p>
              </div>

              <div className="px-0 lg:px-3 p-3 flex flex-col gap-3">
                <h4 className="font-semibold">Tech Support</h4>
                <Link href="mailto:admin@prosperaahospitality.com" className="text-gray-400 text-sm">
                  tech@prosperaahospitality.com
                </Link>
                <p className="text-themeColor font-semibold">Phone no. - +91 70217 19016</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex w-full mx-auto flex-col lg:flex-row py-5 lg:py-10 border-b-2 border-gray-300 gap-[0.75rem]">
              <div className="flex-1">
                <div className="w-full lg:w-[80%] flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold">
                    Keep traveling all year round!
                  </h2>
                  <p className="text-gray-600">
                    Subscribe to our newsletter to find travel inspiration in your
                    inbox.
                  </p>

                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="flex justify-between gap-5 flex-col lg:flex-row">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border flex-1 p-3 rounded-xl font-normal"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email ID"
                          className="border flex-1 p-3 rounded-xl font-normal"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between gap-5 flex-col lg:flex-row">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="border flex-1 p-3 rounded-xl font-normal"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="border flex-1 p-3 rounded-xl bg-[#800000] text-white font-medium"
                          onClick={() => handleSubmit()}
                        >
                          Get a call back!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-5 p-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 place-content-center">
                  {/* <div>
                  <h3 className="font-semibold mb-4">Main Links</h3>
                  <ul className="space-y-1 text-gray-600 flex flex-col">
                    {siteConfig.ServicesItems.map((item) => (
                      <div key={item.href}>
                        <Link
                          className={`link ${pathname === item.href
                            ? "text-primary font-extralight"
                            : "text-white font-extralight text-sm"
                            }`}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div> */}

                  <div>
                    <h3 className="font-semibold mb-4">Support</h3>
                    <ul className="space-y-1 text-gray-600 flex flex-col">
                      {siteConfig.navItems.map((item) => (
                        <div key={item.href}>
                          <Link
                            className={`link ${pathname === item.href
                              ? "text-[#800000] font-semibold"
                              : "text-gray-500 font-extralight text-sm"
                              }`}
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-1 text-gray-600 flex flex-col">
                      {siteConfig.PoliciesItems.map((item) => (
                        <div key={item.href}>
                          <Link
                            className={`link ${pathname === item.href
                              ? "text-[#800000] font-semibold"
                              : "text-gray-500 font-extralight text-sm"
                              }`}
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Divider className="w-full" /> */}
          <div className="w-full flex flex-col md:flex-row justify-between pt-4">
            <p className="mt-4 pb-10 text-sm text-gray-400 font-semibold">
              &copy; Copyright 2024. All Rights Reserved by Prospera Hospitality
              Pvt. Ltd.
            </p>
            <div className="flex gap-4 items-center">
              <Image
                src={IMAGES.isologo}
                alt="isologo"
                width={60}
                height={60}
                className="rounded-xl"
              />
              <p className="text-gray-400 font-semibold">An ISO certified Company</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
