import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public/index'

const TearmsAndConditions = () => {

    return (
        <div className='mt-16'>
            <div className=''>
                <div className="text-2xl text-[#800000] text-center font-extralight mt-4 md:text-2xl lg:text-4xl lg:font-bold">
                    {'Terms and Condtiton'}
                </div>
                <div className='mt-10'>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"1. Introduction"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"Welcome to Prosperaa Hospitality. By accessing or using our services, you agree to be bound by these Terms and Conditions. These terms govern the relationship between Prosperaa Hospitality (“we,” “us,” or “our”) and you, the user or client (“you” or “your”), regarding our services, including but not limited to hotel listings on booking platforms, online visibility enhancements, and custom website development. If you do not agree to these terms, please refrain from using our services."}
                            </p>
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"2. Definitions"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"For the purposes of these Terms and Conditions, the following definitions apply:"}
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                <li>{`“Prosperaa Hospitality” refers to the business providing hospitality-related services, including online visibility solutions and website development.`}</li>
                                <li>{`“Client” refers to any individual, business, or organization engaging Prosperaa Hospitality’s services.`}</li>
                                <li>{`“Services” include hotel property listing on booking platforms, custom website design and development, digital marketing services, and related consultancy.`}</li>
                                <li>{`“Third-party platforms” refer to external booking sites like Booking.com, Expedia, Agoda, etc.`}</li>
                                <li>{`“Deliverables” include any tangible results provided by us, such as a completed website or successfully listed hotel property.`}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"3. Scope of Services"}
                            </h3>
                            <div>
                                <div>
                                    <p className='font-semibold'>3.1 Hotel Listing and Online Visibility Services</p>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                        <li>{`We assist clients in listing their hotel properties on third-party booking platforms to increase visibility and attract more bookings.`}</li>
                                        <li>
                                            This service includes:
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                                <li>{`Creation and optimization of property profiles on booking platforms.`}</li>
                                                <li>{`Implementation of strategies to enhance rankings and visibility on those platforms.`}</li>
                                                <li>{`Periodic recommendations to improve the property's performance.`}</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div>
                                        <p className='font-semibold mt-3'>Limitations</p>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                            <li>{`Prosperaa Hospitality is not responsible for guest cancellations, refunds, or disputes arising on third-party booking platforms. These are subject to the terms and policies of the respective platforms.`}</li>
                                            <li>{`We cannot guarantee specific booking numbers as performance depends on multiple external factors such as seasonal trends, market demand, and competition.`}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <p className='font-semibold'>3.2 Custom Website Development Services</p>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                        <li>{`We provide tailored website design and development for hotels to establish or improve their online presence.`}</li>
                                        <li>
                                            Our website services include:
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                                <li>{`Custom design to reflect the branding of the hotel.`}</li>
                                                <li>{`Integration of booking engines (if required).`}</li>
                                                <li>{`Basic SEO to improve search engine rankings.`}</li>
                                                <li>{`Responsive design for optimal performance on all devices.`}</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div>
                                        <p className='font-semibold mt-3'>Post-Development Support:</p>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                            <li>{`Maintenance and updates for websites will be available under a separate maintenance agreement, if requested by the client.`}</li>
                                            <li>{`Any bugs or issues identified post-launch will be fixed for a limited time as per the agreement. Any additional changes or enhancements will be chargeable.`}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <p className='font-semibold'>3.3 Marketing and Consultancy</p>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                        <li>{`We offer consultancy on online marketing strategies to increase bookings.`}</li>
                                        <li>{`Digital marketing services, such as social media campaigns or PPC ads, will be outlined in a separate service contract.`}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"4. Client Responsibilities"}
                            </h3>
                            <div>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"4.1 Accurate Information"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`The client is solely responsible for providing accurate and up-to-date information regarding their hotel property, such as:`}
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                            <li>{`Room descriptions.`}</li>
                                            <li>{`Pricing and availability.`}</li>
                                            <li>{`Policies (e.g., cancellation and refund terms).`}</li>
                                        </ul>
                                    </li>
                                    <li>{`Prosperaa Hospitality is not liable for any discrepancies or inaccuracies caused by incorrect information provided by the client.`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"4.2 Compliance"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`The client agrees to comply with:`}
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                            <li>{`Applicable laws and regulations regarding hotel operations.`}</li>
                                            <li>{`Terms and policies of third-party platforms.`}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"4.3 Content Submission"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`The client must provide the necessary content, such as images, videos, and written descriptions, in a timely manner. All content must be free of copyright violations.`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className='font-semibold'>Example:</p>
                                <p className='mt-2'>{`If the client fails to provide high-quality images for their hotel, Prosperaa Hospitality will not be liable for suboptimal results in visibility or engagement.`}</p>
                            </div>

                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"5. Fees and Payment Terms"}
                            </h3>

                            <div>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"5.1 Service Fees"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Fees for our services will be agreed upon in a formal service contract or proposal.`}</li>
                                    <li>{`Fees may vary based on the scope of work, including the size of the website or the number of booking platforms.`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"5.2 Payment Terms"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Payments are to be made as per the invoice or service agreement. Failure to pay within the stipulated timeline may result in:`}

                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                            <li>
                                                {`Suspension of ongoing services.`}
                                            </li>
                                            <li>
                                                {`Additional late payment fees.`}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"5.3 Refund Policy"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Refunds will not be issued for services already delivered or partially completed.`}

                                        <ul className='flex flex-col gap-2 mt-2'>
                                            <li className='font-semibold'>
                                                {`Example:`}
                                            </li>
                                            <li>
                                                {`If a website is 50% complete and the client cancels the agreement, the client is responsible for paying for the completed portion.`}
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"6. Intellectual Property Rights"}
                            </h3>
                            <div>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"6.1 Website Ownership"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Ownership of the custom website, including code and design, will be transferred to the client after full payment. Until then, Prosperaa Hospitality retains ownership rights.`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"6.2 Limited License"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`The client grants Prosperaa Hospitality the right to use hotel-related content for the purpose of delivering services.`}</li>
                                </ul>
                                <p className='font-semibold mt-2'>Example:</p>
                                <p className='mt-2'>Photos of hotel rooms provided by the client may be used in listings and website design.</p>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"6.3 Portfolio Use"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Prosperaa Hospitality reserves the right to showcase completed projects (e.g., websites) in our portfolio or marketing materials, unless expressly prohibited by the client.`}</li>
                                </ul>

                            </div>

                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"7. Liability Disclaimer"}
                            </h3>
                            <div>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"7.1 Limited Liability"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`“Prosperaa Hospitality is not responsible for losses resulting from:`}
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                            <li>{`Downtime or technical issues with third-party booking platforms.`}</li>
                                            <li>{`Hacking, data breaches, or other cybersecurity issues affecting the client’s website or booking platforms.`}</li>
                                            <li>{`Any delays caused by client actions, such as late submission of required materials.`}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold">
                                    {"7.2 No Guarantee of Results"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`While we strive to improve visibility and bookings, results may vary based on factors outside our control, including market conditions, seasonality, and client cooperation.`}</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"8. Termination of Agreement"}
                            </h3>

                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                <li>{`Either party may terminate the agreement with a written notice of 20 days.`}</li>
                                <li>{`If termination occurs before the completion of services, the client will be liable for payment of all work completed up to the termination date.`}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"9. Confidentiality"}
                            </h3>

                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                <li>{`Both parties agree to keep sensitive business information confidential. This includes, but is not limited to, pricing, strategies, and customer data.`}</li>
                                <li>{`Prosperaa Hospitality will not share client data with third parties without explicit permission, except as required by law.`}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"10. Governing Law and Dispute Resolution"}
                            </h3>

                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                <li>{`These Terms and Conditions shall be governed by the laws of Maharashtra.`}</li>
                                <li>{`Any disputes will be resolved amicably through negotiation. If no resolution is reached, disputes will be handled in the courts of India.`}</li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"11. Amendments to Terms"}
                            </h3>
                            <p>{`We reserve the right to update these Terms and Conditions as needed. Clients will be notified of major changes, and continued use of our services indicates acceptance of the updated terms.`}</p>
                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"12. Contact Information"}
                            </h3>
                            <ul className='flex flex-col gap-2 mt-4'>
                                <li><span className='font-semibold'>Email:</span>{` prosperaahospitality@gmail.com`}</li>
                                <li><span className='font-semibold'>Phone:</span>{` +91 7977383452`}</li>
                                <li><span className='font-semibold'>Address:</span>{` Prosperaa Hospitality, Office No.1006 Juhi Niharika Mirage, 274, Kopra Rd, Sector 10, Kharghar, Navi Mumbai, Maharashtra 410210.`}</li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>



        </div>
    )
}

export default TearmsAndConditions