import React from 'react';
const Newsletter = () => {
  return <section className="py-12 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              Get Your Free Relocation Guide
            </h3>
            <p className="text-gray-600">
              Sign up for our newsletter and receive a complimentary relocation
              checklist plus monthly tips for expats.
            </p>
          </div>
          <form className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>;
};
export default Newsletter;