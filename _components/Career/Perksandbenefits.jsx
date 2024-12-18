import React from 'react'

const Svg = (props) => (
  <svg
    width={32}
    height={33}
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5625 14.875L15.5 0.25L24.4375 14.875H6.5625ZM24.4375 32.75C22.4062 32.75 20.68 32.0393 19.2586 30.618C17.8373 29.1967 17.1261 27.4698 17.125 25.4375C17.1239 23.4052 17.8351 21.6789 19.2586 20.2586C20.6821 18.8384 22.4084 18.1272 24.4375 18.125C26.4666 18.1228 28.1934 18.834 29.618 20.2586C31.0426 21.6832 31.7533 23.4095 31.75 25.4375C31.7467 27.4655 31.0361 29.1923 29.618 30.618C28.1999 32.0437 26.4731 32.7543 24.4375 32.75ZM0.875 31.9375V18.9375H13.875V31.9375H0.875ZM24.4375 29.5C25.575 29.5 26.5365 29.1073 27.3219 28.3219C28.1073 27.5365 28.5 26.575 28.5 25.4375C28.5 24.3 28.1073 23.3385 27.3219 22.5531C26.5365 21.7677 25.575 21.375 24.4375 21.375C23.3 21.375 22.3385 21.7677 21.5531 22.5531C20.7677 23.3385 20.375 24.3 20.375 25.4375C20.375 26.575 20.7677 27.5365 21.5531 28.3219C22.3385 29.1073 23.3 29.5 24.4375 29.5ZM4.125 28.6875H10.625V22.1875H4.125V28.6875ZM12.3313 11.625H18.6687L15.5 6.50625L12.3313 11.625Z"
      fill="#FF0000"
    />
  </svg>
);

const Perksandbenefits = () => {

    const choosedata = [
      {
        key: "1",
        svg: (<>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M4.958 6h4.084M4.958 7.604h4.084M6.708 6c.389.097 1.167.438 1.167 1.458c0 1.75-2.334 1.75-2.334 1.75s1.167 1.021 2.917 1.459"/><path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"/></g></svg>
        </>),
        heading: "Competitive Salary",
        description: "We offer fair compensation with opportunities for growth and performance-based recognition."
      },
      {
        key: "2",
        svg: (<>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"/></g></svg>
        </>),
        heading: "Flexible Work Schedules",
        description: "Enjoy flexible hours and remote work options to balance your personal and professional life."
      },
      {
        key: "3",
        svg: (<>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"/><path fill="currentColor" d="m8.962 19.379l.472-.583zM12 5.574l-.548.512a.75.75 0 0 0 1.096 0zm3.038 13.805l.473.582zM12 21v-.75zm-9.348-7.318a.75.75 0 1 0 1.283-.776zm3.885 2.489a.75.75 0 1 0-1.074 1.046zM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315c1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318zM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647c1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071c-1.324 1.689-3.016 3.232-4.466 4.408zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71c-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083c1.568.614 2.836 2.41 2.836 5.314zM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789zm-10.63-5.89C3.187 11.67 2.75 10.455 2.75 9.318h-1.5c0 1.512.576 3 1.402 4.364zm5.498 5.89a34 34 0 0 1-2.897-2.625l-1.074 1.046a35 35 0 0 0 3.026 2.744z"/></g></svg>
        </>),
        heading: "Health Benefits",
        description: "Comprehensive health insurance and wellness programs to keep you physically and mentally fit."
      },
      {
        key: "4",
        svg: (<>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 32"><path fill="currentColor" d="M8 4v4H4V4zM2 2v8h8V2zm16 5v4h-4V7zm-6-2v8h8V5zM8 16v4H4v-4zm-6-2v8h8v-8z"/><path fill="currentColor" d="M22 10v6h-6v6h-6v8h20V10Zm-4 8h4v4h-4Zm-2 10h-4v-4h4Zm6 0h-4v-4h4Zm6 0h-4v-4h4Zm0-6h-4v-4h4Zm-4-6v-4h4v4Z"/></svg>
        </>),
        heading: "Development Programs",
        description: "Access training, certifications, and mentorship to grow your skills and advance your career."
      },
    ];
  
  

  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="flex flex-col justify-center items-center lg:w-[80%] w-[90%] gap-16">

        <div className='bg-white py-8'>
          <div className='w-[95%] m-auto'>
            <div className="flex justify-center items-center">
              <div className=" inline-block text-center">
                <h2 className="text-center font-bold text-2xl lg:text-3xl text-gray-600">
                  Why Choose Us
                </h2>
                <div className="border-2 w-full rounded-full mt-1 border-themeColor"></div>
              </div>
            </div>

            <h3 className='w-full lg:w-[60%] m-auto text-center mt-8 text-gray-500'>Discover Unmatched Ticketing Solutions Tailored for Your Corporate Needs, Providing Seamless
              Access to Flights, Trains, and More with Exceptional Support and Great Value</h3>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
              {choosedata && choosedata.map((e, i) => (
                <div key={i} className='border px-3 py-6 rounded-xl border-gray-300 bg-white hover:shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] hover:scale-105 transition-transform duration-300'>
                  <div className=' flex flex-col justify-start gap-7 items-center'>
                    <div className='flex justify-center items-center text-[#800000]'>
                      {e.svg}
                    </div>
                    <div className='font-bold text-gray-600 text-lg'>
                      <p>{e.heading}</p>
                    </div>
                  </div>
                  <div className='text-center text-gray-500 mt-3'>
                    <p>{e.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Perksandbenefits