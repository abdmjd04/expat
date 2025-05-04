import React from "react";
import Button from "../ui/Button";
const ContactCTA = () => {
  return (
    <section className="py-16 bg-blue-600 text-white w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          {`Whether you're planning a move or looking for support in your new
          home, we're here to help every step of the way.`}
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 border-white"
          >
            Contact Us Today
          </Button>
          <Button
            href="/services"
            variant="outline"
            size="lg"
            className="border-white hover:bg-blue-700 text-white hover:text-black"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ContactCTA;
