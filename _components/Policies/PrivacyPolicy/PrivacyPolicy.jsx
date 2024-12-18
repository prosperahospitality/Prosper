import React from 'react'
import Image from 'next/image'
import IMAGES from '@/public/index'

const PrivacyPolicy = () => {

    return (
        <div className='mt-16'>
            <div className=''>
                <div className="text-2xl text-[#800000] text-center font-extralight mt-4 md:text-2xl lg:text-4xl lg:font-bold">
                    {'Privacy Policy'}
                </div>
                <div className='mt-10'>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <p className="text-base mb-3 font-semibold text-[#800000]">
                                {"Effective Date: 14-12-2022"}
                            </p>
                            <p className="text-base mb-3 font-semibold text-[#800000]">
                                {"Last Updated: 14-12-2022"}
                            </p>
                            <p className="text-base leading-relaxed">
                                {"At Prosperaa Hospitality, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you engage with our services. By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our services."}
                            </p>
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"1. Introduction"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"This Privacy Policy explains how Prosperaa Hospitality (“we,” “us,” or “our”) handles personal information that you provide to us through our website, services, or third-party platforms. This policy is applicable to users, clients, and visitors (“you” or “your”)."}
                            </p>
                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"2. Information We Collect"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"We may collect the following types of information:"}
                            </p>
                            <div>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"2.1 Personal Information"}
                                </p>
                                <p className="text-base leading-relaxed mt-2">
                                    {"Information that identifies you as an individual, including but not limited to:"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li className='font-semibold'>{`Name`}</li>
                                    <li className='font-semibold'>{`Email Address`}</li>
                                    <li className='font-semibold'>{`Phone Number`}</li>
                                    <li className='font-semibold'>{`Billing and Shipping Address`}</li>
                                    <li className='font-semibold'>{`Payment Information (e.g., credit/debit card details)`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"2.2 Hotel Information"}
                                </p>
                                <p className="text-base leading-relaxed mt-2">
                                    {"If you are a client, we may collect details about your hotel property, such as:"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Hotel name, address, and contact details.`}</li>
                                    <li>{`Room descriptions, images, and pricing.`}</li>
                                    <li>{`Policies related to booking, cancellation, and refunds.`}</li>
                                </ul>
                            </div>


                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"2.3 Automatically Collected Information"}
                                </p>
                                <p className="text-base leading-relaxed mt-2">
                                    {"When you interact with our website or services, we may automatically collect certain data, such as:"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`IP address, browser type, and operating system.`}</li>
                                    <li>{`Pages viewed, links clicked, and other usage data.`}</li>
                                    <li>{`Cookies and similar tracking technologies (refer to Section 6 for more details).`}</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"3. How We Use Your Information"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"The information we collect is used for the following purposes:"}
                            </p>
                            <div>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"3.1 Service Delivery"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`To provide hospitality services, including property listing, website development, and marketing.`}</li>
                                    <li>{`To process payments and manage service contracts.`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"3.2 Communication"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`To respond to inquiries or customer support requests.`}</li>
                                    <li>{`To send updates about our services, offers, or changes to policies.`}</li>
                                </ul>
                            </div>


                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"3.3 Marketing"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`To promote our services through newsletters, advertisements, and campaigns (you may opt-out of marketing emails at any time).`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"3.4 Compliance"}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`To comply with legal obligations and resolve disputes.`}</li>
                                    <li>{`To ensure adherence to third-party platform policies.`}</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"4. Sharing of Information"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"We may share your information under the following circumstances:"}
                            </p>
                            <div>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"4.1 With Third-Party Platforms"}
                                </p>
                                <p className="text-base leading-relaxed mt-2">{`If you engage us for property listing services, your hotel information will be shared with third-party booking platforms (e.g., Booking.com, Expedia).`}</p>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"4.2 Service Providers"}
                                </p>
                                <p className="text-base leading-relaxed mt-2">{`We may share information with third-party vendors that support our services, such as:`}</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Website hosting providers.`}</li>
                                    <li>{`Payment processors.`}</li>
                                    <li>{`Marketing agencies.`}</li>
                                </ul>
                            </div>


                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"4.3 Legal Compliance"}
                                </p>
                                <p className="text-base leading-relaxed mt-2">{`We may disclose your information to:`}</p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li>{`Comply with legal obligations or court orders.`}</li>
                                    <li>{`Protect the rights and safety of Prosperaa Hospitality or others.`}</li>
                                </ul>
                            </div>

                            <div className='mt-3'>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {"4.4 Business Transfers"}
                                </p>
                                <p className="text-base leading-relaxed mt-2">
                                    {`In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.`}
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"5. Data Retention"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"We will retain your information for as long as necessary to:"}
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                <li>{`Fulfill the purposes outlined in this policy.`}</li>
                                <li>{`Comply with legal and regulatory obligations.`}</li>
                            </ul>
                            <p className="text-base leading-relaxed">
                                {"If you request deletion of your data, we will take reasonable steps to securely delete it unless we are required to retain it for legal purposes."}
                            </p>
                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"6. Cookies and Tracking Technologies"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"We use cookies and similar technologies to improve your experience on our website."}
                            </p>
                            <div>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {`6.1 Types of Cookies We Use`}
                                </p>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-2'>
                                    <li><span className='font-semibold'>Essential Cookies:</span>{` Necessary for the functionality of our website.`}</li>
                                    <li><span className='font-semibold'>Performance Cookies:</span>{` Collect anonymous usage data to improve website performance.`}</li>
                                    <li><span className='font-semibold'>Marketing Cookies:</span>{` Used to deliver targeted advertisements.`}</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-base leading-relaxed font-semibold mt-2">
                                    {`6.2 Managing Cookies`}
                                </p>
                                <p className="text-base leading-relaxed mt-2">{`You can control or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.`}</p>
                            </div>

                        </div>
                    </div>



                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"7. Security of Your Information"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"We implement robust security measures to protect your information from unauthorized access, loss, or misuse. These measures include:"}
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='flex flex-col gap-2 mt-4'>
                                <li>{`Encryption of sensitive data.`}</li>
                                <li>{`Regular security audits and monitoring.`}</li>
                                <li>{`Restricted access to personal data.`}</li>
                            </ul>
                            <p className="text-base leading-relaxed mt-2">
                                {"However, no online platform is completely secure, and we cannot guarantee absolute protection of your information."}
                            </p>
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"8. Your Rights"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"You have the following rights regarding your personal information:"}
                            </p>
                            <div>
                                <p className='text-base leading-relaxed font-semibold mt-2'>{`8.1 Access and Correction`}</p>
                                <p className='text-base leading-relaxed mt-2'>{`You may request access to the information we hold about you and correct inaccuracies.`}</p>
                            </div>
                            <div>
                                <p className='text-base leading-relaxed font-semibold mt-2'>{`8.2 Data Deletion`}</p>
                                <p className='text-base leading-relaxed mt-2'>{`You can request the deletion of your personal information, subject to our legal obligations.`}</p>
                            </div>
                            <div>
                                <p className='text-base leading-relaxed font-semibold mt-2'>{`8.3 Opt-Out`}</p>
                                <p className='text-base leading-relaxed mt-2'>{`You may opt-out of receiving marketing communications by clicking the “Unsubscribe” link in our emails or contacting us directly.`}</p>
                            </div>
                            <div>
                                <p className='text-base leading-relaxed font-semibold mt-2'>{`8.4 Restriction of Processing`}</p>
                                <p className='text-base leading-relaxed mt-2'>{`You can request restrictions on how we process your data.`}</p>
                                <p className='text-base leading-relaxed mt-2'>{`To exercise any of these rights, please contact us at support@prosperaa.com.`}</p>
                            </div>

                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"9. Third-Party Links"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"Our website or services may include links to third-party websites. We are not responsible for the privacy practices or content of these external sites. Please review their privacy policies before engaging with them."}
                            </p>
                           
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"10. International Data Transfers"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"If you are accessing our services from outside [Your Country], your information may be transferred to and processed in India or other countries where we operate. By using our services, you consent to this transfer."}
                            </p>
                           
                        </div>
                    </div>

                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"11. Changes to This Privacy Policy"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"We reserve the right to update this Privacy Policy as needed. Changes will be posted on our website with an updated “Last Updated” date. Your continued use of our services constitutes acceptance of the revised policy."}
                            </p>
                           
                        </div>
                    </div>


                    <div className="w-[90%] lg:w-[80%] m-auto">
                        <div className="mt-5 mb-4">
                            <h3 className="text-xl mb-3 font-semibold text-[#800000]">
                                {"12. Contact Us"}
                            </h3>
                            <p className="text-base leading-relaxed">
                                {"For any questions, concerns, or requests related to this Privacy Policy, please contact us:"}
                            </p>
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

export default PrivacyPolicy