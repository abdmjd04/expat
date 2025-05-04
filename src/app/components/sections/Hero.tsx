import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white w-full">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Your Complete{" "}
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="text-blue-600"
              >
                Expat
              </motion.span>{" "}
              Support Solution
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-xl text-gray-600 mb-8"
            >
              From travel guidance to physiotherapy services, we make your expat
              journey smoother and healthier.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button href="/services" size="lg">
                Explore Our Services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full md:w-1/2 h-112" // 👈 Make sure height is set
          >
            <Image
              fill
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Expat lifestyle"
              className="rounded-lg shadow-xl object-cover" // 👈 Removed w-full h-auto
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
