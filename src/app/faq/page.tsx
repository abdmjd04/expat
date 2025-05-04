"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
type FAQItem = {
  question: string;
  answer: string;
  category: "relocation" | "physiotherapy" | "travel" | "general";
};
const faqs: FAQItem[] = [
  {
    question: "What services do you offer for expats?",
    answer:
      "We provide a comprehensive range of services for expats including travel guidance, visa and residency assistance, housing support, local orientation, and physiotherapy services. Our goal is to make your transition to a new country as smooth as possible by addressing both practical and health-related needs.",
    category: "general",
  },
  {
    question: "How far in advance should I start planning my relocation?",
    answer:
      "Ideally, you should begin planning your relocation 3-6 months before your intended move date. This allows sufficient time to research visa requirements, arrange housing, organize shipping, and address other logistical matters. For more complex relocations or moves with families, starting even earlier (6-12 months) can be beneficial.",
    category: "relocation",
  },
  {
    question: "What documents do I need for a residency visa?",
    answer:
      "Required documents vary by country, but typically include a valid passport, proof of income or financial means, health insurance, criminal record check, and proof of accommodation. We provide detailed guidance specific to your destination country and visa type during our consultation sessions.",
    category: "relocation",
  },
  {
    question: "Can you help with finding temporary accommodation?",
    answer:
      "Yes, we can assist with finding both short-term and long-term accommodation options. We provide recommendations based on your budget, location preferences, and specific needs, and can help you navigate rental agreements and local housing practices.",
    category: "relocation",
  },
  {
    question: "What can I expect during my first physiotherapy session?",
    answer:
      "Your first session will include a comprehensive assessment of your condition, medical history review, physical examination, and initial treatment if appropriate. We'll discuss your goals and develop a personalized treatment plan. The session typically lasts 60 minutes, and you should wear comfortable clothing that allows for movement and examination of the relevant areas.",
    category: "physiotherapy",
  },
  {
    question: "Do you offer online physiotherapy consultations?",
    answer:
      "Yes, we provide online physiotherapy consultations for clients who prefer remote sessions or are unable to attend in-person appointments. These sessions include assessment, guided exercises, self-treatment techniques, and progress monitoring. Our telehealth platform is secure and easy to use.",
    category: "physiotherapy",
  },
  {
    question: "How many physiotherapy sessions will I need?",
    answer:
      "The number of sessions varies depending on your specific condition, its severity, and how your body responds to treatment. After your initial assessment, we'll provide an estimated treatment plan. Some clients see improvement in 3-4 sessions, while more complex conditions may require longer treatment periods. We regularly reassess and adjust your treatment plan as needed.",
    category: "physiotherapy",
  },
  {
    question: "What's the average cost of living in Portugal?",
    answer:
      "The cost of living in Portugal varies by region but is generally lower than in Northern European countries or the US. In Lisbon, a single person might need approximately €1,000-1,500 per month (excluding rent), while smaller cities could be 20-30% less expensive. Rent for a one-bedroom apartment ranges from €500-900 in Lisbon and €400-700 in smaller cities. We provide detailed cost breakdowns specific to your destination city during our consultations.",
    category: "relocation",
  },
  {
    question:
      "Can you help with planning day trips or longer travel itineraries?",
    answer:
      "Absolutely! We create customized travel itineraries based on your interests, timeframe, and budget. This can include day trips from your base location or more extensive travel plans. Our recommendations include transportation options, must-see attractions, hidden local gems, dining suggestions, and practical tips to enhance your experience.",
    category: "travel",
  },
  {
    question: "What insurance do I need as an expat?",
    answer:
      "Most expats need health insurance at minimum, which is often a requirement for residency visas. Depending on your situation, you might also consider property insurance, liability insurance, and travel insurance. Some countries have mandatory insurance requirements for residents. We can provide guidance on insurance options specific to your destination country and personal circumstances.",
    category: "relocation",
  },
];
const FAQAccordion = ({
  item,
  isOpen,
  toggleAccordion,
}: {
  item: FAQItem;
  isOpen: boolean;
  toggleAccordion: () => void;
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left px-4"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{item.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 px-4">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};
const FAQ = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const toggleAccordion = (index: number) => {
    setOpenItemId(openItemId === index ? null : index);
  };
  const filteredFAQs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory("all")}
              >
                All Questions
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === "relocation"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory("relocation")}
              >
                Relocation
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === "physiotherapy"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory("physiotherapy")}
              >
                Physiotherapy
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === "travel"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory("travel")}
              >
                Travel
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === "general"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory("general")}
              >
                General
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md">
            {filteredFAQs.map((faq, index) => (
              <FAQAccordion
                key={index}
                item={faq}
                isOpen={openItemId === index}
                toggleAccordion={() => toggleAccordion(index)}
              />
            ))}
          </div>
          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-4">
              {`If you couldn't find the answer you were looking for, please don't
              hesitate to reach out directly. We're here to help with any
              questions about our services.`}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
