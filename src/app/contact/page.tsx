import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
const Contact = () => {
  return <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a service</option>
                    <option value="travel">Travel Guide Services</option>
                    <option value="expat">Expat Support</option>
                    <option value="physio">Physiotherapy Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Office Address</h3>
                      <p className="text-gray-600">
                        123 Expat Street
                        <br />
                        City Center, 10000
                        <br />
                        Country
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Phone & WhatsApp</h3>
                      <p className="text-gray-600">
                        +1 234 567 890
                        <br />
                        Monday-Friday: 9am-5pm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">
                        info@expatwell.com
                        <br />
                        support@expatwell.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-blue-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-medium">Online Consultations</h3>
                      <p className="text-gray-600">
                        Available via Zoom or Skype
                        <br />
                        Book through our online calendar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Instagram className="h-6 w-6 text-gray-700" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Facebook className="h-6 w-6 text-gray-700" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Twitter className="h-6 w-6 text-gray-700" />
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <Youtube className="h-6 w-6 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                Google Maps would be embedded here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;