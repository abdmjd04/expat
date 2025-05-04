"use client";

import Image from "next/image";
import sarah from "../../../..//public/assets/images/sarah.avif";
import michael from "../../../..//public/assets/images/michael.avif";
import aisha from "../../../..//public/assets/images/aisha.avif";

const testimonials = [
  {
    id: 1,
    quote:
      "ExpatWell made my relocation process so much easier. Their visa guidance and housing support saved me countless hours and stress.",
    author: "Sarah Thompson",
    location: "UK → Spain",
    image: sarah,
  },
  {
    id: 2,
    quote:
      "The physiotherapy services were exactly what I needed after my move. Professional, convenient, and they really understand expat health challenges.",
    author: "Michael Rodriguez",
    location: "USA → Portugal",
    image: michael,
  },
  {
    id: 3,
    quote:
      "Their travel guides helped me discover hidden gems in my new city that I would have never found on my own. Truly made me feel at home.",
    author: "Aisha Patel",
    location: "India → Germany",
    image: aisha,
  },
];
const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from expats who have transformed their international experience
            with our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="pt-12 text-center">
                <p className="text-gray-600 italic mb-4">
                  {`"${testimonial.quote}"`}
                </p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
