"use client";
import React, { useRef, useState } from "react";
import {
  FacebookBlack,
  TwitterIcon,
  LinkedinBlack,
  InstagramBlack,
} from "@/_components/Icons";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";

const ContacUsComp = () => {
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});
  const form = useRef();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateNumber = (number) => {
    const numberRegex = /^\d{10}$/;
    return numberRegex.test(number);
  };

  const validateForm = () => {
    const formElements = form.current.elements;
    const email = formElements.email.value;
    const number = formElements.number.value;
    const name = formElements.name.value;
    const organization = formElements.organization.value;

    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!number) {
      newErrors.number = "Phone number is required.";
    } else if (!validateNumber(number)) {
      newErrors.number = "Please enter a valid 10-digit phone number.";
    }

    if (!organization)
      newErrors.organization = "Organization name is required.";

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("ABC::::::::>", form)

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //     form.current,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       form.current.reset();
    //       setIsSending(false);
    //       setErrors({}); // Clear errors after successful submission
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //       setIsSending(false);
    //     }
    //   );


    const abc = async () => {

      const formValues = {
        name: form.current["name"].value,
        email: form.current["email"].value,
        number: form.current["number"].value,
        organization: form.current["organization"].value,
      };

      const response1 = await fetch('/api/enquiries/serviceenquiry', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operation: "serviceContactt",
          formValues: formValues,
        }),
      });

      const data1 = await response1.json();

      const response = await fetch('/api/send-email', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operation: "contactUs",
          formValues: formValues,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({

          title: "Form submitted successfully!",

          text: "Team connect with you soon",

          icon: "success"

        }).then((result) => {


        });
        form.current.reset();
        setIsSending(false);
      } else {
        alert(`Error: ${data.message}`);
        setIsSending(false);
      }
    }

    abc()

  };



  // const [isSending, setIsSending] = useState(false);

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setIsSending(true);

  //   emailjs
  //     .sendForm(
  //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //       form.current,
  //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //         form.current.reset();
  //         setIsSending(false);
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <>


      <div className="p-10 bg-red-100 w-full h-full">
        <div className="w-full lg:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full lg:h-60">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
            className="bg-white rounded-2xl flex justify-center items-center flex-col p-5 gap-5"
          >
            <h2 className="text-themeColor text-xl font-semibold">+91- 70217 19028</h2>
            <p className="text-gray-500 text-center">
              For all inquiries regarding to booking call us any time at the
              above number
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
            className="bg-white rounded-2xl flex justify-center items-center flex-col p-5 gap-5"
          >
            <h2 className="text-themeColor text-xl font-semibold">
              prosperaahospitality@gmail.com
            </h2>
            <p className="text-gray-500 text-center">
              For all inquiries regarding to booking email us any time at the
              above email address
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionVariants}
            className="bg-white rounded-2xl flex justify-center items-center flex-col p-5 gap-5"
          >
            <h2 className="text-themeColor text-xl font-semibold">Prospera Hospitality</h2>
            <p className="text-gray-500 text-center">
              Office No.1006 Juhi Niharika Mirage, 274, Kopra Rd, Sector 10, Kharghar, Navi Mumbai, Maharashtra 410210.
            </p>
          </motion.div>
        </div>
      </div>





      <div className="w-screen h-[50rem] md:h-[30rem] flex justify-center items-center flex-col md:flex-row my-10">
        <div className="w-full h-full md:absolute flex justify-center md:justify-end items-center">
          <div className="w-full md:w-[73%] h-[20rem] xl:h-[25rem] z-0">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6194193504343!2d73.07391898077525!3d19.03648483616072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c20d3e4bdf33%3A0x6233e94401a34a5b!2sJuhi%20Niharika%20Mirage%20Kharghar!5e0!3m2!1sen!2sin!4v1729331570281!5m2!1sen!2sin"
              className="w-full h-full "
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-screen h-[30rem] bg-white ">
          <div className="w-[95%] h-full flex mx-auto ">
            <div className="w-[20%] md:w-[3rem] h-full place-content-center z-20">
              <div className="bg-transparent h-[75%] md:h-[30rem] rounded-l-lg place-content-center ml-6">
                <div className="w-fit space-y-10 mx-auto">
                  <div className="flex justify-center items-center p-1 bg-gray-400 rounded-full border border-gray-400">
                    <a href="#">
                      <div className="flex justify-center items-center size-8 p-2 ">
                        <FacebookBlack fill="black" />
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-center items-center p-1 bg-gray-400 rounded-full border border-gray-400">
                    <a href="#">
                      <div className="flex justify-center items-center size-8 p-2  ">
                        <TwitterIcon fill="black" />
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-center items-center p-1 bg-gray-400 rounded-full border border-gray-400">
                    <a href="#">
                      <div className="flex justify-center items-center size-8 p-2   ">
                        <InstagramBlack fill="black" />
                      </div>
                    </a>
                  </div>
                  <div className="flex justify-center items-center p-1 bg-gray-400 rounded-full border border-gray-400">
                    <a href="#">
                      <div className="flex justify-center items-center size-8 p-2   ">
                        <LinkedinBlack fill="black" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[95%] h-full place-content-center z-10">
              <div className={Object.keys(errors).length > 0 ? "flex justify-end md:justify-center items-center bg-white border shadow-2xl w-full h-full md:w-[20rem] py-5 md:py-0 md:h-[35rem] rounded-lg" : "flex justify-end md:justify-center items-center bg-white border shadow-2xl w-full h-full md:w-[20rem] py-5 md:py-0 md:h-[30rem] rounded-lg"}>
                <div className="w-[80%] mx-auto pt-8">
                  <h1 className="text-2xl font-extralight text-black pb-5">
                    Let’s Grow your Business!
                  </h1>
                  <h6 className="text-sm font-extralight text-black">
                    Please fill the details to schedule an appointment
                  </h6>
                  <div className="pt-4 space-y-4">

                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="pt-4 space-y-4"
                    >
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          isRequired
                        // classNames={{
                        //   label: "text-black/50 dark:text-white/90",
                        //   input: [
                        //     "bg-transparent",
                        //     "text-gray-500 dark:text-white/90",
                        //     "placeholder:text-gray-50 dark:placeholder:text-gray-400",
                        //     "text-xs",
                        //   ],
                        //   innerWrapper: "bg-transparent",
                        //   inputWrapper: [
                        //     "border",
                        //     "border-gray-300",
                        //     "bg-gray-400",
                        //     "dark:bg-gray-200",
                        //     "backdrop-blur-xl",
                        //     "backdrop-saturate-200",
                        //     "hover:bg-default-200/70",
                        //     "dark:hover:bg-default/70",
                        //     "group-data-[focus=true]:bg-default-200/50",
                        //     "dark:group-data-[focus=true]:bg-default/60",
                        //     "!cursor-text",
                        //   ],
                        // }}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          isRequired
                        // classNames={{
                        //   label: "text-black/50 dark:text-white/90",
                        //   input: [
                        //     "bg-transparent",
                        //     "text-gray-500 dark:text-white/90",
                        //     "placeholder:text-gray-500 dark:placeholder:text-gray-400",
                        //     "text-xs",
                        //   ],
                        //   innerWrapper: "bg-transparent",
                        //   inputWrapper: [
                        //     "border",
                        //     "border-gray-300",
                        //     "bg-gray-400",
                        //     "dark:bg-gray-200",
                        //     "backdrop-blur-xl",
                        //     "backdrop-saturate-200",
                        //     "hover:bg-default-200/70",
                        //     "dark:hover:bg-default/70",
                        //     "group-data-[focus=true]:bg-default-200/50",
                        //     "dark:group-data-[focus=true]:bg-default/60",
                        //     "!cursor-text",
                        //   ],
                        // }}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="text"
                          name="number"
                          placeholder="Phone Number"
                          isRequired
                        // classNames={{
                        //   label: "text-black/50 dark:text-white/90",
                        //   input: [
                        //     "bg-transparent",
                        //     "text-gray-500 dark:text-white/90",
                        //     "placeholder:text-gray-500 dark:placeholder:text-gray-400",
                        //     "text-xs",
                        //   ],
                        //   innerWrapper: "bg-transparent",
                        //   inputWrapper: [
                        //     "border",
                        //     "border-gray-300",
                        //     "bg-gray-400",
                        //     "dark:bg-gray-200",
                        //     "backdrop-blur-xl",
                        //     "backdrop-saturate-200",
                        //     "hover:bg-default-200/70",
                        //     "dark:hover:bg-default/70",
                        //     "group-data-[focus=true]:bg-default-200/50",
                        //     "dark:group-data-[focus=true]:bg-default/60",
                        //     "!cursor-text",
                        //   ],
                        // }}
                        />
                        {errors.number && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.number}
                          </p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="text"
                          placeholder="Hotel Name"
                          name="organization"

                        // classNames={{
                        //   label: "text-black/50 dark:text-white/90",
                        //   input: [
                        //     "bg-transparent",
                        //     "text-gray-500 dark:text-white/90",
                        //     "placeholder:text-gray-500 dark:placeholder:text-gray-400",
                        //     "text-xs",
                        //   ],
                        //   innerWrapper: "bg-transparent",
                        //   inputWrapper: [
                        //     "border",
                        //     "border-gray-300",
                        //     "bg-gray-400",
                        //     "dark:bg-gray-200",
                        //     "backdrop-blur-xl",
                        //     "backdrop-saturate-200",
                        //     "hover:bg-default-200/70",
                        //     "dark:hover:bg-default/70",
                        //     "group-data-[focus=true]:bg-default-200/50",
                        //     "dark:group-data-[focus=true]:bg-default/60",
                        //     "!cursor-text",
                        //   ],
                        // }}
                        />
                        {errors.organization && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.organization}
                          </p>
                        )}
                      </div>

                      <div className="py-5 flex justify-center items-center">
                        <Button
                          type="submit"
                          variant="shadow"
                          className="py-4 px-6 bg-[#800000] text-white"
                        >
                          {isSending ? "Sending..." : "Get in Touch"}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      {/* <div className='w-full h-[25rem]'>

    <div className='absolute w-full h-[28rem] bg-black/10 text-center flex flex-col justify-center items-center'>
      <h1 className='text-7xl text-white'>Contact Us</h1>
    </div>
    <Image
          alt="Mountains"
          src={IMAGES.Contactus}
          width={800} // replace with actual width of your image
          height={600} // replace with actual height of your image
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          />
    </div> */}
      <ContacUsComp />
    </>
  )
}

export default ContactUs;