"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useState } from "react";

export default function Accordian() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-10">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <Accordion>
                {faqData.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        aria-label={faq.question}
                        title={
                            <span
                                className={`${
                                    openIndex === index ? "text-[#800000]" : "text-inherit"
                                }`}
                            >
                                {faq.question}
                            </span>
                        }
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    >
                        <p className="text-gray-500 text-base">{faq.answer}</p>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}


const faqData = [
    {
        question: "What is revenue management, and how can it benefit my hotel?",
        answer:
            "Revenue management involves using data analysis and market insights to optimize pricing and inventory to maximize revenue. By implementing effective revenue management strategies, your hotel can increase bookings, improve occupancy rates, and enhance overall profitability.",
    },
    {
        question: "How do I choose the right package for my hotel?",
        answer:
            "Consider your hotel’s current needs, goals, and budget. If you're just starting, the Basic Package may be ideal. If you're looking for more advanced strategies and tools, the Standard or Premium Packages might be more suitable. Our team is also available to provide recommendations based on your specific situation.",
    },
    {
        question: "Are there any long-term contracts required?",
        answer:
            "We offer flexible month-to-month plans, allowing you to choose the package that best suits your needs without being locked into a long-term contract.",
    },
    {
        question: "What kind of support can I expect?",
        answer:
            "Support varies by package:- Basic Package: Standard email support- Standard Package: Priority email support with faster response times- Premium Package: 24/7 dedicated customer support for immediate assistance.",
    },
    {
        question: "Can I switch packages later?",
        answer:
            "Yes! You can upgrade or downgrade your package at any time based on your hotel’s evolving needs. Just contact our support team, and they will assist you with the process.",
    },
    {
        question: "What are the add-on services, and how do they work?",
        answer:
            "Our add-ons include:- Social Media Management: Tailored strategies to boost engagement and brand awareness- SEO Optimization: Techniques to improve your website's search engine ranking and visibility- Email Marketing Campaigns: Targeted campaigns to reach past and potential guests effectively.You can select any of these add-ons when you sign up for a package or anytime during your subscription.",
    },
    {
        question: "How do I get started?",
        answer:
            'Getting started is easy! Simply choose the package that suits your needs and click the "Get Started" button. You can fill out a contact form, and our team will reach out to guide you through the onboarding process.',
    },
    {
        question: "Can I see a demo of your services?",
        answer:
            "Absolutely! We offer demos to showcase our services and how they can benefit your hotel. Please contact us to schedule a personalized demo at your convenience.",
    },
];