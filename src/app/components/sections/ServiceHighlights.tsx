import React from 'react';
import { Map, Users, Activity } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import { motion } from 'framer-motion';
const ServiceCard = ({
  icon,
  title,
  description,
  linkText,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  delay?: number;
}) => {
  return <FadeIn delay={delay}>
      <motion.div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg" whileHover={{
      y: -5
    }} transition={{
      duration: 0.2
    }}>
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-flex mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button href="/services" variant="outline" size="sm">
          {linkText}
        </Button>
      </motion.div>
    </FadeIn>;
};
const ServiceHighlights = () => {
  return <section className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a unique combination of travel guidance, expat support, and
            health services to ensure your international journey is seamless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard icon={<Map size={24} />} title="Travel Guide Services" description="Expert travel planning, local insights, and customized itineraries to help you explore your new home." linkText="Explore Travel Services" delay={0.1} />
          <ServiceCard icon={<Users size={24} />} title="Expat Support" description="Comprehensive relocation assistance including visa guidance, housing help, and cultural orientation." linkText="See Support Options" delay={0.2} />
          <ServiceCard icon={<Activity size={24} />} title="Physiotherapy Services" description="Professional physiotherapy care for expats, available in-person or through online consultations." linkText="View Health Services" delay={0.3} />
        </div>
      </div>
    </section>;
};
export default ServiceHighlights;